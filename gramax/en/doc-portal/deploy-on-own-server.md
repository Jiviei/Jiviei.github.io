---
order: 0.2
title: Deploy on Your Own Server
---

You can deploy the Documentation Portal for readers on your own server using the Gramax Docker image. Deployment in Docker is supported from version 20.10.

:::tip 

If you don't have your own server, the portal for readers can also be [deployed in Yandex Cloud](./yandex-cloud).

:::

### Starting Up

1. Download the ready-made file using the command `curl -LO https://gram.ax/docker-compose.yaml`.

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

2. Set environment variables:

   1. `ROOT_PATH` -- path to the folder where catalogs will be cloned. If not specified, a folder named `gramax` will be created.

   2. `ADMIN_LOGIN` -- administrator login. If not specified, `admin` is used.

   3. `ADMIN_PASSWORD` -- administrator password. If not specified, `password` is used.

   4. `PORT` -- application port. If not specified, port 80 is used.

   5. `AUTO_PULL_TOKEN` -- token for automatic synchronization. If not specified, catalogs will not be automatically updated.

   6. `AUTO_PULL_INTERVAL` -- interval for automatic synchronization. If not specified, catalogs will be updated every 3 minutes.

   7. `COOKIE_SECRET` -- key for encrypting user secrets in cookies. If not specified, `.` is used, but it is recommended to replace it with a 32-byte key (can be generated using `openssl rand -hex 32`).

### Management Commands

-  To start, run the command `docker compose up`.

-  To stop the containers, use `docker compose down`.

-  To update, stop the containers and run `docker compose pull && docker compose up`.

:::info Deploy with Podman

If you are deploying the portal using Podman:

1. Create a folder where all catalogs will be located. You can do this at the path specified in the `ROOT_PATH` environment variable. If you haven't specified it, create a folder named `gramax` next to the `docker-compose` file.

2. Replace `docker` with `podman` in all commands.

:::