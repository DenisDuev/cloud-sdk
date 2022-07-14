"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2642],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"overview",title:"Overview",sidebar_label:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi","JavaScript","TypeScript","OpenAPI"]},s=void 0,l={unversionedId:"js/features/openapi/overview",id:"js/features/openapi/overview",title:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",source:"@site/docs/js/features/openapi/overview.mdx",sourceDirName:"js/features/openapi",slug:"/js/features/openapi/overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1657784648,formattedLastUpdatedAt:"Jul 14, 2022",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",description:"Client generators for OpenAPI services for TypeScript and JavaScript",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi","JavaScript","TypeScript","OpenAPI"]},sidebar:"someSidebar",previous:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"},next:{title:"Generate an OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"}},c={},u=[{value:"OpenAPI &amp; the SAP Cloud SDK",id:"openapi--the-sap-cloud-sdk",level:2},{value:"OpenAPI Code Generator",id:"openapi-code-generator",level:3},{value:"Pregenerated OpenAPI Type-safe Client Libraries",id:"pregenerated-openapi-type-safe-client-libraries",level:3},{value:"Why the SAP Cloud SDK for JavaScript for OpenAPI Services?",id:"why-the-sap-cloud-sdk-for-javascript-for-openapi-services",level:2},{value:"Feedback &amp; Support",id:"feedback--support",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"openapi--the-sap-cloud-sdk"},"OpenAPI & the SAP Cloud SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," standard is a popular format to define RESTful APIs.\nTogether with ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/overview"},"OData")," OpenAPI is one of the key API definition formats used at SAP.\nThe SAP Cloud SDK provides convenient tooling to make the consumption of OpenAPI services easy and convenient on SAP Business Technology Platform."),(0,o.kt)("h3",{id:"openapi-code-generator"},"OpenAPI Code Generator"),(0,o.kt)("p",null,"We developed an ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},"OpenAPI code generator")," from the ground up.\nIt's a ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client#options-of-the-openapi-cli"},"command line tool (CLI)")," capable of converting any OpenAPI specification into a TypeScript or JavaScript type-safe client library that is seamlessly integrated with other SAP Cloud SDK features like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"connectivity")),(0,o.kt)("li",{parentName:"ul"},"multi-tenancy"),(0,o.kt)("li",{parentName:"ul"},"authentication"),(0,o.kt)("li",{parentName:"ul"},"destinations"),(0,o.kt)("li",{parentName:"ul"},"and other abstractions of the SAP Business Technology Platform.")),(0,o.kt)("p",null,"We support both OpenAPI versions ",(0,o.kt)("strong",{parentName:"p"},"2.0")," and ",(0,o.kt)("strong",{parentName:"p"},"3.0"),".\nYou can use the OpenAPI generator to create a client library for any OpenAPI-based API service available on the ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub")," or found elsewhere in the Internet.\nIf you encounter any problems or errors with OpenAPI tooling give us feedback via our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels"),"."),(0,o.kt)("h3",{id:"pregenerated-openapi-type-safe-client-libraries"},"Pregenerated OpenAPI Type-safe Client Libraries"),(0,o.kt)("p",null,"We're collaborating with service publishers at SAP to certify and release type-safe OpenAPI client libraries for their services on npm.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/pregenerated-clients/workflow"},"SAP Workflow service")," is a good example of such collaboration.\nStay tuned for more certified services.\nStay tuned for more OpenAPI client libraries certified by the SAP Cloud SDK or create a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues"},"request")," for the specific service you're interested in."),(0,o.kt)("admonition",{title:"generate a client library yourself",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can always ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},"generate an OpenAPI client library yourself")," based on API specifications available on the ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub")," or found elsewhere.")),(0,o.kt)("h2",{id:"why-the-sap-cloud-sdk-for-javascript-for-openapi-services"},"Why the SAP Cloud SDK for JavaScript for OpenAPI Services?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You'll benefit from less code boilerplate and better developer experience."),(0,o.kt)("li",{parentName:"ul"},"We take care of various complexities around the development of applications and extensions on the SAP Business Technology Platform."),(0,o.kt)("li",{parentName:"ul"},"You'll get convenient abstractions for",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Destinations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Service bindings")),(0,o.kt)("li",{parentName:"ul"},"automated ",(0,o.kt)("inlineCode",{parentName:"li"},"CSRF")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ETag")," tokens handling"),(0,o.kt)("li",{parentName:"ul"},"automated management of HTTP Headers"),(0,o.kt)("li",{parentName:"ul"},"and much more"))),(0,o.kt)("li",{parentName:"ul"},"We hide the complexities of cloud development making many tasks easier for developers."),(0,o.kt)("li",{parentName:"ul"},"You're getting best in class ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"support from the SAP Cloud SDK")," development team."),(0,o.kt)("li",{parentName:"ul"},"We take care of change management by continuously updating, integrating, and shipping the latest version of services that we release."),(0,o.kt)("li",{parentName:"ul"},"Our documentation is written by developers for developers.\nWe keep it relevant and up to date.")),(0,o.kt)("h2",{id:"feedback--support"},"Feedback & Support"),(0,o.kt)("p",null,"We are happy to hear from you via internal communication channels or our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"GitHub repository"),"."))}f.isMDXComponent=!0}}]);