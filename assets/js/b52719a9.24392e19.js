"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[77445],{70425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"features/multi-tenancy/thread-context","title":"Multitenancy With the Thread Context","description":"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.","source":"@site/docs-java/features/multi-tenancy/thread-context.mdx","sourceDirName":"features/multi-tenancy","slug":"/features/multi-tenancy/thread-context","permalink":"/cloud-sdk/docs/java/features/multi-tenancy/thread-context","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/multi-tenancy/thread-context.mdx","tags":[],"version":"current","frontMatter":{"id":"thread-context","title":"Multitenancy With the Thread Context","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Thread Context","description":"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.","keywords":["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"]},"sidebar":"docsJavaSidebar","previous":{"title":"Certificate-based Authentication","permalink":"/cloud-sdk/docs/java/features/connectivity/mtls"},"next":{"title":"Resilience","permalink":"/cloud-sdk/docs/java/features/resilience/"}}');var r=t(74848),s=t(28453);const i={id:"thread-context",title:"Multitenancy With the Thread Context",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",keywords:["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"]},o=void 0,c={},d=[{value:"What Is a Thread Context?",id:"what-is-a-thread-context",level:2},{value:"How Is a Thread Context Created?",id:"how-is-a-thread-context-created",level:2},{value:"Running Asynchronous Operations",id:"running-asynchronous-operations",level:2},{value:"Spring Integration",id:"spring-integration",level:3},{value:"Passing on Other ThreadLocals",id:"passing-on-other-threadlocals",level:3},{value:"Configuring the Executor",id:"configuring-the-executor",level:3},{value:"Modifying the ThreadContext",id:"modifying-the-threadcontext",level:3},{value:"How Can the Thread Context Be Used?",id:"how-can-the-thread-context-be-used",level:2},{value:"Accessing Information",id:"accessing-information",level:3},{value:"Storing Information",id:"storing-information",level:3},{value:"Manipulating HTTP Headers",id:"manipulating-http-headers",level:3},{value:"Create a new RequestHeaderContainer From Scratch",id:"create-a-new-requestheadercontainer-from-scratch",level:4},{value:"Updating an Existing RequestHeaderContainer",id:"updating-an-existing-requestheadercontainer",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"what-is-a-thread-context",children:"What Is a Thread Context?"}),"\n",(0,r.jsxs)(n.p,{children:["The SAP Cloud SDK for Java provides a so-called ",(0,r.jsx)(n.code,{children:"ThreadContext"}),".\nIt serves as thread-safe storage for potentially sensitive information.\nSpecifically, the following three objects are stored:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The current ",(0,r.jsx)(n.em,{children:"Tenant"})]}),"\n",(0,r.jsxs)(n.li,{children:["The current ",(0,r.jsx)(n.em,{children:"Principal"})," (User)"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://jwt.io",children:"JSON Web Token"})," (JWT)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This information is used throughout the SAP Cloud SDK to provide features like tenant and principal isolation, JWT verification and authorization against other systems and services.\nTo ensure different tenants and users are properly isolated in an application, this information is always limited to the thread it was created on unless it is explicitly passed on by the application (see ",(0,r.jsx)(n.a,{href:"#running-asynchronous-operations",children:"Propagating the Thread Context"}),")."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Multi-tenancy describes the access of different, technically separated user groups to the same instance of an application.\nThese user groups are called ",(0,r.jsx)(n.em,{children:"Tenants"}),"."]}),(0,r.jsxs)(n.p,{children:["The SAP Cloud SDK uses the ",(0,r.jsx)(n.code,{children:"Tenant"})," interface to represent them."]})]}),"\n",(0,r.jsx)(n.h2,{id:"how-is-a-thread-context-created",children:"How Is a Thread Context Created?"}),"\n",(0,r.jsxs)(n.p,{children:["The SAP Cloud SDK provides a ",(0,r.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/servletjakarta/RequestAccessorFilter.html",children:(0,r.jsx)(n.code,{children:"RequestFilter"})})," that will listen to incoming HTTP requests.\nThis filter will extract ",(0,r.jsx)(n.strong,{children:"all"})," provided HTTP headers from the incoming request and store them in the ",(0,r.jsx)(n.code,{children:"ThreadContext"}),".\nAdditionally, if the ",(0,r.jsx)(n.code,{children:"Authorization"})," header contains a ",(0,r.jsx)(n.code,{children:"JWT"})," (typically forwarded from the ",(0,r.jsx)(n.a,{href:"https://blogs.sap.com/2020/04/03/sap-application-router/",children:(0,r.jsx)(n.code,{children:"AppRouter"})}),"), the filter will:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Parse this token"}),"\n",(0,r.jsxs)(n.li,{children:["Store it in the ",(0,r.jsx)(n.code,{children:"ThreadContext"})," and"]}),"\n",(0,r.jsxs)(n.li,{children:["Pull the ",(0,r.jsx)(n.em,{children:"Tenant"})," and ",(0,r.jsx)(n.em,{children:"Principal"})," information from it"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To ensure this logic is executed at runtime you need to add the following annotations to your application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Application.java"',children:'@ComponentScan({"com.sap.cloud.sdk", <your.own.package>})\n@ServletComponentScan({"com.sap.cloud.sdk", <your.own.package>})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can verify these annotations are effective at runtime by checking the application logs on debug level.\nOr, in case you get an exception, search the stack trace for ",(0,r.jsx)(n.code,{children:"RequestAccessorFilter.doFilter"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Integration with CAP",type:"tip",children:[(0,r.jsxs)(n.p,{children:["In case you are using CAP (with the ",(0,r.jsx)(n.code,{children:"cds-integration-cloud-sdk"})," dependency) the Tenant, Principal, and Headers will ",(0,r.jsx)(n.strong,{children:"instead"})," be derived from the ",(0,r.jsx)(n.a,{href:"https://cap.cloud.sap/docs/java/request-contexts",children:"CAP Request Context"}),".\nThat also means that the ",(0,r.jsx)(n.code,{children:"ThreadContext"})," will not be used when accessing this information."]}),(0,r.jsxs)(n.p,{children:["For other information (e.g. the current authentication token) the ",(0,r.jsx)(n.code,{children:"ThreadContext"})," will still be used."]})]}),"\n",(0,r.jsx)(n.h2,{id:"running-asynchronous-operations",children:"Running Asynchronous Operations"}),"\n",(0,r.jsxs)(n.p,{children:["As the name suggests, the ",(0,r.jsx)(n.code,{children:"ThreadContext"})," is bound to a thread, more specifically to the one it was created in.\nIn consequence, other threads, i.e. asynchronous operations, cannot access the stored information if it hasn't been explicitly propagated."]}),"\n",(0,r.jsxs)(n.p,{children:["The SAP Cloud SDK offers a dedicated API to execute asynchronous operations while preserving the ",(0,r.jsx)(n.code,{children:"ThreadContext"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Given any operation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Callable myTask = () -> doStuff();\n// or\nRunnable myTask = () -> doStuff();\n"})}),"\n",(0,r.jsx)(n.p,{children:"The operation can be executed asynchronously via:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Future runningTask = ThreadContextExecutors.submit(myTask);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Operations that are submitted this way will be executed by a single instance of ",(0,r.jsx)(n.code,{children:"ThreadContextExecutorService"}),".\nBy default, this instance is based on a ",(0,r.jsx)(n.code,{children:"CachedThreadPool"}),", which manages the concurrency internally."]}),"\n",(0,r.jsx)(n.p,{children:"For executing multiple asynchronous operations we recommend the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Callable> tasks;\nThreadContextExecutorService executor = ThreadContextExecutors.getExecutor();\nList<Future> runningTasks = executor.invokeAll(tasks);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"spring-integration",children:"Spring Integration"}),"\n",(0,r.jsxs)(n.p,{children:["You can conveniently integrate this functionality to work with Springs ",(0,r.jsx)(n.code,{children:"@Async"})," annotation."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration below will ensure all methods annotated with ",(0,r.jsx)(n.code,{children:"@Async"})," will have the ",(0,r.jsx)(n.code,{children:"ThreadContext"})," available:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@EnableAsync\n@Configuration\npublic class AsynchronousConfiguration implements AsyncConfigurer {\n\n  @Override\n  public Executor getAsyncExecutor() {\n    return ThreadContextExecutors.getExecutor();\n  }\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can read more about the ",(0,r.jsx)(n.code,{children:"@Async"})," functionality ",(0,r.jsx)(n.a,{href:"https://www.baeldung.com/spring-async",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Security Context",type:"tip",children:[(0,r.jsxs)(n.p,{children:["The Spring ",(0,r.jsx)(n.code,{children:"SecurityContext"})," can be propagated to ",(0,r.jsx)(n.code,{children:"@Async"})," calls.\nReplace the above executor with this one:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"new DelegatingSecurityContextExecutor(ThreadContextExecutors.getExecutor());\n"})}),(0,r.jsx)(n.p,{children:"And add this dependency:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.springframework.security</groupId>\n    <artifactId>spring-security-core</artifactId>\n</dependency>\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"passing-on-other-threadlocals",children:"Passing on Other ThreadLocals"}),"\n",(0,r.jsxs)(n.p,{children:["Other libraries and frameworks may also rely on ",(0,r.jsx)(n.code,{children:"ThreadLocal"})," variables to hold contextual data.\nFor example, the CAP ",(0,r.jsx)(n.code,{children:"RequestContext"})," is also bound to the current Thread."]}),"\n",(0,r.jsxs)(n.p,{children:["To not lose this state when creating a new Thread they can be passed on by implementing a ",(0,r.jsx)(n.code,{children:"ThreadContextDecorator"}),".\nA typical implementation for this purpose should look like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Override\npublic <T> Callable<T> decorateCallable( @Nonnull final Callable<T> callable ) {\n  Object valueToPass = YourThreadLocal.get();\n\n  return () -> {\n    Object initial = YourThreadLocal.get();\n    YourThreadLocal.set(valueToPass);\n    try {\n      return callable.call();\n    }\n    finally {\n      YourThreadLocal.set(initial);\n    }\n  };\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Such a custom ",(0,r.jsx)(n.code,{children:"ThreadContextDecorator"})," can be registered via ",(0,r.jsx)(n.code,{children:"DefaultThreadContextDecoratorChain.registerDefaultDecorator"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The SAP Cloud SDK already comes with a default decorator that passes on the ",(0,r.jsx)(n.code,{children:"SecurityContext"})," of ",(0,r.jsx)(n.code,{children:"com.sap.cloud.security:java-api"}),".\nIf the ",(0,r.jsx)(n.a,{href:"/cloud-sdk/docs/java/guides/cap-sdk-integration",children:"CAP integration"})," is used, also the ",(0,r.jsx)(n.code,{children:"RequestContext"})," is passed on (requires CDS version ",(0,r.jsx)(n.code,{children:"2.4.0"})," or higher)."]})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-the-executor",children:"Configuring the Executor"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ThreadContextExecutors"})," class leverages a single ",(0,r.jsx)(n.code,{children:"ThreadContextExecutorService"})," instance that can be configured."]}),"\n",(0,r.jsxs)(n.p,{children:["You can create a custom ",(0,r.jsx)(n.code,{children:"ThreadContextExecutorService"}),", for example to use a different thread pool, via:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"ThreadContextExecutorService executor =\n  DefaultThreadContextExecutorService.of(Executors.newFixedThreadPool(3));\n\n// use it directly:\nexecutor.submit(myTask);\n\n// or set it to be used by the static ThreadContextExecutors API:\nThreadContextExecutors.setExecutor(executor);\nThreadContextExecutors.submit(myTask);\n"})}),"\n",(0,r.jsx)(n.p,{children:"The above API is also compatible with Java virtual threads (JDK21)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"ThreadContextExecutorService executor =\n  DefaultThreadContextExecutorService.of(Executors.newVirtualThreadPerTaskExecutor());\n"})}),"\n",(0,r.jsx)(n.h3,{id:"modifying-the-threadcontext",children:"Modifying the ThreadContext"}),"\n",(0,r.jsx)(n.admonition,{title:"Caution",type:"danger",children:(0,r.jsxs)(n.p,{children:["Modifying the ",(0,r.jsx)(n.code,{children:"ThreadContext"})," as depicted below is currently supported only when using the default ",(0,r.jsx)(n.code,{children:"Facade"})," (e.g. ",(0,r.jsx)(n.code,{children:"DefaultTenantFacade"}),") implementations.\nThis is an issue especially when using the CAP integration dependency ",(0,r.jsx)(n.code,{children:"cds-integration-cloud-sdk"}),".\nTo still manipulate the request context, please refer to ",(0,r.jsx)(n.a,{href:"https://cap.cloud.sap/docs/java/request-contexts#defining-requestcontext",children:"the CAP documentation"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"You may want to run an asynchronous operation in a completely new or custom context.\nBy default, the executor will transfer any existing context to the new thread."}),"\n",(0,r.jsx)(n.p,{children:"To run something in a completely new, empty context, use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"ThreadContextExecutors.submit(myTask, new DefaultThreadContext());\n"})}),"\n",(0,r.jsx)(n.p,{children:"By contrast, to pass on the current context, but modifying the tenant (and only the tenant), use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Tenant myTenant = new DefaultTenant("foo");\nCallable myTaskWithTenant = () -> TenantAccessor.executeWithTenant(myTenant, myTask);\n\nThreadContextExecutors.submit(myTaskWithTenant);\n'})}),"\n",(0,r.jsx)(n.p,{children:"To avoid multiple wrappings, in particular when changing multiple values, you can also build a custom executor:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Tenant myTenant = new DefaultTenant("foo");\nPrincipal myPrincipal = new DefaultPrincipal("bar");\n\nThreadContextExecutor customExecutor = ThreadContextExecutor.fromNewContext()\n            .withListeners(\n                new TenantThreadContextListener(myTenant),\n                new PrincipalThreadContextListener(myPrincipal)\n            );\n\nThreadContextExecutors.submit(myTask, customExecutor);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"how-can-the-thread-context-be-used",children:"How Can the Thread Context Be Used?"}),"\n",(0,r.jsx)(n.h3,{id:"accessing-information",children:"Accessing Information"}),"\n",(0,r.jsxs)(n.p,{children:["The Thread context can be accessed via the static ",(0,r.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/thread/ThreadContextAccessor.html",children:(0,r.jsx)(n.code,{children:"ThreadContextAccessor"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For the frequently needed ",(0,r.jsx)(n.em,{children:"HTTP Headers"}),", ",(0,r.jsx)(n.em,{children:"Tenant"}),", ",(0,r.jsx)(n.em,{children:"Principal"}),", and ",(0,r.jsx)(n.em,{children:"JWT"})," there are also dedicated accessors:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/requestheader/RequestHeaderAccessor.html",children:(0,r.jsx)(n.code,{children:"RequestHeaderAccessor"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/tenant/TenantAccessor.html",children:(0,r.jsx)(n.code,{children:"TenantAccessor"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/security/principal/PrincipalAccessor.html",children:(0,r.jsx)(n.code,{children:"PrincipalAccessor"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/security/AuthTokenAccessor.html",children:(0,r.jsx)(n.code,{children:"AuthTokenAccessor"})})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"storing-information",children:"Storing Information"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/thread/ThreadContext.html",children:(0,r.jsx)(n.code,{children:"ThreadContext"})})," allows for some manipulation by the application.\nHowever, oftentimes it is more convenient to leverage the ",(0,r.jsx)(n.code,{children:"executeWith...()"})," functionality offered by the dedicated accessors."]}),"\n",(0,r.jsx)(n.p,{children:"Consider a scenario where some part of the code should run on behalf of a specific tenant.\nIn that case you can override the current tenant explicitly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"TenantAccessor.executeWithTenant(customTenant, () -> doStuff());\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"CAP Integration",type:"caution",children:(0,r.jsxs)(n.p,{children:["The above does not apply for accessors like ",(0,r.jsx)(n.code,{children:"TenantAccessor"}),", ",(0,r.jsx)(n.code,{children:"PrincipalAccessor"}),", ",(0,r.jsx)(n.code,{children:"RequestHeaderAccessor"})," when using the CAP framework (with the ",(0,r.jsx)(n.code,{children:"cds-integration-cloud-sdk"})," dependency).\nWhen using CAP the Tenant, Principal, and Headers are derived from the ",(0,r.jsx)(n.code,{children:"RequestContext"}),".\nPlease refer to ",(0,r.jsx)(n.a,{href:"https://cap.cloud.sap/docs/java/request-contexts#defining-requestcontext",children:"this section"})," on how to override existing values in the CAP context."]})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["Be aware, that the ",(0,r.jsx)(n.code,{children:"executeWith"})," methods shown above only replaces the given property, but does not update properties derived from it."]}),(0,r.jsxs)(n.p,{children:["Example: You have a special ",(0,r.jsx)(n.code,{children:"AuthToken"}),", that you propagate with ",(0,r.jsx)(n.code,{children:"AuthTokenAccessor.executeWithAuthToken"}),".\nInside the given code block only the ",(0,r.jsx)(n.code,{children:"AuthToken"})," will be replaced, while e.g. the ",(0,r.jsx)(n.code,{children:"Tenant"})," is the same as in the original context."]}),(0,r.jsxs)(n.p,{children:["If you want to start a fresh context based on a given ",(0,r.jsx)(n.code,{children:"AuthToken"}),", for example accessing information of the provider tenant while in a subscriber context, have a look at this code:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nTenant retrieveProviderTenant()\n{\n    // retrieves an access token from the provider context\n    AuthToken providerXsuaaAccessToken = new ScpCfAuthTokenFacade().tryGetXsuaaServiceToken().get();\n    ThreadContextExecutor\n        // create a new, empty context\n        .fromNewContext()\n        // add the provider token into the new context\n        .withListeners(new AuthTokenThreadContextListener(providerXsuaaAccessToken))\n        // return the actual provider tenant\n        .execute(TenantAccessor::getCurrentTenant);\n}\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"manipulating-http-headers",children:"Manipulating HTTP Headers"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RequestHeaderAccessor#getHeaderContainer()"})," method provides convenient access to the HTTP headers of the current incoming request.\nIt returns an instance of ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"}),", which is, by API contract, an ",(0,r.jsx)(n.strong,{children:"immutable"})," container that allows ",(0,r.jsx)(n.em,{children:"case insensitive"})," access to HTTP header values.\nAlthough the ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"})," cannot be altered once created, there are scenarios where manipulating HTTP headers is required.\nIn such cases, a new instance of ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"})," can be created in a few different ways."]}),"\n",(0,r.jsx)(n.h4,{id:"create-a-new-requestheadercontainer-from-scratch",children:"Create a new RequestHeaderContainer From Scratch"}),"\n",(0,r.jsxs)(n.p,{children:["A common way to represent HTTP headers is to use ",(0,r.jsx)(n.code,{children:"Map<String, String>"})," for ",(0,r.jsx)(n.code,{children:"1:1"})," relationships between header names and values or even ",(0,r.jsx)(n.code,{children:"Map<String, Collection<String>>"})," for ",(0,r.jsx)(n.code,{children:"1:n"})," relationships.\nTo make the transition from either of those representations to the SAP Cloud SDK's ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"})," as easy as possible, the ",(0,r.jsx)(n.code,{children:"DefaultRequestHeaderContainer"})," offers corresponding factory methods:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fromSingleValueMap(Map<String, String>)"})," and"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"fromMultiValueMap(Map<String, ? extends Iterable<String>>)"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The latter one also enables convenient interoperability with the ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html",children:"Spring Headers"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@RequestMapping( method = RequestMethod.GET )\npublic ResponseEntity<ExampleResponse> getExample( @RequestHeader final HttpHeaders headers)\n{\n  final RequestHeaderContainer container = DefaultRequestHeaderContainer.fromMultiValueMap(headers);\n\n  RequestHeaderAccessor.executeWithHeaderContainer(container, () -> {\n      Tenant tenant = TenantAccessor.getCurrentTenant();\n  });\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Besides these two factory methods, the ",(0,r.jsx)(n.code,{children:"DefaultRequestHeaderContainer"})," also offers the possibility to create an instance of ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer.Builder"})," through the static ",(0,r.jsx)(n.code,{children:"builder()"})," method.\nAn example for how the returned ",(0,r.jsx)(n.code,{children:"Builder"})," can be used is shown in the chapter below."]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, to make customizing the current HTTP headers even easier, the ",(0,r.jsx)(n.code,{children:"RequestHeaderAccessor"})," comes with an overload of the ",(0,r.jsx)(n.code,{children:"executeWithHeaderContainer"})," method that accepts a ",(0,r.jsx)(n.code,{children:"Map<String, String>"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"updating-an-existing-requestheadercontainer",children:"Updating an Existing RequestHeaderContainer"}),"\n",(0,r.jsxs)(n.p,{children:["As pointed out above, the ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"})," is an ",(0,r.jsx)(n.strong,{children:"immutable"})," structure.\nTherefore, updating an already existing instance is impossible."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"However"}),", in cases where you would like to, for example, just add a new custom header to the set of existing headers, the ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"})," offers the ",(0,r.jsx)(n.code,{children:"toBuilder"})," method.\nAs the name suggests, this method can be used to retrieve an instance of ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer.Builder"}),".\nIn contrast to the ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"}),", the ",(0,r.jsx)(n.code,{children:"Builder"})," can be ",(0,r.jsx)(n.strong,{children:"mutated"})," as much as needed.\nAdditionally, the ",(0,r.jsx)(n.code,{children:"toBuilder"})," method will make sure that the returned ",(0,r.jsx)(n.code,{children:"Builder"})," instance is already pre-filled with all HTTP headers that are also present in the instance of ",(0,r.jsx)(n.code,{children:"RequestHeaderContainer"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To make things less theoretical, let's examine an example."}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example: Usage of the Builder"}),(0,r.jsx)(n.p,{children:"Assume your application received an HTTP request that contains the following headers"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer DUMMY_JWT"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Set-Cookie: cookie-1; cookie-2"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Accept-Language: en-US"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"x-app-specific-header: customer-value"})}),"\n"]}),(0,r.jsx)(n.p,{children:"These values can be accessed as follows:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'RequestHeaderContainer headers = RequestHeaderAccessor.getHeaderContainer();\nheaders.getHeaderValues("authorization"); // will return ["Bearer DUMMY_JWT"]\nheaders.getHeaderValues("set-cookie"); // will return ["cookie-1; cookie-2"]\nheaders.getHeaderValues("accept-language"); // will return ["en-US"]\nheaders.getHeaderValues("x-app-specific-header"); // will return ["customer-value"]\n'})}),(0,r.jsx)(n.p,{children:"Note how accessing the values for specific HTTP headers will work independent of the casing of the provided name."}),(0,r.jsxs)(n.p,{children:["Now let's say your use case requires that HTTP cookies shall not be leaked into further application execution.\nAdditionally, you have to make sure that the ",(0,r.jsx)(n.code,{children:"x-app-specific-header"})," contains an additional application provided value.\nLastly, our application should always serve German customers and, therefore, you need to make sure the ",(0,r.jsx)(n.code,{children:"Accept-Language"})," header is always adjusted accordingly."]}),(0,r.jsxs)(n.p,{children:["Using the ",(0,r.jsx)(n.code,{children:"Builder"})," API, fulfilling these requirements is straightforward:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'RequestHeaderContainer updatedHeaders =\n    headers\n        .toBuilder()\n        .withoutHeader("set-cookie")\n        .withHeader("x-app-specific-header", "application-value")\n        .replaceHeader("accept-language", "de-DE")\n        .build();\n'})}),(0,r.jsxs)(n.p,{children:["Once again, the API guarantees that header names are treated ",(0,r.jsx)(n.em,{children:"case insensitively"}),"."]}),(0,r.jsxs)(n.p,{children:["Finally, to make sure the updated headers are also taken into consideration, you have to overwrite the existing headers in our ",(0,r.jsx)(n.code,{children:"ThreadContext"}),".\nThis can be done using the following code:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"RequestHeaderAccessor.executeWithHeaderContainer(updatedHeaders, () -> yourBusinessLogic());\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);