"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[98209],{42744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/operations/set-ignored-fields","title":"set-ignored-fields","description":"If you changed properties on an entity, that you do not want to send in the payload of the update request, use the setIgnoredFields method to ignore them.","source":"@site/docs-js_versioned_docs/version-v1/features/odata/common/operations/set-ignored-fields.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/set-ignored-fields","permalink":"/cloud-sdk/docs/js/v1/features/odata/common/operations/set-ignored-fields","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/common/operations/set-ignored-fields.mdx","tags":[],"version":"v1","frontMatter":{}}');var o=n(74848),r=n(28453);const a={},d=void 0,i={},c=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["If you changed properties on an entity, that you do not want to send in the payload of the update request, use the ",(0,o.jsx)(t.code,{children:"setIgnoredFields"})," method to ignore them."]}),"\n",(0,o.jsxs)(t.p,{children:["In the following example, the ",(0,o.jsx)(t.code,{children:"PATCH"})," request won't contain changes that were made to the ",(0,o.jsx)(t.code,{children:"FIRST_NAME"})," property of the business partner."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// Get a business partner\nconst businessPartner = await BusinessPartner.requestBuilder()\n  .getByKey('1')\n  .execute({ destinationName: 'myDestination' });\n\n// Change first name and last name\nbusinessPartner.firstName = 'Steve';\nbusinessPartner.lastName = 'Smith';\n\n// Send a PATCH request with `{ \"LastName\" : \"Smith\" }`  and do not include the changed first name\nBusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .setIgnoredFields(BusinessPartner.FIRST_NAME);\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(96540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);