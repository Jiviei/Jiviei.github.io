---
order: 0.5
title: "@DK @AM [open] Исследование: мержреквесты и согласования"
---

Подготовить и происследовать эпик.

## Критерии

1. Написан и согласован эпик по мержреквестам.

2. Подготовлены черновые макеты для всех интерфейсов.

3. Расписаны процессы работы со стороны пользователя.

4. Расписана техническая реализация и согласована со Стасом и Андреем.

## Оценка

5 дней

#### Design details

[icon:gitlab] Gitlab:

1. Список мерж реквестов (с фильтрами и сортировкой, например, по дате обновления)

2. Автор, assignees, reviewers, has conflicts, can be merge/can not be merged

3. Апрув/анапрув

4. Список тех, кто апрувнул

5. Список коммитовd

6. Получить diff’ы. Думаю, лучше диффы создавать самим, для этого и так есть все данные (и лучше сразу в Monaco)

7. Создать, удалить

8. Смержить

9. Заребейзить source branch в target branch

10. Получить все дискуссии. Каждая дискуссия прикреплена к каким-то строкам. Причем они могут быть прицеплены к old_line или new_line. То есть нужны именно диффы у гитлаба. Наши текущие диффы не подойдут, т.к. они инлайновые. Диффы, которые генерирует Monaco тоже не понятно, вряд ли так-же, как и нативный гит (я так понимаю gitlab рендерит диффы нативного гита). Так что пока непонятно как отображать дискуссии.

11. Создать/удалить/изменить тред (дискуссию)



[icon:github] Github:

1. Список пулл реквестов (с фильтрами и сортировкой, например, по дате создания или обновления)

2. Автор, assignees, open/close

3. Открыть/закрыть PR

4. Список коммитов

5. Получить diff’ы

6. Создать

7. Смержить

8. Обновить ветку в пулл реквесте

9. С комментами в целом тоже самое, они прикреплены к какой-то строке в diff, но так же возвращается и номер оригинальной строки.

10. Создать/удалить/изменить коммент

11. Получить ревью (группа комментов)

12. Создать/удалить/изменить ревью

13. Принять и отклонить ревью