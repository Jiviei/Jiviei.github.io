---
order: 2
title: "@SP @SY [done-tech] Разработка\_Gramax Enterprise Server (GES)"
---

Сейчас энтерпрайз сервис может использоваться только для входа через sso, хотелось бы расширить возможности энтерпрайз сервиса до лицензий и воркспейсов.

#### Критерии

-  Для сервиса Gramax Enterprise Service (GES) были добавлены следующие эндпоинты

   1. `/workspace`

      1. Возвращает всю инфу о workspace-е

   2. `/sso`

      1. `/login`

         1. Параметры

            1. `from` - откуда пользователь хочет зайти в sso

         2. Реализует вход в SSO

      2. `/logout`

         1. Параметры

            1. `from` - откуда пользователь хочет зайти в sso

         2. Реализует выход из SSO

   3. `/license`

      1. `/check-license`

         1. Проксирует запрос к  GLS/check-license добавляя key.

      2. `/check-editor`

         1. Параметры

            1. `mail` - почта пользователя

         2. Проксирует запрос к GLS/check-editor добавляя key.