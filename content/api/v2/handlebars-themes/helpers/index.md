---
title: "Helpers"
date: "2018-10-01"
meta_title: "Ghost Handlebars Themes - Using Helpers - Docs"
meta_description: "Ghost has a number of built in helpers which give you the tools required to build a custom theme 🛠 Start developing your custom theme here!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Ghost has a number of built in helpers which give you the tools you need to build your theme. Helpers are classified into two types: block and output helpers.

**[Block Helpers](http://handlebarsjs.com/block_helpers.html)** have a start and end tag E.g. <code>\{\{#foreach\}\}\{\{/foreach\}\}</code>. The context between the tags changes and these helpers may also provide you with additional properties which you can access with the `@` symbol.

**Output Helpers** look much the same as the expressions used for outputting data e.g. `{{content}}`. They perform useful operations on the data before outputting it, and often provide you with options for how to format the data. Some output helpers use templates to format the data with HTML a bit like partials. Some output helpers are also block helpers, providing a variation of their functionality.


## Helper Listings

There are a number of different types of helper in Ghost. The types give some background information on how the helpers work or what they do, each helper has a list of types in its documentation which will link back here. For more information on the different expressions you may see wrapped in curly braces within Ghost themes.

### All

`{{foreach}}`, `{{has}}`, `{{is}}`, `{{get}}`, `{{content}}`, `{{excerpt}}`, `{{tags}}`, `{{author}}`, `{{img_url}}`, `{{navigation}}`, `{{pagination}}`,`{{url}}`, `{{date}}`, `{{plural}}`, `{{encode}}`, `{{asset}}`, `{{body_class}}`, `{{post_class}}`,`{{ghost_head}}`, `{{ghost_foot}}`,`{{meta_title}}`, `{{meta_description}}`, `{{next_post}}` & `{{prev_post}}`,  `{{log}}`, `{{if}}`, `{{unless}}`.

### Required

Required helpers must be included in a theme. Any theme which does not use all of the required helpers are considered invalid themes.

`{{asset}}`, `{{body_class}}`, `{{post_class}}`, `{{ghost_head}}`], `{{ghost_foot}}`.

### Block

Block helpers require both an opening and closing tag like `{{#has}}{{/has}}`. 

`{{foreach}}`, `{{has}}`, `{{is}}`, `{{author}}`

### Async

These helpers make use of Promises (asynchronous operations) as part of their work behind the scenes. This can cause limitations, and there is a known issue with Async helpers not working when they are nested.

`{{get}}`, `{{next_post}}`, `{{prev_post}}`, `{{ghost_head}}`, `{{ghost_foot}}`,
`{{amp_ghost_head}}`, `{{amp_content}}`

### Query

Query helpers perform a request to the API to get extra data for your theme. 

`{{get}}`, `{{next_post}}`, `{{prev_post}}` 

### Debugging

`{{log}}`

### Ghost

This means the helper was added by Ghost, rather than being part of Handlebars

### AMP

AMP helpers are specifically made for `amp` posts. 

### Handlebars

These helpers are core to the Handlebars templating language, meaning you may find more documentation about them elsewhere.

### Template-driven

Template helpers have a special partial template in Ghost core which they use to render their output. This template can be overridden by including a correctly named template in the partials folder of your theme. Details of the template are always documented with the helper.

`{{navigation}}` `{{pagination}}`

### Output

Output helpers are simple helpers which aid with common tasks when outputting data for themes, like listing tags. They often have options for configuring the output.

### Formatting

Format helpers provide tools for nicely formatting bits of data, like dates. They often have options for configuring how the data is formatted.
