---
order: 1
title: Эксплуатационная документация
---

Программное обеспечение для создания пользовательской документации “Gramax“.

## Введение

Документ «Эксплуатационная документация» содержит перечень функциональных возможностей и инструкции для их осуществления Программного обеспечения для создания пользовательской документации «Gramax» (далее – ПО).

## Запуск ПО

Для запуска приложения откройте его по ссылке -- <https://app.gram.ax/>.

## Работа в ПО

Работа в ПО состоит из следующий этапов:

1. Организация каталогов.

2. Создание и редактирование статей.

3. Оформление статей.

4. Публикация и обновление статей.

5. Проверка с помощью комментариев.

6. Просмотр истории статей.

7. Проверка каталога на ошибки.

8. Экспорт статей.

9. Поиск по статьям.

### Организация каталогов

На главной странице можно добавить любое количество каталогов.

Каталог -- это группировка статей в один проект. В рамках системы: каталог = репозиторий.

#### Создать каталог

На главной странице <https://app.gram.ax/> нажмите “Создать новый”. После этого создастся новый пустой каталог.

![](./docs.png)

#### Настроить каталог

1. В правой панели нажмите “Настроить каталог”.

   ![](./docs-2.png)

2. Заполните поля.

   1. Наименование -- название каталога, которое будет отображаться в самом каталоге и на главной странице.

   2. Название репозитория -- название, которое будет присвоено репозиторию в Git-хранилище.

   3. Директория -- в какой папке репозитория будет храниться каталог в Git-хранилище.

   4. Описание -- короткое описание, которое будет отображаться на главной.

   5. Стиль -- цвет оформления каталога на главной.

   6. Краткое название -- короткое название, которое будет отображаться на главной.

      ![](./docs-3.png)

3. Кликните “Сохранить”.

#### Опубликовать каталог

Чтобы каталог синхронизировался с вашим Git-хранилищем, его нужно опубликовать. Для этого предварительно создайте учетную запись в GitLab или GitHub.

1. Кликните значок облака в синей панели в левом нижнем углу.

2. В выпадающем списке нажмите “Добавить новое хранилище”.

3. Выберите хранилище.

   1. GitLab

      1. Домен -- укажите URL хранилища.

      2. GitLab токен -- сформируйте в GitLab Access Token и вставьте его в поле.

      3. Имя пользователя и Почта -- не заполняйте, автоматические определятся по токену.

         ![](./docs-5.png)

   2. GitHub -- кликните “Войти в GitHub” и следуйте интерфейсным подсказкам.

      ![](./docs-4.png)

4. Нажмите “Добавить” -- после добавления хранилища каталог автоматически синхронизируется. В Git-хранилище создастся одноименный репозиторий.

### Создание и редактирование статей

В каталоге можно создать неограниченное количество статей.

Также расположением статей можно управлять:

-  Задавать им иерархию.

-  Перемещать статьи между разделами.

-  Удалять статьи.

#### Создать статью

В новом каталоге автоматически создается пустая статья. Укажите для нее заголовок -- статья сохранится в корне каталога.

-  Добавить дочернюю статью. Кликните + рядом с названием родительской статьи.

   ![](./docs-6.png)

-  Добавить статью в корень. Кликните + в левом нижнем углу.

   ![](./docs-7.png)

#### Переместить статью

Чтобы переместить статью, зажмите ее мышкой и перетащите в нужное место.

![](./docs-8.png)

#### Удалить статью

Чтобы удалить статью, кликните троеточие рядом с названием статьи, а затем нажмите “Удалить статью”.

![](./docs-9.png)

### Оформление статей

Для каждой статьи доступно:

-  Редактирование текста в визуальном редакторе.

-  Добавление заголовков, заметок, цитат, блоков кода, таблиц, скрываемых элементов.

-  Добавление иллюстраций: диаграмм, видео, изображений.

#### Добавить и оформить текст

Поставьте фокус в статью и наберите текст. Выделите текст и оформите его: в дополнительной панели выберите “Жирный” или “Курсив.

![](./docs-10.png)

#### Добавить заголовок

