---
title: Изменения в работе команды
order: 1
---

## Поддержка

Сейчас поддержка должна быть у нас приоритетнее, чем разработка. Каждую заявку на поддержку связываем с эпиком на стабилизацию.

**Как меняем сроки SLA:**

-  Blocker -- 12 часов.

-  Critical -- 36 часов.

-  Normal и ниже -- без SLA.

**В каком порядке решаем:**

*Blocker и Critical* -- если можно исправить целиком в срок SLA -- исправляем. Если к решению нужно подойти системно и много исправлять -- делаем нашлепку, которая временно закроет проблему. Параллельно заводим заявку в разработку и исправляем в ближайшем спринте по эпику стабилизации.

*Normal и ниже* -- рассчитываем ценность по формуле: ценность/стоимость.

-  Ценность -- это насколько большая доля юзеров затронута этим багом и насколько он им сильно мешает в работе. Например, если ошибка появляется у 2 пользователей из 80 (за 100% считаем всех сотрудников компании) -- затронуто 2.5% юзеров. Ошибка появляется 1 раз за 5 кликов -- 2.5%/5 = 0.5% использования. Ценность этого бага небольшая, но если его исправить легко -- лучше исправить.

-  Стоимость -- сколько времени мы затратим на исправление бага.

При этом всегда помним: если баг заметил один юзер, это не значит, что у остальных его нет. Может пока просто не нашли.

**Что меняем в процессе работы:** добавляем бэклог по доске поддержки. В начале рабочего дня смотрим, что у нас в ближайших днях по SLA. Если срочного ничего нет -- решаем по порядку в бэклоге. Бэклог Катя обновляет каждый день.

## 