---
order: 0.2
title: "@VG @AL [done] Передача данных из Gramax по API"
---

У наших потенциальных клиентов есть потребность: передавать контент статей из Gramax в другие информационные системы. Кейсы:

-  Американцы хотят отображать статьи из Gramax на портале поддержки.

   1. Заводят каталог.

   2. Создают страничку на портале поддержки.

   3. Отображают на этой страничке статьи из каталога.

-  Х5 хотят передавать контент статей из Gramax в другие ИС.

   -  Подсказки. Написали статью в Gramax, а затем передали ее контент в интерфейс ИС. Подсказка -- типа тултип, который появляется рядом с кнопкой в начале работы с ИС.

## Критерии

-  Есть механизм передачи данных по API с портала для чтения.

   -  Апи по получени каталогов

      `/api/catalogs`

      ```
      type CatalogRef = {
      	id: string, 
      	title: string
      }
      
      type CatalogList = {
      	data: CatalogRef[]
      }
      
      {
         "data": [
      		{
      			"id": "gramx-board", 	
      	        "title": "Gramax Board"
          	}
         ]
      ]
      ```

   -  Апи по получению навигации (древа статей в JSON).

      `/api/catalogs/{catalogId}/navigation`

      Навигация отдается в следующем формате

      ```
      type ArticleRef = {
      	id: string, 
      	title: string,
      	children?: ArticleRef[]
      }
      
      type CatalogNavigation = {
      	data: ArticleRef[]
      }
      
      {
       	"data":[
      	   {
      			"id": "gramax-board/jul-2024/_index.md", 
              	"title": "Upcoming release (jul)",
      	        "children": [
          	        {
      					"id": "gramax-board/jul-2024/plany.md", 
              	        "title": "Планы",
                  	}
      			]
      		}
      	]
      }
      ```

   -  Апи по статьям.

      -  `/api/catalogs/{catalogId}/articles/{articleId}/html`

         [Как выглядят элементы на странице полученной по API](./../../../../jul-2024/prilozhenie/al-open-peredacha-dannykh-iz-gramax-po-api/poluchenie-elementov-po-api)

   -  Апи получения ресурса

      `/api/catalogs/{catalogId}/articles/{articleId}/resources/{resourcePath}`

-  Есть документация по [comment:IHu9c]методам[/comment]. Опубликована в Gramax Docs.

-  Написаны тесты.

## Замечания

-  заголовки кривые на примере

-  если массив дочерних статей пустой, то не надо его выводить

-  id должен быть logicPath

-  next сует какие-то заголовки