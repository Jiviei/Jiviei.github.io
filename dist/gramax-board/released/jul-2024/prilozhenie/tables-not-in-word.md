---
order: 5.68
title: "@KV @AM [done] Таблицы не в word"
---

<https://support.ics-it.ru/issue/GXS-1916>

Проблема заключается в том, что во многих других редакторах **отличных от word,** таблицы имеют скукоженный вид

{% table %}

---

*  {% isHeader=true %}

   фывафыва

*  {% colwidth=[280] isHeader=true %}

   фываыва

*  {% isHeader=true %}

   фывафыва

---

*   

*  {% colwidth=[280] %}

   

*   

---

*   

*  {% colwidth=[280] %}

   

*   

{% /table %}

![](./tables-not-in-word-problema-tablic-v-drugikh-redaktorakh-2.png "Эта таблица в word")

![](./tables-not-in-word-problema-tablic-v-drugikh-redaktorakh-3.png "Та же таблица в LibreOffece")

Более подробно проблема описана в [этом](https://github.com/dolanmiu/docx/issues/216) обсуждении.

## Критерии

-  Теперь ширина колонки будет фиксированной ширины - это позволит сделать нормальную таблицу в текстовых редакторах, отличных от word

-  Если пользователь поменял ширину таблицы внутри редактора gramax вручную, сделав ширину **фиксированной**, то и в экспорте таблица будет соответственной ширины

![](./tables-not-in-word-4.png "Word")

![](./tables-not-in-word-5.png "LibreOffice")

-  Если таблица будет влезать за рамки страницы, то таблица будет ужиматься, по  формуле `ширинаЯчекиНовая = ширинаЯчекиСтарая*коэфициентСужения`, где `коэфициентСужения = ширинаСтраницы / суммаШиринВсехСтолбцов`

![](./tables-not-in-word-8.png)

-  У заметок и блока кода сделать ширину на всю страницу, если один блок находится внутри другого, то максимальную ширину уменьшить до необходимого

-  Аналогично с вкладками

![](./tables-not-in-word-14.png "Word")

![](./tables-not-in-word-11.png "LibreOffice")

-  Таблица базы данных

![](./tables-not-in-word-16.png "Word")

![](./tables-not-in-word-15.png "LibreOffice")

## Ограничения

-  Картинки вне word будут некрасивыми

![](./tables-not-in-word-6.png "gramax")

![](./tables-not-in-word-10.png "Word")

![](./tables-not-in-word-9.png "LibreOffice")
