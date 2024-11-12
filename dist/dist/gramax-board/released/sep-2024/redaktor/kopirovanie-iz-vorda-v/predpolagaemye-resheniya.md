---
order: 1
title: Предполагаемые решения
---

{% table %}

---

*  {% colwidth=[113] isHeader=true %}

   Компонент

*  {% colwidth=[591] isHeader=true %}

   Приходящий HTML

*  {% colwidth=[344] isHeader=true %}

   Выходящий HTML

*  {% colwidth=[235] isHeader=true %}

   Сложность переноса (1-10)

---

*  {% colwidth=[113] %}

   Цвет текста

*  {% colwidth=[591] %}

   `<p class=MsoNormal><span style='color:red'>ТЕКСТ<o:p></o:p></span></p>`

*  {% colwidth=[344] %}

   `<span style="color: red;">ТЕКСТ</span>`

*  {% colwidth=[235] %}

   2

---

*  {% colwidth=[113] %}

   Списки

*  {% colwidth=[591] %}

   ![](./predpolagaemye-resheniya.png)

*  {% colwidth=[344] %}

   `<ul><li>Тестовое тесто</>li … </ul>`

*  {% colwidth=[235] %}

   5

---

*  {% colwidth=[113] %}

   Ссылки

*  {% colwidth=[591] %}

   ![](./predpolagaemye-resheniya-2.png)

*  {% colwidth=[344] %}

   Ссылка верная в HTML дереве, но хранится в markdown неверно, поэтому не работает.

   Что можно с этим сделать?

*  {% colwidth=[235] %}

   ?

---

*  {% colwidth=[113] %}

   Видео

*  {% colwidth=[591] %}

   ![](./predpolagaemye-resheniya-3.png)

*  {% colwidth=[344] %}

   В модель видео добавить парсинг для html.

   MsO не поддерживает рутуб.

*  {% colwidth=[235] %}

   4

---

*  {% colwidth=[113] %}

   Комментарии

*  {% colwidth=[591] %}

   ![](./predpolagaemye-resheniya-4.png)

*  {% colwidth=[344] %}

   Действовать так же, как обычно с добавлением комментариев.

*  {% colwidth=[235] %}

   5

---

*  {% colwidth=[113] %}

   Изображения

*  {% colwidth=[591] %}

   ![](./predpolagaemye-resheniya-5.png)

*  {% colwidth=[344] %}

   Действовать так же, как при добавлении картинки из буфера

*  {% colwidth=[235] %}

   9

---

*  {% colwidth=[113] %}

   Графики

*  {% colwidth=[591] %}

   ![](./predpolagaemye-resheniya-6.png)

*  {% colwidth=[344] %}

   Так же, как и с изображениями

*  {% colwidth=[235] %}

   9

---

*  {% colwidth=[113] %}

   Textbox

*  {% colwidth=[591] %}

   ![](./predpolagaemye-resheniya-7.png)

*  {% colwidth=[344] %}

   Вставлять, как обычный текст

*  {% colwidth=[235] %}

   2

{% /table %}
