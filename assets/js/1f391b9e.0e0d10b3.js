"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3085],{87529:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(67294),l=n(86010),i=n(63346),c=n(3905),s=n(54689),m=n(51575),r=n(29548),o="mdxPageWrapper_zHyg";var d=function(e){var a=e.content,n=a.metadata,d=n.title,u=n.description,v=n.permalink,f=n.frontMatter,N=f.wrapperClassName,_=f.hide_table_of_contents;return t.createElement(i.Z,{title:d,description:u,permalink:v,wrapperClassName:null!=N?N:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!_&&"col--8")},t.createElement(c.Zo,{components:s.Z},t.createElement(a,null))),!_&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(m.Z,{toc:a.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},51575:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(87462),l=n(63366),i=n(67294),c=n(86010),s=n(25002),m="tableOfContents_cNA8",r=["className"];var o=function(e){var a=e.className,n=(0,l.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(87462),l=n(63366),i=n(67294),c=n(29548),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,N=e.maxHeadingLevel,_=(0,l.Z)(e,s),g=(0,c.LU)(),k=null!=f?f:g.tableOfContents.minHeadingLevel,p=null!=N?N:g.tableOfContents.maxHeadingLevel,C=(0,c.DA)({toc:a,minHeadingLevel:k,maxHeadingLevel:p}),h=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:p}}),[d,v,k,p]);return(0,c.Si)(h),i.createElement(m,(0,t.Z)({toc:C,className:r,linkClassName:d},_))}}}]);