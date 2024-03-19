"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7586],{78590:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=o(74848),i=o(28453);const s={},r=void 0,c={id:"features/odata/common/function-imports/etag-function-import",title:"etag-function-import",description:"Operations do not support ETag handling automatically.",source:"@site/docs-js_versioned_docs/version-v2/features/odata/common/function-imports/etag-function-import.mdx",sourceDirName:"features/odata/common/function-imports",slug:"/features/odata/common/function-imports/etag-function-import",permalink:"/cloud-sdk/docs/js/v2/features/odata/common/function-imports/etag-function-import",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/function-imports/etag-function-import.mdx",tags:[],version:"v2",frontMatter:{}},a={},u=[];function d(t){const e={code:"code",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Operations do not support ",(0,n.jsx)(e.code,{children:"ETag"})," handling automatically.\nIf your service requires the version identifier of an entity to be present, you can pass it to the request on your own using the ",(0,n.jsx)(e.code,{children:"addCustomHeaders"})," method (see example below).\nWith this approach, you have to retrieve the required entity with a ",(0,n.jsx)(e.code,{children:"GET"})," request, before executing the function import.\nNote, that if the function import execution succeeds, the version identifier of your entity will be outdated."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:"myFunction()\n  .addCustomHeaders({ 'if-match': entity.versionIdentifier })\n  .execute(destination);\n"})})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},28453:(t,e,o)=>{o.d(e,{R:()=>r,x:()=>c});var n=o(96540);const i={},s=n.createContext(i);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);