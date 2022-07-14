"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4317],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77801:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"enterprise-messaging",title:"Enterprise Messaging",sidebar_label:"Enterprise Messaging",description:"We demonstrate how to leverage a newly provided events and messaging library developed by Cloud Application Programming colleagues in the context of SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c=void 0,l={unversionedId:"java/features/enterprise-messaging/enterprise-messaging",id:"java/features/enterprise-messaging/enterprise-messaging",title:"Enterprise Messaging",description:"We demonstrate how to leverage a newly provided events and messaging library developed by Cloud Application Programming colleagues in the context of SAP Cloud SDK for Java.",source:"@site/docs/java/features/enterprise-messaging/overview.mdx",sourceDirName:"java/features/enterprise-messaging",slug:"/java/features/enterprise-messaging/enterprise-messaging",permalink:"/cloud-sdk/docs/java/features/enterprise-messaging/enterprise-messaging",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/enterprise-messaging/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1657784648,formattedLastUpdatedAt:"Jul 14, 2022",frontMatter:{id:"enterprise-messaging",title:"Enterprise Messaging",sidebar_label:"Enterprise Messaging",description:"We demonstrate how to leverage a newly provided events and messaging library developed by Cloud Application Programming colleagues in the context of SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]}},p={},u=[],d={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The current approach of Enterprise Messaging in the SAP Cloud SDK for Java relies on a library developed by SAP Cloud Application Model.\nFollow the official documentation on the ",(0,o.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/java/"},"CAP Messaging API for Event Consumption")," for further reference."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The type-safe client for SAP S/4HANA Enterprise Messaging from SAP Cloud SDK for Java is deprecated.\nFrom now on the library from CAP is a default way for message consumption.")))}f.isMDXComponent=!0}}]);