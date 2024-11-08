"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6828],{58027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"features/odata/v4/filter-one-to-many","title":"filter-one-to-many","description":"OData V4 introduces lambda operators e.g., any/all so that the root property of the one-to-many navigation properties can be filtered.","source":"@site/docs-js_versioned_docs/version-v1/features/odata/v4/filter-one-to-many.mdx","sourceDirName":"features/odata/v4","slug":"/features/odata/v4/filter-one-to-many","permalink":"/cloud-sdk/docs/js/v1/features/odata/v4/filter-one-to-many","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/v4/filter-one-to-many.mdx","tags":[],"version":"v1","frontMatter":{}}');var a=n(74848),s=n(28453);const r={},l=void 0,i={},d=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["OData V4 introduces ",(0,a.jsx)(t.a,{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LambdaOperators",children:"lambda operators"})," e.g., ",(0,a.jsx)(t.code,{children:"any"}),"/",(0,a.jsx)(t.code,{children:"all"})," so that the root property of the one-to-many navigation properties can be filtered.\nBelow is an example that demonstrates how to use the lambda operator ",(0,a.jsx)(t.code,{children:"any"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"/*\nGet all people that have at least one friend that matches all the following conditions:\n  - Has first name 'John'\n  - Has last name 'Miller'\n*/\n.filter(\n  any(\n    People.FRIENDS.filter(\n      People.FIRST_NAME.equals('John'),\n      People.LAST_NAME.equals('Miller')\n    )\n  )\n)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The generated ",(0,a.jsx)(t.code,{children:"$filter"})," parameter of the URL will be:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"$filter=(/any(a0:((a0/Friends/FirstName eq 'John' and a0/Friends/LastName eq 'Miller'))))\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(96540);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);