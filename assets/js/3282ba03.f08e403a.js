"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4418],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],d={id:"cap-sdk-integration",title:"Integration With Cloud Application Programming Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Integration With CAP",description:"Integrate the SAP Cloud SDK into your CAP application",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},s=void 0,l={unversionedId:"java/guides/cap-sdk-integration",id:"java/guides/cap-sdk-integration",title:"Integration With Cloud Application Programming Model",description:"Integrate the SAP Cloud SDK into your CAP application",source:"@site/docs/java/guides/cap-sdk-integration.mdx",sourceDirName:"java/guides",slug:"/java/guides/cap-sdk-integration",permalink:"/cloud-sdk/docs/java/guides/cap-sdk-integration",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cap-sdk-integration.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1657784648,formattedLastUpdatedAt:"Jul 14, 2022",frontMatter:{id:"cap-sdk-integration",title:"Integration With Cloud Application Programming Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Integration With CAP",description:"Integrate the SAP Cloud SDK into your CAP application",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},sidebar:"someSidebar",previous:{title:"SAP Cloud SDK on Linux",permalink:"/cloud-sdk/docs/java/guides/sap-cloud-sdk-linux-how-to"},next:{title:"Use WAR Deployment with Spring Boot",permalink:"/cloud-sdk/docs/java/guides/spring-boot-war-deployment"}},p={},c=[{value:"Integration Steps",id:"integration-steps",level:2},{value:"Add the SAP Cloud SDK Bill-of-Material",id:"add-the-sap-cloud-sdk-bill-of-material",level:3},{value:"Add the SAP Cloud SDK Dependencies",id:"add-the-sap-cloud-sdk-dependencies",level:3},{value:"Add the Integration Dependency",id:"add-the-integration-dependency",level:3},{value:"Wrap Asynchronous Calls",id:"wrap-asynchronous-calls",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document outlines how you integrate the SAP Cloud SDK into an application based on the ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model")," (referred to as CAP in the remainder)."),(0,i.kt)("admonition",{title:"Check out the tutorial as well",type:"success"},(0,i.kt)("p",{parentName:"admonition"},"While this document provides a general overview of this topic, we have published a practical ",(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html"},"tutorial on SAP Developers")," which illustrates all steps on a comprehensive example.")),(0,i.kt)("admonition",{title:"Guide on the traditional Spring deployment",type:"success"},(0,i.kt)("p",{parentName:"admonition"},"We provide a ",(0,i.kt)("a",{parentName:"p",href:"spring-boot-war-deployment"},"guide")," on how to leverage the traditional Spring deployment in conjunction with CAP.\nThat guide is applicable for your project if you need to invoke BAPIs via the SAP Java Connector library.")),(0,i.kt)("h2",{id:"integration-steps"},"Integration Steps"),(0,i.kt)("admonition",{title:"Assumption",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following instructions assume that you have an existing CAP project that can be built successfully.\nFurthermore, we assume that you deploy your app to the SAP BTP, Cloud Foundry environment.")),(0,i.kt)("h3",{id:"add-the-sap-cloud-sdk-bill-of-material"},"Add the SAP Cloud SDK Bill-of-Material"),(0,i.kt)("p",null,"Add the SAP Cloud SDK Bill-of-Material (BOM) into the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of the root POM.\nHere is the XML snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,i.kt)("admonition",{title:"Use the latest SAP Cloud SDK version",type:"success"},(0,i.kt)("p",{parentName:"admonition"},"We recommend using the ",(0,i.kt)("strong",{parentName:"p"},"latest")," SAP Cloud SDK version always.\nCheck out the ",(0,i.kt)("a",{parentName:"p",href:"../release-notes-sap-cloud-sdk-for-java"},"release notes")," to see the release history.")),(0,i.kt)("admonition",{title:"SAP Cloud SDK Modules Bill-of-Material",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"By default, the SAP Cloud SDK archetypes reference the SAP Cloud SDK Bill-of-Material ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk-bom"),", which manages dependency versions for all SAP Cloud SDK modules and transitive dependencies.\nIf you face dependency conflicts, you can instead try using the SAP Cloud SDK Modules Bill-of-Material ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your Maven POM file.")),(0,i.kt)("h3",{id:"add-the-sap-cloud-sdk-dependencies"},"Add the SAP Cloud SDK Dependencies"),(0,i.kt)("p",null,"Add the respective SAP Cloud SDK dependencies to the POM file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"srv")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-cf</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-all</artifactId>\n    <exclusions>\n        <exclusion>\n            <groupId>com.sap.cloud.servicesdk</groupId>\n            <artifactId>odata-v2-lib</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please use the same exclusion also on any other OData V2 related dependencies from the SAP Cloud SDK you may be using.")),(0,i.kt)("admonition",{title:"Version information controlled through the SAP Cloud SDK BOM",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," tags can be omitted, because the previously added the SAP Cloud SDK BOM controls the version of all the SAP Cloud SDK modules.\nThat is, you only need to increase the version of the BOM and all modules get updated automatically.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The two mentioned dependencies are modules that cover a broad range of possible the SAP Cloud SDK use cases.\nYou may choose a more fine-grained selection of the SAP Cloud SDK dependencies according to your specific use case.")),(0,i.kt)("h3",{id:"add-the-integration-dependency"},"Add the Integration Dependency"),(0,i.kt)("p",null,"If your app uses multitenancy features and/or a protected backend, we have to integrate the tenant and user concepts of CAP and the SAP Cloud SDK.\nWe'll add a respective integration dependency to the POM file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"srv")," directory (same place as the previous step)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n")),(0,i.kt)("admonition",{title:"Multitenancy Integration with CAP",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can learn more about how the multitenancy of the SAP Cloud SDK integrates with CAP in ",(0,i.kt)("a",{parentName:"p",href:"../features/multi-tenancy/multi-tenancy-thread-context#how-is-a-thread-context-created"},"this article"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This step is only required if you are using CAP/CDS versions earlier than ",(0,i.kt)("inlineCode",{parentName:"p"},"1.23.0"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Enable the Component Scan for SAP Cloud SDK Package"),(0,i.kt)("p",{parentName:"admonition"},"Let the Spring component scan crawl the SAP Cloud SDK package.\nWe'll annotate the Spring Boot application class which is annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@SpringBootApplication")," as follows."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan({"com.sap.cloud.sdk", "com.mycompany.myapplication"})\n@ServletComponentScan({"com.sap.cloud.sdk", "com.mycompany.myapplication"})\n')),(0,i.kt)("p",{parentName:"admonition"},"Make sure that you also add the package name of your application."))),(0,i.kt)("h3",{id:"wrap-asynchronous-calls"},"Wrap Asynchronous Calls"),(0,i.kt)("p",null,"If your app uses asynchronous calls which spawn new threads or reuse pooled threads, the call must be decorated with the respective wrapper classes.\nThis decoration is required to forward thread-specific information from the calling thread to the asynchronously running thread."),(0,i.kt)("p",null,"For this purpose, you need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContextRunner")," from ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/java/provisioning-api#threading-requestcontext"},"CAP")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"EventContext context;\nRequestContextRunner cdsContextRunner = context.getCdsRuntime().requestContext();\n\nCallable<Object> task = () -> cdsContextRunner.run(() -> ... ));\n")),(0,i.kt)("admonition",{title:"Caution",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"executeWith")," methods of ",(0,i.kt)("em",{parentName:"p"},"Accessor")," classes cannot be currently used to execute asynchronous operations in the CAP context."),(0,i.kt)("p",{parentName:"admonition"},"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestScopedHttpClientCache")," which is the default being used by the SAP Cloud SDK cannot work with CAP integration, please use ",(0,i.kt)("a",{parentName:"p",href:"../features/connectivity/sdk-connectivity-http-client#caching-httpclient"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeScopedHttpClientCache"))," instead for caching ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient"),"s.")),(0,i.kt)("admonition",{title:"Info",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In case you are using CAP/CDS versions earlier than ",(0,i.kt)("inlineCode",{parentName:"p"},"1.23.0"),", additional steps are required."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Wrap asynchronous calls "),(0,i.kt)("p",{parentName:"admonition"},"You need to additionally wrap your calls using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContextExecutor")," from the SAP Cloud SDK (refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context/#what-is-a-thread-context"},"ThreadContext documentation"),") in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContextRunner")," from ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/java/provisioning-api#threading-requestcontext"},"CAP"),"."),(0,i.kt)("p",{parentName:"admonition"},"Hence, the code snippet from above would look like:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"EventContext context;\nThreadContextExecutor threadContextExecutor = new ThreadContextExecutor();\nRequestContextRunner cdsContextRunner = context.getCdsRuntime().requestContext();\n\n//If the operation returns something\nCallable<Object> task = () -> cdsContextRunner.run(ctx -> {\n                                return threadContextExecutor.execute(() -> operation());\n                                });\n\n//If the operation does not return something\nCallable<Object> task = () -> cdsContextRunner.run(ctx -> {\n                                threadContextExecutor.execute(() -> operation());\n                                });\n")))),(0,i.kt)("admonition",{title:"Integration finished",type:"success"},(0,i.kt)("p",{parentName:"admonition"},"Now the SAP Cloud SDK is integrated with the CAP application.\nYou can go ahead using the SAP Cloud SDK features, such as querying OData services.")))}m.isMDXComponent=!0}}]);