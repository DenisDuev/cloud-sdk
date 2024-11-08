"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3240],{46795:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"features/resilience/caching","title":"Caching Capabilities","description":"How to use SAP Cloud SDK for Java to introduce caching into your application.","source":"@site/docs-java_versioned_docs/version-v3/features/resilience/caching.mdx","sourceDirName":"features/resilience","slug":"/features/resilience/caching","permalink":"/cloud-sdk/docs/java/v3/features/resilience/caching","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/features/resilience/caching.mdx","tags":[],"version":"v3","frontMatter":{"id":"caching","title":"Caching Capabilities","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Caching","description":"How to use SAP Cloud SDK for Java to introduce caching into your application.","keywords":["sap","cloud","sdk","caching","cache","JCache","CacheConfiguration"]},"sidebar":"docsJavaSidebar","previous":{"title":"Resilience","permalink":"/cloud-sdk/docs/java/v3/features/resilience/"},"next":{"title":"Overview","permalink":"/cloud-sdk/docs/java/v3/environments/overview"}}');var t=i(74848),c=i(28453);const r={id:"caching",title:"Caching Capabilities",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Caching",description:"How to use SAP Cloud SDK for Java to introduce caching into your application.",keywords:["sap","cloud","sdk","caching","cache","JCache","CacheConfiguration"]},o=void 0,s={},l=[{value:"Using the Resilience API for Caching",id:"using-the-resilience-api-for-caching",level:2},{value:"Adding a JCache Provider",id:"adding-a-jcache-provider",level:3},{value:"Creating a Cache Configuration",id:"creating-a-cache-configuration",level:3},{value:"Applying a Cache Configuration",id:"applying-a-cache-configuration",level:3},{value:"Configuring the Caching Strategy",id:"configuring-the-caching-strategy",level:2},{value:"Multi Tenancy",id:"multi-tenancy",level:3},{value:"Removing Cache Entries Manually",id:"removing-cache-entries-manually",level:3},{value:"Precise Control Over Cache Entries via <code>CacheFilter</code>",id:"precise-control-over-cache-entries-via-cachefilter",level:4},{value:"Advanced Cache Manipulation",id:"advanced-cache-manipulation",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Caching may improve your application's performance and responsiveness to your consumers.\nThe SAP Cloud SDK for Java provides abstractions for caching that make it easy to integrate caching into an application with almost no configuration overhead.\nAlso, it integrates with other SAP Cloud SDK features and most importantly is tenant aware out of the box.\nThe following article describes how to enable caching with the SAP Cloud SDK for Java in your application."}),"\n",(0,t.jsx)(n.h2,{id:"using-the-resilience-api-for-caching",children:"Using the Resilience API for Caching"}),"\n",(0,t.jsx)(n.h3,{id:"adding-a-jcache-provider",children:"Adding a JCache Provider"}),"\n",(0,t.jsxs)(n.p,{children:["The SAP Cloud SDK relies on the ",(0,t.jsx)(n.code,{children:"JCache"})," SPI to create and manage cache instances.\n",(0,t.jsx)(n.code,{children:"JCache"})," is a ",(0,t.jsx)(n.a,{href:"https://www.baeldung.com/java-spi",children:"Service Provider Interface"})," which requires an implementation of this interface to be present at runtime.\nBe sure that such an implementation is present on your ",(0,t.jsx)(n.code,{children:"classpath"}),".\nWe recommend ",(0,t.jsx)(n.a,{href:"https://github.com/ben-manes/caffeine",children:"Caffeine"})," which you can use by adding the below dependency to your application ",(0,t.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<dependency>\n    <groupId>com.github.ben-manes.caffeine</groupId>\n    <artifactId>jcache</artifactId>\n    <version>2.8.5</version>\n    <scope>runtime</scope>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Caching only works when a service provider or implementation for JCache is available at runtime.\nOtherwise, you will face a runtime exception."})}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-cache-configuration",children:"Creating a Cache Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["As described in our ",(0,t.jsx)(n.a,{href:"https://sap.github.io/cloud-sdk/docs/java/features/resilience/resilience",children:"Resilience section"})," the SAP Cloud SDK allows you to run any code in the context of one or more resilience patterns.\nCaching is also a resilience pattern, so you can leverage the same API to build and apply a ",(0,t.jsx)(n.code,{children:"CacheConfiguration"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"CacheConfiguration cacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withoutParameters();\n"})}),"\n",(0,t.jsx)(n.p,{children:"This builds a simple cache that will store values for one day and does not require any additional parameters.\nThe builder pattern requires at least a duration and if the cache requires parameters.\nThe configuration options are explained further below."}),"\n",(0,t.jsxs)(n.p,{children:["This configuration must then be added to a ",(0,t.jsx)(n.code,{children:"ResilienceConfiguration"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ResilienceConfiguration resilienceConfig = ResilienceConfiguration\n        .empty(resilienceId)\n        .cacheConfiguration(cacheConfig);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The above creates an otherwise empty ",(0,t.jsx)(n.code,{children:"ResilienceConfiguration"})," and thus only enables caching.\nOf course, you may use other resilience patterns as well."]}),"\n",(0,t.jsx)(n.h3,{id:"applying-a-cache-configuration",children:"Applying a Cache Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Since the cache configuration is part of a resilience configuration it is applied in the same way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The above code will invoke ",(0,t.jsx)(n.code,{children:"operation()"})," once since the result of the first invocation will be cached.\nOnly if the first call fails the second one would still happen."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that a specific cache instance is not yet created when the configuration is created.\nInstead, it is only created when an operation is decorated or executed by the ",(0,t.jsx)(n.code,{children:"ResilienceDecorator"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The cache functionality is tenant aware by default.\nThat means that by default cache entries created under a specific tenant will not be shared with other tenants.\nSee the section on ",(0,t.jsx)(n.a,{href:"#multi-tenancy",children:"multi tenancy"})," below."]})}),"\n",(0,t.jsx)(n.h2,{id:"configuring-the-caching-strategy",children:"Configuring the Caching Strategy"}),"\n",(0,t.jsx)(n.p,{children:"The cache configuration offers 3 options:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Cache Duration (Required)"}),"\n",(0,t.jsx)(n.li,{children:"Expiration Strategy (Optional)"}),"\n",(0,t.jsx)(n.li,{children:"Parameters (Optional)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Each cache configuration must at least specify a duration after which a cache expires.\nHow this timeout is applied can be configured through the ",(0,t.jsx)(n.a,{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/CacheExpirationStrategy.html",children:"Expiration Strategy"}),".\nBy default, a cache entry is cleared once the configured duration has passed since the entry was created."]}),"\n",(0,t.jsx)(n.p,{children:"Finally, parameters can be listed that further refine the caching functionality.\nParameter values will be attached to the cache key.\nWhen the cache is accessed, only entries with matching parameter values will be returned."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// Set a parameter value\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value1");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// Cache is empty, so this will be a cache miss\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n// Cache is hit, cached value will be returned\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n\n// Set a different parameter value\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value2");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// Cache is not hit because the existing cache entry has a different parameter value\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value1");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// The cached value from the very first invocation is returned as the parameter is "value1" again\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can use parameters to separate cache entries as you see fit.\nPlease note that there is no need to do this to achieve multi-tenancy.\nThe SAP Cloud SDK is tenant aware by default as described below."}),"\n",(0,t.jsx)(n.h3,{id:"multi-tenancy",children:"Multi Tenancy"}),"\n",(0,t.jsx)(n.p,{children:"By default, this caching functionality is tenant aware.\nIf a tenant is available the SAP Cloud SDK will create cache entries only for that specific tenant.\nOther tenants will not see the value cached for that specific tenant."}),"\n",(0,t.jsxs)(n.p,{children:["For this example assume that ",(0,t.jsx)(n.code,{children:"config"})," is a ",(0,t.jsx)(n.code,{children:"ResilienceConfiguration"})," that has a ",(0,t.jsx)(n.code,{children:"CacheConfiguration"})," in place:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"cachedOperation = ResilienceDecorator.decorateSupplier(() -> operation(), config)\n\n// cachedOperation() will be evaluated\nTenantAccessor.executeWithTenant(tenantA, () -> cachedOperation());\n// cached value will be taken\nTenantAccessor.executeWithTenant(tenantA, () -> cachedOperation());\n\n// cachedOperation() will be evaluated because the cached value is only accessible for tenantA\nTenantAccessor.executeWithTenant(tenantB, () -> cachedOperation());\n// cached value for tenantB will be taken\nTenantAccessor.executeWithTenant(tenantB, () -> cachedOperation());\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can configure this isolation via the isolation mode of the resilience configuration.\nSet the isolation mode to ",(0,t.jsx)(n.code,{children:"NO_ISOLATION"})," to disable tenant aware caching.\nSee the section on isolation levels under ",(0,t.jsx)(n.a,{href:"https://sap.github.io/cloud-sdk/docs/java/features/resilience/resilience#multi-tenancy",children:"Resilience"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"removing-cache-entries-manually",children:"Removing Cache Entries Manually"}),"\n",(0,t.jsx)(n.p,{children:"The SAP Cloud SDK offers different possibilities to manually remove cached entries.\nFirst, you may remove individual cache entries by:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// respect tenant/principal and parameter isolation\nResilienceDecorator.clearCache(resilienceConfig);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This operation is implicitly tenant-aware/principal-aware and also considers parameters defined in the ",(0,t.jsx)(n.code,{children:"CacheConfiguration"})," when choosing which entries to remove."]}),"\n",(0,t.jsx)(n.p,{children:"Furthermore, should you need to remove all entries from a cache, you may use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// disregards tenant/principal and parameter isolation\nResilienceDecorator.clearAllCacheEntries(resilienceConfig);\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,t.jsxs)(n.p,{children:["This operation is intended to delete ",(0,t.jsx)(n.strong,{children:"all"})," cache entries associated with the given ",(0,t.jsx)(n.code,{children:"CacheConfiguration"}),".\nIt intentionally ignores the isolation mode and, in consequence, affects all tenants and principals."]})}),"\n",(0,t.jsxs)(n.h4,{id:"precise-control-over-cache-entries-via-cachefilter",children:["Precise Control Over Cache Entries via ",(0,t.jsx)(n.code,{children:"CacheFilter"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you need fine-grained control over which cache entries to clear, you may create your custom ",(0,t.jsx)(n.code,{children:"CacheFilter"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// CacheFilter which matches all cache entries belonging to tenant "tenant1"\nCacheFilter tenantFilter = ( configuration, cacheKey, cacheEntry ) -> cacheKey.getTenantId().isDefined() && cacheKey.getTenantId().get().equals("tenant1");\n\n// clears all cache entries which match the provided CacheFilter, in this example all cache entries for "tenant1"\nResilienceDecorator.clearCache(resilienceConfig, tenantFilter);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can even combine multiple ",(0,t.jsx)(n.code,{children:"CacheFilter"})," instances for the cache clearing:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// CacheFilter which matches all cache entries belonging to tenant "tenant1"\nCacheFilter tenantFilter = ( configuration, cacheKey, cacheEntry ) -> cacheKey.getTenantId().isDefined() && cacheKey.getTenantId().get().equals("tenant1");\n\n// CacheFilter which matches all cache entries belonging to principal "principal1"\nCacheFilter principalFilter = ( configuration, cacheKey, cacheEntry ) -> cacheKey.getPrincipalId().isDefined() && cacheKey.getPrincipalId().get().equals("principal1");\n\n// Combining two filters with CacheFilter.and(...) to a conjunction\nCacheFilter combinedAndFilter = CacheFilter.and(tenantFilter, principalFilter);\n\n// Combining two filters with CacheFilter.or(...) to a disjunction\nCacheFilter combinedOrFilter = CacheFilter.or(tenantFilter, principalFilter);\n\n// clears all cache entries which match the provided CacheFilter instance\nResilienceDecorator.clearCache(resilienceConfig, combinedAndFilter);\n'})}),"\n",(0,t.jsx)(n.p,{children:"This approach disregards the built-in tenant/principal and parameter isolation and solely considers the provided cache filters."}),"\n",(0,t.jsx)(n.p,{children:"The SAP Cloud SDK provides prepared cache filters you can reuse for matching on tenant, principal or parameters."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"CacheFilter matchesCurrentParameters = CacheFilter.keyMatchesParameters();\n\nCacheFilter matchesCurrentTenant = CacheFilter.keyMatchesTenant();\n\nCacheFilter matchesCurrentPrincipal = CacheFilter.keyMatchesPrincipal();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that these built-in cache filters determine the tenant, the principal and the parameters to match respecting the ",(0,t.jsx)(n.code,{children:"ResilienceConfiguration"})," of the cache."]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, you can create cache filters for a certain tenant, principal or certain parameters as well."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Iterable<Object> myParameters = obtainParameters();\nCacheFilter matchesMyParameters = CacheFilter.keyMatchesParameters(parameters);\n\nTenant myTenant = obtainTenant();\nCacheFilter matchesMytenant = CacheFilter.keyMatchesTenant(myTenant);\n\nPrincipal myPrincipal = obtainPrincipal();\nCacheFilter matchesMyPrincipal = CacheFilter.keyMatchesPrincipal(myPrincipal);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-cache-manipulation",children:"Advanced Cache Manipulation"}),"\n",(0,t.jsxs)(n.p,{children:["To get hold of the created cache instance and to use it for advanced operations like for e.g. registering ",(0,t.jsx)(n.a,{href:"https://www.baeldung.com/jcache#listeners",children:"event listeners"})," you can use JCache API."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"final Cache<SomeCacheKey, SomeResult> cache = Caching.getCachingProvider()\n                                                     .getCacheManager()\n                                                     .getCache(resilienceConfig.identifier()) //Returns the cache created using the resilienceId passed\n                                                     .registerCacheEntryListener(SimpleCacheEntryListener); //Registers the event listener\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"SimpleCacheEntryListener"})," is a class that implements the interfaces of the required events with respect to cache defined in ",(0,t.jsx)(n.a,{href:"https://javadoc.io/doc/javax.cache/cache-api/latest/javax/cache/event/EventType.html",children:(0,t.jsx)(n.code,{children:"EventType"})}),".\nNote that the identifier of the resilience configuration is also the identifier of the cache associated with it."]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(96540);const t={},c=a.createContext(t);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);