---
order: 5
title: Другие Git-хранилища
---

В качестве хранилища можно подключать не только GitLab и GitHub. Gramax также поддерживает:

-  Bitbucket

-  Gitea

-  Gogs

-  GitVerse

Чтобы подключить такое хранилище, на главной кликните *Загрузить существующий* и в вариантах хранилищ выберите  Git. Затем заполните информацию о хранилище.

[image:./other-git-storages.png:::0,0,100,78.4866:]

## Известное ограничение

В Gramax можно работать только с каталогами, которые уже существуют в хранилище.

Если каталог создан и существует только локально в Gramax, опубликовать его в другое хранилище не получится. Чтобы не потерять данные, есть обходные пути:

1. **Каталог создан в браузерной версии**: опубликуйте его в GitLab или GitHub, затем перенесите его копию в свое Git-хранилище. Например, в Gitea это можно сделать с помощью[ зеркалирования](https://docs.gitea.com/usage/repo-mirror) или [миграции](https://docs.gitea.com/next/usage/migration).

2. **Каталог создан в десктопной версии**: опубликуйте каталог с помощью консоли или любого Git-клиента. Затем удалите локальную версию каталога из Gramax и загрузите из хранилища.