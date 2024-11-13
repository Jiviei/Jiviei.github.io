---
order: 1.5
title: Publish
---

To make your changes available to colleagues, you need to publish them.

-  Until publication (commit + push), all changes are stored locally on your computer in the current branch.

-  Before publishing, you need to synchronize the catalog to the latest version. This is necessary to ensure that your changes do not conflict with those of your colleagues.

-  You can publish selected articles or all of them.

-  Each publication automatically generates a comment, which will also be saved in the Git storage as a commit comment. This comment can be modified.

-  Local changes can be reverted before publication. After publication, this cannot be done in Gramax.

## Publish Changes

1. Click the cloud icon in the repository status bar.

2. Review the changes in the articles.

3. Select the articles to publish. By default, all are selected.

4. Click *Publish*.

![](./publish-2.png)

## Frequently Asked Questions

:::hotfixes:true Why don't others see my changes?

To make your changes available to others, you need to publish them.

:::

:::hotfixes:true Why is there no publish button in my catalog?

Any changes are published to a storage. Therefore, the catalog must be connected to one of them.

-  The catalog was uploaded from the storage, but the connection is not established -- click the storage icon and fill in the storage details.

-  The catalog exists only locally -- click the storage icon, add it, and publish the catalog.

:::

:::hotfixes:true How to revert changes in an article?

**Before publication:** If you need to revert local changes that have not yet been published.

Open the changes publication window and click *Revert Changes* next to the article.

![](./publish.png)

**After publication:** If you need to revert changes when the article has already been published.

The function to revert to a previous version is not available in Gramax. However, you can republish the article. To do this:

1. Open the article and click *Change History* in the right panel.

2. Select one of the versions, copy the article's content, and close the change history.

3. In the right panel, click *Edit Markdown* and paste the content from the clipboard.

4. Publish the changes.

:::

:::quote:true The catalog was uploaded from the repository, but a strikethrough cloud icon is displayed in the status bar.

Your access token to the repository has expired. Re-add the storage, and the catalog will automatically connect to the repository.

:::