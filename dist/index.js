#!/usr/bin/env node
import path from "path";
import { Command } from "commander";
import { buildStaticSite } from "./static/buildStatic.js";
import { deploySite } from "./static/deploySite.js";
import packageInfo from "./package.json" assert { type: "json" };
const { name, description, version } = packageInfo;
const program = new Command();
program.name(name).description(description).version(version);
const staticCmd = program.command("static").description("Manage static sites");
staticCmd
    .command("build")
    .description("Generates a static site from the specified source directory.")
    .requiredOption("-s, --source <path>", "The path to the directory created using the gramax editor")
    .option("-d, --destination <path>", "Directory to save the generated static site (default: current directory)", path.join(process.cwd(), "/dist"))
    .action(async (options) => {
    await buildStaticSite(options.source, options.destination);
});
staticCmd
    .command("deploy")
    .description("Deploy static site to GitHub Pages.")
    .option("-d, --destination <path>", "Directory to save the generated static site (default: current directory)", process.cwd())
    .action(async (options) => {
    await deploySite(options.destination);
});
program.parse(process.argv);
