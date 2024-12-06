"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[21762],{43702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/operations/deep-create","title":"deep-create","description":"It is also possible to create an entity together with related entities in a single request:","source":"@site/docs-js/features/odata/common/operations/deep-create.mdx","sourceDirName":"features/odata/common/operations","slug":"/features/odata/common/operations/deep-create","permalink":"/cloud-sdk/docs/js/v4/features/odata/common/operations/deep-create","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operations/deep-create.mdx","tags":[],"version":"current","frontMatter":{}}');var r=t(74848),a=t(28453);const o={},i=void 0,d={},c=[];function u(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"It is also possible to create an entity together with related entities in a single request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// build a business partner instance with one linked address\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nconst businessPartner = businessPartnerApi\n  .entityBuilder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi\n      .entityBuilder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      .build()\n  ])\n  .build();\n\n// execute the create request\nbusinessPartnerApi\n  .requestBuilder()\n  .create(businessPartner)\n  .execute(myDestination);\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Troubleshooting",type:"note",children:(0,r.jsxs)(n.p,{children:["When you try the example code above for testing the deep create feature, you might see some errors like ",(0,r.jsx)(n.code,{children:'"operation module BUA_CHECK_ADDRESS_VALIDITY_ALL; a check table is missing"'}),".\nTypically, it can happen if you are using a new system with a default configuration.\nCall the ",(0,r.jsx)(n.code,{children:"addressUsage()"})," method as shown in the example below to fix it."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const { businessPartnerApi, businessPartnerAddressApi, buPaAddressUsageApi } =\n  businessPartnerService();\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi\n      .entityBuilder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      // additional code starts\n      .toAddressUsage([\n        buPaAddressUsageApi.entityBuilder().addressUsage('XXDEFAULT').build()\n      ])\n      .build()\n  ])\n  .build();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also create an entity as a child of another entity with the ",(0,r.jsx)(n.code,{children:"asChildOf()"})," method."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);