"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3351],{43737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"environments/kubernetes-kyma","title":"Develop your App for the Kyma Environment with Java SDK","description":"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment","source":"@site/docs-java_versioned_docs/version-v4/environments/kyma.mdx","sourceDirName":"environments","slug":"/environments/kubernetes-kyma","permalink":"/cloud-sdk/docs/java/v4/environments/kubernetes-kyma","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v4/environments/kyma.mdx","tags":[],"version":"v4","frontMatter":{"title":"Develop your App for the Kyma Environment with Java SDK","sidebar_label":"Kubernetes with SAP Kyma","id":"kubernetes-kyma","description":"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},"sidebar":"docsJavaSidebar","previous":{"title":"Kubernetes with SAP Gardener","permalink":"/cloud-sdk/docs/java/v4/environments/kubernetes-gardener"},"next":{"title":"Update to Version 4","permalink":"/cloud-sdk/docs/java/v4/guides/4.0-upgrade"}}');var a=t(74848),s=t(28453);const o={title:"Develop your App for the Kyma Environment with Java SDK",sidebar_label:"Kubernetes with SAP Kyma",id:"kubernetes-kyma",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},r=void 0,c={},l=[{value:"SAP Cloud SDK Features Supported on Kyma by SAP",id:"sap-cloud-sdk-features-supported-on-kyma-by-sap",level:2},{value:"Getting Started with the SAP Cloud SDK on Kyma",id:"getting-started-with-the-sap-cloud-sdk-on-kyma",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Containerize the Application",id:"containerize-the-application",level:3},{value:"Create a Kyma Deployment",id:"create-a-kyma-deployment",level:3},{value:"Access Your Application",id:"access-your-application",level:3},{value:"Bind SAP BTP Services to the Application",id:"bind-sap-btp-services-to-the-application",level:3},{value:"Create and Bind the Destination Service",id:"create-and-bind-the-destination-service",level:4},{value:"Bind the XSUAA Service",id:"bind-the-xsuaa-service",level:4},{value:"Expose your Application to the Internet",id:"expose-your-application-to-the-internet",level:3},{value:"On-Premise Connectivity",id:"on-premise-connectivity",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Background Information",id:"background-information",level:3},{value:"Create a Kubernetes Resource",id:"create-a-kubernetes-resource",level:3},{value:"Executing Requests",id:"executing-requests",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://kyma-project.io/",children:"Kyma"})," is an application runtime that provides you a flexible and easy way to connect, extend, and customize your applications in the cloud-native world of Kubernetes.\nFind more details in the ",(0,a.jsx)(n.a,{href:"https://kyma-project.io/docs/kyma/latest/01-overview/",children:"official documentation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can also refer to this additional material available for getting started with SAP Cloud SDK on Kyma:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/SAP-samples/kyma-runtime-extension-samples/tree/main/sample-cloudsdk-java",children:"Sample Application with Setup Guide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://blogs.sap.com/2022/01/11/use-sap-cloud-sdk-on-kyma-runtime-to-connect-to-external-systems-with-client-cert-authentication/",children:"Blog Post on a Sample Use Case"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener#excursion-bind-services-created-by-the-service-catalog",children:"Using the Service Catalog with the SAP Cloud SDK"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sap-cloud-sdk-features-supported-on-kyma-by-sap",children:"SAP Cloud SDK Features Supported on Kyma by SAP"}),"\n",(0,a.jsx)(n.p,{children:"The SAP Cloud SDK supports the Kyma runtime through the regular Cloud Foundry specific modules and classes.\nHence, Cloud Foundry application developers usually don't need to adjust their code to deploy and run it on Kyma."}),"\n",(0,a.jsxs)(n.p,{children:["Nevertheless, before deploying your application on a Kyma cluster, please ensure that following dependency is on the classpath: ",(0,a.jsx)(n.a,{href:"https://search.maven.org/search?q=g:com.sap.cloud.environment.servicebinding%20AND%20a:java-sap-service-operator",children:(0,a.jsx)(n.code,{children:"com.sap.cloud.environment.servicebinding:java-sap-service-operator"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Find below the list of features we currently support:\nLegend: \u2705 - supported, \u2757- partially supported, \u274c - not supported"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u2705 Consume SAP BTP services like Destination, Connectivity, IAS, XSUAA, and others"}),"\n",(0,a.jsx)(n.li,{children:"\u2705 Multitenancy"}),"\n",(0,a.jsx)(n.li,{children:"\u2705 Resilience & Caching"}),"\n",(0,a.jsx)(n.li,{children:"\u2705 Connect to and consume services from SAP S/4HANA Cloud"}),"\n",(0,a.jsx)(n.li,{children:"\u2757 Connect to and consume services from SAP S/4HANA On-Premise"}),"\n",(0,a.jsx)(n.li,{children:"\u2705 Seamless use of typed clients provided by the SAP Cloud SDK"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"getting-started-with-the-sap-cloud-sdk-on-kyma",children:"Getting Started with the SAP Cloud SDK on Kyma"}),"\n",(0,a.jsx)(n.p,{children:"This detailed guide will help get your SAP Cloud SDK Java application up and running in Kyma.\nYou can also use this guide to migrate your existing application to Kyma."}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"To follow this guide you will need:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/09dd313bf6644250a14f8f38c3d644c0.html?locale=en-US",children:"SAP BTP Kyma environment"})," instance"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," and a publicly reachable Docker repository"]}),"\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.a,{href:"https://spring.io/projects/spring-boot",children:"Spring Boot"})," Application using the SAP Cloud SDK"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,a.jsx)(n.p,{children:"When deploying applications to Kyma, you are not limited to Spring Boot applications.\nIn fact, you may deploy any application that can be executed within a Docker container.\nThe examples in this document, however, do use a Spring Boot app."})}),"\n",(0,a.jsx)(n.p,{children:"Check out the details below in case you are uncertain about any of the prerequisites."}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Kyma Environment"}),(0,a.jsxs)(n.p,{children:["This guide assumes you already have a Global Account, a subaccount on SAP BTP platform and have ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"Kubernetes CLI"})," installed on your local machine.\nIf not, please refer to these guides on getting a ",(0,a.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/d61c2819034b48e68145c45c36acba6e.html?locale=en-US",children:"Global Account"})," and creating a ",(0,a.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/05280a123d3044ae97457a25b3013918.html?locale=en-US",children:"subaccount"})]}),(0,a.jsxs)(n.p,{children:["In your subaccount in SAP BTP cockpit, create a ",(0,a.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/09dd313bf6644250a14f8f38c3d644c0.html?locale=en-US",children:"Kyma Environment instance"}),".\nMake sure that you select an appropriate ",(0,a.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/befe01d5d8864e59bf847fa5a5f3d669.html?locale=en-US#azure",children:"plan"})," and also assign the necessary ",(0,a.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/148ae38b7d6f4e61bbb696bbfb3996b2.html?locale=en-US",children:"roles"})," to users."]}),(0,a.jsx)(n.admonition,{title:"Kyma Setup Time",type:"note",children:(0,a.jsx)(n.p,{children:"Creating a Kyma environment instance can take up to 30 minutes."})}),(0,a.jsxs)(n.p,{children:["Once your Kyma environment is created, you can download a ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"Kubeconfig file"})," directly from the SAP BTP cockpit."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Kubeconfig file download",src:t(41893).A+"",width:"1573",height:"822"})})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Docker"}),(0,a.jsxs)(n.p,{children:["This guide assumes you have ",(0,a.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," installed on your local machine."]}),(0,a.jsxs)(n.p,{children:["Furthermore, you need a ",(0,a.jsx)(n.strong,{children:"Docker repository"})," where you can store images.\nThe repository needs to be publicly accessible in order for the cluster to access and download the Docker image we are going to create."]}),(0,a.jsx)(n.p,{children:"In case you don't have such a repository yet we recommend either:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://common.repositories.cloud.sap/ui/",children:"Artifactory DMZ"})," (for SAP internal developers)"]}),"\n"]}),(0,a.jsx)(n.p,{children:"Access to images in a repository may be limited to authenticated and/or authorized users, depending on your configuration."}),(0,a.jsx)(n.p,{children:"Make sure you are logged in to your repository on your local machine by running:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker login (your-repo) --username=(your-username)\n"})}),(0,a.jsxs)(n.p,{children:["And check your configuration which is usually located under ",(0,a.jsx)(n.code,{children:"(your-home-directory)/.docker/config.json"}),"."]}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"In case AuthN/AuthZ is required to download images make sure you have a secret configured in your cluster"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl create secret docker-registry (name-of-the-secret) --docker-username=(username) --docker-password=(API-token) --docker-server=(your-repo)\n"})})]})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Application using the SAP Cloud SDK"}),(0,a.jsxs)(n.p,{children:["If you don't have an application already you can comfortably ",(0,a.jsx)(n.a,{href:"../getting-started",children:"create one from our archetypes"}),"."]})]}),"\n",(0,a.jsx)(n.h3,{id:"containerize-the-application",children:"Containerize the Application"}),"\n",(0,a.jsx)(n.p,{children:"To run on Kyma the application needs to be shipped in a container.\nFor this guide we will be using Docker."}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:"Dockerfile"})," in the project root directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dockerfile",metastring:"{2}",children:'FROM openjdk:8-jdk-slim\nARG JAR_FILE=application/target/*.jar\nCOPY ${JAR_FILE} app.jar\nENTRYPOINT ["java","-jar","/app.jar"]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If needed, update the ",(0,a.jsx)(n.code,{children:"JAR_FILE"})," to point to your JAR file."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["You can find more information on how to containerize Spring Boot applications in ",(0,a.jsx)(n.a,{href:"https://spring.io/guides/gs/spring-boot-docker/",children:"this guide"})," (in particular, check the ",(0,a.jsx)(n.em,{children:"Containerize It"})," section)."]})}),"\n",(0,a.jsx)(n.p,{children:"Compile and push the image by running:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker build -t <your-repo>/<your-image-name> .\ndocker push <your-repo>/<your-image-name>\n\n# alternatively, you may add a tag to your image\ndocker build -t <your-repo>/<your-image-name>:<your-tag> .\ndocker push <your-repo>/<your-image-name>:<your-tag>\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,a.jsxs)(n.p,{children:["In case you are facing authorization issues when pushing to your repository refer to the dedicated section under ",(0,a.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-kyma-deployment",children:"Create a Kyma Deployment"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a new YAML file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title="deployment.yml" {17,31}',children:" apiVersion: apps/v1\n kind: Deployment\n metadata:\n   name: my-app-deployment\n spec:\n   replicas: 1\n   selector:\n     matchLabels:\n       app: my-app\n   template:\n     metadata:\n       labels:\n         app: my-app\n     spec:\n       containers:\n         # Configure the docker image you just pushed to your repository here\n         - image: <name-of-the-image>\n           name: my-app\n           imagePullPolicy: Always\n           resources:\n             requests:\n               memory: '1.5Gi'\n               cpu: '500m'\n             limits:\n               memory: '2Gi'\n               cpu: '1000m'\n           # Volume mounts needed for injecting SAP BTP service credentials\n           volumeMounts:\n           env:\n           - name: SERVICE_BINDING_ROOT\n             value: \"/etc/secrets/sapbtp\"\n       imagePullSecrets:\n         # In case your repository requires a login, reference your secret here\n         - name: <your-secret-for-docker-login>\n       volumes:\n ----\n apiVersion: v1\n kind: Service\n metadata:\n   labels:\n     app: my-app\n   name:  my-app\n spec:\n   type: NodePort\n   ports:\n     - port: 8080\n       targetPort: 8080\n       protocol: TCP\n   selector:\n     app: my-app\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install the configuration via ",(0,a.jsx)(n.code,{children:"kubectl apply -f path/to/deployment/file/deployment.yml"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Monitor the status of the deployment by running: ",(0,a.jsx)(n.code,{children:"kubectl get deployment my-app-deployment"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Eventually, you should see an output similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get deployment my-app-deployment\n\nNAME                  READY   UP-TO-DATE   AVAILABLE   AGE\nmy-app-deployment     1/1     1            1           15s\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["In case something went wrong use ",(0,a.jsx)(n.code,{children:"kubectl describe"})," together with ",(0,a.jsx)(n.code,{children:"deployment"})," or ",(0,a.jsx)(n.code,{children:"pod"})," to get more information about the status of your application."]})}),"\n",(0,a.jsx)(n.h3,{id:"access-your-application",children:"Access Your Application"}),"\n",(0,a.jsx)(n.p,{children:"To access your application without further configuration you need to find the name of the application pod by listing out all available pods:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get pods\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now use the name of the application pod and forward the application port to your local machine:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward [pod-name] [local-port]:[application-port]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In case you started with an SAP Cloud SDK Archetype, you can test the ",(0,a.jsx)(n.code,{children:"hello"})," endpoint:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl localhost:[local-port]/hello\n"})}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Example"}),(0,a.jsxs)(n.p,{children:["If your application is running on port ",(0,a.jsx)(n.code,{children:"8080"})," (default configuration) in it's pod, you can use the following command to gain access to your app:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward my-app-pod-XYZ :8080\n"})}),(0,a.jsxs)(n.p,{children:["Please note that we skipped the ",(0,a.jsx)(n.code,{children:"[local-port]"})," parameter in the command above.\nThis will let ",(0,a.jsx)(n.code,{children:"kubectl"})," choose a random available port on your local machine every time you run the command."]}),(0,a.jsx)(n.p,{children:"If everything worked as expected, you should see an output similar to the following:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Forwarding from 127.0.0.1:50309 -> 8080\nForwarding from [::1]:50309 -> 8080\n"})}),(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"kubectl"})," chose the local port ",(0,a.jsx)(n.code,{children:"50309"}),".\nHence, you should be able to successfully run the following ",(0,a.jsx)(n.code,{children:"curl"})," command:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl localhost:50309/hello\n"})})]}),"\n",(0,a.jsxs)(n.admonition,{title:"SSH Access to your Pods",type:"tip",children:[(0,a.jsx)(n.p,{children:"If port-forwarding is not enough for you, you can also get SSH access to your application pods:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl exec --stdin --tty [pod-name] -- /bin/sh\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"bind-sap-btp-services-to-the-application",children:"Bind SAP BTP Services to the Application"}),"\n",(0,a.jsx)(n.p,{children:"The SAP Business Technology Platform offers various services that can be used by applications.\nTo access services from a Kyma environment, instances have to be created and bound to the application."}),"\n",(0,a.jsx)(n.p,{children:"For this guide we'll assume we want to use two services:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Destination Service"}),"\n",(0,a.jsx)(n.li,{children:"XSUAA Service"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"create-and-bind-the-destination-service",children:"Create and Bind the Destination Service"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Open your Kyma dashboard and select the namespace of your application (top right hand side of the screen) and navigate to ",(0,a.jsx)(n.code,{children:"Service Management > Service Instances"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a new service instance by first clicking on the ",(0,a.jsx)(n.code,{children:"+ Create Service Instance"})," button."]}),"\n",(0,a.jsxs)(n.p,{children:["Choose a name for the instance, then enter ",(0,a.jsx)(n.code,{children:"destination"})," as offering name and ",(0,a.jsx)(n.code,{children:"lite"})," as plan."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Destination Service Instance Creation",src:t(75391).A+"",width:"2872",height:"994"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Finalize the service instance creation by confirming your configuration with a click on the ",(0,a.jsx)(n.code,{children:"Create"})," button."]}),"\n",(0,a.jsx)(n.admonition,{title:"Save the configuration as YAML",type:"tip",children:(0,a.jsx)(n.p,{children:"If you prefer to maintain your configration as code you can copy the resulting YAML into your project."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Navigate to ",(0,a.jsx)(n.code,{children:"Service Management > Service Bindings"})," and create a binding for the service instance you just created."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Destination Service Binding Creation",src:t(24679).A+"",width:"2872",height:"994"})}),"\n",(0,a.jsx)(n.p,{children:"Make sure to provide a meaningful name to the binding as it will also be used for the created secret, which is needed for the next step."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The automatically created secret (derived from the service binding) needs to be mounted to the file system of your application pods.\nOpen your ",(0,a.jsx)(n.code,{children:"deployment.yml"})," and add the following content:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Find the empty list of ",(0,a.jsx)(n.code,{children:"volumes"})," in your ",(0,a.jsx)(n.code,{children:"deployment.yml"}),".\nAdd a new volume, referencing the secret:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title="volumes:"',children:"- name: my-destination-service-binding-volume\n  secret:\n    secretName: <the name of your binding goes here>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Mount this volume into the file system of your application.\nAdd it to the empty list of ",(0,a.jsx)(n.code,{children:"volumeMounts"})," in the ",(0,a.jsx)(n.code,{children:"container"})," section of your ",(0,a.jsx)(n.code,{children:"deployment.yml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title="volumeMounts:"',children:"- name: my-destination-service-binding-volume\n  mountPath: '/etc/secrets/sapbtp/my-destination-service-binding'\n  readOnly: true\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Apply the changes to your deployment by running ",(0,a.jsx)(n.code,{children:"kubectl apply -f deployment.yml"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"bind-the-xsuaa-service",children:"Bind the XSUAA Service"}),"\n",(0,a.jsx)(n.p,{children:"Apply the same steps as for the destination service, but use the following values when creating the service instance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Offering Name: ",(0,a.jsx)(n.code,{children:"xsuaa"})]}),"\n",(0,a.jsxs)(n.li,{children:["Plan: ",(0,a.jsx)(n.code,{children:"application"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of what the YAML for the service instance and service binding might look like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"apiVersion: services.cloud.sap.com/v1\nkind: ServiceInstance\nmetadata:\n  name: my-xsuaa\n  labels:\n    app.kubernetes.io/name: my-xsuaa\n  annotations: {}\n  namespace: sdk-java\nspec:\n  serviceOfferingName: xsuaa\n  servicePlanName: application\n---\napiVersion: services.cloud.sap.com/v1\nkind: ServiceBinding\nmetadata:\n  name: my-xsuaa-binding\n  labels:\n    app.kubernetes.io/name: my-xsuaa-binding\n  annotations: {}\n  namespace: sdk-java\nspec:\n  serviceInstanceName: kyma-xsuaa-serv\n"})}),"\n",(0,a.jsx)(n.h3,{id:"expose-your-application-to-the-internet",children:"Expose your Application to the Internet"}),"\n",(0,a.jsxs)(n.p,{children:["During the next steps, you will configure and deploy an ",(0,a.jsx)(n.a,{href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/01c5f9ba7d6847aaaf069d153b981b51.html?locale=en-US",children:"approuter"})," so that only authenticated users can access your application.\nFor that, you will need to create a simple application that uses the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@sap/approuter",children:"@sap/approuter"})," and starts it for this purpose."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Based on the approuter application you used, containerize your application and push the image to a docker repository of your choice."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a new YAML file describing the approuter deployment:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title="deployment.yml" {18,21,31,32,37}',children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-approuter-deployment\n  labels:\n    app: my-approuter\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: my-approuter\n  template:\n    metadata:\n      labels:\n        app: my-approuter\n    spec:\n      imagePullSecrets:\n        - name: <your-secret-for-docker-login>\n      containers:\n        # Configure the docker image of your approuter application here\n        - image: <name-of-the-image>\n          imagePullPolicy: Always\n          name: my-approuter\n          env:\n            - name: PORT\n              value: \'5000\'\n            - name: destinations\n              value: >\n                [\n                  {\n                    "name": "<name-for-the-backend-app>",\n                    "url": "<URL-to-access-backend-app>",\n                    "forwardAuthToken": true\n                  }\n                ]\n            - name: TENANT_HOST_PATTERN\n              value: <URL-pattern-for-outside-cluster-access>\n          volumeMounts:\n            - name: my-xsuaa-service-binding-volume\n              mountPath: \'/etc/secrets/sapcp/xsuaa/my-xsuaa-service-binding\'\n      volumes:\n        - name: my-xsuaa-service-binding-volume\n          secret:\n            secretName: my-xsuaa-secret\n      restartPolicy: Always\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: my-approuter\n  name: my-approuter\nspec:\n  type: NodePort\n  ports:\n    - port: 5000\n      targetPort: 5000\n      protocol: TCP\n      nodePort: 31002\n  selector:\n    app: my-approuter\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Also adapt the ",(0,a.jsx)(n.code,{children:"xs-app.json"})," file:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json{5,7,8}",children:'{\n    "welcomeFile": "/web-pages/index.html",\n    "routes": [\n        {\n            "source": "/<path-for-backend-endpoints>/(.*)",\n            "target": "$1",\n            "destination": "<name-for-the-backend-app>",\n            "identityProvider": "<optional-identity-provider-id>",\n            "csrfProtection": false\n        }\n    ]\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Follow steps similar to steps 2-3 in ",(0,a.jsx)(n.a,{href:"#create-a-kyma-deployment",children:"Create a Kyma Deployment section"})," to deploy the approuter and check if the deployment is successful."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the already created XSUAA service instance with few parameters like ",(0,a.jsx)(n.code,{children:"xsappname"})," and ",(0,a.jsx)(n.code,{children:"oauth2-configuration"}),".\nThis is required to provide authenticated access to backend application via the approuter."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title="xsuaa-service.yaml"{9-15}',children:"---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceInstance\nmetadata:\n  name: xsuaa-service\nspec:\n  clusterServiceClassExternalName: xsuaa\n  clusterServicePlanExternalName: <your-desired-plan>\n  parameters:\n    xsappname: <your-backend-app-name>\n    oauth2-configuration:\n      allowedproviders:\n        - <your-idp-key>\n      redirect-uris:\n        - <URL-pattern-for-outside-cluster-access>\n---\napiVersion: servicecatalog.k8s.io/v1beta1\nkind: ServiceBinding\nmetadata:\n  name: my-xsuaa-service-binding\nspec:\n  instanceRef:\n    name: xsuaa-service\n  secretName: my-xsuaa-secret\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the configuration via ",(0,a.jsx)(n.code,{children:"kubectl apply -f xsuaa-service.yaml"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make the approuter accessible outside the cluster by creating an API rule:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title="create-api-rule.yml"{4,15}',children:"apiVersion: gateway.kyma-project.io/v1alpha1\nkind: APIRule\nmetadata:\n  name: <your-rule-name>\nspec:\n  gateway: kyma-gateway.kyma-system.svc.cluster.local\n  rules:\n    - accessStrategies:\n        - config: {}\n          handler: noop\n      methods:\n        - GET\n      path: /.*\n  service:\n    host: <subaccount-prefix>.<URL-pattern-for-outside-cluster-access>\n    name: my-approuter\n    port: 5000\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the configuration via ",(0,a.jsx)(n.code,{children:"kubectl apply -f create-api-rule.yml"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Finally, access the application by using the host address provided in the API rule created and appending the ",(0,a.jsx)(n.code,{children:"path-for-backend-endpoints"})," given in ",(0,a.jsx)(n.code,{children:"xs-app.json"})," along with the an actual end point of your backend application."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"You need not necessarily push an Approuter to access your application outside a cluster.\nYou could also go ahead and expose the service for your application directly by creating an APIRule.\nBut, this would mean that access to your application would not be authenticated first."})}),"\n",(0,a.jsx)(n.h2,{id:"on-premise-connectivity",children:"On-Premise Connectivity"}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["This guide assumes you have both the ",(0,a.jsx)(n.strong,{children:"Transparent Proxy"})," (version ",(0,a.jsx)(n.code,{children:">= 1.3.0"}),") and ",(0,a.jsx)(n.strong,{children:"Connectivity Proxy"})," (version ",(0,a.jsx)(n.code,{children:">= 2.9.2"}),") installed in your cluster.\nPlease refer to ",(0,a.jsx)(n.a,{href:"https://github.com/SAP-samples/kyma-runtime-extension-samples/tree/main/connectivity-proxy",children:"this"})," and ",(0,a.jsx)(n.a,{href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/23fc1100c60b45c58f09694b7f9c7700.html",children:"this"})," documentation on how to install it if you haven't already."]}),"\n",(0,a.jsxs)(n.admonition,{title:"Kyma Compatibility",type:"note",children:[(0,a.jsx)(n.p,{children:"On Kyma, two scenarios are supported by the SAP Cloud SDK:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'Using the Connecitivty Proxy in "trusted mode" together with the Transparent Proxy'}),"\n",(0,a.jsx)(n.li,{children:'Using a custom Connecitivty Proxy instance in "untrusted mode" without the Transparent Proxy'}),"\n"]}),(0,a.jsxs)(n.p,{children:['The Connecitivty Proxy managed by Kyma is coming in "trusted mode", thus this guide covers scenario (1).\nIn case you want to run scenario (2) refer to ',(0,a.jsx)(n.a,{href:"./kubernetes-gardener#2-using-the-connectivity-proxy",children:"this guide"})," for using the Connectivity Proxy without Transparent Proxy.\nOther scenarios are currently not supported."]})]}),"\n",(0,a.jsx)(n.h3,{id:"background-information",children:"Background Information"}),"\n",(0,a.jsx)(n.p,{children:"When using the Transparent Proxy your app performs requests against the Transparent Proxy without explicit authentication, relying on the secure network communication provided by Kyma via Istio.\nThe Transparent Proxy will obtain the relevant destination from the destination service and use it to forward the request via the Connectivity Proxy to the On-Premise system.\nConsequently, your app itself does not interact with destination or connectivity service at all and thus your application pods do not require bindings to these two services."}),"\n",(0,a.jsx)(n.p,{children:"Please note that the current implementation of the Transparent Proxy does not yet cover all use cases."}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Constraints when using the Transparent Proxy"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Private Link not yet supported"}),"\n",(0,a.jsxs)(n.li,{children:["Destination names need to be known at design time","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["see the note on ",(0,a.jsx)(n.a,{href:"#create-a-kubernetes-resource",children:"Create a Kubernetes Resource"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["This approach is conceptually different from what you may be used to from a CloufdFoundry environment.\nThe official ",(0,a.jsx)(n.a,{href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/e661713ef7d14373b57e3e26b0b03b86.html",children:"documentation of the Transparent Proxy"})," gives more information on the architecture."]})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-kubernetes-resource",children:"Create a Kubernetes Resource"}),"\n",(0,a.jsx)(n.p,{children:"Create the following YAML file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title:"example-dest.yaml"',children:"apiVersion: destination.connectivity.api.sap/v1\nkind: Destination\nmetadata:\n  name: example-dest\nspec:\n  destinationRef:\n    name: 'example-dest-onprem' # name from BTP Cockpit\n  destinationServiceInstanceName: dest-service-instance-example # can be ommited if config.destinationService.defaultInstanceName was provided to the helm chart of the transparent proxy upon installation\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Adjust the name ",(0,a.jsx)(n.code,{children:"example-dest-onprem"})," to the On-Premise destination you defined in your SAP BTP Cockpit."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["It will create a Kubernetes resource in your cluster, pointing to the destination you created in the cockpit.\nApply the YAML with ",(0,a.jsx)(n.code,{children:"kubectl apply"})," to take effect."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This step is required for each destination that should be reachable via the Transparent Proxy.\nIf you do not create a custom Kubernetes resource of type ",(0,a.jsx)(n.code,{children:"destinations.destination.connectivity.api.sap"})," for a given destination, the destination will not be handled by the Transparent Proxy."]})}),"\n",(0,a.jsx)(n.h3,{id:"executing-requests",children:"Executing Requests"}),"\n",(0,a.jsx)(n.p,{children:"In your application you can now configure a destination to execute requests:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'DefaultHttpDestination destination = DefaultHttpDestination\n        .builder("http://example-dest.namespace/")\n        // for a subscriber tenant make sure to send the tenant header:\n        // .header(new Header("X-Tenant-Id", TenantAccessor.getCurrentTenant().getTenantId()))\n        // for principal propagation make sure to set the auth type to "TOKEN_FORWARDING":\n        // .authenticationType(AuthenticationType.TOKEN_FORWARDING)\n        .build();\n\nList<SalesArea> execute = new DefaultSalesAreaService().getAllSalesArea() // example OData request\n        .execute(destination);\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Replace ",(0,a.jsx)(n.code,{children:"namespace"})," in the URL with the namespace you installed the Transparent Proxy into"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This will target the Kubernetes resource ",(0,a.jsx)(n.code,{children:"example-dest"})," we created above which will be resolved to the destination we configured in that resource.\nThe code above shows an example how you can use it to perform an OData request."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Repeat this process for all ",(0,a.jsx)(n.em,{children:"destination names"})," you want to use in your application."]})}),"\n",(0,a.jsx)(n.admonition,{title:"Connecting to Cloud systems",type:"tip",children:(0,a.jsxs)(n.p,{children:["The above approach is not limited to destinations of proxy type ",(0,a.jsx)(n.code,{children:"ON_PREMISE"}),".\n",(0,a.jsx)(n.code,{children:"INTERNET"})," destinations are equally supported."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},41893:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/btp-cockpit-kubeconfig-url-c08c8f6e714ad0a4584a974ff370c880.png"},24679:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/kyma-binding-creation-f279a23238dac80ef1fb062691322b69.png"},75391:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/kyma-instance-creation-0e42d3fc281702384c37193453521bc6.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);