---
order: 2
title: Модальные окна
---

Модальное окно -- это эмуляция диалогового окна браузера, появляющегося поверх страницы в ответ на действия пользователя и блокирующего доступ к основному содержимому страницы. Модальное окно появляется поверх страницы, затемняя ее. Это помогает сфокусировать внимание пользователя на конкретных действиях, не теряя при этом общий контекст.

## Заголовок

1. Выполнение задачи. Если модальное окно появляется для выполнения одной задачи, смысл этой задачи отражается в заголовке. Формулировка отвечает на вопрос *ЧТО?*.

   > Например: ***Проверка на ошибки, Настройка каталога, Публикация изменений***.

2. Ошибка. Если модальное окно сообщает об ошибке, смысл ошибки также должен быть отражен. Слово Ошибка не дает конкретики, потому заменяем на Не удалось.

   > Например: ***Не удалось создать статью.***

3. Подтверждение. Если модальное окно требует подтверждения действия, в заголовке ставится знак вопроса.

   > Например: ***Удалить статью?, Отменить изменения?.***

## Текст

В тексте модального окна должно подробно объясняться, что конкретно произошло. Также должны быть рекомендации, что стоит сделать пользователю.

## Действия

В модальном окне должны быть 2 кнопки действия:

1. Кнопка в черной рамке -- действие по умолчанию, сохраняет проделанную работу или подтверждает команду.

   > Например: ***Сохранить, Решить конфликт, Удалить***.

2. Кнопка отмены -- закрывает модальное окно не выполняя основное действие. По умолчанию это ***Отменить***.\
   Если кнопка Отменить дублирует основную информацию окна, (Например, в окне написано: *Отмените изменения и попробуйте еще раз*), заменяем ***Отменить*** на ***Понятно***.

## Закрытие модального окна

Закрыть модальное окно можно двумя способами:

-  Кликнуть крестик в правом верхнем углу окна.

-  Воспользоваться кнопкой подтверждения или отмены.

## Наложение модальных окон

Если нужно вызвать из модального окна еще одно модальное окно, при открытии нового окна затемнение не должно множиться. Затемнение должно быть одно, все открытые ранее модальные окна должны быть помещены под него.

Таких ситуаций лучше избегать.