---
order: 6
title: "@SY @AL [done] Ошибки в командах"
---

Сейчас у нас нет стандартного окна вывода ошибок, могут выводится совсем странные ошибки с каким-то непонятным текстом. Хотелось бы чтобы пользователи не пугались такими ошибками.

## Критерии

-  \[x\] Непонятный для пользователей ошибки больше им не выводятся. Вместо этих ошибок будет выводиться модалка вида:

   **Заголовок:** Что-то пошло не так

   **Текст:**

   Перезагрузите страницу и попробуйте еще раз.

   Мы  получим сообщение о проблеме и постараемся ее быстро исправить. Если ошибка блокирует работу -- напишите об этом в нашем [Telegram-чате](https://t.me/gramax_chat).

   :::hotfixes:true Технические детали

   ```json
   RangeError: (Command: storage/sync) Applying a mismatched transaction
       at EditorState.applyInner (index.js:833:19)
       at EditorState.applyTransaction (index.js:797:45)
       at EditorState.apply (index.js:773:21)
       at Editor.dispatchTransaction (index.js:3931:34)
       at EditorView.dispatch (index.js:5610:33)
       at Object.ut [as run] (index.js:85:22)
       at onClick (CodeMenuButton.tsx:9:55)
       at Object.Nb$2 (react-dom.production.min.js:54:317)
       at Tb$2 (react-dom.production.min.js:54:471)
       at Ub$1 (react-dom.production.min.js:55:35)
   ```

   :::

-  \[x\] В bugsnag приходит инфа о том в какой команде случилась ошибка.

-  \[x\] Дефолтные ошибки больше не приходят в bugsnag.

## Замечания

-  Подумать над кнопками и шириной модалки