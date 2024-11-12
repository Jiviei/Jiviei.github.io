---
order: 1.5
title: Подключить Яндекс Метрику
---

Вы можете подключить Яндекс Метрику к своему порталу документации. Это позволит детально просматривать: кто, откуда и в какую статью зашел из поиска.

1. [Создайте счетчик в Яндекс Метрике](https://yandex.ru/support/metrica/general/creating-counter.html).

2. Скопируйте номер счетчика.

3. В [docker-compose.yaml](./../quick-start/own-server/_index) Gramax добавьте переменную окружения (environment) на этот счетчик:

   ```
   YANDEX_METRIC_COUNTER:{meter number}
   ```

4. Перезапустите `docker-compose.yaml`.