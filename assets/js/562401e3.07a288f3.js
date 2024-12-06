"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[66373],{23872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"features/odata/v2/changeset-example","title":"changeset-example","description":"The example below is based on the Bills of Material service.","source":"@site/docs-js/features/odata/v2/changeset-example.mdx","sourceDirName":"features/odata/v2","slug":"/features/odata/v2/changeset-example","permalink":"/cloud-sdk/docs/js/v4/features/odata/v2/changeset-example","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/v2/changeset-example.mdx","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453);const c={},i=void 0,r={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The example below is based on the ",(0,s.jsx)(t.a,{href:"https://api.sap.com/api/OP_API_BILL_OF_MATERIAL_SRV_0002/overview",children:"Bills of Material service"}),".\nSince the function ",(0,s.jsx)(t.code,{children:"deleteBomHeaderWithEcn()"})," changes data, it is included with other changing requests like ",(0,s.jsx)(t.code,{children:"delete"})," in a changeset:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const {\n  materialBomApi,\n  operations: { deleteBomHeaderWithEcn }\n} = billOfMaterialV2Service();\n\nasync function batchExample(billOfMaterial: string) {\n  const functionRequestBuilder = deleteBomHeaderWithEcn({ billOfMaterial });\n  const updateRequestBuilder = materialBomApi\n    .requestBuilder()\n    .update(materialBomApi.entityBuilder().fromJson({ billOfMaterial }));\n\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    changeset(functionRequestBuilder, updateRequestBuilder)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  // ...\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var a=n(96540);const s={},o=a.createContext(s);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);