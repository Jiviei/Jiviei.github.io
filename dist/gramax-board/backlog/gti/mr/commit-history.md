---
order: 4
title: История коммитов
---

Иногда нужно вернуться в прошлое состояние каталога и посмотреть, какое оно было, и отпочковаться от старой версии и внести новые правки.

1. Пользователь может нажать на последнюю дату обновления в списке и в раскрывающемся окне увидеть список всех коммитов в ветку.

2. При нажатии на коммит, обновляется дата в списке у ветки и пользователь может перейти в просмотр этого коммита в Грамакс.

   1. Это не влияет на сортировку в списке.

   2. Если юзер перешёл в другую ветку, а потом вернулся к списку веток, то в списке уже не будет выбранного старого коммита, а будет отображаться последний, по умолчанию.

3. На графе видим отображение связей относительно даты коммита.

4. При переходе в коммит можно редактировать и … что будет в таком случае в гите?

5. Если пользователь хочет сравнить старый коммит с любым другим, то он выбирает нужный коммит, отпочковывается от него в отдельную ветку и делает мерж реквест в нужную ветку. Стоит вообще пользователям объяснить, что если хочет предложить правки, то это лучше делать через мерж реквест, т.к. сравнивать два исторических коммита у нас не будет возможности.

## Редактирование старых коммитов

Разобрались с ребятами. Редактировать старые коммиты нельзя - если изменения запушить, они улетят в никуда и сломают все.

Смоделировали кейс: Я редактировала каталог и сделала 3 коммита. Потом решила, что эти 3 коммита мне не нужны. И хочу вернуть каталог в старое состояние. Есть 3 способа решения этой задачи.

1. Последовательный реверт каждого из 3 коммитов: я кликаю на коммит “fix1”, нажимаю “реверт”, создается новый коммит “revert fix1”. У этого есть проблема: если мне нужно отменить 10 коммитов, нужно сделать 10 ревертов. В итоге будет 20 коммитов, зато сохранится история: кто и когда ревертнул каждый коммит.

2. Создание новой ветки из старого коммита. Например, у меня есть ветка “мастер”. Я открываю старый коммит, создаю ветку “мастер 2” и всю следующую работу веду в нем.

3. Мерж ветки из старого коммита в основную. Например, я внесла изменения в ветку “мастер2”. Я могу замержить ее в “мастер”, но мне придется решить абсолютно ВСЕ конфликты.

Основная мысль: когда юзер открывает на просмотр старый коммит, он не может его редактировать. Например, можно выводить окно: “Это старая версия каталога. Чтобы отредактировать ее, создайте новую ветку”.