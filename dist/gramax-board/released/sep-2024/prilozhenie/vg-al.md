---
order: 18
title: "@VG @AL [cancel] Форматирование таблиц"
---

исходная заявка [Форматирование таблиц : GXS-1903 (](https://support.ics-it.ru/issue/GXS-1903)[ics-it.ru](http://ics-it.ru)[)](https://support.ics-it.ru/issue/GXS-1903)

У нас в таблицах максимальная ширина для столбца, у которого не задана ширина -- 240px. Более правильным решением было бы авто[матиче]()ское масштабирование ширины столбцов в зависимости от содержимого.

## Критерии

-  Нет максимальной ширины для столбца

-  При изменении ширины одного из столбцов таблицы фиксируется ширина остальных столбцов

-  В настройках таблицы есть фиксация ширины [icon:lock] с тултипом `зафиксировать ширину столбцов`

[image:./vg-al-2.png:::0,0,99.9985,100:]

## Оценка

оценка: 24ч

реализвция: -

## Вопросы

-  Кнопка фиксация ширины вжата (то есть ширина зафиксирована), когда

   -  хоть один столбец зафиксирован

   -  все столбцы зафиксировны (\*)

-  если у таблицы фиксированная ширина, то при добавлении столбца

   -  столбц добавляется с фиксированной минимальной шириной (`3em`)

-  Таблицы с неустановленной шириной могут сжаться