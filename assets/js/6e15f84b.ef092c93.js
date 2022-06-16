"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1411],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),o="tabItem_OmH5";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(72389),u=n(67392),l=n(7094),s=n(12466),i=n(86010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,f=e.defaultValue,b=e.values,v=e.groupId,y=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==T&&!g.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var P=(0,l.U)(),N=P.tabGroupChoices,j=P.setTabGroupChoices,w=(0,a.useState)(T),x=w[0],O=w[1],E=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=N[v];null!=I&&I!==x&&g.some((function(e){return e.value===I}))&&O(I)}var Z=function(e){var t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==x&&(C(t),O(r),null!=v&&j(v,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},y)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},15927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=n(9877),l=n(72360),s=["components"],i={},c=void 0,p={unversionedId:"js/features/odata/common/operations/update",id:"js/features/odata/common/operations/update",title:"update",description:"The Update request builder allows you to send PUT or PATCH requests.",source:"@site/docs/js/features/odata/common/operations/update.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/update",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/update",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/update.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Frenken",lastUpdatedAt:1655382586,formattedLastUpdatedAt:"6/16/2022",frontMatter:{}},d={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Update request builder allows you to send ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," requests.\nBy default, ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," is used to only update the changed fields:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().update(businessPartner);\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder().update(businessPartner);\n")))),(0,o.kt)("p",null,"In the example above only the changed fields of the given ",(0,o.kt)("inlineCode",{parentName:"p"},"businessPartner")," instance are sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," service using ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH"),"."),(0,o.kt)("p",null,"To update the whole entity use ",(0,o.kt)("inlineCode",{parentName:"p"},"replaceWholeEntityWithPut"),":"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .update(businessPartner)\n  .replaceWholeEntityWithPut();\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .replaceWholeEntityWithPut();\n")))),(0,o.kt)("p",null,"This will send a ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," request and thereby replace the whole entity."),(0,o.kt)("p",null,"Entities can only be updated if ",(0,o.kt)("a",{parentName:"p",href:"#handling-of-etags"},"ETags")," match.\nIf you want to force an update of the entity regardless of the ETag configure the request to ignore version identifiers with ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n")))))}b.isMDXComponent=!0}}]);