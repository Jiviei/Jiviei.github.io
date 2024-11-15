import fs from "fs-extra";
import path from "path";
import os from "os";
import shell from "shelljs";
import yaml from "yaml";
const { parse } = yaml;
export var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "\u001B[36m[INFO]\u001B[0m";
    LogLevel["SUCCESS"] = "\u001B[32m[SUCCESS]\u001B[0m";
    LogLevel["ERROR"] = "\u001B[31m[ERROR]\u001B[0m";
    LogLevel["WARNING"] = "\u001B[33m[WARNING]\u001B[0m";
})(LogLevel || (LogLevel = {}));
const buildSshUrl = (githubHost, organizationName, projectName, githubPort) => {
    if (githubPort) {
        return `ssh://git@${githubHost}:${githubPort}/${organizationName}/${projectName}.git`;
    }
    return `git@${githubHost}:${organizationName}/${projectName}.git`;
};
const CONFIG_NAME = "deploy.config.yaml";
const loadConfig = (configPath) => {
    if (!fs.existsSync(configPath)) {
        console.log(`${LogLevel.WARNING} Configuration file not found: ${configPath}`);
        return {};
    }
    try {
        console.log(`${LogLevel.INFO} Reading configuration file from "${configPath}"...`);
        const fileContents = fs.readFileSync(configPath, "utf-8");
        console.log(`${LogLevel.INFO} Parsing YAML configuration...`);
        const config = parse(fileContents);
        return config;
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message.includes("YAMLSemanticError")) {
                console.error(`${LogLevel.ERROR} YAML Semantic Error: ${error.message}`);
                console.error(`${LogLevel.ERROR} Hint: Ensure your YAML file is correctly formatted.`);
            }
            else {
                console.error(`${LogLevel.ERROR} Error reading configuration file: ${error.message}`);
            }
        }
        else {
            console.error(`${LogLevel.ERROR} An unknown error occurred while reading the configuration file.`);
        }
        return {};
    }
};
const shellExec = (command) => {
    return shell.exec(command, { silent: true });
};
export const deploySite = async (directory) => {
    if (!shell.which("git")) {
        throw new Error(`${LogLevel.ERROR} Git not installed or on the PATH!`);
    }
    const configPath = path.join(directory, CONFIG_NAME);
    const siteConfig = loadConfig(configPath);
    const sourceRepoUrl = shellExec("git remote get-url origin").stdout.trim();
    const sourceBranch = process.env.CURRENT_BRANCH ?? shellExec("git rev-parse --abbrev-ref HEAD").stdout.trim();
    const organizationName = process.env.ORGANIZATION_NAME ?? siteConfig.organizationName;
    if (!organizationName)
        throw new Error(`Missing project organization name. Did you forget to define "organizationName" in ${configPath}? You may also export it via the ORGANIZATION_NAME environment variable.`);
    console.log(`${LogLevel.INFO} Organization name: "${organizationName}"`);
    const projectName = process.env.PROJECT_NAME ?? siteConfig.projectName;
    if (!projectName)
        throw new Error(`Missing project name. Did you forget to define "projectName" in ${configPath}? You may also export it via the PROJECT_NAME environment variable.`);
    console.log(`${LogLevel.INFO} Project name: "${projectName}"`);
    const deploymentBranch = process.env.DEPLOYMENT_BRANCH ?? siteConfig.deploymentBranch;
    if (!deploymentBranch)
        throw new Error(`Missing deployment branch. Did you forget to define "projectName" in ${configPath}? You may also export it via the DEPLOYMENT_BRANCH environment variable.`);
    console.log(`${LogLevel.INFO} Deployment branch: "${deploymentBranch}"`);
    const githubHost = process.env.GITHUB_HOST ?? siteConfig.githubHost ?? "github.com";
    const githubPort = process.env.GITHUB_PORT ?? siteConfig.githubPort;
    const deploymentRepoURL = buildSshUrl(githubHost, organizationName, projectName, githubPort);
    const crossRepoPublish = !sourceRepoUrl.endsWith(`${organizationName}/${projectName}.git`);
    if (sourceBranch === deploymentBranch && !crossRepoPublish) {
        throw new Error(`You cannot deploy from this branch (${sourceBranch}).` +
            "\nYou will need to checkout to a different branch!");
    }
    const currentCommit = shellExec("git rev-parse HEAD").stdout.trim();
    const deploy = async () => {
        const targetPath = await fs.mkdtemp(path.join(os.tmpdir(), `${projectName}-${deploymentBranch}`));
        const originalDir = shell.pwd();
        try {
            shell.cd(targetPath);
            console.log(`${LogLevel.INFO} Cloning repository into temporary directory...`);
            if (shellExec(`git clone --depth 1 --branch ${deploymentBranch} ${deploymentRepoURL} "${targetPath}"`)
                .code !== 0) {
                shellExec(`git clone --depth 1 ${deploymentRepoURL} "${targetPath}"`);
                shellExec(`git checkout -b ${deploymentBranch}`);
            }
            console.log(`${LogLevel.INFO} Cleaning up old files in the repository...`);
            shellExec(`git rm -rf .`);
            await fs.writeFile(path.join(targetPath, ".nojekyll"), "", "utf8");
            console.log(`${LogLevel.INFO} Copying built site into temporary directory...`);
            await fs.copy(directory, targetPath);
            shellExec("git add --all");
            shellExec(`git rm -rf ${CONFIG_NAME}`);
            const gitUserName = process.env.GIT_USER_NAME;
            if (gitUserName) {
                shellExec(`git config user.name "${gitUserName}"`);
            }
            const gitUserEmail = process.env.GIT_USER_EMAIL;
            if (gitUserEmail) {
                shellExec(`git config user.email "${gitUserEmail}"`);
            }
            const commitMessage = process.env.CUSTOM_COMMIT_MESSAGE ?? `Deploy website - based on ${currentCommit}`;
            const commitResults = shellExec(`git commit -m "${commitMessage}"`);
            if (commitResults.code === 0) {
                console.log(`${LogLevel.SUCCESS} Commit successful.`);
            }
            else {
                throw new Error(`${LogLevel.ERROR} Commit failed. ${commitResults}`);
            }
            if (shellExec(`git push --force origin ${deploymentBranch}`).code !== 0) {
                throw new Error(`${LogLevel.ERROR} Running "git push" command failed. Does the GitHub user account you are using have push access to the repository?`);
            }
            else {
                let websiteURL = "";
                if (githubHost === "github.com") {
                    websiteURL = projectName.includes(".github.io")
                        ? `https://${organizationName}.github.io/`
                        : `https://${organizationName}.github.io/${projectName}/`;
                }
                else {
                    websiteURL = `https://${githubHost}/pages/${organizationName}/${projectName}/`;
                }
                console.log(`${LogLevel.INFO} Website is live at "${websiteURL}".`);
            }
        }
        finally {
            try {
                shell.cd(originalDir);
                await fs.rm(targetPath, { recursive: true, force: true });
                console.log(`${LogLevel.SUCCESS} Successfully removed temp directory: ${targetPath}`);
            }
            catch (error) { }
        }
    };
    await deploy();
};
