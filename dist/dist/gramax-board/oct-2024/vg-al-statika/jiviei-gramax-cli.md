---
order: 1
title: Документация
---

## gramax-cli

Gramax command line toolset

## Installation

You can either install the tool globally or use it directly with `npx`.

### Option 1: Use with `npx` (No Installation Required)

You can run the tool directly without installing it globally:

```shell
npx gramax-cli <command> [options]
```

### Option 2: Install Globally with `npm`

If you plan to use the tool frequently, you might prefer to install it globally:

```shell
npm install -g gramax-cli
```

Once installed, you can run the tool directly from the command line:

```shell
gramax-cli <command> [options]
```

### Version & Help

To check the version of the tool:

```shell
gramax-cli --version
```

To display all available commands and options:

```shell
gramax-cli --help
```

## Commands

### `static`

Generates a static site from the specified source directory.

```shell
gramax-cli static -i <source-directory> [-o <output-directory>]
```

#### Options

-  `-i, --input <path>` (required): The path to the directory created using the gramax editor.

-  `-o, --output <path>` (optional): The directory where the generated static site will be saved. If not provided, the site will be saved in the current directory.

#### Example

```shell
gramax-cli static -i ./src -o ./dist
```

This command takes the files from `./src` and generates a static site in the `./dist` directory. If `-o` is omitted, the output will default to the current working directory.