"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905)),r=n(44996),a=n(50941);const s={id:"on-premise",title:"On-Premise Connectivity",sidebar_label:"On-Premise Systems",description:"How to connect to SAP S/4HANA On-Premise systems using the SAP Cloud SDK",keywords:["sap","cloud","sdk","on-premise","connectivity","JavaScript","TypeScript"]},c=void 0,l={unversionedId:"features/connectivity/on-premise",id:"version-v2/features/connectivity/on-premise",title:"On-Premise Connectivity",description:"How to connect to SAP S/4HANA On-Premise systems using the SAP Cloud SDK",source:"@site/docs-js_versioned_docs/version-v2/features/connectivity/on-premise.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/on-premise",permalink:"/cloud-sdk/docs/js/v2/features/connectivity/on-premise",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/connectivity/on-premise.mdx",tags:[],version:"v2",frontMatter:{id:"on-premise",title:"On-Premise Connectivity",sidebar_label:"On-Premise Systems",description:"How to connect to SAP S/4HANA On-Premise systems using the SAP Cloud SDK",keywords:["sap","cloud","sdk","on-premise","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Perform HTTP Requests",permalink:"/cloud-sdk/docs/js/v2/features/connectivity/http-client"},next:{title:"Overview",permalink:"/cloud-sdk/docs/js/v2/features/openapi/overview"}},p={},d=[{value:"Why On-Premise Systems Are Different",id:"why-on-premise-systems-are-different",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Connectivity Service",id:"connectivity-service",level:3},{value:"Principal Propagation",id:"principal-propagation",level:3},{value:"Multiple Cloud Connectors",id:"multiple-cloud-connectors",level:3}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-on-premise-systems-are-different"},"Why On-Premise Systems Are Different"),(0,i.kt)("p",null,"SAP S/4HANA On-Premise systems are located within a company's internal network.\nThey are not exposed to the internet.\nThe SAP Cloud SDK provides helpful features to allow connecting to on-premise systems."),(0,i.kt)("p",null,"Since this isolation contradicts modern requirements of data availability, SAP has introduced the ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector"},"Cloud Connector"),".\nThe Cloud Connector works like a reverse proxy, opening a connection between some allowlisted service endpoints of the on-premise system and the connected Cloud Foundry account.\nOnly applications running in the connected Cloud Foundry account can access the services.\nApplications that are supposed to access on-premise systems need a binding to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudfoundry.org/the-foundry/sap-cloud-platform-service-connectivity/"},"connectivity service"),"."),(0,i.kt)(a.Z,{alt:"On Premise Connectivity",sources:{light:(0,r.Z)("img/on-premise-connectivity_light.svg"),dark:(0,r.Z)("img/on-premise-connectivity_dark.svg")},className:"center",width:"100%",mdxType:"ThemedImage"}),(0,i.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("h3",{id:"connectivity-service"},"Connectivity Service"),(0,i.kt)("p",null,"As a first step, the SAP Cloud SDK ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations"},"looks up the destination"),".\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy Type")," of the destination is ",(0,i.kt)("inlineCode",{parentName:"p"},"OnPremise")," the SAP Cloud SDK will try to establish a connection via the Cloud Connector."),(0,i.kt)("p",null,"As mentioned above, the application needs a service binding to the connectivity service.\nA service binding leads to client credentials in the ",(0,i.kt)("inlineCode",{parentName:"p"},"VCAP")," environment variable.\nThe environment variables are accessible for the application at runtime.\nThe SAP Cloud SDK uses the client credentials and if given the tenant id of the JWT to obtain a ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/8d8be6a74e4e49589a546c02ee193741/latest/en-US/f1eff1dd7907469491989b3a36e6a7c6.html"},"client credentials grant."),"\nIf multiple connectivity services bindings exist, the SAP Cloud SDK uses the first entry per default."),(0,i.kt)("p",null,"The SAP Cloud SDK takes the client grant to call the connectivity service and receives the host, password, and authorization of the connectivity proxy.\nThen the SAP Cloud SDK creates an HTTP agent considering this proxy and the necessary ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy-Authorization")," headers.\nThe proxy is the entry point to the Cloud Connector instance connected to the account.\nThe proxy is only reachable from the Cloud Foundry space, so you cannot use that flow for applications running outside of Cloud Foundry.\nFor quick local test purposes, a deployment to Cloud Foundry is tedious and the following workarounds are possible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v2/guides/bas"},"SAP Business Application Studio")," has some built-in functionality to connect to Cloud Foundry."),(0,i.kt)("li",{parentName:"ul"},"If you are in a VPN from where the on-premise system is reachable, use an ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations"},"environment destination")," to access the system directly."),(0,i.kt)("li",{parentName:"ul"},"You can also use an existing application with a bound connectivity service as an ssh tunnel:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable ssh for the application as described ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cloudfoundry.org/devguide/deploy-apps/ssh-apps.html"},"here")),(0,i.kt)("li",{parentName:"ul"},"Open an ssh tunnel with forwarding via the ",(0,i.kt)("inlineCode",{parentName:"li"}," cf ssh MY-APP -L LOCAL-HOST:LOCAL-PORT:REMOTE-HOST:REMOTE-HOST-PORT")," command.\nUse as remote host and port the ",(0,i.kt)("inlineCode",{parentName:"li"},"onpremise_proxy_host")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"onpremise_proxy_port")," values from the VCAP service variables e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"connectivityproxy.internal.cf.eu10.hana.ondemand.com")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"20003"),".\nFor the localhost and port use the localhost and some free port e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:8081"),"."),(0,i.kt)("li",{parentName:"ul"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"onpremise_proxy_host")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"onpremise_proxy_port")," in your locally used ",(0,i.kt)("inlineCode",{parentName:"li"},"VCAP_SERVICE")," variables with ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")," and the free port you choose.")))),(0,i.kt)("p",null,"The final destination in the productive scenario containing the ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/connectivity/proxies"},"proxy information")," will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\nurl: "https://my.onPremise.System.url.com",\nheaders: {...},    //contains authorization headers for the SAP S/4HANA system\nproxyConfiguration?: {\n  host: "connectivity.service.proxy.host"\n  port: 1234\n  protocol: "http"\n  headers?: {\n      Proxy-Authorization: "AuthHeaderForTheProxy"\n    };,\n  }\n}\n')),(0,i.kt)("p",null,"It will be used by the ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/connectivity/http-client"},"HTTP client")," of the SAP Cloud SDK to execute the request."),(0,i.kt)("h3",{id:"principal-propagation"},"Principal Propagation"),(0,i.kt)("p",null,"In case the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication")," property on the destination is ",(0,i.kt)("inlineCode",{parentName:"p"},"PrincipalPropagation")," the SAP Cloud SDK adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"SAP-Connectivity-Authentication")," header to the request.\nThe header contains user information included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"JWT")," and enables user propagation from the cloud application to the SAP S/4HANA system."),(0,i.kt)("h3",{id:"multiple-cloud-connectors"},"Multiple Cloud Connectors"),(0,i.kt)("p",null,"If you have multiple Cloud Connectors connected to your account, the ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationId")," defines which one of these to use for the request.\nIn case the destination contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationId")," property, the SAP Cloud SDK adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"SAP-Connectivity-SCC-Location_ID")," header to the request."))}m.isMDXComponent=!0}}]);