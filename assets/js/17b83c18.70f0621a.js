"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[88768],{30226:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"features/odata/common/operations/ignore-or-overwrite-version","title":"ignore-or-overwrite-version","description":"Entities can only be updated or deleted if ETags match.","source":"@site/docs-js_versioned_docs/version-v3/features/odata/common/operations/ignore-or-overwrite-version.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/ignore-or-overwrite-version","permalink":"/cloud-sdk/docs/js/features/odata/common/operations/ignore-or-overwrite-version","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v3/features/odata/common/operations/ignore-or-overwrite-version.mdx","tags":[],"version":"v3","frontMatter":{}}');var r=o(74848),s=o(28453);const i={},a=void 0,d={},c=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Entities can only be updated or deleted if ",(0,r.jsx)(n.a,{href:"#handling-of-etags",children:"ETags"})," match.\nIf you want to force either an update or the deletion of the entity regardless of the ETag, configure the request to ignore version identifiers with the ",(0,r.jsx)(n.code,{children:"ignoreVersionIdentifier()"})," method."]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example with an update:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also overwrite ETags using method ",(0,r.jsx)(n.code,{children:"setVersionIdentifier()"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .update(businessPartner)\n  .setVersionIdentifier('etag');\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above, the ETag ",(0,r.jsx)(n.code,{children:"etag"})," is used instead of the original one."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);