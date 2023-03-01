"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5821,6147,8634,1275,654,9812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"features/common/custom-request-config-note",id:"features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:",source:"@site/docs-js/features/common/custom-request-config-note.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config-note",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config-note.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")))))}l.isMDXComponent=!0},31477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"features/common/custom-request-config",id:"features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs-js/features/common/custom-request-config.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options including ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),", etc.\nYou can provide a custom request configuration to pass additional options to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."))}l.isMDXComponent=!0},39173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"features/common/execute-raw-overview",id:"features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute() method, you can execute a request using the executeRaw() method.",source:"@site/docs-js/features/common/execute-raw-overview.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-overview.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," method, you can execute a request using the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw()")," method.\nIt returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," instance, which contains the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": the status code of the response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),": the response headers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": the response body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request"),": the original request")))}l.isMDXComponent=!0},53396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"features/common/execute-raw-use-cases",id:"features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use the executeRaw() method are:",source:"@site/docs-js/features/common/execute-raw-use-cases.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-use-cases.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Typical cases, where you might need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw()")," method are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,r.kt)("li",{parentName:"ul"},"You need additional information about the request, like payload, method, or request headers."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"execute()")," method is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,r.kt)("li",{parentName:"ul"},"Debugging purposes.")))}l.isMDXComponent=!0},95271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"features/common/skip-csrf-token",id:"features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-GET requests.",source:"@site/docs-js/features/common/skip-csrf-token.mdx",sourceDirName:"features/common",slug:"/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/features/common/skip-csrf-token",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/skip-csrf-token.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For some services, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests.\nTherefore, skipping to fetch the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as a performance improvement.\nYou can disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," method like below:"))}l.isMDXComponent=!0},42254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=(n(44996),n(41609));const s={id:"execute-request",title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},i=void 0,u={unversionedId:"features/openapi/execute-request",id:"features/openapi/execute-request",title:"Execute a Request Using a Generated OpenAPI Client",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",source:"@site/docs-js/features/openapi/execute-openapi-request.mdx",sourceDirName:"features/openapi",slug:"/features/openapi/execute-request",permalink:"/cloud-sdk/docs/js/features/openapi/execute-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/openapi/execute-openapi-request.mdx",tags:[],version:"current",frontMatter:{id:"execute-request",title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Generate an OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-client"},next:{title:"Send e-mails",permalink:"/cloud-sdk/docs/js/features/mail-client/"}},c={},d=[{value:"Executing a Request",id:"executing-a-request",level:2},{value:"Passing Parameters",id:"passing-parameters",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Request Bodies",id:"request-bodies",level:4},{value:"Setting Custom Headers",id:"setting-custom-headers",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Setting Middlewares",id:"setting-middlewares",level:3},{value:"Getting a Raw Response",id:"getting-a-raw-response",level:3},{value:"Skip CSRF Token Handling",id:"skip-csrf-token-handling",level:3}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The usage of the OpenAPI clients is similar to the clients for ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/execute-request"},"OData"),".\nThe OpenAPI clients consist of at least one API, which in turn has at least one function.\nWhat APIs and functions are available in a client depends on the service specification."),(0,r.kt)("h2",{id:"executing-a-request"},"Executing a Request"),(0,r.kt)("p",null,"The request execution always follows the same structure.\nYou invoke a function of an API, optionally configure your request and then execute it against a ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destinations"},"destination"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const responseData = await MyApi.myFunction().execute(destination);\n")),(0,r.kt)("p",null,"In the example above you invoke the function ",(0,r.kt)("inlineCode",{parentName:"p"},"myFunction()")," of the API ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApi")," without further configuration and execute it against a destination named ",(0,r.kt)("inlineCode",{parentName:"p"},"destination"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," method returns the response data directly as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", if available.\nResponses without response body, result in the return type ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<void>"),"."),(0,r.kt)("p",null,"You can configure your request by ",(0,r.kt)("a",{parentName:"p",href:"#setting-custom-headers"},"setting custom headers"),", ",(0,r.kt)("a",{parentName:"p",href:"#setting-a-custom-request-configuration"},"a custom request configuration")," or ",(0,r.kt)("a",{parentName:"p",href:"#disabling-csrf-token-fetching"},"disabling CSRF token fetching"),".\nIf you need more information than the response data, you can also ",(0,r.kt)("a",{parentName:"p",href:"#getting-a-raw-response"},"get the raw response"),"."),(0,r.kt)("h3",{id:"passing-parameters"},"Passing Parameters"),(0,r.kt)("p",null,"Often, resources are accessible under paths that require path parameters and/or query parameters and write requests often send a request body to modify resources.\nThe clients generated by the SAP Cloud SDK OpenAPI generator require you to set the parameters that are mandatory and allow you to set those that are optional."),(0,r.kt)("h4",{id:"path-parameters"},"Path Parameters"),(0,r.kt)("p",null,"Path parameters are always mandatory.\nIf path parameters are present in the path pattern for a request, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"'/my-resource/{resourceId}'"),", those are the first mandatory arguments in the generated function, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId)"),".\nThe types of the arguments depend on the specification.\nTheir names are always camel case and the order is determined by their occurrence in the path pattern."),(0,r.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("p",null,"Query parameters can be both mandatory and optional.\nIf query parameters for a certain API function exist, they are always the last argument of the function.\nQuery parameters are provided as an object, e.g. if you can set a ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId, { limit: 10 })"),".\nThe types of the parameters depend on the specification.\nTheir names are as specified in the original OpenAPI document."),(0,r.kt)("h4",{id:"request-bodies"},"Request Bodies"),(0,r.kt)("p",null,"Request bodies can be both mandatory and optional.\nThe according function argument is always ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," and it is always between the path and query parameters, e.g. when the body is a simple object containing a title, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, { title: 'My Title' }, { lang: 'en' })"),".\nIf the request body is optional, you have to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, undefined, { lang: 'en' })"),"."),(0,r.kt)("h3",{id:"setting-custom-headers"},"Setting Custom Headers"),(0,r.kt)("p",null,"The SAP Cloud SDK sets all mandatory headers by default.\nTo set additional headers or change the default values used in the headers, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCustomHeaders()")," method.\nYou can pass an object, where the key is the name of the header and the value, well the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyApi.myFunction()\n  .addCustomHeaders({\n    apikey: 'my-api-key'\n  })\n  .execute(destination);\n")),(0,r.kt)("p",null,"Custom headers take precedence over default headers.\nThe example above can be used to execute requests against the sandbox systems of the SAP API Business Hub."),(0,r.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,r.kt)(o.Ol,{mdxType:"CustomRequestConfig"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),(0,r.kt)(o.nc,{mdxType:"CustomRequestConfigNote"}),(0,r.kt)("h3",{id:"setting-middlewares"},"Setting Middlewares"),(0,r.kt)("p",null,"You can specify middlewares for a request via the ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware()")," method on the request builder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyApi.myFunction().middleware(myMiddlewares).execute(destination);\n")),(0,r.kt)("p",null,"The method accepts variable number of single elements as well as arrays.\nMiddleware is a general concept used to add ",(0,r.kt)("a",{parentName:"p",href:"../middleware"},"arbitrary enhancements to the request"),".\nA typical use case is to also add ",(0,r.kt)("a",{parentName:"p",href:"../../guides/resilience"},"resilience")," to requests."),(0,r.kt)("h3",{id:"getting-a-raw-response"},"Getting a Raw Response"),(0,r.kt)(o.WD,{mdxType:"ExecuteRawOverview"}),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),(0,r.kt)(o.zl,{mdxType:"ExecuteRawUseCases"}),(0,r.kt)("h3",{id:"skip-csrf-token-handling"},"Skip CSRF Token Handling"),(0,r.kt)(o.Xc,{mdxType:"SkipCsrf"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const responseData = await MyApi.myFunction()\n  .skipCsrfTokenFetching()\n  .execute(destination);\n")))}p.isMDXComponent=!0},41609:(e,t,n)=>{n.d(t,{Ol:()=>c,WD:()=>l,Xc:()=>m,nc:()=>d,zl:()=>p});var a=n(67294),r=n(31477),o=n(47975),s=n(39173),i=n(53396),u=n(95271);function c(){return a.createElement(r.default,null)}function d(){return a.createElement(o.default,null)}function l(){return a.createElement(s.default,null)}function p(){return a.createElement(i.default,null)}function m(){return a.createElement(u.default,null)}}}]);