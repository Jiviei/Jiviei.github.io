---
order: 1
title: Индикаторы в навигации и статье
---

*Сценарий*: я когда редактирую каталог хочу видеть все изменения которые сделал в этой сессии редактирования.

1. **Индикаторы изменений в левой панели**: Открываю каталог на редактирование и вижу бренч. Как только начинаю редактирование сразу же вижу в левой навигации, что текущая статья пометилась как измененная и в левой панели текущий пункт подсвечивается как изменнный.

2. **Счетчик изменений:** Снизу в панели загорается счетчик незакоммиченных изменений с цифрой 1. Его сразу видно, но он не очень сильно мозолит глаза.

3. **Обычный коммит изменений**: Кликаю по нему и открывается стандартное окно коммита.

   *В будущем*: хотелось бы отказаться от отдельного окна коммита. Лучше сделать, чтобы синяя панелька выезжала наверх и там бы был виден комментарий, а левая навигация фильтровалась только по статьям которые были изменены. По измененным статья можно кликнуть и просмотреть в основной области сделанные изменения в удобном виде в режиме diff. Есть возможность открыть сырой (raw) режим чтобы просматривать изменения на уровне маркдауна.

4. **Индикаторы незакоммиченных изменений пропадают**: После коммита все индикаторы изменений очищаются.

### Комментарии

-  Мы рисовали макеты на индикаторы в левой навигации тут [https://www.figma.com/file/wNl0LVlj9AHNpdcW39goDc/DocReader-Задачи-UX%2FUI?node-id=304-3283.](https://www.figma.com/file/wNl0LVlj9AHNpdcW39goDc/DocReader-%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-UX%2FUI?node-id=304-3283)

-  Важно чтобы индикаторы изменений были не привязаны именно к текущим изменениям. Потому что следующим шагом хочется прикрутить их к механизму просмотра любых изменений, в т.ч. в ревью и просмотру обновлений.

-  Для базы знаний важно, чтобы было удобно просматривать обновления. Правильно во принимать статьи по темам как каналы на заданные темы. В этих каналах появляются обновления, можно перейти на них и посмотреть что там изменилось. После просмотра изменений сообщения (изменения) в канале (статье) помечаются как прочитанные.