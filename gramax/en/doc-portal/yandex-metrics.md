---
order: 1.5
title: Yandex Metrica Integration
---

You can connect Yandex Metrica to your Documentation Portal. This will allow you to see detailed statistics about who accessed the portal, where they came from, and which article they visited from search results.

1. [Create a counter in Yandex Metrica](https://yandex.ru/support/metrica/general/creating-counter.html).

2. Copy the counter number.

3. In [docker-compose.yaml](./../quick-start/own-server/_index) for Gramax, add an environment variable for this counter:

   ```
   YANDEX_METRIC_COUNTER:{meter number}
   ```

4. Restart `docker-compose.yaml`.