"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[633],{92690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/etag","title":"etag","description":"An ETag is a version identifier that is often used to implement an optimistic locking mechanism.","source":"@site/docs-js/features/odata/common/etag.mdx","sourceDirName":"features/odata/common","slug":"/features/odata/common/etag","permalink":"/cloud-sdk/docs/js/features/odata/common/etag","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/etag.mdx","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),o=n(28453);const r={},a=void 0,d={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["An ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag",children:"ETag"})," is a version identifier that is often used to implement an optimistic locking mechanism.\nThe SAP Cloud SDK will try to read version identifiers from responses and set them when sending OData requests."]}),"\n",(0,i.jsx)(t.p,{children:"Consider the following example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const { businessPartnerApi } = businessPartnerService();\n\nasync function modifyBusinessPartner(id) {\n  const businessPartner = await businessPartnerApi\n    .requestBuilder()\n    .getByKey(id)\n    .execute(destination);\n\n  // do some modification\n  applyModification(businessPartner);\n\n  return businessPartnerApi\n    .requestBuilder()\n    .update(businessPartner)\n    .execute(destination);\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When executing ",(0,i.jsx)(t.code,{children:"getAll"})," and ",(0,i.jsx)(t.code,{children:"getByKey"})," requests, the SAP Cloud SDK will automatically attempt to extract the version identifier from the response and store it within the returned entity (",(0,i.jsx)(t.code,{children:"partner"})," in the example above).\nWhen executing ",(0,i.jsx)(t.code,{children:"update"})," requests, the version identifier will be sent in the ",(0,i.jsx)(t.code,{children:"If-match"})," request header."]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"If a service requires this header to be sent: Fetching the entity from the service first is essential to ensure that the ETag is present and up to date."}),(0,i.jsxs)(t.p,{children:["By default, an ETag is sent if it's present on the entity being modified.\n",(0,i.jsx)(t.code,{children:"ignoreVersionIdentifier()"})," will instead always send a ",(0,i.jsx)(t.code,{children:"*"})," which acts as a wildcard to match all ETags."]})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);