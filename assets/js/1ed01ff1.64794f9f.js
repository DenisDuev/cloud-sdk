"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9820],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),s=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,h=u["".concat(r,".").concat(m)]||u[m]||c[m]||o;return t?i.createElement(h,l(l({ref:n},p),{},{components:t})):i.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var d={};for(var r in n)hasOwnProperty.call(n,r)&&(d[r]=n[r]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<o;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},28664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const o={id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},l=void 0,d={unversionedId:"guides/manage-dependencies",id:"version-v3/guides/manage-dependencies",title:"Managing Dependencies",description:"How to manage dependencies, detect and resolve conflicts",source:"@site/docs-java_versioned_docs/version-v3/guides/dependencies.mdx",sourceDirName:"guides",slug:"/guides/manage-dependencies",permalink:"/cloud-sdk/docs/java/v3/guides/manage-dependencies",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/guides/dependencies.mdx",tags:[],version:"v3",frontMatter:{id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},sidebar:"docsJavaSidebar",previous:{title:"CF XSUAA Service",permalink:"/cloud-sdk/docs/java/v3/guides/cloud-foundry-xsuaa-service"},next:{title:"Logging",permalink:"/cloud-sdk/docs/java/v3/guides/logging-overview"}},r={},s=[{value:"General Information",id:"general-information",level:2},{value:"The SAP Cloud SDK Bill-of-Material",id:"the-sap-cloud-sdk-bill-of-material",level:3},{value:"Dealing With Dependency Conflicts",id:"dealing-with-dependency-conflicts",level:2},{value:"Updating the SAP Cloud SDK Version",id:"updating-the-sap-cloud-sdk-version",level:3},{value:"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material",id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material",level:3},{value:"Notes on the SAP Java Buildpack",id:"notes-on-the-sap-java-buildpack",level:2},{value:"Dependency Version Conflicts",id:"dependency-version-conflicts",level:3},{value:"Dependency Scope Conflicts",id:"dependency-scope-conflicts",level:3},{value:"Recommended Strategy: Avoiding Version Conflicts",id:"recommended-strategy-avoiding-version-conflicts",level:3},{value:"Avoiding Scope Conflicts",id:"avoiding-scope-conflicts",level:3}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general-information"},"General Information"),(0,a.kt)("p",null,"The SAP Cloud SDK for Java is a set of libraries that itself depends on other libraries.\nTo manage these relationships it relies on the ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"},"dependency management functionality")," of ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/index.html"},"Maven"),"."),(0,a.kt)("p",null,"This article shows how to manage dependencies for the SAP Cloud SDK for Java specifically.\nFor general information on how to deal with dependencies refer to the resources linked above and throughout this page."),(0,a.kt)("h3",{id:"the-sap-cloud-sdk-bill-of-material"},"The SAP Cloud SDK Bill-of-Material"),(0,a.kt)("p",null,"The SAP Cloud SDK provides a ",(0,a.kt)("a",{parentName:"p",href:"https://dzone.com/articles/the-bill-of-materials-in-maven"},"Bill-of-Material"),".\nIt comprises all dependencies and their specific version that the SAP Cloud SDK relies upon."),(0,a.kt)("p",null,"It can be used in the dependency management as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,a.kt)("p",null,"It helps in various ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minimizing the effort for updating SAP Cloud SDK versions"),(0,a.kt)("li",{parentName:"ul"},"Ensuring all SAP Cloud SDK components are used consistently with the same version"),(0,a.kt)("li",{parentName:"ul"},"Compatibility with some other key SAP libraries or frameworks like ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-security-xsuaa-integration"},"XSUAA")," and ",(0,a.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/docs/"},"CAP"),"."),(0,a.kt)("li",{parentName:"ul"},"Avoiding some potential dependency conflicts"),(0,a.kt)("li",{parentName:"ul"},"Checking which components & their respective version the SAP Cloud SDK depends upon")),(0,a.kt)("p",null,"For these reasons we highly recommend using the ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk-bom")," in your project."),(0,a.kt)("admonition",{title:"Alternative: SAP Cloud SDK Modules Bill-of-Material",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Besides the SAP Cloud SDK Bill-of-Material ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk-bom")," there is also the SAP Cloud SDK Modules Bill-of-Material ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom"),".\nIt manages the version of all SAP Cloud SDK modules only.\n",(0,a.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," does not manage versions of transitive dependencies and hence can be chosen to resolve dependency version conflicts.")),(0,a.kt)("admonition",{title:"SAP Cloud SDK Maven Plugins",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please be aware that neither the ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk-bom")," nor the ",(0,a.kt)("inlineCode",{parentName:"p"},"modules-bom")," will manage the versions of any SAP Cloud SDK Maven plugins (like the ",(0,a.kt)("inlineCode",{parentName:"p"},"odata-generator-maven-plugin"),") you may use.\nIt is required to specify a version for such plugins explicitly, otherwise dependency conflicts may occur.")),(0,a.kt)("h2",{id:"dealing-with-dependency-conflicts"},"Dealing With Dependency Conflicts"),(0,a.kt)("p",null,"When using multiple libraries, you will probably run into a version conflict at some point.\nThis is caused by the way dependencies are resolved.\nIf you are using two libraries ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," where both depend on a different version of ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," you encounter a conflict."),(0,a.kt)("p",null,"This conflict can only be solved by you as the consumer be explicitly stating which version of ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," should be used."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dzone.com/articles/solving-dependency-conflicts-in-maven"},"This guide")," outlines this problem in more detail and provides general guidance on how to find and resolve such problems."),(0,a.kt)("h3",{id:"updating-the-sap-cloud-sdk-version"},"Updating the SAP Cloud SDK Version"),(0,a.kt)("p",null,"You may run into dependency related problems when updating SAP Cloud SDK versions since its dependencies are frequently updated.\nHere are some recommendations from our experience that should help to mitigate any problems:"),(0,a.kt)("p",null,"We recommend increasing the SAP Cloud SDK version in a dedicated change e.g. a pull request."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This isolates the change and makes finding problems easier.")),(0,a.kt)("p",null,"Look out for ",(0,a.kt)("inlineCode",{parentName:"p"},"MethodNotFound")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassDefNotFound")," exceptions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They are common when a library is provided with an unexpected version.")),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/v3/release-notes-sap-cloud-sdk-for-java"},"release notes"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under improvements, you will see all dependency changes.")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree")," to analyze the dependency tree."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It shows where dependencies are used and in which version.")),(0,a.kt)("p",null,"Google the error message."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Usually, you will at least get an idea which library is causing the problems.")),(0,a.kt)("p",null,"Update the SAP Cloud SDK version frequently."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This mitigates the risk per update and ensures you are up to date.")),(0,a.kt)("h3",{id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material"},"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material"),(0,a.kt)("p",null,"Sometimes you may want to override the version of a specific dependency the SAP Cloud SDK is using.\nYou can achieve this by listing it in the dependency management ",(0,a.kt)("em",{parentName:"p"},"before the SAP Cloud SDK BOM"),"."),(0,a.kt)("p",null,"For example to override the version of SLF4J:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>your-slf4j-version</version>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>latest-sdk-version</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember that including a dependency in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section only enforces its version.\nIt does not yet include it as a dependency in your project.")),(0,a.kt)("h2",{id:"notes-on-the-sap-java-buildpack"},"Notes on the SAP Java Buildpack"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/a3f90069d6cd41da82f34a6123d82ce6.html"},"SAP Java Buildpack")," brings some dependencies that are also brought by the SAP Cloud SDK."),(0,a.kt)("h3",{id:"dependency-version-conflicts"},"Dependency Version Conflicts"),(0,a.kt)("p",null,"The dependency versions from the ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk-bom")," and the Buildpack may differ."),(0,a.kt)("p",null,"Consider this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Buildpack version ",(0,a.kt)("inlineCode",{parentName:"li"},"1.43")," contains ",(0,a.kt)("inlineCode",{parentName:"li"},"java-security:2.10.5")),(0,a.kt)("li",{parentName:"ul"},"SAP Cloud SDK version ",(0,a.kt)("inlineCode",{parentName:"li"},"3.59")," contains ",(0,a.kt)("inlineCode",{parentName:"li"},"java-security:2.11.2"))),(0,a.kt)("p",null,"If there are breaking API changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"java-security")," this can lead to runtime errors."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is no way to solve this versioning problem on SAP Cloud SDK or Buildpack side.\nGenerally, we try to keep the versions as consistent as possible."),(0,a.kt)("p",{parentName:"admonition"},"However, the exact combination of Buildpack and SAP Cloud SDK depends on the release schedule of the two products.\nIn addition to that, it also depends on the time an application updates the SAP Cloud SDK version & deploys it.")),(0,a.kt)("h3",{id:"dependency-scope-conflicts"},"Dependency Scope Conflicts"),(0,a.kt)("p",null,"In addition to potential version conflicts also scope problems can occur."),(0,a.kt)("p",null,"Consider this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Buildpack contains ",(0,a.kt)("inlineCode",{parentName:"li"},"java-security")),(0,a.kt)("li",{parentName:"ul"},"SAP Cloud SDK depends on ",(0,a.kt)("inlineCode",{parentName:"li"},"java-security")," with scope ",(0,a.kt)("inlineCode",{parentName:"li"},"compile"))),(0,a.kt)("p",null,"As a result, the classes from ",(0,a.kt)("inlineCode",{parentName:"p"},"java-security")," will be on the classpath twice.\nOnce from the Buildpack and once packaged by maven into the deployment artifact."),(0,a.kt)("h3",{id:"recommended-strategy-avoiding-version-conflicts"},"Recommended Strategy: Avoiding Version Conflicts"),(0,a.kt)("p",null,"We recommend setting a fixed Buildpack version in the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.yml")," and updating it regularly.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"cf buildpacks")," to see which Buildpacks are currently available.\nPlease note that usually only the last 3 Buildpack versions are kept alive, and usually every two weeks a new version is released.\nConsequently, with this strategy, you should update at least once a month."),(0,a.kt)("p",null,"In general, this is safer than using always the latest Buildpack.\nBecause this strategy avoids that a simple restart can break your application due to a changed Buildpack."),(0,a.kt)("p",null,"In particular, it ensures that the specific Buildpack + SAP Cloud SDK combination has been tested."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/a3f90069d6cd41da82f34a6123d82ce6.html"},"this note")," on Buildpack versioning."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There are no known dependencies in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloudfoundry/java-buildpack"},"Community Java Buildpack")," that could interfere with the ones provided by the SAP Cloud SDK.\nStill, the same strategy is also valid and useful for the community Buildpack.")),(0,a.kt)("h3",{id:"avoiding-scope-conflicts"},"Avoiding Scope Conflicts"),(0,a.kt)("p",null,"We recommend overriding the scope for selected dependencies when using the SAP Java Buildpack."),(0,a.kt)("p",null,"The respective dependencies are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.security:java-api")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.security:java-security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.security.xsuaa:token-client"))),(0,a.kt)("p",null,"You can override the scope by setting including these dependencies explicitly in your ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," with scope ",(0,a.kt)("inlineCode",{parentName:"p"},"provided"),"."),(0,a.kt)("p",null,"At the top of your ",(0,a.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"before"))," including any SAP Cloud SDK dependencies in your project, insert the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.security</groupId>\n    <artifactId>java-api</artifactId>\n    <version>latest-version-here</version>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.security</groupId>\n    <artifactId>java-security</artifactId>\n    <version>latest-version-here</version>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.security.xsuaa</groupId>\n    <artifactId>token-client</artifactId>\n    <version>latest-version-here</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Verify your dependency tree via ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree"),".\nThe above dependencies should only be listed with scope ",(0,a.kt)("inlineCode",{parentName:"p"},"provided"),".")))}c.isMDXComponent=!0}}]);