С новой строки напишите текст, который будет заголовком. Затем выделите текст и в дополнительной панели выберите заголовок:

-  Заголовок 2

-  Заголовок 3 -- дочерний заголовок для заголовка 2.

-  Заголовок 4 -- дочерний заголовок для заголовка 3.

![](./docs-11.png)

#### Добавить список

-  Маркированный список -- с новой строки поставьте “-” и кликните пробел. После этого введите текст пункта списка.

   ![](./docs-12.png)

-  Нумерованный список -- с новой строки напишите “1.” и кликните пробел. После этого введите текст пункта списка.

   ![](./docs-13.png)

#### Блок кода

Кликните в панели редактирования “Блок кода” -- в статью добавится рамка для ввода кода. Вставьте код и в дополнительной панели укажите язык программирования.

![](./docs-14.png)

#### Таблица

Кликните в панели “Таблица” и оформите ее:

-  Добавьте строки и столбцы.

-  Укажите столбец или строку-заголовок.

-  Объедините ячейки.

-  Удалите строки или столбцы.

-  Потяните за границу строки или столбца, чтобы изменить их размер.

![](./docs-15.png)

#### Заметка

Кликните в панели “Заметка” и оформите ее:

-  Выберите цвет заметки.

-  Введите заголовок.

-  Введите текст.

![](./docs-16.png)

#### Цитата

Кликните в панели “Цитата”, а затем введите текст.

![](./docs-17.png)

#### Блок скрытого текста

Кликните в панели “Блок скрытого текста” и оформите его:

-  Укажите заголовок блока.

-  Введите текст.

-  Выберите, как он будет выводиться в статье -- свернутым или развернутым.

![](./docs-18.png)

#### Вкладка

Кликните в панели “Табы” и оформите их:

1. Добавьте еще вкладки.

2. Укажите заголовок вкладок.

3. Введите текст вкладок.

![](./docs-19.png)

#### Единый источник

1. Кликните в панели “Сниппет”, а затем “Добавить новый сниппет”.

   ![](./docs-20.png)

2. Оформите сниппет: укажите заголовок и введите текст. Затем сохраните сниппет.

   ![](./docs-21.png)

Сниппет добавится в статью. Также вы сможете его добавить в другие статьи: для этого в шаге 1 нужно будет выбрать его из списка существующих сниппетов.

#### Диаграмма

1. Кликните в панели “Диаграмма”, а затем выберите нужную:

   -  Diagrams.net -- для визуального создания любого типа диаграмм.

   -  Mermaid -- для описания архитектуры ПО.

   -  PlantUML -- для создания диаграмм последовательности.

   -  OpenAPI -- для описания API.

      ![](./docs-22.png)

2. Отредактируйте шаблон диаграммы: задайте подпись диаграмме и кликните значок редактирования в дополнительной панели.

   ![](./docs-23.png)

#### Файл

Кликните в панели “Файл”, а затем выберите нужный.

-  Файл -- можно выбрать файл любого формата и добавить в статью. При клике он будет скачиваться.

   ![](./docs-24.png)

-  Изображение -- можно выбрать изображение в формате JPEG или PNG и он добавится в статью.

   ![](./docs-25.png)

-  Видео -- можно добавить ссылку на стримминговый сервис с видео (YouTube, Google Disc, Mega) и видео будет проигрываться в статье.

   ![](./docs-26.png)

### Публикация и обновление статей через СКВ

СКВ -- система контроля версий. Для версионирования и сохранения истории к приложению подключена СКВ Git. С ее помощью можно:

-  Добавлять новые ветки.

-  Менять ветки.

-  Объединять ветки.

-  Публиковать изменения на удаленный сервер.

-  Синхронизировать версию в приложении с удаленным сервером.

