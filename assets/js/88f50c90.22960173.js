"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5588],{71557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/operations/create-as-child-of","title":"create-as-child-of","description":"Assume you have already created a business partner and would like to add a new address to it:","source":"@site/docs-js_versioned_docs/version-v1/features/odata/common/operations/create-as-child-of.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/create-as-child-of","permalink":"/cloud-sdk/docs/js/v1/features/odata/common/operations/create-as-child-of","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/common/operations/create-as-child-of.mdx","tags":[],"version":"v1","frontMatter":{}}');var o=t(74848),a=t(28453);const r={},d=void 0,i={},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Assume you have already created a business partner and would like to add a new address to it:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const existingBusinessPartner = await BusinessPartner.requestBuilder()\n  .getByKey(myID)\n  .execute(myDestination);\n\nconst newAddress = new BusinessPartnerAddress()\n  .builder()\n  .country('DE')\n  .postalCode('14469')\n  .cityName('Potsdam')\n  .streetName('Konrad-Zuse-Ring')\n  .houseNumber('10')\n  .build();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This can be done by using the ",(0,o.jsx)(n.code,{children:"asChildOf"})," method which allows for creating an entity as a child of an existing entity.\nYou need to give the parent object and the field connecting the two entities:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"BusinessPartnerAddress.requestBuilder()\n  .create(newAddress)\n  .asChildOf(\n    existingBusinessPartner,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(myDestination);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(96540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);