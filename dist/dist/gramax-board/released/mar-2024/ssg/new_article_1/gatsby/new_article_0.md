---
order: 1
title: Сборка собственного сайта Gatsby
---

### Первый взгляд

Сайт **Gatsby** состоит из jsx/tsx страниц

### Инициализация проекта

1. Для того чтобы создать проект нужны **Node.Js** и его инструменты:

   -  **npm** (Node Package Manager)

   или **Yarn**

2. В командной строке выполнением команды

   -  С использованием **npx** (рекомендуется для npm 5.2.0 и выше):

      `npm install -g gatsby-cli`

   -  С использованием **Yarn**:

      `yarn global add gatsby-cli`

   установливается **Gatsby CLI** (интерфейс командной строки **Gatsby**)

3. В командной строке выполнением команды

   `gatsby new my-gatsby-site`

   в папке `my-gatsby-site` создаётся проект **Gatsby** с использованием стандартного шаблона стартового проекта

### **Режим разработки**

Для работы над сайтом и внесения изменений в реальном времени используйте команду:

`npm start`

или, если вы используете Yarn:

`yarn start`

Эта команда запускает локальный сервер разработки и автоматически перезагружает ваш сайт в браузере при каждом изменении файлов проекта

### **Запуск сборки**

Для запуска сборки, просто выполните в терминале:

`npm run build`

или, если вы используете Yarn:

`yarn build`

После успешной сборки в директории `build` вашего проекта появятся статические файлы, готовые к развертыванию.

### Добавление страниц

Чтобы добавить возможность создавать страницы из md файлов надо:

1. Подключить плагин преобразующий контент в Markdown файлах в HTML. Для этого в файле `gatsby-config.js`

   ```
   plugins: [
       ...
       `gatsby-transformer-remark`
     ]
   ```

Чтобы добавить страницы состоящие из md файлов надо:

1. В файле `gatsby-config.js` с помощью плагина `gatsby-source-filesystem` указать, какие файлы прочитать как md. В примере файлы расположены в папке `src/content`

   ```
   plugins: [
       ...
       {
         resolve: `gatsby-source-filesystem`,
         options: {
           name: `markdown-pages`,           // Указываем, что это md
           path: `${__dirname}/src/content`, // Путь к Markdown файлам
         },
       }
     ]
   ```

2. Создать react компонент, который будет использоваться как шаблон для создания страниц. В примере это файл `src\templates\markdown-page.js`

   ```
   import * as React from "react"
   import { graphql } from "gatsby"
   
   export default function BlogPostTemplate({
     data, // результат graphql запроса (код запроса ниже) 
   }) {
     const { markdownRemark } = data
     const { frontmatter, html } = markdownRemark
     return (
       <div>
           <h1>{frontmatter.title}</h1>
           <div dangerouslySetInnerHTML={{ __html: html }} />
       </div>
     )
   } // Отображение данных
   
   export const pageQuery = graphql`
     query ($slug: String!) // $slug - получаемый параметр
       {
       markdownRemark(fields: { slug: { eq: $slug } }) // ищем первую запись, где поле 'slug' == $slug
         {
         html
         frontmatter {
           title
         }
       }
     }
   ` // graphql запрос для получения данных, которыми будет заполняться страница
   ```

3. В файле `gatsby-node.js` создаём страницы из прочитанных данных

   ```
   exports.createPages = async ({ actions }) => {
     const { createPage } = actions
   
     // Выполнение запроса GraphQL
     const result = await graphql(`
       {
         allMarkdownRemark {
           edges {
             node {
               fields {
                 slug  // В примере использовался относительный путь для создания url и унификации страниц
               }
             }
           }
         }
       }
     `)
   
     // Создание страниц для каждого Markdown файла\
     result.data.allMarkdownRemark.edges.map(({ node }) => {
       createPage({
         path: node.fields.slug,                               // url новой страницы
         component: path.resolve("src/templates/markdown-page.js"),  // React компонент, который будет использоваться как шаблон для создания страницы
         context: {
           slug: node.fields.slug,                             // Передаваемые параметры в компонент
         },
       })
     })
   }
   ```

4. Так как в примере использовался относительный путь, а по умолчанию он не определен, то для его генерации в файле `gatsby-config.js` надо подключить соответствующий плагин

   ```
   plugins: [
       ...
       `gatsby-plugin-slug`,
     ]
   ```

5. И в заключении код главной страницы `index.js` для отображения ссылок на эти страницы

   ```
   import React from "react"
   import { graphql } from "gatsby"
   
   const IndexPage = ({ data }) => {
     const markdownPages = data.allMarkdownRemark.edges
   
     return (
       <div>
         {markdownPages.map(({ node }) => (
           <div style={{ textAlign: "left"}} key={node.id} >
             <a href={node.fields.slug} style={{ textDecoration: 'none'}}>{node.frontmatter.title}</a>
           </div>
         ))}
       </div>
     )
   }
   
   export const query = graphql`
     query {
       allMarkdownRemark {
         edges {
           node {
             id
             frontmatter {
               title
             }
             fields {
               slug
             }
           }
         }
       }
     }
   `
   ```

### **Особенности**

-  **Gatsby** использует **GraphQL** для управления данными, что позволяет разработчикам легко извлекать данные из различных источников (например, из файлов Markdown, CMS или внешних API) и использовать их в компонентах React.

   В примере на 1-ом шаге мы добавляем данные в бд, а после получаем их при помощи библиотеки `import { graphql } from "gatsby"` и запроса

   ```
   graphql`
     query {
       ...
       }
     }
   `
   ```