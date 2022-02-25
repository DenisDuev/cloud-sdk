"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[788],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),i=a(72389),o=a(29548),l=a(86010),p="tabItem_LplD";function s(e){var t,a,i,s=e.lazy,d=e.block,c=e.defaultValue,m=e.values,u=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),y=v.tabGroupChoices,b=v.setTabGroupChoices,C=(0,r.useState)(N),O=C[0],P=C[1],w=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var A=y[u];null!=A&&A!==O&&g.some((function(e){return e.value===A}))&&P(A)}var x=function(e){var t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==O&&(I(t),P(n),null!=u&&b(u,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},g.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},16175:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(9877),l=a(58215),p=["components"],s={id:"generate-rest-client",title:"Generate a Typed OpenAPI Client",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",keywords:["sap","cloud","sdk","rest","java","VDM","generate"]},d=void 0,c={unversionedId:"java/features/rest/generate-rest-client",id:"java/features/rest/generate-rest-client",title:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",source:"@site/docs/java/features/rest/generate-rest-client.mdx",sourceDirName:"java/features/rest",slug:"/java/features/rest/generate-rest-client",permalink:"/cloud-sdk/docs/java/features/rest/generate-rest-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/rest/generate-rest-client.mdx",tags:[],version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1645779189,formattedLastUpdatedAt:"2/25/2022",frontMatter:{id:"generate-rest-client",title:"Generate a Typed OpenAPI Client",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",keywords:["sap","cloud","sdk","rest","java","VDM","generate"]},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/rest/overview"},next:{title:"SAP Workflow service",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api"}},m=[{value:"Customize Java Class and Method Names with OpenAPI Vendor Extensions",id:"customize-java-class-and-method-names-with-openapi-vendor-extensions",children:[{value:"Java Class Name",id:"java-class-name",children:[],level:3},{value:"Java Method Name",id:"java-method-name",children:[],level:3}],level:2},{value:"Using the OpenAPI Generator Maven Plugin",id:"using-the-openapi-generator-maven-plugin",children:[{value:"Generating Java Client Library for Multiple OpenAPI Specifications",id:"generating-java-client-library-for-multiple-openapi-specifications",children:[],level:3}],level:2},{value:"Using the OpenAPI Generator CLI",id:"using-the-openapi-generator-cli",children:[],level:2},{value:"Available Parameters",id:"available-parameters",children:[],level:2},{value:"Solving Compilation Issues After Generation",id:"solving-compilation-issues-after-generation",children:[],level:2}],u={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SAP Cloud SDK offers an OpenAPI client generator as a Maven plugin and as a command-line tool.\nEither can be used to generate a client library for a REST API based on its OpenAPI specification.\nThe OpenAPI generator is a wrapper around the public open-source ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"OpenAPI Generator")," where we have adjusted the ",(0,i.kt)("inlineCode",{parentName:"p"},"mustache")," templates to integrate the generated client library with the SAP Cloud SDK core."),(0,i.kt)("p",null,"The generated Java classes need the following dependency to be present in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-core</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"To use the generated client library, either the SAP Cloud SDK BOM should be part of your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section or the version for the ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-core")," artifact must be mentioned explicitly here."),(0,i.kt)("h2",{id:"customize-java-class-and-method-names-with-openapi-vendor-extensions"},"Customize Java Class and Method Names with OpenAPI Vendor Extensions"),(0,i.kt)("p",null,"The OpenAPI generator uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," field to determine the Java service class name and the ",(0,i.kt)("inlineCode",{parentName:"p"},"operationId")," to determine the Java method for each service operation.\nYou can influence the service class name and the method names by adding extension fields to the OpenAPI specification.\nThereby you can leave the ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"operationId")," fields untouched if they need to stay stable."),(0,i.kt)("h3",{id:"java-class-name"},"Java Class Name"),(0,i.kt)("p",null,"The Java class name can be influenced with the extension field ",(0,i.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name"),".\nThe OpenAPI generator takes the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," and adds an ",(0,i.kt)("inlineCode",{parentName:"p"},"Api")," suffix (if not already present) to determine the class name."),(0,i.kt)("p",null,"In the following example the custom value ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomOperations")," takes precedence over the ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," value ",(0,i.kt)("inlineCode",{parentName:"p"},"Operations")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"/operation/path:\n  get:\n    summary: My operation\n    operationId: myOperation\n    x-sap-cloud-sdk-api-name: CustomOperations\n    tags:\n      - Operations\n")),(0,i.kt)("p",null,"The Java class for this service operation will be named ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomOperationsApi"),"."),(0,i.kt)("p",null,"You can use the extension field ",(0,i.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," on an operation, on a path or on the root level of the OpenAPI specification.\nAll subordinated objects inherit its value automatically.\nFor instance, if you assign the field ",(0,i.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," to one path, all operations under that path inherit this field automatically."),(0,i.kt)("h3",{id:"java-method-name"},"Java Method Name"),(0,i.kt)("p",null,"The Java method name can be overwritten with the extension field ",(0,i.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-operation-name"),"."),(0,i.kt)("p",null,"In the following example the custom value ",(0,i.kt)("inlineCode",{parentName:"p"},"performMyOperation")," takes precedence over the ",(0,i.kt)("inlineCode",{parentName:"p"},"operationId")," value ",(0,i.kt)("inlineCode",{parentName:"p"},"myOperation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"/operation/path:\n  get:\n    summary: My Operation\n    x-sap-cloud-sdk-operation-name: performMyOperation\n    operationId: myOperation\n")),(0,i.kt)("p",null,"The Java method for this service operation will be named ",(0,i.kt)("inlineCode",{parentName:"p"},"peformMyOperation"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Field Order")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The order of fields in the OpenAPI specification does not matter.\nOnly the right nesting is necessary, that is, the two fields ",(0,i.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-operation-name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," should be assigned to an operation (get, post, etc)."))),(0,i.kt)("h2",{id:"using-the-openapi-generator-maven-plugin"},"Using the OpenAPI Generator Maven Plugin"),(0,i.kt)("p",null,"To use the Maven plugin following XML snippet should be added to the POM file of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    \x3c!-- Maintain Maven property sap-cloud-sdk.version in your POM with the latest SAP Cloud SDK version --\x3e\n    <version>${sap-cloud-sdk.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <phase>generate-sources</phase>\n        </execution>\n    </executions>\n    <configuration>\n        <inputSpec>${project.basedir}/sample.yaml</inputSpec>\n        <outputDirectory>${project.basedir}/openapi</outputDirectory>\n        <apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n        <modelPackage>com.mycompany.openapi.sample.model</modelPackage>\n        <apiMaturity>released</apiMaturity>\n        <logLevel>info</logLevel>\n        \x3c!-- (Optional) You can add a custom copyright header:\n        <copyrightHeader>Copyright (c) this year, my company</copyrightHeader>\n\n        Or use the SAP copyright header:\n        <sapCopyrightHeader>true</sapCopyrightHeader>\n        --\x3e\n    </configuration>\n</plugin>\n")),(0,i.kt)("p",null,"Maven requires that we specify the version for plugins explicitly.\nIn above code snippet you can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," tag pointing to the Maven property ",(0,i.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk.version"),".\nMaintain such a property in your POM and ensure that you always use the latest SAP Cloud SDK version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<properties>\n    \x3c!-- Use latest version always as per https://sap.github.io/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java --\x3e\n    <sap-cloud-sdk.version>3.42.0</sap-cloud-sdk.version>\n</properties>\n")),(0,i.kt)("p",null,"Maven will run the generator within the ",(0,i.kt)("inlineCode",{parentName:"p"},"generate-sources")," phase which is executed before ",(0,i.kt)("inlineCode",{parentName:"p"},"compile"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The phase ",(0,i.kt)("inlineCode",{parentName:"p"},"generate-sources")," is just a recommendation from our side, it can be changed per your project's requirement.\nRefer to the ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference"},"Maven build lifecycle guide")," for a complete explanation."))),(0,i.kt)("p",null,"Please note that the version of the above plugin must be specified at least once in your project, preferably in the root POM.\nAlso, the version of the plugin should be the same as of the SAP Cloud SDK.\nWe recommend using a Maven property for defining the version of both the Maven plugin and the SAP Cloud SDK BOM."),(0,i.kt)("h3",{id:"generating-java-client-library-for-multiple-openapi-specifications"},"Generating Java Client Library for Multiple OpenAPI Specifications"),(0,i.kt)("p",null,"This Maven plugin processes one OpenAPI specification per execution.\nIn case you want to generate sources for multiple OpenAPI specifications then you need to create multiple executions of the plugin each corresponding to a particular OpenAPI specification.\nAs an example refer to the plugin XML below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>generate-sample1-id</id>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/sample1.yaml</inputSpec>\n            </configuration>\n        </execution>\n        <execution>\n            <id>generate-sample2-id</id>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/sample2.yaml</inputSpec>\n            </configuration>\n        </execution>\n    </executions>\n    <configuration>\n        <apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n        <modelPackage>com.mycompany.openapi.sample.api.model</modelPackage>\n        <outputDirectory>${project.basedir}/openapi</outputDirectory>\n        <apiMaturity>released</apiMaturity>\n    </configuration>\n</plugin>\n")),(0,i.kt)("h2",{id:"using-the-openapi-generator-cli"},"Using the OpenAPI Generator CLI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the latest command-line interface (CLI) of the generator from ",(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk.datamodel/openapi-generator-cli"},"Maven Central"),".\nRename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-generator-cli.jar")," and put it in a directory of your choice.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"java -jar openapi-generator-cli.jar -i /path/to/input/specification -o /path/to/output/folder -a name.of.api.package -m name.of.model.package"),".\nA full list of parameters is ",(0,i.kt)("a",{parentName:"p",href:"#available-parameters"},"available here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Put the generated Java source files from the output folder into your project that is using the SAP Cloud SDK so that they are picked up by Java.\nFor example, move them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"application/src/main/java")," folder."))),(0,i.kt)("h2",{id:"available-parameters"},"Available Parameters"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Passing Additional Properties to the Underlying OpenAPI Generator")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can pass arbitrary additional configuration properties to the underlying ",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/generators/java/"},"open source OpenAPI generator")," via ",(0,i.kt)("inlineCode",{parentName:"p"},"<additionalProperties>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--additional-properties"),"."))),(0,i.kt)("p",null,"The complete list of available parameters with their description is as follows:"),(0,i.kt)(o.Z,{defaultValue:"maven",values:[{label:"Maven Plugin",value:"maven"},{label:"CLI",value:"cli"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<inputSpec>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Location of the OpenAPI specification file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<outputDirectory>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Output directory for generated sources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<apiPackage>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated API classes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<modelPackage>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated Model classes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<deleteOutputDirectory>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Determines whether to delete the output directory before running the generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<apiMaturity>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"released")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the maturity of the OpenAPI for which Java classes are generated. Possible values are ",(0,i.kt)("inlineCode",{parentName:"td"},"released")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"beta"),". Please note if you define it as ",(0,i.kt)("inlineCode",{parentName:"td"},"beta")," then ",(0,i.kt)("a",{parentName:"td",href:"https://www.javadoc.io/doc/com.google.guava/guava/latest/com/google/common/annotations/Beta.html"},"@Beta annotations")," are added to the generated classes which indicate that they are in an experimental state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<compileScope>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"NONE")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds the generated sources to the compilation or test phase. Respective values are ",(0,i.kt)("inlineCode",{parentName:"td"},"COMPILE")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"TEST_COMPILE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<copyrightHeader>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Copyright header to be added at the top of generated files")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<logLevel>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"info")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the log level of the OpenAPI Generator. Possible values are ",(0,i.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"debug"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<sapCopyrightHeader>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add the SAP copyright header (overrides ",(0,i.kt)("inlineCode",{parentName:"td"},"copyrightHeader"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<additionalProperties>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines a map of key-value pairs that will be passed to the Java generator. E.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"<param>value</param>")))))),(0,i.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Alias"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--input-spec")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-i")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Location of the OpenAPI specification file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--output-dir")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-o")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Output directory for generated sources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--api-package")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-a")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated API classes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--model-package")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-m")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated Model classes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--delete-output-dir")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-d")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Determines whether to delete the output directory before running the generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--api-maturity")),(0,i.kt)("td",{parentName:"tr",align:"center"},"none"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"released")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the maturity of the OpenAPI for which Java classes are generated. Possible values are ",(0,i.kt)("inlineCode",{parentName:"td"},"released")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"beta"),". Please note if you define it as ",(0,i.kt)("inlineCode",{parentName:"td"},"beta")," then ",(0,i.kt)("a",{parentName:"td",href:"https://www.javadoc.io/doc/com.google.guava/guava/latest/com/google/common/annotations/Beta.html"},(0,i.kt)("inlineCode",{parentName:"a"},"@Beta")," annotations")," are added to the generated classes which indicate that they are in an experimental state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--user-copyright")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-c")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Copyright header to be added at the top of generated files")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--log-level")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-l")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"info")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines the log level of the OpenAPI Generator. Possible values are ",(0,i.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"debug"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--use-sap-copyright")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-u")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add the SAP copyright header (overrides ",(0,i.kt)("inlineCode",{parentName:"td"},"copyrightHeader"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--additional-properties")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-p")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines a list of key-value pairs that will be passed to the Java generator in the format: ",(0,i.kt)("inlineCode",{parentName:"td"},"key1=val1,key2=val2"),".")))))),(0,i.kt)("h2",{id:"solving-compilation-issues-after-generation"},"Solving Compilation Issues After Generation"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"From version ",(0,i.kt)("inlineCode",{parentName:"p"},"3.58")," of the SAP Cloud SDK, the OpenAPI generator has been enhanced to fail if the input specification contains keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"anyOf")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf")," in certain positions."))),(0,i.kt)("p",null,"In certain cases although the generation of the client succeeds the subsequent compilation fails due to multiple reasons."),(0,i.kt)("p",null,"If you observe that you notice ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot find Symbol for AnyOf{ClassName} Classes")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot find symbol OneOf{ClassName} Classes")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot find symbol UNKNOWN_BASE_TYPE")," during compilation, check if your specification contains keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"anyOf")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf"),"."),(0,i.kt)("p",null,"The public open-source ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"OpenAPI Generator")," that is used by the SAP Cloud SDK under the hood generates non-compilable code if ",(0,i.kt)("inlineCode",{parentName:"p"},"anyOf")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf")," are present in certain parts of the input specification."),(0,i.kt)("p",null,"Compilation fails if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These keywords exist under the ",(0,i.kt)("inlineCode",{parentName:"li"},"paths")," part, under any operation while defining either the ",(0,i.kt)("inlineCode",{parentName:"li"},"requestbody")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"responses"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Keywords under paths"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"paths:\n /APIPath:\n        put:\n          summary: ...\n          requestBody:\n            description: ...\n            content:\n              application/json:\n                schema:\n                  oneOf:\n                    - $ref: '#/components/schemas/SomeSchema'\n                    - $ref: '#/components/schemas/SomeOtherSchema'\n          responses:\n            '200':\n              description: ...\n              content:\n                application/json:\n                  schema:\n                    oneOf:\n                      - $ref: '#/components/schemas/SomeSchema'\n                      - type: array\n                        items:\n                          $ref: '#/components/schemas/SomeOtherSchema'\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These keywords exist under any of the ",(0,i.kt)("inlineCode",{parentName:"li"},"schemas")," either under any property in ",(0,i.kt)("inlineCode",{parentName:"li"},"properties")," or under ",(0,i.kt)("inlineCode",{parentName:"li"},"additionalProperties"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Keywords under properties of schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"components:\n  schemas:\n    SampleSchema:\n      title: SampleSchema\n      description: ...\n      type: object\n      properties:\n        embeddedData:\n          $ref: '#/components/schemas/EmbeddedData'\n        questions:\n          type: array\n          title: questions\n          items:\n            title: Question\n            oneOf:\n              - $ref: '#/components/schemas/mc'\n              - $ref: '#/components/schemas/te'\n              - $ref: '#/components/schemas/db'\n            discriminator:\n              propertyName: type\n      AnotherSampleSchema:\n        description: ...\n        type: ...\n        anotherProperty:\n            description: ...\n            oneOf:\n              - type: string\n                enum:\n                  - ENDOFBLOCK\n                  - ENDOFSURVEY\n              - $ref: '#/components/schemas/SurveyID'\n        additionalProperties:\n          oneOf:\n            - $ref: '#/components/schemas/SomeSchema'\n            - $ref: '#/components/schemas/SomeOtherSchema'\n"))),(0,i.kt)("p",null,"To make the compilation succeed, please remove these keywords from your specification and generate the client again."),(0,i.kt)("p",null,"Please note that while removing these keywords from a property, you must also supply a meaningful replacement.\nSometimes you may also choose to drop the property altogether for e.g, in the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalProperties")),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/"},"Swagger documentation")," to understand more about the usage of these keywords and to derive their replacement."))}h.isMDXComponent=!0}}]);