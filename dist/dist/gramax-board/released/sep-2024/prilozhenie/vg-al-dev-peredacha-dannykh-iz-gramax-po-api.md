---
order: 11.5
title: "@VG @AL [done] Исключения в API"
---

Существуют следующие необработанные исключения при работе с API

-  если непраильно указать один из параметров `catalogId`/`articleId`/`resourcePath`

   -  `/api/catalogs/{catalogId}/navigation`

   -  `/api/catalogs/{catalogId}/articles/{articleId}/html`

   -  `/api/catalogs/{catalogId}/articles/{articleId}/resources/{resourcePath}`

-  если каталог или статья будут приватными

Какой ответ должен отдаваться пользователю?

## Критерии

-  Если один из параметров (`catalogId`, `articleId`, `resourcePath`) указан неправильно (то есть не существует такого каталога или статьи), API должно возвращать код ошибки 404 Not Found, так как запрашиваемый ресурс не найден.

   ```
   { 
   	"error": "404 Not Found",
   	"message": "Catalog with id '{catalogId}' not found"
   }
   ```

   ```
   { 
   	"error": "404 Not Found", 
   	"message": "Article with id '{articleId}' not found in catalog '{catalogId}'"
   }
   ```

   ```
   { 
   	"error": "404 Not Found", 
   	"message": "Resource with path '{resourcePath}' not found for article '{articleId}' in catalog '{catalogId}'" 
   }
   ```

-  Если запрашиваемый ресурс существует, но доступ к нему ограничен (например, каталог или статья приватные и текущий пользователь не имеет на них прав доступа), API должно возвращать код ошибки 403 Forbidden.

   ```
   {
       "error": "403 Forbidden",
       "message": "Catalog with id '{catalogId}' is private and access is denied."
   }
   ```

   ```
   {
       "error": "403 Forbidden",
       "message": "Article with id '{articleId}' is private in catalog '{catalogId}' and access is denied."
   }
   ```

-  Обновить документацию

## Оценка

-  Оценка: 2ч

-  Реальность: