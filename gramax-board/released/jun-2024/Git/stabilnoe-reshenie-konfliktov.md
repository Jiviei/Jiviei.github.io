---
order: 2
title: "@DK @AL [porev] Стабильное решение конфликтов"
---

Раньше мы не умели решать некоторые виды конфликтов. Хотелось бы теперь настроить так, чтобы Gramax умел решать все виды конфликтов.

![](./stabilnoe-reshenie-konfliktov.png)



## Критерии

1. Вместо ошибки “Мы пока не умеем решать такие конфликты” показывается стандартное окно ошибки при всех конфликтах ниже.

## Виды конфликтов

Ветки A и B, в которых есть файл `file`. Мы находимся на ветке A.

1. Файл изменен на одной и той же строке на обоих ветках

   ![](./stabilnoe-reshenie-konfliktov-3.png)

2. Файл удален в ветке A, изменён в ветке B

   ![](./stabilnoe-reshenie-konfliktov-4.png)

3. Файл удален в ветке A, переименован в ветке B

   ![](./stabilnoe-reshenie-konfliktov-5.png)

4. Файл добавлен в ветке A, и добавлен в ветке B

   ![](./stabilnoe-reshenie-konfliktov-6.png)

5. Файл добавлен в ветке A, и переименован в такой же файл в ветке B

   ![](./stabilnoe-reshenie-konfliktov-7.png)

6. Файл переименован в ветке A и переименован в ветке B:

   1. Контент совпадает:

      1. Переименован в разные файлы:

         ![](./stabilnoe-reshenie-konfliktov-9.png)

         ![](./stabilnoe-reshenie-konfliktov-2.png)

      2. Переименован в одинаковые файлы: это не конфликт.

   2. Контент не совпадает

      1. Переименован в разные файлы:

         ![](./stabilnoe-reshenie-konfliktov-10.png)

         ![](./stabilnoe-reshenie-konfliktov-11.png)

      2. Переименован в один файл:

         ![](./stabilnoe-reshenie-konfliktov-8.png)



Таблица:

Ветка `A`(наша, ours), ветка  `B` (их, theirs). Мержим `B` в `A` . Файл - `1.txt`, контент файла:

```
1.txt content
line 2
line 3
```

-  M - изменение контента (modify). В ветке `A` меняем первую строчку на `content A`, в ветке `B` меняем первую строчку на `content B`

-  D - удаление (delete)

-  A - добавление (add)

-  R - переименование (rename)

-  R+M - переименование и изменение контента меньше 50% (rename + modify)

-  lg2 - какой результат конфликта вернул libgit2

По горизонтали - наше действие, по вертикали - их действие

{% table %}

---

*  {% colwidth=[79] isHeader=true %}

   ours -->

   theirs ↓

*  {% colwidth=[45] isHeader=true %}

   M

*  {% colwidth=[69] isHeader=true %}

   D

*  {% colwidth=[418] isHeader=true %}

   A

*  {% colwidth=[473] isHeader=true %}

   R

*  {% colwidth=[401] isHeader=true %}

   R+M

---

*  {% colwidth=[79] isHeader=true %}

   M

*  {% colwidth=[45] %}

   1\.txt

   ```
   <<<<<<< ours
   content A
   =======
   content B
   >>>>>>> theirs
   line 2
   line 3
   ```

   lg2:

   ```
   ours: null,
   theirs: '1.txt',
   ancestor: '1.txt'
   ```

*  {% colwidth=[69] %}

   1\.txt

   ```
   <<<<<<< Deleted content
   
   =======
   content B
   line 2
   line 3
   >>>>>>> Added content
   ```

   lg2:

   ```
   ours: null,
   theirs: '1.txt',
   ancestor: '1.txt'
   ```

*  {% colwidth=[418] %}

   \-

*  {% colwidth=[473] %}

   \-

*  {% colwidth=[401] %}

   1\.txt:

   ```
   <<<<<<< Deleted content
   
   =======
   content B
   line 2
   line 3
   >>>>>>> Added content
   ```

   1_moved_A.txt:

   ```
   content A
   line 2
   line 3
   ```

   lg2:

   ```
   ours: null,
   theirs: '1.txt',
   ancestor: '1.txt'
   ```

   Как будто lg2 посчитал

   переименование как

   удаление и добавление

---

*  {% colwidth=[79] isHeader=true %}

   D

