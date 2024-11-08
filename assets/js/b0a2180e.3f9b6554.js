"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3262],{49496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"features/odata/common/entity/serialize-entity","title":"serialize-entity","description":"If you need to transform entities from the typed SAP Cloud SDK representation to their OData representation, use the serializeEntity() function of the entitySerializer from the @sap-cloud-sdk/odata-common package:","source":"@site/docs-js/features/odata/common/entity/serialize-entity.mdx","sourceDirName":"features/odata/common/entity","slug":"/features/odata/common/entity/serialize-entity","permalink":"/cloud-sdk/docs/js/features/odata/common/entity/serialize-entity","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/entity/serialize-entity.mdx","tags":[],"version":"current","frontMatter":{}}');var r=n(74848),i=n(28453);const o={},a=void 0,d={},c=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["If you need to transform entities from the typed SAP Cloud SDK representation to their OData representation, use the ",(0,r.jsx)(t.code,{children:"serializeEntity()"})," function of the ",(0,r.jsx)(t.code,{children:"entitySerializer"})," from the ",(0,r.jsx)(t.code,{children:"@sap-cloud-sdk/odata-common"})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { entitySerializer } from '@sap-cloud-sdk/odata-common';\nimport { businessPartnerService } from './generated/business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\n\nconst deserializedEntity = businessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .lastName('Pan')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi.entityBuilder().country('Neverland').build()\n  ])\n  .build();\n\nconst serializedEntity = entitySerializer(\n  businessPartnerApi.deSerializers\n).serializeEntity(deserializedEntity, businessPartnerApi);\n\nconsole.log(serializedEntity);\n//{\n//  FirstName: 'Peter',\n//  LastName: 'Pan',\n//  to_BusinessPartnerAddress: [\n//   {\n//      Country: 'Neverland'\n//    }\n//  ]\n//}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);