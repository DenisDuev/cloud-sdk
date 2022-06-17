"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9127],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),o=n(86010),s=n(72389),u=n(67392),l=n(7094),i=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,s=e.lazy,m=e.block,p=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,l.U)(),N=j.tabGroupChoices,w=j.setTabGroupChoices,O=(0,a.useState)(k),P=O[0],T=O[1],E=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var S=N[b];null!=S&&S!==P&&h.some((function(e){return e.value===S}))&&T(S)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==P&&(x(t),T(r),null!=b&&w(b,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,s=E.indexOf(e.currentTarget)-1;n=null!=(o=E[s])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},h.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:D,onClick:D},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(y.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function p(e){var t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},1975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(65488),u=n(85162),l=["components"],i={},c=void 0,d={unversionedId:"js/features/odata/common/entity/from-json",id:"js/features/odata/common/entity/from-json",title:"from-json",description:"Sometimes, it makes sense for you to store your data as a JSON object, that is based on the entity type.",source:"@site/docs/js/features/odata/common/entity/from-json.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/from-json",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/from-json",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/from-json.mdx",tags:[],version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1655448701,formattedLastUpdatedAt:"6/17/2022",frontMatter:{}},m={},p=[],f={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes, it makes sense for you to store your data as a JSON object, that is based on the entity type.\nFor example, when using the property names of the entity class as properties of your object.\nIf you are looking for a way to create an entity from a JSON response, that you got from an OData service, you are probably looking for ",(0,o.kt)("a",{parentName:"p",href:"#deserialize-an-odata-json-response-to-an-entity"},"entity deserialization"),"."),(0,o.kt)("p",null,"This would be the JSON representation of a business partner in the SAP Cloud SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "Peter",\n  "lastName": "Pan",\n  "toBusinessPartnerAddress": [\n    {\n      "country": "Neverland"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"You can use this data to build an entity using the ",(0,o.kt)("inlineCode",{parentName:"p"},".fromJson")," method.\nThe example below shows how you would create an instance of the business partner class using the ",(0,o.kt)("inlineCode",{parentName:"p"},".fromJson")," method."),(0,o.kt)(s.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\nconst businessPartner = businessPartnerApi.entityBuilder().fromJson({\n  firstName: 'Peter',\n  lastName: 'Pan',\n  toBusinessPartnerAddress: [\n    {\n      country: 'Neverland'\n    }\n  ]\n});\n"))),(0,o.kt)(u.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst businessPartner = BusinessPartner.builder().fromJson({\n  firstName: 'Peter',\n  lastName: 'Pan',\n  toBusinessPartnerAddress: [\n    {\n      country: 'Neverland'\n    }\n  ]\n});\n")))),(0,o.kt)("p",null,"If there are unknown fields present in the JSON object, they will be treated as custom fields."))}b.isMDXComponent=!0}}]);