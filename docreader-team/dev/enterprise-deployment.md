---
order: 9
title: Enterprise развертывание
---

## Настройка хранилища

1. Зарегистрируйте корпоративный GitLab. Он будет использоваться в качестве хранилища каталогов.

2. Добавьте учетную запись для сотрудника, который будет редактировать документацию.

## Разворачивание Gramax

1. Установите на сервере Docker.

2. Используйте готовый файл

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
           networks:
               - gramax-network
   
       gramax-editor:
           image: gramax/gramax-editor:latest
           container_name: gramax-editor
           restart: unless-stopped
           environment:
               - CORS_SERVICE_URL
           ports:
               - ${EDITOR_PORT:-81}:80
           networks:
               - gramax-network
   
       cors-proxy:
           image: gramax/cors-proxy:latest
           container_name: gramax-cors-proxy
           ports:
               - ${CORS_PORT:-82}:80
           networks:
               - gramax-network
   
   networks:
       gramax-network:
           name: gramax-network
   
   ```

   [/cut]

3. Задайте переменные среды:

   1. `ROOT_PATH` -- путь до папки, в которую будут склонированы каталоги. Если не указан, то создается папка с названием `gramax`.

   2. `ADMIN_LOGIN` -- логин администратора. По умолчанию используется `admin`.

   3. `ADMIN_PASSWORD` -- пароль администратора. По умолчанию используется `password`.

   4. `COOKIE_SECRET` -- ключ для шифрования секретов пользователя в куках. По умолчанию используется `.`, рекомендуется заменить его 32-байтный ключ (сгенерировать можно используя `openssl rand -hex 32`).

   5. Порты

      1. `PORT` -- порт докпортала. По умолчанию используется 80.

      2. `EDITOR_PORT` -- порт приложения для редактирования. По умолчанию используется 81.

      3. `CORS_PORT` -- порт CORS сервиса. По умолчанию используется 82.

   6. URLs

      1. `CORS_SERVICE_URL` -- URL CORS сервиса. Обязтельное значение для работы образа `gramax-editor`

## Команды управления

-  Для запуска выполните команду ` docker compose up `.

-  Чтобы остановить контейнеры, используйте ` docker compose down `.

-  Для обновления остановите контейнеры и выполните ` docker compose pull && docker compose up `.