---
order: 1.3
title: "@SY @AL [open] AI"
---

В ближайшие годы точно будет бурное развитие LLM и нам, как создателям базы знаний, обязательно надо вписаться в этот тренд.

### Что можно сделать

-  Сложные интеллектуальные функции, работа на уровне каталога на докпортале:

   -  **Поиск по смыслу**. На докпортале контент, который можем индексировать в LLM при его обновлении, и потом на основе него отвечать на вопросы.

   -  **Чат-бот с ответами на вопросы по каталогам**. Обновление базы при каждом пуше. Интерфейс в мессенджере (уже есть в Яндекс.Мессенджере), в докпортале (пригодится в [ics-it.gram.ax](http://ics-it.gram.ax)), в виде отдельного виджета (пригодился бы в MDT).

   -  **Проверка по смысловым стайлгайдам в CI/CD**. Сейчас стайлгайды очень алгоритмические, по ним сложно проверять.

   -  **Проверка по смыслу.** При внесении изменений проверять не дублируется ли или не противоречит ли новая информация тому, что уже было в базе знаний.

   -  **Встройка нового требования в БЗ**. Чтобы можно было попросить добавить информацию в сыром виде (просто сообщением или скопировав из мессенджера). И чатбот бы добавил в нужные статьи и попросил бы подтверждения от юзера.

-  Простые функции в редакторе:

   -  **Помощь с фрагментами текста**. Переформулировать текст, сократить, перевести.

### Как продавать

-  Работу с фрагментами текста можем сделать бесплатной с лимитом кол-ва запросов в день по юзеру/IP-адресу.

-  Сложные функции нужно делать как часть Server -- либо Enterprise Server либо платное облако.

### Примерный план

1. Первым этапом использовать OpenAI, сейчас это уже реализовано в нашем чатботе в Яндекс.Мессенджере, который работает на каталогах грамакса

2. Параллельно:

   -  Арендовать или купить сервер с мощным GPU и развернуть там LLM (например, Mistral или LLaMa). Сделать интегацию с этой LLM.

   -  Настроить через промпт-инжиниринг по нашим юзкейсам.