---
order: 0.2
title: "!!! @SY @AL Идентификаторы статей"
properties:
  - name: Release
    value:
      - november-24
  - name: State
    value:
      - open
  - name: Assignee
    value:
      - SY
  - name: PO
    value:
      - AL
---

Проблемы:

-  При перемещении статьи, чтобы старые ссылки сохранили работоспособность

-  При перемещении статьи хотелось бы сохранять историю, даже если контент статьи сильно поменялся

-  При удалении статьи хотелось бы мочь перенаправлять на другую какую-то статью







Как делать миграцию с существующего каталога?



Если у нас будет 5-ти буквенный идентификатор, который мы применяли, он покрывает который состоит из больших и маленьких латинских букв и цифр, пример: `ZyAi0`. Одна позиция дает 26×2+10=62 вариации, т.е. 5 символов -- ±1 млрд вариаций. Что снизит риск коллизии почти до нуля.

Предложения:

-  Адресная строка в браузере. В URL статьи добавлять  еще идентификатор в виде `?XXXX`. Например:  `.../-/aug-2024/identifikatory-statey?id=ZyAi0`.

-  При переходах между статьями всякий раз добавлять этот идентификатор (Зачем?)

-  В функции Поделиться тоже формировать адрес с идентификатором.

-  При открытии URL в котором указан id статьи -- искать сначала по нему, потом по пути.

-  API. Основной способ получения по идентификатору: `/api/catalogs/{catalog}/articles/{articleId}`.

   Для получения по пути: `…/articles?articlePath=XXX`

   При получении навигации возвращать как `path`, так и `id`.

-   

### Открытые вопросы

-  Дублирующийся идентификатор. Что если при загрузке статьи возник дублирующийся идентификатор?

-  Как назначать идентификаторы для

-  Как делать миграцию при существующем каталоге. Сразу всем статьям проставить идентификаторы? Миграция на идентификаторы

   -  Нужно ли принудительно проставлять идентификатор для статьи, для которой ранее не было идентификатора? Можно ли сделать для каталога идентификаторы отключаемыми? Сделать это фичей, чтобы можно было откшлючить?

-  Что делать при удалении статей когда пользователь хочет сохранить доступ по ссылке

   -   

-  Что если возник конфликт, когда вдруг два одинаковых идентификатора было присвоено?

   -  Добавить ошибку в проверки на ошибки

-  Назначение идентификатора статье. При создании статьи

   -  ***??? ВОПРОС***: Когда назначать идентификатор лучше всего? Варианты:

      -  Всем статьям каталога скопом. Тогда это будет всего лишь один коммит. Может у юзера спросить надо это сделать или нет?

         -  Тут нужно чтобы два редактора одновременно не присвоили разные id. Плюс еще в разных ветках могут свои id сгенерироваться

      -  Когда трогаем статью, то сразу же присвоить id заодно

-  Ссылка на статью. При вставке ссылки на статью в теге что указать `[](?{статья})`? Варианты:

   -  путь -- проще миграция и понятнее людям и красивее код. Но при перемещении и переименовании статей надо изменять в том числе все ссылки на эту статью в других статьях

   -  id -- короче и однозначно, при перемещении не нужно обновлять ссылающиеся статьи. Но непоняно в какой момент времени подменять путь на id.

   -  комбинированный подход -- избыточность и все минусы обоих подходов

   -  Предлагаю использовать ссылки как в обсидиане

-  Когда у статьи по одному адресу было присвоено два разных id? Видимо их оба надо сохранять. Потому что если кто-то уже скопировал ссылку на эту статью, она останется старой.

-   

-  Что если в каталоге 2 одинаковых идентификатора? Как резолвить конфликт?



В правой панели помимо содержимого показывать беклинки. При наведении на беклинг можно сходу посмотреть фрагмент текста, содержащего ссылку, что передает контекст. В правой панели все что относится к контенту - в том числе теги, которые используются в статье?

Как сделать ссылки наглядными? достаточно просто указания пути? но это будет большая переделка и все будут злиться, поэтому видимо стоит указать разную политику ссылок? А мы должны делать все максимально стандартным



использовать ли идентификаторы статей по ссылке

есть настройки каталога есть настройки воркспейса

Если включены идентификаторы, то использовать такие статьи.

в поиске чтобы можно было искать по идентификаторам статей



\[asdlfjdaslfj\](?sHsa1)



Кликните \[\[../тут\]\]  adsfadsfads



(?asdfads)s)