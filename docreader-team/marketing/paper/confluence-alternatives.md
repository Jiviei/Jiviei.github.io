---
order: 4
title: Разработать Confluence за 6 месяцев
---

Всем привет, меня зовут Александр Мачулин и я сооснователь Gramax. Последнее время с командой часто слышим нарратив от коллег, которые делают базы знаний: “А что вы хотите, если руководство поставило задачу за полгода повторить Confluence, который развивался десятки лет”. Поэтому хочу поделиться своим мнением на этот счет, а также рассказать, почему мы тоже пошли по пути замены Confluence.

Спойлер: у нас изначально не было цели повторить Confluence.

## Решаем проблему

Любой бизнес должен решать какую-то проблему. В случае разработки “замены Confluence” -- проблема заключается в отсутствии Confluence. Сам Confluence решает другую проблему -- позволяет накапливать знания и информацию команды в одном месте.

Поэтому критически важно решать именно исходную проблему. А пути решения могут быть разными.

### Как мы видим проблему

Мы понимали, что вести нашу документацию в известных инструментах для баз знаний нет смысла. Потому что построить процессы так, чтобы информация была в них всегда актуальна и не дублировалась, практически невозможно.

Эти инструменты уже внесли свой вклад в развитие человечества -- собрали разрозненную информацию из .doc файлов и дали возможность людям совместно над ними работать. Но основную задачу -- иметь всегда актуальную информацию о системе под рукой, как показывает опыт, решить они не в силах.

### Поэтому  начали искать другие способы решения задачи и интуитивно пришли к Docs as Code

Почему Docs as Code имеет шансы на успех:

-  **Git-транзакции.** В рамках одного изменения мы можем изменить множество файлов в базе знаний и Git позволяет в рамках изменения видеть все затронутые файлы. В Confluence-подобных системах не поддерживается  транзакционность и изменения вносятся в рамках одного файла.

-  **Ревью.** Имея транзакции мы можем построить более прозрачный процесс ревью изменений. Ревьюер видит затронутые в рамках изменения файлы и может подтвердить эти изменения или отклонить, причём выборочно.

-  **CI/CD.** Когда человек вносит или подтверждает чужие изменения, то можно запускать автоматические проверки на ошибки, на наличие стоп-слов, на дублирование контента и другие. А также сразу обновлять информацию на внешних сайтах для читателей.

И пункты менее относящиеся с актуальности документации, но  интересные:

-  **Статические сайты.** Из файлов в репозитории можно легко развернуть множество статический сайтов. Статические сайты обычно загружаются быстрее, чем динамические, как те, что создаются в Confluence. Это связано с отсутствием необходимости в обработке серверных скриптов и запросов к базе данных при каждом обращении пользователя. Статика безопаснее динамики.

-  **Совместное редактирование.** Т.к. я интроверт, то не могу спокойно работать, когда вижу курсоры коллег в моём документе. Или когда в правом верхнем углу висит иконка нашего технического директора Андрея. Наблюдает за тем как я работаю что ли? У нас полно других задач, зачем ты сидишь в моём документе! А когда я захожу в документ и вижу, что кто-то что-то пишет, то я всегда жду, когда человек закончит работу -- совместно работать в онлайн режиме над одним куском текста невозможно.

### Что заимствовать, а что придумывать

Практически невозможно придумать что-то новое. Все инновации обычно заключаются в  переработке существующих практик, объединении их в одно решение и дополнением своим видением.

Разрабатывая Gramax мы стали брать лучшее из всех продуктов. По возможностям редактирования ориентировались на практики из Notion, Paper, Google Docs и даже Confluence. Взяли отличную синюю панель состояния из VSCode. И в этом нет ничего зазорного, -- порой нет смысла изобретать велосипед. Но есть смысл не копировать в слепую. Если мы что-то позаимствовали, то мы это заимствование обдумали тысячу раз перед тем, как внедрить в систему.

В других статьях раскроем больше о том, как мы видим процесс и систему, чтобы документация была всегда актуальной. Но вернёмся к изначальной теме.

## Стоит ли делать замену конфлюенса?

Любой продукт, реализуемый в постановке из начала статьи, скорее всего не выживет. В продукте должна быть заложена идея, меняющая текущий порядок вещей. Повторять систему, которую выпустили в 2004 году -- ставить себя в позицию заведомо и безнадёжно отстающего. Об ошибках и бедном пользователе, на которого сбросили переписанную тонну функций и плагинов из другой системы, и говорить не стоит. Шансы на то, что это будет слаженно работать стремятся к нулю.

## Выводы

Как обычно, выводы в наших статьях вы делаете сами. Пишите в комментариях, что думаете на этот счёт.