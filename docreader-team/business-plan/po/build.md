---
order: 2
title: Инструкция по развертыванию ПО
---

Инструкция по развертыванию программного обеспечения Gramax.

## Введение

Документ «Инструкция по развертыванию ПО» содержит порядок действий, выполняемых для развертывания программного обеспечения для создания пользовательской документации «Gramax» (далее – ПО).

## Развертывание портала для читателей

### Необходимое ПО

Для развертывания приложения необходим сервер  с установленной системой контейнеризации Docker 20.10 или выше и наличием доступа в сеть Интернет.

### Предварительная подготовка

1. Установите docker согласно инструкции: <https://docs.docker.com/engine/install/>

2. Установите docker-compose согласно инструкции: <https://docs.docker.com/compose/install/>

### Запуск

1. Скачайте готовый файл командой `curl -LO https://gram.ax/docker-compose.yaml`.

   [cut:docker-compose.yaml:false]

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
   
     diagram-renderer:
       image: gramax/gramax-diagram-renderer:latest
       container_name: gramax-diagram-renderer
       networks:
         - gramax-network
       restart: unless-stopped
   
     c4viz:
       image: gramax/gramax-c4-server:latest
       container_name: gramax-c4viz-server
       networks:
         - gramax-network
   
   networks:
     gramax-network:
       name: gramax-network
   ```

   [/cut]

2. Задайте переменные среды:

   1. `ROOT_PATH` -- путь до папки, в которую будут склонированы каталоги. Если не указан, приложение не запустится.

   2. `ADMIN_LOGIN` -- логин администратора. По умолчанию используется `admin`.

   3. `ADMIN_PASSWORD` -- пароль администратора. По умолчанию используется `password`.

   4. `PORT` -- порт приложения. По умолчанию используется 80.

### Команды управления

-  Для запуска выполните команду `docker compose up`.

-  Чтобы остановить контейнеры, используйте `docker compose down`.

-  Для обновления остановите контейнеры и выполните `docker compose pull && docker compose up`.

## Развертывание приложения для редактирования

### Необходимое ПО

Для развертывания приложения необходим персональный компьютер с операционной системой Windows и доступом в сеть Интернет.

### Установка

1. Скачайте приложение -- <https://docs.ics-it.ru/api/download?platform=win>.

2. Откройте приложение.

## **Контакты**

-  [stanislav.yargunkin@gram.ax](mailto:stanislav.yargunkin@gram.ax)

-  [ekaterina.pavlova@gram.ax](mailto:ekaterina.pavlova@gram.ax)