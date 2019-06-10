---
title: "body_class"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: body_class"
meta_description: "Learn how to target specific pages of your Ghost publication with styles. Read more about Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Usage: `{{body_class}}`

### Description

`{{body_class}}` – outputs dynamic CSS classes intended for the `<body>` tag in your `default.hbs` or other layout file, and is useful for targeting specific pages (or contexts) with styles.

The `{{body_class}}` helper outputs different classes on different pages, depending on what context the page belongs to. For example the home page will get the class `.home-template`, but a single post page would get `.post-template`.


### Examples

```handlebars:title=default.hbs
<html>
    <head>...</head>
    <body class="{{body_class}}">
    ...
    {{{body}}}
    ...
    </body>
</html>
```

