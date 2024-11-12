---
order: 4
title: "@EZ @AM [done] Аутентификация токеном Confluence self-hosted "
---

## **Проблема**

Изначально аутентификация у нас была сделана через логин/пароль, что небезопасно, необходимо сделать аутентификацию через токен.

## Анализ

#### **Пользователю необходимо будет ввести**

-  *Домен*

-  Токен

## Критерии

#### Подписи для формы добавления источника

-  Домен

   -  Название - URL сервера Confluence

   -  Подпись - Скопируйте URL вашего Confluence сервера

   -  Подсказка - <https://confluence.domain.com>

-  Токен

   -  Подпись - Введите токен аккаунта Confluence. [Подробнее](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html) (ссылка)

   -  Подсказка - NzIzNTYyNTQ3NjQxOva29fNcHrLYMGH77/YuEAKpqy+Q