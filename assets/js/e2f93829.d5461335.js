"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"features/odata/common/query-parameter/filter-functions",id:"features/odata/common/query-parameter/filter-functions",title:"filter-functions",description:"There are predefined filter functions e.g. length(), substring(), substringOf() in the core library, that allow for a wide range of filter expressions:",source:"@site/docs-js/features/odata/common/query-parameter/filter-functions.mdx",sourceDirName:"features/odata/common/query-parameter",slug:"/features/odata/common/query-parameter/filter-functions",permalink:"/cloud-sdk/docs/js/v3/features/odata/common/query-parameter/filter-functions",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/query-parameter/filter-functions.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are predefined filter functions e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"length()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"substring()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"substringOf()")," in the core library, that allow for a wide range of filter expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\nFetch all business partners who have a first name shorter than 5 letters\n*/\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .filter(length(businessPartnerApi.schema.FIRST_NAME).lessThan(5))\n  .execute(destination);\n")),(0,a.kt)("p",null,"Filter functions with return type ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," can be used directly as a filter without ",(0,a.kt)("inlineCode",{parentName:"p"},"equal(true)"),".\nLogically, the two following examples are equivalent to each other:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  $filter=startswith(FirstName, 'Bob') eq true\n*/\n.filter(\n  startsWith(businessPartnerApi.schema.FIRST_NAME, 'Bob').equal(true)\n)\n")),(0,a.kt)("p",null,"The filter expression can be shortened:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  /*\n    $filter=startswith(FirstName, 'Bob')\n  */\n  .filter(\n    startsWith(businessPartnerApi.schema.FIRST_NAME, 'Bob')\n  )\n")),(0,a.kt)("p",null,"However, as some services might not support both versions shown above, you might have to choose one of them to fit the target system."))}p.isMDXComponent=!0}}]);