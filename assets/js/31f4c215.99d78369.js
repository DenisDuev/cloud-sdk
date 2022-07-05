"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[928],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||u;return t?o.createElement(f,a(a({ref:n},s),{},{components:t})):o.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,a=new Array(u);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<u;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3185:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var o=t(87462),r=t(63366),u=(t(67294),t(3905)),a=["components"],i={title:"SAP BTP Cloud Foundry Environment",sidebar_label:"SAP BTP Cloud Foundry",description:"SAP BTP Cloud Foundry environment is fully supported by the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,d={unversionedId:"java/environments/sap-btp-cloud-foundry-environment",id:"java/environments/sap-btp-cloud-foundry-environment",title:"SAP BTP Cloud Foundry Environment",description:"SAP BTP Cloud Foundry environment is fully supported by the SAP Cloud SDK for Java",source:"@site/docs/java/environments/sap-btp-cloud-foundry-environment.mdx",sourceDirName:"java/environments",slug:"/java/environments/sap-btp-cloud-foundry-environment",permalink:"/cloud-sdk/docs/java/environments/sap-btp-cloud-foundry-environment",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/environments/sap-btp-cloud-foundry-environment.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657012434,formattedLastUpdatedAt:"7/5/2022",frontMatter:{title:"SAP BTP Cloud Foundry Environment",sidebar_label:"SAP BTP Cloud Foundry",description:"SAP BTP Cloud Foundry environment is fully supported by the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/environments/sap-btp-environments-overview"},next:{title:"Kubernetes with SAP Gardener",permalink:"/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener"}},s={},c=[{value:"SAP Cloud SDK Features Supported on SAP BTP Cloud Foundry",id:"sap-cloud-sdk-features-supported-on-sap-btp-cloud-foundry",level:2}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,u.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html"},"The Cloud Foundry environment")," allows you to create polyglot cloud applications in Cloud Foundry.\nIt contains the SAP BTP, Cloud Foundry runtime service, which is based on the open-source application platform managed by the Cloud Foundry Foundation."),(0,u.kt)("p",null,"The SAP Cloud SDK for Java supports SAP BTP Cloud Foundry Environment out of the box."),(0,u.kt)("h2",{id:"sap-cloud-sdk-features-supported-on-sap-btp-cloud-foundry"},"SAP Cloud SDK Features Supported on SAP BTP Cloud Foundry"),(0,u.kt)("p",null,"Find below the list of features we currently support:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u2705 Consume SAP BTP services like Destination, Connectivity, IAS, XSUAA, and others"),(0,u.kt)("li",{parentName:"ul"},"\u2705 Multitenancy"),(0,u.kt)("li",{parentName:"ul"},"\u2705 Resilience & Caching"),(0,u.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA Cloud"),(0,u.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA On-Premise"),(0,u.kt)("li",{parentName:"ul"},"\u2705 Seamless use of typed clients provided by the SAP Cloud SDK")),(0,u.kt)("p",null,"In most situations the SAP Cloud SDK for Java will implicitly manage complexities of this runtime for you."))}m.isMDXComponent=!0}}]);