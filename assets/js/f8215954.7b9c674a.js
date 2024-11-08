"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6371],{77102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/entity/entity-builder","title":"entity-builder","description":"The API class provides an entity builder with the entityBuilder() method.","source":"@site/docs-js_versioned_docs/version-v2/features/odata/common/entity/entity-builder.mdx","sourceDirName":"features/odata/common/entity","slug":"/features/odata/common/entity/entity-builder","permalink":"/cloud-sdk/docs/js/v2/features/odata/common/entity/entity-builder","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/entity/entity-builder.mdx","tags":[],"version":"v2","frontMatter":{}}');var r=t(74848),i=t(28453);const o={},a=void 0,d={},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The API class provides an entity builder with the ",(0,r.jsx)(n.code,{children:"entityBuilder()"})," method.\nYou can set the properties using a fluent API.\nThe ",(0,r.jsx)(n.code,{children:"build()"})," method will return the new entity."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n\nbusinessPartnerApi.entityBuilder().firstName('Peter').lastName('Pan').build();\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can create navigation properties that link to other entities using their respective builders.\nNavigation properties with a one-to-many relation require an array of entities as a parameter.\nThis also applies if the array only contains one entity."}),"\n",(0,r.jsx)(n.p,{children:"The relation to the business partner address is a one-to-many relation here."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .lastName('Pan')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi.entityBuilder().country('Neverland').build()\n  ])\n  .build();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also add fields that are unknown according to the specification, if you add them as custom fields.\nTo achieve this, pass an object to the ",(0,r.jsx)(n.code,{children:"withCustomFields()"})," method.\nThe keys of the object represent the names of the custom fields and the values their respective values."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\n\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .withCustomFields({\n    myCustomField: 'this is custom'\n  })\n  .build();\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);