---
order: 6
title: Поддержка GitHub
---

#### Когда переносим

Перед выпуском новой стабильной версии грамакса (т.е синхронизировано с выпуском версий грамакса).

#### Перенос изменений из gitlab’а в github

1. Создать тег для версии `git tag "[название версии в формате месяц-год]"`, например:

   -  `git tag "jan-2024"`

2. Запушить тег:

   -  `git push --tags`

3. Ждать пока запуститься и завершиться CI/CD (2-3 минуты).

4. (Опционально) Проверить логи раннера и файлы на гитхабе.

#### Возможные проблемы

1. Захардкоженные секреты в коде, их будет отлавливать trufflehog, но это не 100% решение.



Название коммита в гитхаб формируется из предпоследнего коммита и последнего коммита в строку вида “`` Changes from `название предпоследнего коммита` to `название последнего коммита` ``”. Т.е желательно писать название на английском и в формате месяц-год (jan-2024).