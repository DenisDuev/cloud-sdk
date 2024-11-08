"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[110],{68044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"features/connectivity/destination-cache","title":"Destination Cache and Isolation","description":"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.","source":"@site/docs-js_versioned_docs/version-v1/features/connectivity/destination-cache-isolation.mdx","sourceDirName":"features/connectivity","slug":"/features/connectivity/destination-cache","permalink":"/cloud-sdk/docs/js/v1/features/connectivity/destination-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/connectivity/destination-cache-isolation.mdx","tags":[],"version":"v1","frontMatter":{"id":"destination-cache","title":"Destination Cache and Isolation","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Destination Cache","description":"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.","keywords":["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},"sidebar":"docsJsSidebar","previous":{"title":"Destinations","permalink":"/cloud-sdk/docs/js/v1/features/connectivity/destinations"},"next":{"title":"Proxies","permalink":"/cloud-sdk/docs/js/v1/features/connectivity/proxies"}}');var s=t(74848),o=t(28453);const a={id:"destination-cache",title:"Destination Cache and Isolation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destination Cache",description:"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},c=void 0,d={},r=[{value:"Destination-Service Cache",id:"destination-service-cache",level:2},{value:"Custom Destination-Service Cache",id:"custom-destination-service-cache",level:3},{value:"Register-Destination Cache",id:"register-destination-cache",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The SAP Cloud SDK provides the option to cache destinations for efficiency reasons.\nIf a destination is stored in the cache the question of isolation arises.\nShould the destination be cached for all users?\nThis guide explains the different options you have regarding the destination cache of the SAP Cloud SDK.\nThe general destination lookup is described in ",(0,s.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/features/connectivity/destinations",children:"this guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"destination-service-cache",children:"Destination-Service Cache"}),"\n",(0,s.jsxs)(n.p,{children:["When you request a destination from the destination-service you can improve performance by enabling the cache.\nThis reduces the number of calls to the destination service.\nAll the discussed options apply to the ",(0,s.jsx)(n.code,{children:"execute()"})," and ",(0,s.jsx)(n.code,{children:"getDestination()"})," methods of the SAP Cloud SDK.\nThe destination caching is disabled by default and you switch it on by the ",(0,s.jsx)(n.code,{children:"useCache"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:".execute({ destinationName: 'myDestination', jwt: '<JWT>' }, { useCache: true })\n"})}),"\n",(0,s.jsx)(n.p,{children:"A cached destination is stored for 5 minutes in the cache.\nThe SAP Cloud SDK tries to set the proper isolation strategy for the destination automatically.\nThere are two options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Tenant"}),": The destination is cached for a tenant and different users will hit the same cache entry."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UserTenant"}),": The destination is cached for each user of a tenant separately."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The SAP Cloud SDK sets the isolation based on the provided ",(0,s.jsx)(n.code,{children:"JWT"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["No ",(0,s.jsx)(n.code,{children:"JWT"}),": Isolation is ",(0,s.jsx)(n.code,{children:"Tenant"})," and value for the tenant is the provider account."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JWT"})," without ",(0,s.jsx)(n.code,{children:"user_id"}),": Isolation is ",(0,s.jsx)(n.code,{children:"Tenant"})," and the value for the tenant is the ",(0,s.jsx)(n.code,{children:"zid"})," of the ",(0,s.jsx)(n.code,{children:"JWT"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JWT"})," with ",(0,s.jsx)(n.code,{children:"user_id"}),": Isolation is ",(0,s.jsx)(n.code,{children:"TenantUser"})," and values are taken from ",(0,s.jsx)(n.code,{children:"zid"})," and ",(0,s.jsx)(n.code,{children:"user_id"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is a safe choice ensuring that you do not run into privilege escalation due to caching.\nThe first two cases are typical for user-independent authentication flows.\nExamples of such a flow are ",(0,s.jsx)(n.code,{children:"BasicAuthentication"}),", ",(0,s.jsx)(n.code,{children:"ClientCertificateAuthentication"})," or ",(0,s.jsx)(n.code,{children:"OAuth2ClientCredentials"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["There are cases where the choice made by the SAP Cloud SDK is not optimal.\nAssume you have a multi-tenant scenario and you need to pass the ",(0,s.jsx)(n.code,{children:"JWT"})," to obtain the destination for the right tenant.\nThe ",(0,s.jsx)(n.code,{children:"JWT"})," contains a ",(0,s.jsx)(n.code,{children:"user_id"})," but the destination flow is user",(0,s.jsx)("span",{class:"x x-first x-last",children:"-"}),"independent.\nThe SAP Cloud SDK would use isolation ",(0,s.jsx)(n.code,{children:"UserTenant"}),", although ",(0,s.jsx)(n.code,{children:"Tenant"})," would be sufficient.\nIn such a case you can manually enforce weaker isolation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:".execute({\n  destinationName: 'myDestination',\n  jwt: 'yourJWT'\n},{\n  useCache: true,\n  isolationStrategy: IsolationStrategy.Tenant\n})\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Be very careful with this option.\nYou should know what you're doing when manually downgrading the isolation strategy from the maximally possible ",(0,s.jsx)(n.code,{children:"TenantUser"})," level.\nAn erroneous configuration can lead to severe privilege escalation between users."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In version 1.X of the SAP Cloud SDK the isolation strategy is always TenantUser per default.\nYou need to set it manually.\nYou need to activate caching explicitly with the ",(0,s.jsx)(n.code,{children:"useCache"})," option, even if you pass an isolation strategy."]})}),"\n",(0,s.jsx)(n.h3,{id:"custom-destination-service-cache",children:"Custom Destination-Service Cache"}),"\n",(0,s.jsx)(n.p,{children:"When the cache option is enabled, the SAP Cloud SDK stores the fetched destinations in an in-memory cache.\nHowever, in certain cases, a persistent or distributed cache may be more suitable according to your application architecture.\nFor such cases where different cache storage is desired, the SAP Cloud SDK allows you to plug in your implementation for the destination cache."}),"\n",(0,s.jsxs)(n.p,{children:["To create your custom destination cache provider, implement the ",(0,s.jsx)(n.code,{children:"DestinationCacheInterface"})," interface shown below and define the ",(0,s.jsx)(n.code,{children:"get"}),", ",(0,s.jsx)(n.code,{children:"set"}),", and ",(0,s.jsx)(n.code,{children:"clear"})," methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface DestinationCacheInterface {\n  hasKey(key: string): Promise<boolean>;\n  get(key: string | undefined): Promise<Destination | undefined>;\n  set(key: string | undefined, item: CacheEntry<Destination>): Promise<void>;\n  clear(): Promise<void>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that each item in the cache is represented using the type ",(0,s.jsx)(n.code,{children:"CacheEntry<T>"})," which defines two properties:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"entry"}),", the item you want to store, and"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expires"}),", the expiration time for an individual cache item, this is optional."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once you have implemented your custom cache provider, you can tell the SAP Cloud SDK to use it in place of the default one.\nTo do this, call the method ",(0,s.jsx)(n.code,{children:"setDestinationCache"})," at the start of your application code, i.e., before the first calls to either the ",(0,s.jsx)(n.code,{children:"getDestination"})," or the generic client's ",(0,s.jsx)(n.code,{children:"executeHttpRequest"})," methods, and pass your cache provider instance as an argument to this method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"class CustomCacheProvide implements DestinationCacheInterface {\n  // your custom implementation\n}\n\nsetDestinationCache(new CustomCacheProvider());\n"})}),"\n",(0,s.jsx)(n.p,{children:"All subsequent calls to fetch destinations will use the custom cache."}),"\n",(0,s.jsx)(n.h2,{id:"register-destination-cache",children:"Register-Destination Cache"}),"\n",(0,s.jsxs)(n.p,{children:["Version 2.0 introduced the ",(0,s.jsx)(n.code,{children:"registerDestination()"})," method, which is like a manual cache for destinations.\nWe explain the usage of this method in the guide on ",(0,s.jsx)(n.a,{href:"/cloud-sdk/docs/js/v1/features/connectivity/destinations",children:"destination lookup"}),".\nThe method behaves similarly to the destination-service cache discussed above."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { registerDestination } from '@sap-cloud-sdk/core';\n\nconst destination = {\n  name: 'FORWARD-DESTINATION',\n  url: 'https://mys4hana.com'\n};\n\nregisterDestination(destination, { jwt: 'yourJWT' });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The isolation strategy is automatically detected and applied based on the given ",(0,s.jsx)(n.code,{children:"JWT"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["No ",(0,s.jsx)(n.code,{children:"JWT"}),": Isolation is ",(0,s.jsx)(n.code,{children:"Tenant"})," and value for the tenant is the provider account."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JWT"})," without ",(0,s.jsx)(n.code,{children:"user_id"}),": Isolation is ",(0,s.jsx)(n.code,{children:"Tenant"})," and the value for the tenant is the ",(0,s.jsx)(n.code,{children:"zid"})," of the ",(0,s.jsx)(n.code,{children:"JWT"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JWT"})," with ",(0,s.jsx)(n.code,{children:"user_id"}),": Isolation is ",(0,s.jsx)(n.code,{children:"TenantUser"})," and values are taken from ",(0,s.jsx)(n.code,{children:"zid"})," and ",(0,s.jsx)(n.code,{children:"user_id"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can override the automatically detected isolation strategy.\nThis could be necessary if you want to register a destination that cares only about ",(0,s.jsx)(n.code,{children:"Tenant"})," while your ",(0,s.jsx)(n.code,{children:"JWT"})," contains both a ",(0,s.jsx)(n.code,{children:"tenant"})," and a ",(0,s.jsx)(n.code,{children:"user_id"})," which would make it ",(0,s.jsx)(n.code,{children:"TenantUser"})," by default."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"registerDestination(destination, {\n  jwt: 'yourJWT',\n  isolationStrategy: IsolationStrategy.Tenant\n});\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);