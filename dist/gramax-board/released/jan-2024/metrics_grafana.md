---
order: 8
title: "[SP] [tech] Метрики для Grafana"
---

Сейчас мы можем понять почему не отвечает докпортал только по косвенным признакам. Поэтому нужно сделать метрики для Grafana, чтобы можно было следить за происходящим внутри приложения (время запросов, состояние сборщика мусора и т.д.).

#### Критерии приемки

-  С эндпоинта `api/metrics` можно получать метрики для `Prometeus`.

-  В метриках можно получить статистику по времени запросов, состоянии сборщика мусора.

#### Срок

4 часа - 1 день