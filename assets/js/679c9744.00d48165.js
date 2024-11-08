"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[690],{90434:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"features/resilience/resilience","title":"Resilience Capabilities","description":"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.","source":"@site/docs-java_versioned_docs/version-v4/features/resilience/resilience.mdx","sourceDirName":"features/resilience","slug":"/features/resilience/","permalink":"/cloud-sdk/docs/java/v4/features/resilience/","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v4/features/resilience/resilience.mdx","tags":[],"version":"v4","frontMatter":{"id":"resilience","title":"Resilience Capabilities","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Resilience","description":"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.","keywords":["sap","cloud","sdk","resilience","multi tenancy","cloud native","timeout"]},"sidebar":"docsJavaSidebar","previous":{"title":"Thread Context","permalink":"/cloud-sdk/docs/java/v4/features/multi-tenancy/thread-context"},"next":{"title":"Caching","permalink":"/cloud-sdk/docs/java/v4/features/resilience/caching"}}');var r=n(74848),a=n(28453);const o={id:"resilience",title:"Resilience Capabilities",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Resilience",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",keywords:["sap","cloud","sdk","resilience","multi tenancy","cloud native","timeout"]},l=void 0,s={},c=[{value:"Using the Resilience API",id:"using-the-resilience-api",level:2},{value:"Executing Operations",id:"executing-operations",level:3},{value:"Operation Types",id:"operation-types",level:4},{value:"Execution Variants",id:"execution-variants",level:4},{value:"Failures and Fallbacks",id:"failures-and-fallbacks",level:4},{value:"Building a Resilience Configuration",id:"building-a-resilience-configuration",level:3},{value:"Multi Tenancy",id:"multi-tenancy",level:4},{value:"Resilience Capabilities",id:"resilience-capabilities",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"The SAP Cloud SDK for Java provides abstractions for some frequently used resilience patterns like timeout, retry, rate limiter, or circuit breaker.\nApplying such patterns helps to make an application more resilient against failures it might encounter."}),"\n",(0,r.jsxs)(i.p,{children:["The following article describes which resilience features the SAP Cloud SDK offers and how to apply them.\nIf you are looking for a quick start with resilience also check out our ",(0,r.jsx)(i.a,{href:"https://developers.sap.com/tutorials/s4sdk-resilience.html",children:"dedicated tutorial"})," on the topic!"]}),"\n",(0,r.jsx)(i.h2,{id:"using-the-resilience-api",children:"Using the Resilience API"}),"\n",(0,r.jsx)(i.p,{children:"To make use of the resilience capabilities by the SAP Cloud SDK, make sure to add following dependencies to your project:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>resilience</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.frameworks</groupId>\n    <artifactId>resilience4j</artifactId>\n    <scope>runtime</scope>\n</dependency>\n"})}),"\n",(0,r.jsx)(i.p,{children:"The SAP Cloud SDK allows running any code in the context of one or more resilience patterns.\nThere are two essential building blocks for achieving this:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"ResilienceConfiguration"})," that determines which patterns should be applied."]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"ResilienceDecorator"})," is capable of applying the configuration to an operation."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The fluent ",(0,r.jsx)(i.a,{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html",children:"Resilience Configuration API"})," provides builders that help with assembling different resilience patterns and their associated parameters.\nWhich patterns are available and how to use them is explained in the ",(0,r.jsx)(i.a,{href:"#building-a-resilience-configuration",children:"dedicated section below"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceDecorator.html",children:"Resilience Decorator"})," is capable of applying such a configuration to a given ",(0,r.jsx)(i.code,{children:"Callable"})," or ",(0,r.jsx)(i.code,{children:"Supplier"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"executing-operations",children:"Executing Operations"}),"\n",(0,r.jsx)(i.p,{children:"Consider the following code:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"result = ResilienceDecorator.executeSupplier(() -> operation(), configuration);\n"})}),"\n",(0,r.jsxs)(i.p,{children:["This code executes ",(0,r.jsx)(i.code,{children:"operation()"})," in a resilient manner according to a ",(0,r.jsx)(i.code,{children:"ResilienceConfiguration"}),".\nThe decorator will apply all in ",(0,r.jsx)(i.code,{children:"configuration"})," configured patterns and all logic that is needed to combine these patterns."]}),"\n",(0,r.jsx)(i.p,{children:"Some resilience patterns are applied over multiple executions of the same operation.\nFor example, the circuit breaker will prevent further executions if a significant portion of previous attempts failed."}),"\n",(0,r.jsx)(i.p,{children:"To understand how the SAP Cloud SDK applies this concept consider the following snippet:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'configuration1 = ResilienceConfiguration.of("config-id-1");\nconfiguration2 = ResilienceConfiguration.of("config-id-1");\nconfiguration3 = ResilienceConfiguration.of("config-id-2");\n\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration2);\nResilienceDecorator.executeSupplier(() -> operation(), configuration3);\n'})}),"\n",(0,r.jsxs)(i.p,{children:['Here executions one, two, and three will all share the same "resilience state".\nThis means that they will share the same instance of a circuit breaker or bulkhead.\nThe state is shared via ',(0,r.jsx)(i.a,{href:"#building-a-resilience-configuration",children:"the identifier"})," of the associated configuration."]}),"\n",(0,r.jsx)(i.h4,{id:"operation-types",children:"Operation Types"}),"\n",(0,r.jsx)(i.p,{children:"The decorator operates with two kinds of operations:"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Callable.html",children:(0,r.jsx)(i.p,{children:"Callable"})})}),(0,r.jsx)("td",{children:"May throw checked or unchecked Exceptions"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html",children:(0,r.jsx)(i.p,{children:"Supplier"})})}),(0,r.jsx)("td",{children:"May only throw unchecked Exceptions"})]})]})}),"\n",(0,r.jsxs)(i.p,{children:["Noticeable is the difference in signatures: ",(0,r.jsx)(i.em,{children:"Callable"})," throws a ",(0,r.jsx)(i.em,{children:"checked exception"})," while ",(0,r.jsx)(i.em,{children:"Supplier"})," does not.\nYou can choose whatever fits your use case best."]}),"\n",(0,r.jsx)(i.h4,{id:"execution-variants",children:"Execution Variants"}),"\n",(0,r.jsx)(i.p,{children:"The decorator allows for three different ways of applying a configuration:"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:"Execute"})}),(0,r.jsx)("td",{children:"Immediately runs the operation"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:"Decorate"})}),(0,r.jsx)("td",{children:"Returns a new operation to be run later"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:"Queue"})}),(0,r.jsx)("td",{children:"Immediately runs the operation asynchronously"})]})]})}),"\n",(0,r.jsxs)(i.p,{children:["In case your operation should run asynchronously we highly recommend you leverage the ",(0,r.jsx)(i.code,{children:"queue"})," functionality.\nThe decorator will ensure the ",(0,r.jsx)(i.a,{href:"/cloud-sdk/docs/java/v4/features/multi-tenancy/thread-context",children:"Thread Context"})," with Tenant and Principal information is propagated correctly to new Threads."]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["Note that the Resilience Decorator will try to propagate the current ",(0,r.jsx)(i.a,{href:"/cloud-sdk/docs/java/v4/features/multi-tenancy/thread-context",children:"Thread Context"})," at the ",(0,r.jsx)(i.em,{children:"time the decorator is invoked"}),".\nThis is important when you are decorating a Callable or Supplier and running it later.\nThe Thread Context must be available whenever ",(0,r.jsx)(i.code,{children:"decorateCallable"})," or ",(0,r.jsx)(i.code,{children:"decorateSupplier"})," is evaluated.\nIf the call to ",(0,r.jsx)(i.code,{children:"ResilienceDecorator"})," should take place asynchronously, you should ",(0,r.jsx)(i.a,{href:"/cloud-sdk/docs/java/v4/features/multi-tenancy/thread-context#running-asynchronous-operations",children:"follow these steps"})," to ensure the Thread Context is available."]})}),"\n",(0,r.jsx)(i.h4,{id:"failures-and-fallbacks",children:"Failures and Fallbacks"}),"\n",(0,r.jsx)(i.p,{children:"An operation might fail for two reasons:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"The operation itself encounters a failure and throws an error or exception"}),"\n",(0,r.jsx)(i.li,{children:"A resilience pattern causes the operation to fail (e.g. the circuit breaker prevents further invocations)"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The SAP Cloud SDK wraps all kind of checked and unchecked exceptions into a ",(0,r.jsx)(i.code,{children:"ResilienceRuntimeException"})," and throws them."]}),"\n",(0,r.jsxs)(i.p,{children:["To deal with failures one can either catch the ",(0,r.jsx)(i.code,{children:"ResilienceRuntimeException"})," or provide a fallback function:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'executeCallable(() -> operation(), configuration,\n(throwable) -> {\n    log.debug("Encountered a failure in operation: ", throwable);\n    log.debug("Proceeding with fallback value: {}", fallback);\n    return fallback;\n});\n'})}),"\n",(0,r.jsxs)(i.p,{children:["In the case of ",(0,r.jsx)(i.code,{children:"Callable"}),", this relieves you of the need to catch the exception at the outer level."]}),"\n",(0,r.jsx)(i.h3,{id:"building-a-resilience-configuration",children:"Building a Resilience Configuration"}),"\n",(0,r.jsxs)(i.p,{children:["A new ",(0,r.jsx)(i.code,{children:"ResilienceConfiguration"})," ",(0,r.jsx)(i.em,{children:"with default values"})," is created by providing an identifier for it:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'configuration = ResilienceConfiguration.of("identifier");\n'})}),"\n",(0,r.jsxs)(i.p,{children:["The identifier can be either a string or a class.\nIn the case of the latter, the (full) class name will be used as the identifier.\nThe identifier will be used to apply resilience patterns across ",(0,r.jsx)(i.a,{href:"#executing-operations",children:"multiple invocations to operations"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Check ",(0,r.jsx)(i.a,{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html#of-java.lang.String-",children:"the Javadoc"})," for which patterns and parameters will be applied by default.\nYou can also create a configuration with all patterns disabled:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'configuration = ResilienceConfiguration.empty("identifier");\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Individual resilience patterns are configured via dedicated builder classes like ",(0,r.jsx)(i.code,{children:"TimeLimiterConfiguration"})," and are added to the configuration via dedicated setters, e.g. ",(0,r.jsx)(i.code,{children:"timeLimiterConfiguration()"}),".\nFor details see the list of ",(0,r.jsx)(i.a,{href:"#resilience-capabilities",children:"Resilience Capabilities"})," below."]}),"\n",(0,r.jsx)(i.h4,{id:"multi-tenancy",children:"Multi Tenancy"}),"\n",(0,r.jsx)(i.p,{children:"The SAP Cloud SDK is capable of applying the different resilience patterns in a tenant and principal aware manner.\nConsider for example the Bulkhead pattern which limits the number of parallel executions.\nIf the operation is tenant-specific then you would probably want to avoid one tenant blocking all others."}),"\n",(0,r.jsxs)(i.p,{children:["For this reason, the SAP Cloud SDK ",(0,r.jsx)(i.em,{children:"by default"})," isolates resilience patterns based on tenant and principal, if they are available.\nThis strategy can be configured, e.g. for running ",(0,r.jsx)(i.em,{children:"without any isolation"})," use:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"configuration.isolationMode(ResilienceIsolationMode.NO_ISOLATION);\n"})}),"\n",(0,r.jsx)(i.p,{children:"Other than no isolation there are essentially two modes for tenant and/or principal isolation:"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Required"}),(0,r.jsx)("td",{children:(0,r.jsx)(i.p,{children:"Always isolates on tenant and/or principal level, will throw an\nexception if no tenant/principal is available"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Optional"}),(0,r.jsx)("td",{children:"Only isolates if tenant and/or principal information is available"})]})]})}),"\n",(0,r.jsxs)(i.p,{children:["Details can be found on the API reference of ",(0,r.jsx)(i.a,{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceIsolationMode.html",children:(0,r.jsx)(i.code,{children:"ResilienceIsolationMode"})}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"resilience-capabilities",children:"Resilience Capabilities"}),"\n",(0,r.jsx)(i.p,{children:"The following resilience patterns are available and can be configured in a Resilience Configuration:"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Timeout"}),(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:(0,r.jsx)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.TimeLimiterConfiguration.html",children:(0,r.jsx)(i.p,{children:"TimeLimiterConfiguration"})})})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.p,{children:"Limit how long an operation may run before it should be interrupted"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Rate Limiter"}),(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:"RateLimiterConfiguration"})}),(0,r.jsx)("td",{children:"Limit the number of operations accepted in a window of time"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Retry"}),(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:(0,r.jsx)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.RetryConfiguration.html",children:(0,r.jsx)(i.p,{children:"RetryConfiguration"})})})}),(0,r.jsx)("td",{children:"Retry a failed operation a limited amount of times before failing"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Circuit Breaker"}),(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:(0,r.jsx)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.CircuitBreakerConfiguration.html",children:(0,r.jsx)(i.p,{children:"CircuitBreakerConfiguration"})})})}),(0,r.jsx)("td",{children:"Reject attempts if too many failures occurred in the past"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(i.p,{children:["Bulkhead ",(0,r.jsx)("p",{children:"(also known as Shed Load or Load Shedding)"})]})}),(0,r.jsx)("td",{children:(0,r.jsx)("em",{children:(0,r.jsx)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.BulkheadConfiguration.html",children:(0,r.jsx)(i.p,{children:"BulkheadConfiguration"})})})}),(0,r.jsx)("td",{children:"Limit how many instances of this operation may run in parallel"})]})]})}),"\n",(0,r.jsxs)(i.p,{children:["You can find good explanations on how the individual patterns behave on the ",(0,r.jsx)(i.a,{href:"https://resilience4j.readme.io/docs/",children:"documentation of resilience4j"})," which the SAP Cloud SDK uses under the hood to perform resilient operations."]}),"\n",(0,r.jsx)(i.p,{children:"Be aware that the patterns interact with each other.\nThey are applied in the following order:"}),"\n",(0,r.jsx)(i.p,{children:"Fallback ( Retry ( CircuitBreaker ( RateLimiter ( TimeLimiter ( Bulkhead ( Function ) ) ) ) ) )"}),"\n",(0,r.jsxs)(i.p,{children:["If you read from right to left, it shows you the order in which the aspects will be applied.\nFor example, ",(0,r.jsx)(i.code,{children:"Fallbacks"})," are called last while ",(0,r.jsx)(i.code,{children:"Bulkhead"})," is the first aspect applied.\nHence, exceptions are also propagated from right to left."]}),"\n",(0,r.jsx)(i.p,{children:"Based on the order, the following inferences (not exhaustive) can be made:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Every timeout will trigger a retry, if configured."}),"\n",(0,r.jsx)(i.li,{children:"Only if all retries failed the fallback function will be considered."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["You can get more details in the Resilience4j ",(0,r.jsx)(i.a,{href:"https://resilience4j.readme.io/docs/getting-started-3#aspect-order",children:"official documentation."})]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);