---
order: 3
title: Deploy Documentation Portal
---

You can deploy the Documentation Portal on your own server using the Gramax Docker Compose. Deployment in Docker is supported starting from version 20.10.

:::tip 

If you don’t have your own server, you can also [deploy in Yandex Cloud](./../../doc-portal/yandex-cloud).

:::

### Launch

1. Download the file with the command `curl -LO https://gram.ax/docker-compose.yaml`.

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

2. Set the environment variables:

   -  `ROOT_PATH` -- the path to the folder where the catalogs will be cloned. If not specified, a folder named `gramax` will be created.

   -  `ADMIN_LOGIN` -- administrator login. If not specified, `admin` will be used.

   -  `ADMIN_PASSWORD` -- administrator password. If not specified, `password` will be used.

   -  `PORT` -- application port. If not specified, 80 will be used.

   -  `AUTO_PULL_TOKEN` -- token for automatic synchronization. If not specified, catalogs will not be automatically updated.

   -  `AUTO_PULL_INTERVAL` -- interval for automatic synchronization. If not specified, catalogs will be updated every 3 minutes.

   -  `COOKIE_SECRET` -- key for encrypting user secrets in cookies. If not specified, `.` will be used. It is recommended to replace it with a 32-byte key (you can generate it using `openssl rand -hex 32`).

### Management Commands

-  To start, run the command `docker compose up`.

-  To stop the containers, use `docker compose down`.

-  To update, stop the containers and run `docker compose pull && docker compose up`.

:::info Deploying with Podman

If you are deploying the portal using Podman:

1. Create a folder to hold all the catalogs. You can do this at the path specified in the environment variable `ROOT_PATH`. If not specified, create a `gramax` folder next to the `docker-compose` file.

2. Replace `docker` with `podman` in all commands.

:::