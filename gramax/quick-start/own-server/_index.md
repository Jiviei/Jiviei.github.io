---
order: 3
title: Развернуть докпортал
---

Развернуть портал для читателей можно на собственном сервере с помощью Docker-образа Gramax. Поддерживается развёртывание в Docker от версии 20.10.

:::tip 

Если у вас нет собственного сервера, портал для читателей можно также [развернуть в Yandex Cloud](./../../doc-portal/yandex-cloud).

:::

### Запуск

1. Скачайте готовый файл командой `curl -LO https://gram.ax/docker-compose.yaml`.

   :::hotfixes:true docker-compose.yaml

   ```
   services:
     gramax:
       image: docker.io/gramax/gramax:latest
       container_name: gramax
       restart: unless-stopped
       ports:
         - ${PORT:-80}:${PORT:-80}
       environment:
         - PORT=${PORT:-80}
         - ADMIN_LOGIN=${ADMIN_LOGIN:-admin}
         - ADMIN_PASSWORD=${ADMIN_PASSWORD:-password}
         - AUTO_PULL_TOKEN=${AUTO_PULL_TOKEN:-}
         - AUTO_PULL_INTERVAL=${AUTO_PULL_INTERVAL:-}
       volumes:
         - ${ROOT_PATH:-./gramax}:/app/data
   ```

   :::

2. Задайте переменные среды:

   1. `ROOT_PATH` -- путь до папки, в которую будут склонированы каталоги. Если не указан, создается папка с названием `gramax`.

   2. `ADMIN_LOGIN` -- логин администратора. Если не указан, используется `admin`.

   3. `ADMIN_PASSWORD` -- пароль администратора. Если не указан, используется `password`.

   4. `PORT` -- порт приложения. Если не указан, используется 80.

   5. `AUTO_PULL_TOKEN` -- токен для автоматической синхронизации. Если не указан, каталоги не будут автоматически обновляться.

   6. `AUTO_PULL_INTERVAL` -- интервал автоматической синхронизации. Если не указан, каталоги будут обновляться с интервалом 3 минуты.

   7. `COOKIE_SECRET` -- ключ для шифрования секретов пользователя в куках. Если не указан,  используется `.`, рекомендуется заменить его на 32-байтный ключ (можно сгенерировать, используя `openssl rand -hex 32`).

### Команды управления

-  Для запуска выполните команду `docker compose up`.

-  Чтобы остановить контейнеры, используйте `docker compose down`.

-  Для обновления остановите контейнеры и выполните `docker compose pull && docker compose up`.

:::info Развернуть с помощью Podman

Если вы разворачиваете портал с помощью Podman:

1. Создайте папку, в которой будут находиться все каталоги. Это можно сделать по пути, который вы указали в переменной среде параметром `ROOT_PATH`. Если не указали -- создайте папку `gramax` рядом с файлом `docker-compose`.

2. Замените во всех командах `docker` на `podman`.

:::