---
order: 5.2
title: "@SY @AM [porev] Ключи доступа не в GLS "
---

Сейчас GES (Gramax Enterprise Server) не может работать в закрытом контуре потому что ему необходима связь с GLS (Gramax Licence Server) для получения информации о лицензиях. Необходимо сделать так, чтобы ключи были безопасны и  работали в GES в закрытом контуре.

Также сейчас есть проблема с большим кол-вом обращений к GLS из-за проверки наличия лицензии при синхронизации и публикации.

## Критерии

-  Лицензионный ключ формируется приватным ключом, который можно расшифровать только публичным ключом.

-  Публичный ключ с помощью которого можно будет расшифровать лицензионный ключ будет захадкожен в коде

-  В лицензионном ключе будет хранится информация о дате окончания лицензии и о кол-ве редакторов

-  В настроках GES появится еще 1 параметр:

   -  `LICENCE_KEY` -- лицензионный ключ

-  GLS больше не нужен, вместо него будет GEPS (Gramax Enterprise Provider Server), который будет выдавать по почте пользователя URL до GES, при входе в app.gram.ax

-  В  версию приложений добавлен `GES_URL` для привязки приложения сразу к какой-нибудь GES и заменен `GLS_URL` на `GEPS_URL`.

## Тесты

-  Тестов не будет

## Оцека

-  Анализ: 2ч

-  Реализация: 12ч

## Следующие этапы

-  Необходима длобавить возможность  для приложения для редактироавния, чтобы он был захардкожен на определенный GES и не обращался на GEPSS