"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9765],{64520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"features/odata/common/operations/replace","title":"replace","description":"To replace an entity instead of just updating specific fields, use the replaceWholeEntityWithPut() method:","source":"@site/docs-js/features/odata/common/operations/replace.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/replace","permalink":"/cloud-sdk/docs/js/features/odata/common/operations/replace","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operations/replace.mdx","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453);const a={},c=void 0,i={},d=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["To replace an entity instead of just updating specific fields, use the ",(0,s.jsx)(t.code,{children:"replaceWholeEntityWithPut()"})," method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\n\nbusinessPartnerApi\n  .requestBuilder()\n  .update(businessPartner)\n  .replaceWholeEntityWithPut();\n"})}),"\n",(0,s.jsx)(t.p,{children:"This will send a PUT request and include all existing properties on your entity, whether they were changed or not."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);