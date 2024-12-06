"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[30500],{32615:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"features/odata/common/function-imports/etag-function-import","title":"etag-function-import","description":"Operations do not support ETag handling automatically.","source":"@site/docs-js_versioned_docs/version-v3/features/odata/common/function-imports/etag-function-import.mdx","sourceDirName":"features/odata/common/function-imports","slug":"/features/odata/common/function-imports/etag-function-import","permalink":"/cloud-sdk/docs/js/features/odata/common/function-imports/etag-function-import","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v3/features/odata/common/function-imports/etag-function-import.mdx","tags":[],"version":"v3","frontMatter":{}}');var i=o(74848),s=o(28453);const r={},c=void 0,a={},u=[];function d(t){const e={code:"code",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Operations do not support ETag handling automatically.\nIf your service requires the version identifier of an entity to be present, you can pass it to the request on your own using the ",(0,i.jsx)(e.code,{children:"addCustomHeaders()"})," method (see example below).\nWith this approach, you have to retrieve the required entity with a ",(0,i.jsx)(e.code,{children:"GET"})," request, before executing the function import.\nNote, that if the function import execution succeeds, the version identifier of your entity will be outdated."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"myFunction()\n  .addCustomHeaders({ 'if-match': entity.versionIdentifier })\n  .execute(destination);\n"})})]})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},28453:(t,e,o)=>{o.d(e,{R:()=>r,x:()=>c});var n=o(96540);const i={},s=n.createContext(i);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);