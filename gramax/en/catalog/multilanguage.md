---
order: 4.5
title: Multilanguage
---

Any catalog can be made multilingual—displaying articles not only in the main language but also in others.

- You can assign a main language and additional languages to the catalog. To view articles in an additional language, readers will need to switch it on the Documentation Portal.

- Seventeen popular languages are available: Russian, English, Chinese, Hindi, Spanish, French, Arabic, Portuguese, German, Japanese, Korean, Italian, Turkish, Dutch, Polish, Swedish, and Czech.

- It's important that the structure of the catalog remains unchanged across different languages. Translations are added for each article separately.

- Translations are assigned only to articles and do not apply to the language of the application's interface or the Documentation Portal.

## Add Language

1. In the right panel, click on *Configure Catalog* and specify the main language.

   ![](./multilanguage-4.png)

   :::info 

   The main language can be specified only once in *Configure Catalog*. It can only be changed in the [catalog configuration file](./setting/doc-root-yaml).

   :::

2. In the upper right corner, click on the name of the main language. Then click *\+ Add Language* and select it from the dropdown list.

   ![](./multilanguage-5.png)

## Translate Articles

1. Switch to the additional language in the application.

2. Open the article for translation. The version in the main language will be displayed on the right side. Enter the text of the article in the additional language.

   ![](./multilanguage-6.png)

If there is no translation for the article yet, its title in the left navigation will be faint, and it will not appear on the Documentation Portal. An article with a translation will be displayed as usual.

## Publish Translation

Publish the translated articles [in the standard way](./../quick-start/publish-repository).

In the storage, translations will be located in a separate folder with the suffix of the additional language.
