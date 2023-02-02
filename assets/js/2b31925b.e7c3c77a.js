"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"features/odata/v4/filter-one-to-many",id:"features/odata/v4/filter-one-to-many",title:"filter-one-to-many",description:"OData V4 introduces lambda operators e.g., any()/all() so that the root property of the one-to-many navigation properties can be filtered.",source:"@site/docs-js/features/odata/v4/filter-one-to-many.mdx",sourceDirName:"features/odata/v4",slug:"/features/odata/v4/filter-one-to-many",permalink:"/cloud-sdk/docs/js/v3/features/odata/v4/filter-one-to-many",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/v4/filter-one-to-many.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OData V4 introduces ",(0,a.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LambdaOperators"},"lambda operators")," e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"any()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"all()")," so that the root property of the one-to-many navigation properties can be filtered.\nBelow is an example that demonstrates how to use the lambda operator ",(0,a.kt)("inlineCode",{parentName:"p"},"any()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\nGet all people that have at least one friend that matches all of the following conditions:\n  - Has first name 'John'\n  - Has last name 'Miller'\n*/\n.filter(\n  peopleApi.schema.FRIENDS.filter(\n    any(\n      peopleApi.schema.FIRST_NAME.equals('John'),\n      peopleApi.schema.LAST_NAME.equals('Miller')\n    )\n  )\n)\n")),(0,a.kt)("p",null,"The generated ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter")," parameter of the URL will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=((Friends/any(a0:(a0/FirstName eq 'John' and a0/LastName eq 'Miller'))))\n")))}u.isMDXComponent=!0}}]);