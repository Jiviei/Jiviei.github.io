---
order: 2
title: Проблемы DaC
---

Преимущества подхода известны всем: они транслируется спикерами на конференциях и в статьях на профильных ресурсах. Но мало кто затрагивает тему проблем, которые возникают у всех и почти всегда. С чем может столкнуться компания при внедрении и использовании.

1. **Сложное внедрение**. Нужно пригласить или выделить девопса, который построит процесс сборки документации. А затем научит ключевых пользователей с этим работать.

2. **Зоопарк из инструментов**. В среднем -- используется около 5 систем (хранилище, статик сайт генератор, гит-клиент, текстовый редактор, редактор диаграмм). Если между ними есть какая-то интеграция, появляется проблема обновления -- девопсу необходимо проверять все изменения, чтобы после обновления ничего не отвалилось.

3. **Зоопарк из вспомогательных плагинов** -- линтеры, сервисы отрисовки диаграмм, визивиг-превью, спелл чекеры. Все это нужно подключать отдельно.

4. **Высокий порог входа**. Git, Markdown, плагины -- это всё сложно.

5. **Продолжительный онбординг**. Развертывание среды разработки, обучение азам, первые ошибки и конфликты -- только через несколько месяцев человек начинает работать именно над докой, а не последовательными действиями.

6. **Сложный процесс ревью**. Единственный рабочий способ согласовать контент за пределами отдела или компании -- выгрузка в Word. Минусы тут понятны.

7. **Дополнительная стандартизация**. Кроме требований стайлгада, нужно соблюдать кодстайл. Конечно, можно подключить форматтер, но его правила не всегда и не всем подходят. Для персональной настройки нужно потратить ресурсы.