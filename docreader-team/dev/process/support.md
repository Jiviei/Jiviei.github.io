---
title: Работа на доске поддержки
order: 2
private: true
---

Техподдержка делится на 3 линии:

-  1 линия -- PO:. Обрабатывает вопросы, уточняет детали, ищет готовое решение. Если решения нет -- передает на 2 линию поддержки.

-  2 линия -- команда разработки. Решает проблемы и отвечает на вопросы, которые вне компетенции 1 линии.

## 1 линия

1. **Анализ и уточнение** [who:PO] [when:После поступления заявки]

   PO просматривает и анализирует заявку. Воспроизводит ошибку. Если что-то не понятно -- связывается с автором и задает вопросы.

2. **Проверка характеристик** [who:PO] [when:После анализа]

   PO проверяет основные характеристики заявки.

   -  *Project* -- `DocReader Support`.

   -  *Team* -- `DR`.

   -  *Type*:

      -  `Support` -- если нужно что-то объяснить.

      -  `Bug` -- если что-то сломалось или работает не так, как задумано.

      -  `Idea` -- пожелание от пользователей.

      -  `US` -- полезное пожелание, которое реализуется в ближайшем спринте.

   -  *Priority*:

      -  `Trivial` -- было бы хорошо решить когда-то потом.

      -  `Minor` -- решим в ближайшие пару недель.

      -  `Normal` -- решим за 4-7 дней.

      -  `Critical` -- решим за 2-4 дня.

      -  `Blocker` -- решим за сутки.

   -  *SLA Review* -- после анализа проставить `Reviewed`.

   -  *Subsystem* -- подсистема, к которой относится заявка.

   Если PO меняет ключевую характеристику (например, приоритет с `Critical` на `Trivial`), в комментариях пишет причину для автора заявки.

3. **Решение заявки** [who:PO] [when:После анализа]

   -  **Если заявку можно решить на 1 линии** -- PO прописывает решение в комментариях к заявке, проставляет себя в *Assignee* и переводит ее в статус `To verify`.

   -  **Если для решения требуется помощь 2 линии** -- PO в комментариях приглашает к диалогу команду разработки.

## 2 линия

1. **Анализ и уточнение** [who:Developer] [when:После поступления заявки]

   Свободный разработчик берет в работу самую приоритетную задачу в `Open`: устанавливает себя в поле `Assignee`, переносит задачу в `Analysis` и начинает анализировать проблему.

   -  Если возникают вопросы к заказчику, то задает вопрос в комментариях и переносит заявку в `Clarification`.

   -  Если все понятно -- описывает план решения и переносит задачу в `Analyzed`.

2. **Решение заявки** [who:Developer] [when:После анализа]

   Разработчик переводит заявку в `In progress` и решает проблему.

3. **Приемка заявки** [who:Developer] [when:После решения заявки]

   Разработчик записывает решение в комментарии и приглашает автора для проверки, переводит заявку в `To verify`.

   -  Если приемка была неуспешной -- разработчик или заказчик переносит заявку в `Open`.

   -  Если приемка была успешной -- разработчик или заказчик переносит заявку в `Done`.

4. **Заполнение полей ретро**[who:Developer] [when:После закрытия заявки]

   После того, как заявка вручную или автоматически перенесена в `To Verify`, разработчик заполняет поля ретро.