---
order: 5
title: "[done] Изолированные тесты"
---

Чтобы нам было легче тестировать различные фичи, хотелось бы иметь возможность создать тесты которые выполняются в вне общего контекста. Например в некоторые тесты хотелось бы запускать в пустом, только что инициализированном приложении, некоторые в тестовом каталоге или же в тестовой статье.

---

#### \[x\] `.feature` файлы создаются в отдельной директории

```
features
 \ isolate-feature1
 - \ 1. test.feature
 - \ 2. test.feature
 \ isolate-feature2
 - \ 1. test.feature
```

Для каждой директории будет создаваться новый контекст браузера. Таким образом тесты будут изолированы и не зависить друг от друга.

Создать заранее определённое окружение сложно, поэтому приложение в каждом новом контексте будет будто в первый раз запущено