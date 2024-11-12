---
order: 0.5
title: Import from Confluence
---

You can transfer sections from Confluence to Gramax and then publish the catalogs to your Git repository. Gramax converts all known elements with high accuracy while preserving the hierarchy.

## Import a Space

1. On the homepage, click *Add Catalog*, and then *Import*. Add your Confluence account as the source.

   1. For the cloud version of Confluence, log in to your account.

      ![](./confluence.png)

   2. For the server version, specify the link to your Confluence domain and the [account token](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html).

      [image:./confluence-3.png:::0,0,100,55.7864:]

      :::info 

      Importing sections from the server version of Confluence is only possible in the desktop version of Gramax.

      :::

2. Select the section you want to transfer to Gramax. Click *Import*--a catalog will be created in Gramax from the space in Confluence. You will only need to [publish](./../../collaboration/publish) it to your storage.

## Check Elements

Gramax does not transfer some Confluence-specific elements. Known limitations include:

-  Only content supported by Gramax is transferred: text, notes, tables, and images. Specific elements, such as frames, charts, and Jira tasks will not be transferred--notes with links to the article in Confluence will remain in their place in the article.

-  Boards are not transferred unless there is a nested article under the board.

-  Intelligent links are not transferred, nor are their child pages.

-  Drafts and unsaved changes are not transferred.

After the transfer, we recommend checking the catalog. To do this, click *Error Check* in the right panel and review which elements did not transfer.

[image:./confluence-2.png:::0,0,100,61.7211:]