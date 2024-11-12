---
order: 2.5
title: "@PS @AM Перевод меню"
properties:
  - name: Assignee
    value: PS
  - name: Release
    value: october-24
  - name: State
    value: done
  - name: PO
    value: AM
  - name: Type
    value: QoL
---

[Изначальная ЮС](./russko-angliyskiy-interfeys).

В Tauri унифицировали названия дефолтных пунктов меню и теперь возможно их перевести и они не должны в какой-то момент превращаться в английские при некоторых действиях пользователя, как было раньше.

Но теперь необходимо придумывать универсальный текст -- например, раньше текст для входа и выхода из полноэкранного режима был разный, а теперь один.

## Критерии

1. Меню десктопного приложения имеет перевод на русский и английский языки

2. При переключении языка в десктопном приложении, меню и остальные окна тоже меняют свой язык

3. В подменю `Help` есть следующие пункты

   1. Visit Gramax docs -> Документация Gramax

   2. Visit GitHub repository -> GitHub репозиторий

   3. Follow news channel on Telegram  -> Новостной канал в Telegram

   4. Join community chat on Telegram -> Чат в Telegram