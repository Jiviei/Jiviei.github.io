---
order: 9
title: "[PS] Проверка на существование репозитория"
---

Сейчас если ты просто создал новый каталог, при попытке добавить его в хранилище нет проверки того, что такой репозиторий уже существует. Из-за этого gramax может повести себя неадекватно при попытке подключения. Хотелось бы иметь такую проверку.

Критерии приемки:

-  \[x\] При попытке подключения хранилища для нового каталога проверять, существует ли такой в хранилище, и если такой существует выдавать модалку.

   -  \[x\] Заголовок: Такой каталог уже существует

   -  \[x\] Текст: В хранилище {название хранилища} уже существует каталог с названием {название}. Измените название репозитория в настройках каталога.

   -  \[х\] Действия:

      -  Закрыть (в виде link)

      -  Открыть настройки (основное действие) -- При переходе в настройки каталога модальное окно ошибки закрывается.

Оценка: 3-4ч



Прочие замечания:

-  \[x\] “Название URL” переименовать в “Название репозитория”. И добавлено пояснение: *Системное название, задается при создании репозитория. Отображается в URL.*

-  \[x\] “Название” переименовать в “Название каталога” (чтобы не путаться). Добавить пояснение: *Отображается на главной и в самом каталоге*.