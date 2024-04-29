"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2785,9053,2675,8678,4657,6684],{76541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=n(74848),r=n(28453);const o={},a=void 0,i={id:"features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:",source:"@site/docs-js_versioned_docs/version-v2/features/common/custom-request-config-note.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/v2/features/common/custom-request-config-note",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/common/custom-request-config-note.mdx",tags:[],version:"v2",frontMatter:{}},c={},u=[];function d(e){const t={admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"method"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"url"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"baseURL"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"data"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"headers"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"params"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=n(74848),r=n(28453);const o={},a=void 0,i={id:"features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs-js_versioned_docs/version-v2/features/common/custom-request-config.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/v2/features/common/custom-request-config",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/common/custom-request-config.mdx",tags:[],version:"v2",frontMatter:{}},c={},u=[];function d(e){const t={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(t.p,{children:["By default, the SAP Cloud SDK uses ",(0,s.jsx)(t.a,{href:"https://github.com/axios/axios",children:"axios"})," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options including ",(0,s.jsx)(t.code,{children:"url"}),", ",(0,s.jsx)(t.code,{children:"headers"}),", etc.\nYou can provide a custom request configuration to pass additional options to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},76244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=n(74848),r=n(28453);const o={},a=void 0,i={id:"features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute() method, you can execute a request using the executeRaw() method.",source:"@site/docs-js_versioned_docs/version-v2/features/common/execute-raw-overview.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/v2/features/common/execute-raw-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/common/execute-raw-overview.mdx",tags:[],version:"v2",frontMatter:{}},c={},u=[];function d(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["In addition to the ",(0,s.jsx)(t.code,{children:"execute()"})," method, you can execute a request using the ",(0,s.jsx)(t.code,{children:"executeRaw()"})," method.\nIt returns an ",(0,s.jsx)(t.code,{children:"HttpResponse"})," instance, which contains the following properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"status"}),": the status code of the response"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"headers"}),": the response headers"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data"}),": the response body"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"request"}),": the original request"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},77400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=n(74848),r=n(28453);const o={},a=void 0,i={id:"features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use the executeRaw() method are:",source:"@site/docs-js_versioned_docs/version-v2/features/common/execute-raw-use-cases.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/v2/features/common/execute-raw-use-cases",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/common/execute-raw-use-cases.mdx",tags:[],version:"v2",frontMatter:{}},c={},u=[];function d(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Typical cases, where you might need to use the ",(0,s.jsx)(t.code,{children:"executeRaw()"})," method are:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You need additional information about the response, like the status code or response headers."}),"\n",(0,s.jsx)(t.li,{children:"You need additional information about the request, like payload, method, or request headers."}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"execute()"})," method is omitted in some request builders because the response data cannot be deserialized by the request builder."]}),"\n",(0,s.jsx)(t.li,{children:"Debugging purposes."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},37658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=n(74848),r=n(28453);const o={},a=void 0,i={id:"features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-GET requests.",source:"@site/docs-js_versioned_docs/version-v2/features/common/skip-csrf-token.mdx",sourceDirName:"features/common",slug:"/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/v2/features/common/skip-csrf-token",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/common/skip-csrf-token.mdx",tags:[],version:"v2",frontMatter:{}},c={},u=[];function d(e){const t={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(t.p,{children:["For some services, the ",(0,s.jsx)(t.code,{children:"CSRF"})," token is not required even for non-",(0,s.jsx)(t.code,{children:"GET"})," requests.\nTherefore, skipping to fetch the ",(0,s.jsx)(t.code,{children:"CSRF"})," token makes sense as a performance improvement.\nYou can disable the ",(0,s.jsx)(t.code,{children:"CSRF"})," token request by using ",(0,s.jsx)(t.code,{children:"skipCsrfTokenFetching()"})," like below:"]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=n(74848),r=n(28453),o=(n(86025),n(2756)),a=n(19365),i=n(11470);const c={id:"execute-request",title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},u=void 0,d={id:"features/openapi/execute-request",title:"Execute a Request Using a Generated OpenAPI Client",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",source:"@site/docs-js_versioned_docs/version-v2/features/openapi/execute-openapi-request.mdx",sourceDirName:"features/openapi",slug:"/features/openapi/execute-request",permalink:"/cloud-sdk/docs/js/v2/features/openapi/execute-request",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/openapi/execute-openapi-request.mdx",tags:[],version:"v2",frontMatter:{id:"execute-request",title:"Execute a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"How to use a client (pre-)generated by the SAP Cloud SDK OpenAPI generator.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Generate an OpenAPI Client",permalink:"/cloud-sdk/docs/js/v2/features/openapi/generate-client"},next:{title:"Send e-mails",permalink:"/cloud-sdk/docs/js/v2/features/mail-client/"}},l={},h=[{value:"Executing a Request",id:"executing-a-request",level:2},{value:"Passing Parameters",id:"passing-parameters",level:3},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Request Bodies",id:"request-bodies",level:4},{value:"Setting Custom Headers",id:"setting-custom-headers",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Setting a Custom Timeout",id:"setting-a-custom-timeout",level:3},{value:"Getting a Raw Response",id:"getting-a-raw-response",level:3},{value:"Skip <code>CSRF</code> Token Handling",id:"skip-csrf-token-handling",level:3}];function m(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The usage of the OpenAPI clients is similar to the clients for ",(0,s.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/odata/execute-request",children:"OData"}),".\nThe OpenAPI clients consist of at least one API, which in turn has at least one function.\nWhat APIs and functions are available in a client depends on the service specification."]}),"\n",(0,s.jsx)(t.h2,{id:"executing-a-request",children:"Executing a Request"}),"\n",(0,s.jsxs)(t.p,{children:["The request execution always follows the same structure.\nYou invoke a function of an API, optionally configure your request and then execute it against a ",(0,s.jsx)(t.a,{href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations",children:"destination"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const responseData = await MyApi.myFunction().execute(destination);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the example above we invoke the function ",(0,s.jsx)(t.code,{children:"myFunction"})," of the API ",(0,s.jsx)(t.code,{children:"MyApi"})," without further configuration and execute it against a destination named ",(0,s.jsx)(t.code,{children:"destination"}),".\nThe ",(0,s.jsx)(t.code,{children:"execute"})," method returns the response data directly as a ",(0,s.jsx)(t.code,{children:"Promise"}),", if available.\nResponses without response body, result in the return type ",(0,s.jsx)(t.code,{children:"Promise<void>"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can configure your request by ",(0,s.jsx)(t.a,{href:"#setting-custom-headers",children:"setting custom headers"}),", ",(0,s.jsx)(t.a,{href:"#setting-a-custom-request-configuration",children:"a custom request configuration"})," or ",(0,s.jsx)(t.a,{href:"#disabling-csrf-token-fetching",children:"disabling CSRF token fetching"}),".\nIf you need more information than the response data, you can also ",(0,s.jsx)(t.a,{href:"#getting-a-raw-response",children:"get the raw response"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"passing-parameters",children:"Passing Parameters"}),"\n",(0,s.jsx)(t.p,{children:"Often, resources are accessible under paths that require path parameters and/or query parameters and write requests often send a request body to modify resources.\nThe clients generated by the SAP Cloud SDK OpenAPI generator require you to set the parameters that are mandatory and allow you to set those that are optional."}),"\n",(0,s.jsx)(t.h4,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,s.jsxs)(t.p,{children:["Path parameters are always mandatory.\nIf path parameters are present in the path pattern for a request, e.g. ",(0,s.jsx)(t.code,{children:"'/my-resource/{resourceId}'"}),", those are the first mandatory arguments in the generated function, e.g. ",(0,s.jsx)(t.code,{children:"MyApi.getMyResource(resourceId)"}),".\nThe types of the arguments depend on the specification.\nTheir names are always camel case and the order is determined by their occurrence in the path pattern."]}),"\n",(0,s.jsx)(t.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,s.jsxs)(t.p,{children:["Query parameters can be both mandatory and optional.\nIf query parameters for a certain API function exist, they are always the last argument of the function.\nQuery parameters are provided as an object, e.g. if you can set a ",(0,s.jsx)(t.code,{children:"limit"})," parameter, ",(0,s.jsx)(t.code,{children:"MyApi.getMyResource(resourceId, { limit: 10 })"}),".\nThe types of the parameters depend on the specification.\nTheir names are as specified in the original OpenAPI document."]}),"\n",(0,s.jsx)(t.h4,{id:"request-bodies",children:"Request Bodies"}),"\n",(0,s.jsxs)(t.p,{children:["Request bodies can be both mandatory and optional.\nThe according function argument is always ",(0,s.jsx)(t.code,{children:"body"})," and it is always between the path and query parameters, e.g. when the body is a simple object containing a title, ",(0,s.jsx)(t.code,{children:"MyApi.updateMyResource(resourceId, { title: 'My Title' }, { lang: 'en' })"}),".\nIf the request body is optional, you have to pass ",(0,s.jsx)(t.code,{children:"undefined"}),", e.g. ",(0,s.jsx)(t.code,{children:"MyApi.updateMyResource(resourceId, undefined, { lang: 'en' })"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"setting-custom-headers",children:"Setting Custom Headers"}),"\n",(0,s.jsxs)(t.p,{children:["The SAP Cloud SDK sets all mandatory headers by default.\nTo set additional headers or change the default values used in the headers, use the ",(0,s.jsx)(t.code,{children:"addCustomHeaders"})," method.\nYou can pass an object, where the key is the name of the header and the value, well the value."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"MyApi.myFunction()\n  .addCustomHeaders({\n    apikey: 'my-api-key'\n  })\n  .execute(destination);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Custom headers take precedence over default headers.\nThe example above can be used to execute requests against the sandbox systems of the SAP Business Accelerator Hub."}),"\n",(0,s.jsx)(t.h3,{id:"setting-a-custom-request-configuration",children:"Setting a Custom Request Configuration"}),"\n",(0,s.jsx)(o.Fg,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n"})}),"\n",(0,s.jsx)(o.V6,{}),"\n",(0,s.jsx)(t.h3,{id:"setting-a-custom-timeout",children:"Setting a Custom Timeout"}),"\n",(0,s.jsxs)(t.p,{children:["You can specify a timeout for the request via the ",(0,s.jsx)(t.code,{children:"timeout()"})," method on the request builder:"]}),"\n",(0,s.jsx)(i.A,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],children:(0,s.jsx)(a.A,{value:"major",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"MyApi.myFunction().timeout(1000).execute(destination);\n"})})})}),"\n",(0,s.jsxs)(t.p,{children:["The value is in milliseconds and the default value is 10000 (10 seconds)\nThis timeout applies to the request send to the target system given in the destination.\nIf a ",(0,s.jsx)(t.code,{children:"CSRF"})," token is fetched from the target system the timeout applies also to this call.\nNote that there is also a second timeout option on the destination fetch options.\nThis relates to the calls made to SAP BTP services like destination-service or XSUAA."]}),"\n",(0,s.jsx)(t.h3,{id:"getting-a-raw-response",children:"Getting a Raw Response"}),"\n",(0,s.jsx)(o.Ld,{}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n"})}),"\n",(0,s.jsx)(o.Wf,{}),"\n",(0,s.jsxs)(t.h3,{id:"skip-csrf-token-handling",children:["Skip ",(0,s.jsx)(t.code,{children:"CSRF"})," Token Handling"]}),"\n",(0,s.jsx)(o.W4,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const responseData = await MyApi.myFunction()\n  .skipCsrfTokenFetching()\n  .execute(destination);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2756:(e,t,n)=>{n.d(t,{Fg:()=>u,Ld:()=>l,V6:()=>d,W4:()=>m,Wf:()=>h});n(96540);var s=n(65858),r=n(76541),o=n(76244),a=n(77400),i=n(37658),c=n(74848);function u(){return(0,c.jsx)(s.default,{})}function d(){return(0,c.jsx)(r.default,{})}function l(){return(0,c.jsx)(o.default,{})}function h(){return(0,c.jsx)(a.default,{})}function m(){return(0,c.jsx)(i.default,{})}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(96540),r=n(34164),o=n(23104),a=n(56347),i=n(205),c=n(57485),u=n(31682),d=n(89466);function l(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return l(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,l]=p({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=u??f;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),l(e),x(e)}),[l,x,o]),tabValues:o}}var x=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==s&&(u(t),a(r))},l=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:l,onClick:d,...o,className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function w(e){const t=(0,x.A)();return(0,v.jsx)(b,{...e,children:l(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);