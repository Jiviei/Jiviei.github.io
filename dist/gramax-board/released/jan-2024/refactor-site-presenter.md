---
order: 17
title: "[SY] [tech] Рефакторинг SitePresenter"
---

В классе “SitePresenter” создаются “Rules” для “Navigation”, хотелось бы логику добавления “Rules” поместить в отдельный класс.

Критерии:

-  Логика добавления  “Rules” в отдельном классе “RulesProvider”.

-  Логика добавления “Rules" отрефакторенатак, чтобы принимает просто массив “rules\[\]”.

-  “rule” реализует интерфейс “Rule”.

-  “RulesProvider” вообще не знает что такое HiddenRule, LocalizationRule и т.д., маскимально спрятана вся реализация.



В классе “SitePresenter” есть логика поиска в методах “getSearchData” и “getAllSearchData”, хотелось бы ее убрать в этого класса.

Критерии:

-  Логика поиска отсутствует в классе “SitePresenter”.

-  “app/commands/search/search.ts” все еще вызывает методы “getSearchData” и “getAllSearchData”, но уже из другого класса.