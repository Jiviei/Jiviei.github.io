---
order: 6
title: "@NV @AL [done] Копирование из ворда в статью"
---

Сейчас не все элементы, при вставке скопированных элементов из Word, вставляются адаптированными:

1. Списки превращаются в параграфы

2. Ссылки имеют неверные пути

3. Видео, изображения, диаграммы не вставляется

## Критерии

1. При копировании содержимого из Microsoft Office содержимое конвертируется в соответствующие узлы.

   1. Вставляются следующие элементы:

      {% table %}

      ---

      *  {% colwidth=[142] isHeader=true %}

         Тип

      *  {% colwidth=[555] isHeader=true %}

         Примечание

      ---

      *  {% colwidth=[142] %}

         Ссылки

      *  {% colwidth=[555] %}

         И ссылки на заголовки, и ссылки на сторонние ресурсы

      ---

      *  {% colwidth=[142] %}

         Списки

      *  {% colwidth=[555] %}

         

      ---

      *  {% colwidth=[142] %}

         Видео

      *  {% colwidth=[555] %}

         

      ---

      *  {% colwidth=[142] %}

         Изображения

      *  {% colwidth=[555] %}

         Работает только при вставке в десктопном приложении.

         Так же вставляются только недавно добавленные изображения.

      ---

      *  {% colwidth=[142] %}

         Диаграммы

      *  {% colwidth=[555] %}

         Работает только при вставке в десктопном приложении

         Так же вставляются только недавно добавленные диаграммы.

      ---

      *  {% colwidth=[142] %}

         Таблицы

      *  {% colwidth=[555] %}

         

      ---

      *  {% colwidth=[142] %}

         Жирный

      *  {% colwidth=[555] %}

         

      ---

      *  {% colwidth=[142] %}

         Италик

      *  {% colwidth=[555] %}

         

      {% /table %}

   2. Неподдерживаемые элементы вставляются как обычный текст. Если это элемент без содержимого, то он игнорируется.

## Тестирование

1. Вставка списков

2. Вставка видео

3. Вставка таблиц

4. Вставка жирного текста

5. Вставка италик текста