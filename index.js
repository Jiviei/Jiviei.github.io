#!/usr/bin/env node --no-warnings
import path from "path";
import { Command, Option } from "commander";
import { buildStaticSite } from "./src/buildStaticSite/index.js";
import { deploySite } from "./src/deploySite.js";
import packageInfo from "./package.json" assert { type: "json" };
import { LogLevel } from "./src/deploySite.js";
const { name, description, version } = packageInfo;
const program = new Command();
program.name(name).description(description).version(version);
program
    .command("build")
    .description("Generates a static site from the specified source directory")
    .addOption(new Option("-s, --source <path>", "filesystem path to the directory created using the gramax editor").default(process.cwd(), "current directory"))
    .addOption(new Option("-d, --destination <path>", "filesystem path to the directory to save the generated static site").default(process.cwd(), "current directory"))
    .action(async (options) => {
    await buildStaticSite(options.source, path.join(options.destination, "/build"));
});
program
    .command("deploy")
    .description(`Deploy static site to GitHub Pages`)
    .addHelpText("before", `Before using this command, please ensure that you have either:

- Created a configuration file named "deploy.config.yaml" in the same directory specified with the "--destination" option.

Configuration file structure:

organizationName: <GitHub organization name>
projectName: <GitHub project name>
deploymentBranch: <Branch to deploy to>

Example:
---
organizationName: "my-org"
projectName: "my-project"
deploymentBranch: "gh-pages"

- Alternatively, set the necessary environment variables:
ORGANIZATION_NAME: GitHub organization name
PROJECT_NAME: GitHub project name
DEPLOYMENT_BRANCH: Branch to deploy to`)
    .addOption(new Option("-d, --destination <path>", "specify the directory containing the built static site for deployment").default(process.cwd(), "current directory"))
    .action(async (options) => {
    await deploySite(options.destination);
});
try {
    await program.parseAsync(process.argv);
}
catch (error) {
    if (error instanceof Error) {
        console.error(`${LogLevel.ERROR} ${error.message}`);
    }
    else {
        console.error(`${LogLevel.ERROR} An unexpected error occurred: ${error}`);
    }
}
