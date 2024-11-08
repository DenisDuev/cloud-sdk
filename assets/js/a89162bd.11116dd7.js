"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4276],{92455:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"features/connectivity/http-destinations","title":"HTTP Destinations","description":"This article dives into the DefaultHttpDestination API, explaining important implementation details and how to customize it.","source":"@site/docs-java/features/connectivity/004-http-destinations.mdx","sourceDirName":"features/connectivity","slug":"/features/connectivity/http-destinations","permalink":"/cloud-sdk/docs/java/features/connectivity/http-destinations","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/connectivity/004-http-destinations.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"http-destinations","title":"HTTP Destinations","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"HTTP Destinations","description":"This article dives into the DefaultHttpDestination API, explaining important implementation details and how to customize it.","keywords":["sap","cloud","sdk","destination","java","connectivity","btp","httpdestination"]},"sidebar":"docsJavaSidebar","previous":{"title":"Bound Services","permalink":"/cloud-sdk/docs/java/features/connectivity/service-bindings"},"next":{"title":"HTTP Client","permalink":"/cloud-sdk/docs/java/features/connectivity/http-client"}}');var r=i(74848),a=i(28453);const s={id:"http-destinations",title:"HTTP Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"HTTP Destinations",description:"This article dives into the DefaultHttpDestination API, explaining important implementation details and how to customize it.",keywords:["sap","cloud","sdk","destination","java","connectivity","btp","httpdestination"]},o=void 0,d={},l=[{value:"About Immutability",id:"about-immutability",level:2},{value:"About HTTP Headers",id:"about-http-headers",level:2},{value:"Deriving the <code>Authorization</code> Header",id:"deriving-the-authorization-header",level:3},{value:"Deriving the <code>Proxy-Authorization</code> Header",id:"deriving-the-proxy-authorization-header",level:3},{value:"About the <em>Builder</em> API",id:"about-the-builder-api",level:2},{value:"Provide Query Parameters for Destinations",id:"provide-query-parameters-for-destinations",level:3},{value:"Building on Top of an Existing Destination",id:"building-on-top-of-an-existing-destination",level:3},{value:"Adding Individual Headers",id:"adding-individual-headers",level:3},{value:"Adding Individual Header Providers",id:"adding-individual-header-providers",level:3},{value:"Using mTLS",id:"using-mtls",level:3},{value:"About <em>HeaderProviders</em>",id:"about-headerproviders",level:2},{value:"Adding Static Header Providers",id:"adding-static-header-providers",level:3},{value:"Special Header Providers",id:"special-header-providers",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"HTTP is the most prominent communication protocol supported by the SAP Cloud SDK.\nConnecting to a remote system or service using HTTP is, therefore, a very common use case."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/HttpDestinationProperties.html",children:(0,r.jsx)(t.code,{children:"HttpDestinationProperties"})})," interface defines a set of properties that are required to connect to a remote system or service using HTTP, such as the URL, authentication, proxy settings, and HTTP headers."]}),"\n",(0,r.jsxs)(t.p,{children:["In the following sections, we are diving into its default, and only, implementation: The ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html",children:(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"about-immutability",children:"About Immutability"}),"\n",(0,r.jsxs)(t.p,{children:["As per API contract, the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," is an ",(0,r.jsx)(t.strong,{children:"immutable container"})," for destination properties.\nOnce initialized, it is not possible to add, remove, or modify any of its properties."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"However"}),", there might be properties that contain non-primitive values, such as lists, maps, or other objects.\nThese values ",(0,r.jsx)(t.strong,{children:"might"})," be mutable, depending on their implementation.\nTherefore, it is impossible to guarantee ",(0,r.jsx)(t.em,{children:"true immutability"})," for the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," implementation.\nInstead, the implementation provides a ",(0,r.jsx)(t.em,{children:"shallow immutability"})," guarantee."]}),"\n",(0,r.jsxs)(t.p,{children:["This implementation detail is important for using ",(0,r.jsx)(t.a,{href:"#about-the-builder-api",children:"the builder API"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"about-http-headers",children:"About HTTP Headers"}),"\n",(0,r.jsxs)(t.p,{children:["One of the most important properties of any ",(0,r.jsx)(t.code,{children:"HttpDestination"})," are the HTTP headers, which are attached to any outgoing request performed with the destination."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," implements support for following sources of HTTP headers:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Properties named using the pattern ",(0,r.jsx)(t.code,{children:"URL.header.<header-name>"})," will be converted into HTTP headers."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#special-header-providers",children:"Special properties"}),", which will be converted into HTTP headers."]}),"\n",(0,r.jsxs)(t.li,{children:["Headers that were ",(0,r.jsx)(t.a,{href:"#adding-individual-headers",children:"directly added"})," via the ",(0,r.jsx)(t.a,{href:"#about-the-builder-api",children:"Builder API"})," while assembling the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," instance."]}),"\n",(0,r.jsxs)(t.li,{children:["Headers that are provided by ",(0,r.jsxs)(t.a,{href:"#about-headerproviders",children:[(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"}),"s"]}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Any headers required for on-premise connectivity will automatically be added, ",(0,r.jsx)(t.strong,{children:"iff"})," the ",(0,r.jsx)(t.code,{children:"ProxyType"})," property is set to ",(0,r.jsx)(t.code,{children:"OnPremise"})," as ",(0,r.jsx)(t.a,{href:"#deriving-the-proxy-authorization-header",children:"explained below"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Headers that are dervied from ",(0,r.jsx)(t.a,{href:"#deriving-the-authorization-header",children:"authentication related properties"}),", ",(0,r.jsx)(t.strong,{children:"iff"})," no ",(0,r.jsx)(t.code,{children:"Authorization"})," header was provided by any of the previous options."]}),"\n",(0,r.jsxs)(t.li,{children:["Headers that are derived from ",(0,r.jsx)(t.a,{href:"#deriving-the-proxy-authorization-header",children:"proxy authentication related properties"}),", ",(0,r.jsx)(t.strong,{children:"iff"})," no ",(0,r.jsx)(t.code,{children:"Proxy-Authorization"})," header was provided by any of the previous options. ",(0,r.jsx)("br",{}),"\nIn most cases, the ",(0,r.jsx)(t.code,{children:"Proxy-Authorization"})," header will be ",(0,r.jsx)(t.a,{href:"on-premise",children:"derived automatically"})," from the bound BTP Connectivity Service."]}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"deriving-the-authorization-header",children:["Deriving the ",(0,r.jsx)(t.code,{children:"Authorization"})," Header"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," tries to derive the ",(0,r.jsx)(t.code,{children:"Authorization"})," header from authentication related properties, ",(0,r.jsx)(t.strong,{children:"iff"})," no ",(0,r.jsx)(t.code,{children:"Authorization"})," header is provided by any other source.\nIn most cases, however, the BTP Destination Service will ",(0,r.jsxs)(t.a,{href:"btp-destination-service#how-authentication-at-the-target-system-works",children:["provide a ",(0,r.jsx)(t.code,{children:"Authorization"})," header"]}),", so this step is usually skipped."]}),"\n",(0,r.jsxs)(t.p,{children:["If the destination does not stem from the BTP destination service, then the concrete properties depend on the ",(0,r.jsx)(t.code,{children:"AuthenticationType"})," of the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.code,{children:"AuthenticationType.BASIC_AUTHENTICATION"}),", the basic credentials are taken from the ",(0,r.jsx)(t.code,{children:"User"})," (or ",(0,r.jsx)(t.code,{children:"username"}),", if the former doesn't exist) and the ",(0,r.jsx)(t.code,{children:"Password"})," properties. ",(0,r.jsx)("br",{}),"\nIf these properties are not set, an exception is thrown."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.code,{children:"AuthenticationType.TOKEN_FORWARDING"}),", the ",(0,r.jsx)(t.code,{children:"RequestHeaderAccessor"})," is used to find any ",(0,r.jsx)(t.code,{children:"Authorization"})," header in the current request. All headers that are found (there should usually only be one) are then forwarded."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"deriving-the-proxy-authorization-header",children:["Deriving the ",(0,r.jsx)(t.code,{children:"Proxy-Authorization"})," Header"]}),"\n",(0,r.jsx)(t.admonition,{title:"On-Premise Handling",type:"info",children:(0,r.jsxs)(t.p,{children:["As described above, the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," implements dedicated support for on-premise connectivity.\nTherefore, the ",(0,r.jsx)(t.code,{children:"Proxy-Authorization"})," header will automatically be created as ",(0,r.jsx)(t.a,{href:"on-premise",children:"documented here"})," ",(0,r.jsx)(t.strong,{children:"iff"})," the ",(0,r.jsx)(t.code,{children:"ProxyType"})," property is set to ",(0,r.jsx)(t.code,{children:"ON_PREMISE"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["Similar to ",(0,r.jsxs)(t.a,{href:"#deriving-the-authorization-header",children:["the ",(0,r.jsx)(t.code,{children:"Authorization"})," header"]}),", the ",(0,r.jsx)(t.code,{children:"Proxy-Authentication"})," header is derived from proxy authentication related properties, ",(0,r.jsx)(t.strong,{children:"iff"})," no ",(0,r.jsx)(t.code,{children:"Proxy-Authentication"})," header is provided by any other source."]}),"\n",(0,r.jsxs)(t.p,{children:["This is done by attempting to transform the value of the ",(0,r.jsx)(t.code,{children:"ProxyAuthorization"})," property as follows:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If the property doesn't exist or contains an empty ",(0,r.jsx)(t.code,{children:"String"}),", no header is derived."]}),"\n",(0,r.jsxs)(t.li,{children:["If the property contains a ",(0,r.jsx)(t.code,{children:"String"})," that starts with ",(0,r.jsx)(t.code,{children:'"Basic "'}),", the value is assumed to be a Base64-encoded ",(0,r.jsx)(t.code,{children:"username:password"})," pair and is transformed into a ",(0,r.jsx)(t.code,{children:"Basic"})," header."]}),"\n",(0,r.jsxs)(t.li,{children:["If the property contains a ",(0,r.jsx)(t.code,{children:"String"})," that starts with ",(0,r.jsx)(t.code,{children:'"Bearer "'}),", the value is assumed to be a JWT token and is transformed into a ",(0,r.jsx)(t.code,{children:"Bearer"})," header."]}),"\n",(0,r.jsxs)(t.li,{children:["Any other value will be ",(0,r.jsx)(t.strong,{children:"ignored"})," and no header will be derived. Additionally, an error message will be logged."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In general, the ",(0,r.jsx)(t.code,{children:"Proxy-Authorization"})," header will ",(0,r.jsx)(t.strong,{children:"only"})," be derived if the properties contain a full proxy configuration.\nSuch a proxy configuration must contain a proxy URI, which is either taken from the ",(0,r.jsx)(t.code,{children:"Proxy"})," property or, if that doesn't exist, is constructed from the ",(0,r.jsx)(t.code,{children:"ProxyHost"})," and ",(0,r.jsx)(t.code,{children:"ProxyPort"})," properties."]}),"\n",(0,r.jsxs)(t.h2,{id:"about-the-builder-api",children:["About the ",(0,r.jsx)(t.em,{children:"Builder"})," API"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html",children:(0,r.jsx)(t.code,{children:"DefaultHttpDestination.Builder"})})," allows applications to either create a ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"}),' instance from scratch or to "modify" an existing one.\nIt offers APIs to set any desired property, header, header provider, or any other value that is supported by the ',(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," implementation."]}),"\n",(0,r.jsx)(t.h3,{id:"provide-query-parameters-for-destinations",children:"Provide Query Parameters for Destinations"}),"\n",(0,r.jsx)(t.p,{children:"You can add query parameters to a specific destination using properties.\nThey will always be included in the query string when calling the target system."}),"\n",(0,r.jsxs)(t.p,{children:["Here is an example implementation which adds ",(0,r.jsx)(t.code,{children:"key1=value1"})," to the query string when calling the destination:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'destination =\n            DefaultHttpDestination\n                .builder(server.baseUrl())\n                .property("URL.queries.key1", "value1")\n                .build();\n'})}),"\n",(0,r.jsx)(t.h3,{id:"building-on-top-of-an-existing-destination",children:"Building on Top of an Existing Destination"}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes, it is needed to slightly adjust an existing ",(0,r.jsx)(t.code,{children:"Destination"})," instance.\nFor example, there might be just this one single header missing for a specific request. ",(0,r.jsx)("br",{}),"\nAdding this header directly to the existing ",(0,r.jsx)(t.code,{children:"Destination"})," instance, however, is not possible, as ",(0,r.jsxs)(t.a,{href:"#about-immutability",children:["the ",(0,r.jsx)(t.code,{children:"Destination"})," is immutable"]}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Therefore, the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," provides a way to create a new ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," instance that is based on an existing ",(0,r.jsx)(t.code,{children:"Destination"})," instance.\nThis way is implemented in the ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html#fromDestination(com.sap.cloud.sdk.cloudplatform.connectivity.Destination)",children:(0,r.jsx)(t.code,{children:"fromDestination(Destination)"})}),", ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html#fromProperties(com.sap.cloud.sdk.cloudplatform.connectivity.DestinationProperties)",children:(0,r.jsx)(t.code,{children:"fromProperties(DestinationProperties)"})}),", and ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html#toBuilder()",children:(0,r.jsx)(t.code,{children:"toBuilder()"})})," methods."]}),"\n",(0,r.jsxs)(t.p,{children:["All of these methods will return a new ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination.Builder"})," instance, which is pre-configured with all properties of the given ",(0,r.jsx)(t.code,{children:"DestinationProperties"}),".\nIf the ",(0,r.jsx)(t.code,{children:"fromDestination"})," method is used with an instance of ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"}),", further details will be copied, such as the manually added HTTP headers and ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"}),"s.\nThe same is true for the ",(0,r.jsx)(t.code,{children:"toBuilder"})," method."]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsxs)(t.p,{children:["In the following example, we are retrieving a destination using ",(0,r.jsxs)(t.a,{href:"btp-destination-service",children:["the ",(0,r.jsx)(t.code,{children:"DestinationAccessor"})," API"]}),"."]}),(0,r.jsxs)(t.p,{children:["We would like to add a new header to the destination, but we don't want to lose any of the existing headers.\nTherefore, we are using the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination#fromDestination"})," method like so:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'Destination existingDestination = DestinationAccessor.getDestination("my-destination");\nassertThat(existingDestination.asHttp().getHeaders())\n        .containsExactly(\n                new Header("X-My-Header", "MyHeaderValue")\n        );\n\nDefaultHttpDestination enhancedDestination = DefaultHttpDestination.fromDestination(existingDestination)\n        .header(new Header("My-New-Header", "MyNewHeaderValue"))\n        .build();\n\nassertThat(enhancedDestination.getHeaders())\n        .containsExactly(\n                new Header("X-My-Header", "MyHeaderValue"),\n                new Header("My-New-Header", "MyNewHeaderValue")\n        );\n'})}),(0,r.jsxs)(t.p,{children:["As a result, our ",(0,r.jsx)(t.code,{children:"enhancedDestination"})," will contain all headers from the ",(0,r.jsx)(t.code,{children:"existingDestination"})," and the new ",(0,r.jsx)(t.code,{children:"My-New-Header"})," header."]}),(0,r.jsxs)(t.p,{children:["Please note the behavior of ",(0,r.jsx)(t.a,{href:"#adding-individual-headers",children:"adding individual headers"})," and ",(0,r.jsx)(t.a,{href:"#adding-individual-header-providers",children:"adding individual header providers"}),".\nAlso, pay attention to ",(0,r.jsx)(t.a,{href:"#about-immutability",children:"potentially shared state"})," between the ",(0,r.jsx)(t.code,{children:"existingDestination"})," and the ",(0,r.jsx)(t.code,{children:"enhancedDestination"}),"."]})]}),"\n",(0,r.jsx)(t.h3,{id:"adding-individual-headers",children:"Adding Individual Headers"}),"\n",(0,r.jsxs)(t.p,{children:["Individual headers can be added via the ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html#header(com.sap.cloud.sdk.cloudplatform.connectivity.Header)",children:(0,r.jsx)(t.code,{children:"header(Header)"})})," and ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html#header(java.lang.String,java.lang.String)",children:(0,r.jsx)(t.code,{children:"header(String, String)"})})," methods.\nIn either case, the newly added header is ",(0,r.jsx)(t.strong,{children:"only added"})," to the list of all headers.\nIt will ",(0,r.jsx)(t.strong,{children:"not"})," override any existing header with the same name."]}),"\n",(0,r.jsx)(t.h3,{id:"adding-individual-header-providers",children:"Adding Individual Header Providers"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html#headerProviders(com.sap.cloud.sdk.cloudplatform.connectivity.DestinationHeaderProvider...)",children:(0,r.jsx)(t.code,{children:"headerProviders(DestinationHeaderProvider...)"})})," method allows you to add as many ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"}),"s to the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," instance as you wish.\nOnce again, existing header providers will ",(0,r.jsx)(t.strong,{children:"not"})," be overridden."]}),"\n",(0,r.jsx)(t.h3,{id:"using-mtls",children:"Using mTLS"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," can be configured to use the ",(0,r.jsx)(t.a,{href:"https://docs.cloudfoundry.org/devguide/deploy-apps/instance-identity.html",children:"BTP CF Instance Identity"})," by using ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/SecurityConfigurationStrategy.html#FROM_PLATFORM",children:(0,r.jsx)(t.code,{children:"SecurityConfigurationStrategy.FROM_PLATFORM"})}),". ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/SecurityConfigurationStrategy.html#FROM_DESTINATION",children:(0,r.jsx)(t.code,{children:"SecurityConfigurationStrategy.FROM_DESTINATION"})}),", on the other hand, derives the security configuration from the destination properties."]}),"\n",(0,r.jsxs)(t.h2,{id:"about-headerproviders",children:["About ",(0,r.jsx)(t.em,{children:"HeaderProviders"})]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationHeaderProvider.html",children:(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"})})," is a simple, yet powerful way of adding HTTP headers to a ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The interface defines just a single method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"List<Header> getHeaders( DestinationRequestContext requestContext );\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If attached to a ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"}),", this method will be called whenever the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," is collecting its HTTP headers (i.e. whenever the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination#getHeaders()"})," method is called)."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"})," implementation hereby gets an instance of ",(0,r.jsx)(t.code,{children:"DestinationRequestContext"}),", which provides access to the current request URI and the destination.\nThus, the implementation gets full access to all properties of the calling ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," instance and can, therefore, decide whether and which HTTP headers it wants to add."]}),"\n",(0,r.jsx)(t.admonition,{title:"Infinite Loop",type:"tip",children:(0,r.jsxs)(t.p,{children:["Calling the ",(0,r.jsx)(t.code,{children:"HttpDestination#getHeaders()"})," method within a ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"})," implementation will result in an infinite loop and, therefore, a ",(0,r.jsx)(t.code,{children:"StackOverflowError"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"adding-static-header-providers",children:"Adding Static Header Providers"}),"\n",(0,r.jsx)(t.p,{children:"In some scenarios, there are certain HTTP headers that should always be sent to a destination, regardless of the request."}),"\n",(0,r.jsxs)(t.p,{children:["Adding these headers to each and every ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," is not only cumbersome but also error-prone.\nSo instead of doing that, the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," uses the ",(0,r.jsx)(t.em,{children:"Service Locator Pattern"})," to find ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"})," implementations on the classpath and adds them automatically."]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsxs)(t.p,{children:["Lets assume you would like to always send a special ",(0,r.jsx)(t.code,{children:"X-My-Header"})," header to all remote systems your application is communicating with."]}),(0,r.jsxs)(t.p,{children:["To do so, you would first create a ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"})," implementation that adds the header to any destination:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'package com.sap.cloud.sdk.cloudplatform.connectivity.example;\n\nclass MyHeaderProvider implements DestinationHeaderProvider {\n    @Nonnull\n    @Override\n    public List<Header> getHeaders(@Nonnull DestinationRequestContext requestContext) {\n        return Collections.singletonList(new Header("X-My-Header", "MyHeaderValue"));\n    }\n}\n'})}),(0,r.jsxs)(t.p,{children:["The above code is as simple as it gets.\nIt will always add a static value (",(0,r.jsx)(t.code,{children:'"MyHeaderValue"'}),") to every ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"}),"."]}),(0,r.jsxs)(t.p,{children:["Of course, in a real application, the logic might be a bit more complex.\nTo cope with that, the ",(0,r.jsx)(t.code,{children:"DestinationRequestContext"})," provides access to the current request URI and the destination.\nThat way, you could implement a more complex logic that adds different values to different destinations or decides to not add any headers, if some special condition is met."]}),(0,r.jsxs)(t.p,{children:["Lastly, you would still need to make use of the ",(0,r.jsx)(t.em,{children:"Service Locator Pattern"})," to register your ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"})," implementation. ",(0,r.jsx)("br",{}),"\nFor that, you need to create a file called ",(0,r.jsx)(t.code,{children:"com.sap.cloud.sdk.cloudplatform.connectivity.DestinationHeaderProvider"})," in the ",(0,r.jsx)(t.code,{children:"src/main/resources/META-INF/services"})," folder of your application.\nThis file must contain the fully qualified name of your ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"})," implementation. ",(0,r.jsx)("br",{}),"\nIn this example, the content should be ",(0,r.jsx)(t.code,{children:"com.sap.cloud.sdk.cloudplatform.connectivity.example.MyHeaderProvider"}),"."]}),(0,r.jsx)(t.p,{children:"The result should look like this:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"(your application root)\n\u251c\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u2514\u2500\u2500 java\n            \u251c\u2500\u2500 com\n            \u2502 ... (truncated)\n            \u2514\u2500\u2500 resources\n                \u2514\u2500\u2500 META-INF\n                    \u2514\u2500\u2500 services\n                        \u2514\u2500\u2500 com.sap.cloud.sdk.cloudplatform.connectivity.DestinationHeaderProvider\n"})})]}),"\n",(0,r.jsx)(t.h3,{id:"special-header-providers",children:"Special Header Providers"}),"\n",(0,r.jsxs)(t.p,{children:["The SAP Cloud SDK comes with a set of ",(0,r.jsx)(t.code,{children:"DestinationHeaderProvider"}),"s that are automatically added to any ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," instance."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ErpDestinationHeaderProvider.html",children:(0,r.jsx)(t.code,{children:"ErpDestinationHeaderProvider"})})," is part of the ",(0,r.jsxs)(t.a,{href:"https://central.sonatype.com/artifact/com.sap.cloud.sdk.cloudplatform/cloudplatform-connectivity",children:[(0,r.jsx)(t.code,{children:"cloudplatform-connectivity"})," artifact"]})," and, therefore, will ",(0,r.jsx)(t.strong,{children:"always"})," be added to any ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," instance. ",(0,r.jsx)("br",{}),"\nIt provides the following headers:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"sap-client"})," header, ",(0,r.jsx)(t.strong,{children:"iff"})," the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," contains a ",(0,r.jsx)(t.code,{children:"sap-client"})," property."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"sap-language"})," header.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If the ",(0,r.jsx)(t.code,{children:"DefaultHttpDestination"})," contains a property called ",(0,r.jsx)(t.code,{children:"cloudsdk.dynamicSapLanguage"})," with value ",(0,r.jsx)(t.code,{children:"true"}),", the ",(0,r.jsx)(t.code,{children:"LocaleAccessor"})," will be used to determine the current locale."]}),"\n",(0,r.jsxs)(t.li,{children:["Otherwise, if there is a ",(0,r.jsx)(t.code,{children:"sap-language"})," property, its value will be used."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);