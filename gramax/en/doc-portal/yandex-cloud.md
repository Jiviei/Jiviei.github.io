---
order: 0.4
title: Deploy in Yandex Cloud
---

The reader portal can be deployed [on your own server](./../quick-start/own-server/_index) or in any public cloud. As an example, let's consider deployment in Yandex Cloud.

1. [Create an account in Yandex Cloud](https://cloud.yandex.ru/ru/docs/getting-started/individuals/registration) or log into an existing one.

2. Create a resource *Virtual Machine*.

3. Specify the machine name -- for example, *GramaxTest*.

4. Go to the `Container solution` tab and click *Configure*.

5. Navigate to the `Docker compose` tab.

6. Go to the link [gram.ax/docker-compose.ya-cloud.yaml](http://gram.ax/docker-compose.ya-cloud.yaml) and copy the file text. Paste it into the `Docker compose` field. You can change some parameters:

   1. Port number. If you have something running locally on port 80, replace `80:80` with `<an unused port>:80`.

   2. Admin login and password. The administrator adds and updates new catalogs on the portal. To prevent unauthorized access, change these credentials.

7. Click *Apply*.

8. In the *Access* block, provide any name and generate an SSH key. To do this, open a console on your computer:

   1. Enter the command: `ssh-keygen -t ed25519 -f ~/.ssh/yandex_cloud_gramax`.

   2. Press *Enter* three times.

   3. Copy the key using: for Mac -- `cat ~/.ssh/yandex_cloud_gramax.pub | pbcopy`, for Windows -- `cat ~/.ssh/yandex_cloud_gramax.pub | clip`.

9. Return to Yandex Cloud and paste the key in the field. Also, set the admin login -- for example, *TestGramax*.

10. Click *Create VM*.
