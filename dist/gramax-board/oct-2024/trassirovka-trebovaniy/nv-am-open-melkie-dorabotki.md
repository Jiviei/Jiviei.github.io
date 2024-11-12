---
order: 4.3
title: "@NV @AM [test] Мелкие доработки"
---

## Критерии

1. `Counter`, `counter-link` убраны.

2. Добавить `select` для view компонента

   ```yaml
   [view:Assignee=SF&SY,Important: orderby=Assignee,Important:groupby=Assignee:select=Important,TimeSpent]
   ```

3. Фильтр

   1. Переименовать «Все» --> «Выбрать все». Переместить в самый верх

   2. Пусто (отображать статьи, не имеющие выбранного свойства).

4. Скругление для `view`

5. Свойство `numeric | estimation`

6. Отображение кнопок у `view` в правом верхнем углу, появляются при фокусе, не сдвигая контент