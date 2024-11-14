---
order: 3
title: Разворачивание Gramax на собственном сервере
---

Gramax поддерживает разворачивание в Docker начиная с версии 20.10. Gramax можно развернуть используя `docker compose`.

## Переменные среды

Независимо от того, какой способ разворачивания вы выберете, в Docker-образе необходимо указать переменные среды:

1. `ROOT_PATH` -- путь до папки в которой будут хранится каталоги. Если не указан, то по умолчанию создается папка в каталоге с `docker-compose.yaml`

2. `ADMIN_LOGIN` -- логин администратора. Если не указан, то по умолчанию используется `admin`.

3. `ADMIN_PASSWORD` -- пароль администратора. Если не указан, то по умолчанию используется `password`.

4. `PORT` -- порт приложения. Если не указан, то по умолчанию используется 80.

## Разворачивание

### Запустить

#### Создание файла

Для работы с Gramax через docker compose вы можете выбрать один из следующих способов:

1. Использование готового docker compose файла. Скачайте его командой `curl -LO https://gram.ax/docker-compose.yaml`.

2. Создание собственного docker-compose.yaml. Если вы хотите подогнать запуск приложения под свои нужды, вы можете составить собственный `docker-compose.yaml`. Вот пример базовой конфигурации `docker-compose.yaml`:

```yaml
services:
  gramax:
    image: gramax/gramax:latest
    container_name: gramax
    restart: unless-stopped
    ports:
      - ${PORT:-80}:80
    environment:
      - ADMIN_LOGIN=${ADMIN_LOGIN:-"admin"}
      - ADMIN_PASSWORD=${ADMIN_PASSWORD:-"password"}
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

#### Запуск

После создания или загрузки файла docker-compose.yaml, укажите необходимые переменные среды и выполните команду `docker compose up` для запуска.

### Остановить

Для остановки используйте команду: `docker compose down`.

### Обновить

Для обновления контейнера используйте команду

```shell
docker compose pull && \
docker compose up
```