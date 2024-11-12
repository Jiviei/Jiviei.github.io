---
order: 1
title: "@SF @PS [tech] React Hook для выполнения и контроля асинхронных действий"
properties:
  - name: Assignee
    value: SF
  - name: Release
    value: october-24
---

Сейчас для отображения компонентов, для которых требуются данные, нужно использовать два хука: `useEffect` + `useState`. Это неудобно контролировать и неудобно писать.

Нужно разработать хук(и), чтобы можно было удобно выполнять асинхронные действия и контролировать их. Основной юзкейс: отправлять запрос при помощи `FetchService` и иметь актуальную информацию о его статусе выполнения, ошибке, данных, прочее.

## **Референсы**

[React Async](https://docs.react-async.com/getting-started/usage): -- взять за основу, проанализировать и выявить реально нужный нам функционал

## Критерии

1. Есть хук `useAsync`, который является чем-то вроде аналога `useWatch`, но async и возвращающий данные о состоянии промиса

2. Есть хук `useApi` / `useFetch` / что-то в этом роде, который имеет сигнатуру. По задумке, внутри он должен использовать `useAsync`

   ```typescript
   type UseAsyncProps = {
   	onFulfill: (data) => Promise<void> | void,
   	onError: (err) => Promise<void> | void,
   	onDemand: boolean
   };
   
   type UseAsyncResult = { 
   	data?: T,
   	error?: E
   	isPending: boolean,
   	isFulfilled: boolean,
   	isFailed: boolean,
   	send?: () => void
   }
   
   useFetch(endpoint: <Список методов ApiUrlCreator как строка>, args: <Аргументы этого эндпоинта>, props?: UseAsyncProps): UseAsyncResult
   ```