"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));n(74866),n(85162);const i={id:"http-client",title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},o=void 0,s={unversionedId:"features/connectivity/http-client",id:"version-v2/features/connectivity/http-client",title:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",source:"@site/docs-js_versioned_docs/version-v2/features/connectivity/generic-http-client.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/http-client",permalink:"/cloud-sdk/docs/js/v2/features/connectivity/http-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/connectivity/generic-http-client.mdx",tags:[],version:"v2",frontMatter:{id:"http-client",title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/v2/features/connectivity/proxies"},next:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/v2/features/connectivity/on-premise"}},l={},u=[{value:"When to Use What?",id:"when-to-use-what",level:2},{value:"<code>executeHttpRequest</code>",id:"executehttprequest",level:2},{value:"CSRF Token Fetching",id:"csrf-token-fetching",level:3},{value:"Parameter Encoding",id:"parameter-encoding",level:3},{value:"Customized Parameter Encoding",id:"customized-parameter-encoding",level:4},{value:"<code>executeHttpRequestWithOrigin()</code>",id:"executehttprequestwithorigin",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how to execute arbitrary HTTP requests using the SAP Cloud SDK for JavaScript.\nThe HTTP client provided by the SAP Cloud SDK provides some convenience features which are explained in detail in this guide."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use an OData API, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/odata/execute-request"},"Executing a request using a generated OData client")," page.\nIn case you want to use an OpenAPI client, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/openapi/execute-request"},"Execute a Request Using a Generated OpenAPI Client")," page.")),(0,r.kt)("h2",{id:"when-to-use-what"},"When to Use What?"),(0,r.kt)("p",null,"The SAP Cloud SDK for JavaScript can generate clients for ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/odata/execute-request"},"OData")," and ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/openapi/execute-request"},"OpenAPI"),".\nUse generated clients for OData or OpenAPI services, if possible."),(0,r.kt)("p",null,"Generated clients provide convenience features such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type-safe response objects"),(0,r.kt)("li",{parentName:"ul"},"Convenient handling of filter, select and expand conditions"),(0,r.kt)("li",{parentName:"ul"},"Built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"ETag")," versions handling")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to check if the clients for OData or OpenAPI support your use case.\nFor example, the OData client does not support the ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")," operation.")),(0,r.kt)("p",null,"The generic HTTP client is based on the open-source ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com"},"axios HTTP client"),", but provides convenience features which are specific to working on SAP Business Technology Platform, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations"},"Destination lookup")),(0,r.kt)("li",{parentName:"ul"},"Connections to ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v2/features/connectivity/on-premise"},"SAP S/4HANA On-Premise")," via the connectivity service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v2/features/connectivity/proxies"},"Web proxies"))),(0,r.kt)("h2",{id:"executehttprequest"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeHttpRequest")),(0,r.kt)("p",null,"The most basic way to use the SAP Cloud SDK HTTP client is the function ",(0,r.kt)("a",{parentName:"p",href:"pathname:///api/v2/functions/sap_cloud_sdk_http_client.executeHttpRequest.html"},"executeHttpRequest"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, httpRequestOptions): Promise<HttpResponse>;\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This guide provides code snippets, fully executable example code can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/http-client-examples"},"SAP-samples/cloud-sdk-js repository on GitHub"),".")),(0,r.kt)("p",null,"In the most simple form, this can be invoked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await executeHttpRequest(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get'\n  }\n);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"destination")," argument is of type ",(0,r.kt)("inlineCode",{parentName:"li"},"DestinationOrFetchOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This can either be a ",(0,r.kt)("a",{parentName:"li",href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.Destination.html"},"destination object")," which was already fetched or an ",(0,r.kt)("a",{parentName:"li",href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions.html"},"object containing a destination name and an optional JWT")))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"requestConfig")," argument is of type ",(0,r.kt)("a",{parentName:"li",href:"pathname:///api/v2/types/sap_cloud_sdk_http_client.HttpRequestConfig.html"},"HttpRequestConfig")," or ",(0,r.kt)("a",{parentName:"li",href:"pathname:///api/v2/types/sap_cloud_sdk_http_client.HttpRequestConfigWithOrigin.html"},"HttpRequestConfigWithOrigin")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"httpRequestOptions")," argument is of type ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpRequestOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This parameter is optional"),(0,r.kt)("li",{parentName:"ul"},"Can be used to disable ",(0,r.kt)("a",{parentName:"li",href:"#csrf-token-fetching"},"automatic CSRF token fetching"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," parameters have an overlap in the keys they accept.\nFor example, both have a ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," property.\nFor keys that exist for both objects, the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestConfig")," takes precedence.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function returns a promise of type ",(0,r.kt)("a",{parentName:"p",href:"pathname:///api/v2/interfaces/sap_cloud_sdk_http_client.HttpResponse.html"},"HttpResponse"),"."),(0,r.kt)("h3",{id:"csrf-token-fetching"},"CSRF Token Fetching"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-Site Request Forgery (CSRF)")," is a common type of attack on web applications.\nThe HTTP client provided by SAP Cloud SDK allows to automatically retrieve a CSRF token for HTTP APIs which support this."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Fetching CSRF token is automatically enabled for all requests that typically might change data, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," requests.\nIt is not available for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests.")),(0,r.kt)("p",null,"Fetching the CSRF token can be enabled or disabled via the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRequestOptions.fetchCsrfToken")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function.\nSee its ",(0,r.kt)("a",{parentName:"p",href:"pathname:///api/v2/interfaces/sap_cloud_sdk_http_client.HttpRequestOptions.html"},"API documentation")," for details."),(0,r.kt)("p",null,"For example, to avoid CSRF token fetching when doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," request, disable it like in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await executeHttpRequest(\n  {\n    url: `https://example.com`\n  },\n  {\n    method: 'post'\n  },\n  {\n    fetchCsrfToken: false\n  }\n);\n")),(0,r.kt)("h3",{id:"parameter-encoding"},"Parameter Encoding"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"URL encoding")," allows using characters as part of the URL which normally would cause issues such as spaces.\nFor example, the space character is replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"%20"),"."),(0,r.kt)("p",null,"The HTTP client automatically takes care of encoding parameters except for ",(0,r.kt)("em",{parentName:"p"},"custom parameters"),".\nCustom parameters can be useful when you need control exactly how values are transmitted to the backend system."),(0,r.kt)("h4",{id:"customized-parameter-encoding"},"Customized Parameter Encoding"),(0,r.kt)("p",null,"If you need to customize parameter encoding, you can provide your own function to do the transformation.\nThis feature is meant for cases where backends have special requirements for the encoding that don't work with the default URL-encoding done by the HTTP client.\nYou should usually avoid this as it adds additional complexity to the application code."),(0,r.kt)("p",null,"The example below shows how to do a string replace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const myCustomParameterEncodingFunction: ParameterEncoder = function (\n  params: Record<string, any>\n): Record<string, any> {\n  const encodedParams: Record<string, any> = {};\n\n  for (const key in params) {\n    // Customize your required encoding logic here\n    encodedParams[key] = params[key].toString().replace('x', 'y');\n  }\n\n  return encodedParams;\n};\n\nconst response = await executeHttpRequest(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    params: {\n      param1: 'a/bx',\n      param2: 'x1'\n    },\n    // Pass your custom encoding function\n    parameterEncoder: myCustomParameterEncodingFunction\n  }\n);\n")),(0,r.kt)("p",null,"The HTTP request in this example will contain the parameter values ",(0,r.kt)("inlineCode",{parentName:"p"},"a/by")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y1")," because our parameter encoder function replaced the ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,r.kt)("h2",{id:"executehttprequestwithorigin"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeHttpRequestWithOrigin()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequestWithOrigin()")," function is a variation of ",(0,r.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," which allows more fine-grained control over configuration precedence."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The term "origin" as it is used in the context of this guide does ',(0,r.kt)("strong",{parentName:"p"},"not")," refer to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin"},'a URL as in the "same-origin policy"'),".\nInstead it refers to the ",(0,r.kt)("em",{parentName:"p"},"origin")," or ",(0,r.kt)("em",{parentName:"p"},"source")," of HTTP client configuration.")),(0,r.kt)("p",null,"This function may be helpful in situations where you want to define the priority of headers and parameters, for example if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to enforce a hard-coded API key or JWT and ignore the ones from the destination"),(0,r.kt)("li",{parentName:"ul"},"You want a default query parameter, which can be overwritten by the destination properties")),(0,r.kt)("p",null,"Headers and query parameters with the same name are prioritized in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"custom")),(0,r.kt)("li",{parentName:"ol"},"Destination related headers/query parameters"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requestConfig"))),(0,r.kt)("p",null,"In this example the HTTP request will contain the URL parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"myParam")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-param")," and the HTTP header ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-header"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await executeHttpRequestWithOrigin(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    headers: {\n      custom: { apiKey: 'custom-header' },\n      requestConfig: { apiKey: 'default-header' }\n    },\n    params: {\n      custom: { myParam: 'custom-param' },\n      requestConfig: { myParam: 'default-param' }\n    }\n  }\n);\n")))}c.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),s=n(76775),l=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=l??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var k=n(72389);const g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),l(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}}}]);