---
order: 1.2
title: Branches
---

Branching allows you to create independent local versions of a catalog. You can freely make changes in these local versions, then publish them for colleagues and merge them with other branches in the catalog.

-  In the application interface, you can create branches, switch between them, merge, and delete.

-  The Documentation Portal displays only one main branch. Changes from other branches are not visible to readers.

-  It is most convenient to make each change in an isolated branch. After approval, you can merge it with the main branch.

## Add a Branch

A new branch is created from the current state of the catalog in the branch you are in at the time of creation.

To do this, click on the name of the current branch [icon:git-branch] in the repository status bar. In the window that opens, add a new branch.

![](./branches.png)

The branch will become available to colleagues when you make the first [publication](./publish).

## Switch Branches

To switch branches, select the one you want to switch to in the branch management window.

![](./branches-2.png)

:::note Moving Changes When Switching Branches

If you have unpublished changes in the current branch, they will automatically move when switching to another branch. If you switch back to the original branch, these changes will disappear from the branch you switched to.

To avoid automatic movement of changes between branches, [publish](./publish) them before switching.

:::

## Merge Branches

To merge branches, select the branch where you want to publish changes from the current branch. Then click *Merge*.

![](./branches-3.png)

If there are conflicting changes, Gramax will prompt you to resolve them.

:::note Deleting a Branch After Merging

If you delete a branch after merging, it cannot be restored in the Gramax interface.

:::