(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"tagsQuery",function(){return h});var i=a(0),n=a.n(i),s=a(1),r=a.n(s),l=a(56),o=a(182),g=a(174),m=a(179),u=a(431),c=function(e){var t=e.data,a=e.location,i=e.pageContext,s=t.allGhostPost.edges,r=i.tagURL,c=i.tagName,h=i.tagDescription,p=i.tagImage,d=i.tagMetaTitle,b=i.tagMetaDescription,y=i.section,f=d||"FAQ - "+c+" - Ghost",q=b||h||"",v=p||Object(m.b)(y);return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{data:t,location:a,type:"series",title:f,description:q,image:v}),n.a.createElement(o.a,{headerDividerStyle:"shadow"},n.a.createElement("div",{className:"bg-faq bb b--whitegrey"},n.a.createElement("div",{className:g.a.page.xl+" pt-vw7 pt-vw1-ns pb-vw1"},n.a.createElement("h1",{className:g.a.h4+" white"},n.a.createElement(l.Link,{to:"/faq/",className:"link dim white fw3"},"Frequently Asked Questions"),n.a.createElement("span",{className:"white titleslash-white pl4 ml4 relative"},n.a.createElement(l.Link,{to:r,className:"link dim white"},c))))),n.a.createElement("div",{className:g.a.page.xl+" grid-12 pb5"},n.a.createElement("div",{className:"bg-white shadow-2 br4 mt10 pa5 pa15-ns pt10-ns pb12-ns col-12 col-8-ns"},s.map(function(e){var t=e.node;return n.a.createElement(u.a,{key:t.id,post:t,section:y})})),n.a.createElement("div",{className:"col-12 col-4-ns pa5 pa15-ns pt10-ns mt11-ns"},n.a.createElement(u.b,{location:a})))))};c.propTypes={data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired,allGhostPost:r.a.object.isRequired}).isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired,pageContext:r.a.shape({section:r.a.string.isRequired,tagName:r.a.string.isRequired,tagURL:r.a.string.isRequired,tagDescription:r.a.string,tagMetaDescription:r.a.string,tagMetaTitle:r.a.string,tagImage:r.a.string}).isRequired},t.default=c;var h="1771976733"},179:function(e,t,a){"use strict";var i=a(0),n=a.n(i),s=a(1),r=a.n(s),l=a(178),o=a.n(l),g=(a(176),a(173)),m=a.n(g),u=a(175),c=a.n(u),h=a(183),p=(a(187),function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+c.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=c.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+c.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}});p.defaultProps={fetchAuthorData:!1},p.PropTypes={primaryAuthor:r.a.shape({name:r.a.string.isRequired,profile_image:r.a.string,website:r.a.string,twitter:r.a.string,facebook:r.a.string}).isRequired,fetchAuthorData:r.a.bool.isRequired};var d=p,b=function(e){var t=e.image;return n.a.createElement(m.a,null,n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:image",content:t}),n.a.createElement("meta",{property:"og:image",content:t}),n.a.createElement("meta",{property:"og:image:width",content:"1000"}),n.a.createElement("meta",{property:"og:image:height",content:"523"}))};b.propTypes={image:r.a.string.isRequired};var y=b,f=function(e){var t=e.data,a=e.canonical,i=e.fetchAuthorData,s=e.title,r=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,g=t.site.siteMetadata,u=d(o.primary_author,i),p=c.a.map(Object(h.a)(o,{visibility:"public",fn:function(e){return e}}),"name"),b=p[0]||{name:"General",slug:"general"},f=r&&o.feature_image?o.feature_image:l;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,o.meta_title||s||o.title),n.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),n.a.createElement("link",{rel:"canonical",href:a}),n.a.createElement("meta",{property:"og:site_name",content:g.title}),n.a.createElement("meta",{property:"og:type",content:"article"}),n.a.createElement("meta",{property:"og:title",content:o.og_title||s||o.meta_title||o.title}),n.a.createElement("meta",{property:"og:description",content:o.og_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{property:"og:url",content:a}),n.a.createElement("meta",{property:"article:published_time",content:o.published_at}),n.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),p.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}),n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||s||o.meta_title||o.title}),n.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{name:"twitter:url",content:a}),n.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),n.a.createElement("meta",{name:"twitter:data1",content:u.name}),n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),n.a.createElement("meta",{name:"twitter:data2",content:b}),n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+u.name+'",\n                            '+(u.image?u.sameAsArray?'"image": "'+u.image+'",':'"image": "'+u.image+'"':"")+"\n                            "+(u.sameAsArray?'"sameAs": '+u.sameAsArray:"")+"\n                        },\n                        "+(p.length?'"keywords": "'+c.a.join(p,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||s||o.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+f+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+g.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(y,{image:f}))};f.defaultProps={fetchAuthorData:!1},f.propTypes={data:r.a.shape({ghostPost:r.a.shape({title:r.a.string.isRequired,published_at:r.a.string.isRequired,updated_at:r.a.string.isRequired,excerpt:r.a.string.isRequired,meta_title:r.a.string,meta_description:r.a.string,primary_author:r.a.object.isRequired,feature_image:r.a.string,tags:r.a.arrayOf(r.a.shape({name:r.a.string,slug:r.a.string,visibility:r.a.string})),primaryTag:r.a.shape({name:r.a.string}),og_title:r.a.string,og_description:r.a.string,twitter_title:r.a.string,twitter_description:r.a.string}).isRequired,site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:r.a.string.isRequired,image:r.a.string.isRequired,fetchAuthorData:r.a.bool,title:r.a.string,overwriteDefaultImage:r.a.bool};var q=f,v=function(e){var t=e.data,a=e.canonical,i=t.markdownRemark,s=i.frontmatter,r=t.site.siteMetadata,l=s.date?new Date(s.date).toISOString():new Date("2018-10-15").toISOString(),o=s.keywords&&s.keywords.length?s.keywords[0]:null,g=U();return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,s.meta_title||s.title),n.a.createElement("meta",{name:"description",content:s.meta_description||i.excerpt}),n.a.createElement("link",{rel:"canonical",href:a}),n.a.createElement("meta",{property:"og:site_name",content:r.title}),n.a.createElement("meta",{property:"og:type",content:"article"}),n.a.createElement("meta",{property:"og:title",content:s.meta_title||s.title}),n.a.createElement("meta",{property:"og:description",content:s.meta_description||i.excerpt}),n.a.createElement("meta",{property:"og:url",content:a}),n.a.createElement("meta",{property:"article:published_time",content:l}),s.keywords&&s.keywords.length?s.keywords.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:s.meta_title||s.title}),n.a.createElement("meta",{name:"twitter:description",content:s.meta_description||i.excerpt}),n.a.createElement("meta",{name:"twitter:url",content:a}),n.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),n.a.createElement("meta",{name:"twitter:data1",content:i.timeToRead+" min read"}),o?n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?n.a.createElement("meta",{name:"twitter:data2",content:o}):null,n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(s.keywords&&s.keywords.length?'"keywords": "'+c.a.join(s.keywords,", ")+'",':"")+'\n                        "headline": "'+(s.meta_title||s.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+g+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(s.meta_description||i.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+r.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(y,{image:g}))};v.propTypes={data:r.a.shape({markdownRemark:r.a.shape({frontmatter:r.a.shape({title:r.a.string.isRequired,keywords:r.a.arrayOf(r.a.string),meta_title:r.a.string,meta_description:r.a.string,date:r.a.string}).isRequired,excerpt:r.a.string.isRequired,timeToRead:r.a.number}).isRequired,site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:r.a.string.isRequired};var E=v,w=function(e){var t=e.data,a=e.canonical,i=e.title,s=e.description,r=e.image,l=e.type;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,i),n.a.createElement("meta",{name:"description",content:s}),n.a.createElement("link",{rel:"canonical",href:a}),n.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:i}),n.a.createElement("meta",{property:"og:description",content:s}),n.a.createElement("meta",{property:"og:url",content:a}),n.a.createElement("meta",{name:"twitter:title",content:i}),n.a.createElement("meta",{name:"twitter:description",content:s}),n.a.createElement("meta",{name:"twitter:url",content:a}),n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+r+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+s+'"\n                    }\n                ')),n.a.createElement(y,{image:r}))};w.propTypes={data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired,image:r.a.string.isRequired,type:r.a.oneOf(["website","series"]).isRequired};var R=w,G=function(e){var t=e.data,a=e.type,i=e.title,s=e.description,r=e.image,l=e.fetchAuthorData,g=e.overwriteDefaultImage,m=e.location,u=t||{},c=u.ghostPost,h=u.markdownRemark,p=t.site.siteMetadata,d=o.a.resolve(p.siteUrl,m.pathname,"/");if("article"===a){if(c)return n.a.createElement(q,{data:t,canonical:d,fetchAuthorData:l,title:i,image:r,overwriteDefaultImage:g});if(h)return n.a.createElement(E,{data:t,canonical:d})}else if("website"===a||"series"===a)return n.a.createElement(R,{data:t,canonical:d,title:i,description:s,image:r,type:a});return null};G.propTypes={data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired,ghostPost:r.a.object,markdownRemark:r.a.object}).isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired,type:r.a.oneOf(["website","series","article"]).isRequired,title:r.a.string,description:r.a.string,image:r.a.string,fetchAuthorData:r.a.bool,overwriteDefaultImage:r.a.bool};var k=G,_="http://ghost.local:8000",P={faq:o.a.resolve(_,"/images/meta/Ghost-FAQ.jpg"),integrations:o.a.resolve(_,"/images/meta/Ghost-Integrations.jpg"),tutorials:o.a.resolve(_,"/images/meta/Ghost-Tutorials.jpg"),default:o.a.resolve(_,"/images/meta/Ghost-Docs.jpg")},A=function(e){return P[e=e||"default"]};A.proptypes={section:r.a.string.isRequired};var U=A;a.d(t,"a",function(){return k}),a.d(t,"b",function(){return U})},334:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(185);var i=a(1),n=a.n(i),s=a(175),r=a.n(s),l=a(183),o=function(e,t){var a=[];return t=/^(?:\/?)([a-zA-Z\d-]*)(?:\/?)/i.exec(t)[1],r.a.forEach(e,function(e){var t=e.node,i=Object(l.a)(t,{visibility:"public",fn:function(e){return e}});a.push(i)}),a=r.a.flattenDeep(a),r.a.map(a,function(e){e.link=t?"/"+t+"/"+e.slug+"/":"/"+e.slug+"/"}),r.a.sortedUniqBy(r.a.sortBy(r.a.flattenDeep(a),"name"),"name")};o.proptypes={posts:n.a.arrayOf(n.a.shape({node:n.a.shape({tags:n.a.arrayOf(n.a.shape({name:n.a.string.isRequired,slug:n.a.string.isRequired})).isRequired}).isRequired})).isRequired,linkPrefix:n.a.string}},428:function(e){e.exports={data:{allGhostPost:{edges:[{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"General",slug:"general",visibility:"public"},{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}}]}}}},431:function(e,t,a){"use strict";a(180);var i=a(0),n=a.n(i),s=a(1),r=a.n(s),l=a(56),o=a(174),g=function(e){var t=e.post,a=e.section,i=e.title,s=e.children,r=e.to,g=e.className,m=t?"/"+a+"/"+t.slug+"/":r;i=t?t.title:i;var u=t?t.excerpt.length>200?t.excerpt.substring(0,200)+"...":t.excerpt:s;return n.a.createElement(l.Link,{to:m,className:g},n.a.createElement("h4",{to:m,className:o.a.excerpt+" link darkgrey fw5"},i," »"),u&&n.a.createElement("p",{className:o.a.small+" ma0 f8 lh-copy middarkgrey mb6"},u))};g.defaultProps={className:"f5 db tdn mb6 faq-question bb b--whitegrey",section:"faq"},g.propTypes={post:r.a.shape({title:r.a.string,slug:r.a.string,excerpt:r.a.string}),section:r.a.string.isRequired,title:r.a.string,children:r.a.node,to:r.a.string,className:r.a.string};var m=g,u=(a(26),a(176),a(185),a(428)),c=a(334),h=function(e){var t=e.data,a=e.location,i=Object(c.a)(t.allGhostPost.edges,"faq");return i.unshift({name:"All",slug:"all",link:"/faq/"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:o.a.h5+" midgrey"},"FAQ topics"),n.a.createElement("div",{className:"mt4"},i.map(function(e,t){var i=a.pathname===e.link?"bg-faq-color white fw5":"bg-whitegrey middarkgrey hover-bg-lightgrey-l2";return n.a.createElement(l.Link,{to:e.link,className:i+" dib pa2 pl3 pr3 br3 mb3 mr3 f8 link",key:t,"data-cy":e.slug+"-filter"},e.name)})))};h.propTypes={location:r.a.object.isRequired,data:r.a.shape({allGhostPost:r.a.shape({edges:r.a.arrayOf(r.a.shape({post:r.a.shape({tag:r.a.arrayOf(r.a.shape({name:r.a.string,slug:r.a.string}))})}).isRequired).isRequired}).isRequired}).isRequired};var p=function(e){return n.a.createElement(l.StaticQuery,{query:"4095130143",render:function(t){return n.a.createElement(h,Object.assign({data:t},e))},data:u})};a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p})}}]);
//# sourceMappingURL=component---src-templates-ghost-faq-archive-js-cba92e4cfe7c78829e41.js.map