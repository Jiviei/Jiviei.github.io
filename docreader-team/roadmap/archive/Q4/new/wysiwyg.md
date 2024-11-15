---
title: Визуальный редактор
order: 1
---

![](./../../../../IDE/Q4/new/ide3.png "Черновой макет вкладки редактирования")

## Работа со статьями и разделами

### Добавление статей или разделов

-  Под всеми разделами есть кнопка *\+ Добавить раздел*.
-  На каждом разделе есть значок `+`, если на него нажать -- в раздел добавляется пустая статья.
-  На каждой статье есть значок `+`, если на него нажать -- статья становится названием подраздела, внутрь добавляется новая статья.
-  Значок `+` появляется при наведении курсора на название статьи или раздела.
-  Каждый раздел имеет статью `_index.md`. В ней автоматически прописываются ссылки на все статьи внутри раздела.
-  `_index.md` заменяет файл `category.yaml`. Все данные их `category.yaml` переносятся в хидер `_index.md`.

### Редактирование параметров

-  На каждой статье (рядом с `+`) есть значок `...` При нажатии появляется выпадающий список.
-  В выпадающем списке содержатся пункты:
   -  *Удалить статью* -- при клике появляется модальное окно *Удалить статью «Название статьи» -- Удалить/Отмена*. При клике на *Удалить* статья удаляется. При клике на *Отмена* модальное окно закрывается.
   -  *Задать URL статьи* -- при клике открывается модальное окно, которое содержит адрес статьи и пустое окно, куда нужно ввести название статьи на англ.
-  На каждом разделе (рядом с `+`) есть значок `...`. При нажатии появляется выпадающий список.
-  В выпадающем списке содержатся пункты:
   -  *Удалить раздел* -- при клике появляется модальное окно *Удалить раздел «Название раздела» -- Удалить/Отмена*. При клике на *Удалить* раздел удаляется. При клике на *Отмена* модальное окно закрывается.
   -  *Задать URL раздела* -- при клике открывается модальное окно, которое содержит адрес раздела и пустое окно, куда нужно ввести название раздела на англ.

### Настройка порядка статей

-  Каждую статью можно взять и перенести -- выше другой статьи или в другой раздел.
-  Когда статья переносится в рамках одного раздела, `order` всех статей в разделе пересчитывается.
-  Когда статья переносится в другой раздел, `order` всех статей в старом и новом разделе пересчитывается.
-  Когда статья переносится в другой раздел, из `_index.md` старого раздела пропадает на нее ссылка, в `_index.md` нового раздела появляется ссылка.
-  При перетаскивании статьи в другой раздел автоматический в URL меняется адрес. Название, заданное вручную, остается.

### Настройка порядка разделов и подразделов

-  Каждый раздел можно перенести -- выше или ниже другого.
-  При перетаскивания раздела также перетаскиваются статьи внутри.
-  При перетаскивании раздела автоматический в URL меняется адрес. Название, заданное вручную, остается.
-  При перетаскивании раздела `order` в `_index.md` всех разделов пересчитывается. `order` в статьях остается неизменным.

## Работа с медиа

-  В панели есть значок картинки и значок видео.
-  При клике открывается модальное окно для выбора файла.
   -  Если картинка -- автоматически конвертируется в PNG, добавляется в файловую структуру с названием “Название статьи в URL + порядковый номер изображения”.
   -  Если видео -- загружается на общий диск (продумать, на какие диски можно будет загружать), в статью прикладывается ссылка.
-  При выборе файла он добавляется в выделенный блок в статье.
-  Картинку можно скопировать в буфер обмена и вставить в статью. Она также автоматически конвертируется в PNG, добавляется в файловую структуру с названием “Название статьи в URL + порядковый номер изображения”.
-  На картинке или видео есть троеточие. При нажатии открывается выпадающее меню с пунктами:
   -  Изменить размер изображения -- при клике появляется окно с возможностью задать ширину и высоту.
   -  Задать подпись -- при клике открывается окно, в котором можно задать подпись (выводится под видео/картинкой).
-  Картинку или видео можно перетащить в рамках одной статьи.
-  Картинку или видео можно перетащить в другую статью -- картинка автоматически перенесется в файловой структуре в другую папку, название изменится на новое. При перетаскивании картинка остается в самом верху другой статьи, расположение можно изменить.
-  При публикации картинки считаются зависимостью у статьи и не выводятся во вкладке для публикации (после реализации [вкладок](./../../../../IDE/Q4/new/git)).
-  Удаление картинки также считается зависимостью и тоже не выводится во вкладке для публикации (после реализации [вкладок](./../../../../IDE/Q4/new/git)).