"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2112],{27614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"getting-started","title":"Getting Started","description":"Get up to speed with SAP Cloud SDK for Java in no time","source":"@site/docs-java/getting-started.mdx","sourceDirName":".","slug":"/getting-started","permalink":"/cloud-sdk/docs/java/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Getting Started","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Getting Started","description":"Get up to speed with SAP Cloud SDK for Java in no time","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJavaSidebar","previous":{"title":"Overview","permalink":"/cloud-sdk/docs/java/overview-cloud-sdk-for-java"},"next":{"title":"Overview","permalink":"/cloud-sdk/docs/java/features/odata/overview"}}');var a=t(74848),o=t(28453),s=t(11610);t(11470),t(19365);const i={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Generating a Project from a Maven Archetype",id:"generating-a-project-from-a-maven-archetype",level:2},{value:"Run App Locally",id:"run-app-locally",level:3},{value:"Deploy to Cloud Foundry",id:"deploy-to-cloud-foundry",level:3},{value:"Integrate the SAP Cloud SDK for Java Into Your Project",id:"integrate-the-sap-cloud-sdk-for-java-into-your-project",level:2},{value:"Adding Dependencies",id:"adding-dependencies",level:3},{value:"Framework Integration",id:"framework-integration",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Further Resources",id:"further-resources",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"To get started with the SAP Cloud SDK for Java you can either create a new project or integrate the SAP Cloud SDK into your existing one.\nYou will need an installation of Java and Maven."}),"\n",(0,a.jsx)(n.admonition,{title:"Java version compatibility",type:"note",children:(0,a.jsx)(n.p,{children:"The SAP Cloud SDK is compatible with Java 17 Long-Term-Support (LTS).\nNewer Java versions may work as well depending on your setup but are not yet tested by us.\nNote that the SAP Business Technology Platform Cloud Foundry environment can be configured to run with Java 17."})}),"\n",(0,a.jsxs)(n.p,{children:["To start with a clean, new project you can use the Spring Boot Archetye as described below.\nAlternatively, you can follow ",(0,a.jsx)(n.a,{href:"#integrate-the-cloud-sdk-for-java-into-your-project",children:"these instructions"})," to integrate the SAP Cloud SDK into your existing setup."]}),"\n",(0,a.jsx)(n.h2,{id:"generating-a-project-from-a-maven-archetype",children:"Generating a Project from a Maven Archetype"}),"\n",(0,a.jsxs)(n.p,{children:["The SAP Cloud SDK provides an archetype based on ",(0,a.jsx)(n.a,{href:"https://spring.io/",children:"Spring 6"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" \\\n    "-DarchetypeArtifactId=spring-boot3" \\\n    "-DarchetypeVersion=RELEASE"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Maven will ask you to provide the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"groupId"})," - usually serves as your organization identifier, i.e. ",(0,a.jsx)(n.code,{children:"foo.bar.cloud.app"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"artifactId"})," - it's your application's name, i.e. ",(0,a.jsx)(n.code,{children:"mydreamapp"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"version"})," - we recommend keeping ",(0,a.jsx)(n.code,{children:"1.0-SNAPSHOT"})," if you're just starting"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"package"})," - by default this equals to ",(0,a.jsx)(n.code,{children:"groupId"}),". Change it only if you know what you're doing"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After providing all the interactive values to the CLI it will generate your first SAP Cloud SDK based application:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------< org.apache.maven:standalone-pom >-------------------\n[INFO] Building Maven Stub Project (No POM) 1\n[INFO] --------------------------------[ pom ]---------------------------------\n[INFO]\n[INFO] >>> archetype:3.2.1:generate (default-cli) > generate-sources @ standalone-pom >>>\n[INFO]\n[INFO] <<< archetype:3.2.1:generate (default-cli) < generate-sources @ standalone-pom <<<\n[INFO]\n[INFO]\n[INFO] --- archetype:3.2.1:generate (default-cli) @ standalone-pom ---\n[INFO] Generating project in Interactive mode\n[INFO] ....\n[INFO] ....\nDefine value for property 'artifactId' (should match expression '[^_]+'): mydreamapp\n[INFO] Using property: gitignore = .gitignore\nDefine value for property 'groupId': foo.bar.cloud.app\n[INFO] Using property: artifactId = mydreamapp\nDefine value for property 'version' 1.0-SNAPSHOT: :\nDefine value for property 'package' foo.bar.cloud.app: :\nConfirm properties configuration:\nartifactId: mydreamapp\ngitignore: .gitignore\ngroupId: foo.bar.cloud.app\nartifactId: mydreamapp\nversion: 1.0-SNAPSHOT\npackage: foo.bar.cloud.app\n Y: :\n[INFO] ----------------------------------------------------------------------------\n[INFO] Using following parameters for creating project from Archetype: scp-cf-spring-jakarta:RELEASE\n[INFO] ----------------------------------------------------------------------------\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: packageInPathFormat, Value: foo/bar/cloud/app\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: gitignore, Value: .gitignore\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Project created from Archetype in dir: /home/user/dev/temp/mydreamapp\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  20.616 s\n[INFO] Finished at: 2023-09-07T13:12:09+02:00\n[INFO] ------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Congratulations! You've just set up a brand-new application with the SAP Cloud SDK for Java."})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To change the Java version modify the ",(0,a.jsx)(n.code,{children:"<java.version>"})," property in the root ",(0,a.jsx)(n.code,{children:"pom.xml"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"run-app-locally",children:"Run App Locally"}),"\n",(0,a.jsx)(n.p,{children:"Applications created with our SAP Cloud SDK Archetypes give you the possibility to run locally on your development machine."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'mvn clean install\ncd application/\nmvn spring-boot:run -D"spring-boot.run.profiles"=local\n'})}),"\n",(0,a.jsx)(n.h3,{id:"deploy-to-cloud-foundry",children:"Deploy to Cloud Foundry"}),"\n",(0,a.jsxs)(n.p,{children:["Assuming you have installed the ",(0,a.jsx)(n.a,{href:"https://docs.cloudfoundry.org/cf-cli/",children:"Cloud Foundry CLI"})," and are logged into your BTP account you can deploy the app via:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cf push\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Authentication & Authorization",type:"tip",children:[(0,a.jsx)(n.p,{children:"Please note that the starter project does not come with any authentication or authorization checks enabled by default.\nThis enables you to get started quickly and run locally without further configuration."}),(0,a.jsxs)(n.p,{children:["However, we recommend securing your application as early as possible in the development process.\nThe archetypes already come preconfigured for typical authorization scenarios.\nFollowing ",(0,a.jsx)(n.a,{href:"https://developers.sap.com/tutorials/s4sdk-secure-cloudfoundry.html",children:"this guide"})," you can secure your newly created application in just a few steps."]})]}),"\n",(0,a.jsx)(n.h2,{id:"integrate-the-sap-cloud-sdk-for-java-into-your-project",children:"Integrate the SAP Cloud SDK for Java Into Your Project"}),"\n",(0,a.jsx)(n.h3,{id:"adding-dependencies",children:"Adding Dependencies"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The SAP Cloud SDK ",(0,a.jsx)(n.a,{href:"/docs/overview/overview-cloud-sdk#sap-cloud-application-programming-model",children:"integrates with CAP projects"}),"!\nFollow the steps below or check out the dedicated ",(0,a.jsx)(n.a,{href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html",children:"tutorial on SAP Developers"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["To get started with an existing project include the ",(0,a.jsx)(n.em,{children:"SAP Cloud SDK BOM"})," in the ",(0,a.jsx)(n.em,{children:"dependency management"})," section of your project:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Include the essential Cloud SDK dependencies in the ",(0,a.jsx)(n.em,{children:"dependencies"})," section of your project:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.sap.cloud.sdk</groupId>\n    <artifactId>sdk-core</artifactId>\n</dependency>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to connect to an ",(0,a.jsx)(n.strong,{children:"SAP S/4HANA"})," system via the ",(0,a.jsx)(n.strong,{children:"OData"})," protocol, you should checkout our convenient ",(0,a.jsx)(n.a,{href:"features/odata/vdm-generator",children:"OData code generator"}),".\nBy downloading the OData service specifications for either type of ",(0,a.jsx)(n.strong,{children:"SAP S/4HANA"})," system (",(0,a.jsx)(n.a,{href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts",children:(0,a.jsx)(n.strong,{children:"SAP S/4HANA Cloud"})})," or ",(0,a.jsx)(n.a,{href:"https://api.sap.com/package/S4HANAOPAPI?section=Artifacts",children:(0,a.jsx)(n.strong,{children:"SAP S/4HANA On-premise"})}),") you can generate your own set of classes.\nSimilarly the SAP Cloud SDK offers a ",(0,a.jsx)(n.a,{href:"features/rest/generate-rest-client",children:"code generator for Open API"})," protocol."]}),"\n",(0,a.jsxs)(n.p,{children:["In case you have a ",(0,a.jsx)(n.strong,{children:"CAP application"})," which uses ",(0,a.jsx)(n.strong,{children:"multitenancy"})," features and/or a ",(0,a.jsx)(n.strong,{children:"protected backend"})," your service will need the following dependency:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"framework-integration",children:"Framework Integration"}),"\n",(0,a.jsxs)(n.p,{children:["In general, the SAP Cloud SDK for Java integrates natively into the ",(0,a.jsx)(n.a,{href:"https://spring.io/projects/spring-boot",children:"Spring Boot"})," framework."]}),"\n",(0,a.jsxs)(n.p,{children:["In particular the ",(0,a.jsx)(n.a,{href:"/cloud-sdk/docs/java/features/multi-tenancy/thread-context",children:"SAP Cloud SDK provides listeners"})," that can extract tenant and principal information from an incoming request.\nTo ensure these listeners are present, please configure your project accordingly."]}),"\n",(0,a.jsx)(n.p,{children:"Please ensure that the application is annotated to scan for components of the SAP Cloud SDK:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@ComponentScan({"com.sap.cloud.sdk", <your.own.package>})\n@ServletComponentScan({"com.sap.cloud.sdk", <your.own.package>})\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Also, please check ",(0,a.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.sap.cloud.sdk/sdk-bom/latest",children:"the Spring version"})," declared in the SAP Cloud SDK BOM doesn't clash with your version of Spring."]}),"\n",(0,a.jsx)(n.admonition,{title:"SAP Cloud SDK Modules Bill-of-Material",type:"note",children:(0,a.jsxs)(n.p,{children:["By default, the SAP Cloud SDK archetypes reference the SAP Cloud SDK Bill-of-Material ",(0,a.jsx)(n.code,{children:"sdk-bom"}),", which manages dependency versions for all SAP Cloud SDK modules and transitive dependencies.\nIf you face dependency conflicts, you can instead try using the SAP Cloud SDK Modules Bill-of-Material ",(0,a.jsx)(n.code,{children:"sdk-modules-bom"})," in the ",(0,a.jsx)(n.code,{children:"dependencyManagement"})," section of your Maven POM file."]})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://developers.sap.com/tutorials/s4sdk-cloud-foundry-sample-application.html",children:"Deploy your application to BTP Cloud Foundry"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://developers.sap.com/tutorials/s4sdk-odata-service-cloud-foundry.html",children:"Call an OData Service on S/4HANA Cloud or On-Premise"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://developers.sap.com/tutorials/s4sdk-resilience.html",children:"Add resilience to your application"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://developers.sap.com/tutorials/s4sdk-secure-cloudfoundry.html",children:"Secure your application to prevent unauthorized access"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"further-resources",children:"Further Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Check our latest ",(0,a.jsx)(n.a,{href:"/cloud-sdk/docs/java/release-notes",children:"release notes"})]}),"\n",(0,a.jsxs)(n.li,{children:["Get ",(0,a.jsx)(n.a,{href:"https://github.com/SAP/cloud-sdk-java/issues/new/choose",children:"support"})," if you have questions or experience any issues"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),a=t(34164),o=t(23104),s=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(j,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function S(e){const n=(0,g.A)();return(0,y.jsx)(b,{...e,children:u(e.children)},String(n))}},11610:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(74848);const a=function(e){let{align:n}=e;return(0,r.jsx)("span",{className:n?"col text--right":"",children:(0,r.jsx)("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom",children:(0,r.jsx)("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);