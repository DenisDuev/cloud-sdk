"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4546],{89625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"environments/code/kubernetes-on-premise","title":"kubernetes-on-premise","description":"Prerequisites","source":"@site/docs-js/environments/code/kubernetes-on-premise.mdx","sourceDirName":"environments/code","slug":"/environments/code/kubernetes-on-premise","permalink":"/cloud-sdk/docs/js/environments/code/kubernetes-on-premise","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/environments/code/kubernetes-on-premise.mdx","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(11470),i=n(19365);const l={},c=void 0,u={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Background Information",id:"background-information",level:3},{value:"Create a Kubernetes Resource",id:"create-a-kubernetes-resource",level:3},{value:"Executing Requests",id:"executing-requests",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["This guide assumes you have both the ",(0,s.jsx)(t.strong,{children:"Transparent Proxy"})," (version ",(0,s.jsx)(t.code,{children:">= 1.4.0"}),") and ",(0,s.jsx)(t.strong,{children:"Connectivity Proxy"})," (version ",(0,s.jsx)(t.code,{children:">= 2.11.0"}),") installed in your cluster.\nFor Kyma the Transparent Proxy is available as a module that can be enabled as described ",(0,s.jsx)(t.a,{href:"https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/transparent-proxy-in-kyma-environment",children:"here"}),".\nThe Connectivity Proxy can be installed as described ",(0,s.jsx)(t.a,{href:"https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/operations-via-helm",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"background-information",children:"Background Information"}),"\n",(0,s.jsx)(t.p,{children:"When using the Transparent Proxy your app performs requests against the Transparent Proxy without explicit authentication, relying on the secure network communication provided by Kyma via Istio.\nThe Transparent Proxy will obtain the relevant destination from the destination service and use it to forward the request via the Connectivity Proxy to the On-Premise system.\nConsequently, your app itself does not interact with destination or connectivity service at all and thus your application pods do not require bindings to these two services."}),"\n",(0,s.jsx)(t.p,{children:"Please note that the current implementation of the Transparent Proxy does not yet cover all use cases."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Constraints when using the Transparent Proxy"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Private Link not yet supported"}),"\n"]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["This approach is conceptually different from what you may be used to from a Cloud Foundry environment.\nThe official ",(0,s.jsx)(t.a,{href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/e661713ef7d14373b57e3e26b0b03b86.html",children:"documentation of the Transparent Proxy"})," gives more information on the architecture."]})}),"\n",(0,s.jsx)(t.h3,{id:"create-a-kubernetes-resource",children:"Create a Kubernetes Resource"}),"\n",(0,s.jsxs)(t.p,{children:["For the creation of the necessary Kubernetes Resources, please refer to our ",(0,s.jsx)(t.a,{href:"/docs/java/environments/kubernetes-kyma#create-a-kubernetes-resource",children:"Java documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"executing-requests",children:"Executing Requests"}),"\n",(0,s.jsx)(t.p,{children:"In your application you can now configure a destination to execute requests:"}),"\n",(0,s.jsxs)(o.A,{groupId:"dynamic-dest",defaultValue:"single",values:[{label:"Individual Destination",value:"single"},{label:"Dynamic Desitnations",value:"dynamic"}],children:[(0,s.jsx)(i.A,{value:"single",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n  registerDestination,\n  getTenantId,\n  retrieveJwt\n} from '@sap-cloud-sdk/connectivity';\n\nconst destination = {\n  name: 'registered-destination',\n  url: 'http://my-destination.namespace/'\n  // for principal propagation make sure to set the forwardAuthToken flag to true:\n  // forwardAuthToken: true\n};\nawait registerDestination(destination, options);\n\nconst result = await myEntityApi\n  .requestBuilder()\n  .getAll()\n  // for a subscriber tenant make sure to send the tenant header:\n  // .addCustomHeaders({ 'X-Tenant-Id': getTenantId(retrieveJwt(request)) })\n  .execute({ destinationName: 'registered-destination' });\n// for principal propagation make sure the send the auth token:\n// .execute({ destinationName: 'registered-destination', jwt: retrieveJwt(request) });\n"})})}),(0,s.jsx)(i.A,{value:"dynamic",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n  registerDestination,\n  getTenantId,\n  retrieveJwt\n} from '@sap-cloud-sdk/connectivity';\n\nconst destination = {\n  name: 'registered-destination',\n  url: 'http://dynamic-destination.namespace/'\n  // for principal propagation make sure to set the forwardAuthToken flag to true:\n  // forwardAuthToken: true\n};\nawait registerDestination(destination, options);\n\nconst result = await myEntityApi\n  .requestBuilder()\n  .getAll()\n  .addCustomHeaders({ 'X-Destination-Name': '<CF-DESTINATION-NAME>' })\n  // for a subscriber tenant make sure to send the tenant header:\n  // .addCustomHeaders({ 'X-Tenant-Id': getTenantId(retrieveJwt(request)) })\n  .execute({ destinationName: 'registered-destination' });\n// for principal propagation make sure the send the auth token:\n// .execute({ destinationName: 'registered-destination', jwt: retrieveJwt(request) });\n"})})})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Replace ",(0,s.jsx)(t.code,{children:"namespace"})," in the URL with the namespace you installed the Transparent Proxy into."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The code above shows an example how you can then use the ",(0,s.jsx)(t.code,{children:"destination"})," object to perform an OData request against the system."]}),"\n",(0,s.jsx)(t.admonition,{title:"Connecting to Cloud systems",type:"tip",children:(0,s.jsxs)(t.p,{children:["The above approach is not limited to destinations of proxy type ",(0,s.jsx)(t.code,{children:"ON_PREMISE"}),", ",(0,s.jsx)(t.code,{children:"INTERNET"})," destinations are supported as well."]})}),"\n",(0,s.jsx)(t.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(t.p,{children:"When using proxy servers it can be difficult to troubleshoot issues as it is often not obvious where exactly the error occurred.\nFor example, with the Transparent Proxy errors might occur on the target system (e.g. OData service), the Destination Service or the Transparent Proxy itself."}),"\n",(0,s.jsx)(t.p,{children:"To make troubleshooting easier the Transparent Proxy adds additional response headers to provide more information about where an error occurred.\nFor the above example of executing OData requests you can access the response headers as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const result = await myEntityApi\n  .requestBuilder()\n  .getAll()\n  .execute('registered-destination')\n  .catch(err => {\n    console.error('Error Headers:', err.rootCause?.response?.headers);\n  });\n"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"List of headers added by the Transparent Proxy"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"X-Error-Origin"})," - the source of the error"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"X-Proxy-Server"})," - the proxy server (Transparent Proxy)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"X-Error-Message"})," - thorough error message"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"X-Error-Internal-Code"})," - set only when the source of the error is the XSUAA or Destination service.\nThe value is the HTTP code returned from one of these services."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"X-Request-Id"})," is sent with the response in all requests, both successful and failed"]}),"\n"]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(34164),a=n(23104),o=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);