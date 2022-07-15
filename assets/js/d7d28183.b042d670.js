"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6743],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(5488),l=n(5162),s=["components"],c={title:"Destination Cache and Isolation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destination Cache",description:"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},u=void 0,d={unversionedId:"features/connectivity/destination-cache-isolation",id:"features/connectivity/destination-cache-isolation",title:"Destination Cache and Isolation",description:"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.",source:"@site/docs-js/features/connectivity/destination-cache-isolation.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/destination-cache-isolation",permalink:"/cloud-sdk/docs/js/features/connectivity/destination-cache-isolation",draft:!1,tags:[],version:"current",frontMatter:{title:"Destination Cache and Isolation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destination Cache",description:"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Destinations",permalink:"/cloud-sdk/docs/js/features/connectivity/destination"},next:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"}},p={},h=[{value:"Destination-Service Cache",id:"destination-service-cache",level:2},{value:"Custom Destination-Service Cache",id:"custom-destination-service-cache",level:3},{value:"Register-Destination Cache",id:"register-destination-cache",level:2}],m={toc:h};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The SAP Cloud SDK provides the option to cache destinations for efficiency reasons.\nIf a destination is stored in the cache the question of isolation arises.\nShould the destination be cached for all users?\nThis guide explains the different options you have regarding the destination cache of the SAP Cloud SDK.\nThe general destination lookup is described in ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"this guide"),"."),(0,o.kt)("h2",{id:"destination-service-cache"},"Destination-Service Cache"),(0,o.kt)("p",null,"When you request a destination from the destination-service you can improve performance by enabling the cache.\nThis reduces the number of calls to the destination service.\nAll the discussed options apply to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getDestination()")," methods of the SAP Cloud SDK.\nThe destination caching is disabled by default and you switch it on by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCache")," flag:"),(0,o.kt)(r.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({destinationName: 'myDestination', jwt: 'yourJWT', useCache: true})\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({ destinationName: 'myDestination', jwt: 'yourJWT' }, { useCache: true })\n")))),(0,o.kt)("p",null,"A cached destination is stored for 5 minutes in the cache.\nThe SAP Cloud SDK tries to set the proper isolation strategy for the destination automatically.\nThere are two options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tenant"),": The destination is cached for a tenant and different users will hit the same cache entry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UserTenant"),": The destination is cached for each user of a tenant separately.")),(0,o.kt)("p",null,"The SAP Cloud SDK sets the isolation based on the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT"),": Isolation is ",(0,o.kt)("inlineCode",{parentName:"li"},"Tenant")," and value for the tenant is the provider account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JWT")," without ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,o.kt)("inlineCode",{parentName:"li"},"Tenant")," and the value for the tenant is the ",(0,o.kt)("inlineCode",{parentName:"li"},"zid")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JWT")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,o.kt)("inlineCode",{parentName:"li"},"TenantUser")," and values are taken from ",(0,o.kt)("inlineCode",{parentName:"li"},"zid")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),".")),(0,o.kt)("p",null,"This is a safe choice ensuring that you do not run into privilege escalation due to caching.\nThe first two cases are typical for user-independent authentication flows.\nExamples of such a flow are ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicAuthentication"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientCertificateAuthentication")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2ClientCredentials"),"."),(0,o.kt)("p",null,"There are cases where the choice made by the SAP Cloud SDK is not optimal.\nAssume you have a multi-tenant scenario and you need to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," to obtain the destination for the right tenant.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," but the destination flow is user",(0,o.kt)("span",{class:"x x-first x-last"},"-"),"independent.",(0,o.kt)("br",{parentName:"p"}),"\n","The SAP Cloud SDK would use isolation ",(0,o.kt)("inlineCode",{parentName:"p"},"UserTenant"),", although ",(0,o.kt)("inlineCode",{parentName:"p"},"Tenant")," would be sufficient.\nIn such a case you can manually enforce weaker isolation:"),(0,o.kt)(r.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({\n  destinationName: 'myDestination',\n  jwt: 'yourJWT',\n  isolationStrategy: IsolationStrategy.Tenant\n})\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({\n  destinationName: 'myDestination',\n  jwt: 'yourJWT'\n},{\n  useCache: true,\n  isolationStrategy: IsolationStrategy.Tenant\n})\n")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be very careful with this option.\nYou should know what you're doing when manually downgrading the isolation strategy from the maximally possible ",(0,o.kt)("inlineCode",{parentName:"p"},"TenanUser")," level.\nAn erroneous configuration can lead to severe privilege escalation between users.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In version 1.X of the SAP Cloud SDK the isolation strategy is always TenantUser per default.\nYou need to set it manually.\nYou need to activate caching explicitly with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCache")," option, even if you pass an isolation strategy.")),(0,o.kt)("h3",{id:"custom-destination-service-cache"},"Custom Destination-Service Cache"),(0,o.kt)("p",null,"When the cache option is enabled, the SAP Cloud SDK stores the fetched destinations in an in-memory cache.\nHowever, in certain cases, a persistent or distributed cache may be more suitable according to your application architecture.\nFor such cases where different cache storage is desired, the SAP Cloud SDK allows you to plug in your implementation for the destination cache."),(0,o.kt)("p",null,"To create your custom destination cache provider, implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationCacheInterface")," interface shown below and define the ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"clear")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface DestinationCacheInterface {\n  hasKey(key: string): Promise<boolean>;\n  get(key: string | undefined): Promise<Destination | undefined>;\n  set(key: string | undefined, item: CacheEntry<Destination>): Promise<void>;\n  clear(): Promise<void>;\n}\n")),(0,o.kt)("p",null,"Note that each item in the cache is represented using the type ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheEntry<T>")," which defines two properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry"),", the item you want to store, and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expires"),", the expiration time for an individual cache item. This is optional.")),(0,o.kt)("p",null,"Once you have implemented your custom cache provider, you can tell the SAP Cloud SDK to use it in place of the default one.\nTo do this, call the method ",(0,o.kt)("inlineCode",{parentName:"p"},"setDestinationCache")," at the start of your application code, i.e., before the first calls to either the ",(0,o.kt)("inlineCode",{parentName:"p"},"getDestination")," or the generic client's ",(0,o.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," methods, and pass your cache provider instance as an argument to this method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class CustomCacheProvide implements DestinationCacheInterface {\n  // your custom implementation\n}\n\nsetDestinationCache(new CustomCacheProvider());\n")),(0,o.kt)("p",null,"All subsequent calls to fetch destinations will use the custom cache."),(0,o.kt)("h2",{id:"register-destination-cache"},"Register-Destination Cache"),(0,o.kt)("p",null,"Version 2.0 introduced the ",(0,o.kt)("inlineCode",{parentName:"p"},"registerDestination()")," method, which is like a manual cache for destinations.\nWe explain the usage of this method in the guide on ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"destination lookup"),".\nThe method behaves similarly to the destination-service cache discussed above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { registerDestination } from '@sap-cloud-sdk/connectivity';\n\nconst destination = {\n  name: 'FORWARD-DESTINATION',\n  url: 'https://mys4hana.com'\n};\n\nregisterDestination(destination, { jwt: 'yourJWT' });\n")),(0,o.kt)("p",null,"The isolation strategy is automatically detected and applied based on the given ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT"),": Isolation is ",(0,o.kt)("inlineCode",{parentName:"li"},"Tenant")," and value for the tenant is the provider account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JWT")," without ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,o.kt)("inlineCode",{parentName:"li"},"Tenant")," and the value for the tenant is the ",(0,o.kt)("inlineCode",{parentName:"li"},"zid")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JWT")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,o.kt)("inlineCode",{parentName:"li"},"TenantUser")," and values are taken from ",(0,o.kt)("inlineCode",{parentName:"li"},"zid")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),".")),(0,o.kt)("p",null,"You can override the automatically detected isolation strategy.\nThis could be necessary if you want to register a destination that cares only about ",(0,o.kt)("inlineCode",{parentName:"p"},"Tenant")," while your ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," contains both a ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," which would make it ",(0,o.kt)("inlineCode",{parentName:"p"},"TenantUser")," by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"registerDestination(destination, {\n  jwt: 'yourJWT',\n  isolationStrategy: IsolationStrategy.Tenant\n});\n")))}f.isMDXComponent=!0},5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(6010),o="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),i=n(7294),o=n(6010),r=n(2389),l=n(7392),s=n(7094),c=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,r=e.lazy,p=e.block,h=e.defaultValue,m=e.values,f=e.groupId,k=e.className,y=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===h?h:null!=(t=null!=h?h:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==C&&!v.some((function(e){return e.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),g=N.tabGroupChoices,T=N.setTabGroupChoices,w=(0,i.useState)(C),D=w[0],S=w[1],x=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=g[f];null!=I&&I!==D&&v.some((function(e){return e.value===I}))&&S(I)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==D&&(j(t),S(a),null!=f&&T(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=x.indexOf(e.currentTarget)+1;n=null!=(a=x[i])?a:x[0];break;case"ArrowLeft":var o,r=x.indexOf(e.currentTarget)-1;n=null!=(o=x[r])?o:x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(y.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function h(e){var t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);