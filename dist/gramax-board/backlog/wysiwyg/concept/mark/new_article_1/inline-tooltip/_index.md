---
order: 1
title: С настройками
---

### Управление с клавиатуры

Когда в инлайновый элемент **заходят с клавиатуры,** курсор остается в статье и под инлайновым элементом появляется попап с настройками.

1. При нажатии `стрелка Вниз` фокус переходит в попап и фокусируется в компонент [alfa] в попапе

2. При нажатии `стрелка Вверх`, когда фокус в попапе он устанавливается в положение, которое было до фокусировки в попап, состояние внутри попапа сохранятся в редакторе, но не в статье

   1. однострочный инпут,  `стрелка Верх/стрелка Вниз/Enter` работают в пределах попапа !!!

   2. многострочный инпут, `стрелка Верх/стрелка Вниз/Enter` работают в пределах инпута !!!

3. При нажатии `Escape`, когда попап открыт он закрывается и все изменения не сохраняются

4. При нажатии `Enter` внутри попапа, попап закрывается, изменения сохраняются, фокус возвращается

5. При создании инлайнового элемента открывается попап и  фокусируется в компонент [alfa] в попапе

### Управление мышью

При **Наведение** на инлайновый элемент, состояние курсора не изменяется (остается **cursor: text**).

По нажатию **ЛКМ** на инлайновый элемент курсор встает туда, куда кликнул юзер.

### Открытые вопросы

1. Как клавиатурой переходить по компонентам внутри попапа

## Ссылка

### В режиме редактирования

Убрать ссылку с нижней панели редактирования и оставить только в панели, которая появляется при выделении текста.

Попап содержит компоненты:

1. если указана ссылка:

   1. переход по ссылке (компонент [alfa]), работает также как нажатие на ссылку в режиме просмотра

      1. иконка файла, если статья и заголовок статьи

      2. иконка папочки, если раздел и заголовок раздела

      3. иконка глобуса, если внешняя, сама ссылка и иконка внешней ссылки

   2. редактировать ссылку (карандаш), по нажатию появляется инпут с выпадающее меню в котором выделена ссылка, и попап меняется на вид без ссылки

   3. скопировать ссылку (копи) -- копирует ссылку

   4. удалить ссылку (корзина) -- удаляет ссылку

2. если ссылка не указана:

   1. инпут с выпадающим меню (компонент [alfa]) -- для ввода ссылки, или выбора статьи/раздела

   2. удалить ссылку -- удаляет ссылку

### В режиме просмотра

По нажатию на ссылку с статьей - переходит в статью в текущей вкладке. С зажатым `Control` открывает статью/раздел в новой вкладке.

По нажатию на ссылку с внешней ссылкой - открывает новое окно.

По нажатию на **не валидную** ссылку - ничего не происходит.