"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3941],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={},u=void 0,c={unversionedId:"features/odata/common/entity/entity-builder",id:"features/odata/common/entity/entity-builder",title:"entity-builder",description:"In version 2.0 of the SAP Cloud SDK, two new changes have been introduced:",source:"@site/docs-js/features/odata/common/entity/entity-builder.mdx",sourceDirName:"features/odata/common/entity",slug:"/features/odata/common/entity/entity-builder",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/entity-builder",draft:!1,tags:[],version:"current",frontMatter:{}},l={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In version 2.0 of the SAP Cloud SDK, two new changes have been introduced:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an API class for each entity (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"BusinessPartnerApi"),"), providing access to its properties via a ",(0,a.kt)("inlineCode",{parentName:"li"},"schema"),", and"),(0,a.kt)("li",{parentName:"ul"},"a common method, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"businessPartnerService"),", with accessors for all the API classes.")),(0,a.kt)("p",null,"To build an entity by assigning its properties, use the entity builders provided by the API class.\nFirst invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},".entityBuilder")," method to access the builder, then you can set the properties and finally call the ",(0,a.kt)("inlineCode",{parentName:"p"},".build")," method to yield the entity.\nTo set navigation properties that link to other entities, you have to create the linked entities using their respective builders.\nNavigation properties that are linked through a one-to-many relation, are set by passing an array (even if that array only contains one entity).\nOne-to-one relations are assigned as objects.\nThe example below shows how you can create the data from above using the entity builder.\nThe relation to the business partner address is a one-to-many relation here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .lastName('Pan')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi.entityBuilder().country('Neverland').build()\n  ])\n  .build();\n")),(0,a.kt)("p",null,"You can also add fields, that are unknown according to the specification, if you add them as custom fields.\nTo achieve this, pass an object the ",(0,a.kt)("inlineCode",{parentName:"p"},".withCustomFields")," method, where the keys denote the names of the custom fields, and the values their respective values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .withCustomFields({\n    myCustomField: 'this is custom'\n  })\n  .build();\n")))}m.isMDXComponent=!0}}]);