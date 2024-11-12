---
order: 0.9
title: "@SP @SY [done-tech] Новые урлы"
---

**Это не US**. Статья содержит новые адреса инстансов. Нужны, чтобы перевести компанию на новый энтерпрайз-сервер.



## Как мне сейчас кажется должно быть

### Прод

-  Общие сервисы, которые нужны будут всем

   -  `app.gram.ax` - веб-редактор

   -  `gram.ax` - сайт Gramax

      -  `/auth`\- для входа в Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/license` - для управления лицензиями

      -  `/diagram-renderer` - для рендера диаграмм

-  Enterprise инстансы ICS-IT (Cloud)

   -  `ics-it.gram.ax` - Докпортал, для чтения  документации

   -  `ics-it.gram.ax/-enterprise` - Gramax Enterprise Server

      -  `/sso` - для входа в SSO

      -  `/auth` - для входа в Enterprise хранилище Github/Gitlab

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/enterprise` - для enterprise фич

      -  `/diagram-renderer` - для рендера диаграмм

      -  `/drawio` - для drawio

### Дев

-  Общие сервисы, которые нужны будут для тестов

   -  `dev.gram.ax`\- веб-редактор

   -  `develop.gram.ax` - сайт Gramax

      -  `/sso` - для входа в SSO

      -  `/auth`\- для входа в Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/license` - для управления лицензиями

      -  `/diagram-renderer` - для рендера диаграмм

      -  `/drawio` - для drawio

-  Enterprise инстансы ICS-IT (Cloud)

   -  `alfa-ics-it.gram.ax` - Докпортал, для чтения  документации

   -  `alfa-ics-it.gram.ax/-enterprise` - Gramax Enterprise Server

      -  `/sso` - для входа в SSO

      -  `/auth` - для входа в Enterprise хранилище Github/Gitlab

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/enterprise` - для энтепрайзных фич

      -  `/diagram-renderer` - для рендера диаграмм





## Прошлые варианты

### Прод

-  Общие сервисы, которые нужны будут всем

   -  `app.gram.ax` - для редактирования документов

   -  `gram.ax` - сайт Gramax

      -  `/auth`\- для входа в Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/license` - для управления лицензиями  `(будет, когда сделаем)`

-  Enterprise инстансы ICS-IT (Cloud)

   -  `ics-it.gram.ax` - Докпортал, для чтения  документации

   -  `ics-it.gram.ax/-enterprise` - Gramax Enterprise Server

      -  `/sso` - для входа в SSO

      -  `/auth` - для входа в Enterprise хранилище Github/Gitlab/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/enterprise` - для enterprise фич

      -  `/diagram-renderer` - для рендера диаграмм если такие имеются

### Дев

Дев делается добавлением `dev.` в начале. Пример:

-  Общие сервисы, которые нужны будут всем

   -  `dev.app.gram.ax`\- для редактирования документов

   -  `dev.gram.ax` - сайт Gramax

      -  `/oauth`\- для входа в Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/license` - для управления лицензиями  `(будет, когда будет сделаем)`

-  Enterprise инстансы ICS-IT (Cloud)

   -  `dev.ics-it.gram.ax` - Докпортал, для чтения  документации

   -  `dev.ics-it.gram.ax/-enterprise` - Gramax Enterprise Server

      -  `/sso` - для входа в SSO

      -  `/auth` - для входа в Enterprise хранилище Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/license` - для лиценции

      -  `/diagram-renderer` - для рендера диаграмм если такие имеются



Либо дев делается добавлением `dev.` после домена второго уровня. Пример:

-  Общие сервисы, которые нужны будут всем

   -  `app.dev.gram.ax`\- для редактирования документов

   -  `dev.gram.ax` - сайт Gramax

      -  `/oauth`\- для входа в Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/license` - для управления лицензиями  `(будет, когда будет сделаем)`

-  Enterprise инстансы ICS-IT (Cloud)

   -  `ics-it.dev.gram.ax` - Докпортал, для чтения  документации

   -  `ics-it.dev.gram.ax/-server` - Gramax Enterprise Server

      -  `/sso` - для входа в SSO

      -  `/oauth` - для входа в Enterprise хранилище Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/diagram-renderer` - для рендера диаграмм если такие имеются



Либо можно купить домен по типу `gramax.dev` , и использовать его для дев версии

-  Общие сервисы, которые нужны будут всем

   -  `app.gramax.dev`\- для редактирования документов

   -  `gramax.dev` - сайт Gramax

      -  `/oauth`\- для входа в Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/license` - для управления лицензиями  `(будет, когда будет сделаем)`

-  Enterprise инстансы ICS-IT (Cloud)

   -  `ics-it.gramax.dev` - Докпортал, для чтения  документации

   -  `ics-it.gramax.dev/-server` - Gramax Enterprise Server

      -  `/sso` - для входа в SSO

      -  `/oauth` - для входа в Enterprise хранилище Github/Gitlab.com/Confluence

      -  `/cors-proxy` - для проксирования CORS запросов

      -  `/diagram-renderer` - для рендера диаграмм если такие имеются