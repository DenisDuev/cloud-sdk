"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9627],{60187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"features/connectivity/http-client","title":"Perform HTTP Requests","description":"How to use the generic http client for untyped requests","source":"@site/docs-js_versioned_docs/version-v2/features/connectivity/generic-http-client.mdx","sourceDirName":"features/connectivity","slug":"/features/connectivity/http-client","permalink":"/cloud-sdk/docs/js/v2/features/connectivity/http-client","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/connectivity/generic-http-client.mdx","tags":[],"version":"v2","frontMatter":{"id":"http-client","title":"Perform HTTP Requests","sidebar_label":"Perform HTTP Requests","description":"How to use the generic http client for untyped requests","keywords":["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},"sidebar":"docsJsSidebar","previous":{"title":"Proxies","permalink":"/cloud-sdk/docs/js/v2/features/connectivity/proxies"},"next":{"title":"On-Premise Systems","permalink":"/cloud-sdk/docs/js/v2/features/connectivity/on-premise"}}');var r=n(74848),i=n(28453);n(11470),n(19365);const a={id:"http-client",title:"Perform HTTP Requests",sidebar_label:"Perform HTTP Requests",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},o=void 0,c={},l=[{value:"When to Use What?",id:"when-to-use-what",level:2},{value:"<code>executeHttpRequest</code>",id:"executehttprequest",level:2},{value:"CSRF Token Fetching",id:"csrf-token-fetching",level:3},{value:"Parameter Encoding",id:"parameter-encoding",level:3},{value:"Customized Parameter Encoding",id:"customized-parameter-encoding",level:4},{value:"<code>executeHttpRequestWithOrigin()</code>",id:"executehttprequestwithorigin",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This guide explains how to execute arbitrary HTTP requests using the SAP Cloud SDK for JavaScript.\nThe HTTP client provided by the SAP Cloud SDK provides some convenience features which are explained in detail in this guide."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you want to use an OData API, please refer to the ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/odata/execute-request",children:"Executing a request using a generated OData client"})," page.\nIn case you want to use an OpenAPI client, please refer to the ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/openapi/execute-request",children:"Execute a Request Using a Generated OpenAPI Client"})," page."]})}),"\n",(0,r.jsx)(t.h2,{id:"when-to-use-what",children:"When to Use What?"}),"\n",(0,r.jsxs)(t.p,{children:["The SAP Cloud SDK for JavaScript can generate clients for ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/odata/execute-request",children:"OData"})," and ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/openapi/execute-request",children:"OpenAPI"}),".\nUse generated clients for OData or OpenAPI services, if possible."]}),"\n",(0,r.jsx)(t.p,{children:"Generated clients provide convenience features such as:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Type-safe response objects"}),"\n",(0,r.jsx)(t.li,{children:"Convenient handling of filter, select and expand conditions"}),"\n",(0,r.jsxs)(t.li,{children:["Built-in ",(0,r.jsx)(t.code,{children:"ETag"})," versions handling"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Be sure to check if the clients for OData or OpenAPI support your use case.\nFor example, the OData client does not support the ",(0,r.jsx)(t.code,{children:"upsert"})," operation."]})}),"\n",(0,r.jsxs)(t.p,{children:["The generic HTTP client is based on the open-source ",(0,r.jsx)(t.a,{href:"https://axios-http.com",children:"axios HTTP client"}),", but provides convenience features which are specific to working on SAP Business Technology Platform, such as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations",children:"Destination lookup"})}),"\n",(0,r.jsxs)(t.li,{children:["Connections to ",(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/connectivity/on-premise",children:"SAP S/4HANA On-Premise"})," via the connectivity service"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/connectivity/proxies",children:"Web proxies"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"executehttprequest",children:(0,r.jsx)(t.code,{children:"executeHttpRequest"})}),"\n",(0,r.jsxs)(t.p,{children:["The most basic way to use the SAP Cloud SDK HTTP client is the function ",(0,r.jsx)(t.a,{href:"pathname:///api/v2/functions/sap_cloud_sdk_http_client.executeHttpRequest.html",children:"executeHttpRequest"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"executeHttpRequest(destination, requestConfig, httpRequestOptions): Promise<HttpResponse>;\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["This guide provides code snippets, fully executable example code can be found in the ",(0,r.jsx)(t.a,{href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/http-client-examples",children:"SAP-samples/cloud-sdk-js repository on GitHub"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"In the most simple form, this can be invoked like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const response = await executeHttpRequest(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get'\n  }\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"executeHttpRequest()"})," function takes the following parameters:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"destination"})," argument is of type ",(0,r.jsx)(t.code,{children:"DestinationOrFetchOptions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["This can either be a ",(0,r.jsx)(t.a,{href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.Destination.html",children:"destination object"})," which was already fetched or an ",(0,r.jsx)(t.a,{href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions.html",children:"object containing a destination name and an optional JWT"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"requestConfig"})," argument is of type ",(0,r.jsx)(t.a,{href:"pathname:///api/v2/types/sap_cloud_sdk_http_client.HttpRequestConfig.html",children:"HttpRequestConfig"})," or ",(0,r.jsx)(t.a,{href:"pathname:///api/v2/types/sap_cloud_sdk_http_client.HttpRequestConfigWithOrigin.html",children:"HttpRequestConfigWithOrigin"})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"httpRequestOptions"})," argument is of type ",(0,r.jsx)(t.code,{children:"HttpRequestOptions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This parameter is optional"}),"\n",(0,r.jsxs)(t.li,{children:["Can be used to disable ",(0,r.jsx)(t.a,{href:"#csrf-token-fetching",children:"automatic CSRF token fetching"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Note that the ",(0,r.jsx)(t.code,{children:"destination"})," and ",(0,r.jsx)(t.code,{children:"requestConfig"})," parameters have an overlap in the keys they accept.\nFor example, both have a ",(0,r.jsx)(t.code,{children:"url"})," and an ",(0,r.jsx)(t.code,{children:"authorization"})," property.\nFor keys that exist for both objects, the ",(0,r.jsx)(t.code,{children:"requestConfig"})," takes precedence."]})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"executeHttpRequest()"})," function returns a promise of type ",(0,r.jsx)(t.a,{href:"pathname:///api/v2/interfaces/sap_cloud_sdk_http_client.HttpResponse.html",children:"HttpResponse"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"csrf-token-fetching",children:"CSRF Token Fetching"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",children:"Cross-Site Request Forgery (CSRF)"})," is a common type of attack on web applications.\nThe HTTP client provided by SAP Cloud SDK allows to automatically retrieve a CSRF token for HTTP APIs which support this."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Fetching CSRF token is automatically enabled for all requests that typically might change data, such as ",(0,r.jsx)(t.code,{children:"PUT"}),", ",(0,r.jsx)(t.code,{children:"POST"}),", ",(0,r.jsx)(t.code,{children:"DELETE"}),", or ",(0,r.jsx)(t.code,{children:"PATCH"})," requests.\nIt is not available for ",(0,r.jsx)(t.code,{children:"GET"})," requests."]})}),"\n",(0,r.jsxs)(t.p,{children:["Fetching the CSRF token can be enabled or disabled via the ",(0,r.jsx)(t.code,{children:"httpRequestOptions.fetchCsrfToken"})," parameter of ",(0,r.jsx)(t.code,{children:"executeHttpRequest()"})," function.\nSee its ",(0,r.jsx)(t.a,{href:"pathname:///api/v2/interfaces/sap_cloud_sdk_http_client.HttpRequestOptions.html",children:"API documentation"})," for details."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, to avoid CSRF token fetching when doing a ",(0,r.jsx)(t.code,{children:"PUT"}),", ",(0,r.jsx)(t.code,{children:"POST"}),", ",(0,r.jsx)(t.code,{children:"DELETE"}),", or ",(0,r.jsx)(t.code,{children:"PATCH"})," request, disable it like in this example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const response = await executeHttpRequest(\n  {\n    url: `https://example.com`\n  },\n  {\n    method: 'post'\n  },\n  {\n    fetchCsrfToken: false\n  }\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"parameter-encoding",children:"Parameter Encoding"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding",children:"URL encoding"})," allows using characters as part of the URL which normally would cause issues such as spaces.\nFor example, the space character is replaced with ",(0,r.jsx)(t.code,{children:"%20"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The HTTP client automatically takes care of encoding parameters except for ",(0,r.jsx)(t.em,{children:"custom parameters"}),".\nCustom parameters can be useful when you need control exactly how values are transmitted to the backend system."]}),"\n",(0,r.jsx)(t.h4,{id:"customized-parameter-encoding",children:"Customized Parameter Encoding"}),"\n",(0,r.jsx)(t.p,{children:"If you need to customize parameter encoding, you can provide your own function to do the transformation.\nThis feature is meant for cases where backends have special requirements for the encoding that don't work with the default URL-encoding done by the HTTP client.\nYou should usually avoid this as it adds additional complexity to the application code."}),"\n",(0,r.jsx)(t.p,{children:"The example below shows how to do a string replace:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const myCustomParameterEncodingFunction: ParameterEncoder = function (\n  params: Record<string, any>\n): Record<string, any> {\n  const encodedParams: Record<string, any> = {};\n\n  for (const key in params) {\n    // Customize your required encoding logic here\n    encodedParams[key] = params[key].toString().replace('x', 'y');\n  }\n\n  return encodedParams;\n};\n\nconst response = await executeHttpRequest(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    params: {\n      param1: 'a/bx',\n      param2: 'x1'\n    },\n    // Pass your custom encoding function\n    parameterEncoder: myCustomParameterEncodingFunction\n  }\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The HTTP request in this example will contain the parameter values ",(0,r.jsx)(t.code,{children:"a/by"})," and ",(0,r.jsx)(t.code,{children:"y1"})," because our parameter encoder function replaced the ",(0,r.jsx)(t.code,{children:"x"})," with a ",(0,r.jsx)(t.code,{children:"y"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"executehttprequestwithorigin",children:(0,r.jsx)(t.code,{children:"executeHttpRequestWithOrigin()"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"executeHttpRequestWithOrigin()"})," function is a variation of ",(0,r.jsx)(t.code,{children:"executeHttpRequest()"})," which allows more fine-grained control over configuration precedence."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:['The term "origin" as it is used in the context of this guide does ',(0,r.jsx)(t.strong,{children:"not"})," refer to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin",children:'a URL as in the "same-origin policy"'}),".\nInstead it refers to the ",(0,r.jsx)(t.em,{children:"origin"})," or ",(0,r.jsx)(t.em,{children:"source"})," of HTTP client configuration."]})}),"\n",(0,r.jsx)(t.p,{children:"This function may be helpful in situations where you want to define the priority of headers and parameters, for example if:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You want to enforce a hard-coded API key or JWT and ignore the ones from the destination"}),"\n",(0,r.jsx)(t.li,{children:"You want a default query parameter, which can be overwritten by the destination properties"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Headers and query parameters with the same name are prioritized in the following order:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"custom"})}),"\n",(0,r.jsx)(t.li,{children:"Destination related headers/query parameters"}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"requestConfig"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In this example the HTTP request will contain the URL parameter ",(0,r.jsx)(t.code,{children:"myParam"})," with the value ",(0,r.jsx)(t.code,{children:"custom-param"})," and the HTTP header ",(0,r.jsx)(t.code,{children:"apiKey"})," with the value ",(0,r.jsx)(t.code,{children:"custom-header"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const response = await executeHttpRequestWithOrigin(\n  {\n    url: 'https://example.com'\n  },\n  {\n    method: 'get',\n    headers: {\n      custom: { apiKey: 'custom-header' },\n      requestConfig: { apiKey: 'default-header' }\n    },\n    params: {\n      custom: { myParam: 'custom-param' },\n      requestConfig: { myParam: 'default-param' }\n    }\n  }\n);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>T});var s=n(96540),r=n(34164),i=n(23104),a=n(56347),o=n(205),c=n(57485),l=n(31682),d=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),j=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==s&&(l(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function b(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function T(e){const t=(0,x.A)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);