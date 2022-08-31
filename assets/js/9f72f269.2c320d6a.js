"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8888],{11347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>f,toc:()=>j});var n=a(87462),s=a(67294),o=a(3905),c=a(34223),i=a(70643),r=a(58627),d=a(2968),u=a(34367),l=a(10215);function v(){const e=u.R2.filter((e=>"Environment"===e.category)),t=s.useMemo((()=>e),[]),a=s.useMemo((()=>d.qW),[]);return s.createElement(s.Fragment,null,s.createElement(c.D,{plugins:[r.Z,i.Z]},"**Legend:** :heavy_check_mark: - Generally Available, :x: - Not Available, :gear: - Beta, :date: - Planned"),s.createElement(l.Z,{columns:a,data:t}))}const p={title:"SAP BTP Environments Overview",sidebar_label:"Overview",description:"SAP Business Technology Platform is in the epicenter of countless integration and extension scenarios. The SAP Cloud SDK provides end-to-end support for multiple environments of the SAP BTP to make sure you can develop application and extensions in convenient and effortless way.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},m=void 0,f={unversionedId:"environments/sap-btp-environments-overview",id:"environments/sap-btp-environments-overview",title:"SAP BTP Environments Overview",description:"SAP Business Technology Platform is in the epicenter of countless integration and extension scenarios. The SAP Cloud SDK provides end-to-end support for multiple environments of the SAP BTP to make sure you can develop application and extensions in convenient and effortless way.",source:"@site/docs-java/environments/sap-btp-environments-overview.mdx",sourceDirName:"environments",slug:"/environments/sap-btp-environments-overview",permalink:"/cloud-sdk/docs/java/environments/sap-btp-environments-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"SAP BTP Environments Overview",sidebar_label:"Overview",description:"SAP Business Technology Platform is in the epicenter of countless integration and extension scenarios. The SAP Cloud SDK provides end-to-end support for multiple environments of the SAP BTP to make sure you can develop application and extensions in convenient and effortless way.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Caching",permalink:"/cloud-sdk/docs/java/features/resilience/caching"},next:{title:"SAP BTP Cloud Foundry",permalink:"/cloud-sdk/docs/java/environments/sap-btp-cloud-foundry-environment"}},k={},j=[{value:"Available Environments",id:"available-environments",level:2}],y={toc:j};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/6a2c1ab5a31b4ed9a2ce17a5329e1dd8.html"},"The SAP Business Technology Platform")," is an integrated offering.\nIt comprises four technology portfolios:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Database and Data Management"),(0,o.kt)("li",{parentName:"ol"},"Application Development and Integration"),(0,o.kt)("li",{parentName:"ol"},"Analytics"),(0,o.kt)("li",{parentName:"ol"},"and Intelligent Technologies")),(0,o.kt)("p",null,"The platform offers users the ability to turn data into business value, compose end-to-end business processes, and build and extend SAP applications quickly."),(0,o.kt)("h2",{id:"available-environments"},"Available Environments"),(0,o.kt)("p",null,"The SAP Cloud SDK aims at providing equal support for all the cloud-based environments exposed by the SAP BTP where it makes sense.\nFor more details check the comparability table below and documentation for specific environments."),(0,o.kt)(v,{mdxType:"JavaEnvironmentTable"}))}b.isMDXComponent=!0},10215:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),s=a(67294),o=a(34223),c=a(79521),i=a(58627),r=a(70643);function d(e){let{columns:t,data:a}=e;const{getTableProps:d,getTableBodyProps:u,headerGroups:l,rows:v,prepareRow:p}=(0,c.useTable)({columns:t,data:a});return s.createElement("table",d(),s.createElement("thead",null,l.map((e=>s.createElement("tr",(0,n.Z)({key:e.key},e.getHeaderGroupProps()),e.headers.map((e=>s.createElement("th",(0,n.Z)({key:e.key},e.getHeaderProps()),e.render("Header")))))))),s.createElement("tbody",u(),v.map(((e,t)=>(p(e),s.createElement("tr",(0,n.Z)({key:e.key},e.getRowProps()),e.cells.map((e=>s.createElement("td",(0,n.Z)({key:e.key},e.getCellProps()),s.createElement(o.D,{remarkPlugins:[i.Z,r.Z]},e.value))))))))))}},34367:(e,t,a)=>{a.d(t,{R2:()=>r});const n="/cloud-sdk/docs",s=":heavy_check_mark:",o=":x:",c=":date:",i="[Request this feature](https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=)",r=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:s,docsLink:"",note:""},js:{status:o,docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:s,docsLink:"[docs]("+n+"/java/features/bapi-and-rfc/bapi-and-rfc-overview/)",note:""},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:s,docsLink:"[docs]("+n+"/java/features/bapi-and-rfc/bapi-and-rfc-overview/)",note:""},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:s,docsLink:"[docs]("+n+"/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)",note:""}},{name:"[OData v4 typed client](https://www.odata.org/documentation/)",category:"OData",java:{status:s,docsLink:"[docs]("+n+"/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)",note:""}},{name:"Generic not typed OData client",category:"OData",java:{status:s,docsLink:"[docs]("+n+"/java/features/odata/generic-untyped-odata-client)",note:""},js:{status:o,docsLink:"",note:"We expose [generic HTTP client]("+n+"/js/features/connectivity/generic-http-client) aware of connectivity abstractions"}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:s,docsLink:"[docs]("+n+"/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/odata/generate-odata-client)",note:""}},{name:"OpenAPI 2.0 typed client",category:"OpenAPI",java:{status:s,docsLink:"[docs]("+n+"/java/features/rest/overview)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/openapi/execute-openapi-request)",note:""}},{name:"OpenAPI 3.0 typed client",category:"OpenAPI",java:{status:s,docsLink:"[docs]("+n+"/java/features/rest/overview)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/openapi/execute-openapi-request)",note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:s,docsLink:"[docs]("+n+"/java/features/rest/generate-rest-client)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/openapi/generate-openapi-client)",note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:c,docsLink:"",note:"Planned. Depends on CAP"},js:{status:c,docsLink:"",note:"Planned. Depends on CAP"}},{name:"Resilience pattern",category:"Advanced",java:{status:s,docsLink:"[docs]("+n+"/java/features/resilience/resilience)",note:""},js:{status:o,docsLink:"",note:i}},{name:"Caching pattern",category:"Advanced",java:{status:s,docsLink:"[docs]("+n+"/java/features/resilience/resilience)",note:""},js:{status:o,docsLink:"",note:i}},{name:"[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Environment",java:{status:s,docsLink:"[docs]("+n+"/java/environments/sap-btp-cloud-foundry-environment)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)",note:""}},{name:"[Kubernetes with SAP Gardener](https://gardener.cloud/)",category:"Environment",java:{status:s,docsLink:"[docs]("+n+"/java/environments/sap-btp-kubernetes-environment-with-sap-gardener)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)",note:""}},{name:"[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)",category:"Environment",java:{status:s,docsLink:"[docs]("+n+"/java/environments/sap-btp-kyma-environment)",note:"[Kyma Open Source project](https://kyma-project.io/)"},js:{status:s,docsLink:"[docs]("+n+"/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)",note:""}},{name:"Deploy with Confidence (DwC)",category:"Environment",java:{status:s,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:i}},{name:"[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Environment",java:{status:s,docsLink:"[docs]("+n+"/java/guides/tutorial-overview-sdk-java/#groups-for-neo)",note:"Not recommended for new projects"},js:{status:o,docsLink:"",note:"Not recommended for new projects"}},{name:"[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)",category:"Environment",java:{status:o,docsLink:"",note:"Out of scope"},js:{status:o,docsLink:"",note:"Out of scope"}},{name:"Kubernetes Service Binding",category:"Environment",java:{status:s,docsLink:"[docs]("+n+"/java/features/service-bindings/load-service-bindings-from-environment#load-service-binding-information)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)",note:"Bindings are handled via configuration"}},{name:"[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)",category:"Connectivity",java:{status:s,docsLink:"[docs]("+n+"/java/features/connectivity/sdk-connectivity-destination-service)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/destination)",note:""}},{name:"[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:s,docsLink:"[docs]("+n+"/java/features/connectivity/sdk-connectivity-destination-service)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/destination)",note:""}},{name:"[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)",category:"Connectivity",java:{status:s,docsLink:"[docs]("+n+"/java/features/connectivity/sdk-connectivity-destination-service)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/destination)",note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:s,docsLink:"",note:""},js:{status:s,docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:s,docsLink:"",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)",note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:s,docsLink:"[docs]("+n+"/java/features/multi-tenancy/multi-tenancy-thread-context)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/destination#multi-tenancy)",note:""}},{name:"Proxy",category:"Connectivity",java:{status:s,docsLink:"[docs]("+n+"/java/features/connectivity/sdk-connectivity-destination-service)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/destination#multi-tenancy)",note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:s,docsLink:"[docs]("+n+"/java/features/connectivity/sdk-connectivity-http-client)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/generic-http-client)",note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:s,docsLink:"",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/on-premise#principal-propagation)",note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:s,docsLink:"[docs]("+n+"/java/features/connectivity/sdk-connectivity-destination-service#connect-to-sap-s4hana-on-premise)",note:""},js:{status:s,docsLink:"[docs]("+n+"/js/features/connectivity/on-premise)",note:""}},{name:"CLI",category:"CLI",java:{status:s,docsLink:"",note:"Via a Maven plugin "},js:{status:":warning:",docsLink:"[docs]("+n+"/js/features/cli/overview)",note:""}},{name:"MDI",category:"MDI",java:{status:s,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:i}}]},2968:(e,t,a)=>{a.d(t,{Ar:()=>s,JE:()=>o,WV:()=>n,qW:()=>c});const n=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],s=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],o=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],c=[{Header:"Environment",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}]}}]);