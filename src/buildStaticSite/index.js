import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { LogLevel } from "./../deploySite.js";
const DOC_ROOT_FILENAME = ".doc-root.yaml";
async function copyDir(src, dest) {
    const entries = await fs.readdir(src, { withFileTypes: true });
    await fs.mkdir(dest, { recursive: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            entry.name !== ".git" && (await copyDir(srcPath, destPath));
        }
        else {
            await fs.copyFile(srcPath, destPath);
        }
    }
}
async function copyCatalogDir(src) {
    const entries = await fs.readdir(src, { withFileTypes: true });
    const isCatalogDir = entries.some((entr) => entr.name == DOC_ROOT_FILENAME);
    if (isCatalogDir) {
        return src;
    }
    else {
        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            if (entry.isDirectory()) {
                const catalogDirPath = await copyCatalogDir(srcPath);
                if (catalogDirPath)
                    return catalogDirPath;
            }
        }
        return "";
    }
}
export const writingRenderedHtmlFiles = async (rendered, targetDir, dirname) => {
    console.log(`${LogLevel.INFO} Writing rendered HTML files...`);
    const templateHtml = await fs.readFile(path.join(dirname, "/client/index.html"), "utf-8");
    async function generateDefaultHtml(defaultHtml) {
        const html = templateHtml
            .replace(`<!--app-data-->`, "window.__INITIAL_DATA__ = " + (defaultHtml.initialData ?? ""))
            .replace(`<app-html/>`, defaultHtml.html ?? "");
        const filePath = path.join(targetDir, defaultHtml.logicPath);
        await fs.mkdir(targetDir, { recursive: true });
        await fs.writeFile(path.join(targetDir, "index.html"), html, "utf8");
        await fs.mkdir(filePath, { recursive: true });
        await fs.writeFile(path.join(filePath, "index.html"), html, "utf8");
    }
    await generateDefaultHtml(rendered.defaultHtml);
    for (const htmlData of rendered.htmlData) {
        const html = templateHtml
            .replace(`<!--app-data-->`, "window.__INITIAL_DATA__ = " + (htmlData.initialData ?? ""))
            .replace(`<app-html/>`, htmlData.html ?? "");
        const filePath = path.join(targetDir, htmlData.logicPath);
        await fs.mkdir(filePath, { recursive: true });
        await fs.writeFile(path.join(filePath, "index.html"), html, "utf8");
    }
};
const getRenderedHTML = async (catalogName, dirname) => {
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;
    console.log(`${LogLevel.INFO} Rendering HTML pages...`);
    try {
        console.error = () => { };
        console.warn = () => { };
        return await (await import(pathToFileURL(path.join(dirname, "/server/server.js")).href)).default(catalogName);
    }
    catch (e) {
        throw new Error(`Error rendering catalog: ${e.message}`);
    }
    finally {
        console.warn = originalConsoleWarn;
        console.error = originalConsoleError;
    }
};
export const buildStaticSite = async (sourceDir, targetDir) => {
    const fullPath = path.resolve(sourceDir);
    const stats = await fs.stat(fullPath);
    if (!stats.isDirectory())
        throw new Error("The provided path is not a directory.");
    console.log(`${LogLevel.INFO} Searching for the directory configuration file...`);
    let catalogDirPath = "";
    try {
        catalogDirPath = (await copyCatalogDir(sourceDir)) ?? "";
    }
    catch (e) {
        throw new Error(`Error searching for the directory configuration file configuration: ${e.message}`);
    }
    if (!catalogDirPath)
        throw new Error("Directory configuration file not found");
    console.log(`${LogLevel.INFO} Directory configuration file: ${path.join(catalogDirPath, DOC_ROOT_FILENAME)}`);
    console.log(`${LogLevel.INFO} Coping directory...`);
    try {
        await copyDir(catalogDirPath, path.join(targetDir, path.basename(sourceDir)));
    }
    catch (e) {
        throw new Error(`Error coping directory: ${e.message}`);
    }
    const catalogName = path.basename(fullPath);
    process.env.ROOT_PATH = targetDir;
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const rendered = await getRenderedHTML(catalogName, dirname);
    await copyDir(path.join(dirname, "/client"), targetDir);
    await fs.writeFile(path.join(targetDir, "data.js"), `window.__DIRECTORY__ = ${JSON.stringify(rendered.files)}`, "utf8");
    await writingRenderedHtmlFiles(rendered, targetDir, dirname);
    console.log(`${LogLevel.SUCCESS} Build process completed successfully.`);
};
