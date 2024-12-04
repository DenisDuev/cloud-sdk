"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3374],{90433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"features/odata/v4/subqueries-in-expand","title":"subqueries-in-expand","description":"Note that you can create very complex queries within the expand scope:","source":"@site/docs-js/features/odata/v4/subqueries-in-expand.mdx","sourceDirName":"features/odata/v4","slug":"/features/odata/v4/subqueries-in-expand","permalink":"/cloud-sdk/docs/js/features/odata/v4/subqueries-in-expand","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/v4/subqueries-in-expand.mdx","tags":[],"version":"current","frontMatter":{}}');var r=t(74848),o=t(28453);const a={},i=void 0,c={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Note that you can create very complex queries within the expand scope:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .expand(\n    peopleApi.schema.FRIENDS.select(\n      peopleApi.schema.FIRST_NAME,\n      peopleApi.schema.ADDRESS_INFO\n    )\n      .filter(peopleApi.schema.LAST_NAME.equals('Miller'))\n      .orderBy(asc(peopleApi.schema.GENDER))\n      .top(1)\n      .skip(1)\n  );\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the filter will reduce the number of friends to be shown.\nThe effect of a filter depends on whether it is used inside or outside an ",(0,r.jsx)(n.code,{children:"expand()"})," method.\nThe different cases are explained in ",(0,r.jsx)(n.a,{href:"#filterParentChildren",children:"filters in expand"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The URL for the query will be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"/People?$expand=Friends($select=FirstName,AddressInfo;$filter=(LastName eq 'Miller');$skip=1;$top=1;$orderby=Gender asc)\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);