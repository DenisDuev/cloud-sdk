"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5991],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),s=n(44996),r=n(89750),l=["components"],c={title:"Connecting to External Systems From the Business Application Studio",sidebar_label:"Connecting to External Systems from BAS",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",keywords:["sap","cloud","sdk","proxy","connectivity","Business Application Studio","cloud-foundry","JavaScript","TypeScript"]},p=void 0,d={unversionedId:"js/guides/bas-external-system",id:"js/guides/bas-external-system",title:"Connecting to External Systems From the Business Application Studio",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",source:"@site/docs/js/guides/bas-external-system.mdx",sourceDirName:"js/guides",slug:"/js/guides/bas-external-system",permalink:"/cloud-sdk/docs/js/guides/bas-external-system",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/bas-external-system.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1655105321,formattedLastUpdatedAt:"6/13/2022",frontMatter:{title:"Connecting to External Systems From the Business Application Studio",sidebar_label:"Connecting to External Systems from BAS",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",keywords:["sap","cloud","sdk","proxy","connectivity","Business Application Studio","cloud-foundry","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Upgrade to version 2.0",permalink:"/cloud-sdk/docs/js/guides/upgrade-to-version-2"},next:{title:"Use the SAP Cloud SDK in the Browser",permalink:"/cloud-sdk/docs/js/guides/sdk-in-browser"}},u={},h=[{value:"What is the Business Application Studio?",id:"what-is-the-business-application-studio",level:2},{value:"Case 1: Connection to an On-Premise System",id:"case-1-connection-to-an-on-premise-system",level:2},{value:"Technical Background",id:"technical-background",level:3},{value:"Prerequisite 1: The Business Application Studio (BAS)",id:"prerequisite-1-the-business-application-studio-bas",level:3},{value:"Prerequisite 2: Cloud Connector and Destination Setup",id:"prerequisite-2-cloud-connector-and-destination-setup",level:3},{value:"Checking the Connection",id:"checking-the-connection",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Supported Authentication Types for On-premise Systems",id:"supported-authentication-types-for-on-premise-systems",level:3},{value:"Supported Authentication Types for Cloud Systems",id:"supported-authentication-types-for-cloud-systems",level:3},{value:"Case 2: Connection to Cloud Systems",id:"case-2-connection-to-cloud-systems",level:2},{value:"Prerequisite: Service Setup",id:"prerequisite-service-setup",level:3},{value:"Implementation",id:"implementation-1",level:3}],m={toc:h};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-business-application-studio"},"What is the Business Application Studio?"),(0,o.kt)("p",null,"The SAP Business Application Studio (BAS) is a development environment offered as a service on SAP BTP.\nYou can subscribe to the BAS and from there quickly start developing without installing node, git, Visual Studio Code, nor other tools.\nThe solution looks and feels like Visual Studio Code, which is no surprise since it is based on ",(0,o.kt)("a",{parentName:"p",href:"https://theia-ide.org/"},"Eclipse Theia"),", the open source version of Visual Studio Code."),(0,o.kt)("p",null,"However, SAP added a few useful features to the BAS.\nYou can connect the BAS to your SAP BTP account, which allows you to reach all systems that you have configured on SAP BTP from your local machine.\nThis includes systems that are connected through the Cloud Connector (CC) and are normally not reachable through the internet.\nBeing able to test changes locally reduces the overhead of deploying remotely and thus increases convenience for developers."),(0,o.kt)(r.Z,{alt:"Connecting to On-premise systems",sources:{light:(0,s.Z)("img/bas_light.svg"),dark:(0,s.Z)("img/bas_dark.svg")},class:"center",width:"100%",mdxType:"ThemedImage"}),(0,o.kt)("h2",{id:"case-1-connection-to-an-on-premise-system"},"Case 1: Connection to an On-Premise System"),(0,o.kt)("h3",{id:"technical-background"},"Technical Background"),(0,o.kt)("p",null,"Companies do not expose their SAP S/4HANA On-premise systems to the internet.\nThey are only reachable via a CC attached to an SAP BTP account.\nIn principle, you cannot reach these systems outside the SAP BTP account."),(0,o.kt)("p",null,"However, due to the subscription between the BAS and the SAP BTP account, there is a connection from the local application to the SAP S/4HANA system.\nOn a high level the connection works the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The BAS includes an HTTP_PROXY running at http://localhost:8887"),(0,o.kt)("li",{parentName:"ul"},"This proxy forwards all ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," requests to the SAP BTP account"),(0,o.kt)("li",{parentName:"ul"},"SAP BTP searches the existing destinations for one matching the name"),(0,o.kt)("li",{parentName:"ul"},"If a destination is present, an initial request is sent to this destination"),(0,o.kt)("li",{parentName:"ul"},"The proxy is a reverse proxy also piping back the response to the BAS")),(0,o.kt)("h3",{id:"prerequisite-1-the-business-application-studio-bas"},"Prerequisite 1: The Business Application Studio (BAS)"),(0,o.kt)("p",null,"You have an SAP BTP account and a subscription to the BAS.\nVia the subscription, the BAS can access all destination in the subscribed account."),(0,o.kt)("h3",{id:"prerequisite-2-cloud-connector-and-destination-setup"},"Prerequisite 2: Cloud Connector and Destination Setup"),(0,o.kt)("p",null,"You have set up a working Cloud Connector and configured a destination pointing to an On-premise system.\nPer default, destinations are not usable by a subscribed BAS.\nYou need to set two properties ",(0,o.kt)("inlineCode",{parentName:"p"},"WebIDEEnabled")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML5.DynamicDestination")," to enable that feature for a specific destination.\nGo to the destination configuration on SAP BTP and add the properties:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"WebIDEEnabled")),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTML5.DynamicDestination")),(0,o.kt)("td",{parentName:"tr",align:null},"true")))),(0,o.kt)("h3",{id:"checking-the-connection"},"Checking the Connection"),(0,o.kt)("p",null,"Before you start the implementation, ensure that the connection is correctly configured.\nThe connectivity proxy running in BAS expects a pattern of the kind ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<destinationName>.dest"),".\nWhen such a pattern is found the destination name is extracted and checked against the destinations in the related Cloud\nFoundry account.\nIf a match is found and the ",(0,o.kt)("inlineCode",{parentName:"p"},"WebIDEEnabled")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML5.DynamicDestination")," properties are enabled for the destination the request is forwarded via this destination.\nAll authorization information from the real destination is used.\nYou can test this flow by using a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command without any code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl <destinationName>.dest/path/to/service\n")),(0,o.kt)("p",null,"So if your destination is called ",(0,o.kt)("inlineCode",{parentName:"p"},"S4H_Test.dest")," and you want to query the catalog service the command would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v -i "S4H_Test.dest/sap/opu/odata/iwfnd/catalogservice;v=2/ServiceCollection?%24top=1"\n')),(0,o.kt)("p",null,"If the request responds with status code 200 for the service you want to use, you can start the implementation.\nThe connectivity proxy has a built-in cache that needs to be emptied after you adjusted destinations.\nThis is done by calling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8887/reload\n")),(0,o.kt)("p",null,"For more details on testing and troubleshooting have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2020/10/13/how-to-check-the-connectivity-to-your-backend-system-in-business-application-studio/"},"this guide"),"."),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"If the connection is tested and working you can start the implementation.\nThe SAP Cloud SDK helps you to consider the HTTP_PROXY automatically and makes it easy to use the same code base locally and in production on SAP BTP.\nThe SAP Cloud SDK has a ",(0,o.kt)("a",{parentName:"p",href:"../features/connectivity/destination"},"destination lookup")," priority considering environment variables first."),(0,o.kt)("p",null,"The trick is to define a ",(0,o.kt)("inlineCode",{parentName:"p"},"destinations")," environment variable when you run locally, which works like a switch under the hood when you execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest({ destinationName: 'myDestinationName', jwt: 'myJWT' });\n")),(0,o.kt)("p",null,"The code is the same for local execution and production.\nThe two situations are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Case 1:")," When run locally, the SAP Cloud SDK reads the destination from the environment variables.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt")," is irrelevant.\nThe destination contains only the name and URL of the real SAP BTP destination.\nSince the destination has no proxy type specified, the SAP Cloud SDK takes the HTTP_PROXY into account, as is the default.\nFrom there the flow described above takes place."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Case 2:")," When run on SAP BTP there is no environment variable present.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt")," is used to fetch the full destination from the service.\nThe proxy type is ",(0,o.kt)("inlineCode",{parentName:"p"},"OnPremise")," and the connectivity service provides all proxy information."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function is used by all request builders provided of the SAP Cloud SDK as well as by CAP applications connecting to an SAP S/4HANA system."))),(0,o.kt)("p",null,"You use ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes"},"launch configurations")," to run and debug applications locally.\nEither extend your existing ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode/launch.json")," or create a new one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{"configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug my application",\n      "program": "${workspaceFolder}/dist/main.js",\n      "envFile": "${workspaceFolder}/.env",\n      "preLaunchTask": "npm: build",\n      "outFiles": [\n        "${workspaceFolder}/dist/**/*.js"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"In this example, we use a simple Nest.js application.\nThe code will look almost identical for express or ",(0,o.kt)("a",{parentName:"p",href:"https://community.sap.com/topics/cloud-application-programming"},"CAP")," applications.\nThe property ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," defines the script file executed when you run the configuration.\nIn our case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," script will start up the Nest server.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"preLaunchTask")," executes the build before each run which compiles the TypeScript files to JavaScript.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"outFiles")," property defines where the compiled files will be located."),(0,o.kt)("p",null,"We have to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"destinations")," environment variable, to provide our destination.\nThis will interrupt the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"destination lookup")," and lead to a destination with the HTTP_PROXY considered.\nThe easiest way to do that is via a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file which is read when starting the application.\nIf you do not have a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, create one or adjust the existing one.\nJust add the following entry to the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'destinations="[{"name": "<destinationName>", "url": "http://<destinationName>.dest"}]"\n')),(0,o.kt)("p",null,"Fill in the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," of the destination you ",(0,o.kt)("a",{parentName:"p",href:"#prerequisite-2-cloud-connector-and-destination-setup"},"configured on SAP BTP"),".\nYou can use the same pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"<name>.dest")," that you have used for ",(0,o.kt)("a",{parentName:"p",href:"#checking-the-connection"},"testing the connection"),".\nAll requests done with the SAP Cloud SDK will now reach the SAP S/4HANA system via the BAS connectivity proxy.\nYou can start your application via the launch button."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SAP Cloud SDK also offers a ",(0,o.kt)("inlineCode",{parentName:"p"},"mockTestDestination()")," method which reads destination information from a ",(0,o.kt)("inlineCode",{parentName:"p"},"system.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.json")," file.\nIn the end, this only sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"destinations")," environment variables as stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, but could become advantageous if you have many systems.\nYou can also set the ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.json")," to your git ignore list so that they are not checked-in by accident and share the systems with your colleagues."))),(0,o.kt)("p",null,"For the simple case you would add ",(0,o.kt)("inlineCode",{parentName:"p"},"mockTestDestination(<destinationName>)")," to your local startup script and have a ",(0,o.kt)("inlineCode",{parentName:"p"},"systems.json")," in your project root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "systems": [\n        {\n            "alias": "your destination name",\n            "uri": "your destination url "\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"supported-authentication-types-for-on-premise-systems"},"Supported Authentication Types for On-premise Systems"),(0,o.kt)("p",null,"The supported authentication types are either ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicAuthorization")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PrincipalPropagation"),".\nIn case you use principal propagation, the BAS will fill the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAP-Connectivity-Authentication")," header as discussed in the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/on-premise"},"On-premise connectivity guide."),"\nThe user logged into the BAS will be propagated.\nIn case your BAS user is ",(0,o.kt)("strong",{parentName:"p"},"not")," a valid user of the On-premise system you can use a destination using basic authorization."),(0,o.kt)("h3",{id:"supported-authentication-types-for-cloud-systems"},"Supported Authentication Types for Cloud Systems"),(0,o.kt)("p",null,"For calls to Cloud Systems, i.e. systems that are reachable via Internet, the local BAS proxy is not needed.\nHowever, the web proxy will be used for all requests.\nIn general, this does not cause problems because the proxy is totally transparent."),(0,o.kt)("p",null,"An exception to this rule is destinations using ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientCertificateAuthentication")," because the http-agent does not yet ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TooTallNate/node-https-proxy-agent/pull/111"},"allow for certificate forwarding"),".\nAs a workaround you can add the target system to the ",(0,o.kt)("inlineCode",{parentName:"p"},"no_proxy")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'process.env.no_proxy = process.env.no_proxy  + ",<YourDestinationUrl>"\n')),(0,o.kt)("h2",{id:"case-2-connection-to-cloud-systems"},"Case 2: Connection to Cloud Systems"),(0,o.kt)("p",null,"Cloud systems are reachable via the internet and you do not need any cloud connector to reach them.\nThe same is true for the destination service of the SAP Business Technology Platform.\nHence, you can use the same approach locally and in production."),(0,o.kt)("h3",{id:"prerequisite-service-setup"},"Prerequisite: Service Setup"),(0,o.kt)("p",null,"On Cloud Foundry, the access to services is granted via the ",(0,o.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICE")," variables.\nWe assume that you have configured your application so that it can access the destination service.\nIf not, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"},"steps in the Cloud Foundry tutorial"),"."),(0,o.kt)("h3",{id:"implementation-1"},"Implementation"),(0,o.kt)("p",null,"You can mirror the ",(0,o.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICE")," variables from your Cloud Foundry account to your local BAS.\nStart the BAS and connect your BAS workspace to the SAP BTP account.\nThis is done via the little connection icon (",(0,o.kt)("img",{src:(0,s.Z)("img/cf-connect-button.jpg")}),") on the left of the BAS.\nThen select the application from which you want to mirror the variables and select the folder containing the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file to store it.\nUse the ",(0,o.kt)("inlineCode",{parentName:"p"},"envFile")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," to load the file on your local application startup."),(0,o.kt)("p",null,"Now your application will fetch the service credentials and call the destination service as in production.\nNote that there are certain limitations to this approach.\nWithin the BAS you will not have a JWT issued for your user.\nThis means that flows like ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2SAMLBearerAssertion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2UserTokenExchange")," can only work if you provide such a JWT.\nThis is possible in principle, but difficult within the local development environment.\nWe recommend creating dedicated development destinations with authentications flows like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2ClientCredentials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BasicAuthentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClientCertificateAuthentication")," (here we wait for a fix on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/TooTallNate/node-https-proxy-agent/pull/111"},"http-proxy-agent")," or you have to disable the proxy")),(0,o.kt)("p",null,"Note that for the connection to the cloud system the destinations do not need the two properties ",(0,o.kt)("inlineCode",{parentName:"p"},"WebIDEEnabled")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML5.DynamicDestination"),", because the BAS connectivity proxy is not needed."))}y.isMDXComponent=!0}}]);