"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5304],{87004:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"guides/resilience","title":"How to Make Applications more Resilient?","description":"This article describes how you can add a layer of resilience to applications","source":"@site/docs-js_versioned_docs/version-v1/guides/how-to-add-resilience.mdx","sourceDirName":"guides","slug":"/guides/resilience","permalink":"/cloud-sdk/docs/js/v1/guides/resilience","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/guides/how-to-add-resilience.mdx","tags":[],"version":"v1","frontMatter":{"id":"resilience","title":"How to Make Applications more Resilient?","sidebar_label":"How to Add Resilience","description":"This article describes how you can add a layer of resilience to applications","keywords":["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},"sidebar":"docsJsSidebar","previous":{"title":"Using the SAP Application Router","permalink":"/cloud-sdk/docs/js/v1/guides/approuter"},"next":{"title":"How to retrieve JWTs","permalink":"/cloud-sdk/docs/js/v1/guides/retrieve-jwt"}}');var r=t(74848),n=t(28453);const o={id:"resilience",title:"How to Make Applications more Resilient?",sidebar_label:"How to Add Resilience",description:"This article describes how you can add a layer of resilience to applications",keywords:["sap","cloud","sdk","http","resilience","JavaScript","TypeScript"]},a="Introduction",c={},l=[{value:"Cache",id:"cache",level:2},{value:"Circuit-Breaker",id:"circuit-breaker",level:2},{value:"Retries",id:"retries",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsxs)(i.p,{children:["In this article, we will talk about resilience and how to add resilience when using the SAP Cloud SDK.\nIn contrast to Java, for JavaScript, there is no standard framework to handle resilience.\nHence, we have not included resilience features within the SAP Cloud SDK, but leave it up to you which framework you want to use.\nWe have prepared examples on the resilience topic in our ",(0,r.jsx)(i.a,{href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/resilience-examples",children:"samples repository"})," which illustrate the concepts and pick some widely used ",(0,r.jsx)(i.code,{children:"npm"})," packages."]}),"\n",(0,r.jsxs)(i.p,{children:["There is one exception to this approach.\nWe introduced a circuit-breaker for all calls going to SAP BTP services like XSUAA and the destination service.\nThe circuit breaker is enabled by default to protect the services and you can disable it via the ",(0,r.jsx)(i.code,{children:"enableCircuitBreaker"})," option on the ",(0,r.jsx)(i.code,{children:"execute()"})," methods."]}),"\n",(0,r.jsx)(i.h2,{id:"cache",children:"Cache"}),"\n",(0,r.jsx)(i.p,{children:"This is usually not a resilience topic, but could help to improve the stability of your application.\nThe idea behind a cache is to reduce the load caused by expensive requests.\nExpensive means, for example, that you need to do a lot of computation (RAM, CPU, disk I/O) or many calls to external systems.\nInstead of doing the work every time, the method response is stored in the cache after the first execution and taken from there afterwards.\nAssume a load issue where requests time out, because too many requests are sent to the system.\nIn such a case, a cache could reduce the number of calls and therefore improve resilience."}),"\n",(0,r.jsx)(i.p,{children:"The introduction of a cache is most effective in the following cases:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The execution of a method consumes a lot of resources"}),"\n",(0,r.jsx)(i.li,{children:"The method is a pure function, meaning the function arguments contain all the information and no hidden state affects the result of the function"}),"\n",(0,r.jsx)(i.li,{children:"The function is invoked multiple times for the same arguments or context"}),"\n",(0,r.jsx)(i.li,{children:"The system behind the cache has known downtime or limited availability mitigated by the cache"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Typically, a cache implementation has an interface like this:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",children:"interface Cache<T> {\n  get: (key: string) => T;\n  set: (key: string, value: T, expires: TimeStamp) => void;\n  clear: () => void;\n}\n"})}),"\n",(0,r.jsxs)(i.p,{children:["It provides methods to ",(0,r.jsx)(i.code,{children:"get"}),", ",(0,r.jsx)(i.code,{children:"set"}),", and ",(0,r.jsx)(i.code,{children:"clear"})," the cached entries.\nThe ",(0,r.jsx)(i.code,{children:"key"})," represents the arguments passed to your cached method.\nIt is used to set and get a value from the cache."]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"If your cached method relies on authentication/authorization like an HTTP call, be sure your cache preserves user isolation.\nThis means that the cache key must include the user making the request.\nAlso, ensure that it is not possible to manipulate the cache key generation to retrieve results related to other users.\nThe same rules apply if you create a multi-tenant application with respect to tenant isolation."})}),"\n",(0,r.jsxs)(i.p,{children:["Note that the ",(0,r.jsx)(i.a,{href:"https://nodeshift.dev/opossum/",children:"opossum"})," circuit-breaker also provides a cache option."]}),"\n",(0,r.jsx)(i.h2,{id:"circuit-breaker",children:"Circuit-Breaker"}),"\n",(0,r.jsx)(i.p,{children:"In electronics, a circuit breaker is a safety device that prevents your wires from melting in case of too much power consumption.\nIn software development, the circuit-breaker does not protect actual wires from melting but resources from overloading while helping them recover.\nYou should include a circuit-breaker if:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The resource is essential in your infrastructure and should be protected."}),"\n",(0,r.jsx)(i.li,{children:"The resource reacts poorly to heavy load."}),"\n",(0,r.jsx)(i.li,{children:"Your application creates a high number of requests."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Circuit-breakers are typically used for HTTP requests and behave in the following way:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The circuit-breaker monitors the HTTP requests and tracks failing and successful requests."}),"\n",(0,r.jsx)(i.li,{children:"The circuit-breaker calculates an average percentage of failing requests."}),"\n",(0,r.jsx)(i.li,{children:"If this average is above some threshold, the breaker opens."}),"\n",(0,r.jsx)(i.li,{children:"From this moment on, requests are immediately blocked and not executed.\nThis prevents the system from getting too many requests if it is in an unhealthy state."}),"\n",(0,r.jsx)(i.li,{children:"After a reset time the breaker closes and requests can reach the target system again."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Many circuit breakers do not go into a completely closed state but go into a half-open state.\nIn this state, every failing request will directly cause the breaker to open again.\nThe reason for this is, that you do not overburden systems in the recovery phase."}),"\n",(0,r.jsx)(i.p,{children:"Typical parameters to configure a circuit-breaker are:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:'"failure threshold": Failure rate above which the circuit-breaker will open.'}),"\n",(0,r.jsx)(i.li,{children:'"reset timeout": The time after which the circuit-breaker will close.'}),"\n",(0,r.jsx)(i.li,{children:"Fallback: Some alternative actions you want to perform when the breaker is open."}),"\n",(0,r.jsx)(i.li,{children:"Options to calculate the failure rate."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["You can find an example using the ",(0,r.jsx)(i.a,{href:"https://nodeshift.dev/opossum/",children:"opossum"})," circuit-breaker ",(0,r.jsx)(i.a,{href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/resilience-examples",children:"here"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"retries",children:"Retries"}),"\n",(0,r.jsxs)(i.p,{children:["Another approach to add resilience to your application is to retry failed requests.\nFor retries, there are libraries available like ",(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/async-retry",children:"async-retry"})," which make every asynchronous function perform some retries if they do not resolve.\nHowever, this pattern needs to be used with caution, because it is often mitigating a problem that should be solved properly.\nAlso, if something fails consistently, it does not help to press the same button multiple times.\nYou should consider some rules for implementing retries:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The error should be the exception, not the default."}),"\n",(0,r.jsx)(i.li,{children:"The error should happen randomly so a second call has a high likelihood of giving something."}),"\n",(0,r.jsx)(i.li,{children:"The source of the error is out of your domain to fix."}),"\n",(0,r.jsx)(i.li,{children:"Consistent errors should not trigger a retry. For example, an HTTP request failing with 401 should not trigger a retry because the user is simply unauthorized."}),"\n",(0,r.jsx)(i.li,{children:"The number of retries should be limited to a low digit number. There should be some appropriate waiting time between retries."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Typical options for a retry library are:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Retries: How many attempts should be made."}),"\n",(0,r.jsx)(i.li,{children:'"minimum timeout": Initial waiting time for the first retry.'}),"\n",(0,r.jsx)(i.li,{children:'"maximum timeout": What is the maximal time for all retries to execute.'}),"\n",(0,r.jsx)(i.li,{children:"Distribution: How the retries are distributed over time.\nAn exponential waiting time is a good option.\nAlso, adding some random time deviation is distributing the load of parallel retries."}),"\n",(0,r.jsx)(i.li,{children:"Bail: An option to stop the retry for certain failure cases is useful in many cases."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["You can find an example using the ",(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/async-retry",children:"async-retry"})," library ",(0,r.jsx)(i.a,{href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/resilience-examples",children:"here"}),"."]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"If you use retries together with a circuit-breaker, choose the options for the two accordingly.\nThe waiting time between requests of the retry should be large enough not to trigger the circuit-breaker to open."})})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var s=t(96540);const r={},n=s.createContext(r);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);