"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9305],{87063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"features/odata/generic-untyped-odata-client","title":"Generic Advanced OData Client","description":"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It\'s also helpful in a situation when flexibility is above safety and convenience.","source":"@site/docs-java/features/odata/generic-client.mdx","sourceDirName":"features/odata","slug":"/features/odata/generic-untyped-odata-client","permalink":"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/odata/generic-client.mdx","tags":[],"version":"current","frontMatter":{"id":"generic-untyped-odata-client","title":"Generic Advanced OData Client","sidebar_label":"Generic OData Client","description":"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It\'s also helpful in a situation when flexibility is above safety and convenience.","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJavaSidebar","previous":{"title":"OData v4 Client API","permalink":"/cloud-sdk/docs/java/features/odata/v4-vdm-client"},"next":{"title":"Overview","permalink":"/cloud-sdk/docs/java/features/rest/overview"}}');var i=n(74848),s=n(28453);const r={id:"generic-untyped-odata-client",title:"Generic Advanced OData Client",sidebar_label:"Generic OData Client",description:"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It's also helpful in a situation when flexibility is above safety and convenience.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},o=void 0,l={},d=[{value:"Overview",id:"overview",level:2},{value:"Basic API Usage",id:"basic-api-usage",level:2},{value:"Creating Requests",id:"creating-requests",level:3},{value:"Evaluating Responses",id:"evaluating-responses",level:3},{value:"Building Queries",id:"building-queries",level:3},{value:"Cookbook - Generic OData Client",id:"cookbook---generic-odata-client",level:2},{value:"Handling OData Delta Token",id:"handling-odata-delta-token",level:3},{value:"Adding Trailing Slash to the Service Path",id:"adding-trailing-slash-to-the-service-path",level:3},{value:"Fetching Raw Stream Data From /$value Endpoint",id:"fetching-raw-stream-data-from-value-endpoint",level:3},{value:"OData v2 Batch Read Request",id:"odata-v2-batch-read-request",level:3},{value:"Call OData v4 Bound Functions and Actions",id:"call-odata-v4-bound-functions-and-actions",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{title:"Advanced! Use on your own discretion.",type:"danger",children:[(0,i.jsx)(t.p,{children:"The API for generic OData client is not intended to be used by application developers unless required otherwise."}),(0,i.jsx)(t.p,{children:"Please, make sure you know what you're doing and check if the type-safe OData client API can solve your problem."})]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:['In addition to the type-safe API we also provide a "low-level", untyped OData client.\nIt is more generic and can be used in ',(0,i.jsx)(t.strong,{children:"advanced"})," use-cases when the capabilities of the typed OData client are not enough to achieve your development goals.\nYou can leverage the untyped OData client for:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Workarounds and quick fixes"}),"\n",(0,i.jsx)(t.li,{children:"Trying out OData features that are not yet implemented in OData type-safe client."}),"\n",(0,i.jsx)(t.li,{children:"When flexibility is above safety and convenience"}),"\n",(0,i.jsx)(t.li,{children:"Debugging and testing"}),"\n",(0,i.jsx)(t.li,{children:"Building specific OData protocol based API yourself"}),"\n",(0,i.jsx)(t.li,{children:"Integrating OData capabilities and awareness into your project"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The generic client is capable of both OData V2 and V4 protocols.\nThe client is made aware about which version to use in requests via a dedicated parameter."})}),"\n",(0,i.jsx)(t.h2,{id:"basic-api-usage",children:"Basic API Usage"}),"\n",(0,i.jsx)(t.h3,{id:"creating-requests",children:"Creating Requests"}),"\n",(0,i.jsx)(t.p,{children:"Requests are represented by dedicated request classes for each operation.\nFor example to read a collection of entities use:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'StructuredQuery query = StructuredQuery.onEntity("A_Entity", ODataProtocol.V4);\nnew ODataRequestRead("/path/to/service", query);\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Queries can be created conveniently as described in ",(0,i.jsx)(t.a,{href:"#building-queries",children:"Building Queries below"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Other Operations:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:"ODataRequestRead\nODataRequestReadByKey\nODataRequestCreate\nODataRequestUpdate\nODataRequestDelete\nODataRequestFunction\nODataRequestAction\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"What used to be function imports in OData V2 have been split into functions and actions in the OData V4 standard.\nThe above classes adopt the OData V4 notion.\nTo perform V2 function imports leverage the function class in case the operation should use HTTP GET.\nIf instead the operation should use POST, use the action class."})}),"\n",(0,i.jsx)(t.h3,{id:"evaluating-responses",children:"Evaluating Responses"}),"\n",(0,i.jsxs)(t.p,{children:["Requests can be executed by supplying an HTTP client to the ",(0,i.jsx)(t.code,{children:"execute"})," method.\nYou can obtain a client from any given destination as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"final HttpClient client = HttpClientAccessor.getHttpClient(destination);\n// perform the HTTP operation:\nfinal ODataRequestResultGeneric result = request.execute(client);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Within ",(0,i.jsx)(t.code,{children:"execute"})," the SAP Cloud SDK will perform a health check on the response.\nIn case of a status code greater or equal to 400 an exception will be thrown."]}),"\n",(0,i.jsxs)(t.p,{children:["The result class allows for parsing the result into a specific Java type, getting metadata or even the raw HTTP response.\nFor example, you can parse the response body into a ",(0,i.jsx)(t.code,{children:"SalesOrder"})," or a list of sales orders as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"SalesOrder order = result.as(SalesOrder.class);\nCollection<SalesOrder> order = result.asList(SalesOrder.class);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"building-queries",children:"Building Queries"}),"\n",(0,i.jsxs)(t.p,{children:["Queries can be build with dedicated, fluent builder classes.\nUse the ",(0,i.jsx)(t.code,{children:"StructuredQuery"})," class to create a query:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'StructuredQuery query = StructuredQuery.onEntity("Movies", ODataProtocol.V4);\n// method names correspond to the OData query parameters $select, $filter, etc.\nquery.select("Field A", "Field B");\n// obtain the encoded URL string representation:\nString encodedQuery = query.getEncodedQueryString();\n'})}),"\n",(0,i.jsx)(t.p,{children:"For filters there is a dedicated API to build filter expressions:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'FieldUntyped fieldA = FieldReference.of("Field A")\nFieldUntyped fieldB = FieldReference.of("Field B")\n\nValueBoolean expression = fieldA.equalTo("foo").and(fieldB.greaterThan(42));\n\n// add the expression as filter to a query:\nquery.filter(expression);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"cookbook---generic-odata-client",children:"Cookbook - Generic OData Client"}),"\n",(0,i.jsx)(t.p,{children:"We collect popular use-cases and scenarios leveraging the Generic OData Client in this cookbook section."}),"\n",(0,i.jsx)(t.h3,{id:"handling-odata-delta-token",children:"Handling OData Delta Token"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_RequestingChanges",children:"OData v4 specification"})," provides capabilities to return only a delta between your last and ongoing request.\nFor example, if your previous request loaded information from the service which continues to be updated with new records.\nThen with your next request you can ask to provide you only with the difference between what you've already loaded and current records on the service side.\nFor that, you can leverage ",(0,i.jsx)(t.code,{children:"$deltatokens"})," query parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["We do not provide convenience API for delta tokens in our type-safe client.\nBut you can leverage generic OData client to fetch the delta token from the ",(0,i.jsx)(t.code,{children:"response"})," as in the code snippet below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'ODataRequestResultGeneric response = request.execute(httpClient);\n// obtain delta token and add it to the next request, if present\nresponse.getDeltaLink()\n        .flatMap(ODataUriFactory::extractDeltaToken)\n        .peek(token -> deltaRequest.addQueryParameter("$deltatoken", token));\n'})}),"\n",(0,i.jsx)(t.h3,{id:"adding-trailing-slash-to-the-service-path",children:"Adding Trailing Slash to the Service Path"}),"\n",(0,i.jsxs)(t.p,{children:["By default, the SAP Cloud SDK strips all trailing slashes from a resource path.\nIt's a standard behavior and works for almost every productively available services.\nSometimes, however, services might complain or even fail if a path doesn't end with a slash ",(0,i.jsx)(t.code,{children:"/"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"https://host/service-path/resource-path/?$filter..."})," - works"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"https://host/service-path/resource-path?$filter.."})," - doesn't work (default URI composition strategy in the SAP Cloud SDK)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To work around this situation you can use the generic OData client:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\nODataRequestRead request = new ODataRequestRead("/service-path/resource-path/", "", "$filter=...", ODataProtocol.V2)\n// produces an URI like this: /service-path/resource-path/?$filter=...\n\nHttpClient client = HttpClientAccessor.getHttpClient(destination);\nODataRequestResultGeneric result = request.execute(client);\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"fetching-raw-stream-data-from-value-endpoint",children:"Fetching Raw Stream Data From /$value Endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["You can get ",(0,i.jsx)(t.code,{children:"fileStream"})," and ",(0,i.jsx)(t.code,{children:"responseHeaders"})," in a single request by using the low-level Generic OData Client.\nLet's take this dummy OData request as an example: ",(0,i.jsx)(t.code,{children:"/FileService/FileCollection(id='abc')/$value?foo=bar"})]}),"\n",(0,i.jsx)(t.p,{children:"The corresponding code to fetch the raw file's content will look like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\nHttpDestination destination;\n\nODataEntityKey entityKey = new ODataEntityKey(ODataProtocol.V2).addKeyProperty("id", "abc")\nODataResourcePath resource = ODataResourcePath.of("FileCollection", entityKey).addSegment("$value");\nODataRequestReadByKey request = new ODataRequestReadByKey("FileService", resource, "?foo=bar", ODataProtocol.V2);\n\nODataRequestResultGeneric result = request.execute(HttpClientAccessor.getHttpClient(destination));\nHttpResponse httpResponse = result.getHttpResponse();\nHeader[] responseHeaders = httpResponse.getAllHeaders();\ntry( InputStream fileStream = httpResponse.getEntity().getContent(); ) {\n  // do thing\n}\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"Alternatively you can run the HTTP request yourself:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"\nHttpDestination destination;\n\nHttpClient httpClient = HttpClientAccessor.getHttpClient(destination);\nHttpResponse httpResponse = httpClient.execute(new HttpGet(\"/FileService/FileCollection(id='abc')/$value\"));\nHeader[] responseHeaders = httpResponse.getAllHeaders();\ntry( InputStream fileStream = httpResponse.getEntity().getContent(); ) {\n  // do thing\n}\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"odata-v2-batch-read-request",children:"OData v2 Batch Read Request"}),"\n",(0,i.jsx)(t.p,{children:"Let's see an example of how to use the generic OData client for batch requests for OData v2."}),"\n",(0,i.jsx)(t.p,{children:"In the code snippet below we:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Prepare an instance of ",(0,i.jsx)(t.code,{children:"HttpClient"})," that will be used to execute the HTTP request."]}),"\n",(0,i.jsx)(t.li,{children:"Initialize a generic OData Batch request with OData service path and protocol version."}),"\n",(0,i.jsx)(t.li,{children:"Build a read request for an OData entity collection and add it to the Batch request object."}),"\n",(0,i.jsx)(t.li,{children:"Execute the Batch request."}),"\n",(0,i.jsx)(t.li,{children:"Access the Batch response and fetch the list of fields from OData entities, that matched the applied read request."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'HttpDestination destination;\nString servicePath = "/sap/opu/odata/sap/<SERVICE_PATH>";\nString entityName = "EntityCollectionName";\nHttpClient httpClient = HttpClientAccessor.getHttpClient(destination);\n\n// instantiate custom OData V2 batch request\nODataRequestBatch requestBatch = new ODataRequestBatch(servicePath, ODataProtocol.V2);\n\n// instantiate custom OData V2 read request\nStructuredQuery structuredQuery = StructuredQuery.onEntity(entityName, ODataProtocol.V2);\nstructuredQuery.select("Field1", "Field2", "Field3");\nstructuredQuery.filter(FieldReference.of("Field4").equalTo("FooBar"));\nString encodedQuery = structuredQuery.getEncodedQueryString();\nODataRequestRead requestRead = new ODataRequestRead(servicePath, entityName, encodedQuery, ODataProtocol.V2);\n\n// add read request to batch\nrequestBatch.addRead(requestRead);\n\n// execute the batch request\nODataRequestResultMultipartGeneric batchResult = requestBatch.execute(httpClient);\n\n// extract information from batch response, by referring to the individual OData request reference\nODataRequestResultGeneric queryResult = batchResult.getResult(requestRead);\nList<Map<String, Object>> listOfEntityFields = queryResult.asListOfMaps();\n'})}),"\n",(0,i.jsx)(t.p,{children:"This example is a great demonstration of how you can work around certain limitations of a type-safe client, tackle advanced OData features, or even take care of misbehaving servers or OData standard deviations."}),"\n",(0,i.jsx)(t.h3,{id:"call-odata-v4-bound-functions-and-actions",children:"Call OData v4 Bound Functions and Actions"}),"\n",(0,i.jsx)(t.p,{children:"Bound function and actions were freshly introduced in OData v4 specification.\nBelow is a generic client example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// this code will build the following URL:\n// "/service/Entity(key1=\'foo%2Fbar\',key2=123)/Model.Function(param1=\'foo%2Fbar\',param2=123)"\n\nODataEntityKey key = new ODataEntityKey(ODataProtocol.V4)\n    .addKeyProperty("key1", "foo/bar")\n    .addKeyProperty("key2", 123);\n\nODataFunctionParameters  params = new ODataFunctionParameters(ODataProtocol.V4)\n    .addKeyProperty("param1", "foo/bar")\n    .addKeyProperty("param2", 123);\n\nODataResourcePath functionPath =\n    new ODataResourcePath()\n        .addSegment("Entity", key)\n        .addSegment("Model.Function", params);\n\nODataRequestFunction request =\n    new ODataRequestFunction("/service", functionPath, null, ODataProtocol.V4);\n'})}),"\n",(0,i.jsx)(t.p,{children:"This is essentially what happens under the hood when you are using the generated type-safe client code."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);