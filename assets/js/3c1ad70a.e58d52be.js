"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[75789],{59239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"environments/code/operator-destination-service","title":"operator-destination-service","description":"","source":"@site/docs-js/environments/code/operator-destination-service.mdx","sourceDirName":"environments/code","slug":"/environments/code/operator-destination-service","permalink":"/cloud-sdk/docs/js/v4/environments/code/operator-destination-service","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/environments/code/operator-destination-service.mdx","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const i={},a=void 0,c={},d=[];function l(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="operator-destination-service.yml"',children:"apiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceInstance\nmetadata:\n  name: operator-destination-service\nspec:\n  serviceOfferingName: destination\n  servicePlanName: lite\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="operator-destination-binding.yml"',children:"apiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceBinding\nmetadata:\n  name: operator-destination-service\nspec:\n  serviceInstanceName: operator-destination-service\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);