"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[58181],{38229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/v4/expand-select","title":"expand-select","description":"In contrast to the OData v2 implementation, you have to select and expand separately.","source":"@site/docs-js_versioned_docs/version-v3/features/odata/v4/expand-select.mdx","sourceDirName":"features/odata/v4","slug":"/features/odata/v4/expand-select","permalink":"/cloud-sdk/docs/js/features/odata/v4/expand-select","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v3/features/odata/v4/expand-select.mdx","tags":[],"version":"v3","frontMatter":{}}');var a=n(74848),o=n(28453);const d={},r=void 0,i={},c=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In contrast to the OData v2 implementation, you have to select and expand separately.\nIn other words, selected properties are not expanded automatically as in v2."}),"\n",(0,a.jsxs)(t.p,{children:["The reason for this difference originates in the way select and expand work in OData v4.\nIn OData v4 you select within the expand-argument ",(0,a.jsx)(t.code,{children:"$expand=Friends($select=FirstName)"})," whereas in OData v2 you select via a path ",(0,a.jsx)(t.code,{children:"$select=Friends/FirstName&$expand=Friends"}),".\nThat's why the SAP Cloud SDK mimics this behavior for select and expand operations in its API for OData v4 type-safe clients."]}),"\n",(0,a.jsxs)(t.p,{children:["In the example above you select the ",(0,a.jsx)(t.code,{children:"LAST_NAME"})," field of the root entity and expand the navigation property ",(0,a.jsx)(t.code,{children:"FRIENDS"}),".\nIn the expanded entity the selected fields are ",(0,a.jsx)(t.code,{children:"FIRST_NAME"})," and ",(0,a.jsx)(t.code,{children:"ADDRESS_INFO"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The generated URL for this request will be:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"/People?$select=LastName&$expand=Friends($select=FirstName,AddressInfo)\n"})}),"\n",(0,a.jsx)(t.p,{children:"If no select operation is given, all non-navigational properties are included in the response."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var s=n(96540);const a={},o=s.createContext(a);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);