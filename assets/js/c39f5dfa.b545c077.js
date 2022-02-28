"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4578,450,6355,9197,8847,2262],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},35364:function(e,t,a){a.d(t,{Ol:function(){return l},nc:function(){return d},WD:function(){return c},zl:function(){return p},Xc:function(){return m}});var n=a(67294),r=a(9037),i=a(75847),o=a(82182),s=a(47406),u=a(75668);function l(){return n.createElement(r.default,null)}function d(){return n.createElement(i.default,null)}function c(){return n.createElement(o.default,null)}function p(){return n.createElement(s.default,null)}function m(){return n.createElement(u.default,null)}},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),i=a(72389),o=a(29548),s=a(86010),u="tabItem_LplD";function l(e){var t,a,i,l=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),b=g.tabGroupChoices,N=g.setTabGroupChoices,q=(0,r.useState)(k),w=q[0],x=q[1],C=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=b[m];null!=S&&S!==w&&y.some((function(e){return e.value===S}))&&x(S)}var j=function(e){var t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==w&&(T(t),x(n),null!=m&&N(m,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:j,onClick:j},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,i.Z)();return r.createElement(l,(0,n.Z)({key:String(t)},e))}},75847:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/custom-request-config-note",id:"js/features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency we do not allow to override the following options:",source:"@site/docs/js/features/common/custom-request-config-note.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config-note",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config-note.mdx",tags:[],version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1646051247,formattedLastUpdatedAt:"2/28/2022",frontMatter:{}},d=[],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To ensure API consistency we do not allow to override the following options:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"))))))}p.isMDXComponent=!0},9037:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/custom-request-config",id:"js/features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs/js/features/common/custom-request-config.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config.mdx",tags:[],version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1646051247,formattedLastUpdatedAt:"2/28/2022",frontMatter:{}},d=[],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most of the request options like ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"headers"),", and others for you.\nIn certain cases passing additional options to axios might be required.\nTo achieve this you can provide a custom request configuration that will be passed down to axios.\nThe example below demonstrates how to configure the response data type, which is typically used when downloading a file from an endpoint."))}p.isMDXComponent=!0},82182:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/execute-raw-overview",id:"js/features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute method, you can execute a request using the executeRaw method.",source:"@site/docs/js/features/common/execute-raw-overview.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-overview.mdx",tags:[],version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1646051247,formattedLastUpdatedAt:"2/28/2022",frontMatter:{}},d=[],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method, you can execute a request using the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeRaw")," method.\nIt returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponse"),", which contains the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," - the status code of the response"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")," - the response headers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," - the response body"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request")," - the original request")))}p.isMDXComponent=!0},47406:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/execute-raw-use-cases",id:"js/features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs/js/features/common/execute-raw-use-cases.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-use-cases.mdx",tags:[],version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1646051247,formattedLastUpdatedAt:"2/28/2022",frontMatter:{}},d=[],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Typical cases, where you might need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"executeRaw")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,i.kt)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method or request headers."),(0,i.kt)("li",{parentName:"ul"},"The function ",(0,i.kt)("inlineCode",{parentName:"li"},"execute")," is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,i.kt)("li",{parentName:"ul"},"Debugging purposes.")))}p.isMDXComponent=!0},75668:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},u=void 0,l={unversionedId:"js/features/common/skip-csrf-token",id:"js/features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-get requests.",source:"@site/docs/js/features/common/skip-csrf-token.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/features/common/skip-csrf-token",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/skip-csrf-token.mdx",tags:[],version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1646051247,formattedLastUpdatedAt:"2/28/2022",frontMatter:{}},d=[],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For some services, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-get requests.\nTherefore, skipping fetching the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as performance improvement.\nYou can disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using ",(0,i.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," like below:"))}p.isMDXComponent=!0},67020:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=(a(44996),a(9877)),s=a(58215),u=a(35364),l=["components"],d={title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},c=void 0,p={unversionedId:"js/features/odata/execute-odata-request",id:"js/features/odata/execute-odata-request",title:"Executing a Request Using a Generated OData v2/v4 Client",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",source:"@site/docs/js/features/odata/execute-odata-request.mdx",sourceDirName:"js/features/odata",slug:"/js/features/odata/execute-odata-request",permalink:"/cloud-sdk/docs/js/features/odata/execute-odata-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/execute-odata-request.mdx",tags:[],version:"current",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1646051247,formattedLastUpdatedAt:"2/28/2022",frontMatter:{title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},sidebar:"someSidebar",previous:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"},next:{title:"OData v2 Client API",permalink:"/cloud-sdk/docs/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript"}},m=[{value:"General Request Structure",id:"general-request-structure",children:[{value:"Setting Custom Request Headers",id:"setting-custom-request-headers",children:[],level:3},{value:"Setting Custom Query Parameters",id:"setting-custom-query-parameters",children:[],level:3},{value:"Setting a Custom Service Path",id:"setting-a-custom-service-path",children:[],level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",children:[],level:3},{value:"Appending Paths to the Request URL Built by the Request Builders",id:"appending-paths-to-the-request-url-built-by-the-request-builders",children:[],level:3},{value:"Getting the Raw Response and the Original Request",id:"getting-the-raw-response-and-the-original-request",children:[],level:3}],level:2}],f={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you have generated a typed OData client using the SAP Cloud SDK generator or if you decided to use one of the pregenerated OData clients for SAP S/4HANA, you can use your OData client to execute HTTP requests against your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service, that we refer to as ",(0,i.kt)("em",{parentName:"p"},"entities"),"."),(0,i.kt)("p",null,"To request an entity set, entities offer a fluent API."),(0,i.kt)("h2",{id:"general-request-structure"},"General Request Structure"),(0,i.kt)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { myEntityService } from './outputDir/my-service';\n\nconst { myEntityApi } = myEntityService();\nreturn myEntityApi.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),(0,i.kt)("p",null,"If you are using an OData client, that you generated on your own, import the service function, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"myEntityService"),", from the generated service directory (",(0,i.kt)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",(0,i.kt)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",(0,i.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),(0,i.kt)("p",null,"If you are using one of the pregenerated OData clients, import it from the npm package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { pregeneratedEntityService } from '@sap/cloud-sdk-vdm-pregenerated-service';\n")),(0,i.kt)("p",null,"Destructure the service to get the API of the entity you want to make requests for - ",(0,i.kt)("inlineCode",{parentName:"p"},"myEntityApi")," in the example above."),(0,i.kt)("p",null,"Every entity API has a ",(0,i.kt)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"myEntityApi.requestBuilder().getAll()")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," request type.")),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { MyEntity } from './outputDir/my-service';\n\nreturn MyEntity.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),(0,i.kt)("p",null,"If you are using an OData client, that you generated on your own, import an entity from the generated service directory (",(0,i.kt)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",(0,i.kt)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",(0,i.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),(0,i.kt)("p",null,"If you are using one of the pregenerated OData clients, import it from the npm package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { PregeneratedEntity } from '@sap/cloud-sdk-vdm-pregenerated-service';\n")),(0,i.kt)("p",null,"Every entity has a ",(0,i.kt)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"MyEntity.requestBuilder().getAll()")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," request type."))),(0,i.kt)("p",null,"See the list below for details on all available request types (denoted by ",(0,i.kt)("inlineCode",{parentName:"p"},"requestType")," in the example above):"),(0,i.kt)(o.Z,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"v2",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,i.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,i.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#create-request-builder"},(0,i.kt)("code",null,"create"))," ","Build requests to create entities (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#update-request-builder"},(0,i.kt)("code",null,"update"))," ","Build requests to update entities (OData v2)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,i.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v2)")),(0,i.kt)(s.Z,{value:"v4",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,i.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,i.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#create-request-builder"},(0,i.kt)("code",null,"create"))," ","Build requests to create entities (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#update-request-builder"},(0,i.kt)("code",null,"update"))," ","Build requests to update entities (OData v4)"),(0,i.kt)("li",null,(0,i.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,i.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v4)"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some entities do not support all the request types, which in turn won't be available through the API."))),(0,i.kt)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above).\nAll requests can be configured by setting ",(0,i.kt)("a",{parentName:"p",href:"#setting-custom-request-headers"},"custom request headers"),", ",(0,i.kt)("a",{parentName:"p",href:"#setting-custom-query-parameters"},"custom query parameters")," and a ",(0,i.kt)("a",{parentName:"p",href:"#setting-a-custom-service-path"},"custom service path"),"."),(0,i.kt)("p",null,"Each request type has additional request specific configuration options, e.g. creating an entity ",(0,i.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity for ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," requests, ETag handling for ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," requests, as well as set operations for ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," requests and selecting properties for ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getByKey")," requests."),(0,i.kt)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution.\nOnce the request is configured use the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," function and pass a ",(0,i.kt)("a",{parentName:"p",href:"../connectivity/destination"},"destination")," to it.\nThis will automatically construct your request URL and headers, execute the request, and return a typed response if applicable."),(0,i.kt)("h3",{id:"setting-custom-request-headers"},"Setting Custom Request Headers"),(0,i.kt)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request.\nYou can specify additional custom headers using the ",(0,i.kt)("inlineCode",{parentName:"p"},"addCustomHeaders")," function:"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n"))),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n")))),(0,i.kt)("p",null,"The keys and values of the passed object correspond with the header names and values.\nCustom headers take priority over automatically generated headers.\nAutomatically generated headers are sent with lowercase header names, custom headers keep the case they were set in.\nIn the example above we pass an ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey"),", which is necessary if you want to make use of the SAP API Business Hub sandbox."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Setting an ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do."))),(0,i.kt)("h3",{id:"setting-custom-query-parameters"},"Setting Custom Query Parameters"),(0,i.kt)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration.\nYou can add custom parameters by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"withCustomQueryParameters")," function.\nCustom query parameters take precedence over those created by the SAP Cloud SDK."),(0,i.kt)("p",null,"In the example below an additional query parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"language=en")," will be added to the request URL:"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n"))),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to set a query parameter in quotes (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),"."))),(0,i.kt)("h3",{id:"setting-a-custom-service-path"},"Setting a Custom Service Path"),(0,i.kt)("p",null,"If a service specification contains a specification for the ",(0,i.kt)("inlineCode",{parentName:"p"},"servicePath"),", the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",(0,i.kt)("inlineCode",{parentName:"p"},"'/sap/opus/data/sap/'")," for SAP S/4HANA services).\nWhen there is no such path defined in the specification, it can be manually set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"service-mapping.json"),".\nIt can also be adjusted per request by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"withCustomServicePath")," function:"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n"))),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")))),(0,i.kt)("p",null,"This will add the custom service path to your request.\nExecuting the example request above against a destination with URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com")," would result in a request against something like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/my/custom/service/path/MyEntity"),"."),(0,i.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,i.kt)(u.Ol,{mdxType:"CustomRequestConfig"}),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n"))),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")))),(0,i.kt)(u.nc,{mdxType:"CustomRequestConfigNote"}),(0,i.kt)("h3",{id:"appending-paths-to-the-request-url-built-by-the-request-builders"},"Appending Paths to the Request URL Built by the Request Builders"),(0,i.kt)("p",null,"Usually, our request builders construct the request URL for you automatically.\nHowever, for certain OData features like ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation properties"),", we do not yet provide a type-safe API that constructs the request path in a fully automated manner.\nFor that reason, we added a non-typed API to our request builders providing the capability to append additional path segments to the request URL.\nYou have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeRaw(destination)")," method to get results because we can't deserialize a response in a type-safe way."),(0,i.kt)("p",null,"The example below shows how to query a navigation property from a given entity."),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n"))),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n")))),(0,i.kt)("p",null,"It will build the request URL like below:\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/service-path/MyEntity(key='123')/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2?$format=json"),"\nwhere:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2")," is the additional path that you provide from the parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://my.s4-system.com/service-path/MyEntity(key='123')")," is the path of the original request URL built by the SAP Cloud SDK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$format=json")," is the query parameter.")),(0,i.kt)("h3",{id:"getting-the-raw-response-and-the-original-request"},"Getting the Raw Response and the Original Request"),(0,i.kt)(u.WD,{mdxType:"ExecuteRawOverview"}),(0,i.kt)("p",null,"Example:"),(0,i.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nconst httpResponse: HttpResponse = myEntityApi\n  .requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n"))),(0,i.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")))),(0,i.kt)(u.zl,{mdxType:"ExecuteRawUseCases"}),(0,i.kt)("ul",{style:{"margin-top":"-16px"}},(0,i.kt)("li",null,"In rare cases, when the response data cannot be deserialized. This can happen when function imports use an entity type as return type, and this entity type is shared by multiple ",(0,i.kt)("code",null,"EntitySet"),"s. Without further information, it is unclear which ",(0,i.kt)("code",null,"Entity")," should be deserialized. For those cases, you have to use ",(0,i.kt)("code",null,"executeRaw")," and use the ",(0,i.kt)("code",null,"deserialize")," function on the response data.")))}h.isMDXComponent=!0}}]);