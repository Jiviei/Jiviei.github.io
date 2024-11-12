import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
export const buildStaticSite = async (sourceDir, targetDir) => {
    if (!sourceDir) {
        console.error("Please provide a source directory as the first argument.");
        process.exit(1);
    }
    async function copyDir(src, dest) {
        const entries = await fs.readdir(src, { withFileTypes: true });
        await fs.mkdir(dest, { recursive: true });
        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
                await copyDir(srcPath, destPath);
            }
            else {
                await fs.copyFile(srcPath, destPath);
            }
        }
    }
    async function copyCatalogDir(src, dest) {
        const entries = await fs.readdir(src, { withFileTypes: true });
        await fs.mkdir(dest, { recursive: true });
        const isCatalogDir = entries.some((entr) => entr.name == ".doc-root.yaml");
        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
                if (isCatalogDir)
                    entry.name !== ".git" && (await copyDir(srcPath, destPath));
                else
                    await copyCatalogDir(srcPath, destPath);
            }
            else {
                isCatalogDir && (await fs.copyFile(srcPath, destPath));
            }
        }
    }
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    await copyDir(path.join(__dirname, "/build/client"), targetDir);
    await copyCatalogDir(sourceDir, path.join(targetDir, path.basename(sourceDir)));
    const templateHtml = await fs.readFile(path.join(__dirname, "/build/client/index.html"), "utf-8");
    const fullPath = path.resolve(sourceDir);
    const catalogName = path.basename(fullPath);
    const stats = await fs.stat(fullPath);
    if (!stats.isDirectory()) {
        console.error("The provided path is not a directory.");
        process.exit(1);
    }
    process.env.ROOT_PATH = targetDir;
    const rendered = await (await import(pathToFileURL(path.join(__dirname, "/build/server/server.js")).href)).default(catalogName);
    await fs.writeFile(path.join(targetDir, "data.js"), `window.__DIRECTORY__ = ${JSON.stringify(rendered.files)}`, "utf8");
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
    rendered.htmlData.forEach(async (htmlData) => {
        console.log(htmlData.logicPath);
        const html = templateHtml
            .replace(`<!--app-data-->`, "window.__INITIAL_DATA__ = " + (htmlData.initialData ?? ""))
            .replace(`<app-html/>`, htmlData.html ?? "");
        const filePath = path.join(targetDir, htmlData.logicPath);
        await fs.mkdir(filePath, { recursive: true });
        await fs.writeFile(path.join(filePath, "index.html"), html, "utf8");
    });
};
