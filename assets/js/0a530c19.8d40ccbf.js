"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return t?i.createElement(h,l(l({ref:n},d),{},{components:t})):i.createElement(h,l({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},76210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const o={id:"mail-client",title:"Send e-mails",sidebar_label:"Send e-mails",description:"How to send emails from application deployed on the SAP BTP",keywords:["sap","cloud","sdk","mail","email","e-mail","BTP","on-premise","JavaScript","TypeScript"]},l=void 0,r={unversionedId:"features/mail-client/mail-client",id:"version-v2/features/mail-client/mail-client",title:"Send e-mails",description:"How to send emails from application deployed on the SAP BTP",source:"@site/docs-js_versioned_docs/version-v2/features/mail-client/mail-client.mdx",sourceDirName:"features/mail-client",slug:"/features/mail-client/",permalink:"/cloud-sdk/docs/js/v2/features/mail-client/",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/mail-client/mail-client.mdx",tags:[],version:"v2",frontMatter:{id:"mail-client",title:"Send e-mails",sidebar_label:"Send e-mails",description:"How to send emails from application deployed on the SAP BTP",keywords:["sap","cloud","sdk","mail","email","e-mail","BTP","on-premise","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Execute an OpenAPI Request",permalink:"/cloud-sdk/docs/js/v2/features/openapi/execute-request"},next:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/v2/features/error-handling"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Send an E-Mail",id:"send-an-e-mail",level:3},{value:"Send Multiple E-Mails",id:"send-multiple-e-mails",level:3},{value:"Send E-Mails in Sequential",id:"send-e-mails-in-sequential",level:4},{value:"Configure <code>nodemailer</code>",id:"configure-nodemailer",level:3},{value:"Proxy",id:"proxy",level:4},{value:"On-Premise Destination",id:"on-premise-destination",level:2},{value:"What&#39;s the Difference",id:"whats-the-difference",level:3},{value:"<code>SOCKS5</code> Proxy Implementation",id:"socks5-proxy-implementation",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This documentation describes how you can send e-mails from applications deployed on the SAP BTP to your e-mail servers.\nWhen defining e-mail servers by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," service on the SAP BTP, both ",(0,a.kt)("inlineCode",{parentName:"p"},"Internet")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"On-Prem")," destinations are supported."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Run this command in your root directory of your project to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"mail-client")," dependency and add it to your ",(0,a.kt)("inlineCode",{parentName:"p"},"dependency")," list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @sap-cloud-sdk/mail-client\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In this section you find minimal examples illustrating how to send e-mails using the SAP Cloud SDK."),(0,a.kt)("h3",{id:"send-an-e-mail"},"Send an E-Mail"),(0,a.kt)("p",null,"First, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"mailConfig")," that contains all the essential information of an e-mail:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { sendMail, MailConfig } from '@sap-cloud-sdk/mail-client';\n\nconst mailConfig: MailConfig = {\n  from: 'from@example.com',\n  to: 'to@example.com',\n  subject: 'e-mail subject',\n  text: 'e-mail text'\n};\n")),(0,a.kt)("p",null,"You send the e-mail by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"sendMail")," with your ",(0,a.kt)("inlineCode",{parentName:"p"},"mailConfig")," as argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig]);\n")),(0,a.kt)("p",null,"The first parameter is either a ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.Destination"},"destination")," object or ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions"},"DestinationFetchOptions"),".\nFor productive environment, you should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"destination service")," on the SAP BTP and reference the destination by name just like the example above.\n",(0,a.kt)("inlineCode",{parentName:"p"},"{ destinationName: 'my-mail-destination' }")," is the minimal object that is typed as ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationFetchOptions"),".\nFor test environment, instead of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationFetchOptions"),", you can also pass a complete ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," object."),(0,a.kt)("admonition",{title:"Caution",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"As the destination object might contain credentials, using it in production should be avoided.")),(0,a.kt)("p",null,"You can read more about the abstraction of the ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," in the documentation ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations"},"here"),"."),(0,a.kt)("h3",{id:"send-multiple-e-mails"},"Send Multiple E-Mails"),(0,a.kt)("p",null,"The code snippets below shows how to send two e-mails with the ",(0,a.kt)("inlineCode",{parentName:"p"},"mailConfig")," that you created in the previous example.\nThe e-mails are sent in parallel by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig, mailConfig]);\n")),(0,a.kt)("h4",{id:"send-e-mails-in-sequential"},"Send E-Mails in Sequential"),(0,a.kt)("p",null,"Sometimes you prefer sending e-mail in sequential instead of in parallel due to e.g., the rate limit of your e-mail server.\nTo send e-mails in sequential, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig, mailConfig], {\n  sdkOptions: {\n    parallel: false\n  }\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"As the parallelization is the default behaviour, you don't have to set ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel: true")," explicitly.")),(0,a.kt)("h3",{id:"configure-nodemailer"},"Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"nodemailer")),(0,a.kt)("p",null,"The SAP Cloud SDK uses the node package ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemailer")," under the wood.\n",(0,a.kt)("inlineCode",{parentName:"p"},"nodemailer")," supports creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"transport")," based on options listed in their ",(0,a.kt)("a",{parentName:"p",href:"https://nodemailer.com/smtp/"},"documentation"),".\nThe SAP Cloud SDK exposes these options (as ",(0,a.kt)("inlineCode",{parentName:"p"},"SmtpTransportOptions"),") and will transfer them based on user input.\nFor example, you can provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," option like below to circumvent issues with self-signed certificates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig], {\n  tls: {\n    rejectUnauthorized: false\n  }\n});\n")),(0,a.kt)("p",null,"The SAP Cloud SDK API documentation of the complete ",(0,a.kt)("inlineCode",{parentName:"p"},"SmtpTransportOptions")," can be found in the API doc ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/v2/interfaces/mailclient_src.SmtpTransportOptions"},"here"),"."),(0,a.kt)("h4",{id:"proxy"},"Proxy"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nodemailer")," also supports defining proxy option as mentioned ",(0,a.kt)("a",{parentName:"p",href:"https://nodemailer.com/smtp/proxies/"},"here"),".\nSimilar to other ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemailer")," options, the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," key is also part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SmtpTransportOptions"),".\nYou can find a minimal example below for defining an HTTP proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig], {\n  proxy: 'http://my-proxy-host:1234'\n});\n")),(0,a.kt)("p",null,"Using socks proxy is not supported for the time being.\nFor on-premise connectivity via the connectivity service on the SAP BTP, please check the next section."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The SAP Cloud SDK will pass the proxy option directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemailer"),", but the proxy feature is not end-to-end tested.")),(0,a.kt)("h2",{id:"on-premise-destination"},"On-Premise Destination"),(0,a.kt)("p",null,"The SAP Cloud SDK supports using ",(0,a.kt)("inlineCode",{parentName:"p"},"On-Premise")," destination as well.\nFrom the SAP Cloud SDK API perspective, the code looks similar, no matter you use ",(0,a.kt)("inlineCode",{parentName:"p"},"On-Premise")," destinations or ",(0,a.kt)("inlineCode",{parentName:"p"},"Internet")," destinations.\nThe only difference is that you have to reference the name of the On-Premise destination, which is obvious."),(0,a.kt)("h3",{id:"whats-the-difference"},"What's the Difference"),(0,a.kt)("p",null,"First, for applications deployed on the SAP BTP, you need a ",(0,a.kt)("inlineCode",{parentName:"p"},"connectivity")," service for connecting to an ",(0,a.kt)("inlineCode",{parentName:"p"},"On-Premise")," destination.\nSecond, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cloud Connector")," is used as a proxy for accessing the ",(0,a.kt)("inlineCode",{parentName:"p"},"On-Premise")," system.\nPlease make sure the mail destination is configured correctly as discussed in the ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/8d1f989deca1455dabc3d81b433fbdaf.html"},"documentation"),"."),(0,a.kt)("h3",{id:"socks5-proxy-implementation"},(0,a.kt)("inlineCode",{parentName:"h3"},"SOCKS5")," Proxy Implementation"),(0,a.kt)("p",null,"Using a ",(0,a.kt)("inlineCode",{parentName:"p"},"SOCKS5")," proxy for accessing on-premise systems from applications on SAP BTP requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"SOCKS5")," authentication flow as explained ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/cd1583775afa43f0bb9ec69d9dbcc880.html?locale=en-US"},"here"),".\nThe SAP Cloud SDK handles the ",(0,a.kt)("inlineCode",{parentName:"p"},"SOCKS5")," proxy implementation automatically when detecting an ",(0,a.kt)("inlineCode",{parentName:"p"},"On-Premise")," mail destination."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For some on-premise e-mail server, including our test server, the parallelization of sending email might be a challenge.\nYou can disable the parallelization by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"parallel: false")," as mentioned before.")))}m.isMDXComponent=!0}}]);