"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6556],{56115:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(74848),r=i(28453);const o={id:"service-bindings",title:"Connecting To Bound Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Bound Services",description:"This article explains how the SAP Cloud SDK can be used to connect to services that are bound to the application.",keywords:["sap","cloud","sdk","destination","servicebinding","servicebindingdestinationloader","java","connectivity","btp"]},s=void 0,a={id:"features/connectivity/service-bindings",title:"Connecting To Bound Services",description:"This article explains how the SAP Cloud SDK can be used to connect to services that are bound to the application.",source:"@site/docs-java/features/connectivity/003-service-bindings.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/service-bindings",permalink:"/cloud-sdk/docs/java/features/connectivity/service-bindings",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/connectivity/003-service-bindings.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"service-bindings",title:"Connecting To Bound Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Bound Services",description:"This article explains how the SAP Cloud SDK can be used to connect to services that are bound to the application.",keywords:["sap","cloud","sdk","destination","servicebinding","servicebindingdestinationloader","java","connectivity","btp"]},sidebar:"docsJavaSidebar",previous:{title:"On-Premise",permalink:"/cloud-sdk/docs/java/features/connectivity/on-premise"},next:{title:"HTTP Destinations",permalink:"/cloud-sdk/docs/java/features/connectivity/http-destinations"}},c={},d=[{value:"Out Of The Box Support",id:"out-of-the-box-support",level:2},{value:"Multitenancy",id:"multitenancy",level:3},{value:"How It Works",id:"how-it-works",level:2},{value:"About the <em>Options</em>",id:"about-the-options",level:2},{value:"Custom Parameters",id:"custom-parameters",level:3},{value:"About the <em>OAuth2Loader</em>",id:"about-the-oauth2loader",level:2},{value:"Dealing With Arbitrary Service Bindings",id:"dealing-with-arbitrary-service-bindings",level:3},{value:"Customization",id:"customization",level:3},{value:"About the Chain Implementation",id:"about-the-chain-implementation",level:2},{value:"Custom Chain Instances",id:"custom-chain-instances",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/SAP/btp-environment-variable-access/wiki/Fundamentals#service-binding",children:(0,t.jsx)(n.em,{children:"Service Bindings"})})," are a fundamental concept of application deployment on the SAP Business Technology Platform.\nA ",(0,t.jsx)(n.em,{children:"Service Binding"}),", in essence, is a set of configurations that applications can use to establish a connection to a (remote) service.\nAs such, both ",(0,t.jsx)(n.em,{children:"Service Bindings"})," as well as ",(0,t.jsx)(n.a,{href:"destination-service#accessing-destinations",children:(0,t.jsx)(n.em,{children:"Destination"})})," resemble the same concept."]}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK, therefore, provides a way to convert ",(0,t.jsx)(n.a,{href:"https://github.com/SAP/btp-environment-variable-access/blob/main/api-parent/core-api/src/main/java/com/sap/cloud/environment/servicebinding/api/ServiceBinding.java",children:(0,t.jsx)(n.code,{children:"ServiceBinding"})})," instances into ",(0,t.jsx)(n.code,{children:"HttpDestination"})," instances. ",(0,t.jsx)("br",{}),"\nThe code below, for example, demonstrates how to transform a ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," for the ",(0,t.jsx)(n.a,{href:"https://api.sap.com/api/SAP_CP_Workflow_CF/overview",children:"Workflow REST API"})," into an ",(0,t.jsx)(n.code,{children:"HttpDestination"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import com.sap.cloud.environment.servicebinding.api.ServiceIdentifier;\nimport com.sap.cloud.sdk.cloudplatform.connectivity.BtpServiceOptions;\n\nvar options =\n    ServiceBindingDestinationOptions\n        .forService(ServiceIdentifier.WORKFLOW)\n        .withOption(BtpServiceOptions.WorkflowOptions.REST_API)\n        .build();\nHttpDestination destination = ServiceBindingDestinationLoader.defaultLoaderChain().getDestination(options);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"out-of-the-box-support",children:"Out Of The Box Support"}),"\n",(0,t.jsx)(n.admonition,{title:"Prerequisites",type:"caution",children:(0,t.jsxs)(n.p,{children:["For the following to work, the application needs to add the ",(0,t.jsx)(n.a,{href:"https://central.sonatype.com/artifact/com.sap.cloud.sdk.cloudplatform/connectivity-oauth",children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"connectivity-oauth"})," artifact"]})})," to its dependencies."]})}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK is able to deal with ",(0,t.jsx)(n.code,{children:"ServiceBinding"}),"s for the following BTP services:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://api.sap.com/api/SAP_CP_CF_Connectivity_Destination/overview",children:"The BTP Destination Service on Cloud Foundry"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/what-is-sap-btp-connectivity",children:"The BTP Connectivity Service on Cloud Foundry"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://api.sap.com/package/SAPCPWorkflowAPIs/all",children:"The SAP Workflow Service on Cloud Foundry"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://api.sap.com/api/SAP_CP_Workflow_TCM_CF/overview",children:"Inbox API (OData)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://api.sap.com/api/SAP_CP_Workflow_CF/overview",children:"Workflow API (REST)"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://api.sap.com/package/SAPCPBusinessRulesAPIs/all",children:"The SAP Business Rules Service on Cloud Foundry"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://api.sap.com/api/SAP_CF_BusinessRules_Repository/overview",children:"Rule Authoring API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://api.sap.com/api/SAP_CF_BusinessRules_Runtime_V2/overview",children:"Rule Execution API (v2)"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://api.sap.com/api/AI_CORE_API",children:"The SAP AI Core Service"})}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.em,{children:"SAP Business Logging on Cloud Foundry"})," (SAP internal)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration API"}),"\n",(0,t.jsx)(n.li,{children:"Text API"}),"\n",(0,t.jsx)(n.li,{children:"Reading API"}),"\n",(0,t.jsx)(n.li,{children:"Writing API"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For BTP services that offer different APIs (such as the Workflow service), make sure to define which API the converted ",(0,t.jsx)(n.code,{children:"HttpDestination"})," should point to using the corresponding ",(0,t.jsx)(n.code,{children:"BtpServiceOptions"}),". ",(0,t.jsx)("br",{}),"\nFor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import com.sap.cloud.sdk.cloudplatform.connectivity.BtpServiceOptions;\n\nServiceBindingDestinationOptions\n        .forService(ServiceIdentifier.WORKFLOW)\n        .withOption(BtpServiceOptions.WorkflowOptions.REST_API)\n        .build();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"multitenancy",children:"Multitenancy"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HttpDestination"})," instances created by the ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," API are, by default, ",(0,t.jsx)(n.strong,{children:"tenant-aware"}),".\nThis means that communication with the target system will happen according to the specified ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationOptions.Builder.html#onBehalfOf(com.sap.cloud.sdk.cloudplatform.connectivity.OnBehalfOf)",children:(0,t.jsx)(n.code,{children:"OnBehalfOf"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The default value, ",(0,t.jsx)(n.code,{children:"OnBehalfOf.TECHNICAL_USER_CURRENT_TENANT"}),", can be overwritten when assembling the ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," instance:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:"{4}",children:"ServiceBindingDestinationOptions\n    .forService(ServiceIdentifier.WORKFLOW)\n    .withOption(BtpServiceOptions.WorkflowOptions.REST_API)\n    .onBehalfOf(OnBehalfOf.NAMED_USER_CURRENT_TENANT)\n    .build();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,t.jsxs)(n.p,{children:["In general, the ",(0,t.jsxs)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationLoader.html",children:[(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," API"]})," can be used to convert ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," instances into ",(0,t.jsx)(n.code,{children:"HttpDestination"})," instances.\nIt comes as part of the ",(0,t.jsxs)(n.a,{href:"https://central.sonatype.com/artifact/com.sap.cloud.sdk.cloudplatform/cloudplatform-connectivity",children:[(0,t.jsx)(n.code,{children:"cloudplatform-connectivity"})," artifact"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The API is designed for easy extensibility and customization.\nHereby, each ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"}),' implementation is supposed to provide the transformation logic for one specific "type" of ',(0,t.jsx)(n.code,{children:"ServiceBinding"}),". ",(0,t.jsx)("br",{}),"\nThe SAP Cloud SDK provides, for example, ",(0,t.jsx)(n.a,{href:"#about-the-oauth2loader",children:"an implementation that is capable of dealing with service bindings that use OAuth2 authentication"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["As an input, the API requires ",(0,t.jsxs)(n.a,{href:"#about-the-options",children:["the ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})]})," instance.\nThis class is designed to hold all information that is required to transform a ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," into an ",(0,t.jsx)(n.code,{children:"HttpDestination"})," - this, first and foremost, includes the ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," itself."]}),"\n",(0,t.jsxs)(n.p,{children:["Furthermore, there is also a ",(0,t.jsxs)(n.a,{href:"#about-the-chain-implementation",children:[(0,t.jsx)(n.em,{children:"chain"})," implementation"]})," that can be used to combine multiple ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," implementations into one.\nThe chain will try to load a destination using the given ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," delegates until the first of them succeeds - much like a fallback mechanism.\nThis concept is also reflected in the example from above, where the ",(0,t.jsx)(n.code,{children:"defaultLoaderChain"})," is used to load a destination."]}),"\n",(0,t.jsxs)(n.h2,{id:"about-the-options",children:["About the ",(0,t.jsx)(n.em,{children:"Options"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationOptions.html",children:(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})})," is an ",(0,t.jsx)(n.strong,{children:"extensible and type-safe"})," collection of parameters that can be used to configure the ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," to ",(0,t.jsx)(n.code,{children:"HttpDestination"})," transformation process.\nHereby, the least information that is needed is the ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," itself, which can be provided using the ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationOptions.html#forService(com.sap.cloud.environment.servicebinding.api.ServiceBinding)",children:(0,t.jsx)(n.code,{children:"forService(ServiceBinding)"})})," method."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can also use ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationOptions.html#forService(com.sap.cloud.environment.servicebinding.api.ServiceIdentifier)",children:(0,t.jsx)(n.code,{children:"forService(ServiceIdentifier)"})}),".\nThis method will try to find a ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," for the given ",(0,t.jsx)(n.code,{children:"ServiceIdentifier"})," using the ",(0,t.jsxs)(n.a,{href:"https://github.com/SAP/btp-environment-variable-access/blob/main/api-parent/access-api/src/main/java/com/sap/cloud/environment/servicebinding/api/DefaultServiceBindingAccessor.java",children:[(0,t.jsx)(n.code,{children:"DefaultServiceBindingAccessor"})," instance"]}),". ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"Please note:"})," If there are multiple or no ",(0,t.jsx)(n.code,{children:"ServiceBinding"}),"s for the given ",(0,t.jsx)(n.code,{children:"ServiceIdentifier"}),", an exception will be thrown."]}),"\n",(0,t.jsxs)(n.p,{children:["Besides the ",(0,t.jsx)(n.code,{children:"ServiceBinding"}),", there is a second parameter that is shared between all ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," implementations: The ",(0,t.jsx)(n.code,{children:"OnBehalfOf"}),", for which the destination should be loaded.\nThis can be set using the ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationOptions.Builder.html#onBehalfOf(com.sap.cloud.sdk.cloudplatform.connectivity.OnBehalfOf)",children:(0,t.jsx)(n.code,{children:"onBehalfOf(OnBehalfOf)"})})," method. ",(0,t.jsx)("br",{}),"\nIf not explicitly specified, ",(0,t.jsx)(n.code,{children:"OnBehalfOf.TECHNICAL_USER_CURRENT_TENANT"})," is used."]}),"\n",(0,t.jsx)(n.h3,{id:"custom-parameters",children:"Custom Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Adding custom parameters to the ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," can be done using the ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationOptions.Builder.html#withOption(com.sap.cloud.sdk.cloudplatform.connectivity.ServiceBindingDestinationOptions.OptionsEnhancer)",children:(0,t.jsx)(n.code,{children:"withOption(OptionsEnhancer)"})})," method.\nHereby, an ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ServiceBindingDestinationOptions.OptionsEnhancer.html",children:(0,t.jsx)(n.code,{children:"OptionsEnhancer"})})," is a type-safe representation of arbitrary parameters."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Example: Custom Service Binding Transformation"}),(0,t.jsxs)(n.admonition,{title:"Advanced Usage",type:"tip",children:[(0,t.jsxs)(n.p,{children:["The following example demonstrates a very advanced usage of our ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," API."]}),(0,t.jsxs)(n.p,{children:["A vast majority of use cases do not require a custom ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," implementation. ",(0,t.jsx)("br",{}),"\nInstead, customizing the existing ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"})," as ",(0,t.jsx)(n.a,{href:"#customization",children:"described below"})," is most probably sufficient."]})]}),(0,t.jsxs)(n.p,{children:["Lets assume we are providing a custom ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," implementation that requires some additional information to be able to transform a ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," into an ",(0,t.jsx)(n.code,{children:"HttpDestination"}),"."]}),(0,t.jsxs)(n.p,{children:["In this example, we assume that there are two different APIs for our service.\nDepending on which API we want to create our ",(0,t.jsx)(n.code,{children:"HttpDestination"})," for, we need to slightly alter the transformation logic.\nAdditionally, we want to be able to supply an additional ",(0,t.jsx)(n.code,{children:"String"})," parameter that also affects the created ",(0,t.jsx)(n.code,{children:"HttpDestination"}),"."]}),(0,t.jsxs)(n.p,{children:["To achieve this behavior, we would need to implement two ",(0,t.jsx)(n.code,{children:"OptionsEnhancer"}),"s like so:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MyApiChoice.java" showLineNumbers',children:"enum MyApiChoice implements ServiceBindingDestinationOptions.OptionsEnhancer<MyApiChoice> {\n    API1,\n    API2;\n\n    @Nonnull\n    @Override\n    public MyApiChoice getValue() {\n        return this;\n    }\n}\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MyStringParameter.java" showLineNumbers',children:"class MyStringParameter implements ServiceBindingDestinationOptions.OptionsEnhancer<String> {\n    private final String value;\n\n    public static MyStringParameter of(String value) {\n        return new MyStringParameter(value);\n    }\n\n    private MyStringParameter(String value) {\n        this.value = value;\n    }\n\n    @Nonnull\n    @Override\n    public String getValue() {\n        return value;\n    }\n}\n"})}),(0,t.jsxs)(n.p,{children:["The first implementation uses an ",(0,t.jsx)(n.code,{children:"enum"})," to implement a ",(0,t.jsx)(n.strong,{children:"fixed set of choices"})," option.\nIt is noteworthy that the actual parameter type is the ",(0,t.jsx)(n.code,{children:"MyApiChoice"})," enum itself.\nThat way, we will be able to retrieve the set value later on."]}),(0,t.jsxs)(n.p,{children:["In contrast to that, the second implementation provides a ",(0,t.jsx)(n.code,{children:"String"})," parameter."]}),(0,t.jsx)(n.p,{children:"Setting the options can then be done like so:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'ServiceBinding someServiceBinding;\n\nServiceBindingDestinationOptions\n        .forService(someServiceBinding)\n        .withOption(MyApiChoice.API1)\n        .withOption(MyStringParameter.of("some-value"))\n        .build();\n'})}),(0,t.jsxs)(n.p,{children:["Finally, we can implement our custom ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," that uses our new options like so:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MyCustomServiceBindingLoader.java" showLineNumbers',children:'class MyCustomServiceBindingLoader implements ServiceBindingDestinationLoader\n{\n    @Nonnull\n    @Override\n    public Try<HttpDestination> tryGetDestination( @Nonnull ServiceBindingDestinationOptions options )\n    {\n        Option<MyApiChoice> maybeOption = options.getOption(MyApiChoice.class);\n        if( maybeOption.isEmpty() ) {\n            return Try.failure(new DestinationNotFoundException("No API choice was specified."));\n        }\n\n        Option<String> maybeStringValue = options.getOption(MyStringParameter.class);\n\n        MyApiChoice option = maybeOption.get();\n        switch( option ) {\n            case API1:\n                // do something\n                break;\n            case API2:\n                // do something else\n                break;\n        }\n    }\n}\n'})})]}),"\n",(0,t.jsxs)(n.h2,{id:"about-the-oauth2loader",children:["About the ",(0,t.jsx)(n.em,{children:"OAuth2Loader"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/OAuth2ServiceBindingDestinationLoader.html",children:(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"})})," comes as part of the ",(0,t.jsxs)(n.a,{href:"https://central.sonatype.com/artifact/com.sap.cloud.sdk.cloudplatform/connectivity-oauth",children:[(0,t.jsx)(n.code,{children:"connectivity-oauth"})," artifact"]})," and provides a customizable implementation for converting ",(0,t.jsx)(n.code,{children:"ServiceBinding"}),"s that use OAuth2 authentication into ",(0,t.jsx)(n.code,{children:"HttpDestination"})," instances. ",(0,t.jsx)("br",{}),"\nMore precisely, it supports the ",(0,t.jsx)(n.strong,{children:"OAuth2 Client Credentials"})," and ",(0,t.jsx)(n.strong,{children:"OAuth2 Client Certificate"})," grant types."]}),"\n",(0,t.jsx)(n.p,{children:"Internally, the implementation performs the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Check whether the given ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," can be transformed (e.g. whether the ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," uses a supported grant type)."]}),"\n",(0,t.jsxs)(n.li,{children:["Extract the required information from the ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," (i.e. the service URL, the token URL, and the client identity)."]}),"\n",(0,t.jsxs)(n.li,{children:["Assemble an ",(0,t.jsx)(n.code,{children:"HttpDestination"})," that uses the extracted information for the ",(0,t.jsx)(n.strong,{children:"target authentication"})," (i.e. HTTP header ",(0,t.jsx)(n.code,{children:"Authorization"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dealing-with-arbitrary-service-bindings",children:"Dealing With Arbitrary Service Bindings"}),"\n",(0,t.jsxs)(n.p,{children:["Even though ",(0,t.jsx)(n.strong,{children:"service bindings"})," are a fundamental concept in the SAP Business Technology Platform, the way they are used and structured can ",(0,t.jsx)(n.strong,{children:"vary greatly from service to service"}),".\nAs a consequence, it is not possible to provide a uniform way of dealing with arbitrary ",(0,t.jsx)(n.code,{children:"ServiceBinding"}),"s. ",(0,t.jsx)("br",{}),"\nTherefore, the ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"})," leverages the ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/OAuth2PropertySupplier.html",children:(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})})," interface to extract the required information from a given ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoaderOptions"})," instance."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"})," stores a ",(0,t.jsx)(n.strong,{children:"static list"})," of ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," instances.\nWhenever the ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"})," is asked to load a destination, it will iterate over this list (",(0,t.jsx)(n.strong,{children:"in order"}),") to see whether"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["the given ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," can be transformed into an ",(0,t.jsx)(n.code,{children:"HttpDestination"})," using the current ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," instance, and, if so"]}),"\n",(0,t.jsxs)(n.li,{children:["extract the required information from the given ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," using the current ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By default, there are ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," for the services ",(0,t.jsx)(n.a,{href:"#out-of-the-box-support",children:"mentioned above"})," in place."]}),"\n",(0,t.jsx)(n.h3,{id:"customization",children:"Customization"}),"\n",(0,t.jsxs)(n.p,{children:["In case the default configuration of the ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"})," does not fit your needs, you can customize it by adding your own ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," instances to the static list of the ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"OAuth2ServiceBindingDestinationLoader.registerPropertySupplier(this::canBeConverted, this::propertySupplierFactory);\n\nboolean canBeConverted(ServiceBindingDestinationOptions options);\nOAuth2PropertySupplier propertySupplierFactory(ServiceBindingDestinationOptions options);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As shown above, the ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/OAuth2ServiceBindingDestinationLoader.html#registerPropertySupplier(java.util.function.Predicate,java.util.function.Function)",children:(0,t.jsx)(n.code,{children:"registerPropertySupplier"})})," method takes two methods as parameters.\nThis might be unintuitive, but is needed to allow for efficient implementations."]}),"\n",(0,t.jsxs)(n.p,{children:["What is happening internally when this method is used, is that the given parameters are transformed into an internal representation, which is then ",(0,t.jsx)(n.strong,{children:"prepended"})," to the list of available ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," instances.\nIn other words: Using the ",(0,t.jsx)(n.code,{children:"registerPropertySupplier"})," method will make your ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," instance be considered ",(0,t.jsx)(n.strong,{children:"before"})," any previously registered ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," instance, including the default ones."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Full Example"}),(0,t.jsxs)(n.p,{children:["To make things a bit more concrete, let's assume we wanted to implement support for an other service, which uses its very own ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," structure."]}),(0,t.jsx)(n.p,{children:"Our hypothetical service binding could look like this:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "service": "my-service",\n  "credentials": {\n    "service": {\n      "read": "https://my-service.com/api/v1/read",\n      "write": "https://my-service.com/api/v2/write"\n    },\n    "oauth": {\n      "uri": "https://my-service.com/oauth/token",\n      "id": "my-client-id",\n      "secret": "my-client-secret"\n    }\n  }\n}\n'})}),(0,t.jsxs)(n.p,{children:["The service binding above contains two different API endpoints (",(0,t.jsx)(n.code,{children:"read"})," and ",(0,t.jsx)(n.code,{children:"write"}),"), which we would like to be able to access using the ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"}),".\nTo support that, we need to implement an ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," (to implement the property extraction logic) and an ",(0,t.jsx)(n.code,{children:"OptionsEnhancer"})," (to allow users to define which endpoint they would like to use):"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MyApiEndpoint.java" showLineNumbers',children:"enum MyApiEndpoint implements ServiceBindingDestinationOptions.OptionsEnhancer<MyApiEndpoint> {\n    READ,\n    WRITE;\n\n    @Nonnull\n    @Override\n    public MyApiEndpoint getValue() {\n        return this;\n    }\n}\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MyServiceOAuth2PropertySupplier.java" showLineNumbers',children:'class MyServiceOAuth2PropertySupplier extends DefaultOAuth2PropertySupplier\n{\n    public MyServiceOAuth2PropertySupplier(ServiceBindingDestinationOptions options) {\n        super(options, Collections.singletonList("oauth"));\n    }\n\n    @Override\n    public boolean isOAuth2Binding() {\n        return getOAuthCredential(String.class, "id").isDefined();\n    }\n\n    @Nonnull\n    @Override\n    public URI getServiceUri() {\n        MyApiEndpoint endpoint = options.getOption(MyApiEndpoint.class).getOrElse(MyApiEndpoint.READ);\n        return switch (endpoint) {\n            case READ -> getCredentialOrThrow(URI.class, "service", "read");\n            case WRITE -> getCredentialOrThrow(URI.class, "service", "write");\n        };\n    }\n\n    @Nonnull\n    @Override\n    public URI getTokenUri() {\n        return getOAuthCredentialOrThrow(URI.class, "uri");\n    }\n\n    @Nonnull\n    @Override\n    public ClientIdentity getClientIdentity() {\n        var clientId = getOAuthCredentialOrThrow(String.class, "id");\n        var clientSecret = getOAuthCredentialOrThrow(String.class, "secret");\n        return new ClientCredentials(clientId, clientSecret);\n    }\n}\n'})}),(0,t.jsx)(n.p,{children:"Lets examine the implementation above:"}),(0,t.jsxs)(n.p,{children:["Right in the first line, you can see that our implementation extends the ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultOAuth2PropertySupplier.html",children:(0,t.jsx)(n.code,{children:"DefaultOAuth2PropertySupplier"})})," class, instead of implementing the ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," interface directly. ",(0,t.jsx)("br",{}),"\nThis is because the ",(0,t.jsx)(n.code,{children:"DefaultOAuth2PropertySupplier"})," class provides a lot of useful functionality, which we can reuse in our implementation. ",(0,t.jsx)("br",{}),"\nWe will see that in a second."]}),(0,t.jsxs)(n.p,{children:["Next thing we should pay attention to is the constructor of our class. ",(0,t.jsx)("br",{}),"\nIt takes an instance of ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," as a parameter.\nThis instance is then passed to the ",(0,t.jsx)(n.code,{children:"super"})," constructor (line 4) along with a list of ",(0,t.jsx)(n.code,{children:"String"}),"s."]}),(0,t.jsxs)(n.p,{children:["The super class (",(0,t.jsx)(n.code,{children:"DefaultOAuth2PropertySupplier"}),") uses these parameters to"]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["cache the ",(0,t.jsx)(n.em,{children:"credentials"})," portion of the ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," (given in the ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"}),") as a ",(0,t.jsxs)(n.a,{href:"https://github.com/SAP/btp-environment-variable-access/blob/main/api-parent/consumption-api/src/main/java/com/sap/cloud/environment/servicebinding/api/TypedMapView.java",children:[(0,t.jsx)(n.code,{children:"TypedMapView"})," instance"]})," and"]}),"\n",(0,t.jsxs)(n.li,{children:["set the ",(0,t.jsx)(n.em,{children:"default oauth2 properties path"})," ",(0,t.jsx)(n.strong,{children:"within"})," the ",(0,t.jsx)(n.em,{children:"credentials"})," portion of the ",(0,t.jsx)(n.code,{children:"ServiceBinding"}),"."]}),"\n"]}),(0,t.jsxs)(n.p,{children:["Converting the ",(0,t.jsx)(n.em,{children:"credentials"})," portion of the ",(0,t.jsx)(n.code,{children:"ServiceBinding"})," into a ",(0,t.jsx)(n.code,{children:"TypedMapView"})," is helpful for parsing the nested structure. ",(0,t.jsx)("br",{}),"\nTherefore, it is a good idea to do the conversion (i.e. ",(0,t.jsx)(n.code,{children:"TypeMapView.ofCredentials(ServiceBinding)"}),") just once as it performs an expensive deep-copy.\nHereby, the ",(0,t.jsx)(n.code,{children:"DefaultOAuth2PropertySupplier"})," takes care of doing the conversion upon initialization and caching the result for later use."]}),(0,t.jsxs)(n.p,{children:["Further down in our code (i.e. within the overriden methods), we can then use the ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultOAuth2PropertySupplier.html#getCredential(java.lang.Class,java.lang.String...)",children:(0,t.jsx)(n.code,{children:"getCredential/OrThrow"})})," and ",(0,t.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultOAuth2PropertySupplier.html#getOAuthCredential(java.lang.Class,java.lang.String...)",children:(0,t.jsx)(n.code,{children:"getOAuthCredential/OrThrow"})})," methods to extract the required information from the cached ",(0,t.jsx)(n.em,{children:"credentials"}),". ",(0,t.jsx)("br",{}),"\nThe main difference between ",(0,t.jsx)(n.code,{children:"getCredential"})," and ",(0,t.jsx)(n.code,{children:"getOAuthCredential"})," is that the latter will ",(0,t.jsx)(n.strong,{children:"prepend"})," the ",(0,t.jsx)(n.em,{children:"default oauth2 properties path"})," to the one given in the method invocation before trying to extract the information. ",(0,t.jsx)("br",{}),"\nIn our example (line 9), this means that ",(0,t.jsx)(n.code,{children:'getOAuthCredential(String.class, "id")'})," will try to extract a ",(0,t.jsx)(n.code,{children:"String"})," value from ",(0,t.jsx)(n.code,{children:'credentials.get("oauth").get("id")'})," (",(0,t.jsx)(n.em,{children:"pseudo code"}),"). ",(0,t.jsx)("br",{}),"\nIn contrast to that, using just ",(0,t.jsx)(n.code,{children:'getCredential(String.class, "id")'})," would try to extract a ",(0,t.jsx)(n.code,{children:"String"})," value from ",(0,t.jsx)(n.code,{children:'credentials.get("id")'})," (",(0,t.jsx)(n.em,{children:"pseudo code"}),"). ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.code,{children:"getOAuthCredential"})," is therefore just a neat shortcut that can help to reduce repetitive code."]}),(0,t.jsxs)(n.p,{children:["Please note how we are handling our ",(0,t.jsx)(n.code,{children:"MyApiEndpoint"})," option in the ",(0,t.jsx)(n.code,{children:"getServiceUri"})," method (lines 14 - 20). ",(0,t.jsx)("br",{}),"\nWe are reading the option by simply providing the ",(0,t.jsx)(n.code,{children:"MyApiEndpoint.class"})," as the parameter to the ",(0,t.jsx)(n.code,{children:"getOption"})," method.\nThat way, we can decide which service URI to use, depending on the user input."]}),(0,t.jsxs)(n.p,{children:["Lastly, we need to register our ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," implementation with the ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MyServiceOAuth2PropertySupplier.java" showLineNumbers',children:'class MyServiceOAuth2PropertySupplier extends DefaultOAuth2PropertySupplier {\n    private static final ServiceIdentifier MY_SERVICE_IDENTIFIER = ServiceIdentifier.of("my-service");\n\n    public static boolean matches(ServiceBindingDestinationOptions options) {\n        var serviceIdentifier = options.getServiceBinding().getServiceIdentifier().orElse(null);\n        return MY_SERVICE_IDENTIFIER.equals(serviceIdentifier);\n    }\n\n    // skipped for brevity\n}\n\nOAuth2ServiceBindingDestinationLoader.registerPropertySupplier(MyServiceOAuth2PropertySupplier::matches, MyServiceOAuth2PropertySupplier::new);\n'})}),(0,t.jsxs)(n.p,{children:["In the above example, we added a static ",(0,t.jsx)(n.code,{children:"matches"})," method (lines 4 - 7) to our ",(0,t.jsx)(n.code,{children:"OAuth2PropertySupplier"})," implementation, which we can use to check whether the given ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," can be transformed into an ",(0,t.jsx)(n.code,{children:"HttpDestination"})," using our implementation.\nWe are then using method references to register our implementation with the ",(0,t.jsx)(n.code,{children:"OAuth2ServiceBindingDestinationLoader"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"about-the-chain-implementation",children:"About the Chain Implementation"}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned ",(0,t.jsx)(n.a,{href:"#how-it-works",children:"above"}),", the ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," comes with a private ",(0,t.jsx)(n.em,{children:"chain"})," implementation."]}),"\n",(0,t.jsxs)(n.p,{children:["The default instance of that chain (",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader.defaultLoaderChain"}),") is created using the ",(0,t.jsx)(n.em,{children:"Service Locator Pattern"})," to find all available ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," implementations on the classpath.\nInstances of these implementations are then used as delegate loaders.\nWhen transforming a ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})," into an ",(0,t.jsx)(n.code,{children:"HttpDestination"}),", the chain will invoke the delegates ",(0,t.jsx)(n.strong,{children:"in order"})," until the first one either succeeds or throws an exception other than ",(0,t.jsx)(n.code,{children:"DestinationNotFoundException"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"Service Locator Pattern"})," does not provide any guarantees about the order in which implementations on the classpath are found.\nTherefore, it is ",(0,t.jsx)(n.strong,{children:"crucial"})," that ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," implementations do ",(0,t.jsxs)(n.strong,{children:["not handle the same ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationOptions"})]})," as otherwise the default chain's behavior would be ",(0,t.jsx)(n.strong,{children:"unpredictable"}),"."]}),(0,t.jsx)(n.p,{children:"Implementations provided by the SAP Cloud SDK follow this rule."})]}),"\n",(0,t.jsx)(n.h3,{id:"custom-chain-instances",children:"Custom Chain Instances"}),"\n",(0,t.jsx)(n.p,{children:"If the default chain implementation does not meet your needs, you can create your own chain instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ServiceBindingDestinationLoader myChain = ServiceBindingDestinationLoader.newLoaderChain(\n        Arrays.asList(\n                new MyFirstLoader(),\n                new MySecondLoader()\n        ));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The code above initializes a new instance of the private chain implementation, which uses the given ",(0,t.jsx)(n.code,{children:"ServiceBindingDestinationLoader"})," instances ",(0,t.jsx)(n.strong,{children:"in the specified order"})," as its delegates.\nTherefore, deterministic behavior is guaranteed."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);