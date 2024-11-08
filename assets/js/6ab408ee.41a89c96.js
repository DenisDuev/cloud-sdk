"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7036],{19129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/operations/create-as-child-of","title":"create-as-child-of","description":"Assume you have already created a business partner and would like to add an address to it:","source":"@site/docs-js/features/odata/common/operations/create-as-child-of.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/create-as-child-of","permalink":"/cloud-sdk/docs/js/features/odata/common/operations/create-as-child-of","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operations/create-as-child-of.mdx","tags":[],"version":"current","frontMatter":{}}');var a=t(74848),o=t(28453);const r={},i=void 0,d={},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Assume you have already created a business partner and would like to add an address to it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nconst existingBusinessPartner = await businessPartnerApi\n  .requestBuilder()\n  .getByKey(myID)\n  .execute(myDestination);\n\nconst newAddress = businessPartnerAddressApi\n  .entityBuilder()\n  .country('DE')\n  .postalCode('14469')\n  .cityName('Potsdam')\n  .streetName('Konrad-Zuse-Ring')\n  .houseNumber('10')\n  .build();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This can be done by using the ",(0,a.jsx)(n.code,{children:"asChildOf()"})," method which allows for creating an entity as a child of an existing entity.\nYou need to give the parent object and the field connecting the two entities:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"businessPartnerAddressApi\n  .requestBuilder()\n  .create(newAddress)\n  .asChildOf(\n    existingBusinessPartner,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(myDestination);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);