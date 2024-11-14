---
order: 4
title: Load a Catalog to the Documentation Portal
---

Open the Documentation Portal, available at: `http://{ip address}:{port}/admin`. Where:

-  `ip address` -- *Public IPv4* address of the virtual machine.

-  `port` -- specified in the docker-compose. If you left it at default, you can omit the port.

Follow the resulting link to access the admin panel of the Documentation Portal.

1. Enter the administrator login and password. These were specified when deploying the Documentation Portal. If not specified, use the default: `admin`/`password`.

   ![](./_index_0.png)

2. Connect the storage, as [you did in the application](./../create-catalog).

3. Click `Load Existing` and select the catalog in the storage.

4. Click `Load` -- the catalog will appear on the main page and become accessible to readers via the same link.