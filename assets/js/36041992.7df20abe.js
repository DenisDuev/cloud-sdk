"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[732],{33368:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"overview-cloud-sdk","title":"About the SAP Cloud SDK","description":"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.","source":"@site/docs/about.mdx","sourceDirName":".","slug":"/overview-cloud-sdk","permalink":"/cloud-sdk/docs/overview/overview-cloud-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs/about.mdx","tags":[],"version":"current","frontMatter":{"id":"overview-cloud-sdk","title":"About the SAP Cloud SDK","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"About the SAP Cloud SDK","description":"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsCommonSidebar","next":{"title":"Feature Matrix","permalink":"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"}}');var s=o(74848),t=o(28453);o(86025);const l={id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},a=void 0,d={},r=[{value:"Introduction",id:"introduction",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"License",id:"license",level:2},{value:"Products Using the SAP Cloud SDK",id:"products-using-the-sap-cloud-sdk",level:2},{value:"SAP Cloud Application Programming Model",id:"sap-cloud-application-programming-model",level:2},{value:"SAP Cloud SDK &amp; SAP Cloud Application Programming Model",id:"sap-cloud-sdk--sap-cloud-application-programming-model",level:3}];function c(e){const i={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:"The SAP Cloud SDK is a set of libraries and tools for developers to build cloud-native applications on the SAP Business Technology Platform (SAP BTP).\nIt abstracts the complexities of the SAP BTP, thus allowing you to focus on the application's business logic.\nThe SAP Cloud SDK is available in two flavors:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/java/overview-cloud-sdk-for-java",children:"SAP Cloud SDK for Java"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/js/overview",children:"SAP Cloud SDK for JavaScript"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Simplify development using connectivity abstractions for SAP BTP: handling destinations, proxies, and authentication for cloud and on-premise systems"}),"\n",(0,s.jsx)(i.li,{children:"Prevent cascading failures through common resiliency patterns such as retry and circuit-breaker"}),"\n",(0,s.jsx)(i.li,{children:"Improve application performance through configurable and tenant-aware caching solutions"}),"\n",(0,s.jsx)(i.li,{children:"Access application logs using standard logging frameworks integrations"}),"\n",(0,s.jsx)(i.li,{children:"Build multi-tenant applications on supported environments like Cloud Foundry, Kubernetes and Kyma"}),"\n",(0,s.jsx)(i.li,{children:"Generate typed clients for OData and OpenAPI services that integrate seamlessly with the above features"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["For a complete overview of supported features, check out the ",(0,s.jsx)(i.a,{href:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix",children:"feature matrix"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"license",children:"License"}),"\n",(0,s.jsxs)(i.p,{children:["The SAP Cloud SDK for ",(0,s.jsx)(i.a,{href:"https://github.com/SAP/cloud-sdk-js",children:"JavaScript / TypeScript"})," is open-source and available under the Apache 2.0 license.\nThe SAP Cloud SDK for Java is closed source and the libraries are distributed under the ",(0,s.jsx)(i.a,{href:"https://tools.eu1.hana.ondemand.com/developer-license-3_1.txt",children:"SAP Developer License"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"products-using-the-sap-cloud-sdk",children:"Products Using the SAP Cloud SDK"}),"\n",(0,s.jsx)(i.p,{children:"A few prominent products using the SAP Cloud SDK are:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://support.sap.com/en/alm.html",children:"SAP Cloud Application Lifecycle Management"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://cap.cloud.sap/docs/",children:"SAP Cloud Application Programming Model"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.sap.com/products/real-estate-facilities-mgmt-cloud.html",children:"SAP Cloud for Real Estate"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.sap.com/germany/products/project-portfolio-management.html",children:"SAP Portfolio and Project Management"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://help.sap.com/viewer/product/WORKFLOW_SERVICE/Cloud/en-US",children:"SAP Business Technology Platform Workflow"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"sap-cloud-application-programming-model",children:"SAP Cloud Application Programming Model"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"https://cap.cloud.sap/docs/",children:"SAP Cloud Application Programming Model (CAP)"})," is a framework of languages, libraries, and tools for building enterprise-grade services and applications.\nWith CAP, you can model an application's business domains and services in Core Data Services (CDS), add the business logic and automatically expose it via service APIs.\nCAP is recommended for building APIs (OData, REST, Messaging) and consuming and emitting Enterprise Messages for SAP S/4HANA."]}),"\n",(0,s.jsx)(i.h3,{id:"sap-cloud-sdk--sap-cloud-application-programming-model",children:"SAP Cloud SDK & SAP Cloud Application Programming Model"}),"\n",(0,s.jsx)(i.p,{children:"CAP plays on the API and service publishing side, while SAP Cloud SDK deals with API consumption and deployment of applications to SAP BTP.\nThe SAP Cloud SDK is also used internally by CAP for consuming remote services of SAP and other solutions.\nIf you do not interact with other services or SAP solutions, you may not need the capabilities of the SAP Cloud SDK."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://cap.cloud.sap/docs/assets/overview.drawio.bcd4584e.svg",alt:"CAP project diagram"})}),"\n",(0,s.jsx)(i.p,{children:"Depending on your use case, you can use SAP Cloud SDK and SAP Cloud Application Programming Model individually or in combination."})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,o)=>{o.d(i,{R:()=>l,x:()=>a});var n=o(96540);const s={},t=n.createContext(s);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);