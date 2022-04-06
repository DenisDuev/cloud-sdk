"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4685],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87462),a=n(67294),l=n(72389),o=n(29548),u=n(86010),i="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,s=e.block,c=e.defaultValue,d=e.values,f=e.groupId,m=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],E=w[1],x=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=k[f];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&E(O)}var A=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==T&&(j(t),E(r),null!=f&&N(f,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},m)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:A,onClick:A},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},20397:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(9877),u=n(58215),i=["components"],p={},s=void 0,c={unversionedId:"js/features/odata/v4/filter-parent-child",id:"js/features/odata/v4/filter-parent-child",title:"filter-parent-child",description:"Depending on the context of the filter it will either filter the parent or the children.",source:"@site/docs/js/features/odata/v4/filter-parent-child.mdx",sourceDirName:"js/features/odata/v4",slug:"/js/features/odata/v4/filter-parent-child",permalink:"/cloud-sdk/docs/js/features/odata/v4/filter-parent-child",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/filter-parent-child.mdx",tags:[],version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1649251628,formattedLastUpdatedAt:"4/6/2022",frontMatter:{}},d=[],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Depending on the context of the filter it will either filter the parent or the children.\nIn our example, we have a ",(0,l.kt)("inlineCode",{parentName:"p"},"PERSON")," related to zero to N ",(0,l.kt)("inlineCode",{parentName:"p"},"FRIENDS")," which are both of type people."),(0,l.kt)("p",null,"If you want to get all people with first name ",(0,l.kt)("inlineCode",{parentName:"p"},"John")," the query is:"),(0,l.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"major",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .filter(peopleApi.schema.FIRST_NAME.equals('John'));\n")),(0,l.kt)("p",null,"If you want to get all people who have at least one friend with first name ",(0,l.kt)("inlineCode",{parentName:"p"},"John")," the query is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .filter(\n    peopleApi.schema.FRIENDS.filter(\n      any(peopleApi.schema.FIRST_NAME.equals('John'))\n    )\n  );\n"))),(0,l.kt)(u.Z,{value:"deprecated",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder().getAll().filter(People.FIRST_NAME.equals('John'));\n")),(0,l.kt)("p",null,"If you want to get all people who have at least one friend with first name ",(0,l.kt)("inlineCode",{parentName:"p"},"John")," the query is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .filter(People.FRIENDS.filter(any(People.FIRST_NAME.equals('John'))));\n")))),(0,l.kt)("p",null,"The lambda ",(0,l.kt)("a",{parentName:"p",href:"pathname:///api/1.28.1/modules/sap_cloud_sdk_core#all"},"all")," would enforce that all friends must have the first name ",(0,l.kt)("inlineCode",{parentName:"p"},"John"),".\nThe two queries above filter the parent entity person."),(0,l.kt)("p",null,"In case you want to get all people but reduce the friends in the response, the filter has to be inside the expand:"),(0,l.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"major",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { peopleApi } = peopleService();\npeopleApi\n  .requestBuilder()\n  .getAll()\n  .expand(\n    peopleApi.schema.FRIENDS.filter(peopleApi.schema.FIRST_NAME.equals('John'))\n  );\n"))),(0,l.kt)(u.Z,{value:"deprecated",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .expand(People.FRIENDS.filter(People.FIRST_NAME.equals('John')));\n")))),(0,l.kt)("p",null,"This will return all people but only the friends with the first name ",(0,l.kt)("inlineCode",{parentName:"p"},"John")," will be included in the response."))}m.isMDXComponent=!0}}]);