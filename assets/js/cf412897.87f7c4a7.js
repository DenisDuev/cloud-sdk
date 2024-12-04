"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4735],{14644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"features/odata/v4/filter-parent-child","title":"filter-parent-child","description":"Depending on the context of the filter it will either filter the parent or the children.","source":"@site/docs-js_versioned_docs/version-v2/features/odata/v4/filter-parent-child.mdx","sourceDirName":"features/odata/v4","slug":"/features/odata/v4/filter-parent-child","permalink":"/cloud-sdk/docs/js/v2/features/odata/v4/filter-parent-child","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/v4/filter-parent-child.mdx","tags":[],"version":"v2","frontMatter":{}}');var r=n(74848),s=n(28453);const l={},i=void 0,a={},c=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Depending on the context of the filter it will either filter the parent or the children.\nIn our example, we have a ",(0,r.jsx)(t.code,{children:"PERSON"})," related to zero to N ",(0,r.jsx)(t.code,{children:"FRIENDS"})," which are both of type people."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to get all people with first name ",(0,r.jsx)(t.code,{children:"John"})," the query is:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .filter(peopleApi.schema.FIRST_NAME.equals('John'));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you want to get all people who have at least one friend with first name ",(0,r.jsx)(t.code,{children:"John"}),", the query is:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .filter(\n    peopleApi.schema.FRIENDS.filter(\n      any(peopleApi.schema.FIRST_NAME.equals('John'))\n    )\n  );\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The lambda ",(0,r.jsx)(t.code,{children:"all"})," would enforce that all friends must have the first name ",(0,r.jsx)(t.code,{children:"John"}),".\nThe two queries above filter the parent entity person."]}),"\n",(0,r.jsx)(t.p,{children:"In case you want to get all people but reduce the friends in the response, the filter has to be inside the expand:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .expand(\n    peopleApi.schema.FRIENDS.filter(peopleApi.schema.FIRST_NAME.equals('John'))\n  );\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will return all people but only the friends with the first name ",(0,r.jsx)(t.code,{children:"John"})," will be included in the response."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);