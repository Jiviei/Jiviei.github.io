---
order: 7
title: Переменные среды в энтерпрайзе
---

-  `sso` -- сервис sso-авторизации

   -  `AUTHORIZATION_URL` -- урл до auth сервиса

   -  `SSO_URL` -- урл до sso сервиса

   -  `GRAMAX_URL` -- урл до грамакса

   -  `SSO_SERVICE_ENCRYPTION_KEY` -- ключ для шифрования данных sso 

   -  `AUTH_METHOD` -- метод авторизации в sso

      -  `azure`

         -  `AUTH_METHOD` = `azure`

         -  `TOKEN_URL` -- урл до эндпоинта для получения токена, пример: `https://login.microsoftonline.com/HohLpGvI-uPW8-vyyn-QBH1-88fuprQzzpu3/oauth2/v2.0/authorize`

         -  `API_URL` -- урл до эндпоинта получения информации по api, пример: `https://login.microsoftonline.com/HohLpGvI-uPW8-vyyn-QBH1-88fuprQzzpu3/oauth2/v2.0/authorize`

         -  `CLIENT_ID` -- идентификатор приложения в azure, пример: `0FYSAWm1A-1x4k-e14H-0LHe-gf6qwElcYuz`

         -  `CLIENT_SECRET` -- секрет приложения в azure, пример: `rY3yh*suIebMk^k0KGoi3azsIBP&FY@odQsgFVdc`

-  `Auth`

   -  `github`

      -  `GITHUB_CLIENT_ID` -- идентификатор приложения в гитхабе

      -  `GITHUB_CLIENT_SECRET` -- секрет приложения в гитхабе

      -  `GITHUB_REDIRECT_URI` -- урл, который  в гитхабе

   -  `confluence`

      -  `CONFLUENCE_CLIENT_ID` -- идентификатор приложения в конфлюенсе

      -  `CONFLUENCE_REDIRECT_URI` -- секрет приложения в конфлюенсе

      -  `CONFLUENCE_CLIENT_SECRET` -- урл, который  в конфлюенсе

   -  `gitlab`

      -  `GITLAB_CLIENT_ID` -- идентификатор приложения в гитлабе

      -  `GITLAB_CLIENT_SECRET` -- секрет приложения в гитлабе

      -  `GITLAB_INSTANCE_URL` -- урл на котором находиться

      -  `GITLAB_REDIRECT_URL` -- урл, который  в гитлабе

-  `enterprise`

   -  `GLS_URL` -- урл, на котором расположен GLS, по умолчанию: https://gram.ax/license

   -  `GRAMAX_URL` -- урл, на котором расположен грамакс

   -  `ALLOWED_GRAMAX_URLS` -- разрешенные URL-ы, для перенаправления

   -  `LICENSE_KEY` -- лицензионный ключ

   -  `SOURCE_ADMIN_TOKEN` -- админский токен он Git хранилища

   -  `WORKSPACE_PATH` -- путь до файла с настройками воркспейса

   -  `ENTERPRISE_URL` -- URL до GES

   -  `SSO_SERVICE_ENCRYPTION_KEY` -- Kлюч для расшифрования данных с sso