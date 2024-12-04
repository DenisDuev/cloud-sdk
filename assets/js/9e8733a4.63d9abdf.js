"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8047],{15684:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"guides/cf-cli","title":"Cloud Foundry","description":"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform","source":"@site/docs-java_versioned_docs/version-v3/guides/cf-cli.mdx","sourceDirName":"guides","slug":"/guides/cf-cli","permalink":"/cloud-sdk/docs/java/v3/guides/cf-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/guides/cf-cli.mdx","tags":[],"version":"v3","frontMatter":{"id":"cf-cli","title":"Cloud Foundry","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Cloud Foundry CLI","description":"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJavaSidebar","previous":{"title":"Deploy to Cloud Foundry","permalink":"/cloud-sdk/docs/java/v3/guides/cf-deploy"},"next":{"title":"SAP Cloud SDK on Linux","permalink":"/cloud-sdk/docs/java/v3/guides/sap-cloud-sdk-linux-how-to"}}');var i=o(74848),s=o(28453);const t={id:"cf-cli",title:"Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Foundry CLI",description:"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},a=void 0,l={},c=[{value:"Cloud Foundry Command-Line Interface",id:"cloud-foundry-command-line-interface",level:2},{value:"Bind Your Command-Line Interface to an API Endpoint",id:"bind-your-command-line-interface-to-an-api-endpoint",level:2},{value:"SAP Business Technology Platform",id:"sap-business-technology-platform",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"cloud-foundry-command-line-interface",children:"Cloud Foundry Command-Line Interface"}),"\n",(0,i.jsxs)(n.p,{children:["To deploy your app developed with SAP Cloud SDK to ",(0,i.jsx)(n.a,{href:"https://www.sap.com/products/cloud-platform.html",children:"SAP Business Technology Platform"})," you'll need Cloud Foundry command-line interface (CLI).\nYou can download latest release of DEB package ",(0,i.jsx)(n.a,{href:"https://github.com/cloudfoundry/cli/releases",children:"from the official CF GitHub repository"})," or follow ",(0,i.jsx)(n.a,{href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager",children:"instructions"})," to install it with you package manager: ",(0,i.jsx)(n.code,{children:"apt-get"}),", ",(0,i.jsx)(n.code,{children:"yum"})," and ",(0,i.jsx)(n.code,{children:"homebrew"})," are supported."]}),"\n",(0,i.jsx)(n.p,{children:"After installing the CLI you might need to reload you shell before it becomes available.\nTo check if it works run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cf\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bind-your-command-line-interface-to-an-api-endpoint",children:"Bind Your Command-Line Interface to an API Endpoint"}),"\n",(0,i.jsx)(n.p,{children:"Let's associate your Cloud Foundry CLI to your SAP account by providing an API endpoint and logging in with your account."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Select endpoint depending on your region:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Europe ",(0,i.jsx)(n.a,{href:"https://api.cf.eu10.hana.ondemand.com",children:"https://api.cf.eu10.hana.ondemand.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["US East: ",(0,i.jsx)(n.a,{href:"https://api.cf.us10.hana.ondemand.com",children:"https://api.cf.us10.hana.ondemand.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["US CENTRAL: ",(0,i.jsx)(n.a,{href:"https://api.cf.us20.hana.ondemand.com",children:"https://api.cf.us20.hana.ondemand.com"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To use a snippet for Europe run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cf api https://api.cf.eu10.hana.ondemand.com\n"})}),"\n",(0,i.jsx)(n.p,{children:"Provide your credentials for SAP BTP:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cf login\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more details on the Cloud Foundry CLI and SAP BTP follow this ",(0,i.jsx)(n.a,{href:"https://developers.sap.com/tutorials/cp-cf-download-cli.html",children:"official tutorial"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"sap-business-technology-platform",children:"SAP Business Technology Platform"}),"\n",(0,i.jsxs)(n.p,{children:["Find out more about the SAP Business Technology Platform, Cloud Foundry environment in the ",(0,i.jsx)(n.a,{href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/73beb06e127f4e47b849aa95344aabe1.html",children:"official documentation"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>a});var d=o(96540);const i={},s=d.createContext(i);function t(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);