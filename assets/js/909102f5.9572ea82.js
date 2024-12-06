"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[38843],{56340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"features/rest/generate-rest-client","title":"Generate a Typed OpenAPI Client","description":"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.","source":"@site/docs-java/features/rest/generate-rest-client.mdx","sourceDirName":"features/rest","slug":"/features/rest/generate-rest-client","permalink":"/cloud-sdk/docs/java/features/rest/generate-rest-client","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/rest/generate-rest-client.mdx","tags":[],"version":"current","frontMatter":{"id":"generate-rest-client","title":"Generate a Typed OpenAPI Client","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Generate a Typed OpenAPI Client","description":"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.","keywords":["sap","cloud","sdk","rest","java","VDM","generate"]},"sidebar":"docsJavaSidebar","previous":{"title":"Overview","permalink":"/cloud-sdk/docs/java/features/rest/overview"},"next":{"title":"BAPI/RFC","permalink":"/cloud-sdk/docs/java/features/bapi-and-rfc/overview"}}');var s=n(74848),r=n(28453);n(11470),n(19365);const i={id:"generate-rest-client",title:"Generate a Typed OpenAPI Client",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",keywords:["sap","cloud","sdk","rest","java","VDM","generate"]},o=void 0,l={},c=[{value:"Generated Java Classes and Usage",id:"generated-java-classes-and-usage",level:2},{value:"Using the OpenAPI Generator Maven Plugin",id:"using-the-openapi-generator-maven-plugin",level:2},{value:"Using the Plugin from the Command Line",id:"using-the-plugin-from-the-command-line",level:3},{value:"Generating Java Client Library for Multiple OpenAPI Specifications",id:"generating-java-client-library-for-multiple-openapi-specifications",level:3},{value:"Available Parameters",id:"available-parameters",level:2},{value:"Customize Java Class and Method Names with OpenAPI Vendor Extensions",id:"customize-java-class-and-method-names-with-openapi-vendor-extensions",level:2},{value:"Java Class Name",id:"java-class-name",level:3},{value:"Java Method Name",id:"java-method-name",level:3},{value:"Support for <code>anyOf/oneOf</code> keywords",id:"support-for-anyofoneof-keywords",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The SAP Cloud SDK offers an OpenAPI client generator as a Maven plugin and as a command-line tool.\nEither can be used to generate a client library for a REST API based on its OpenAPI specification.\nThe OpenAPI generator is a wrapper around the public open-source ",(0,s.jsx)(t.a,{href:"https://github.com/OpenAPITools/openapi-generator",children:"OpenAPI Generator"})," where we have adjusted the ",(0,s.jsx)(t.code,{children:"mustache"})," templates to integrate the generated client library with the SAP Cloud SDK core."]}),"\n",(0,s.jsx)(t.admonition,{title:"Localisation",type:"note",children:(0,s.jsx)(t.p,{children:"The generator is designed to generate source code in english.\nYou may also generate a client based on other languages in the OpenAPI specification.\nHowever, languages that use non-latin characters, specifically languages that read from right to left or that don't have capitalisation, may not be supported."})}),"\n",(0,s.jsx)(t.p,{children:"The generated Java classes need the following dependency to be present in your project:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<dependency>\n\t<groupId>com.sap.cloud.sdk.datamodel</groupId>\n\t<artifactId>openapi-core</artifactId>\n</dependency>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To use the generated client library, either the SAP Cloud SDK BOM should be part of your project's ",(0,s.jsx)(t.code,{children:"<dependencyManagement>"})," section, or the version for the ",(0,s.jsx)(t.code,{children:"openapi-core"})," artifact must be mentioned explicitly here."]}),"\n",(0,s.jsx)(t.h2,{id:"generated-java-classes-and-usage",children:"Generated Java Classes and Usage"}),"\n",(0,s.jsxs)(t.p,{children:["In this section, we will explain how to use the OpenAPI Generator Maven Plugin.\nA sample result can be seen in our ",(0,s.jsx)(t.a,{href:"https://github.com/SAP/cloud-sdk-java/tree/main/datamodel/openapi/openapi-api-sample",children:"open-source public repository"})," with the ",(0,s.jsx)(t.em,{children:"SodaStore"})," OpenAPI.\nGiven the ",(0,s.jsx)(t.code,{children:"sodastore.json"})," as input the following service classes get generated:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"openapi-api-sample/\n\u251c\u2500\u2500 src/main/\n\u2502   \u251c\u2500\u2500 java/com/sap/cloud/sdk/datamodel/openapi/sample/\n\u2502   |   \u251c\u2500\u2500 api/\n\u2502   |   |   \u251c\u2500\u2500 OrdersApi.java\n\u2502   |   |   \u2514\u2500\u2500 SodasApi.java\n\u2502   |   \u2514\u2500\u2500 model/\n\u2502   |       \u2514\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 resources/\n\u2502       \u2514\u2500\u2500 sodastore.json\n\u2514\u2500\u2500 pom.xml\n"})}),"\n",(0,s.jsx)(t.p,{children:"The generated API can be used like the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'Destination destination;\n\n// create the service with a destination\nSodasApi service = new SodasApi(destination);\n\n// create an entity object\nSodaWithId soda = new SodaWithId().id(0L).name("Cola").brand("SAP-Cola").quantity(100).price(1.5f);\n\n// execute request for entity update\nservice.sodasPut(soda);\n'})}),"\n",(0,s.jsx)(t.p,{children:"Services can be instantiated in different ways:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"new SodasApi( Destination )\nnew SodasApi( new ApiClient() )\nnew SodasApi( new ApiClient(RestTemplate) )\nnew SodasApi( new ApiClient(Destination) )\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://sap.github.io/cloud-sdk/java-api/v5/com/sap/cloud/sdk/services/openapi/apiclient/ApiClient.html",children:(0,s.jsx)(t.code,{children:"ApiClient"})})," allows for versatile customization.\nDefault service base-path, user-agent and request headers can be assigned.\nWhen using ",(0,s.jsx)(t.code,{children:"Destination"})," these parameters are extracted automatically from the provided destination.\nAlternatively, the ",(0,s.jsx)(t.code,{children:"RestTemplate"})," based constructor can be used for fully customized requests."]}),"\n",(0,s.jsx)(t.h2,{id:"using-the-openapi-generator-maven-plugin",children:"Using the OpenAPI Generator Maven Plugin"}),"\n",(0,s.jsx)(t.p,{children:"To use the Maven plugin following XML snippet should be added to the POM file of your project:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<plugin>\n\t<groupId>com.sap.cloud.sdk.datamodel</groupId>\n\t<artifactId>openapi-generator-maven-plugin</artifactId>\n\t\x3c!-- Maintain Maven property sap-cloud-sdk.version in your POM with the latest SAP Cloud SDK version --\x3e\n\t<version>${sap-cloud-sdk.version}</version>\n    <executions>\n\t\t<execution>\n\t\t\t<goals>\n\t\t\t\t<goal>generate</goal>\n\t\t\t</goals>\n\t\t\t<phase>generate-sources</phase>\n\t\t</execution>\n\t</executions>\n\t<configuration>\n   \t\t<inputSpec>${project.basedir}/sample.yaml</inputSpec>\n\t\t<outputDirectory>${project.basedir}/openapi</outputDirectory>\n        <apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n\t\t<modelPackage>com.mycompany.openapi.sample.model</modelPackage>\n\t\t<apiMaturity>released</apiMaturity>\n\t\t\x3c!-- (Optional) You can add a custom copyright header:\n\t\t<copyrightHeader>Copyright (c) this year, my company</copyrightHeader>\n\n\t\tOr use the SAP copyright header:\n\t\t<sapCopyrightHeader>true</sapCopyrightHeader>\n\t\t--\x3e\n\t</configuration>\n</plugin>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Maven requires that we specify the version for plugins explicitly.\nIn above code snippet you can see the ",(0,s.jsx)(t.code,{children:"version"})," tag pointing to the Maven property ",(0,s.jsx)(t.code,{children:"sap-cloud-sdk.version"}),".\nMaintain such a property in your POM and ensure that you always use the latest SAP Cloud SDK version."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<properties>\n    \x3c!-- Use latest version always as per https://sap.github.io/cloud-sdk/docs/java/release-notes --\x3e\n\t<sap-cloud-sdk.version>5.XX.X</sap-cloud-sdk.version>\n</properties>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Maven will run the generator within the ",(0,s.jsx)(t.code,{children:"generate-sources"})," phase which is executed before ",(0,s.jsx)(t.code,{children:"compile"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The phase ",(0,s.jsx)(t.code,{children:"generate-sources"})," is just a recommendation from our side, it can be changed per your project's requirement.\nRefer to the ",(0,s.jsx)(t.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference",children:"Maven build lifecycle guide"})," for a complete explanation."]})}),"\n",(0,s.jsx)(t.p,{children:"Please note that the version of the above plugin must be specified at least once in your project, preferably in the root POM.\nAlso, the version of the plugin should be the same as of the SAP Cloud SDK.\nWe recommend using a Maven property for defining the version of both the Maven plugin and the SAP Cloud SDK BOM."}),"\n",(0,s.jsx)(t.h3,{id:"using-the-plugin-from-the-command-line",children:"Using the Plugin from the Command Line"}),"\n",(0,s.jsxs)(t.p,{children:["The maven plugin can also be invoked without a project from the command line using ",(0,s.jsx)(t.code,{children:"-D"})," parameter flags, for example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mvn com.sap.cloud.sdk.datamodel:openapi-generator-maven-plugin:5.XX.X:generate -Dopenapi.generate.inputSpec=foo -Dopenapi.generate.outputDirectory=bar -Dopenapi.generate.apiPackage=api -Dopenapi.generate.modelPackage=model\n"})}),"\n",(0,s.jsxs)(t.p,{children:["See the full list of parameters ",(0,s.jsx)(t.a,{href:"#available-parameters",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"generating-java-client-library-for-multiple-openapi-specifications",children:"Generating Java Client Library for Multiple OpenAPI Specifications"}),"\n",(0,s.jsx)(t.p,{children:"This Maven plugin processes one OpenAPI specification per execution.\nIn case you want to generate sources for multiple OpenAPI specifications then you need to create multiple executions of the plugin each corresponding to a particular OpenAPI specification.\nAs an example refer to the plugin XML below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<plugin>\n\t<groupId>com.sap.cloud.sdk.datamodel</groupId>\n\t<artifactId>openapi-generator-maven-plugin</artifactId>\n\t<executions>\n\t\t<execution>\n\t\t\t<id>generate-sample1-id</id>\n\t\t\t<goals>\n\t\t\t\t<goal>generate</goal>\n\t\t\t</goals>\n\t\t\t<configuration>\n\t\t\t\t<inputSpec>${project.basedir}/sample1.yaml</inputSpec>\n\t\t\t</configuration>\n\t\t</execution>\n\t\t<execution>\n\t\t\t<id>generate-sample2-id</id>\n\t\t\t<goals>\n\t\t\t\t<goal>generate</goal>\n\t\t\t</goals>\n\t\t\t<configuration>\n\t\t\t\t<inputSpec>${project.basedir}/sample2.yaml</inputSpec>\n\t\t\t</configuration>\n\t\t</execution>\n\t</executions>\n\t<configuration>\n\t\t<apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n\t\t<modelPackage>com.mycompany.openapi.sample.api.model</modelPackage>\n\t\t<outputDirectory>${project.basedir}/openapi</outputDirectory>\n\t\t<apiMaturity>released</apiMaturity>\n\t</configuration>\n</plugin>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"available-parameters",children:"Available Parameters"}),"\n",(0,s.jsx)(t.admonition,{title:"Passing Additional Properties to the Underlying OpenAPI Generator",type:"tip",children:(0,s.jsxs)(t.p,{children:["You can pass arbitrary additional configuration properties to the underlying ",(0,s.jsx)(t.a,{href:"https://openapi-generator.tech/docs/generators/java/",children:"open source OpenAPI generator"})," via ",(0,s.jsx)(t.code,{children:"<additionalProperties>"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"The complete list of available parameters with their description is as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Default"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<inputSpec>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Location of the OpenAPI specification file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<outputDirectory>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Output directory for generated sources"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<apiPackage>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Package name for the generated API classes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<modelPackage>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Package name for the generated Model classes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<deleteOutputDirectory>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"False"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Determines whether to delete the output directory before running the generator"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<apiMaturity>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"released"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Defines the maturity of the OpenAPI for which Java classes are generated. Possible values are ",(0,s.jsx)(t.code,{children:"released"})," and ",(0,s.jsx)(t.code,{children:"beta"}),". Please note if you define it as ",(0,s.jsx)(t.code,{children:"beta"})," then ",(0,s.jsx)(t.a,{href:"https://www.javadoc.io/doc/com.google.guava/guava/latest/com/google/common/annotations/Beta.html",children:"@Beta annotations"})," are added to the generated classes which indicate that they are in an experimental state"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<compileScope>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"NONE"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Adds the generated sources to the compilation or test phase. Respective values are ",(0,s.jsx)(t.code,{children:"COMPILE"})," and ",(0,s.jsx)(t.code,{children:"TEST_COMPILE"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<copyrightHeader>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"null"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Copyright header to be added at the top of generated files"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<verbose>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"False"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Run the generator with verbose output"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<sapCopyrightHeader>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"False"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Add the SAP copyright header (overrides ",(0,s.jsx)(t.code,{children:"copyrightHeader"}),")"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<enableOneOfAnyOfGeneration>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"False"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Defines whether to enable processing of anyOf/oneOf keywords during client generation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"<additionalProperties>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"[]"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Defines a map of key-value pairs that will be passed to the Java generator. E.g. ",(0,s.jsx)(t.code,{children:"<param>value</param>"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"customize-java-class-and-method-names-with-openapi-vendor-extensions",children:"Customize Java Class and Method Names with OpenAPI Vendor Extensions"}),"\n",(0,s.jsxs)(t.p,{children:["The OpenAPI generator uses the ",(0,s.jsx)(t.code,{children:"tag"})," field to determine the Java service class name and the ",(0,s.jsx)(t.code,{children:"operationId"})," to determine the Java method for each service operation.\nYou can influence the service class name and the method names by adding extension fields to the OpenAPI specification.\nThereby you can leave the ",(0,s.jsx)(t.code,{children:"tag"})," and ",(0,s.jsx)(t.code,{children:"operationId"})," fields untouched if they need to stay stable."]}),"\n",(0,s.jsx)(t.h3,{id:"java-class-name",children:"Java Class Name"}),"\n",(0,s.jsxs)(t.p,{children:["The Java class name can be influenced with the extension field ",(0,s.jsx)(t.code,{children:"x-sap-cloud-sdk-api-name"}),".\nThe OpenAPI generator takes the value of ",(0,s.jsx)(t.code,{children:"x-sap-cloud-sdk-api-name"})," and adds an ",(0,s.jsx)(t.code,{children:"Api"})," suffix (if not already present) to determine the class name."]}),"\n",(0,s.jsxs)(t.p,{children:["In the following example the custom value ",(0,s.jsx)(t.code,{children:"CustomOperations"})," takes precedence over the ",(0,s.jsx)(t.code,{children:"tag"})," value ",(0,s.jsx)(t.code,{children:"Operations"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"/operation/path:\n  get:\n    summary: My operation\n    operationId: myOperation\n    x-sap-cloud-sdk-api-name: CustomOperations\n    tags:\n      - Operations\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The Java class for this service operation will be named ",(0,s.jsx)(t.code,{children:"CustomOperationsApi"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can use the extension field ",(0,s.jsx)(t.code,{children:"x-sap-cloud-sdk-api-name"})," on an operation, on a path or on the root level of the OpenAPI specification.\nAll subordinated objects inherit its value automatically.\nFor instance, if you assign the field ",(0,s.jsx)(t.code,{children:"x-sap-cloud-sdk-api-name"})," to one path, all operations under that path inherit this field automatically."]}),"\n",(0,s.jsx)(t.h3,{id:"java-method-name",children:"Java Method Name"}),"\n",(0,s.jsxs)(t.p,{children:["The Java method name can be overwritten with the extension field ",(0,s.jsx)(t.code,{children:"x-sap-cloud-sdk-operation-name"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In the following example the custom value ",(0,s.jsx)(t.code,{children:"performMyOperation"})," takes precedence over the ",(0,s.jsx)(t.code,{children:"operationId"})," value ",(0,s.jsx)(t.code,{children:"myOperation"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"/operation/path:\n  get:\n    summary: My Operation\n    x-sap-cloud-sdk-operation-name: performMyOperation\n    operationId: myOperation\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The Java method for this service operation will be named ",(0,s.jsx)(t.code,{children:"peformMyOperation"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Field Order",type:"tip",children:(0,s.jsxs)(t.p,{children:["The order of fields in the OpenAPI specification does not matter.\nOnly the right nesting is necessary, that is, the two fields ",(0,s.jsx)(t.code,{children:"x-sap-cloud-sdk-operation-name"})," and ",(0,s.jsx)(t.code,{children:"x-sap-cloud-sdk-api-name"})," should be assigned to an operation (get, post, etc)."]})}),"\n",(0,s.jsxs)(t.h2,{id:"support-for-anyofoneof-keywords",children:["Support for ",(0,s.jsx)(t.code,{children:"anyOf/oneOf"})," keywords"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["From version ",(0,s.jsx)(t.code,{children:"5.4"})," of the SAP Cloud SDK, the OpenAPI generator can be configured to generate clients for specification with ",(0,s.jsx)(t.code,{children:"anyOf/oneOf"})," keywords by using the ",(0,s.jsx)(t.code,{children:"<enableOneOfAnyOfGeneration>"})," parameter in the OpenAPI maven generator plugin.\nBut, the generated client though may not be feature complete and work as expected for all cases involving ",(0,s.jsx)(t.code,{children:"anyOf/oneOf"})," although supporting some use cases."]})}),"\n",(0,s.jsxs)(t.p,{children:["By default, the client generation for input specification with ",(0,s.jsx)(t.code,{children:"anyOf/oneOf"})," keywords in the following locations fails:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Keywords existing under the ",(0,s.jsx)(t.code,{children:"paths"})," part, under any operation while defining either the ",(0,s.jsx)(t.code,{children:"requestbody"})," or ",(0,s.jsx)(t.code,{children:"responses"})]}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Keywords under paths"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"paths:\n /APIPath:\n        put:\n          summary: ...\n          requestBody:\n            description: ...\n            content:\n              application/json:\n                schema:\n                  oneOf:\n                    - $ref: '#/components/schemas/SomeSchema'\n                    - $ref: '#/components/schemas/SomeOtherSchema'\n          responses:\n            '200':\n              description: ...\n              content:\n                application/json:\n                  schema:\n                    oneOf:\n                      - $ref: '#/components/schemas/SomeSchema'\n                      - type: array\n                        items:\n                          $ref: '#/components/schemas/SomeOtherSchema'\n"})})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Keywords existing under any of the ",(0,s.jsx)(t.code,{children:"schemas"})," either under any property in ",(0,s.jsx)(t.code,{children:"properties"})," or under ",(0,s.jsx)(t.code,{children:"additionalProperties"})]}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Keywords under properties of schema"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"components:\n  schemas:\n    SampleSchema:\n      title: SampleSchema\n      description: ...\n      type: object\n      properties:\n        embeddedData:\n          $ref: '#/components/schemas/EmbeddedData'\n        questions:\n          type: array\n          title: questions\n          items:\n            title: Question\n            oneOf:\n              - $ref: '#/components/schemas/mc'\n              - $ref: '#/components/schemas/te'\n              - $ref: '#/components/schemas/db'\n            discriminator:\n              propertyName: type\n      AnotherSampleSchema:\n        description: ...\n        type: ...\n        anotherProperty:\n            description: ...\n            oneOf:\n              - type: string\n                enum:\n                  - ENDOFBLOCK\n                  - ENDOFSURVEY\n              - $ref: '#/components/schemas/SurveyID'\n        additionalProperties:\n          oneOf:\n            - $ref: '#/components/schemas/SomeSchema'\n            - $ref: '#/components/schemas/SomeOtherSchema'\n"})})]}),"\n",(0,s.jsxs)(t.p,{children:["To make the generation to succeed, please use ",(0,s.jsx)(t.code,{children:"<enableOneOfAnyOfGeneration>"})," parameter in the OpenAPI maven generator plugin and re-generate the client again."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(96540),s=n(34164),r=n(23104),i=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,h]=m({queryString:n,groupId:s}),[x,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=c??x;return u({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==a&&(c(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(y,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function A(e){const t=(0,g.A)();return(0,j.jsx)(b,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);