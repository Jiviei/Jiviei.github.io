---
order: 2
title: Tables
---

In the Gramax visual editor, you can add a table in just a few clicks. Gramax works with standard Markdown tables and provides enhanced features.

Example of a table:

{% table %}

---

*  {% colwidth=[148] isHeader=true %}

   Name

*  {% isHeader=true %}

   Datatype

*  {% isHeader=true %}

   Primary Key

*  {% isHeader=true %}

   Nullable

*  {% isHeader=true %}

   Comment

---

*  {% colwidth=[148] %}

   id

*  integer

*  1

*  N

*  Absence ID in the system

---

*  {% colwidth=[148] %}

   absenceReason

*  nvarchar(500)

*  

*  N

*  Absence reason

---

*  {% colwidth=[148] %}

   statusId

*  nvarchar(50)

*  

*  Y

*  Link to status

{% /table %}

There are two ways to add a table:

1. Create manually. To do this, click the table icon in the editing panel, then format the table: add rows and columns, define headers, merge cells.

   ![](./tables.png)

2. Copy from Excel. Large tables can simply be transferred from any other system. Just copy the table and paste it into the article in Gramax.

:::note Pin Markdown

If it's important to keep tables in Markdown format:

1. Do not manually adjust column widths.
2. Do not merge cells in the table.

These actions will change the Markdown table into another syntax.

:::
