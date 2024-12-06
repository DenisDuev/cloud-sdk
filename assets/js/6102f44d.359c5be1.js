"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[43620],{99482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"guides/cap-sdk-integration","title":"Integration With Cloud Application Programming Model","description":"Integrate the SAP Cloud SDK into your CAP application","source":"@site/docs-java_versioned_docs/version-v4/guides/cap-sdk-integration.mdx","sourceDirName":"guides","slug":"/guides/cap-sdk-integration","permalink":"/cloud-sdk/docs/java/v4/guides/cap-sdk-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v4/guides/cap-sdk-integration.mdx","tags":[],"version":"v4","frontMatter":{"id":"cap-sdk-integration","title":"Integration With Cloud Application Programming Model","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Integration With CAP","description":"Integrate the SAP Cloud SDK into your CAP application","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},"sidebar":"docsJavaSidebar","previous":{"title":"Dependency Management","permalink":"/cloud-sdk/docs/java/v4/guides/manage-dependencies"},"next":{"title":"Logging","permalink":"/cloud-sdk/docs/java/v4/guides/logging-overview"}}');var i=t(74848),d=t(28453);const a={id:"cap-sdk-integration",title:"Integration With Cloud Application Programming Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Integration With CAP",description:"Integrate the SAP Cloud SDK into your CAP application",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},s=void 0,r={},c=[{value:"Integration Steps",id:"integration-steps",level:2},{value:"Add the SAP Cloud SDK Bill-of-Material",id:"add-the-sap-cloud-sdk-bill-of-material",level:3},{value:"Add the SAP Cloud SDK Dependencies",id:"add-the-sap-cloud-sdk-dependencies",level:3},{value:"Add the Integration Dependency",id:"add-the-integration-dependency",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This document outlines how you integrate the SAP Cloud SDK into an application based on the ",(0,i.jsx)(n.a,{href:"https://cap.cloud.sap/docs/",children:"SAP Cloud Application Programming Model"})," (referred to as CAP in the remainder)."]}),"\n",(0,i.jsx)(n.admonition,{title:"Check out the tutorial as well",type:"success",children:(0,i.jsxs)(n.p,{children:["While this document provides a general overview of this topic, we have published a practical ",(0,i.jsx)(n.a,{href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html",children:"tutorial on SAP Developers"})," which illustrates all steps on a comprehensive example."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Guide on the traditional Spring deployment",type:"success",children:(0,i.jsxs)(n.p,{children:["We provide a ",(0,i.jsx)(n.a,{href:"spring-boot-war-deployment",children:"guide"})," on how to leverage the traditional Spring deployment in conjunction with CAP.\nThat guide is applicable for your project if you need to invoke BAPIs via the SAP Java Connector library."]})}),"\n",(0,i.jsx)(n.h2,{id:"integration-steps",children:"Integration Steps"}),"\n",(0,i.jsx)(n.admonition,{title:"Assumption",type:"note",children:(0,i.jsx)(n.p,{children:"The following instructions assume that you have an existing CAP project that can be built successfully.\nFurthermore, we assume that you deploy your app to the SAP BTP, Cloud Foundry environment."})}),"\n",(0,i.jsx)(n.h3,{id:"add-the-sap-cloud-sdk-bill-of-material",children:"Add the SAP Cloud SDK Bill-of-Material"}),"\n",(0,i.jsxs)(n.p,{children:["Add the SAP Cloud SDK Bill-of-Material (BOM) into the ",(0,i.jsx)(n.code,{children:"dependencyManagement"})," section of the root POM.\nHere is the XML snippet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Use the latest SAP Cloud SDK version",type:"success",children:(0,i.jsxs)(n.p,{children:["We recommend using the ",(0,i.jsx)(n.strong,{children:"latest"})," SAP Cloud SDK version always.\nCheck out the ",(0,i.jsx)(n.a,{href:"../release-notes",children:"release notes"})," to see the release history."]})}),"\n",(0,i.jsx)(n.admonition,{title:"SAP Cloud SDK Modules Bill-of-Material",type:"note",children:(0,i.jsxs)(n.p,{children:["By default, the SAP Cloud SDK archetypes reference the SAP Cloud SDK Bill-of-Material ",(0,i.jsx)(n.code,{children:"sdk-bom"}),", which manages dependency versions for all SAP Cloud SDK modules and transitive dependencies.\nIf you face dependency conflicts, you can instead try using the SAP Cloud SDK Modules Bill-of-Material ",(0,i.jsx)(n.code,{children:"sdk-modules-bom"})," in the ",(0,i.jsx)(n.code,{children:"dependencyManagement"})," section of your Maven POM file."]})}),"\n",(0,i.jsx)(n.h3,{id:"add-the-sap-cloud-sdk-dependencies",children:"Add the SAP Cloud SDK Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["Add the respective SAP Cloud SDK dependencies to the POM file under the ",(0,i.jsx)(n.code,{children:"srv"})," directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-cf</artifactId>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Version information controlled through the SAP Cloud SDK BOM",type:"note",children:(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"version"})," tags can be omitted, because the SAP Cloud SDK BOM controls the version of all the SAP Cloud SDK modules.\nThat is, you only need to increase the version of the BOM and all modules get updated automatically."]})}),"\n",(0,i.jsx)(n.h3,{id:"add-the-integration-dependency",children:"Add the Integration Dependency"}),"\n",(0,i.jsxs)(n.p,{children:["If your app uses multitenancy features and/or a protected backend, we have to integrate the tenant and user concepts of CAP and the SAP Cloud SDK.\nWe'll add a respective integration dependency to the POM file under the ",(0,i.jsx)(n.code,{children:"srv"})," directory (same place as the previous step)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Caution",type:"danger",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"executeWith...()"})," methods offered by the ",(0,i.jsx)(n.em,{children:"Accessor"})," classes (e.g. ",(0,i.jsx)(n.code,{children:"TenantAccessor"}),") are currently not supported when using the CAP integration.\nTo still manipulate the request context, please refer to ",(0,i.jsx)(n.a,{href:"https://cap.cloud.sap/docs/java/request-contexts#defining-requestcontext",children:"the CAP documentation"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Multitenancy Integration with CAP",type:"note",children:(0,i.jsxs)(n.p,{children:["You can learn more about how the multitenancy of the SAP Cloud SDK integrates with CAP in ",(0,i.jsx)(n.a,{href:"../features/multi-tenancy/thread-context#how-is-a-thread-context-created",children:"this article"}),".\nPlease make sure you are using a CDS version that is up to date.\nFor the integration at least ",(0,i.jsx)(n.code,{children:"1.28"})," is required."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["This step is only required if you are using CAP/CDS versions earlier than ",(0,i.jsx)(n.code,{children:"1.23.0"}),"."]}),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Enable the Component Scan for SAP Cloud SDK Package"}),(0,i.jsxs)(n.p,{children:["Let the Spring component scan crawl the SAP Cloud SDK package.\nWe'll annotate the Spring Boot application class which is annotated with ",(0,i.jsx)(n.code,{children:"@SpringBootApplication"})," as follows."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@ComponentScan({"com.sap.cloud.sdk", "com.mycompany.myapplication"})\n@ServletComponentScan({"com.sap.cloud.sdk", "com.mycompany.myapplication"})\n'})}),(0,i.jsx)(n.p,{children:"Make sure that you also add the package name of your application."})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Integration finished",type:"success",children:(0,i.jsx)(n.p,{children:"Now the SAP Cloud SDK is integrated with the CAP application.\nYou can go ahead using the SAP Cloud SDK features, such as querying OData services."})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},d=o.createContext(i);function a(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);