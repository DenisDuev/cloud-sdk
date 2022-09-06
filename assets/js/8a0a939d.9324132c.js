"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),v=r,f=p["".concat(s,".").concat(v)]||p[v]||u[v]||n;return a?o.createElement(f,i(i({ref:t},d),{},{components:a})):o.createElement(f,i({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));const n={id:"video-tutorial-about-calling-odata-v4-services-via-type-safe-client",title:"Video Tutorial: Use the Type-Safe OData v4 Client",sidebar_label:"Use OData v4 Client",description:"You will learn how to make calls to OData v4 services in a fluent and type-safe way by leveraging type-safe client provided by sap cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},i=void 0,l={unversionedId:"video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",id:"video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",title:"Video Tutorial: Use the Type-Safe OData v4 Client",description:"You will learn how to make calls to OData v4 services in a fluent and type-safe way by leveraging type-safe client provided by sap cloud SDK for Java.",source:"@site/docs-java/video/use-odata-v4-client.mdx",sourceDirName:"video",slug:"/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",draft:!1,tags:[],version:"current",frontMatter:{id:"video-tutorial-about-calling-odata-v4-services-via-type-safe-client",title:"Video Tutorial: Use the Type-Safe OData v4 Client",sidebar_label:"Use OData v4 Client",description:"You will learn how to make calls to OData v4 services in a fluent and type-safe way by leveraging type-safe client provided by sap cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Destinations and Cloud Connector",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java"},next:{title:"Troubleshooting",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems"}},s={},c=[{value:"Looking for More?",id:"looking-for-more",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let us imaging you're building an app in the SAP Business Technology Platform.\nYour app calls OData v4 APIs from one or many SAP services exposed by SAP S/4HANA, SAP SuccessFactors, SAP Cloud for Customer, and others.\nOData v4 is a complex protocol based on REST that has a pretty steep learning curve.\nEvery service is unique and can choose what API features to expose.\nYou can shorten your path to success by leveraging a type-safe OData v4 client from the SAP Cloud SDK for Java and discover available APIs directly from your IDE."),(0,r.kt)("p",null,"To simplify it, we recorded this Community Call session about using a type-safe client for Java.\nEnjoy the hands-on experience delivered by SAP Cloud SDK developers!"),(0,r.kt)("div",{class:"sdk-video-container"},(0,r.kt)("iframe",{class:"sdk-video",src:"https://youtube.com/embed/p_JTapzii_I?start=937",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"looking-for-more"},"Looking for More?"),(0,r.kt)("p",null,"Check out our ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"},"docs for OData v4 client"),"."))}u.isMDXComponent=!0}}]);