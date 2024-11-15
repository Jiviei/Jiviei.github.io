---
order: 1
title: Разворачивание портала для читателей
---

## Настройка хранилища

1. Зарегистрируйте корпоративный GitLab. Он будет использоваться в качестве хранилища каталогов.

2. Добавьте учетную запись для сотрудника, который будет редактировать документацию.

## Разворачивание портала для чтения

1. Установите на сервере Docker.

2. Скачайте готовый файл командой `curl -LO https://gram.ax/docker-compose.yaml`.

   [cut:docker-compose.yaml:true]

   ```
   services:
     gramax:
       image: gramax/gramax:latest
       container_name: gramax
       restart: unless-stopped
       ports:
         - ${PORT:-80}:80
       environment:
         - ADMIN_LOGIN=${ADMIN_LOGIN:-admin}
         - ADMIN_PASSWORD=${ADMIN_PASSWORD:-password}
       volumes:
         - ${ROOT_PATH:-./gramax}:/app/data
   ```

   [/cut]

3. Задайте переменные среды:

   1. `ROOT_PATH` -- путь до папки, в которую будут склонированы каталоги. Если не указан, то создается папка с названием `gramax`.

   2. `ADMIN_LOGIN` -- логин администратора. По умолчанию используется `admin`.

   3. `ADMIN_PASSWORD` -- пароль администратора. По умолчанию используется `password`.

   4. `PORT` -- порт приложения. По умолчанию используется 80.

   5. `COOKIE_SECRET` -- ключ для шифрования секретов пользователя в куках. По умолчанию используется `.`, рекомендуется заменить его 32-байтный ключ (сгенерировать можно используя `openssl rand -hex 32`).

## Команды управления

-  Для запуска выполните команду ` docker compose up `.

-  Чтобы остановить контейнеры, используйте ` docker compose down `.

-  Для обновления остановите контейнеры и выполните ` docker compose pull && docker compose up `.