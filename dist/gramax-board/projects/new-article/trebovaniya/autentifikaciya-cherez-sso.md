---
order: 1
title: Аутентификация через SSO
---

Вопросы:

-  Спецификация подключения к кейклоку. Есть?

-  Процесс:

   -  Нарисовать и согласовать архитектуру.

   -  Согласовать с ИБ.

   -  Выдать доступ на конкретные мощности.

-  Пока решаем все вопросы через Андрея. По нашим инструкциям будет все разворачивать. Шарить экран может.

Договоренности:

-  Внутренняя учетная запись есть у большого кол-ва сотрудников.

-  Ничего нельзя, пока не разрешили.

-  Настраивать доступ на чтение каталога на портале документации может: 

-  В Gramax можно создавать группы с пользователям из AD.

-  Доступ на чтение на портале документации можно сделать на уровне воркспейса и на уровне каталога.

-  Владельца каталога можно переназначить. Владельцами каталога могут быть несколько редакторов.

-  У всех писателей одинаковый доступ на все каталоги на редактирование. Пока ограничение не требуется.

:::info:true Требования Х5

Я, как пользователь Портала документации хочу авторизовываться в ИС «Портал документации» (далее ИС) по корпоративной учетной записи, для безопасной работы с данными компании.

-  Реализовать авторизацию пользователя  в ИС по SSO (по внутренней учетной записи сотрудника).

   -  По умолчанию доступ к порталу должен быть у всех сотрудников, которые обладают внутренней учетной записью.

   -  Ограничения на просмотр/редактирование/комментирование/согласование документов зависят от предоставленных пользователю прав и соответствующей роли.

-  После авторизации пользователя - должны подтягиваться все доступные для пользователя актуальные на момент времени документы и каталоги.

:::

### Ключевые пользователи

-  Администратор.

-  Владелец воркспейса.

-  Редактор -- пользователь с лицензией. Работает в приложении.

-  Читатель -- пользователь без лицензии и доступа в приложение. Читает портал документации.

### Определения

-  Портал документации

-  Приложение (для редактирования)

-  Базовый каталог

### Цели

-  Я, как пользователь Портала документации хочу авторизовываться в ИС «Портал документации» по корпоративной учетной записи, для безопасной работы с данными компании.

### Требования

-  Авторизация:

   -  Авторизация пользователя в приложении и на портале документации происходит по  внутренней учетной записи сотрудника.

-  Доступы на портале документации:

   -  По умолчанию доступ к порталу есть  у всех сотрудников, которые обладают внутренней учетной записью.

   -  После авторизации пользователя подтягиваются все доступные для пользователя актуальные на момент времени документы и каталоги.

-  Доступы в приложении для редактирования:

   -  Доступ в приложение есть у всех сотрудников, которые обладают внутренней учетной записью и лицензией редактора.

      -  Пользователи без лицензии имеют доступ в приложении только в том случае, если их назначили согласующими. Доступ выдается на конкретный запрос на слияние (на каталог и ветку).

   -  После авторизации пользователя подтягиваются все доступные актуальные на момент времени документы и каталоги.

### Интеграции

1. Keycloack

   1. Определение пользователя по учетной записи.

   2. Получение списка пользователей для ограничения доступа.

2. GitLab

   1. Определение пользователя в GitLab для публикации.

   2. Получение доступных репозиториев.

### **Необходимые доработки**

1. Интеграция с Keycloack для авторизации и управления доступами.

2. Интеграция с GitLab для публикации изменений и получения доступных репозиториев.

### Процесс использования





#### 