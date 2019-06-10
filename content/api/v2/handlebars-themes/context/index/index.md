---
title: "Index"
date: "2018-10-01"
meta_title: "Index Context: Ghost Themes - Documentation"
meta_description: "The index context in Ghost themes is used to render lists of posts in a publication. Learn more about contexts and building a custom theme 👻"
keywords:
    - contexts
    - handlebars
    - themes
    - api
sidebar: "handlebars"
---


Use: {{#is "index"}}{{/is}} to detect this context.

## Description

`index` is the name for the main post list in your Ghost site, the `index` context includes the home page and subsequent pages of the main post list. The `index` context is always paired with either the `home` context when on the first page of your site, or the `page` context when on subsequent pages.

## Routes

The index context is present on both the root URL of the site, e.g. `/` and also on subsequent pages of the post list, which live at `/page/:num/`. All routes are customisable with [dynamic routing](/api/handlebars-themes/routing/).


## Templates

The index context is rendered with `index.hbs` by default. This template is required in all Ghost themes. If there is a `home.hbs` present in the theme, the home page will be rendered using that instead.

Note that the `index.hbs` template is also used to output the tag and author contexts, if no specific `tag.hbs` or `author.hbs` templates are provided.

## Data

The `index` context provides templates with access to an array of post objects and a pagination object. As with all contexts, all of the `@blog` global data is also available.

The number of posts provided will depend on the `post per page` setting which you can configure [in your package.json](/api/handlebars-themes/helpers/foreach/) file. The array will provide the correct posts for the current page number, with the posts ordered chronologically, newest first. Therefore on the home page, the theme will have access to the first 6 posts by default. On /page/2/ the theme will have access to posts 7-12.

Each of the posts can be looped through using `{{#foreach 'posts'}}{{/foreach}}`. The template code inside the block will be rendered for each post, and have access to all of the post object attributes.

The pagination object provided is the same everywhere. The best way to output pagination is to use the pagination helper.


## Helpers

Using `{{#foreach 'posts'}}{{/foreach}}` is the best way to loop through your posts and output each one.

If your theme does have a `tag.hbs` and `author.hbs` file all outputting similar post lists you may wish to use a partial to define your post list item, e.g. `{{> "loop"}}`. There's an example showing this in detail below.

The [{{pagination}}](/api/handlebars-themes/helpers/pagination/) helper is the best way to output pagination. This is fully customisable.


## Example Code

```handlebars:title=index.hbs
<header>
  <h1 class="page-title">{{@blog.title}}</h1>
  <h2 class="page-description">{{@blog.description}}</h2>
</header>

<main role="main">
<!-- This is the post loop - each post will be output using this markup -->
  {{#foreach posts}}
	<article class="{{post_class}}">
 		<header class="post-header">
   		<h2><a href="{{url}}">{{title}}</a></h2>
    </header>
    <section class="post-excerpt">
 			<p>{{excerpt words="26"}} <a class="read-more" href="{{url}}">...</a></p>
    </section>
    <footer class="post-meta">
      {{#if primary_author.profile_image}}<img src="{{primary_author.profile_image}}" alt="Author image" />{{/if}}
      {{primary_author}}
      {{tags prefix=" on "}}
      <time class="post-date" datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMMM YYYY"}}</time>
    </footer>
  </article>
  {{/foreach}}

</main>

<!-- Previous/next page links - displayed on every page -->
{{pagination}}

```

## Home

`home` is a special context which refers to page 1 of the index. If `home` is set, `index` is always set as well. `home` can be used to detect that this is specifically the first page of the site and not one of the subsequent pages.

Use: `{{#is "home"}}{{/is}}` to detect this context.

### Routes

The route for the home page is always `/`.

### Templates

The default template for the home page is `index.hbs`. You can optionally add a `home.hbs` template to your theme which will be used instead.

### Data

The data available on the home page is exactly the same as described in the index context. The home page's posts will always be the first X posts ordered by published date with the newest first, where X is defined by the `posts_per_page` setting in the `package.json` file.
