"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[489],{52989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var s=a(87462),n=(a(67294),a(3905)),o=a(89913),i=a(44996),c=a(50941);const d={id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for JavaScript significantly simplifies extending and developing applications with the SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,l={unversionedId:"overview",id:"overview",title:"Overview",description:"The SAP Cloud SDK for JavaScript significantly simplifies extending and developing applications with the SAP Business Technology Platform",source:"@site/docs-js/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/cloud-sdk/docs/js/overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for JavaScript significantly simplifies extending and developing applications with the SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJsSidebar",next:{title:"Getting Started",permalink:"/cloud-sdk/docs/js/getting-started"}},u={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"What is the SAP Cloud SDK for JavaScript?",id:"what-is-the-sap-cloud-sdk-for-javascript",level:2},{value:"The Core Libraries",id:"the-core-libraries",level:3},{value:"<code>@sap-cloud-sdk/connectivity</code>",id:"sap-cloud-sdkconnectivity",level:4},{value:"<code>@sap-cloud-sdk/http-client</code>",id:"sap-cloud-sdkhttp-client",level:4},{value:"<code>@sap-cloud-sdk/mail-client</code>",id:"sap-cloud-sdkmail-client",level:4},{value:"<code>@sap-cloud-sdk/odata-v2</code>, <code>@sap-cloud-sdk/odata-v4</code>, and <code>@sap-cloud-sdk/openapi</code>",id:"sap-cloud-sdkodata-v2-sap-cloud-sdkodata-v4-and-sap-cloud-sdkopenapi",level:4},{value:"<code>@sap-cloud-sdk/generator</code> and <code>@sap-cloud-sdk/openapi-generator</code>",id:"sap-cloud-sdkgenerator-and-sap-cloud-sdkopenapi-generator",level:4},{value:"Supported Node Versions",id:"supported-node-versions",level:3},{value:"Supported OData and OpenAPI Versions",id:"supported-odata-and-openapi-versions",level:3},{value:"Licensing",id:"licensing",level:3},{value:"Release Schedule",id:"release-schedule",level:2},{value:"Comparison With SAP OData Library",id:"comparison-with-sap-odata-library",level:2},{value:"Contributing",id:"contributing",level:2}],v={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"quick-start"},"Quick Start"),(0,n.kt)("p",null,"For a quick start check out the ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/getting-started"},'"Getting Started"')," page."),(0,n.kt)("h2",{id:"what-is-the-sap-cloud-sdk-for-javascript"},"What is the SAP Cloud SDK for JavaScript?"),(0,n.kt)("p",null,"The SAP Cloud SDK for JavaScript is a set of libraries that reduces the effort of building applications on the SAP Business Technology Platform (SAP BTP).\nIt abstracts common tasks on SAP BTP so that you can concentrate on the business logic instead of writing boiler plate code.\nThe image below shows the general architecture of an application built with the SAP Cloud SDK."),(0,n.kt)(c.Z,{alt:"General architecture",sources:{light:(0,i.Z)("img/general-architecture_light.svg"),dark:(0,i.Z)("img/general-architecture_dark.svg")},className:"center",width:"80%",mdxType:"ThemedImage"}),(0,n.kt)("h3",{id:"the-core-libraries"},"The Core Libraries"),(0,n.kt)("p",null,"The core libraries are the heart of the SAP Cloud SDK for JavaScript.\nThey contain the request execution and connectivity logic as well as command line interfaces (CLIs) to generate OData and OpenAPI clients.\nThe image below shows the relationship between the individual core libraries."),(0,n.kt)(c.Z,{alt:"Core packages",sources:{light:(0,i.Z)("img/packages_light.svg"),dark:(0,i.Z)("img/packages_dark.svg")},className:"center",width:"80%",mdxType:"ThemedImage"}),(0,n.kt)("h4",{id:"sap-cloud-sdkconnectivity"},(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/connectivity")),(0,n.kt)("p",null,"The connectivity library provides functionality to read and exchange with services like the destination, XSUAA, and connectivity service.\nIt provides the basic types needed to reflect the concept of a ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destinations"},"destination")," throughout the SAP Cloud SDK for JavaScript."),(0,n.kt)("h4",{id:"sap-cloud-sdkhttp-client"},(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/http-client")),(0,n.kt)("p",null,"The HTTP client library is a thin HTTP client, that allows you to execute requests by leveraging the concept of destinations.\nYou can flexibly configure a request to your needs and send arbitrary HTTP requests to the given destination."),(0,n.kt)("h4",{id:"sap-cloud-sdkmail-client"},(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/mail-client")),(0,n.kt)("p",null,"With the mail-client, you can leverage the connectivity and destination services on SAP BTP to send e-mails from your application."),(0,n.kt)("h4",{id:"sap-cloud-sdkodata-v2-sap-cloud-sdkodata-v4-and-sap-cloud-sdkopenapi"},(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/odata-v2"),", ",(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/odata-v4"),", and ",(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/openapi")),(0,n.kt)("p",null,"The OData v2, v4, and OpenAPI libraries build the foundation for API clients.\nThey contain OData and OpenAPI-specific abstractions, that the client libraries use to expose their APIs."),(0,n.kt)("h4",{id:"sap-cloud-sdkgenerator-and-sap-cloud-sdkopenapi-generator"},(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/generator")," and ",(0,n.kt)("inlineCode",{parentName:"h4"},"@sap-cloud-sdk/openapi-generator")),(0,n.kt)("p",null,"The OData and OpenAPI generators are CLIs that generate client libraries based on the services' specifications (either EDMX format or OpenAPI/Swagger).\nYou can use them to generate typed API clients."),(0,n.kt)("h3",{id:"supported-node-versions"},"Supported Node Versions"),(0,n.kt)("p",null,"The SAP Cloud SDK always supports the ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"latest ",(0,n.kt)("em",{parentName:"a"},"Active LTS")," version of Node"),".\nYou can check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/actions/workflows/build.yml?query=branch%3Amain"},"automated tests")," to see a list of all supported and tested versions."),(0,n.kt)("h3",{id:"supported-odata-and-openapi-versions"},"Supported OData and OpenAPI Versions"),(0,n.kt)("p",null,"The SAP Cloud SDK supports OData v2 and v4, as well as OpenAPI 2.0 and 3.0."),(0,n.kt)("h3",{id:"licensing"},"Licensing"),(0,n.kt)("p",null,"All core libraries are available as open source npm packages in the ",(0,n.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk")," scope on npm under the Apache 2.0 license.\nYou can find the source code on GitHub.\nThe license of clients generated with the SAP Cloud SDK depends on the used service spec license."),(0,n.kt)("h2",{id:"release-schedule"},"Release Schedule"),(0,n.kt)("p",null,"The SAP Cloud SDK releases ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/releases"},"bi-weekly")," assuming that new changes are available."),(0,n.kt)("p",null,"Major releases of the SAP Cloud SDK for JavaScript usually occur every six to twelve months.\nFor details, check the ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/release-policy"},"release policy"),"."),(0,n.kt)("h2",{id:"comparison-with-sap-odata-library"},"Comparison With SAP OData Library"),(0,n.kt)("p",null,"There is also a second open source library for consuming OData services developed by SAP.\nThe ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/odata-library"},"SAP OData library")," is developed by a different team than the SAP Cloud SDK.\nIt evaluates service specifications at runtime and helps you execute requests.\nThe table below tries to draw a line between the two open source libraries:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"OData library"),(0,n.kt)("th",{parentName:"tr",align:null},"SAP Cloud SDK"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supports JavaScript."),(0,n.kt)("td",{parentName:"tr",align:null},"Supports JavaScript and TypeScript.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operates dynamically on the metadata and creates an on-the-fly-client."),(0,n.kt)("td",{parentName:"tr",align:null},"Typed API clients can be ",(0,n.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/features/odata/generate-client"},"generated"),". An ",(0,n.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/features/connectivity/http-client"},"generic, untyped client")," is also available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Connectivity needs to be handled manually."),(0,n.kt)("td",{parentName:"tr",align:null},"The SAP Cloud SDK handles ",(0,n.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/features/connectivity/destinations"},"connectivity")," on the SAP BTP for typed and untyped API clients.")))),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"For details on contributing, check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/blob/main/CONTRIBUTING.md"},"contribution guide"),"."),(0,n.kt)("div",{"data-nosnippet":!0},(0,n.kt)("h2",null,"Feature Matrix"),(0,n.kt)(o.Z,{mdxType:"JsFeatureTable"})))}h.isMDXComponent=!0},89913:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(67294),n=a(87317),o=a(2968),i=a(34367),c=a(57561),d=a(98126),r=a(10215);function l(){const e=s.useMemo((()=>i.R2),[]),t=s.useMemo((()=>o.JE),[]);return s.createElement(s.Fragment,null,s.createElement(n.D,{remarkPlugins:[c.Z,d.Z]},"**Legend:** :heavy_check_mark: - Generally Available, :x: - Not Available, :gear: - Beta, :date: - Planned"),s.createElement(r.Z,{columns:t,data:e}))}},10215:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(87462),n=a(67294),o=a(87317),i=a(79521),c=a(57561),d=a(98126);function r(e){let{columns:t,data:a}=e;const{getTableProps:r,getTableBodyProps:l,headerGroups:u,rows:p,prepareRow:v}=(0,i.useTable)({columns:t,data:a});return n.createElement("table",r(),n.createElement("thead",null,u.map((e=>n.createElement("tr",(0,s.Z)({key:e.key},e.getHeaderGroupProps()),e.headers.map((e=>n.createElement("th",(0,s.Z)({key:e.key},e.getHeaderProps()),e.render("Header")))))))),n.createElement("tbody",l(),p.map(((e,t)=>(v(e),n.createElement("tr",(0,s.Z)({key:e.key},e.getRowProps()),e.cells.map((e=>n.createElement("td",(0,s.Z)({key:e.key},e.getCellProps()),n.createElement(o.D,{remarkPlugins:[c.Z,d.Z]},e.value))))))))))}},34367:(e,t,a)=>{a.d(t,{R2:()=>r});const s="/cloud-sdk/docs",n=":heavy_check_mark:",o=":x:",i=":date:",c=":warning:",d="[Request this feature](https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=)",r=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:c,docsLink:"",note:"Deprecated since 4.13.0"},js:{status:o,docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:n,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview/)`,note:""},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:n,docsLink:`[docs](${s}/java/features/bapi-and-rfc/overview/)`,note:""},js:{status:o,docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 typed client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/v2-vdm-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)`,note:""}},{name:"[OData v4 typed client](https://www.odata.org/documentation/)",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/v4-vdm-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)`,note:""}},{name:"Generic not typed OData client",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/generic-untyped-odata-client)`,note:""},js:{status:o,docsLink:"",note:`We expose [generic HTTP client](${s}/js/features/connectivity/generic-http-client) aware of connectivity abstractions`}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:n,docsLink:`[docs](${s}/java/features/odata/vdm-generator)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/odata/generate-odata-client)`,note:""}},{name:"OpenAPI 2.0 typed client",category:"OpenAPI",java:{status:n,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI 3.0 typed client",category:"OpenAPI",java:{status:n,docsLink:`[docs](${s}/java/features/rest/overview)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/openapi/execute-openapi-request)`,note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:n,docsLink:`[docs](${s}/java/features/rest/generate-rest-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/openapi/generate-openapi-client)`,note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:i,docsLink:"",note:"Planned. Depends on CAP"},js:{status:i,docsLink:"",note:"Planned. Depends on CAP"}},{name:"Resilience pattern",category:"Advanced",java:{status:n,docsLink:`[docs](${s}/java/features/resilience/resilience)`,note:""},js:{status:o,docsLink:"",note:d}},{name:"Caching pattern",category:"Advanced",java:{status:n,docsLink:`[docs](${s}/java/features/resilience/resilience)`,note:""},js:{status:o,docsLink:"",note:d}},{name:"[BTP Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Environment",java:{status:n,docsLink:`[docs](${s}/java/environments/cloud-foundry)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"[Kubernetes with SAP Gardener](https://gardener.cloud/)",category:"Environment",java:{status:n,docsLink:`[docs](${s}/java/environments/kubernetes-gardener)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes)`,note:""}},{name:"[BTP Kyma Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/468c2f3c3ca24c2c8497ef9f83154c44.html)",category:"Environment",java:{status:n,docsLink:`[docs](${s}/java/environments/kubernetes-kyma)`,note:"[Kyma Open Source project](https://kyma-project.io/)"},js:{status:n,docsLink:`[docs](${s}/js/getting-started#deploy-the-project-on-sap-btp-cloud-foundry)`,note:""}},{name:"Deploy with Confidence (DwC)",category:"Environment",java:{status:n,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:d}},{name:"[BTP Neo Environment](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Environment",java:{status:c,docsLink:"",note:"Deprecated since 4.17.0"},js:{status:o,docsLink:"",note:"Not recommended for new projects"}},{name:"[SAP BTP ABAP Environent](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d62652aa2b4600a0fa136de0789648.html)",category:"Environment",java:{status:o,docsLink:"",note:"Out of scope"},js:{status:o,docsLink:"",note:"Out of scope"}},{name:"[BTP CF Connectivity Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/313b215066a8400db461b311e01bd99b.html)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Destination Service](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF XSUAA Service](https://sap.github.io/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination)`,note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)`,note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/multi-tenancy/thread-context)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"Proxy",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/destination#multi-tenancy)`,note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/http-client)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/generic-http-client)`,note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:n,docsLink:"",note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/on-premise#principal-propagation)`,note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:n,docsLink:`[docs](${s}/java/features/connectivity/destination-service#connect-to-sap-s4hana-on-premise)`,note:""},js:{status:n,docsLink:`[docs](${s}/js/features/connectivity/on-premise)`,note:""}},{name:"MDI",category:"MDI",java:{status:n,docsLink:"",note:"Internal only or allow listed"},js:{status:o,docsLink:"",note:d}}]},2968:(e,t,a)=>{a.d(t,{Ar:()=>n,JE:()=>o,WV:()=>s,qW:()=>i});const s=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],n=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],o=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],i=[{Header:"Environment",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}]}}]);