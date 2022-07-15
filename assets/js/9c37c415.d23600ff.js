"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5821,6147,8634,1275,654,9812],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"features/common/custom-request-config-note",id:"features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency, we do not allow overriding the following options:",source:"@site/docs-js/features/common/custom-request-config-note.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config-note",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To ensure API consistency, we do not allow overriding the following options:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")))))}m.isMDXComponent=!0},1477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"features/common/custom-request-config",id:"features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs-js/features/common/custom-request-config.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options like ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"headers"),", and others for you.\nIn certain cases, passing additional options to axios might be required.\nTo achieve this, you can provide a custom request configuration that will be passed down to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."))}m.isMDXComponent=!0},9173:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"features/common/execute-raw-overview",id:"features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute method, you can execute a request using the executeRaw method.",source:"@site/docs-js/features/common/execute-raw-overview.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-overview",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method, you can execute a request using the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeRaw")," method.\nIt returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponse"),", which contains the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status")," - the status code of the response"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers")," - the response headers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")," - the response body"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request")," - the original request")))}m.isMDXComponent=!0},3396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"features/common/execute-raw-use-cases",id:"features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs-js/features/common/execute-raw-use-cases.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Typical cases, where you might need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"executeRaw")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,o.kt)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method, or request headers."),(0,o.kt)("li",{parentName:"ul"},"The function ",(0,o.kt)("inlineCode",{parentName:"li"},"execute")," is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,o.kt)("li",{parentName:"ul"},"Debugging purposes.")))}m.isMDXComponent=!0},5271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"features/common/skip-csrf-token",id:"features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-get requests.",source:"@site/docs-js/features/common/skip-csrf-token.mdx",sourceDirName:"features/common",slug:"/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/features/common/skip-csrf-token",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For some services, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-get requests.\nTherefore, skipping fetching the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as a performance improvement.\nYou can disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using ",(0,o.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," like below:"))}m.isMDXComponent=!0},2254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=(n(4996),n(1609)),s=["components"],u={title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},c=void 0,l={unversionedId:"features/openapi/execute-openapi-request",id:"features/openapi/execute-openapi-request",title:"Execute a Request Using a Generated OpenAPI Client",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",source:"@site/docs-js/features/openapi/execute-openapi-request.mdx",sourceDirName:"features/openapi",slug:"/features/openapi/execute-openapi-request",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request",draft:!1,tags:[],version:"current",frontMatter:{title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Generate an OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},next:{title:"SAP Workflow API for Cloud Foundry",permalink:"/cloud-sdk/docs/js/features/openapi/pregenerated-clients/workflow"}},p={},d=[{value:"Executing a Request",id:"executing-a-request",level:2},{value:"Passing Parameters",id:"passing-parameters",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Request Bodies",id:"request-bodies",level:4},{value:"Setting Custom Headers",id:"setting-custom-headers",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Setting a Custom Timeout",id:"setting-a-custom-timeout",level:3},{value:"Getting a Raw Response",id:"getting-a-raw-response",level:3},{value:"Skip <code>CSRF</code> Token Handling",id:"skip-csrf-token-handling",level:3}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=m("Tabs"),h=m("TabItem"),k={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The usage of the OpenAPI clients is similar to the clients for ",(0,o.kt)("a",{parentName:"p",href:"../odata/execute-odata-request"},"OData"),".\nThe OpenAPI clients consist of at least one API, which in turn has at least one function.\nWhat APIs and functions are available in a client depends on the service specification."),(0,o.kt)("h2",{id:"executing-a-request"},"Executing a Request"),(0,o.kt)("p",null,"The request execution always follows the same structure.\nYou invoke a function of an API, optionally configure your request and then execute it against a ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/destination"},"destination"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const responseData = await MyApi.myFunction().execute(destination);\n")),(0,o.kt)("p",null,"In the example above we invoke the function ",(0,o.kt)("inlineCode",{parentName:"p"},"myFunction")," of the API ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi")," without further configuration and execute it against a destination named ",(0,o.kt)("inlineCode",{parentName:"p"},"destination"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method returns the response data directly as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", if available.\nResponses without response body, result in the return type ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>"),"."),(0,o.kt)("p",null,"You can configure your request by ",(0,o.kt)("a",{parentName:"p",href:"#setting-custom-headers"},"setting custom headers"),", ",(0,o.kt)("a",{parentName:"p",href:"#setting-a-custom-request-configuration"},"a custom request configuration")," or ",(0,o.kt)("a",{parentName:"p",href:"#disabling-csrf-token-fetching"},"disabling CSRF token fetching"),".\nIf you need more information than the response data, you can also ",(0,o.kt)("a",{parentName:"p",href:"#getting-a-raw-response"},"get the raw response"),"."),(0,o.kt)("h3",{id:"passing-parameters"},"Passing Parameters"),(0,o.kt)("p",null,"Often, resources are accessible under paths that require path parameters and/or query parameters and write requests often send a request body to modify resources.\nThe clients generated by the SAP Cloud SDK OpenAPI generator require you to set the parameters that are mandatory and allow you to set those that are optional."),(0,o.kt)("h4",{id:"path-parameters"},"Path Parameters"),(0,o.kt)("p",null,"Path parameters are always mandatory.\nIf path parameters are present in the path pattern for a request, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"'/my-resource/{resourceId}'"),", those are the first mandatory arguments in the generated function, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId)"),".\nThe types of the arguments depend on the specification.\nTheir names are always camel case and the order is determined by their occurrence in the path pattern."),(0,o.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("p",null,"Query parameters can be both mandatory and optional.\nIf query parameters for a certain API function exist, they are always the last argument of the function.\nQuery parameters are provided as an object, e.g. if you can set a ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," parameter, ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId, { limit: 10 })"),".\nThe types of the parameters depend on the specification.\nTheir names are as specified in the original OpenAPI document."),(0,o.kt)("h4",{id:"request-bodies"},"Request Bodies"),(0,o.kt)("p",null,"Request bodies can be both mandatory and optional.\nThe according function argument is always ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," and it is always between the path and query parameters, e.g. when the body is a simple object containing a title, ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, { title: 'My Title' }, { lang: 'en' })"),".\nIf the request body is optional, you have to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, undefined, { lang: 'en' })"),"."),(0,o.kt)("h3",{id:"setting-custom-headers"},"Setting Custom Headers"),(0,o.kt)("p",null,"The SAP Cloud SDK sets all mandatory headers by default.\nTo set additional headers or change the default values used in the headers, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"addCustomHeaders")," method.\nYou can pass an object, where the key is the name of the header and the value, well the value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyApi.myFunction()\n  .addCustomHeaders({\n    apikey: 'my-api-key'\n  })\n  .execute(destination);\n")),(0,o.kt)("p",null,"Custom headers take precedence over default headers.\nThe example above can be used to execute requests against the sandbox systems of the SAP API Business Hub."),(0,o.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,o.kt)(i.Ol,{mdxType:"CustomRequestConfig"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),(0,o.kt)(i.nc,{mdxType:"CustomRequestConfigNote"}),(0,o.kt)("h3",{id:"setting-a-custom-timeout"},"Setting a Custom Timeout"),(0,o.kt)("p",null,"You can specify a timeout for the request via the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout()")," method on the request builder:"),(0,o.kt)(f,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(h,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MyApi.myFunction().timeout(1000).execute(destination);\n")))),(0,o.kt)("p",null,"The value is in milliseconds and the default value is 10000 (10 seconds)\nThis timeout applies to the request send to the target system given in the destination.\nIf a ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token is fetched from the target system the timeout applies also to this call.\nNote that there is also a second timeout option on the destination fetch options.\nThis relates to the calls made to SAP BTP services like destination-service or XSUAA."),(0,o.kt)("h3",{id:"getting-a-raw-response"},"Getting a Raw Response"),(0,o.kt)(i.WD,{mdxType:"ExecuteRawOverview"}),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),(0,o.kt)(i.zl,{mdxType:"ExecuteRawUseCases"}),(0,o.kt)("h3",{id:"skip-csrf-token-handling"},"Skip ",(0,o.kt)("inlineCode",{parentName:"h3"},"CSRF")," Token Handling"),(0,o.kt)(i.Xc,{mdxType:"SkipCsrf"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const responseData = await MyApi.myFunction()\n  .skipCsrfTokenFetching()\n  .execute(destination);\n")))}g.isMDXComponent=!0},1609:function(e,t,n){n.d(t,{Ol:function(){return c},WD:function(){return p},Xc:function(){return m},nc:function(){return l},zl:function(){return d}});var a=n(7294),r=n(1477),o=n(7975),i=n(9173),s=n(3396),u=n(5271);function c(){return a.createElement(r.default,null)}function l(){return a.createElement(o.default,null)}function p(){return a.createElement(i.default,null)}function d(){return a.createElement(s.default,null)}function m(){return a.createElement(u.default,null)}}}]);