---
order: 1
title: "@SF @AL  [open] Исправление текста в выпадающем меню"
properties:
  - name: Assignee
    value: SF
  - name: PO
    value: AL
  - name: Release
    value: october-24
---

Сейчас есть замечания по тексту, который используется поиске с выпадающем меню.

### Референс

-  material-ui



:::info:true Material-ui dropdown

![](./ispravlenie-poiska-v-vypadayuschem-menyu-2.png)

:::

:::info:true Текущая реализация

![](./ispravlenie-poiska-v-vypadayuschem-menyu.png)

:::

:::info:true Пример новой реализации

[image:./ispravlenie-poiska-v-vypadayuschem-menyu-3.png::Пример 1:0,0,100,100:81:]



![](./ispravlenie-poiska-v-vypadayuschem-menyu-6.png "Пример 1_en")

:::



### Критерии

-  Новый текст не включает значение из инпута.

-  Новый текст:

   -  ru: «Ничего не найдено»;

   -  en: «No results found».



### Оценка

-  анализ: 30м.

-  реализация: 1ч