*  {% colwidth=[45] %}

   1\.txt

   ```
   <<<<<<< Deleted content
   
   =======
   content A
   line 2
   line 3
   >>>>>>> Added content
   ```

   lg2o:

   ```
   ours: null,
   theirs: '1.txt',
   ancestor: '1.txt'
   ```

*  {% colwidth=[69] %}

   \-

*  {% colwidth=[418] %}

   \-

*  {% colwidth=[473] %}

   1\.txt - удален

   1_moved_A.txt:

   ```
   <<<<<<< Deleted content
   
   =======
   1.txt content
   line 2
   line 3
   >>>>>>> Added content
   ```

   lg2:

   ```
   ours: null,
   theirs: null,
   ancestor: '1.txt',
   ---
   ours: '1_moved_A.txt',
   theirs: null,
   ancestor: null
   ```

*  {% colwidth=[401] %}

   \-

---

*  {% colwidth=[79] isHeader=true %}

   A

*  {% colwidth=[45] %}

   \-

*  {% colwidth=[69] %}

   \-

*  {% colwidth=[418] %}

   В обоих ветках добавляется

   файл 2.txt:

   1. Контент полностью совпадает:

      Не конфликт

   2. Контент совпадает больше 50%:

      2\.txt:

      ```
      <<<<<<< ours
      content A
      =======
      content B
      >>>>>>> theirs
      line 2
      line 3
      ```

      lg2:

      ```
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

   3. Контент совпадает меньше 50%:

      2\.txt:

      ```
      <<<<<<< ours
      content A
      line 2 A
      line 3 A
      =======
      content B
      line 2 B
      line 3 B
      >>>>>>> theirs
      ```

      lg2:

      ```
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

