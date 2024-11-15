---
title: Репозиторий
order: 9
---

Документация, как база знаний -- серьезная система, которая имеет длительный жизненный цикл, а значит ее надо поддерживать и развивать. А значит: рефакторить, уточнять, актуализировать, верифицировать. Помимо этого, в построении такой системы задействовано большое количество людей (в отличии, например, от написания книги). Поэтому у такой системы, имеющий длительный цикл, должна быть хорошая архитектура и эта архитектура должна быть хорошо подвержена изменениям. А значит к ней должны быть применимы все те практики, которые сложились в сфере разработки ПО.

Поэтому можно взять подходы, которые используются в обычной разработке и применить их к системе знаний. Эти подходы как методологические, так и инструменты IDE по работе с кодом.

Поэтому задачу можно сформулировать так: Получить все возможности, которые дает репозиторий, и добавить к нему удобное визуальное редактирование. Т.е. скрестить подход обычных текстовых редакторов и разработки ПО.

Итак, какие основные плюсы использования репозитория:

-  **Многое уже реализовано**. Современный Git (как и другие системы контроля версий), как система хранения, имеет множество вещей, которые идут в нем из коробки: версионирование, переключение между ветками, отслеживание изменений, сравнение ревизий.
-  **Открытое хранение**. Пользователь полностью владеет репозиторием и работа DR для него прозрачна. Это не черный ящик. По сути -- это просто удобная IDE нацеленная на работу с текстом.
-  **IT-подход и Docs As Code**. Проще войти в сферу техписателей и IT, имеет дополнительный маркетинговый эффект.
-  **Большой запас идей**. Можно взять современные инструменты по работе с кодом и применить их на текст. Например, вот можно посмотреть какие возможности дает [GitLens](https://support.gitkraken.com/gitlens/features/).

## Как примерно может выглядеть работа.

В тексте ниже жирным указаны возможность, а курсивом, каким образом эти возможность может быть реализована. Тут указана типовая схема работы. Из подхода «репозиторий+IDE» можно взять достаточно много других идей, которые в них уже реализованы.

-  **Подсветка изменений в каталогах и статьях**. На главной странице видим каталоги и плашки изменений, которые были с последнего просмотра каталога. Измененные каталоги подсвечены флажком.

   *Т.к репозиторий работает слепками состояния, легко понимать какой слепок состояния был просмотрен в последний раз и какие были изменения.*

-  **Масштаб изменений**. Видим также насколько масштабные были эти изменения. Заходим в каталог в левой навигации видим статьи, которые сильно изменились. *Есть простая возможность узнавать количество измененных строк с последнего просмотра по статьям.*

-  **Изменения в текстах статей**. Переходим в статью и в тексте видим подсвеченные последние изменений. Можем видеть что были удалены какие-то блоки, либо какие блоки были добавлены и изменены.

   *Через diff легко понимать какие блоки были изменены.*

-  **Просмотр истории на уровне абзацев**. Наводимся на абзац текста и смотрим, когда и кем он был изменен и в рамках каких задач.

   *Есть git blame, который покажет кто и когда менял эту строку.*

-  **Переключение между ветками**. Сверху в панели видно что мы находимся в основной версии разработки. Там есть дропдаун, можем раскрыть его и посмотреть какая еще работа проводится над каталогом посмотрев список веток. Но только одна ветка из всех опубликована и в списке она помечена отдельно. Выбираем одну из веток, каталог переключается на эту ветку и состояние сразу отображается.

   *Обычное переключение между ветками. Для одного пользователя можно сделать несколько рабочих пространств на сервере -- директорий и пользователь чтобы мог легко через интерфейс между ними переключаться без дополнительных манипуляций.*

-  **Визуальное редактирование**. Нажимаем на значок редактирования, внешний вид статьи не меняется, но теперь можно нажать на текст и появится курсор. Используя визуальный редактор вносим изменения. Режим редактирования полностью визуально совпадает с просмотром, отличается только мигающим курсором, дополнительными подсветками и вспомогательными элементами, которые отображаются сбоку статьи или во всплывающих меню.

   *Нужно реализовать WYSIWYG-редактор, который описан в соседнем концепте.*

-  **Просмотр текущих изменений**. Для измененных абзацев сбоку появляется полоска. Наводимся на нее и смотрим изначальный текст абзаца, откатываем при необходимости. При первом внесении изменений сверху загорается кнопка для коммита и видно количество измененных статей/строк.

   *Можно легко узнать состояние как статьи, так и всего репозитория через стандартные возможности git*.

-  **Связанные изменения как одно**. Переходим в другую статью и тоже ее меняем. Счетчик изменений на кнопке Commit увеличивается.

-  **Контекст вносимых изменений**. При нажатии на Commit в комментарии указываем задачу над которой была проведена работа. Просматриваем список всех измененных блоков во всех измененных статьях и подтверждаем их. После коммита изменений статья переключается в режим просмотра.

   *Можно использовать стандартную интеграцию GitLab/GitHub.*

## Возможные проблемы и ограничения

-  **Сложнее отслеживать изменения**. Т.к. репозиторий работает слепками, то он утрачивает информацию по тому, откуда конкретно пришел этот блок текста. Поэтому при перемещениях текста и его переформулировании в рамках одного изменения потом может быть сложно отследить его историю. Обычные текстовые редакторы сохраняют историю изменений прямо в этом блоке. Но их возможности, тоже могут быть ограничены в некоторых случаях, например, если скопировали и вставили блок в другое место.
-  **Мелкие изменения засоряют историю**. Часто возникает проблема, что заметил опечатку. И ради этих мелких исправлений не хочется создавать отдельную ревизию. Видимо нужно сделать какой-то режим мелких изменений, чтобы такие изменения не засоряли историю версий. Иногда бывает, увидел опечатку, поправил. Потом еще. И несколько коммитов делается. Подумать надо как такое лучше делать, возможно историю объединять надо, подумаем.
-  **Нет совместного редактирования**. Совместное редактирование при работе с репозиторием не применяется. Что сильно отличает от текущих инструментов по работе с текстом и может казаться ограничением. С другой стороны, в очень редких случаях это реально несет какой-то полезный смысл. Совместное редактирование можно будет реализовать по такому же принципу, как это делается в инструментах ревью наподобие [Live Share](https://visualstudio.microsoft.com/ru/services/live-share/), но автор изменений будет показан всегда тот, кто коммитит изменения.
-  **Сложно удержать пользователей**. Если пользователю не утрачивает контроль над репозиторием, значит он на него легко придет, а также может легко съехать, если, например, появятся конкуренты.