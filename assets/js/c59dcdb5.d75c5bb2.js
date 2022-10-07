"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Develop your App for the Kyma Environment with Java SDK",sidebar_label:"SAP Kyma",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,l={unversionedId:"environments/sap-btp-kyma-environment",id:"version-v3/environments/sap-btp-kyma-environment",title:"Develop your App for the Kyma Environment with Java SDK",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",source:"@site/docs-java_versioned_docs/version-v3/environments/sap-btp-kyma-environment.mdx",sourceDirName:"environments",slug:"/environments/sap-btp-kyma-environment",permalink:"/cloud-sdk/docs/java/v3/environments/sap-btp-kyma-environment",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/environments/sap-btp-kyma-environment.mdx",tags:[],version:"v3",frontMatter:{title:"Develop your App for the Kyma Environment with Java SDK",sidebar_label:"SAP Kyma",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Kubernetes with SAP Gardener",permalink:"/cloud-sdk/docs/java/v3/environments/sap-btp-kubernetes-environment-with-sap-gardener"},next:{title:"Loading Service Bindings",permalink:"/cloud-sdk/docs/java/v3/features/service-bindings/load-service-bindings-from-environment"}},p={},s=[{value:"SAP Cloud SDK Features Supported on Kyma by SAP",id:"sap-cloud-sdk-features-supported-on-kyma-by-sap",level:2},{value:"Getting Started with the SAP Cloud SDK on Kyma",id:"getting-started-with-the-sap-cloud-sdk-on-kyma",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Containerize the Application",id:"containerize-the-application",level:3},{value:"Create a Kyma Deployment",id:"create-a-kyma-deployment",level:3},{value:"Access Your Application",id:"access-your-application",level:3},{value:"Bind SAP BTP Services to the Application",id:"bind-sap-btp-services-to-the-application",level:3},{value:"Bind the Destination Service",id:"bind-the-destination-service",level:4},{value:"Bind the XSUAA Service",id:"bind-the-xsuaa-service",level:4},{value:"Known XSUAA Service Incompatibility",id:"known-xsuaa-service-incompatibility",level:4},{value:"Expose your Application to the Internet",id:"expose-your-application-to-the-internet",level:3}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kyma-project.io/"},"Kyma")," is an application runtime that provides you a flexible and easy way to connect, extend, and customize your applications in the cloud-native world of Kubernetes.\nFind more details in the ",(0,i.kt)("a",{parentName:"p",href:"https://kyma-project.io/docs/kyma/latest/01-overview/"},"official documentation"),"."),(0,i.kt)("admonition",{title:"Document is outdated!",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"While the Kyma runtime is improving over time, recent changes unfortunately rendered parts of this document outdated.\nWe are currently re-evaluating and updating the information provided.\nPlease follow the ",(0,i.kt)("a",{parentName:"p",href:"https://kyma-project.io/docs/kyma/latest/01-overview/"},"official documentation"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Workaround for On-Premise Connectivity"),(0,i.kt)("p",{parentName:"admonition"},"Recent changes of the Kyma runtime environment prevent the SAP Cloud SDK's On-Premise connectivity from working as intended.\nWhile we are working on a permanent solution, please use the following workaround:"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Add following class to your project:",(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class OnPremiseHeaderProvider implements DestinationHeaderProvider {\n\n  @Override\n  @Nonnull\n  public List<Header> getHeaders(\n    @Nonnull final DestinationRequestContext requestContext\n  ) {\n    final Option<ProxyType> proxyType = requestContext\n      .getDestination()\n      .get("ProxyType", ProxyType.class);\n    if (proxyType.getOrElse(ProxyType.INTERNET) != ProxyType.ON_PREMISE) {\n      return Collections.emptyList();\n    }\n\n    final Option<AuthenticationType> authentication = requestContext\n      .getDestination()\n      .get("authentication", AuthenticationType.class);\n    if (\n      authentication.getOrElse(AuthenticationType.NO_AUTHENTICATION) !=\n      AuthenticationType.PRINCIPAL_PROPAGATION\n    ) {\n      return Collections.emptyList();\n    }\n\n    final Try<String> maybeBearerToken = AuthTokenAccessor\n      .tryGetCurrentToken()\n      .map(token -> String.format("Bearer %s", token.getJwt().getToken()));\n\n    if (maybeBearerToken.isEmpty()) {\n      return Collections.emptyList();\n    }\n\n    return Collections.singletonList(\n      new Header("SAP-Connectivity-Authentication", maybeBearerToken.get())\n    );\n  }\n}\n\n')),"  "),(0,i.kt)("li",null,"Create following file in your application resources:",(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"src/main/resources/META-INF/com.sap.cloud.sdk.cloudplatform.connectivity.DestinationHeaderProvider\n")),"  "),(0,i.kt)("li",null,"Fill the file with the fully qualified name of the newly created class. For example, the content should look like this:",(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"name.of.your.package.OnPremiseHeaderProvider\n")),"  ")))),(0,i.kt)("h2",{id:"sap-cloud-sdk-features-supported-on-kyma-by-sap"},"SAP Cloud SDK Features Supported on Kyma by SAP"),(0,i.kt)("p",null,"Find below the list of features we currently support:\nLegend: \u2705 - supported, \u2757- partially supported, \u274c - not supported"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 Consume SAP BTP services like Destination, Connectivity, IAS, XSUAA, and others"),(0,i.kt)("li",{parentName:"ul"},"\u2705 Multitenancy"),(0,i.kt)("li",{parentName:"ul"},"\u2705 Resilience & Caching"),(0,i.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA Cloud"),(0,i.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA On-Premise"),(0,i.kt)("li",{parentName:"ul"},"\u2705 Seamless use of typed clients provided by the SAP Cloud SDK")),(0,i.kt)("h2",{id:"getting-started-with-the-sap-cloud-sdk-on-kyma"},"Getting Started with the SAP Cloud SDK on Kyma"),(0,i.kt)("p",null,"This detailed guide will help get your SAP Cloud SDK Java application up and running in Kyma.\nYou can also use this guide to migrate your existing application to Kyma."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow this guide you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/09dd313bf6644250a14f8f38c3d644c0.html?locale=en-US"},"SAP BTP Kyma environment")," instance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," and a publicly reachable Docker repository"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," Application using the SAP Cloud SDK")),(0,i.kt)("admonition",{title:"Tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When deploying applications to Kyma, you are not limited to Spring Boot applications.\nIn fact, you may deploy any application that can be executed within a Docker container.\nThe examples in this document, however, do use a Spring Boot app.")),(0,i.kt)("p",null,"Check out the details below in case you are uncertain about any of the prerequisites."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Kyma Environment"),(0,i.kt)("p",null,"This guide assumes you already have a Global Account, a subaccount on SAP BTP platform and have ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubernetes CLI")," installed on your local machine.\nIf not, please refer to these guides on getting a ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/d61c2819034b48e68145c45c36acba6e.html?locale=en-US"},"Global Account")," and creating a ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/05280a123d3044ae97457a25b3013918.html?locale=en-US"},"subaccount")),(0,i.kt)("p",null,"In your subaccount in SAP BTP cockpit, create a ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/09dd313bf6644250a14f8f38c3d644c0.html?locale=en-US"},"Kyma Environment instance"),".\nMake sure that you select an appropriate ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/befe01d5d8864e59bf847fa5a5f3d669.html?locale=en-US#azure"},"plan")," and also assign the necessary ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/148ae38b7d6f4e61bbb696bbfb3996b2.html?locale=en-US"},"roles")," to users."),(0,i.kt)("admonition",{title:"Kyma Setup Time",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Creating a Kyma environment instance can take up to 30 minutes.")),(0,i.kt)("p",null,"Once your Kyma environment is created, you can download a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"Kubeconfig file")," directly from the SAP BTP cockpit."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Kubeconfig file download",src:n(97798).Z,width:"1573",height:"822"}))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Docker"),(0,i.kt)("p",null,"This guide assumes you have ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," installed on your local machine."),(0,i.kt)("p",null,"Furthermore, you need a ",(0,i.kt)("strong",{parentName:"p"},"Docker repository")," where you can store images.\nThe repository needs to be publicly accessible in order for the cluster to access and download the Docker image we are going to create."),(0,i.kt)("p",null,"In case you don't have such a repository yet we recommend either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"Docker Hub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://common.repositories.cloud.sap/ui/"},"Artifactory DMZ")," (for SAP internal developers)")),(0,i.kt)("p",null,"Access to images in a repository may be limited to authenticated and/or authorized users, depending on your configuration."),(0,i.kt)("p",null,"Make sure you are logged in to your repository on your local machine by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker login (your-repo) --username=(your-username)\n")),(0,i.kt)("p",null,"And check your configuration which is usually located under ",(0,i.kt)("inlineCode",{parentName:"p"},"(your-home-directory)/.docker/config.json"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In case AuthN/AuthZ is required to download images make sure you have a secret configured in your cluster"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret docker-registry (name-of-the-secret) --docker-username=(username) --docker-password=(API-token) --docker-server=(your-repo)\n")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Application using the SAP Cloud SDK"),(0,i.kt)("p",null,"If you don't have an application already you can comfortably ",(0,i.kt)("a",{parentName:"p",href:"../getting-started"},"create one from our archetypes"),".")),(0,i.kt)("h3",{id:"containerize-the-application"},"Containerize the Application"),(0,i.kt)("p",null,"To run on Kyma the application needs to be shipped in a container.\nFor this guide we will be using Docker."),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the project root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:"{2}","{2}":!0},'FROM openjdk:8-jdk-slim\nARG JAR_FILE=application/target/*.jar\nCOPY ${JAR_FILE} app.jar\nENTRYPOINT ["java","-jar","/app.jar"]\n')),(0,i.kt)("p",null,"If needed, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"JAR_FILE")," to point to your JAR file."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can find more information on how to containerize Spring Boot applications in ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/spring-boot-docker/"},"this guide")," (in particular, check the ",(0,i.kt)("em",{parentName:"p"},"Containerize It")," section).")),(0,i.kt)("p",null,"Compile and push the image by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <your-repo>/<your-image-name> .\ndocker push <your-repo>/<your-image-name>\n\n# alternatively, you may add a tag to your image\ndocker build -t <your-repo>/<your-image-name>:<your-tag> .\ndocker push <your-repo>/<your-image-name>:<your-tag>\n")),(0,i.kt)("admonition",{title:"Tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In case you are facing authorization issues when pushing to your repository refer to the dedicated section under ",(0,i.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"),".")),(0,i.kt)("h3",{id:"create-a-kyma-deployment"},"Create a Kyma Deployment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new YAML file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="deployment.yml" {17,31}',title:'"deployment.yml"',"{17,31}":!0}," apiVersion: apps/v1\n kind: Deployment\n metadata:\n   name: my-app-deployment\n spec:\n   replicas: 1\n   selector:\n     matchLabels:\n       app: my-app\n   template:\n     metadata:\n       labels:\n         app: my-app\n     spec:\n       containers:\n         # Configure the docker image you just pushed to your repository here\n         - image: <name-of-the-image>\n           name: my-app\n           imagePullPolicy: Always\n           resources:\n             requests:\n               memory: '1.5Gi'\n               cpu: '500m'\n             limits:\n               memory: '2Gi'\n               cpu: '1000m'\n           # Volume mounts needed for injecting SAP BTP service credentials\n           volumeMounts:\n       imagePullSecrets:\n         # In case your repository requires a login, reference your secret here\n         - name: <your-secret-for-docker-login>\n       volumes:\n ----\n apiVersion: v1\n kind: Service\n metadata:\n   labels:\n     app: my-app\n   name:  my-app\n spec:\n   type: NodePort\n   ports:\n     - port: 8080\n       targetPort: 8080\n       protocol: TCP\n   selector:\n     app: my-app\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the configuration via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f path/to/deployment/file/deployment.yml"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Monitor the status of the deployment by running: ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get deployment my-app-deployment"),"."))),(0,i.kt)("p",null,"Eventually, you should see an output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployment my-app-deployment\n\nNAME                  READY   UP-TO-DATE   AVAILABLE   AGE\nmy-app-deployment     1/1     1            1           15s\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In case something went wrong use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl describe")," together with ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pod")," to get more information about the status of your application.")),(0,i.kt)("h3",{id:"access-your-application"},"Access Your Application"),(0,i.kt)("p",null,"To access your application without further configuration you need to find the name of the application pod by listing out all available pods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,i.kt)("p",null,"Now use the name of the application pod and forward the application port to your local machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward [pod-name] [local-port]:[application-port]\n")),(0,i.kt)("p",null,"In case you started with an SAP Cloud SDK Archetype, you can test the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl localhost:[local-port]/hello\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("p",null,"If your application is running on port ",(0,i.kt)("inlineCode",{parentName:"p"},"8080")," (default configuration) in it's pod, you can use the following command to gain access to your app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward my-app-pod-XYZ :8080\n")),(0,i.kt)("p",null,"Please note that we skipped the ",(0,i.kt)("inlineCode",{parentName:"p"},"[local-port]")," parameter in the command above.\nThis will let ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," choose a random available port on your local machine every time you run the command."),(0,i.kt)("p",null,"If everything worked as expected, you should see an output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Forwarding from 127.0.0.1:50309 -> 8080\nForwarding from [::1]:50309 -> 8080\n")),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," chose the local port ",(0,i.kt)("inlineCode",{parentName:"p"},"50309"),".\nHence, you should be able to successfully run the following ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:50309/hello\n"))),(0,i.kt)("admonition",{title:"SSH Access to your Pods",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If port-forwarding is not enough for you, you can also get SSH access to your application pods:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec --stdin --tty [pod-name] -- /bin/sh\n"))),(0,i.kt)("h3",{id:"bind-sap-btp-services-to-the-application"},"Bind SAP BTP Services to the Application"),(0,i.kt)("p",null,"The SAP Business Technology Platform offers various services that can be used by applications.\nTo access services from a Kyma environment, instances have to be created and bound to the application."),(0,i.kt)("p",null,"For this guide we'll assume we want to use two services:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Destination Service"),(0,i.kt)("li",{parentName:"ol"},"XSUAA Service")),(0,i.kt)("h4",{id:"bind-the-destination-service"},"Bind the Destination Service"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open your Kyma dashboard by clicking the link in your SAP BTP cockpit:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Kyma Console URL",src:n(22216).Z,width:"1573",height:"822"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the Kyma dashboard, select your Kyma namespace (top right hand side of the screen), navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Service Management > Catalog"),", and select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," service.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Destination Service Selection",src:n(82282).Z,width:"1590",height:"1301"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure your new service instance by first clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add +")," button followed by selecting both a name and a plan.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finalize the service instance creation by confirming your configuration with a click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," button."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Destination Service Creation",src:n(96216).Z,width:"1590",height:"1237"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Alternative: Using Kubernetes Descriptors"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new YAML file :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="destination-service.yaml"{8}',title:'"destination-service.yaml"{8}'},"---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceInstance\nmetadata:\n  name: destination-service\nspec:\n  clusterServiceClassExternalName: destination\n  clusterServicePlanExternalName: <your-desired-plan>\n---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceBinding\nmetadata:\n  name: my-destination-service-binding\nspec:\n  instanceRef:\n    name: destination-service\n  secretName: my-dest-secret\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the configuration via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f destination-service.yml"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Monitor the status via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl describe ServiceInstance destination-service"),".\nEventually this should automatically create a Kubernetes secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"my-dest-secret"),".\nThis secret will contain the actual service binding information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Mount the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-dest-secret")," secret into the file system of the application as follows:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the empty list of ",(0,i.kt)("inlineCode",{parentName:"p"},"volumes")," at the end of your ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment.yml"),".\nAdd a new volume, referencing the secret:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="volumes:"',title:'"volumes:"'},"- name: my-destination-service-binding-volume\n  secret:\n    secretName: my-dest-secret\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Mount this volume into the file system of your application.\nAdd it to the empty list of ",(0,i.kt)("inlineCode",{parentName:"p"},"volumeMounts")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment.yml"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="volumeMounts:"',title:'"volumeMounts:"'},"- name: my-destination-service-binding-volume\n  mountPath: '/etc/secrets/sapcp/destination/my-destination-service-binding'\n  readOnly: true\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the configuration via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f deployment.yml"),".")))),(0,i.kt)("h4",{id:"bind-the-xsuaa-service"},"Bind the XSUAA Service"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open your Kyma dashboard (see previous section) and select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization and Trust Management Service")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Service Managament > Catalog"),":")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"XSUAA Service Selection",src:n(38845).Z,width:"1590",height:"1301"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Configure your new service instance by clicking the ",(0,i.kt)("inlineCode",{parentName:"li"},"Add +")," button and selecting both a name and a plan or your new service instance.\nComplete the process by clicking the ",(0,i.kt)("inlineCode",{parentName:"li"},"Create")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"XSUAA Service Creation",src:n(56073).Z,width:"1590",height:"1237"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Alternative: Using Kubernetes Descriptors"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new YAML file :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="xsuaa-service.yaml"{8}',title:'"xsuaa-service.yaml"{8}'},"---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceInstance\nmetadata:\n  name: xsuaa-service\nspec:\n  clusterServiceClassExternalName: xsuaa\n  clusterServicePlanExternalName: <your-desired-plan>\n---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceBinding\nmetadata:\n  name: my-xsuaa-service-binding\nspec:\n  instanceRef:\n    name: xsuaa-service\n  secretName: my-xsuaa-secret\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Repeat the same steps 2-5 from the previous section but make use of ",(0,i.kt)("inlineCode",{parentName:"li"},"my-xsuaa-secret")," for the steps."))),(0,i.kt)("h4",{id:"known-xsuaa-service-incompatibility"},"Known XSUAA Service Incompatibility"),(0,i.kt)("p",null,"We have observed that the property ",(0,i.kt)("inlineCode",{parentName:"p"},"plan")," is missing in the XSUAA secret created in the previous section.\nThis property, however, is required by the SAP Cloud SDK and it's absence causes runtime errors in the application while trying to read this service binding."),(0,i.kt)("p",null,"To fix this issue you need to edit the secret so that it contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"plan")," property.\nThe easiest way, when you are already using the CLI, is by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl edit")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit secrets my-xsuaa-secret\n")),(0,i.kt)("p",null,"In there, you can now add a ",(0,i.kt)("inlineCode",{parentName:"p"},"plan")," property with one of the following base64 encoded values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"plan"),(0,i.kt)("th",{parentName:"tr",align:null},"base64 encoded value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"application")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"YXBwbGljYXRpb24K"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"broker")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"YnJva2VyCg=="))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"space")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"c3BhY2UK"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"apiaccess")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"YXBpYWNjZXNzCg=="))))),(0,i.kt)("p",null,"The resulting service binding can now be consumed with the SAP Cloud SDK."),(0,i.kt)("h3",{id:"expose-your-application-to-the-internet"},"Expose your Application to the Internet"),(0,i.kt)("p",null,"During the next steps, you will configure and deploy an ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/01c5f9ba7d6847aaaf069d153b981b51.html?locale=en-US"},"approuter")," so that only authenticated users can access your application.\nFor that, you will need to create a simple application that uses the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap/approuter"},"@sap/approuter")," and starts it for this purpose."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Based on the approuter application you used, containerize your application and push the image to a docker repository of your choice.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new YAML file describing the approuter deployment:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="deployment.yml" {18,21,31,32,37}',title:'"deployment.yml"',"{18,21,31,32,37}":!0},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-approuter-deployment\n  labels:\n    app: my-approuter\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: my-approuter\n  template:\n    metadata:\n      labels:\n        app: my-approuter\n    spec:\n      imagePullSecrets:\n        - name: <your-secret-for-docker-login>\n      containers:\n        # Configure the docker image of your approuter application here\n        - image: <name-of-the-image>\n          imagePullPolicy: Always\n          name: my-approuter\n          env:\n            - name: PORT\n              value: \'5000\'\n            - name: destinations\n              value: >\n                [\n                  {\n                    "name": "<name-for-the-backend-app>",\n                    "url": "<URL-to-access-backend-app>",\n                    "forwardAuthToken": true\n                  }\n                ]\n            - name: TENANT_HOST_PATTERN\n              value: <URL-pattern-for-outside-cluster-access>\n          volumeMounts:\n            - name: my-xsuaa-service-binding-volume\n              mountPath: \'/etc/secrets/sapcp/xsuaa/my-xsuaa-service-binding\'\n      volumes:\n        - name: my-xsuaa-service-binding-volume\n          secret:\n            secretName: my-xsuaa-secret\n      restartPolicy: Always\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: my-approuter\n  name: my-approuter\nspec:\n  type: NodePort\n  ports:\n    - port: 5000\n      targetPort: 5000\n      protocol: TCP\n      nodePort: 31002\n  selector:\n    app: my-approuter\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Also adapt the ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-app.json")," file:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json{5,7,8}"},'{\n    "welcomeFile": "/web-pages/index.html",\n    "routes": [\n        {\n            "source": "/<path-for-backend-endpoints>/(.*)",\n            "target": "$1",\n            "destination": "<name-for-the-backend-app>",\n            "identityProvider": "<optional-identity-provider-id>",\n            "csrfProtection": false\n        }\n    ]\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow steps similar to steps 2-3 in ",(0,i.kt)("a",{parentName:"p",href:"#create-a-kyma-deployment"},"Create a Kyma Deployment section")," to deploy the approuter and check if the deployment is successful.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the already created XSUAA service instance with few parameters like ",(0,i.kt)("inlineCode",{parentName:"p"},"xsappname")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"oauth2-configuration"),".\nThis is required to provide authenticated access to backend application via the approuter."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="xsuaa-service.yaml"{9-15}',title:'"xsuaa-service.yaml"{9-15}'},"---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceInstance\nmetadata:\n  name: xsuaa-service\nspec:\n  clusterServiceClassExternalName: xsuaa\n  clusterServicePlanExternalName: <your-desired-plan>\n  parameters:\n    xsappname: <your-backend-app-name>\n    oauth2-configuration:\n      allowedproviders:\n        - <your-idp-key>\n      redirect-uris:\n        - <URL-pattern-for-outside-cluster-access>\n---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceBinding\nmetadata:\n  name: my-xsuaa-service-binding\nspec:\n  instanceRef:\n    name: xsuaa-service\n  secretName: my-xsuaa-secret\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the configuration via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f xsuaa-service.yaml"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make the approuter accessible outside the cluster by creating an API rule:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="create-api-rule.yml"{4,15}',title:'"create-api-rule.yml"{4,15}'},"apiVersion: gateway.kyma-project.io/v1alpha1\nkind: APIRule\nmetadata:\n  name: <your-rule-name>\nspec:\n  gateway: kyma-gateway.kyma-system.svc.cluster.local\n  rules:\n    - accessStrategies:\n        - config: {}\n          handler: noop\n      methods:\n        - GET\n      path: /.*\n  service:\n    host: <subaccount-prefix>.<URL-pattern-for-outside-cluster-access>\n    name: my-approuter\n    port: 5000\n")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the configuration via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f create-api-rule.yml"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, access the application by using the host address provided in the API rule created and appending the ",(0,i.kt)("inlineCode",{parentName:"p"},"path-for-backend-endpoints")," given in ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-app.json")," along with the an actual end point of your backend application."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You need not necessarily push an Approuter to access your application outside a cluster.\nYou could also go ahead and expose the service for your application directly by creating an APIRule.\nBut, this would mean that access to your application would not be authenticated first.")),(0,i.kt)("p",null,"You can also refer to this additional material available for getting started with SAP Cloud SDK on Kyma:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/kyma-runtime-extension-samples/tree/main/sample-cloudsdk-java"},"Sample Application with Setup Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/01/11/use-sap-cloud-sdk-on-kyma-runtime-to-connect-to-external-systems-with-client-cert-authentication/"},"Blog Post on a Sample Use Case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener#excursion-bind-services-created-by-the-service-catalog"},"Using the Service Catalog with the SAP Cloud SDK"))))}m.isMDXComponent=!0},97798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btp-cockpit-kubeconfig-url-c08c8f6e714ad0a4584a974ff370c880.png"},22216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btp-cockpit-kyma-console-url-014cf75391bff4d3d53f854ecca04448.png"},96216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btp-kyma-dashboard-destination-service-creation-eec0269566e3c31e57d36dc17ac71fcf.png"},82282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btp-kyma-dashboard-destination-service-selection-43968ae087a8b4d6fc92d2081288511d.png"},56073:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btp-kyma-dashboard-xsuaa-service-creation-6b02f43c8ab4d4a58ac89212d213c830.png"},38845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btp-kyma-dashboard-xsuaa-service-selection-8c308ef81cf48ee72b93d1fd306aec56.png"}}]);