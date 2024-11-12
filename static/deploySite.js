import fs from "fs-extra";
import path from "path";
import os from "os";
import shell from "shelljs";
function buildSshUrl(githubHost, organizationName, projectName, githubPort) {
    if (githubPort) {
        return `ssh://git@${githubHost}:${githubPort}/${organizationName}/${projectName}.git`;
    }
    return `git@${githubHost}:${organizationName}/${projectName}.git`;
}
function loadConfig(directory) {
    const configPath = path.join(directory, "config.json");
    if (!fs.existsSync(configPath)) {
        return {};
    }
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    return config;
}
export async function deploySite(directory) {
    if (!shell.which("git")) {
        throw new Error("Git not installed or on the PATH!");
    }
    const siteConfig = loadConfig(directory);
    const sourceRepoUrl = shell.exec("git remote get-url origin", { silent: true }).stdout.trim();
    const sourceBranch = process.env.CURRENT_BRANCH ?? shell.exec("git rev-parse --abbrev-ref HEAD", { silent: true }).stdout.trim();
    const organizationName = process.env.ORGANIZATION_NAME ?? siteConfig.organizationName;
    if (!organizationName) {
        throw new Error(`Missing project organization name. Did you forget to define "organizationName" in config? You may also export it via the ORGANIZATION_NAME environment variable.`);
    }
    const projectName = process.env.PROJECT_NAME ?? siteConfig.projectName;
    if (!projectName) {
        throw new Error(`Missing project name. Did you forget to define "projectName" in config? You may also export it via the PROJECT_NAME environment variable.`);
    }
    const isPullRequest = process.env.CI_PULL_REQUEST;
    if (isPullRequest) {
        shell.echo("Skipping deploy on a pull request.");
        shell.exit(0);
    }
    const isGitHubPagesOrganizationDeploy = projectName.includes(".github.io");
    if (isGitHubPagesOrganizationDeploy && !process.env.DEPLOYMENT_BRANCH && !siteConfig.deploymentBranch) {
        throw new Error(`For GitHub pages organization deployments, 'docusaurus deploy' does not assume anymore that 'master' is your default Git branch.
  Please provide the branch name to deploy to as an environment variable, for example DEPLOYMENT_BRANCH=main or DEPLOYMENT_BRANCH=master .
  You can also set the deploymentBranch property in docusaurus.config.js .`);
    }
    const deploymentBranch = process.env.DEPLOYMENT_BRANCH ?? siteConfig.deploymentBranch ?? "gh-pages";
    const githubHost = process.env.GITHUB_HOST ?? siteConfig.githubHost ?? "github.com";
    const githubPort = process.env.GITHUB_PORT ?? siteConfig.githubPort;
    const deploymentRepoURL = buildSshUrl(githubHost, organizationName, projectName, githubPort);
    const crossRepoPublish = !sourceRepoUrl.endsWith(`${organizationName}/${projectName}.git`);
    if (sourceBranch === deploymentBranch && !crossRepoPublish) {
        throw new Error(`You cannot deploy from this branch (${sourceBranch}).` +
            "\nYou will need to checkout to a different branch!");
    }
    const currentCommit = shell.exec("git rev-parse HEAD").stdout.trim();
    const runDeploy = async () => {
        const targetPath = await fs.mkdtemp(path.join(os.tmpdir(), `${projectName}-${deploymentBranch}`));
        shell.cd(targetPath);
        if (shell.exec(`git clone --depth 1 --branch ${deploymentBranch} ${deploymentRepoURL} "${targetPath}"`).code !==
            0) {
            shell.exec(`git clone --depth 1 ${deploymentRepoURL} "${targetPath}"`);
            shell.exec(`git checkout -b ${deploymentBranch}`);
        }
        shell.exec(`git rm -rf .`);
        await fs.writeFile(path.join(targetPath, ".nojekyll"), "", "utf8");
        await fs.copy(directory, targetPath);
        shell.exec("git add --all");
        const gitUserName = process.env.GIT_USER_NAME;
        if (gitUserName) {
            shell.exec(`git config user.name "${gitUserName}"`);
        }
        const gitUserEmail = process.env.GIT_USER_EMAIL;
        if (gitUserEmail) {
            shell.exec(`git config user.email "${gitUserEmail}"`);
        }
        const commitMessage = process.env.CUSTOM_COMMIT_MESSAGE ?? `Deploy website - based on ${currentCommit}`;
        const commitResults = shell.exec(`git commit -m "${commitMessage}"`);
        if (shell.exec(`git push --force origin ${deploymentBranch}`).code !== 0) {
            throw new Error('Running "git push" command failed. Does the GitHub user account you are using have push access to the repository?');
        }
        else if (commitResults.code === 0) {
            let websiteURL = "";
            if (githubHost === "github.com") {
                websiteURL = projectName.includes(".github.io")
                    ? `https://${organizationName}.github.io/`
                    : `https://${organizationName}.github.io/${projectName}/`;
            }
            else {
                websiteURL = `https://${githubHost}/pages/${organizationName}/${projectName}/`;
            }
            shell.echo(`Website is live at "${websiteURL}".`);
            shell.exit(0);
        }
    };
    await runDeploy();
}
