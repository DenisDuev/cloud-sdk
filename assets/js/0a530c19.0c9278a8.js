"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9987],{24880:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"features/mail-client/mail-client","title":"Send e-mails","description":"How to send emails from application deployed on the SAP BTP","source":"@site/docs-js_versioned_docs/version-v2/features/mail-client/mail-client.mdx","sourceDirName":"features/mail-client","slug":"/features/mail-client/","permalink":"/cloud-sdk/docs/js/v2/features/mail-client/","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/mail-client/mail-client.mdx","tags":[],"version":"v2","frontMatter":{"id":"mail-client","title":"Send e-mails","sidebar_label":"Send e-mails","description":"How to send emails from application deployed on the SAP BTP","keywords":["sap","cloud","sdk","mail","email","e-mail","BTP","on-premise","JavaScript","TypeScript"]},"sidebar":"docsJsSidebar","previous":{"title":"Execute an OpenAPI Request","permalink":"/cloud-sdk/docs/js/v2/features/openapi/execute-request"},"next":{"title":"Error Handling","permalink":"/cloud-sdk/docs/js/v2/features/error-handling"}}');var t=i(74848),o=i(28453);const a={id:"mail-client",title:"Send e-mails",sidebar_label:"Send e-mails",description:"How to send emails from application deployed on the SAP BTP",keywords:["sap","cloud","sdk","mail","email","e-mail","BTP","on-premise","JavaScript","TypeScript"]},l=void 0,d={},r=[{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Send an E-Mail",id:"send-an-e-mail",level:3},{value:"Send Multiple E-Mails",id:"send-multiple-e-mails",level:3},{value:"Send E-Mails in Sequential",id:"send-e-mails-in-sequential",level:4},{value:"Configure <code>nodemailer</code>",id:"configure-nodemailer",level:3},{value:"Proxy",id:"proxy",level:4},{value:"On-Premise Destination",id:"on-premise-destination",level:2},{value:"What&#39;s the Difference",id:"whats-the-difference",level:3},{value:"<code>SOCKS5</code> Proxy Implementation",id:"socks5-proxy-implementation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This documentation describes how you can send e-mails from applications deployed on the SAP BTP to your e-mail servers.\nWhen defining e-mail servers by using the ",(0,t.jsx)(n.code,{children:"destination"})," service on the SAP BTP, both ",(0,t.jsx)(n.code,{children:"Internet"})," and ",(0,t.jsx)(n.code,{children:"On-Prem"})," destinations are supported."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Run this command in your root directory of your project to install the ",(0,t.jsx)(n.code,{children:"mail-client"})," dependency and add it to your ",(0,t.jsx)(n.code,{children:"dependency"})," list:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install @sap-cloud-sdk/mail-client\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"In this section you find minimal examples illustrating how to send e-mails using the SAP Cloud SDK."}),"\n",(0,t.jsx)(n.h3,{id:"send-an-e-mail",children:"Send an E-Mail"}),"\n",(0,t.jsxs)(n.p,{children:["First, create a ",(0,t.jsx)(n.code,{children:"mailConfig"})," that contains all the essential information of an e-mail:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { sendMail, MailConfig } from '@sap-cloud-sdk/mail-client';\n\nconst mailConfig: MailConfig = {\n  from: 'from@example.com',\n  to: 'to@example.com',\n  subject: 'e-mail subject',\n  text: 'e-mail text'\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You send the e-mail by calling ",(0,t.jsx)(n.code,{children:"sendMail"})," with your ",(0,t.jsx)(n.code,{children:"mailConfig"})," as argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig]);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The first parameter is either a ",(0,t.jsx)(n.a,{href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.Destination",children:"destination"})," object or ",(0,t.jsx)(n.a,{href:"pathname:///api/v2/interfaces/sap_cloud_sdk_connectivity.DestinationFetchOptions",children:"DestinationFetchOptions"}),".\nFor productive environment, you should use the ",(0,t.jsx)(n.code,{children:"destination service"})," on the SAP BTP and reference the destination by name just like the example above.\n",(0,t.jsx)(n.code,{children:"{ destinationName: 'my-mail-destination' }"})," is the minimal object that is typed as ",(0,t.jsx)(n.code,{children:"DestinationFetchOptions"}),".\nFor test environment, instead of using the ",(0,t.jsx)(n.code,{children:"DestinationFetchOptions"}),", you can also pass a complete ",(0,t.jsx)(n.code,{children:"destination"})," object."]}),"\n",(0,t.jsx)(n.admonition,{title:"Caution",type:"caution",children:(0,t.jsx)(n.p,{children:"As the destination object might contain credentials, using it in production should be avoided."})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about the abstraction of the ",(0,t.jsx)(n.code,{children:"destination"})," in the documentation ",(0,t.jsx)(n.a,{href:"/cloud-sdk/docs/js/v2/features/connectivity/destinations",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"send-multiple-e-mails",children:"Send Multiple E-Mails"}),"\n",(0,t.jsxs)(n.p,{children:["The code snippets below shows how to send two e-mails with the ",(0,t.jsx)(n.code,{children:"mailConfig"})," that you created in the previous example.\nThe e-mails are sent in parallel by default."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig, mailConfig]);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"send-e-mails-in-sequential",children:"Send E-Mails in Sequential"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes you prefer sending e-mail in sequential instead of in parallel due to e.g., the rate limit of your e-mail server.\nTo send e-mails in sequential, set the ",(0,t.jsx)(n.code,{children:"parallel"})," option to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig, mailConfig], {\n  sdkOptions: {\n    parallel: false\n  }\n});\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["As the parallelization is the default behaviour, you don't have to set ",(0,t.jsx)(n.code,{children:"parallel: true"})," explicitly."]})}),"\n",(0,t.jsxs)(n.h3,{id:"configure-nodemailer",children:["Configure ",(0,t.jsx)(n.code,{children:"nodemailer"})]}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK uses the node package ",(0,t.jsx)(n.code,{children:"nodemailer"})," under the wood.\n",(0,t.jsx)(n.code,{children:"nodemailer"})," supports creating a ",(0,t.jsx)(n.code,{children:"transport"})," based on options listed in their ",(0,t.jsx)(n.a,{href:"https://nodemailer.com/smtp/",children:"documentation"}),".\nThe SAP Cloud SDK exposes these options (as ",(0,t.jsx)(n.code,{children:"SmtpTransportOptions"}),") and will transfer them based on user input.\nFor example, you can provide the ",(0,t.jsx)(n.code,{children:"tls"})," option like below to circumvent issues with self-signed certificates:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig], {\n  tls: {\n    rejectUnauthorized: false\n  }\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK API documentation of the complete ",(0,t.jsx)(n.code,{children:"SmtpTransportOptions"})," can be found in the API doc ",(0,t.jsx)(n.a,{href:"pathname:///api/v2/interfaces/mailclient_src.SmtpTransportOptions",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"proxy",children:"Proxy"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"nodemailer"})," also supports defining proxy option as mentioned ",(0,t.jsx)(n.a,{href:"https://nodemailer.com/smtp/proxies/",children:"here"}),".\nSimilar to other ",(0,t.jsx)(n.code,{children:"nodemailer"})," options, the ",(0,t.jsx)(n.code,{children:"proxy"})," key is also part of the ",(0,t.jsx)(n.code,{children:"SmtpTransportOptions"}),".\nYou can find a minimal example below for defining an HTTP proxy:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"sendMail({ destinationName: 'my-mail-destination' }, [mailConfig], {\n  proxy: 'http://my-proxy-host:1234'\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Using socks proxy is not supported for the time being.\nFor on-premise connectivity via the connectivity service on the SAP BTP, please check the next section."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK will pass the proxy option directly to the ",(0,t.jsx)(n.code,{children:"nodemailer"}),", but the proxy feature is not end-to-end tested."]})}),"\n",(0,t.jsx)(n.h2,{id:"on-premise-destination",children:"On-Premise Destination"}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK supports using ",(0,t.jsx)(n.code,{children:"On-Premise"})," destination as well.\nFrom the SAP Cloud SDK API perspective, the code looks similar, no matter you use ",(0,t.jsx)(n.code,{children:"On-Premise"})," destinations or ",(0,t.jsx)(n.code,{children:"Internet"})," destinations.\nThe only difference is that you have to reference the name of the On-Premise destination, which is obvious."]}),"\n",(0,t.jsx)(n.h3,{id:"whats-the-difference",children:"What's the Difference"}),"\n",(0,t.jsxs)(n.p,{children:["First, for applications deployed on the SAP BTP, you need a ",(0,t.jsx)(n.code,{children:"connectivity"})," service for connecting to an ",(0,t.jsx)(n.code,{children:"On-Premise"})," destination.\nSecond, a ",(0,t.jsx)(n.code,{children:"Cloud Connector"})," is used as a proxy for accessing the ",(0,t.jsx)(n.code,{children:"On-Premise"})," system.\nPlease make sure the mail destination is configured correctly as discussed in the ",(0,t.jsx)(n.a,{href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/8d1f989deca1455dabc3d81b433fbdaf.html",children:"documentation"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"socks5-proxy-implementation",children:[(0,t.jsx)(n.code,{children:"SOCKS5"})," Proxy Implementation"]}),"\n",(0,t.jsxs)(n.p,{children:["Using a ",(0,t.jsx)(n.code,{children:"SOCKS5"})," proxy for accessing on-premise systems from applications on SAP BTP requires the ",(0,t.jsx)(n.code,{children:"SOCKS5"})," authentication flow as explained ",(0,t.jsx)(n.a,{href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/cd1583775afa43f0bb9ec69d9dbcc880.html?locale=en-US",children:"here"}),".\nThe SAP Cloud SDK handles the ",(0,t.jsx)(n.code,{children:"SOCKS5"})," proxy implementation automatically when detecting an ",(0,t.jsx)(n.code,{children:"On-Premise"})," mail destination."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For some on-premise e-mail server, including our test server, the parallelization of sending email might be a challenge.\nYou can disable the parallelization by passing ",(0,t.jsx)(n.code,{children:"parallel: false"})," as mentioned before."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(96540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);