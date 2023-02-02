"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),l=a(43689),r=a(15767);const o={id:"release-notes-sap-cloud-sdk-for-javascript-and-typescript",title:"Release Notes",sidebar_label:"Release Notes",description:"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.",keywords:["sap","cloud","sdk","cloud-native","cloud sdk","sap cloud sdk"]},s=void 0,u={unversionedId:"release-notes-sap-cloud-sdk-for-javascript-and-typescript",id:"version-v1/release-notes-sap-cloud-sdk-for-javascript-and-typescript",title:"Release Notes",description:"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.",source:"@site/docs-js_versioned_docs/version-v1/release-notes.mdx",sourceDirName:".",slug:"/release-notes-sap-cloud-sdk-for-javascript-and-typescript",permalink:"/cloud-sdk/docs/js/v1/release-notes-sap-cloud-sdk-for-javascript-and-typescript",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/release-notes.mdx",tags:[],version:"v1",frontMatter:{id:"release-notes-sap-cloud-sdk-for-javascript-and-typescript",title:"Release Notes",sidebar_label:"Release Notes",description:"Release notes of the SAP Cloud SDK for JavaScript and TypeScript, stay up to date with the recent features, fixes, dependency updates, and recommendations.",keywords:["sap","cloud","sdk","cloud-native","cloud sdk","sap cloud sdk"]},sidebar:"docsJsSidebar",previous:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/v1/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"},next:{title:"FAQ",permalink:"/cloud-sdk/docs/js/v1/frequently-asked-questions"}},p={},d=[{value:"Should I Update?",id:"should-i-update",level:2},{value:"1.54.1 Core Modules - Feb 18, 2022",id:"1541-core-modules---feb-18-2022",level:2},{value:"Improvements",id:"improvements",level:3},{value:"2.0.0 Client Libraries - Feb 10, 2022",id:"200-client-libraries---feb-10-2022",level:2},{value:"New Functionality",id:"new-functionality",level:3},{value:"2.0.0 Core Modules - Feb 03, 2022",id:"200-core-modules---feb-03-2022",level:2},{value:"Compatibility Notes",id:"compatibility-notes",level:3},{value:"New Functionality",id:"new-functionality-1",level:3},{value:"Removed functionality",id:"removed-functionality",level:3},{value:"New module structure",id:"new-module-structure",level:3},{value:"Changed signatures",id:"changed-signatures",level:3},{value:"Changed implementation",id:"changed-implementation",level:3},{value:"1.54.0 Core Modules - Feb 02, 2022",id:"1540-core-modules---feb-02-2022",level:2},{value:"New Functionality",id:"new-functionality-2",level:3},{value:"1.53.1 Core Modules - Jan 18, 2022",id:"1531-core-modules---jan-18-2022",level:2},{value:"Improvements",id:"improvements-1",level:3},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"CLI - Jan 5, 2022",id:"cli---jan-5-2022",level:2},{value:"Sample Projects - Jan 5, 2022",id:"sample-projects---jan-5-2022",level:2},{value:"1.53.0 Core Modules - December 9, 2021",id:"1530-core-modules---december-9-2021",level:2},{value:"Fixed Issues",id:"fixed-issues-1",level:3},{value:"1.28.2 Client Libraries - November 17, 2021",id:"1282-client-libraries---november-17-2021",level:2},{value:"Compatibility Notes",id:"compatibility-notes-1",level:3},{value:"New Functionality",id:"new-functionality-3",level:3},{value:"1.52.0 Core Modules - November 5, 2021",id:"1520-core-modules---november-5-2021",level:2},{value:"Compatibility Notes",id:"compatibility-notes-2",level:3},{value:"Fixed Issues",id:"fixed-issues-2",level:3},{value:"1.27.0 Client Libraries - Aug 20, 2021",id:"1270-client-libraries---aug-20-2021",level:2},{value:"New Functionality",id:"new-functionality-4",level:3},{value:"1.26.0 Client Libraries - June 04, 2021",id:"1260-client-libraries---june-04-2021",level:2},{value:"1.25.0 Client Libraries - May 20, 2021",id:"1250-client-libraries---may-20-2021",level:2},{value:"New Functionality",id:"new-functionality-5",level:3},{value:"1.24.0 Client Libraries - January 18, 2021",id:"1240-client-libraries---january-18-2021",level:2},{value:"Compatibility Notes",id:"compatibility-notes-3",level:3},{value:"New Functionality",id:"new-functionality-6",level:3},{value:"1.22.0 Client Libraries - November 6, 2020",id:"1220-client-libraries---november-6-2020",level:2},{value:"New Functionality",id:"new-functionality-7",level:3},{value:"1.21.0 Client Libraries - September 10, 2020",id:"1210-client-libraries---september-10-2020",level:2},{value:"New Functionality",id:"new-functionality-8",level:3},{value:"1.20.0 Client Libraries - August 13, 2020",id:"1200-client-libraries---august-13-2020",level:2},{value:"New Functionality",id:"new-functionality-9",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{mdxType:"BuildBadge"})," ",(0,i.kt)(r.Z,{mdxType:"LicenseBadge"}),(0,i.kt)("h2",{id:"should-i-update"},"Should I Update?"),(0,i.kt)("p",null,"We highly recommend updating to the latest SAP Cloud SDK version regularly."),(0,i.kt)("p",null,"It will help you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure access to the latest SAP Cloud SDK features"),(0,i.kt)("li",{parentName:"ul"},"Keep up with the latest changes on SAP Business Technology Platform"),(0,i.kt)("li",{parentName:"ul"},"Update client libraries giving access to the latest SAP services on SAP Business Technology Platform and SAP S/4HANA."),(0,i.kt)("li",{parentName:"ul"},"Protect yourself from bugs and breaking changes in the future")),(0,i.kt)("admonition",{title:"What are pregenerated typed client libraries (VDM)?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"These libraries are free (but not open-source) and distributed under the SAP Developer license through ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40sap%2Fcloud-sdk-vdm-*"},"npmjs.com"),".\nYou can generate a typed client library yourself by using our ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/generate-client"},"OData generator")," and ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/openapi/generate-client"},"Open API"),".\nTo easily search for services and get typed client library for them, use our ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2021/09/17/the-sap-cloud-sdk-integrates-with-the-sap-api-business-hub/"},"API Business Hub integration"),".")),(0,i.kt)("h2",{id:"1541-core-modules---feb-18-2022"},"1.54.1 ","[Core Modules]"," - Feb 18, 2022"),(0,i.kt)("h3",{id:"improvements"},"Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[core]"," Announce 2.0 release in the ",(0,i.kt)("inlineCode",{parentName:"li"},"postinstall")," script.")),(0,i.kt)("h2",{id:"200-client-libraries---feb-10-2022"},"2.0.0 ","[Client Libraries]"," - Feb 10, 2022"),(0,i.kt)("h3",{id:"new-functionality"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://blogs.sap.com/2022/01/26/highlights-of-the-sap-s-4hana-cloud-2202-release/"},"latest SAP S/4HANA Cloud release 2022"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the latest RTC release 2021 FPS1 of SAP S/4HANA On-premise."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones.")))),(0,i.kt)("h2",{id:"200-core-modules---feb-03-2022"},"2.0.0 ","[Core Modules]"," - Feb 03, 2022"),(0,i.kt)("p",null,"We released version 2 \ud83e\udd73\nBe mindful of breaking changes when upgrading.\nEnjoy multiple improvements and new features.\nCheck the ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/js/guides/upgrade-to-version-2"},"upgrade guide"),"."),(0,i.kt)("h3",{id:"compatibility-notes"},"Compatibility Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgrade the ES version to ",(0,i.kt)("inlineCode",{parentName:"li"},"es2019"),".")),(0,i.kt)("h3",{id:"new-functionality-1"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[connectivity]"," Create a new package with minimal API."),(0,i.kt)("li",{parentName:"ul"},"[connectivity]"," Add ",(0,i.kt)("inlineCode",{parentName:"li"},"registerDestination")," function to create destinations in the ",(0,i.kt)("inlineCode",{parentName:"li"},"destinations")," environment variable."),(0,i.kt)("li",{parentName:"ul"},"[connectivity]"," Support the ",(0,i.kt)("inlineCode",{parentName:"li"},"SamlAssertion")," flow in destination retrieval."),(0,i.kt)("li",{parentName:"ul"},"[http-client]"," Create a new package with minimal API.")),(0,i.kt)("h3",{id:"removed-functionality"},"Removed functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[generator]"," Remove the option: ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregatorDirectoryName")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregatorNpmPackageName")),(0,i.kt)("li",{parentName:"ul"},"[generator]"," Remove the option: ",(0,i.kt)("inlineCode",{parentName:"li"},"generateTypedocJson")),(0,i.kt)("li",{parentName:"ul"},"[generator]"," Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"packageJson")," function from aggregator-package"),(0,i.kt)("li",{parentName:"ul"},"[core]"," Remove some functions"),(0,i.kt)("li",{parentName:"ul"},"[analytics]"," Remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/analytics")," package")),(0,i.kt)("h3",{id:"new-module-structure"},"New module structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[core]"," We have split the ",(0,i.kt)("inlineCode",{parentName:"li"},"core")," package into smaller packages, so functions are moved to the target package.")),(0,i.kt)("h3",{id:"changed-signatures"},"Changed signatures"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[core]"," ",(0,i.kt)("inlineCode",{parentName:"li"},"EdmTypeField")," only support EDM types, no field types in generics")),(0,i.kt)("h3",{id:"changed-implementation"},"Changed implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[generator]"," changed the following implementations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServiceNameFormatter")," deprecated constructor removed, reserverdName parameter from typeNameToFactoryName method removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VdmNavigationpropety")," multiplicity, isMultiLink removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VdmFunctionImportReturnType")," isMulti removed"))),(0,i.kt)("li",{parentName:"ul"},"[openapi]"," changed the following implementations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executeRaw")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions."))),(0,i.kt)("li",{parentName:"ul"},"[odata-common]"," changed the following implementations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ComplexTypeField")," deprecated constructors removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Constructable")," Selectable removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateRequestBuilderBase")," prepare removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntityBase")," getCurrentMapKey, initializeCustomFields removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EnumField")," edmType removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Filter")," ","_","fieldName property removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FilterFunction")," toString, transformParameter removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Link")," clone, selects removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MethodRequestBuilder")," withCustomHeaders, withCustomQueryParameters, withCustomServicePath removed, build protected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ODataRequestConfig")," contentType, deprecated constructor removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ODataBatchRequestConfig")," batchId, content_type_prefix removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OneToOneLink")," clone removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UpdateRequestBuilderBase")," prepare, requiredFields, ignoredFields, withCustomVersionIdentifier removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions.."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executeRaw")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions."))),(0,i.kt)("li",{parentName:"ul"},"[odata-v2]"," changed the following implementations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executeRaw")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions."))),(0,i.kt)("li",{parentName:"ul"},"[odata-v4]"," changed the following implementations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executeRaw")," Request Builder APIs changed to use a single parameter, either a Destination or DestinationFetchOptions."))),(0,i.kt)("li",{parentName:"ul"},"[connectivity]"," changed the following implementations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getDestination")," changed to use DestinationFetchOptions as single parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getProxyRelatedAuthHeaders")," legacyNoAuthOnPremiseProxy case removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serviceToken")," uses ",(0,i.kt)("inlineCode",{parentName:"li"},"JWT")," instead of userJwt now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jwtBearerToken")," uses ",(0,i.kt)("inlineCode",{parentName:"li"},"JWT")," instead of userJwt now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchVerificationKeys")," merged with ",(0,i.kt)("inlineCode",{parentName:"li"},"executeFetchVerificationKeys"),", now only accepts URL as parameter"))),(0,i.kt)("li",{parentName:"ul"},"[http-client]"," changed the following implementations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executeHttpRequest")," fetches CsrfToken for non-GET requests by default.")))),(0,i.kt)("h2",{id:"1540-core-modules---feb-02-2022"},"1.54.0 ","[Core Modules]"," - Feb 02, 2022"),(0,i.kt)("h3",{id:"new-functionality-2"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[core]"," A new proxy type ",(0,i.kt)("inlineCode",{parentName:"li"},"PrivateLink")," is now supported. This proxy type is used when your destination represents a tunnel created via ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/products/PRIVATE_LINK/42acd88cb4134ba2a7d3e0e62c9fe6cf/6c7c8a9282e344979295efb882637cd4.html?locale=en-US"},"Private Link Service"),".")),(0,i.kt)("h2",{id:"1531-core-modules---jan-18-2022"},"1.53.1 ","[Core Modules]"," - Jan 18, 2022"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/releases/tag/v1.53.1"},"GitHub")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40sap-cloud-sdk"},"npm")),(0,i.kt)("h3",{id:"improvements-1"},"Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We updated the version of ",(0,i.kt)("inlineCode",{parentName:"li"},"@sap/edm-converters")," to ensure Node 14 compatibility for the OData code generator.")),(0,i.kt)("h3",{id:"fixed-issues"},"Fixed Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We fixed the missing token in the header issue for ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth2Password")," authentication type.")),(0,i.kt)("h2",{id:"cli---jan-5-2022"},"[CLI]"," - Jan 5, 2022"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-archive/cloud-sdk-cli"},"GitHub")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap-cloud-sdk/cli"},"npm")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Archive the GitHub repository."),(0,i.kt)("li",{parentName:"ul"},"Deprecate the npm package.")),(0,i.kt)("h2",{id:"sample-projects---jan-5-2022"},"[Sample Projects]"," - Jan 5, 2022"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js"},"GitHub")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publish the GitHub repository, showcasing the SAP Cloud SDK for JavaScript.")),(0,i.kt)("h2",{id:"1530-core-modules---december-9-2021"},"1.53.0 ","[Core Modules]"," - December 9, 2021"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/releases/tag/v1.53.0"},"GitHub")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40sap-cloud-sdk"},"npm")),(0,i.kt)("h3",{id:"fixed-issues-1"},"Fixed Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix destination retrieval in multi-tenant use cases and user based authorization flows like ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth2UserTokenExchange"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth2SAMLBearerAssertion")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth2JWTBearer"),".\nIf the destination is maintained in the provider account and a subscriber JWT is provided the ",(0,i.kt)("inlineCode",{parentName:"li"},"X-user-token")," is set with the subscriber JWT.\nThis is crucial to determine the tenant, if the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenServiceUrlType")," of the destination is ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e3c333f9de6245fca326993f2397c13a.html"},"common"),"."),(0,i.kt)("li",{parentName:"ul"},"Fix missing X-tenant header, if the authentication flow is ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth2ClientCredentials")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenServiceUrlType")," of the destination is ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/4e1d742a3d45472d83b411e141729795.html"},"common"),".")),(0,i.kt)("h2",{id:"1282-client-libraries---november-17-2021"},"1.28.2 ","[Client Libraries]"," - November 17, 2021"),(0,i.kt)("h3",{id:"compatibility-notes-1"},"Compatibility Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We stopped generating API documentation for typed client libraries.\nYou can discover all required API information via your IDE features like autocomplete and IntelliSense.")),(0,i.kt)("h3",{id:"new-functionality-3"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://news.sap.com/2021/10/sap-s4hana-cloud-2111-innovating-business-futures/"},"latest RTC release 2111 of SAP S/4HANA Cloud"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the latest RTC release 2021 FPS0 of SAP S/4HANA On-premise."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries for ",(0,i.kt)("a",{parentName:"strong",href:"https://api.sap.com/api/SAP_CP_Workflow_CF/resource"},"Workflow API for Cloud Foundry"),"."))),(0,i.kt)("h2",{id:"1520-core-modules---november-5-2021"},"1.52.0 ","[Core Modules]"," - November 5, 2021"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/releases/tag/v1.52.0"},"GitHub")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40sap-cloud-sdk"},"npm")),(0,i.kt)("h3",{id:"compatibility-notes-2"},"Compatibility Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We changed default cache isolation strategy from ",(0,i.kt)("inlineCode",{parentName:"li"},"IsolationStrategy.Tenant")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"IsolationStrategy.Tenant_User"),".\nThis applies when you set ",(0,i.kt)("inlineCode",{parentName:"li"},"useCache")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," while using a ",(0,i.kt)("inlineCode",{parentName:"li"},"getDestination")," method for a destination lookup.")),(0,i.kt)("h3",{id:"fixed-issues-2"},"Fixed Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We now cache a destination only when a ",(0,i.kt)("inlineCode",{parentName:"li"},"JWT")," contains all necessary information about a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"User"),".\nFor example, when using ",(0,i.kt)("inlineCode",{parentName:"li"},"IsolationStrategy.Tenant_User"),", the JWT has to contain both ",(0,i.kt)("strong",{parentName:"li"},"tenant id")," and ",(0,i.kt)("strong",{parentName:"li"},"user id"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"JWT")," has an expiration time, we'll use it to override the default cache expiration time of 5 minutes."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"provider")," token won't be used to retrieve a destination from cache from now on.")),(0,i.kt)("h2",{id:"1270-client-libraries---aug-20-2021"},"1.27.0 ","[Client Libraries]"," - Aug 20, 2021"),(0,i.kt)("h3",{id:"new-functionality-4"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://news.sap.com/2021/08/sap-s4hana-cloud-2108-engineering-innovations/"},"latest RTC release 2108 of SAP S/4HANA Cloud"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."),(0,i.kt)("li",{parentName:"ul"},"The service ",(0,i.kt)("inlineCode",{parentName:"li"},"API_CDR_FILE_DOWNLOAD_SRV")," is not included and will be released with the next release or on-demand.")))),(0,i.kt)("h2",{id:"1260-client-libraries---june-04-2021"},"1.26.0 ","[Client Libraries]"," - June 04, 2021"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/c6112985e09f40ec97dd43ad791ebaef/1.0/en-US/index.html"},"API documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"We released a regular update for pregenerated client libraries (also known as VDM) for the latest RTC release 2020 FPS2 of SAP S/4HANA On-premise.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://news.sap.com/2021/05/sap-s4hana-cloud-release-2105/"},"latest RTC release 2105 of SAP S/4HANA Cloud"),".")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."),(0,i.kt)("li",{parentName:"ul"},"The missing service ",(0,i.kt)("inlineCode",{parentName:"li"},"CACREDITWORTHINESS_0001")," is included."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"We released a regular update for pregenerated client libraries for ",(0,i.kt)("a",{parentName:"strong",href:"https://api.sap.com/api/SAP_CP_Workflow_CF/resource"},"Workflow API for Cloud Foundry"),".")))),(0,i.kt)("h2",{id:"1250-client-libraries---may-20-2021"},"1.25.0 ","[Client Libraries]"," - May 20, 2021"),(0,i.kt)("h3",{id:"new-functionality-5"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://news.sap.com/2021/05/sap-s4hana-cloud-release-2105/"},"latest RTC release 2105 of SAP S/4HANA Cloud"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."),(0,i.kt)("li",{parentName:"ul"},"The service ",(0,i.kt)("inlineCode",{parentName:"li"},"CACREDITWORTHINESS_0001")," is not included and will be released later.")))),(0,i.kt)("h2",{id:"1240-client-libraries---january-18-2021"},"1.24.0 ","[Client Libraries]"," - January 18, 2021"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/doc/38ea0a832f064060a834a2d328038ceb/1.0/en-US/index.html"},"API documentation"))),(0,i.kt)("h3",{id:"compatibility-notes-3"},"Compatibility Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A few operations were removed from some SAP S/4HANA Cloud 2102 services. These operations were never supported by the SAP S/4HANA system (like CRUD support for some entities), so no existing functionality is affected. The following services are affected:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Nota Fiscal \u2013 Create, Update")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"API_LOGBR_NOTAFISCAL_SRV")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Purchase Contracts")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"API_PURCHASECONTRACT_PROCESS_SRV")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Outbound Delivery (A2X)")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"API_OUTBOUND_DELIVERY_SRV_0002")))),(0,i.kt)("li",{parentName:"ul"},"The service ",(0,i.kt)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-vdm-purchasing-inforecord-service")," was renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-vdm-purchasing-info-record-service"),".")),(0,i.kt)("h3",{id:"new-functionality-6"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://news.sap.com/2021/02/sap-s4hana-cloud-2102-empowering-businesses-seize-opportunities/"},"latest RTC release 2102 of SAP S/4HANA Cloud"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the latest RTC release 2020 FPS1 of SAP S/4HANA On-premise."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones.")))),(0,i.kt)("h2",{id:"1220-client-libraries---november-6-2020"},"1.22.0 ","[Client Libraries]"," - November 6, 2020"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/doc/2d72cf72c3b946b0ab2b210d8d2d74da/1.0/en-US/index.html"},"API documentation"))),(0,i.kt)("h3",{id:"new-functionality-7"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://blogs.sap.com/2020/10/28/sap-s-4hana-cloud-2011-release/"},"latest RTC release 2011 of SAP S/4HANA Cloud"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData services and introduces new ones.")))),(0,i.kt)("h2",{id:"1210-client-libraries---september-10-2020"},"1.21.0 ","[Client Libraries]"," - September 10, 2020"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/doc/a87270cbfc6140abaa7968558ab10b84/1.0/en-US/index.html"},"API documentation"))),(0,i.kt)("h3",{id:"new-functionality-8"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released an extracurricular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://blogs.sap.com/2020/07/29/sap-s-4hana-cloud-2008-release/"},"latest RTC release 2008 of SAP S/4HANA Cloud"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update introduces new libraries for the SAP S/4HANA OData v4 services.")))),(0,i.kt)("h2",{id:"1200-client-libraries---august-13-2020"},"1.20.0 ","[Client Libraries]"," - August 13, 2020"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/doc/c0ae2e82b25e4b77855f00ec098ddf8f/1.0/en-US/index.html"},"API documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/search?q=%40sap%2Fcloud-sdk-vdm-*"},"npm"))),(0,i.kt)("h3",{id:"new-functionality-9"},"New Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We released a regular update for pregenerated client libraries (also known as VDM) for the ",(0,i.kt)("a",{parentName:"strong",href:"https://blogs.sap.com/2020/07/29/sap-s-4hana-cloud-2008-release/"},"latest RTC release 2008 of SAP S/4HANA Cloud"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The update covers all the changes to existing OData v2 services and introduces new ones.")))))}m.isMDXComponent=!0},43689:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const i=function(e){let{align:t}=e;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk-js"},n.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},15767:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const i=function(e){let{align:t}=e;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},n.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}}}]);