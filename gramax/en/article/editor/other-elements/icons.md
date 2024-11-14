---
order: 2
title: Icons
---

You can add both standard and custom icons to articles.

## Lucide Icons

If you don’t have custom icons, you can use the free [Lucide icon library](https://lucide.dev/icons/).

To add a Lucide icon to an article, click the icon button in the editing panel and choose the appropriate one from the dropdown list.


## Custom Icons

You can also use custom icons in articles.

1. Open the repository with the catalog in any text editor. Then, create a `.icons/` folder alongside the `.doc-root.yaml` file.

2. Add SVG files with icons to the folder and publish them.

   ![](./_index-2.png)

3. Open the article where you want to use the icon from the folder. Use the Markdown syntax: `[icon:{code}]`, where `code` is the name of the SVG icon file.
