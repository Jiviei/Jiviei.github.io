---
title: Diagram Renderer
order: 1
---

Diagram Renderer -- это микросервис, позволяющий рендерить текстовые диаграммы. В сравнении с предыдущим способом создания диаграмм, у него есть несколько преимуществ:

-  Меньший размер дистрибутива локального приложения.
-  Отделенный рендеринг и поддержка --  благодаря этому мы сможем легко добавлять новые виды диаграмм в DocReader, достаточно будет настроить поддержку в этом сервисе.
-  Рендеринг текстовых диаграмм в своих целях -- разработчики нашей компании смогут использовать сервис для создания текстовых диаграмм.

Сам сервис находится по адресу <https://diagram-renderer.ics-it.ru/>, OpenAPI-спецификацию для него можно будет посмотреть [тут](https://diagram-renderer.ics-it.ru/api-docs/).