"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1091],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),o=n(72389),u=n(79443);var l=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(63616),i=n(86010),c="tabItem_1uMI";function d(e){var t,n,o,u=e.lazy,d=e.block,p=e.defaultValue,f=e.values,m=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,O=k.setTabGroupChoices,P=(0,a.useState)(g),T=P[0],j=P[1],x=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=w[m];null!=N&&N!==T&&y.some((function(e){return e.value===N}))&&j(N)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==T&&(E(t),j(r),null!=m&&O(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},30254:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=n(26396),l=n(58215),s=["components"],i={},c=void 0,d={unversionedId:"js/features/odata/common/operations/create",id:"js/features/odata/common/operations/create",title:"create",description:"The Create request builder allows you to send a POST request to create a new entity:",source:"@site/docs/js/features/odata/common/operations/create.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/create",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/create",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/create.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1644313546,formattedLastUpdatedAt:"2/8/2022",frontMatter:{}},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Create request builder allows you to send a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to create a new entity:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nconst businessPartner = businessPartnerApi.entityBuilder().build();\nbusinessPartnerApi.requestBuilder().create(businessPartner);\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const businessPartner = BusinessPartner.builder().build();\nBusinessPartner.requestBuilder().create(businessPartner);\n")))),(0,o.kt)("p",null,"In the example above we created an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," and sent it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," service in a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request."))}m.isMDXComponent=!0}}]);