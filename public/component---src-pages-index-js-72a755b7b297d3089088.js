(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(56),s=a(1),o=a.n(s),l=a(175),m=a(181),c=a(186),p=a(172),d=(a(178),function(e){var t=e.to,a=e.title,n=e.color,s=e.icon,o=e.children;return i.a.createElement(r.Link,{to:t,className:"col-12 col-4-ns pa5 pa8-ns pa10-l pt8-l flex flex-column-ns items-start tdn content-stretch home-main-box-shadow db br4 bg-white"},i.a.createElement(l.b,{name:s,className:"w10 h-auto w12-ns stroke-w--1-5 mr3 mb2 stroke-"+n}),i.a.createElement("div",{className:"flex flex-column justify-between flex-auto"},i.a.createElement("div",null,i.a.createElement("h2",{className:p.a.h4+" mt0 mt2-ns darkgrey flex-shrink-1"},a),i.a.createElement("p",{className:p.a.small+" midgrey"},o)),i.a.createElement("span",{className:n+" dib mt2 link fw5 f7 f5-ns flex items-center"},"Learn more",i.a.createElement(l.b,{name:"arrow-right",className:"w3 h3 ml2 fill-"+n}))))});d.propTypes={to:o.a.string.isRequired,title:o.a.string.isRequired,color:o.a.string.isRequired,icon:o.a.string.isRequired,children:o.a.node.isRequired};var g=d,u=function(){return i.a.createElement("div",{className:"gh-bg-home bb b--whitegrey"},i.a.createElement("header",{className:"top-0 left-0 right-0 z-9999"},i.a.createElement(l.d,{theme:"light"})),i.a.createElement("div",{className:p.a.page.xl+" pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex flex-column items-center bt bn-ns b--white-10"},i.a.createElement("h1",{className:"ma0 pa0 f2 f1-ns f-headline-l white header-heading-shadow"},"Ghost Documentation"),i.a.createElement(c.a,{isHome:!0}),i.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-36-ns mt10 mt20-ns mt25-l miw-100 miw-auto-ns home-main-box-margin-ns z-999"},i.a.createElement(g,{to:"/concepts/introduction/",title:"Core Concepts",icon:"blocks",color:"purple"},"Understand the fundamentals of Ghost development."),i.a.createElement(g,{to:"/setup/",title:"Setup Guide",icon:"rocket",color:"blue"},"Setting up a Ghost site on a server or locally."),i.a.createElement(g,{to:"/tutorials/",title:"Tutorials",icon:"typing",color:"tutorial-green"},"Browse tutorials for most common setup and development use-cases."))))},h=function(e){var t=e.to,a=e.icon,n=e.title,s=e.children;return i.a.createElement(r.Link,{to:t,className:"flex items-start pa4 pa7-ns tdn bb b--whitegrey justify-between mih-10 flex-auto api-box"},i.a.createElement("span",{className:"dib mr3 mt3 miw10 tc"},i.a.createElement(l.b,{name:a,className:"stroke-middarkgrey-l2"})),i.a.createElement("div",{className:"flex-auto"},i.a.createElement("h4",{className:p.a.h5+" darkgrey mt2 mt0-l"},n),i.a.createElement("p",{className:p.a.small+" midgrey"},s)))};h.propTypes={to:o.a.string.isRequired,title:o.a.string.isRequired,icon:o.a.string.isRequired,children:o.a.node.isRequired};var f=h,y=function(e){var t=e.to,a=e.title,n=e.children;return i.a.createElement(r.Link,{to:t,className:"midgrey home-faq-question link dib pt1 pb5"},i.a.createElement("h4",{className:p.a.h5+" blue dib"},a," »"),i.a.createElement("p",{className:p.a.small+" mt0"},n))};y.propTypes={to:o.a.string.isRequired,title:o.a.string.isRequired,children:o.a.node.isRequired};var w=y,E=a(177);a.d(t,"pageQuery",function(){return q});var b=function(e){var t=e.data,a=e.location,n=Object(E.b)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{data:t,location:a,type:"website",title:"Ghost Docs",description:"Get familiar with Ghost - the open source professional publishing platform.  Install guides, tutorials, API docs and FAQs.",image:n}),i.a.createElement(m.a,{headerDividerStyle:"shadow",bodyClass:"bg-white",mainClass:"bg-whitegrey-l2 pb-vw6 pb-vw3-ns",header:i.a.createElement(u,null)},i.a.createElement("div",{className:"pt-vw3 home-main-box-padding-ns"},i.a.createElement("div",{className:p.a.page.xl+" grid-12 gutter-row-20 gutter-40-ns"},i.a.createElement("section",{className:"col-12 col-6-ns flex flex-column justify-between mt4 mt0-ns"},i.a.createElement(r.Link,{to:"/api/",className:p.a.h3+" link darkgrey hover-midgrey flex-grow-0"},"API Reference"),i.a.createElement(l.a,{className:"mt5 tdn flex-auto flex flex-column items-stretch",elevation:"1"},i.a.createElement(f,{to:"/api/#frontend-sdk",title:"Frontend SDKs",icon:"sdks"},"Frameworks for working with the Ghost API to build a publication website"),i.a.createElement(f,{to:"/api/#rest-api",title:"Rest API",icon:"rest-api"},"A full reference of API Endpoints"),i.a.createElement(f,{to:"/api/#tools",title:"Tools",icon:"tools"},"Utilities to help build and manage Ghost"))),i.a.createElement("section",{className:"col-12 col-6-ns mt0-ns bt bn-ns b--whitegrey nl5 nr5 nl0-ns nr0-ns ml0-ns mr0-ns pl5 pr5 pl0-ns pr0-ns pt5 pt0-ns "},i.a.createElement(r.Link,{to:"/faq/",className:p.a.h3+" link darkgrey hover-midgrey"},"FAQ"),i.a.createElement("div",{className:"mt3 mt7-ns"},i.a.createElement(w,{to:"/faq/upgrade-to-ghost-2-0/",title:"Upgrade to Ghost 2.0"},"Ghost 2.0 was released in September 2018 and the second major upgrade since the platform launched. Learn how to upgrade"),i.a.createElement(w,{to:"/faq/using-custom-domains/",title:"Using Custom Domains"},"Map any domain you own directly to your Ghost(Pro) publication and make your site more memorable!"),i.a.createElement(w,{to:"/faq/upgrading-from-deprecated-ghost-cli/",title:"Upgrading from deprecated Ghost CLI"},"If you are using a deprecated version and need to upgrade in order to upgrade or manage your Ghost site, some extra steps may be required."),i.a.createElement(r.Link,{to:"/faq/",className:p.a.p+" midgrey fw5 link hover-blue"},"More FAQ...")))),i.a.createElement("section",{className:p.a.page.xl+" col-12 mt8 mt-vw3-ns bt bn-ns b--whitegrey pt5 pt0-ns"},i.a.createElement(r.Link,{to:"/integrations/",className:p.a.h3+" link darkgrey hover-midgrey"},"Integrations"),i.a.createElement("p",{className:p.a.p+" mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns"},"All your favourite apps and tools, integrated with Ghost.",i.a.createElement(r.Link,{to:"/integrations/",className:"blue link din nb1 mt2 mt0-ns hover-underline-blue"},i.a.createElement("span",{className:"flex items-center fw5"},"Browse all integrations ",i.a.createElement(l.b,{name:"arrow-right",className:"w3 h3 ml1 fill-blue"})))),i.a.createElement("div",{className:"grid-integrations-index mt4 mt6-l f8"},i.a.createElement(l.a,{to:"/integrations/zapier/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},i.a.createElement("img",{className:"w10 mb1",src:"https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/zapier.png",alt:"Zapier"}),"Zapier"),i.a.createElement(l.a,{to:"/integrations/disqus/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},i.a.createElement("img",{className:"w10 mb1",src:"https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/disqus.svg",alt:"Disqus"}),"Disqus"),i.a.createElement(l.a,{to:"/integrations/slack/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},i.a.createElement("img",{className:"w10 mb1",src:"https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/slack.png",alt:"Slack"}),"Slack"),i.a.createElement(l.a,{to:"/integrations/unsplash/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},i.a.createElement("img",{className:"w10 mb1",src:"https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/unsplash.svg",alt:"Unsplash"}),"Unsplash"),i.a.createElement(l.a,{to:"/integrations/google/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},i.a.createElement("img",{className:"w10 mb1",src:"https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/google-analytics-1.png",alt:"Google Analytics"}),"Google Analytics"),i.a.createElement(l.a,{to:"/integrations/mailchimp/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},i.a.createElement("img",{className:"w10 mb1",src:"https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/mailchimp.png",alt:"Mailchimp"}),"Mailchimp"),i.a.createElement(l.a,{to:"/integrations/google-amp/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},i.a.createElement("img",{className:"w10 mb1",src:"https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/https://docs.ghost.io/content/images/2018/09/amp.jpg",alt:"Google AMP"}),"Google AMP"),i.a.createElement(l.a,{to:"/integrations/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn",elevation:"2",radius:"4"},i.a.createElement(l.b,{name:"more",className:"w8 nudge-top--6"}),"See More"))))))};b.propTypes={data:o.a.shape({site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired};t.default=b;var q="1531574144"},177:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),s=a.n(r),o=a(176),l=a.n(o),m=(a(174),a(171)),c=a.n(m),p=a(173),d=a.n(p),g=a(184),u=(a(188),function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}});u.defaultProps={fetchAuthorData:!1},u.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=u,f=function(e){var t=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:"1000"}),i.a.createElement("meta",{property:"og:image:height",content:"523"}))};f.propTypes={image:s.a.string.isRequired};var y=f,w=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,o=e.image,l=t.ghostPost,m=t.site.siteMetadata,p=h(l.primary_author,n),u=d.a.map(Object(g.a)(l,{visibility:"public",fn:function(e){return e}}),"name"),f=u[0]||{name:"General",slug:"general"},w=s&&l.feature_image?l.feature_image:o;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,l.meta_title||r||l.title),i.a.createElement("meta",{name:"description",content:l.meta_description||l.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:m.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:l.og_title||r||l.meta_title||l.title}),i.a.createElement("meta",{property:"og:description",content:l.og_description||l.excerpt||l.meta_description}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:l.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:l.updated_at}),u.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:l.twitter_title||r||l.meta_title||l.title}),i.a.createElement("meta",{name:"twitter:description",content:l.twitter_description||l.excerpt||l.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:p.name}),i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),i.a.createElement("meta",{name:"twitter:data2",content:f}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(u.length?'"keywords": "'+d.a.join(u,", ")+'",':"")+'\n                        "headline": "'+(l.meta_title||r||l.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l.published_at+'",\n                        "dateModified": "'+l.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+w+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(l.meta_description||l.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:w}))};w.defaultProps={fetchAuthorData:!1},w.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var E=w,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,r=n.frontmatter,s=t.site.siteMetadata,o=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),l=r.keywords&&r.keywords.length?r.keywords[0]:null,m=j();return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||n.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:s.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:r.meta_title||r.title}),i.a.createElement("meta",{property:"og:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:o}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),l?i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,l?i.a.createElement("meta",{name:"twitter:data2",content:l}):null,i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+d.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:m}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var q=b,k=function(e){var t=e.data,a=e.canonical,n=e.title,r=e.description,s=e.image,o=e.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),i.a.createElement(y,{image:s}))};k.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var R=k,v=function(e){var t=e.data,a=e.type,n=e.title,r=e.description,s=e.image,o=e.fetchAuthorData,m=e.overwriteDefaultImage,c=e.location,p=t||{},d=p.ghostPost,g=p.markdownRemark,u=t.site.siteMetadata,h=l.a.resolve(u.siteUrl,c.pathname,"/");if("article"===a){if(d)return i.a.createElement(E,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:m});if(g)return i.a.createElement(q,{data:t,canonical:h})}else if("website"===a||"series"===a)return i.a.createElement(R,{data:t,canonical:h,title:n,description:r,image:s,type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var _=v,x="http://ghost.local:8000",N={faq:l.a.resolve(x,"/images/meta/Ghost-FAQ.jpg"),integrations:l.a.resolve(x,"/images/meta/Ghost-Integrations.jpg"),tutorials:l.a.resolve(x,"/images/meta/Ghost-Tutorials.jpg"),default:l.a.resolve(x,"/images/meta/Ghost-Docs.jpg")},A=function(e){return N[e=e||"default"]};A.proptypes={section:s.a.string.isRequired};var j=A;a.d(t,"a",function(){return _}),a.d(t,"b",function(){return j})}}]);
//# sourceMappingURL=component---src-pages-index-js-72a755b7b297d3089088.js.map