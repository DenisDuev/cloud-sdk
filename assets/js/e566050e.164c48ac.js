"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(20807);n(65488),n(85162);const i={title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},s=void 0,l={unversionedId:"features/connectivity/generic-http-client",id:"features/connectivity/generic-http-client",title:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",source:"@site/docs-js/features/connectivity/generic-http-client.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/generic-http-client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client",draft:!1,tags:[],version:"current",frontMatter:{title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"},next:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"}},p={},u=[{value:"When to Use What?",id:"when-to-use-what",level:2},{value:"<code>executeHttpRequest</code>",id:"executehttprequest",level:2},{value:"CSRF Token Fetching",id:"csrf-token-fetching",level:3},{value:"Parameter Encoding",id:"parameter-encoding",level:3},{value:"Customized Parameter Encoding",id:"customized-parameter-encoding",level:4},{value:"<code>executeHttpRequestWithOrigin</code>",id:"executehttprequestwithorigin",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how you can execute arbitrary HTTP requests using the SAP Cloud SDK.\nThe HTTP client provided by the SAP Cloud SDK provides some convenience features which are explained in detail in this guide."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use an OData API, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/execute-odata-request"},"Executing a request using a generated OData client")," page.\nIn case you want to use an OpenAPI client, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../openapi/execute-openapi-request"},"Execute a Request Using a Generated OpenAPI Client")," page.")),(0,r.kt)("h2",{id:"when-to-use-what"},"When to Use What?"),(0,r.kt)("p",null,"The SAP Cloud SDK for JavaScript provides clients for ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/execute-odata-request"},"OData")," and ",(0,r.kt)("a",{parentName:"p",href:"../openapi/execute-openapi-request"},"OpenAPI"),".\nIf you use OData or OpenAPI, we recommend to use those clients if possible."),(0,r.kt)("p",null,"They provide convenience features such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type-safe response objects"),(0,r.kt)("li",{parentName:"ul"},"Convenient handling of filter, select and expand conditions"),(0,r.kt)("li",{parentName:"ul"},"Built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"ETag")," versions handling")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to check if the clients for OData or OpenAPI support your use-case.\nFor example, the OData client does not support the ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")," operation.")),(0,r.kt)("p",null,"In case the OData or OpenAPI client does not satisfy your requirements, or you don't interact with OData or OpenAPI services, the next thing you should look into is the HTTP client which is explained in this guide."),(0,r.kt)("p",null,"The HTTP client is based on the open-source ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com"},"axios HTTP client")," but provides convenience features which are specific to working on SAP Business Technology Platform, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"Destination lookup")),(0,r.kt)("li",{parentName:"ul"},"Connections to ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/on-premise"},"SAP S/4HANA On-premise")," via the connectivity service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"Web proxies"))),(0,r.kt)("p",null,"If the provided HTTP client also does not work for your use-case, we recommend using the ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/example"},"axios client")," directly."),(0,r.kt)("h2",{id:"executehttprequest"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeHttpRequest")),(0,r.kt)("p",null,"The most basic way to use the SAP Cloud SDK HTTP client is the function ",(0,r.kt)(o.Z,{slug:"functions/sap_cloud_sdk_http_client.executeHttpRequest",name:"executeHttpRequest",mdxType:"LinkToLatestJsApiDocs"}),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, httpRequestOptions): Promise<HttpResponse>;\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This guide provides code snippets, fully executable example code can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/http-client-examples"},"SAP-samples/cloud-sdk-js repository on GitHub"),".")),(0,r.kt)("p",null,"In the most simple form, this can be invoked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await executeHttpRequest(\n  {\n    url: 'https://httpbin.org/get'\n  },\n  {\n    method: 'get'\n  }\n);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"destination")," is of type ",(0,r.kt)("inlineCode",{parentName:"li"},"DestinationOrFetchOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This can either be a ",(0,r.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.Destination",name:"destination object",mdxType:"LinkToLatestJsApiDocs"})," which was already fetched or an ",(0,r.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions",name:"object containing a destination name and an optional JWT",mdxType:"LinkToLatestJsApiDocs"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestConfig")," is of type ",(0,r.kt)(o.Z,{slug:"types/sap_cloud_sdk_http_client.HttpRequestConfig",name:"HttpRequestConfig",mdxType:"LinkToLatestJsApiDocs"})," or ",(0,r.kt)(o.Z,{slug:"types/sap_cloud_sdk_http_client.HttpRequestConfigWithOrigin",name:"HttpRequestConfigWithOrigin",mdxType:"LinkToLatestJsApiDocs"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpRequestOptions")," is of type ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpRequestOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This parameter is optional"),(0,r.kt)("li",{parentName:"ul"},"Can be used to disable ",(0,r.kt)("a",{parentName:"li",href:"#csrf-token-fetching"},"automatic CSRF token fetching"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," parameter have an overlap in the keys they accept.\nFor example, both have a ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," property.\nFor keys that exist for both objects, the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," takes precedence.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," function returns a promise of ",(0,r.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_http_client.HttpResponse",name:"HttpResponse",mdxType:"LinkToLatestJsApiDocs"}),"."),(0,r.kt)("h3",{id:"csrf-token-fetching"},"CSRF Token Fetching"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-Site Request Forgery (CSRF)")," is a common type of attack on web applications.\nThe HTTP client provided by SAP Cloud SDK allows to automatically retrieve a CSRF token for HTTP APIs which support this.\nFetching CSRF token is automatically enabled for all requests that typically might change data, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," requests, and is not available for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests."),(0,r.kt)("p",null,"Fetching the CSRF token can be enabled or disabled via the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  fetchCsrfToken: true,\n}\n")),(0,r.kt)("h3",{id:"parameter-encoding"},"Parameter Encoding"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"URL encoding")," allows using characters as part of the URL which normally would cause issues such as spaces.\nFor example, the space character is replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"%20"),"."),(0,r.kt)("p",null,"The HTTP client automatically takes care of encoding parameters except for ",(0,r.kt)("em",{parentName:"p"},"custom parameters"),"."),(0,r.kt)("p",null,"For example, given this ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," object, the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," parameters will be automatically escaped, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," will not.\nCustom parameters can be useful when you need control exactly how values are transmitted to the backend system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  method: "get",\n  params: {\n    custom: {\n      customParam: "a/b c",\n    },\n    requestConfig: {\n      requestParam: "a/b c",\n    },\n  }\n}\n')),(0,r.kt)("h4",{id:"customized-parameter-encoding"},"Customized Parameter Encoding"),(0,r.kt)("p",null,"If you need to customize parameter encoding, you can provide your own function to take care of it like in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const myCustomParameterEncodingFunction: ParameterEncoder = function (\n  params: Record<string, any>\n): Record<string, any> {\n  const encodedParams: Record<string, any> = {};\n\n  for (const k in params) {\n    // Customize your required encoding logic here\n    encodedParams[k] = params[k].toString();\n  }\n\n  return encodedParams;\n};\n\nconst encodingResponse = await executeHttpRequest(\n  {\n    url: 'http://localhost:3000/encoding'\n  },\n  {\n    method: 'get',\n    params: {\n      custom: {\n        customParam: 'a/b c'\n      },\n      requestConfig: {\n        requestParam: 'a/b c'\n      }\n    },\n    // Pass your custom encoding fuction\n    parameterEncoder: myCustomParameterEncodingFunction\n  }\n);\n")),(0,r.kt)("h2",{id:"executehttprequestwithorigin"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeHttpRequestWithOrigin")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequestWithOrigin")," is a variation of ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," which allows more fine-grained control over configuration precedence."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The term "origin" as it is used in the context of this guide does ',(0,r.kt)("strong",{parentName:"p"},"not")," refer to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin"},'a URL as in the "same-origin policy"'),".\nInstead it refers to the ",(0,r.kt)("em",{parentName:"p"},"origin")," or ",(0,r.kt)("em",{parentName:"p"},"source")," of HTTP client configuration.")),(0,r.kt)("p",null,"This function may be helpful in situations where you want to define the priority of headers and parameters, for example if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to enforce a hard-coded API key/JWT and ignore the ones from, e.g., the destination"),(0,r.kt)("li",{parentName:"ul"},"You want a default query parameter, which can be overwritten by the destination properties")),(0,r.kt)("p",null,"Headers and query parameters with the same name are prioritized in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"custom")),(0,r.kt)("li",{parentName:"ol"},"Destination related headers/query parameters"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requestConfig"),".")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"myParam")," override the request config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequestWithOrigin(\n  {\n    url: 'http://localhost:3000/'\n  },\n  {\n    method: 'get',\n    url: '/origin',\n    headers: {\n      custom: { apiKey: 'custom-header' },\n      requestConfig: { apiKey: 'default-header' }\n    },\n    params: {\n      custom: { myParam: 'custom-param' },\n      requestConfig: { myParam: 'default-param' }\n    }\n  }\n);\n")))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:h,groupId:k,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,l.U)(),[C,P]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==C&&y.some((t=>t.value===e))&&P(e)}const q=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==C&&(x(t),P(a),null!=k&&T(k,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;n=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:q,onClick:q},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},20807:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(63081);const o=function(e){let{slug:t,name:n}=e;return a.createElement("a",{href:"/cloud-sdk/api/"+r.Z[0]+"/"+t},n)}}}]);