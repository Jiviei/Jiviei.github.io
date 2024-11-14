---
order: 1.4
title: Synchronize
---

To get changes from colleagues from the repository, the catalog needs to be synchronized.

- Synchronization (pull) occurs separately in each catalog.

- During synchronization, you only receive changes from the current branch. To see changes in another branch, you need to switch to it.

- Synchronization does not overwrite local changes. If someone has made changes to the same line you have, Gramax will prompt you to resolve the conflict.

- The synchronization icon shows how many changes you will receive. If there is no counter, you have the latest version of the catalog.

## Synchronize the Catalog

Make sure that the catalog is connected to the repository—the name of the branch should be displayed in the repository status bar. Click the synchronization icon—it will finish when the change counter disappears from the icon.

![](./sync.png)

## Resolve Conflict

During synchronization, a conflict may occur, meaning that someone has changed the same line that you have also modified locally.

1. Click *Resolve Conflict*—a window with incoming and local changes will open.

2. Resolve the conflict. Gramax does not limit your options:

   - Choose one of the versions.
   
   - Delete both versions.
   
   - Keep both versions.

   ![](./sync-2.png)

3. Click *Confirm*—the file will be saved locally. When publishing to the repository, this version will be considered current.
