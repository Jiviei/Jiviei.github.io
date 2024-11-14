---
order: 1
title: Компоненты
---

-  Компоненты клиентской части:

   -  **Desktop edit app** -- десктопное приложение для редактирования

   -  **Web edit app** -- браузерное приложение для редактирования (Single-Page Application)

   -  **DocPortal client** -- клиентская часть **DocPortal**\-а  (**DocPortal** --  приложение для чтения документации)

-  Компоненты серверной части:

   -  **Git server** -- GitLab, GitHub, Gitea

   -  **SSO provider** -- Keycloak, Azure, Yandex SSO

   -  **Gramax server** -- сервер Gramax

   -  **CORS** -- сервис CORS-проксирования

   -  **Review** -- сервис  формирования  ссылки для ревью

   -  **Diagram renderer** -- сервис для рендеринга диаграмм

   -  **SSO** -- сервис для обертки различных **SSO Provider**\-ов

   -  **C4 structurizr** --  сервис для рендеринга C4-structurizr диаграмм

   -  **Auth** -- сервис входа в **Git server** ([github.com](http://github.com), [gitlab.com](http://gitlab.com)) по OAuth

   -  **Web edit app server** -- сервер который предоставляет **Web edit app**

   -  **DocPortal server** -- серверная часть **DocPortal**\-а (**DocPortal** --  приложение для чтения документации)

   -  **File system** -- файловая система в **Gramax-Server**

## Связи компонентов

-  **Web edit app -> Auth** -- для входа в **Git server** по OAuth

-  **Web edit app -> Review** -- для формирования ссылки ревью

-  **Web edit app -> Diagram renderer** -- для рендера С4-Structurizr и TS-diagram

-  **Web edit app -> CORS** -- для проксирования запросов в **Git server** (если **Git server** блокирует CORS запросы)

-  **Web Edit App -> Git server** -- для клонирования, пула и пуша репозиториев (если **Git server** не блокирует CORS запросы)



-  **Desktop edit app -> Auth** -- для входа в **Git server** по OAuth

-  **Desktop edit app -> Review** -- для формирования ссылку для ревью

-  **Desktop edit app -> Git server** -- для клонирования, пула и пуша репозиториев

-  **Desktop edit app -> Diagram renderer** -- для рендера С4-Structurizr и TS-diagram



-  **DocPortal-client -> Auth** -- для входа в **Git server** по OAuth

-  **DocPortal-client -> DocPortal server** -- для получения данных по каталогам и обновления документации



-  **DocPortal server -> Git server** -- для клонирования и пула репозиториев

-  **DocPortal server -> Diagram renderer** -- для рендера С4-Structurizr и TS-diagram

-  **DocPortal server -> File system** -- для хранения локальных (относительно **Git server**) репозиториев

-  **DocPortal server -> SSO** -- для входа по SSO и получения прав на чтение приватной документации



-  **Review -> Git server** -- для клонирования, пула и пуша репозиториев

-  **Review -> File system** -- для хранения локальных (относительно **Git server**) обычных и  ревью репозиториев



-  **Auth -> Git server** --  для получения данных пользователя с **Git server**

-  **SSO -> SSO provider** -- для получения данных пользователя и его прав

-  **Diagram renderer -> C4 structurizr** -- для рендера диаграмм C4-structurizr

-  **Web edit app server -> Web edit app** -- предоставляет **Web edit app**

-  **CORS -> Git server** --  проксирует запросы на **GitServer**

## В нотации Structurizr DSL

-  [c4-all.dsl](./c4-all.dsl) -- тут все компоненты и связи

-  [c4-enterprise.dsl](./c4-enterprise.dsl) -- тут компоненты, необходимые для Enterprise

отрендерить можно в [structurizr.com](https://www.structurizr.com/dsl)