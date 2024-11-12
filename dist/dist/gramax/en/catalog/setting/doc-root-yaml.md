---
order: 1.5
title: Сonfiguration File
---

The `.doc-root.yaml` file stores the settings for the entire catalog. It is located in the documentation folder within the repository. An example of its content is:

```YAML
code: GX           # Short name of the catalog
title: Gramax Docs # Full name of the catalog
logo: ./logo.svg   # Logo
order: 2           # Position on the homepage relative to other catalogs
description: For documentation and knowledge storage. # Brief information about the catalog
style: black       # Color used for the catalog on the homepage
relatedLinks:      # Additional links available in the right panel
  - url: https://t.me/gramax_chat
    title: Telegram Channel
    icon: mail-question 
```

You can open and edit `.doc-root.yaml` directly in GitLab or GitHub, or in your preferred IDE.