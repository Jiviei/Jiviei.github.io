---
order: 1
title: 1. Быстрая ссылка на редактирование
---

*Ситуация*: Я поредактировал какие-то статьи в новом каталоге и хочу быстро дать ссылку Коллеге на статью или каталог с моими последними изменения коллеге, чтобы он одним щелчком открыл статью у себя на редактирования.

1. **Кнопка «Поделиться»**: Я в локальном приложении нажимаю «Поделиться»

2. **Незасинхронизированные изменения**: Т.к. у меня есть незасинхронизированные изменения выдается сообщение «есть незакоммиченные и незасинхронизированные изменения, которыми нельзя поделиться. Чтобы поделиться нужно закоммитить и засинхронизировать их. Сделать это?» и две кнопки «Закоммитить и засинхронизировать» и «Отмена».

3. **Синхронизация незалитых изменений ветки**: Я подтверждаю, что хочу залить все свои изменения. Поверх открывается стандартное окно коммита, в котором также установлен чекбокс «Засинхронизировать ветку» и основная кнопка «Закоммитить». Я нажимаю ее, вижу небольшую крутилку, после этого появляется сообщение сколько файлов залито. Я нажимаю «ОК» и окно закрывается и видно опять окно «Поделиться»

4. **Копирую и отправляю ссылку**: Я вижу окно с полями: 1) ридонли название бренча. 2) Ссылка на редактирование статьи [docs.ics-it.ru/share/{шифр}](http://docs.ics-it.ru/share/%7B%D1%88%D0%B8%D1%84%D1%80%7D) *(в шифре URL репозитория и бренч)* и кнопка «Скопировать ссылку». Копирую ссылку и отправляю ее коллеге через мессенджер.

5. **Коллега устанавливает приложение**: Коллега кликает по ссылке и у него открывается браузер, т.к. у ревьювера не стоит локальное приложение. В браузере открывается страница на которой написано «вам прислали ссылку на редактирование в докридере. Чтобы открыть ее необходимо установить приложение по ЭТОЙ ССЫЛКЕ. А вторым шагом кликни еще раз по присланной ссылке, ВОТ ОНА если потерял». Коллега кликает по первой ссылке и скачивается приложение, которое он устанавливает.

6. **Коллега открывает нужную версию нужного каталога**: Коллега кликает по второй ссылке на той странице (или снова по полученной). У него запускается локальное приложение и появляется крутилка «Получение данных» *(клонируется/синхронизируется нужный бренч/каталог)*. После нескольких секунд, в зависимости от размера каталога, отрывается нужная статья нужного бренча нужного каталога. Если у коллеги в этом каталоге были несохраненные изменения, то выдается ошибка «Сохраните сначала изменения, а потом кликните по ссылке еще раз» (потом можем добавить окно с коммитом, чтобы лишнего не кликать)