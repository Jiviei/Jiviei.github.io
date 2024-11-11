---
order: 0.5
title: Action uttons
---

You can add action buttons to the right panel, such as links to the website, social media, or support contacts.

[image:./action-buttons.png:::0,0,100,100:square,82.4806,81.9958,16.9078,13.2838,Action button,top-left]

To do this, you need to specify the following in the [configuration file](./doc-root-yaml):

```YAML
relatedLinks:
    - url: https://t.me/gramax_chat
      title: Telegram Channel
      icon: mail-question
```

Where:

-  `url` -- the link that the reader will go to by clicking the button.

-  `title` -- the title of the button.

-  `icon` -- the name of the [Lucide icon](./../../article/editor/other-elements/icons)..