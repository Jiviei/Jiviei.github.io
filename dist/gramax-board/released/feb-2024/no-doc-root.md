---
order: 11
title: "[PS] Ошибка при откате файла .doc-root.yaml"
---

Если попытаться склонировать репозиторий без `.doc-root.yaml`, нажать «Создать каталог», потом перейти в него и откатить файл `.doc-root.yaml`, то всё отвалится и каталог нельзя будет открыть. Хотелось бы чтобы можно было открывать любой реп, как каталог. (чтобы не добавлялись системные файлы)



**Критерии:**

-  \[x\] Когда пользователь клонирует репозиторий без `.doc-root.yaml`, каталогом считается весь репозиторий. При изменении любого атрибута в настройках каталога, этот файл создаётся в руте репотизория.

-  \[x\] Если не удаётся найти ни один `.md`\-файл, то в редакторе отображается плейсхолдер. Взять за основу оформление плейсхолдера пустой главной.

   -  По клику на “Создать статью” добавляется статья в корень.

   -  Плюсик слева внизу остается и также добавляет пустую статью в корень.

      ![](./no-doc-root_0.png)

-  \[x\] Есть возможность указать директорию, которая будет считаться каталогом. Его можно изменить в настройках каталога в поле “Директория“. При изменении этой настройки перемещается файл `.doc-root.yaml`

-  \[x\] При изменении этого атрибута, статьи (вместе с ресурсами) переносятся в новую директорию из старой.

-  \[x\] Выдавать ошибку, если путь ведёт наружу репозитория (пр. `../../../../`)

-  \[x\] Не искать ветку с каталогом при клонировании и не проверять, существует ли он

---

```
root/
 - catalog_1/
 - repo1/
   - docs/
     - .doc-root.yaml
   - dir/
 - repo2/
   - README.md
```

**Как определять root каталога при такой структуре?** Попытаться найти `.doc-root.yaml`(нынешняя логика), если его нет, считать рутом каталога сам репозиторий и искать все `.md` файлы.

**Где пользователь сможет изменить путь до статей?** В настройках каталога будет соответствующее поле.

**Должна ли быть папка пустой (либо её не должно существовать) для указания пути до неё?** Не обязательно. Но если этого пути не сущетсвует, папка будет создана

**Где создавать** `.doc-root.yaml` **при необходимости?** В рут директории репозитория. В этом случае, можно путь до статей указать атрибутом. Также, это сильно упростит поиск каталогов при большой вложенности. (Особенно в десктоп приложении)

**Что, если в репозитории нет файлов?** Пустая папка отображается как каталог. Если в неё зайти, пользователь увидит дефолтную новую статью, которая изначально не будет сохранена.

**Что, если вложенность директорий огромная, в них очень много файлов, из которых** `.md` **меньшая часть?** Оставить текущую логику

**Как разбить статьи на категории в этом случае?** Оставить текущую логику

[cut:ПРИМЕР:false]

```
root/
 - repo/
   - dir1/
     - dir2/
       - dir3/
         - article1.md
     - article1.md
   - README.md
```



[/cut]

**Когда пользователь решает изменить рут-директорию для каталога и** `.doc-root.yaml`**(соответственно, пользователь работает в настроенной директории) уже был создан, что делать с** `.md`**\-файлами?** Перенести их в новую директорию



**Исходные заявки:**

-  <https://support.ics-it.ru/issue/GXS-1426>

#### Замечания:

-  В десктопе кнопка “Перезагрузить” не работает.

   ![](./no-doc-root_1.png)