---
order: 2
title: "[open] Создание сервисного пакета для VK cloud"
---

Для того чтобы загрузить сервис в VK cloud нужно создать сервисный пакет для сервиса.

#### Критерии приемки

-  Создан сервисный пакет

#### Нужно будет сделать

1. `full_description.md`

   -  Полное описание сервиса.

2. `service.yaml`

   -  Параметры сервиса и его тарифные планы.

3. Папка `images`

   -  Файлы с изображением иконки сервиса для Магазина.

   -  Файлы иконки с расширением `.png` или `.svg`.

4. Папка `parameters`

   -  Содержит файлы, описывающие опции всех тарифных планов сервиса.

   -  Файлы `<PARAMETR_NAME>.yaml` описывают отдельные опции тарифных планов.

5. Папка `plans`

   -  Содержит все тарифные планы сервиса.

   -  Внутри находятся отдельные папки для каждого плана `<PLAN_NAME>`.

      -  Каждая папка содержит файлы, описывающие один конкретный тарифный план.

         -  `plan.yaml` описывает параметры конкретного тарифного плана.

         -  `display.yaml` описывает мастер конфигурации тарифного плана, отображаемый в Магазине при подключении сервиса и обновлении тарифного плана.

         -  Папка `deployment` содержит манифест Terraform.

            -  Файл `deploy.tf` описывает инфраструктуру и процесс разворачивания конкретного тарифного плана сервиса в облачной платформе.