---
order: 11
title: "[PS] Показывать окно подтверждения при важных операциях git"
---

Сейчас, если пользователь будет переключать ветку, во время этой операции он может обновить страницу и сломать что-то в каталоге. Будет неопределённое поведение грамакса. Поэтому стоит открывать  стандартное окошко `подтверждения` перезагрузки страницы.

Критерии:

-  \[ \] показывать окно подтверждения во всех важных операциях git, где перезагрузка страницы может всё сломать.