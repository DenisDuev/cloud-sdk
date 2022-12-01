"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5821,6147,8634,1275,654,9812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s=void 0,i={unversionedId:"features/common/custom-request-config-note",id:"features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:",source:"@site/docs-js/features/common/custom-request-config-note.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/v3/features/common/custom-request-config-note",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config-note.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")))))}d.isMDXComponent=!0},96147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s=void 0,i={unversionedId:"features/common/custom-request-config",id:"features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs-js/features/common/custom-request-config.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/v3/features/common/custom-request-config",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options including ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"headers"),", etc.\nYou can provide a custom request configuration to pass additional options to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."))}d.isMDXComponent=!0},24249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s=void 0,i={unversionedId:"features/common/execute-raw-overview",id:"features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute() method, you can execute a request using the executeRaw() method.",source:"@site/docs-js/features/common/execute-raw-overview.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/v3/features/common/execute-raw-overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-overview.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," method, you can execute a request using the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeRaw()")," method.\nIt returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponse")," instance, which contains the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status"),": the status code of the response"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers"),": the response headers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),": the response body"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request"),": the original request")))}d.isMDXComponent=!0},33518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s=void 0,i={unversionedId:"features/common/execute-raw-use-cases",id:"features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use the executeRaw() method are:",source:"@site/docs-js/features/common/execute-raw-use-cases.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/v3/features/common/execute-raw-use-cases",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-use-cases.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Typical cases, where you might need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeRaw()")," method are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,o.kt)("li",{parentName:"ul"},"You need additional information about the request, like payload, method, or request headers."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"execute()")," method is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,o.kt)("li",{parentName:"ul"},"Debugging purposes.")))}d.isMDXComponent=!0},25754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s=void 0,i={unversionedId:"features/common/skip-csrf-token",id:"features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-GET requests.",source:"@site/docs-js/features/common/skip-csrf-token.mdx",sourceDirName:"features/common",slug:"/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/v3/features/common/skip-csrf-token",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/skip-csrf-token.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For some services, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," requests.\nTherefore, skipping to fetch the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as a performance improvement.\nYou can disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," method like below:"))}d.isMDXComponent=!0},21398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var a=n(87462),o=(n(67294),n(3905)),r=(n(44996),n(41609));const s={id:"execute-request",title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},i=void 0,u={unversionedId:"features/openapi/execute-request",id:"features/openapi/execute-request",title:"Execute a Request Using a Generated OpenAPI Client",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",source:"@site/docs-js/features/openapi/execute-openapi-request.mdx",sourceDirName:"features/openapi",slug:"/features/openapi/execute-request",permalink:"/cloud-sdk/docs/js/v3/features/openapi/execute-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/openapi/execute-openapi-request.mdx",tags:[],version:"current",frontMatter:{id:"execute-request",title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Generate an OpenAPI Client",permalink:"/cloud-sdk/docs/js/v3/features/openapi/generate-client"},next:{title:"Send e-mails",permalink:"/cloud-sdk/docs/js/v3/features/mail-client/"}},c={},l=[{value:"Executing a Request",id:"executing-a-request",level:2},{value:"Passing Parameters",id:"passing-parameters",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Request Bodies",id:"request-bodies",level:4},{value:"Setting Custom Headers",id:"setting-custom-headers",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Setting a Custom Timeout",id:"setting-a-custom-timeout",level:3},{value:"Getting a Raw Response",id:"getting-a-raw-response",level:3},{value:"Skip CSRF Token Handling",id:"skip-csrf-token-handling",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=d("Tabs"),m=d("TabItem"),f={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The usage of the OpenAPI clients is similar to the clients for ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/execute-request"},"OData"),".\nThe OpenAPI clients consist of at least one API, which in turn has at least one function.\nWhat APIs and functions are available in a client depends on the service specification."),(0,o.kt)("h2",{id:"executing-a-request"},"Executing a Request"),(0,o.kt)("p",null,"The request execution always follows the same structure.\nYou invoke a function of an API, optionally configure your request and then execute it against a ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/connectivity/destinations"},"destination"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const responseData = await MyApi.myFunction().execute(destination);\n")),(0,o.kt)("p",null,"In the example above you invoke the function ",(0,o.kt)("inlineCode",{parentName:"p"},"myFunction()")," of the API ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi")," without further configuration and execute it against a destination named ",(0,o.kt)("inlineCode",{parentName:"p"},"destination"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," method returns the response data directly as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", if available.\nResponses without response body, result in the return type ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>"),"."),(0,o.kt)("p",null,"You can configure your request by ",(0,o.kt)("a",{parentName:"p",href:"#setting-custom-headers"},"setting custom headers"),", ",(0,o.kt)("a",{parentName:"p",href:"#setting-a-custom-request-configuration"},"a custom request configuration")," or ",(0,o.kt)("a",{parentName:"p",href:"#disabling-csrf-token-fetching"},"disabling CSRF token fetching"),".\nIf you need more information than the response data, you can also ",(0,o.kt)("a",{parentName:"p",href:"#getting-a-raw-response"},"get the raw response"),"."),(0,o.kt)("h3",{id:"passing-parameters"},"Passing Parameters"),(0,o.kt)("p",null,"Often, resources are accessible under paths that require path parameters and/or query parameters and write requests often send a request body to modify resources.\nThe clients generated by the SAP Cloud SDK OpenAPI generator require you to set the parameters that are mandatory and allow you to set those that are optional."),(0,o.kt)("h4",{id:"path-parameters"},"Path Parameters"),(0,o.kt)("p",null,"Path parameters are always mandatory.\nIf path parameters are present in the path pattern for a request, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"'/my-resource/{resourceId}'"),", those are the first mandatory arguments in the generated function, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId)"),".\nThe types of the arguments depend on the specification.\nTheir names are always camel case and the order is determined by their occurrence in the path pattern."),(0,o.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("p",null,"Query parameters can be both mandatory and optional.\nIf query parameters for a certain API function exist, they are always the last argument of the function.\nQuery parameters are provided as an object, e.g. if you can set a ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," parameter, ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId, { limit: 10 })"),".\nThe types of the parameters depend on the specification.\nTheir names are as specified in the original OpenAPI document."),(0,o.kt)("h4",{id:"request-bodies"},"Request Bodies"),(0,o.kt)("p",null,"Request bodies can be both mandatory and optional.\nThe according function argument is always ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," and it is always between the path and query parameters, e.g. when the body is a simple object containing a title, ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, { title: 'My Title' }, { lang: 'en' })"),".\nIf the request body is optional, you have to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, undefined, { lang: 'en' })"),"."),(0,o.kt)("h3",{id:"setting-custom-headers"},"Setting Custom Headers"),(0,o.kt)("p",null,"The SAP Cloud SDK sets all mandatory headers by default.\nTo set additional headers or change the default values used in the headers, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"addCustomHeaders()")," method.\nYou can pass an object, where the key is the name of the header and the value, well the value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyApi.myFunction()\n  .addCustomHeaders({\n    apikey: 'my-api-key'\n  })\n  .execute(destination);\n")),(0,o.kt)("p",null,"Custom headers take precedence over default headers.\nThe example above can be used to execute requests against the sandbox systems of the SAP API Business Hub."),(0,o.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,o.kt)(r.Ol,{mdxType:"CustomRequestConfig"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),(0,o.kt)(r.nc,{mdxType:"CustomRequestConfigNote"}),(0,o.kt)("h3",{id:"setting-a-custom-timeout"},"Setting a Custom Timeout"),(0,o.kt)("p",null,"You can specify a timeout for the request via the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout()")," method on the request builder:"),(0,o.kt)(p,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(m,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyApi.myFunction().timeout(1000).execute(destination);\n")))),(0,o.kt)("p",null,"The value is in milliseconds and the default value is 10000 (10 seconds)\nThis timeout applies to the request send to the target system given in the destination.\nIf a CSRF token is fetched from the target system the timeout applies also to this call.\nNote that there is also a second timeout option on the destination fetch options.\nThis relates to the calls made to SAP BTP services like destination-service or XSUAA."),(0,o.kt)("h3",{id:"getting-a-raw-response"},"Getting a Raw Response"),(0,o.kt)(r.WD,{mdxType:"ExecuteRawOverview"}),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),(0,o.kt)(r.zl,{mdxType:"ExecuteRawUseCases"}),(0,o.kt)("h3",{id:"skip-csrf-token-handling"},"Skip CSRF Token Handling"),(0,o.kt)(r.Xc,{mdxType:"SkipCsrf"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const responseData = await MyApi.myFunction()\n  .skipCsrfTokenFetching()\n  .execute(destination);\n")))}h.isMDXComponent=!0},41609:(e,t,n)=>{n.d(t,{Ol:()=>c,WD:()=>d,Xc:()=>m,nc:()=>l,zl:()=>p});var a=n(67294),o=n(96147),r=n(66071),s=n(24249),i=n(33518),u=n(25754);function c(){return a.createElement(o.default,null)}function l(){return a.createElement(r.default,null)}function d(){return a.createElement(s.default,null)}function p(){return a.createElement(i.default,null)}function m(){return a.createElement(u.default,null)}}}]);