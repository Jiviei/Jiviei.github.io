---
order: 5
title: "@SF @AM [dev] Иерархия статей при выборе ссылки"
properties:
  - name: Assignee
    value:
      - SF
  - name: PO
    value:
      - AM
  - name: State
    value:
      - analysis
  - name: Release
    value:
      - october-24
---

Сейчас при выборе ссылки, не видно родительские статьи, поэтому можно запутаться, когда есть статьи с одинаковыми или похожими именами.

:::info:true Макет меню без фильтра

![](./ierarkhiya-statey-pri-vybore-ssylki-2.png)

:::

:::info:true Макет выпадающего меню с фильтром

![](./ierarkhiya-statey-pri-vybore-ssylki.png)

:::

### Критерии

-  Без фильтра ссылки на статьи отображаются, как в навигация левого сайдбара.

-  При фильтрации показываются ссылки с breadcrumb над ними;

-  Ширина поиска увеличена на 30px;

-  В выпадающем меню, место под шеврон для открытия ссылок на заголовок нету, оно появляется при наведении на пукт;



:::info:true Вид максимальной вложенности

![](./ierarkhiya-statey-pri-vybore-ssylki-5.png)

:::

:::info:true Макет иерархии ссылок

{% table %}

---

*  {% colwidth=[269] %}

   ![](./ierarkhiya-statey-pri-vybore-ssylki-3.png)

*  {% colwidth=[311] %}

   ![](./ierarkhiya-statey-pri-vybore-ssylki-4.png)

{% /table %}

:::



### Оценка

-  анализ: 5ч;

-  реализация: 24ч;