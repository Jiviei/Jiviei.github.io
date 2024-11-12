---
order: 5
title: Other Git storages
---

You can connect not only GitLab and GitHub as storage. Gramax also supports:

-  Bitbucket

-  Gitea

-  Gogs

-  GitVerse

To connect such a storage, click *Upload Existing* on the main page and select Git from the storage options. Then fill in the repository information.

[image:./other-git-storages.png:::0,0,100,78.4866:]

## Known Limitation

In Gramax, you can only work with catalog that already exist in the repository.

If the catalog is created and exists only locally in Gramax, it cannot be published to another repository. To avoid data loss, there are workarounds:

1. **Catalog created in the web version**: publish it to GitLab or GitHub, then transfer its copy to your Git repository. For example, in Gitea, you can do this using [mirroring](https://docs.gitea.com/usage/repo-mirror) or [migration](https://docs.gitea.com/next/usage/migration).

2. **Catalog created in the desktop version**: publish the catalog using the console or any Git client. Then delete the local version of the catalog from Gramax and download it from the repository.