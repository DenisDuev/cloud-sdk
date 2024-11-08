"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2340],{59674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"features/odata/common/query-parameter/filter-functions","title":"filter-functions","description":"There are predefined filter functions e.g. length, substring, substringOf in the core library, that allow for a wide range of filter expressions:","source":"@site/docs-js_versioned_docs/version-v2/features/odata/common/query-parameter/filter-functions.mdx","sourceDirName":"features/odata/common/query-parameter","slug":"/features/odata/common/query-parameter/filter-functions","permalink":"/cloud-sdk/docs/js/v2/features/odata/common/query-parameter/filter-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/query-parameter/filter-functions.mdx","tags":[],"version":"v2","frontMatter":{}}');var r=n(74848),o=n(28453);const i={},a=void 0,c={},l=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["There are predefined filter functions e.g. ",(0,r.jsx)(t.code,{children:"length"}),", ",(0,r.jsx)(t.code,{children:"substring"}),", ",(0,r.jsx)(t.code,{children:"substringOf"})," in the core library, that allow for a wide range of filter expressions:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"/*\nFetch all business partners who have a first name shorter than 5 letters\n*/\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .filter(length(businessPartnerApi.schema.FIRST_NAME).lessThan(5))\n  .execute(destination);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For filter functions with ",(0,r.jsx)(t.code,{children:"boolean"})," as the return type, the filter function can be used directly as a filter without ",(0,r.jsx)(t.code,{children:"equal(true)"}),".\nLogically, the two following examples are equivalent to each other:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"/*\n  $filter=startswith(FirstName, 'Bob') eq true\n*/\n.filter(\n  startsWith(businessPartnerApi.schema.FIRST_NAME, 'Bob').equal(true)\n)\n"})}),"\n",(0,r.jsx)(t.p,{children:"The filter expression can be shortened:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"  /*\n    $filter=startswith(FirstName, 'Bob')\n  */\n  .filter(\n    startsWith(businessPartnerApi.schema.FIRST_NAME, 'Bob')\n  )\n"})}),"\n",(0,r.jsx)(t.p,{children:"However, as some services might not support both versions shown above, you might have to choose one of them to fit the target system."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);