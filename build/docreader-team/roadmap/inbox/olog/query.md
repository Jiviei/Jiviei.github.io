---
order: 3
title: Написание запросов
---

Возможно тут лучше подойдёт язык для выборки из графов, но sql более популярный.

```
select Ингредиенты
from Рецепты для жизни
```

```
select Рецепты
from Рецепты для жизни
where Ингредиенты != 'Яйцо'
and relation = 'включает'
```

Нужны будут возможности:

-  В любом месте статьи написать запрос и увидеть результат.

-  Вернуть просто список элементов с тултипами.

-  Вернуть объединение всех статей из списка в одну статью.\
   Например, я хотел бы все статьи узла Структура документации запросом склеить в одну статью.