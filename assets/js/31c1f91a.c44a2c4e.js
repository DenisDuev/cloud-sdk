"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5818],{23873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/query-parameter/filter","title":"filter","description":"When operating on a collection of entities, the API offers filter( ... ) on the builders.","source":"@site/docs-js_versioned_docs/version-v1/features/odata/common/query-parameter/filter.mdx","sourceDirName":"features/odata/common/query-parameter","slug":"/features/odata/common/query-parameter/filter","permalink":"/cloud-sdk/docs/js/v1/features/odata/common/query-parameter/filter","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/common/query-parameter/filter.mdx","tags":[],"version":"v1","frontMatter":{}}');var r=t(74848),o=t(28453);const a={},i=void 0,l={},c=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["When operating on a collection of entities, the API offers ",(0,r.jsx)(n.code,{children:"filter( ... )"})," on the builders.\nIt directly corresponds to the ",(0,r.jsx)(n.code,{children:"$filter"})," parameter of the request."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/*\n  Get all business partners that either:\n    - Have first name 'Alice' but not last name 'Bob'\n    - Or have first name 'Mallory'\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(\n    or(\n      and(\n        BusinessPartner.FIRST_NAME.equals('Alice'),\n        BusinessPartner.LAST_NAME.notEquals('Bob')\n      ),\n      BusinessPartner.FIRST_NAME.equals('Mallory')\n    )\n  )\n  .execute(destination);\n"})}),"\n",(0,r.jsx)(n.p,{children:"The example above will translate to this filter parameter:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Take note of the order of ",(0,r.jsx)(n.code,{children:"and"})," and ",(0,r.jsx)(n.code,{children:"or"}),".\nAs ",(0,r.jsx)(n.code,{children:"or"})," is invoked on the result of ",(0,r.jsx)(n.code,{children:"and"})," it will form the outer expression while ",(0,r.jsx)(n.code,{children:"and"})," is an inner expression in the first branch of ",(0,r.jsx)(n.code,{children:"or"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In addition, the negation operator ",(0,r.jsx)(n.code,{children:"not"})," can also be used for wrapping any filter expressions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/*\n  Get all business partners that do not match any of the cases:\n    - Have first name 'Alice'\n    - Have last name 'Bob'\n*/\n.filter(\n  not(\n    or(\n      BusinessPartner.FIRST_NAME.equals('Alice'),\n      BusinessPartner.LAST_NAME.equals('Bob')\n    )\n  )\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$filter"})," parameter will then be generated like below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"$filter=not (FirstName eq 'Alice') or (LastName eq 'Bob'))\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It is also possible to pass multiple filters to the same filter function without concatenating them with ",(0,r.jsx)(n.code,{children:"and"})," or ",(0,r.jsx)(n.code,{children:"or"}),".\nThey will be concatenated with ",(0,r.jsx)(n.code,{children:"and"})," by default.\nThe two following examples are equal:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:".filter(\n  and(\n    BusinessPartner.FIRST_NAME.equals('Alice'),\n    BusinessPartner.LAST_NAME.notEquals('Bob')\n  )\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"The example above can be shortened to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:".filter(\n  BusinessPartner.FIRST_NAME.equals('Alice'),\n  BusinessPartner.LAST_NAME.notEquals('Bob')\n)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);