Предварительно рекомендуем изучить [документацию по работе с Git](https://git-scm.com/doc).

#### Добавить ветку

Добавить новую ветку можно, например, чтобы редактировать статьи по определенной задаче.

1. Кликните название текущей ветки в синей строке в левом нижнем углу.

2. Нажмите “Добавить новую ветку”.

3. Введите название ветки и кликните “Добавить”.

   ![](./docs-27.png)

Ветка создастся из текущего состояния репозитория. Она опубликуется в хранилище, как только вы опубликуете хоть одно изменение в статьях.

#### Сменить ветку

Смена ветки понадобится в том случае, если кто-то из коллег редактирует статьи по определенной задаче. Их изменения хранятся в ветках изолированно.

1. Кликните название текущей ветки в синей строке в левом нижнем углу.

2. Выберите в списке ветку, на которую хотите перейти.

3. Нажмите “Сменить”.

![](./docs-28.png)

#### Объединить ветки

Объединение веток может понадобится в том случае, если вы редактировали статьи по опрделенной задаче. Когда все изменения согласованы, их нужно опубликовать в основную ветку.

1. Кликните название текущей ветки в синей строке в левом нижнем углу.

2. В блоке “Объединить ветки” выберите ветку, в которую хотите опубликовать изменения из текущей ветки.

3. Укажите, нужно ли удалять текущую ветку после объединения.

4. Нажмите “Объединить”.

![](./docs-29.png)

#### Опубликовать изменения

Чтобы изменения в приложении попали в хранилище и стали доступны коллегам, нужно их опубликовать.

1. Кликните значок облака в синей панели в левом нижнем углу.

2. Просмотрите изменения.

3. Снимите флаг со статей, которые не нужно публиковать.

4. Измените комментарий -- он сохранится в хранилище.

5. Кликните “Опубликовать”.

![](./docs-30.png)

#### Синхронизировать каталог

Если кто-то из коллег внес изменения в текущую ветку каталога, чтобы их увидеть, нужно синхронизировать каталог.

Для этого кликните значок со стрелочками в синей панели в левом нижнем углу.

### Проверка с помощью комментариев

В приложении для редактирования доступна возможность проверки подготовленных материалов. Для этого используется механизм комментариев.

-  Комментарий можно добавить на слово или фразу.

-  На комментарий можно ответить.

-  Можно удалить всю цепочку обсуждений или отдельные комментарии.

#### Оставить комментарий

1. Выделите текст, к которому нужно оставить комментарий. Затем в дополнительной панели кликните “Оставить комментарий”.

   ![](./docs-31.png)

2. Введите текст комментария и нажмите “Комментировать”.

   ![](./docs-32.png)

3. Опубликуйте комментарий. Это нужно для того, чтобы коллеги смогли его увидеть.

   ![](./docs-33.png)

#### Решить цепочку комментариев

1. Кликните на текст с комментарием.

2. Нажмите троеточие и выберите “Удалить как решенный”.

   ![](./docs-34.png)

3. Опубликуйте удаление комментария. Это нужно для того, чтобы коллеги смогли увидеть удаление.

### Просмотр истории

По каждой отдельной статье хранится история редактирования. В истории указано: кто, когда и какой конкретно абзац менял.

Чтобы просмотреть историю по статье, кликните “История изменений” в правой панели.

![](./docs-35.png)

### Проверка на ошибки

В приложении настроена автоматическая проверка на ошибки. Можно проверить, есть ли в каталоге неработающие ссылки, диаграммы и изображения.

Чтобы просмотреть результаты проверки, кликните “Проверка на ошибки” в правой панели.

![](./docs-36.png)

### Экспорт статей

Любую статью можно выгрузить в формате PDF или DOCX. Для этого в правой панели нужно кликнуть “Экспорт” и выбрать нужный формат.

![](./docs-37.png)

### Поиск

В приложении доступен поиск по каталогу.

1. Кликните значок поиска в левом верхнем углую

2. Введите искомое слово -- поиск покажет все статьи, в которых оно содержится.

![](./docs-38.png)

## Завершение ПО

Чтобы закончить работу в ПО, достаточно просто закрыть вкладку <https://app.gram.ax/> в браузере.

-  Чтобы очистить кэш браузера от каталогов -- почистите кэш.

-  Чтобы удалить репозиторий с каталогом из Git-хранилища -- откройте Git-хранилище и удалите репозиторий.