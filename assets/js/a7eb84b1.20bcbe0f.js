"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3845],{44693:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"features/rest/clients/scp-workflow-rest-api","title":"Type-Safe Client for SAP Workflow service","description":"Learn how to access the SAP BTP Workflow REST API with the type-safe client from the SAP Cloud SDK for Java","source":"@site/docs-java_versioned_docs/version-v3/features/rest/clients/scp-workflow-rest-api.mdx","sourceDirName":"features/rest/clients","slug":"/features/rest/clients/scp-workflow-rest-api","permalink":"/cloud-sdk/docs/java/v3/features/rest/clients/scp-workflow-rest-api","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/features/rest/clients/scp-workflow-rest-api.mdx","tags":[],"version":"v3","frontMatter":{"id":"scp-workflow-rest-api","title":"Type-Safe Client for SAP Workflow service","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"SAP Workflow service","description":"Learn how to access the SAP BTP Workflow REST API with the type-safe client from the SAP Cloud SDK for Java","keywords":["sap","cloud","sdk","rest","scp","workflow"]},"sidebar":"docsJavaSidebar","previous":{"title":"Generate a Typed OpenAPI Client","permalink":"/cloud-sdk/docs/java/v3/features/rest/generate-rest-client"},"next":{"title":"SAP Business Rules service","permalink":"/cloud-sdk/docs/java/v3/features/rest/clients/btp-business-rules-rest-api"}}');var t=i(74848),s=i(28453),a=i(11610);const r={id:"scp-workflow-rest-api",title:"Type-Safe Client for SAP Workflow service",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Workflow service",description:"Learn how to access the SAP BTP Workflow REST API with the type-safe client from the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","rest","scp","workflow"]},l=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Example Use Case for This Guide",id:"example-use-case-for-this-guide",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Consume the SAP Workflow REST API in SAP BTP Cloud Foundry environment",id:"consume-the-sap-workflow-rest-api-in-sap-btp-cloud-foundry-environment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Cloud Foundry Configuration",id:"cloud-foundry-configuration",level:3},{value:"Bind App to SAP Business Technology Platform Workflow Service instance",id:"bind-app-to-sap-business-technology-platform-workflow-service-instance",level:4},{value:"Identifying Necessary OAuth Scopes",id:"identifying-necessary-oauth-scopes",level:5},{value:"Create Service Instance Configuration",id:"create-service-instance-configuration",level:5},{value:"Create Service Instance",id:"create-service-instance",level:5},{value:"Bind your App to Service Instance",id:"bind-your-app-to-service-instance",level:5},{value:"Develop Your App",id:"develop-your-app",level:3},{value:"Dependency Assumptions",id:"dependency-assumptions",level:4},{value:"Add SAP Workflow Service Dependency To Your Project",id:"add-sap-workflow-service-dependency-to-your-project",level:4},{value:"Invoke the Java Client Library",id:"invoke-the-java-client-library",level:3},{value:"Create Destination",id:"create-destination",level:4},{value:"Invoke the SAP BTP Workflow API",id:"invoke-the-sap-btp-workflow-api",level:4},{value:"Capabilities and Limitations",id:"capabilities-and-limitations",level:2},{value:"Capabilities and Benefits",id:"capabilities-and-benefits",level:3},{value:"Known Limitations",id:"known-limitations",level:3},{value:"Additional Information",id:"additional-information",level:2},{value:"Creating HTTP Destinations Manually",id:"creating-http-destinations-manually",level:3},{value:"Take Note of API endpoint and OAuth Credentials",id:"take-note-of-api-endpoint-and-oauth-credentials",level:3},{value:"Create HTTP Destination",id:"create-http-destination",level:3},{value:"Create Destination Programmatically",id:"create-destination-programmatically",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{}),"\n",(0,t.jsx)(n.admonition,{title:"Generally Available",type:"tip",children:(0,t.jsxs)(n.p,{children:["This library is released for ",(0,t.jsx)(n.strong,{children:"productive usage"})," as of November 19, 2020."]})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://help.sap.com/viewer/product/WORKFLOW_SERVICE/Cloud/en-US",children:"SAP Workflow service"})," is available on the Cloud Foundry environment ",(0,t.jsx)(n.a,{href:"https://blogs.sap.com/2019/04/03/workflow-and-business-rules-now-available-in-cloud-foundry-environment-of-sap-cloud-platform/",children:"since April 2019"}),".\nIt helps you build, run, and manage workflows to model processes that span from simple approval steps to complex business scenarios with several involved parties."]}),"\n",(0,t.jsxs)(n.p,{children:["Imagine a business scenario involving multiple parties, complex validation logic, and parallel execution flows.\n",(0,t.jsx)(n.strong,{children:"SCP Workflow service"})," solves exactly this problem.\nTo benefit from features offered by the REST API of the SAP BTP Workflow service you can leverage the type-safe client library provided by the ",(0,t.jsx)(n.strong,{children:"SAP Cloud SDK"})," and discover it via your IDE or ",(0,t.jsx)(n.a,{href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/df943e71122448caaf3c49f5ffd80627.html",children:"manually integrate it into your application"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://blogs.sap.com/2018/01/09/sap-cloud-platform-workflow-developer-center/",children:"this blog post"})," for an overview of all resources about the SAP BTP Workflow Service."]}),"\n",(0,t.jsx)(n.h2,{id:"example-use-case-for-this-guide",children:"Example Use Case for This Guide"}),"\n",(0,t.jsx)(n.h3,{id:"problem",children:"Problem"}),"\n",(0,t.jsx)(n.p,{children:"We need to model a business workflow involving multiple parties, complex validation logic, and parallel flows execution together with other business logic in your app hosted on the SAP Business Technology Platform."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.p,{children:"Use SAP Workflow service and its REST API.\nYou can do workflow modeling using a convenient visual editor and call the SAP BTP Workflow REST API via type-safe client library module provided by the SAP Cloud SDK for Java.\nAdditionally, you'll get other benefits from the SAP Cloud SDK like destinations and authentication handling, complete type-safety, multi-tenancy, easy resilience, and caching configuration."}),"\n",(0,t.jsx)(n.h2,{id:"consume-the-sap-workflow-rest-api-in-sap-btp-cloud-foundry-environment",children:"Consume the SAP Workflow REST API in SAP BTP Cloud Foundry environment"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Add the latest version of the ",(0,t.jsx)(n.a,{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom",children:"SAP Cloud SDK"})," to your Java application dependencies or ",(0,t.jsx)(n.a,{href:"../../../getting-started",children:"generate a new one from archetypes that we provide"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After we have an SAP Cloud SDK-based Java app, we can invoke the SAP BTP Workflow REST API in our business logic.\nMore specifically, we are interested in retrieving a list of all workflow definitions that exist in the connected SAP BTP Workflow service instance which corresponds to the API endpoint ",(0,t.jsx)(n.code,{children:"/v1/workflow-definitions"}),".\nYou can find it under the section ",(0,t.jsx)(n.code,{children:"Workflow Definitions"})," on the left-hand side of your CF cockpit."]}),"\n",(0,t.jsx)(n.h3,{id:"cloud-foundry-configuration",children:"Cloud Foundry Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Let's look in detail at all necessary steps of Cloud Foundry configuration to run this scenario."}),"\n",(0,t.jsx)(n.h4,{id:"bind-app-to-sap-business-technology-platform-workflow-service-instance",children:"Bind App to SAP Business Technology Platform Workflow Service instance"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the documentation on ",(0,t.jsx)(n.a,{href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/e8d88dd056f14c75af59e68d6b20345f.html",children:"help.sap.com"})," for the full picture.\nWe'll outline the essentials with the assumption that you understand or have the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Which Cloud Foundry subaccount and space you want to use"}),"\n",(0,t.jsx)(n.li,{children:"You have access to the SAP BTP Workflow Service feature"}),"\n",(0,t.jsx)(n.li,{children:"You possess all necessary authorizations on Cloud Foundry"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../../../guides/cf-cli",children:"You have installed the Cloud Foundry Command Line Interface (CLI) on your machine"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"identifying-necessary-oauth-scopes",children:"Identifying Necessary OAuth Scopes"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The SAP BTP Workflow REST API is protected and requires authenticating with an OAuth 2.0 access token.\nEach particular API endpoint requires the client to provide an access token valid for the respective endpoint.\nThe token must be issued for the respective OAuth scope that corresponds to the desired API endpoint."})}),"\n",(0,t.jsxs)(n.p,{children:["Let's figure out which OAuth scope is relevant for our application.\nFor that, we have to check ",(0,t.jsx)(n.a,{href:"https://api.sap.com/api/SAP_CP_Workflow_CF/resource",children:"SCP Workflow API documentation"})," to find out that the endpoint ",(0,t.jsx)(n.code,{children:"/v1/workflow-definitions"})," is assigned to the scope ",(0,t.jsx)(n.code,{children:"WORKFLOW_DEFINITION_GET"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"create-service-instance-configuration",children:"Create Service Instance Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Open a text editor and create a JSON file with the following content:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "authorities": ["WORKFLOW_DEFINITION_GET"]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Remember where you've saved the file, you'll need it later."}),"\n",(0,t.jsx)(n.h5,{id:"create-service-instance",children:"Create Service Instance"}),"\n",(0,t.jsxs)(n.p,{children:["Open the command line and authenticate at your Cloud Foundry organization by invoking ",(0,t.jsx)(n.code,{children:"cf login"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Consider specifying the respective ",(0,t.jsx)(n.strong,{children:"subaccount"}),", ",(0,t.jsx)(n.strong,{children:"organization"}),", and ",(0,t.jsx)(n.strong,{children:"space"})," with ",(0,t.jsx)(n.code,{children:"cf target"})," if necessary."]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"cd"})," to navigate to the directory that contains the ",(0,t.jsx)(n.code,{children:"JSON"})," configuration file we created before and run the following to create the service instance:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cf create-service workflow standard my-workflow -c <path-to-json-file>\n"})}),"\n",(0,t.jsxs)(n.p,{children:['This command creates an instance of the SAP BTP Workflow Service in the CF space that your CLI points to.\nMore specifically, it uses the service plan "standard" and takes the ',(0,t.jsx)(n.code,{children:"JSON"})," configuration into account.\nNote that we named the service instance ",(0,t.jsx)(n.code,{children:"my-workflow"}),".\nIf you have chosen a different name, please, remember the name as you'll need it for your deployment descriptor ",(0,t.jsx)(n.code,{children:"manifest.yml"})," later on."]}),"\n",(0,t.jsxs)(n.p,{children:["Once the service instance creation is finished, you can see the service instance in your CF space under ",(0,t.jsx)(n.code,{children:"Services"})," and ",(0,t.jsx)(n.code,{children:"Service Instances"})," in the left-hand side menu."]}),"\n",(0,t.jsx)(n.h5,{id:"bind-your-app-to-service-instance",children:"Bind your App to Service Instance"}),"\n",(0,t.jsxs)(n.p,{children:["Open the file ",(0,t.jsx)(n.code,{children:"manifest.yml"})," in your project and mention your service instance under ",(0,t.jsx)(n.code,{children:"services"})," as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"applications:\n  - name: awesome-app\n    memory: 1024M\n    timeout: 600\n    random-route: false\n    path: application/target/awesome-app-application.war\n    buildpacks:\n      - sap_java_buildpack\n    env:\n      TARGET_RUNTIME: tomee7\n      SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n      JBP_CONFIG_SAPJVM_MEMORY_SIZES: metaspace:128m..\n    services:\n      - my-destination\n      - my-workflow\n    routes:\n      - route: <omitted-on-purpose>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This ensures that the ",(0,t.jsx)(n.code,{children:"VCAP_SERVICES"})," environment variable of the CF application gets enhanced with an additional entry containing the connection details of the newly bound workflow service.\nNow, redeploy your app with ",(0,t.jsx)(n.code,{children:"cf push"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"develop-your-app",children:"Develop Your App"}),"\n",(0,t.jsx)(n.h4,{id:"dependency-assumptions",children:"Dependency Assumptions"}),"\n",(0,t.jsxs)(n.p,{children:["We assume that you have a Java project using the SAP Cloud SDK.\nIf not, we recommend going ahead and ",(0,t.jsx)(n.a,{href:"https://sap.github.io/cloud-sdk/docs/java/getting-started",children:"creating one from one of the Maven archetypes"}),".\nYou should also have ",(0,t.jsx)(n.a,{href:"https://maven.apache.org/download.cgi",children:"Apache Maven"})," installed and be able to successfully run ",(0,t.jsx)(n.code,{children:"mvn clean install"})," from the root of your project."]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure that you have the SAP Cloud SDK Bill-of-Material (BOM) in your ",(0,t.jsx)(n.code,{children:"dependencyManagement"})," section of your ",(0,t.jsx)(n.code,{children:"pom.xml"})," structure like on the example below."]}),"\n",(0,t.jsx)(n.admonition,{title:"Always use the latest version of SAP Cloud SDK",type:"caution",children:(0,t.jsxs)(n.p,{children:["Current version is: ",(0,t.jsx)(a.A,{})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.sap.cloud.sdk</groupId>\n      <artifactId>sdk-bom</artifactId>\n      \x3c!-- WF API is supported in ver 3.19.1 of the SDK and above. Please, always use the latest version --\x3e\n      <version>3.XX.X</version>\n      <type>pom</type>\n      <scope>import</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"add-sap-workflow-service-dependency-to-your-project",children:"Add SAP Workflow Service Dependency To Your Project"}),"\n",(0,t.jsx)(n.p,{children:"You can refer to the Java client library for the SAP BTP Workflow service with the following Maven dependency:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"<dependency>\n    <groupId>com.sap.cloud.sdk.services</groupId>\n    <artifactId>scp-workflow-cf</artifactId>\n</dependency>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After adding the dependency to your ",(0,t.jsx)(n.code,{children:"pom.xml"})," file, run ",(0,t.jsx)(n.code,{children:"mvn clean install"})," to let ",(0,t.jsx)(n.code,{children:"Maven"})," install it."]}),"\n",(0,t.jsx)(n.h3,{id:"invoke-the-java-client-library",children:"Invoke the Java Client Library"}),"\n",(0,t.jsx)(n.h4,{id:"create-destination",children:"Create Destination"}),"\n",(0,t.jsxs)(n.p,{children:["Let's create a Java representation of this destination.\nYou can use ",(0,t.jsx)(n.code,{children:"ScpCfServiceDestinationLoader.getDestinationForService"})," to create a destination by reading properties from the ",(0,t.jsx)(n.code,{children:"VCAP_SERVICES"})," environment variable entry for the workflow service."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'final HttpDestination destination =\n                ScpCfServiceDestinationLoader.getDestinationForService(\n                        ScpCfServiceDestinationLoader.CfServices.WORKFLOW,\n                        "my-workflow");\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ScpCfServiceDestinationLoader.getDestinationForService"})," API currently only works out of the box for a handful of services.\nFor other services, the alternative would be to create a Destination manually in CF using values in the ",(0,t.jsx)(n.code,{children:"VCAP_SERVICES"})," and then accessing the destination using the ",(0,t.jsx)(n.code,{children:"DestinationAccessor"}),".\nFor details refer to ",(0,t.jsx)(n.a,{href:"scp-workflow-rest-api#additional-information",children:"Additional information"})," section."]})}),"\n",(0,t.jsx)(n.h4,{id:"invoke-the-sap-btp-workflow-api",children:"Invoke the SAP BTP Workflow API"}),"\n",(0,t.jsx)(n.p,{children:"Now we can make the first call to SAP BTP Workflow API by invoking the method to get the list of all existing workflow definitions.\nFor that, we pass the HTTP destination as an argument to the constructor of the API class."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"final List<WorkflowDefinition> workflowDefinitions =\n        new WorkflowDefinitionsApi(httpDestination).queryDefinitions();\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is how we call the SAP BTP Workflow REST API in a type-safe manner and benefit from type-safe access to the resulting response objects.\nFor instance, we can read particular details about each workflow definition.\nWe'll log them for demonstration purposes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"workflowDefinitions.forEach(workflowDefinition -> {\n    log.info(workflowDefinition.getName());\n    log.info(workflowDefinition.getVersion());\n    log.info(workflowDefinition.getCreatedAt().toString());\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Another benefit is that the SAP BTP Workflow API library allows us to inspect all jobs related to a particular workflow definition together with many other properties.\nYou can check the SAP BTP Workflow API's model definition on the ",(0,t.jsx)(n.a,{href:"https://api.sap.com/package/SAPCPWorkflowAPIs?section=Artifacts",children:"SAP Business Accelerator Hub"})," or use your IDE to discover available properties via its auto-complete function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"final WorkflowDefinition workflowDefinition = workflowDefinitions.get(0);\nworkflowDefinition.getJobs().forEach(job -> {\n    log.info(job.getId());\n    log.info(job.getPurpose().toString());\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"capabilities-and-limitations",children:"Capabilities and Limitations"}),"\n",(0,t.jsx)(n.h3,{id:"capabilities-and-benefits",children:"Capabilities and Benefits"}),"\n",(0,t.jsx)(n.p,{children:"The Java client library for SAP BTP Workflow enables the developer to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Invoke the REST API in a type-safe and convenient manner"}),"\n",(0,t.jsx)(n.li,{children:"Provides Java abstractions for all REST API endpoints along with the respective model classes"}),"\n",(0,t.jsxs)(n.li,{children:["Relieves the developer from all the ",(0,t.jsx)(n.code,{children:"HTTP-related"})," development work like interpreting ",(0,t.jsx)(n.code,{children:"status codes"}),", ",(0,t.jsx)(n.code,{children:"JSON de-/serialization"}),", etc"]}),"\n",(0,t.jsx)(n.li,{children:"It lets the developer focus on the business logic instead of coding low-level API calls"}),"\n",(0,t.jsx)(n.li,{children:"We keep the library up to date with the latest Workflow API specification which simplifies the maintainability of your app's code"}),"\n",(0,t.jsx)(n.li,{children:"We integrate the SAP BTP Workflow library with SAP Cloud SDK capabilities, such as tenant-aware destination retrieval and many more"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["We support SAP Workflow service API only on the SAP BTP Cloud Foundry environment.\nThe SAP Business Technology Platform Neo environment is ",(0,t.jsx)(n.strong,{children:"Not supported!"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Please note the steps outlined in the below section are only required if you chose to skip using the convenience API ",(0,t.jsx)(n.code,{children:"ScpCfServiceDestinationLoader.getDestinationForService"})," introduced ",(0,t.jsx)(n.a,{href:"scp-workflow-rest-api#create-destination",children:"here"})," and instead would like to use ",(0,t.jsx)(n.code,{children:"DestinationAccessor"})," for e.g. while trying to use generated clients of other services."]})}),"\n",(0,t.jsx)(n.h3,{id:"creating-http-destinations-manually",children:"Creating HTTP Destinations Manually"}),"\n",(0,t.jsxs)(n.p,{children:["To create HTTP destinations manually in CF from the values read from ",(0,t.jsx)(n.code,{children:"VCAP_SERVICES"})," of the CF application, please follow the below steps.\nThe steps below can be continued in this example from the ",(0,t.jsx)(n.a,{href:"scp-workflow-rest-api#bind-your-app-to-service-instance",children:"Bind your App to Service Instance"})," section."]}),"\n",(0,t.jsx)(n.h3,{id:"take-note-of-api-endpoint-and-oauth-credentials",children:"Take Note of API endpoint and OAuth Credentials"}),"\n",(0,t.jsxs)(n.p,{children:["Once the app is bound to the SAP Workflow service (here in our example) and app deployment has finished, go to your CF space and navigate to ",(0,t.jsx)(n.code,{children:"Services\\Instances and Subscriptions"}),".\nYou should see the service instance you created along with the information that is bound to your application."]}),"\n",(0,t.jsxs)(n.p,{children:["Click on the service instance name, for instance ",(0,t.jsx)(n.code,{children:"my-workflow"}),", in the upcoming screen you should see the headline ",(0,t.jsx)(n.code,{children:"Service Instance: my-workflow - Referencing Apps"}),".\nMake sure that the entry that belongs to your app is selected in the table below, given that multiple apps are bound to the same service instance."]}),"\n",(0,t.jsxs)(n.p,{children:["Consider the ",(0,t.jsx)(n.code,{children:"JSON"})," content below the table.\nFor your convenience, we recommend copying that ",(0,t.jsx)(n.code,{children:"JSON"})," to a text editor.\nHere is a quick example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "endpoints": {\n    "workflow_odata_url": "foo",\n    "workflow_rest_url": "bar"\n  },\n  "html5-apps-repo": {\n    "app_host_id": "foo"\n  },\n  "uaa": {\n    "uaadomain": "bar",\n    "tenantmode": "dedicated",\n    "sburl": "bar",\n    "clientid": "foo",\n    "verificationkey": "bar",\n    "apiurl": "foo",\n    "xsappname": "bar",\n    "identityzone": "foo",\n    "identityzoneid": "bar",\n    "clientsecret": "foo",\n    "tenantid": "bar",\n    "url": "foo"\n  },\n  "sap.cloud.service": "com.sap.bpm.workflow",\n  "saasregistryappname": "workflow",\n  "content_endpoint": "foo"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Next look at the ",(0,t.jsx)(n.code,{children:"JSON"})," content and collect the values for the following ",(0,t.jsx)(n.code,{children:"JSON"})," keys:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"workflow_rest_url"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"url"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"clientid"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"clientsecret"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You'll need these values in the next step."}),"\n",(0,t.jsx)(n.h3,{id:"create-http-destination",children:"Create HTTP Destination"}),"\n",(0,t.jsxs)(n.p,{children:["Go to your CF subaccount, navigate to ",(0,t.jsx)(n.code,{children:"Connectivity\\Destinations"})," in the left-hand side menu, and create a new HTTP destination with the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Workflow-Api"}),"\n",(0,t.jsx)(n.li,{children:"Type: HTTP"}),"\n",(0,t.jsxs)(n.li,{children:["URL: The value of ",(0,t.jsx)(n.code,{children:"workflow_rest_url"})]}),"\n",(0,t.jsx)(n.li,{children:"Proxy Type: Internet"}),"\n",(0,t.jsx)(n.li,{children:"Authentication: OAuth2ClientCredentials"}),"\n",(0,t.jsxs)(n.li,{children:["Client ID: The value of ",(0,t.jsx)(n.code,{children:"clientid"})]}),"\n",(0,t.jsxs)(n.li,{children:["Client Secret: The value of ",(0,t.jsx)(n.code,{children:"clientsecret"})]}),"\n",(0,t.jsxs)(n.li,{children:["Token Service URL: The value of ",(0,t.jsx)(n.code,{children:"url"})," appended by ",(0,t.jsx)(n.code,{children:"/oauth/token?grant_type=client_credentials"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Click Save.\nRestart your app by navigating to ",(0,t.jsx)(n.code,{children:"Spaces\\<you-space-name>\\Applications"}),".\nChose your app from the list by clicking on the link with its name and find the restart button on the page that loads."]}),"\n",(0,t.jsx)(n.h3,{id:"create-destination-programmatically",children:"Create Destination Programmatically"}),"\n",(0,t.jsx)(n.p,{children:"The invocation of the workflow client remains the same, the only difference in code is while trying to fetch the destination.\nThe name of the HTTP destination that we configured in the SAP BTP cockpit is Workflow-API.\nLet's create a Java representation of this destination."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'final String destinationName = "Workflow-Api";\nfinal HttpDestination httpDestination = DestinationAccessor.getDestination(destinationName).asHttp();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["That's it, the invocation to the java client library would remain the ",(0,t.jsx)(n.a,{href:"scp-workflow-rest-api#invoke-the-scp-workflow-api",children:"same"})," and no more changes are required."]}),"\n",(0,t.jsx)(n.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,t.jsx)(n.p,{children:"This video tutorial by the developer advocate team of SAP Business Technology Platform will help you get up to speed with SAP Cloud SDK for Java and Workflow service API in 60 minutes."}),"\n",(0,t.jsx)("div",{class:"sdk-video-container",children:(0,t.jsx)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/ug2UcXK2lH4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11610:(e,n,i)=>{i.d(n,{A:()=>t});i(96540);var o=i(74848);const t=function(e){let{align:n}=e;return(0,o.jsx)("span",{className:n?"col text--right":"",children:(0,o.jsx)("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom",children:(0,o.jsx)("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})})})}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var o=i(96540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);