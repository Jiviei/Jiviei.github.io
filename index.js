#!/usr/bin/env node --no-warnings
import path from "path";
import { Command, Option } from "commander";
import { buildStaticSite } from "./src/buildStaticSite/index.js";
import { deploySite } from "./src/deploySite.js";
import packageInfo from "./package.json" assert { type: "json" };
const { name, description, version } = packageInfo;
const program = new Command();
program.name(name).description(description).version(version);
program
    .command("build")
    .description("generates a static site from the specified source directory")
    .addOption(new Option("-s, --source <path>", "filesystem path to the directory created using the gramax editor").default(process.cwd(), "current directory"))
    .addOption(new Option("-d, --destination <path>", "filesystem path to the directory to save the generated static site").default(process.cwd(), "current directory"))
    .action(async (options) => {
    await buildStaticSite(options.source, path.join(options.destination, "/build"));
});
program
    .command("deploy")
    .description("Deploy static site to GitHub Pages.")
    .addOption(new Option("-d, --destination <path>", "specify the directory containing the built static site for deployment").default(process.cwd(), "current directory"))
    .action(async (options) => {
    await deploySite(options.destination);
});
program.parse(process.argv);
