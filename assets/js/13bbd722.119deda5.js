"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[16320],{19469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"features/odata/common/operations/count","title":"count","description":"The method count() allows you to get the number of elements in a collection.","source":"@site/docs-js/features/odata/common/operations/count.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/count","permalink":"/cloud-sdk/docs/js/v4/features/odata/common/operations/count","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operations/count.mdx","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const i={},c=void 0,d={},a=[];function u(e){const n={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The method ",(0,s.jsx)(n.code,{children:"count()"})," allows you to get the number of elements in a collection.\nIt is only available for ",(0,s.jsx)(n.code,{children:"getAll()"})," requests and is added before the request execution:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().getAll().count();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The return type of count requests is a ",(0,s.jsx)(n.code,{children:"Promise<number>"}),".\nYou can combine the ",(0,s.jsx)(n.code,{children:"count()"})," with filter conditions.\nTo get the number of business partners with first name ",(0,s.jsx)(n.code,{children:"John"})," execute the following request:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .filter(businessPartnerApi.schema.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As defined in the OData spec ",(0,s.jsx)(n.code,{children:"count"})," is not affected by ",(0,s.jsx)(n.code,{children:"top"}),", ",(0,s.jsx)(n.code,{children:"skip"}),", and ",(0,s.jsx)(n.code,{children:"orderBy"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:[(0,s.jsx)(n.code,{children:"top()"})," and ",(0,s.jsx)(n.code,{children:"skip()"})," are ignored for count"]}),(0,s.jsx)(n.p,{children:"If you include these methods in a count request they will be ignored by the SAP Cloud SDK.\nThese three requests will all return the same value."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"businessPartnerApi.requestBuilder().getAll().top(5).count();\nbusinessPartnerApi.requestBuilder().getAll().skip(5).count();\nbusinessPartnerApi.requestBuilder().getAll().count();\n"})})]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);