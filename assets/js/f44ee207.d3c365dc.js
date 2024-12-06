"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[77662],{52044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"release-policy","title":"Minor and Major Release Policy for the SAP Cloud SDK for Java","description":"Planned Major Releases","source":"@site/docs-java/release-policy.mdx","sourceDirName":".","slug":"/release-policy","permalink":"/cloud-sdk/docs/java/release-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/release-policy.mdx","tags":[],"version":"current","frontMatter":{"id":"release-policy","title":"Minor and Major Release Policy for the SAP Cloud SDK for Java","sidebar_label":"Release Policy","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},"sidebar":"docsJavaSidebar","previous":{"title":"Troubleshooting","permalink":"/cloud-sdk/docs/java/troubleshooting-frequent-problems"},"next":{"title":"Release Notes","permalink":"/cloud-sdk/docs/java/release-notes"}}');var a=n(74848),s=n(28453);n(11470),n(19365);const l={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},o=void 0,i={},d=[{value:"Planned Major Releases",id:"planned-major-releases",level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",level:2},{value:"Minor Release Schedule",id:"minor-release-schedule",level:3},{value:"Major Release Schedule",id:"major-release-schedule",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Maintenance and Support",id:"maintenance-and-support",level:3},{value:"Support and Feedback",id:"support-and-feedback",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"planned-major-releases",children:"Planned Major Releases"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Version"}),(0,a.jsx)(t.th,{children:"Status"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Release Date"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"End of Life"}),(0,a.jsx)(t.th,{children:"Upgrade guide"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"1.x"}),(0,a.jsx)(t.td,{children:"Deprecated"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2017, Sept"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2018, May"}),(0,a.jsx)(t.td,{children:"N/A"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2.x"}),(0,a.jsx)(t.td,{children:"Deprecated"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2018, May"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2020, February"}),(0,a.jsx)(t.td,{children:"N/A"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"3.x"}),(0,a.jsx)(t.td,{children:"Deprecated"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2019, August"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2023, March"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://developers.sap.com/tutorials/s4sdk-migration-v3.html",children:"Link"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"4.x"}),(0,a.jsx)(t.td,{children:"Deprecated"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2022, October"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2024, May 31"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/java/v4/guides/4.0-upgrade",children:"Link"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"5.x"}),(0,a.jsx)(t.td,{children:"Released GA"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"2023, December"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/java/guides/5.0-upgrade-steps",children:"Link"})})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"minor-and-major-release-policy",children:"Minor and Major Release Policy"}),"\n",(0,a.jsxs)(t.p,{children:["We follow ",(0,a.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"})," for our releases."]}),"\n",(0,a.jsx)(t.h3,{id:"minor-release-schedule",children:"Minor Release Schedule"}),"\n",(0,a.jsxs)(t.p,{children:["Our regular ",(0,a.jsx)(t.strong,{children:"minor version"})," release happens every ",(0,a.jsx)(t.strong,{children:"two weeks"}),".\nIt includes new functionality, fixes, and maintenance updates that we communicate in the ",(0,a.jsx)(t.a,{href:"/cloud-sdk/docs/java/release-notes",children:"release notes"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"We sometimes change our release frequency to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Provide a patch version to the latest minor release when a critical bug fix is necessary."}),"\n",(0,a.jsxs)(t.li,{children:["Accommodate a longer development cycle.\nWe can extend an interval between ",(0,a.jsx)(t.strong,{children:"minor version"})," releases."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"Upgrading between minor releases",type:"tip",children:(0,a.jsx)(t.p,{children:"Usually, an upgrade between minor releases does not involve any effort.\nAll the changes are incremental and backward compatible.\nWe do not remove any deprecated code before the next major release."})}),"\n",(0,a.jsx)(t.h3,{id:"major-release-schedule",children:"Major Release Schedule"}),"\n",(0,a.jsxs)(t.p,{children:["We intend to release a new ",(0,a.jsx)(t.strong,{children:"major version"})," every ",(0,a.jsx)(t.strong,{children:"12 months"})," to introduce significant feature upgrades, refactor existing features, and clean up deprecated code."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Major version"})," release intervals are indicative and may change."]}),"\n",(0,a.jsx)(t.li,{children:"After release of a new major version, the preceding version will be moved into maintenance mode before being marked as deprecated.\nIn maintenance mode, the version will still receive vulnerability fixes and major bug fixes.\nThe duration for which we grant support highly depends customer demand."}),"\n",(0,a.jsxs)(t.li,{children:["We will announce planned date and scope of the next ",(0,a.jsx)(t.strong,{children:"major version"})," release in this ",(0,a.jsx)(t.a,{href:"#planned-major-release-schedule",children:"document"})," and ",(0,a.jsx)(t.a,{href:"/cloud-sdk/docs/java/release-notes",children:"release notes"})," at least 3 months before the planned release date."]}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"Upgrading between major versions",type:"caution",children:[(0,a.jsx)(t.p,{children:"Major releases include incompatible API changes.\nAn upgrade will usually involve a certain effort to make your code benefit from new APIs.\nWe intend to minimize this effort between adjacent major versions."}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"We provide a step-by-step upgrade guide for each major version."}),"\n",(0,a.jsx)(t.li,{children:"Following the upgrade steps should take less than a day of development effort regardless of the project size."}),"\n"]})]}),"\n",(0,a.jsx)(t.h3,{id:"documentation",children:"Documentation"}),"\n",(0,a.jsxs)(t.p,{children:["The documentation is always up to date with the ",(0,a.jsx)(t.strong,{children:"latest major release"}),".\nWe provide documentation for the two most recent major versions at the same time.\nUse the versioning toggle in the top right corner to switch between versions of the documentation."]}),"\n",(0,a.jsx)(t.h3,{id:"maintenance-and-support",children:"Maintenance and Support"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["We provide new features and fixes ",(0,a.jsx)(t.strong,{children:"only"})," for the ",(0,a.jsx)(t.strong,{children:"latest major release"})," of the SAP Cloud SDK for Java."]}),"\n",(0,a.jsxs)(t.li,{children:["We continue to ",(0,a.jsx)(t.a,{href:"/docs/overview/get-support",children:"support"})," customers using any version of the SAP Cloud SDK for Java.\nIn case the identified solution resides in upgrading to the newer version of the SAP Cloud SDK - it will be the default recommended solution."]}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"Upgrade regularly",type:"tip",children:[(0,a.jsx)(t.p,{children:"We recommend upgrading to the latest major version immediately or at least not later than within 3 months after its release.\nThis guarantees:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"easy upgrade path"}),"\n",(0,a.jsx)(t.li,{children:"compatibility to the latest features of SAP Business Technology Platform"}),"\n",(0,a.jsx)(t.li,{children:"protection of your development process from disruptions in the future.\nUpgrading gets more complex if you have to migrate between more than one major version."}),"\n"]})]}),"\n",(0,a.jsx)(t.h2,{id:"support-and-feedback",children:"Support and Feedback"}),"\n",(0,a.jsxs)(t.p,{children:["Let us know if you have any questions about our release policy.\nWe usually respond within one day.\nCheck our ",(0,a.jsx)(t.a,{href:"/docs/overview/get-support",children:"support channels"})," and choose the one working best for you."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),s=n(23104),l=n(56347),o=n(205),i=n(57485),d=n(31682),c=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:a}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(d(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(b,{...t,...e})]})}function w(e){const t=(0,j.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);