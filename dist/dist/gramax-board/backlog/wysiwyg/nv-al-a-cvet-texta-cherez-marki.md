---
order: 1.25
title: "@NV @AL [a] Цвет текста через марки"
---

Сейчас цвет текста можно установить только через markdown: `[color:red] [/color]`. Хотелось бы иметь возможность сделать через дополнительную панель, всплывающую над выделенным текстом:

![](./nv-al-a-cvet-texta-cherez-marki.png "Дополнительная панель")

## Референсы

Но лучше попросить Эльмира сделать

:::info:true Стандартное

![](./nv-al-a-cvet-texta-cherez-marki-5.png)

:::

:::info:true Material UI

[Ссылка](https://github.com/viclafouch/mui-color-input)

![](./nv-al-a-cvet-texta-cherez-marki-4.png)

:::

:::info:true Notion

![](./nv-al-a-cvet-texta-cherez-marki-2.png)

:::

:::info:true Моё предложение

![](./nv-al-a-cvet-texta-cherez-marki-3.png)

:::

## Критерии

1. Выбор цвета доступен через дополнительную панель

2. Отображается в Markdown: `[color:#ff0000] text [/color]`

## Технические критерии

1. Цвет является не узлом, а маркой.

2. Марка цвета может смешиваться с другими марками: `[color:#ff0000]**ffff**[/color]`