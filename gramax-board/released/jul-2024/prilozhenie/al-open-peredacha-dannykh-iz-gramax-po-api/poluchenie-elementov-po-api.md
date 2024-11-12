---
order: 1
title: Получение элементов по API
---

{% table %}

---

*  {% colwidth=[501] isHeader=true %}

   Как выглядит в статье

*  {% colwidth=[500] isHeader=true %}

   Как выглядит на странице полученной по API

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-3.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-4.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-6.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-52.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-9.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-10.png)

---

*  {% colwidth=[501] %}

   **DbTable**

   ![](./poluchenie-elementov-po-api-54.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-53.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-12.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-13.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-14.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-15.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-16.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-17.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-21.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-19.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-22.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-23.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-24.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-25.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-26.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-27.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-28.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-29.png "(по вкладкам не переключается)")

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-30.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-31.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-32.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-33.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-36.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-37.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-38.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-39.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-41.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-40.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-42.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-43.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-45.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-44.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-47.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-46.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-49.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-48.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-50.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-51.png)

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-34.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-35.png "просто текст")

---

*  {% colwidth=[501] %}

   ![](./poluchenie-elementov-po-api-55.png)

*  {% colwidth=[500] %}

   ![](./poluchenie-elementov-po-api-56.png)

{% /table %}

```
<name attr-name-1="value1" attr-name-2="value2" src={апи запрос, по котрому можно получить этот ресурс}>
	content
</name>
```

-  OpenApi (yaml)

   ```
   <open-api src={src}>
   </open-api>
   ```

-  Mermaid (mermaid)

   ```
   <mermaid src={src}>
   </mermaid>
   ```

-  C4 Structurizr  (c4)

   ```
   <c4-structurizr src={src}>
   </c4-structurizr>
   ```

-  TS-диаграммы

   ```
   <ts-diagram src={src}>
   </ts-diagram>
   ```

-  Tabs

   ```
   <tabs>
   	<tab title="title1" icon="icon2">
   		children1
   	</tab>
   	<tab title="title2" icon="icon2">
   		children2
   	</tab>
   </tabs>
   ```

-  PlantUML

   -  если контент в файле

      ```
      <plant-uml src={src}>
      </plant-uml>
      ```

   -  если контент в статье

      ```
      <plant-uml>
      	content
      </plant-uml>
      ```