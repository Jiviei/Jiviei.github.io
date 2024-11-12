---
order: 13
title: "@PS @SP [done-tech] Обновление Tauri до 2.0.0-beta.*"
---

Tauri дошёл до 2.0.0-beta.\*, но сейчас в проекте используется 2.0.0-alpha.\*.

Это обновление с достаточно большими breaking changes и рано или поздно придётся обновляться в любом случае.

Некоторые US зависят от обновления, поскольку их проще реализовать в новой версии. Реализовывать в старой -- делать лишнюю работу, которую потом придётся переделывать.

[Список изменений](https://v2.tauri.app/release/tauri/v2.0.0-beta.0/).

## **Критерии**

1. В десктопном приложении используется версия `tauri@2.0.0-beta.*`

## Зависящие US

1. Функция `zoom_hotkeys_enabled` в <https://v2.tauri.app/release/tauri/v2.0.0-beta.15/>.

   <https://dev.gram.ax/gitlab.ics-it.ru/dr/gramax-board/master/-/jun-2024/prilozhenie-2/zum-i-masshtab-v-prilozhenii>

2. Плагин FS поддерживает FileWatcher из коробки.

   <https://dev.gram.ax/gitlab.ics-it.ru/dr/gramax-board/master/-/backlog/desktop-filewatcher>

3. Поддержка протокола в Linux, которую можно реализовать через конфиг Tauri.

   <https://dev.gram.ax/gitlab.ics-it.ru/dr/gramax-board/master/-/may-2024/app-protocol>