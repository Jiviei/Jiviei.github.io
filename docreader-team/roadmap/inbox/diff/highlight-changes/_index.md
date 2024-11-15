---
order: 2
title: Логика подсветки
---

Ниже описан улучшенный подход трекинга изменений по отношению к MS Word, Google docs, Confluence и других подобных систем.

Юзкейсы:

-  Посмотреть историю изменений относительно выбранной версии.\
   Делается через историю изменения статьи. Можно через cmd + клик посмотреть изменения выбранной версией относительно любой другой.

-  Посмотреть что нового добавилось в статье, относительно последнего просмотра.\
   Изменения отображаются в статье, пока пользователь не уйдёт в другую статью или пока не начнёт писать. После этих событий изменения можно посмотреть в истории изменений.

-  Просмотр изменений при коммите. В стандартном окне просмотра изменений.

-  Резолв конфликта при скачивании.\
   Показываем мои изменения как последнюю версию, а чужие -- относительно которых строим дифф.

-  Резолв конфликта при мёрж реквесте.\
   Показываем source branch  как последнюю версию, а target branch -- относительно которой строим дифф.

   -  Подтверждение изменений -- на уровне строк.

   -  Минорные изменения показываем все.

### Отображение изменений в статье

:::tip Предпочтительный вариант удаления

Можно не зачёркивать слова или предложения, чтобы не перегружать юзера, а отображать красный крестик или кружок на месте удаления. При наведении курсора будет отображаться удалённый кусок в тултипе.

:::

1. Изменение слов:

   1. Если поменялось больше одной буквы в слове, то считаем что поменялось всё слово.

   2. Если в слове поменялась одна буква, то зачёркиваем старую букву и показываем рядом новую. Считаем это минорным изменением.

2. Изменение предложений:

   1. Если поменялось меньше 20% слов в предложении, то зачёркиваем старые слова и показываем рядом новые.

   2. Если поменялось больше 20% слов в предложении, то зачёркиваем всё предложение и пишем его заново.

   3. Если из предложения удалён целостный кусок в начале или в конце предложения, то зачёркиваем этот кусок, даже если он больше 20%.

   4. Если удалено всё предложение, то зачёркиваем его.

3. Комментарии:

   1. Т.к. у нас комментарии на абзац, то отображаем их как обычно.

   2. Абзац был удалён, а в нём есть не зарезолвленные комментарии, то стоит визуально отобразить это. Например, жёлтой точкой над символом удаления.

   3. При наведении на удалённый абзац мы видим удалённый текст в тултипе и комментарий справа или под текстом.

### Тултип изменений

-  При наведении на добавленные, изменённые, удалённые куски текста, в тултипе рядом с курсором отображаем кем было сделано изменение и когда.

-  В тултипе есть возможность отменить изменение.

-  Вернуть отменённое можно только через cmd + z.

### Режим отображения минорных изменений

Режим отображения минорных изменений показывает изменения, которые не влияют на смысл и убраны из режима по умолчанию, чтобы не сбивать ревьюера. По умолчанию отключен.

:::tip 

Можно подумать как обойтись без специального режима. Например, подсвечивать места минорных изменений цветом, а при наведении курсора показывать в тултипе изменение.

:::

-  Изменение регистра букв.

-  Изменение знаков препинания и пробелов.

-  Изменение порядка нумерации в списке.

-  Изменение типа маркированного списка.

-  Изменение форматирования.

### Стили

-  Зачёркивание должно быть очень легковесным, т.к. читателю необходимо иногда перечитывать старую версию и новую.