*  {% colwidth=[473] %}

   В текущей ветке файл переименовывается 1.txt --> 2.txt,

   в их ветке добавляется 2.txt:

   lg2 создаёт конфликт, несмотря на то, что контент совпадает. Так же создает `~ours` и `~theirs` файлы (не нативное поведение).

   1. Контент полностью совпадает:

      1\.txt - удален

      2\.txt\~ours:

      ```
      1.txt content
      line 2
      line 3
      ```

      2\.txt\~theirs:

      ```
      1.txt content
      line 2
      line 3
      ```

      lg2:

      ```
      ours: null,
      theirs: '1.txt',
      ancestor: '1.txt'
      ---
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

   2. Контент совпадает больше 50%:

      1\.txt - удален

      2\.txt\~ours:

      ```
      1.txt content
      line 2
      line 3
      ```

      2\.txt\~theirs:

      ```
      content B
      line 2
      line 3
      ```

      lg2:

      ```
      ours: null,
      theirs: '1.txt',
      ancestor: '1.txt'
      ---
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

   3. Контент совпадает меньше 50%:

      1\.txt - удален

      2\.txt\~ours:

      ```
      1.txt content
      line 2
      line 3
      ```

      2\.txt\~theirs:

      ```
      content B
      line 2
      line 3
      ```

      lg2:

      ```
      ours: null,
      theirs: '1.txt',
      ancestor: '1.txt'
      ---
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

*  {% colwidth=[401] %}

   В текущей ветке файл переименовывается 1.txt --> 2.txt и изменяется первая строчка,

   в их ветке добавляется 2.txt:

   1. Контент полностью совпадает:

      Не конфликт

   2. Контент совпадает больше 50%

      2\.txt:

      ```
      <<<<<<< ours
      content A
      =======
      content B
      >>>>>>> theirs
      line 2
      line 3
      ```

      lg2:

      ```
      ours: '2.txt', 
      theirs: '2.txt',
      ancestor: null
      ```

   3. Контент совпадает меньше 50%:

      2\.txt:

      ```
      <<<<<<< ours
      content A
      line 2
      line 3
      =======
      content B
      line 2 B
      line 3 B
      >>>>>>> theirs
      ```

      lg2:

      ```
      ours: '2.txt', 
      theirs: '2.txt',
      ancestor: null
      ```

---

*  {% colwidth=[79] isHeader=true %}

   R

*  {% colwidth=[45] %}

   \-

*  {% colwidth=[69] %}

   1\.txt - удален

   1_moved_B:

   ```
   <<<<<<< Deleted content
   
   =======
   1.txt content
   line 2
   line 3
   >>>>>>> Added content
   ```

   lg2:

   ```
   ours: null,
   theirs: null,
   ancestor: '1.txt',
   ---
   ours: null,
   theirs: '1_moved.txt',
   ancestor: null
   ```

*  {% colwidth=[418] %}

   В текущей ветке добавляется 2.txt:

   В их ветке файл переименовывается 1.txt --> 2.txt,

   lg2 создаёт конфликт, несмотря на то, что контент совпадает. Так же создает `~ours` и `~theirs` файлы (не нативное поведение).

   1. Контент полностью совпадает:

      1\.txt - удален

      2\.txt\~ours:

      ```
      1.txt content
      line 2
      line 3
      ```

      2\.txt\~theirs:

      ```
      1.txt content
      line 2
      line 3
      ```

      lg2:

      ```
      ours: '1.txt',
      theirs: null,
      ancestor: '1.txt'
      ---
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

   2. Контент совпадает больше 50%:

      1\.txt - удален

      2\.txt\~ours:

      ```
      content A
      line 2
      line 3
      ```

      2\.txt\~theirs:

      ```
      1.txt content
      line 2
      line 3
      ```

      lg2:

      ```
      ours: '1.txt',
      theirs: null,
      ancestor: '1.txt'
      ---
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

   3. Контент совпадает меньше 50%:

      1\.txt - удален

      2\.txt\~ours:

      ```
      content A
      line 2 A
      line 3 A
      ```

      2\.txt\~theirs:

      ```
      1.txt content
      line 2
      line 3
      ```

      lg2:

      ```
      ours: '1.txt',
      theirs: null,
      ancestor: '1.txt'
      ---
      ours: '2.txt',
      theirs: '2.txt',
      ancestor: null
      ```

*  {% colwidth=[473] %}

   1. Переименованы в один и тот же файл:

      Не конфликт

   2. Переименованы в разные файлы:

      2_A.txt:

      ```
      <<<<<< Deleted content
      
      =======
      1.txt content
      line 2
      line 3
      >>>>>>> Added content
      ```

      2_B.txt:

      ```
      <<<<<< Deleted content
      
      =======
      1.txt content
      line 2
      line 3
      >>>>>>> Added content
      ```

      lg2:

      ```
      ours: null,
      theirs: null,
      ancestor: '1.txt'
      ---
      ours: '2_A.txt',
      theirs: null,
      ancestor: null
      ---
      ours: null,
      theirs: '2_B.txt',
      ancestor: null
      ```

*  {% colwidth=[401] %}

   1. Переименованы в один и тот же файл:1.

      1. Контент идентичен:

         Не конфликт

      2. Контент совпадает больше 50%:

         Создает `~ours` и `~theirs` файлы (не нативное поведение).

         2\.txt\~ours:

         ```
         content A
         line 2
         line 3
         ```

         2\.txt\~theirs:

         ```
         1.txt content
         line 2
         line 3
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: '2.txt',
         theirs: '2.txt',
         ancestor: null
         ```

      3. Контент совпадает меньше 50%:

         Создает `~ours` и `~theirs` файлы (не нативное поведение).

         2\.txt\~ours:

         ```
         content A
         line 2 A
         line 3 A
         ```

         2\.txt\~theirs:

         ```
         1.txt content
         line 2
         line 3
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: '2.txt',
         theirs: '2.txt',
         ancestor: null
         ```

   2. Переименованы в разные файлы:

      1. Контент совпадает больше 50:

         2_A.txt:

         ```
         content A
         line 2
         line 3
         ```

         2_B.txt:

         ```
         1.txt content
         line 2
         line 3
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: null,
         theirs: '2_B.txt',
         ancestor: null
         ```

      2. Контент совпадает меньше 50%:

         2_A.txt:

         ```
         content A
         line 2 A
         line 3 A
         ```

         2_B.txt:

         ```
         1.txt content
         line 2
         line 3
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: null,
         theirs: '2_B.txt',
         ancestor: null
         ```

---

*  {% colwidth=[79] isHeader=true %}

   R+M

*  {% colwidth=[45] %}

   1\.txt:

   ```
   <<<<<<< Deleted content
   
   =======
   content A
   line 2
   line 3
   >>>>>>> Added content
   ```

   1_moved_B.txt:

   ```
   content B
   line 2
   line 3
   ```

   lg2:

   ```
   ours: '1.txt',
   theirs: null,
   ancestor: '1.txt'
   ```

   Как будто lg2 посчитал

   переименование как

   удаление и добавление

*  {% colwidth=[69] %}

   \-

*  {% colwidth=[418] %}

   В текущей ветке добавляется 2.txt:

   В их ветке файл переименовывается 1.txt --> 2.txt и изменяется первая строчка,

   1. Контент полностью совпадает:

      Не конфликт

   2. Контент совпадает больше 50%

      2\.txt:

      ```
      <<<<<<< ours
      content A
      =======
      content B
      >>>>>>> theirs
      line 2
      line 3
      ```

      lg2:

      ```
      ours: '2.txt', 
      theirs: '2.txt',
      ancestor: null
      ```

   3. Контент совпадает меньше 50%:

      2\.txt:

      ```
      <<<<<<< ours
      content A
      line 2 A
      line 3 A
      =======
      content B
      line 2
      line 3
      >>>>>>> theirs
      ```

      lg2:

      ```
      ours: '2.txt', 
      theirs: '2.txt',
      ancestor: null
      ```

*  {% colwidth=[473] %}

   1. Переименованы в один и тот же файл:

      1. Контент идентичен:

         Не конфликт

      2. Контент совпадает больше 50%:

         Создает `~ours` и `~theirs` файлы (не нативное поведение).

         2\.txt\~ours:

         ```
         1.txt content
         line 2
         line 3
         ```

         2\.txt\~theirs:

         ```
         content B
         line 2
         line 3
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: '2.txt',
         theirs: '2.txt',
         ancestor: null
         ```

      3. Контент совпадает меньше 50%:

         Создает `~ours` и `~theirs` файлы (не нативное поведение).

         2\.txt\~ours:

         ```
         1.txt content
         line 2
         line 3
         ```

         2\.txt\~theirs:

         ```
         content B
         line 2 B
         line 3 B
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: '2.txt',
         theirs: '2.txt',
         ancestor: null
         ```

   2. Переименованы в разные файлы:

      1. Контент совпадает больше 50:

         2_A.txt:

         ```
         content A
         line 2
         line 3
         ```

         2_B.txt:

         ```
         1.txt content
         line 2
         line 3
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: null,
         theirs: '2_B.txt',
         ancestor: null
         ```

      2. Контент совпадает меньше 50%:

         2_A.txt:

         ```
         content A
         line 2 A
         line 3 A
         ```

         2_B.txt:

         ```
         1.txt content
         line 2
         line 3
         ```

         lg2:

         ```
         ours: null,
         theirs: null,
         ancestor: '1.txt'
         ---
         ours: null,
         theirs: '2_B.txt',
         ancestor: null
         ```

*  {% colwidth=[401] %}

   1. Переименован в один и тот же файл:

      1. Контент идентичен:

         Не конфликт

      2. Контент совпадает больше 50%:

         2\.txt:

         ```
         <<<<<<< ours
         content A
         =======
         content B
         >>>>>>> theirs
         line 2
         line 3
         ```

         lg2:

         ```
         ours: '2.txt',
         theirs: '2.txt',
         ancestor: null
         ```

      3. Контент совпадает меньше 50%:

         2\.txt:

         ```
         <<<<<<< ours
         content A
         line 2 A
         line 3 A
         =======
         content B
         line 2 B
         line 3 B
         >>>>>>> theirs
         ```

         lg2:

         ```
         ours: '2.txt',
         theirs: '2.txt',
         ancestor: null
         ```

   2. Переименованы в разные файлы:

      1. Контент идентичен:

         Не конфликт

      2. Контент совпадает больше 50%:

         Не конфликт

      3. Контент совпадает меньше 50%:

         Не конфликт

{% /table %}

#### Design details:

1. Пример unit теста:

   ![](./stabilnoe-reshenie-konfliktov-12.png)

2. Нужно проверить все варианты конфликтов:

   1. С переменованием

   2. С добавлением двух файлов

   3. Комбинации переименования и добавления

3. Если  файл переименован в ветке A и переименован в ветке B, с разным контентом, но при совпадении больше 50% (гит считает это переименованием), в разные файлы, нативный гит считает это конфликтом, а libgit2 - нет.

## Исходные заявки

-  <https://support.ics-it.ru/issue/GXS-1782> -- Ошибка при конфликте с переименованием