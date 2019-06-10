var plugins = [{
      plugin: require('/Users/zhangh/opt/classes/website1/computervisionsite/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/zhangh/opt/classes/website1/computervisionsite/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Ghost Docs","short_name":"Ghost","start_url":"/","background_color":"#343f44","theme_color":"#343f44","display":"minimal-ui","icon":"static/favicon.png"},
    },{
      plugin: require('/Users/zhangh/opt/classes/website1/computervisionsite/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/zhangh/opt/classes/website1/computervisionsite/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[],"query":"\n                {\n                allGhostPost {\n                    edges {\n                        node {\n                            id\n                            slug\n                            published_at\n                            updated_at\n                            created_at\n                            feature_image\n                        }\n                    }\n                },\n                allGhostTag {\n                    edges {\n                        node {\n                            id\n                            slug\n                            feature_image\n                        }\n                    }\n                },\n                allMarkdownRemark{\n                    edges {\n                        node {\n                            id\n                            frontmatter {\n                                published_at: date\n                                feature_image: image\n                            }\n                            fields {\n                                slug\n                            }\n                        }\n                    }\n                }\n            }","mapping":{"allGhostPost":{"sitemap":"pages"},"allGhostTag":{"sitemap":"tags"},"allMarkdownRemark":{"sitemap":"pages"}},"exclude":["/dev-404-page","/404","/404.html","/offline-plugin-app-shell-fallback","/data-schema","/data-schema-2","/v0.11/README","/README"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
