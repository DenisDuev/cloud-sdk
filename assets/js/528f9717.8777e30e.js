"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3806],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),o=n(86010),i="tabItem_OmH5";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),o=n(67294),i=n(72389),r=n(67392),l=n(7094),s=n(12466),u=n(86010),p="tabList_uSqn",c="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,m=e.block,h=e.defaultValue,f=e.values,y=e.groupId,k=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,r.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),C=w.tabGroupChoices,A=w.setTabGroupChoices,P=(0,o.useState)(b),T=P[0],S=P[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var I=C[y];null!=I&&I!==T&&g.some((function(e){return e.value===I}))&&S(I)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==T&&(x(t),S(a),null!=y&&A(y,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,u.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},k)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:j,onClick:j},i,{className:(0,u.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},94459:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(44996),l=n(9877),s=n(72360),u=["components"],p={id:"deploy-app-to-cf",title:"Deploy Application to Cloud Foundry with the SAP Cloud SDK for JavaScript",sidebar_label:"Deploy Application to Cloud Foundry",description:"Deploy an existing application and deploy it to Cloud Foundry in SAP Business Technology Platform.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},c=void 0,d={unversionedId:"js/tutorials/getting-started/deploy-app-to-cf",id:"js/tutorials/getting-started/deploy-app-to-cf",title:"Deploy Application to Cloud Foundry with the SAP Cloud SDK for JavaScript",description:"Deploy an existing application and deploy it to Cloud Foundry in SAP Business Technology Platform.",source:"@site/docs/js/tutorials/getting-started/3-deploy-app-to-cf.mdx",sourceDirName:"js/tutorials/getting-started",slug:"/js/tutorials/getting-started/deploy-app-to-cf",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/deploy-app-to-cf",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/tutorials/getting-started/3-deploy-app-to-cf.mdx",tags:[],version:"current",lastUpdatedBy:"Deeksha Sinha",lastUpdatedAt:1655290369,formattedLastUpdatedAt:"6/15/2022",sidebarPosition:3,frontMatter:{id:"deploy-app-to-cf",title:"Deploy Application to Cloud Foundry with the SAP Cloud SDK for JavaScript",sidebar_label:"Deploy Application to Cloud Foundry",description:"Deploy an existing application and deploy it to Cloud Foundry in SAP Business Technology Platform.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},sidebar:"someSidebar",previous:{title:"Execute an OData Request",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request"},next:{title:"Read Address Data",permalink:"/cloud-sdk/docs/js/tutorials/address-manager/read-addresses"}},m={},h=[{value:"Overview",id:"overview",level:2},{value:"Deploy Application to Cloud Foundry",id:"deploy-application-to-cloud-foundry",level:2},{value:"Deploy the Business Partner Mock Server (Optional)",id:"deploy-the-business-partner-mock-server-optional",level:2},{value:"Configure Destination",id:"configure-destination",level:2},{value:"Bind Destination Service",id:"bind-destination-service",level:2},{value:"Final Code Review",id:"final-code-review",level:2}],f={toc:h};function y(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this part of the tutorial, you will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deploy your application to Cloud Foundry in SAP Business Technology Platform"),(0,i.kt)("li",{parentName:"ul"},"Configure a destination in the SAP Business Technology cockpit"),(0,i.kt)("li",{parentName:"ul"},"Consume the destination in your application")),(0,i.kt)("h2",{id:"deploy-application-to-cloud-foundry"},"Deploy Application to Cloud Foundry"),(0,i.kt)("p",null,"To deploy your application, you need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," file to the root directory.\nIt is a deployment descriptor file for Cloud Foundry environment in SAP BTP.\nThe file should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: .\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR-APPLICATION-NAME>")," is replaced by the name you specified when initializing the project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The specified ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," instructs Cloud Foundry to upload all the files from the ",(0,i.kt)("inlineCode",{parentName:"li"},"dist/")," folder."),(0,i.kt)("li",{parentName:"ul"},"The command specified under the ",(0,i.kt)("inlineCode",{parentName:"li"},"command")," attribute tells the buildpack what command to issue to start the application.")),(0,i.kt)("p",null,"Next, you need to login to Cloud Foundry in SAP Business Technology Platform using the cf CLI.\nFirst you need to set an API endpoint.\nThe exact URL of this API endpoint depends on the region your ",(0,i.kt)("em",{parentName:"p"},"subaccount")," is in.\nOpen the ",(0,i.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com/"},"SAP Business Technology Platform Cockpit")," and navigate to the subaccount you are planning to deploy your application to.\nClick on ",(0,i.kt)("em",{parentName:"p"},"Overview")," on the left and you can see the URL of the API endpoint."),(0,i.kt)("img",{alt:"SAP BTP Cockpit Subaccount overview",src:(0,r.Z)("img/subaccount_api_endpoint.png"),width:"100%"}),(0,i.kt)("p",null,"Copy the URL and paste it into the following command in your command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf api https://api.cf.<region>.hana.ondemand.com\ncf login\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cf login")," will prompt you for your ",(0,i.kt)("em",{parentName:"p"},"username")," and your ",(0,i.kt)("em",{parentName:"p"},"password"),".\nShould you have more then one organization or space, you will also have to select those."),(0,i.kt)("p",null,"Finally, if you have logged in successfully, it is time to build and deploy your application.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," contains a few scripts that can be used for this purpose.\nIn productive environments you would transpile the application from TypeScript to JavaScript using the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," script and deploy the application using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf push\n")),(0,i.kt)("p",null,"Dependencies will be installed automatically when deploying to Cloud Foundry.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"cf")," CLI will automatically pick up the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," of the project when deploying your application."),(0,i.kt)("p",null,"When everything works as expected, you should get output that looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Waiting for app to start...\n\nname:              <YOUR-APPLICATION-NAME>\nrequested state:   started\nroutes:            <YOUR-APPLICATION-NAME>.cfapps.eu10.hana.ondemand.com\nlast uploaded:     Thu 21 Mar 14:05:32 CET 2019\nstack:             cflinuxfs3\nbuildpacks:        nodejs\n\ntype:            web\ninstances:       1/1\nmemory usage:    256M\nstart command:   node index.js\n     state     since                  cpu    memory        disk           details\n#0   running   2019-03-21T13:05:47Z   0.0%   16M of 256M   126.8M of 1G\n")),(0,i.kt)("p",null,"The application will be running at the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," URL.\nYou can also make sure that the application works correctly by running the start command, this command can be different than the one shown above."),(0,i.kt)("p",null,"Should the application not work for whatever reason, you can call the following command to access the logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"cf logs <YOUR-APPLICATION-NAME> --recent\n")),(0,i.kt)("h2",{id:"deploy-the-business-partner-mock-server-optional"},"Deploy the Business Partner Mock Server (Optional)"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have access to an SAP S/4HANA Cloud system, you can skip this step."))),(0,i.kt)("p",null,"If you have used the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-s4-sdk-book/tree/mock-server"},"OData Mock Service")," for the business partner API in the previous tutorial, you will now also have to deploy it to Cloud Foundry.\nNavigate to the mock server project's root folder, that already contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf push\n")),(0,i.kt)("p",null,"Make sure that your mock server and Node.js are up to date.\nWhen the server has been pushed successfully, cf CLI will output the route where the server can be reached.\nCopy this route, as you will need it in the next step."),(0,i.kt)("h2",{id:"configure-destination"},"Configure Destination"),(0,i.kt)("p",null,"Now that you have deployed your application, you need to configure a destination in the Cloud Cockpit so that it can be used by your application."),(0,i.kt)("p",null,"Start by opening the ",(0,i.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com/#/home/welcome"},"Cloud Cockpit")," in your browser and logging in."),(0,i.kt)("p",null,"Next, navigate to your respective subaccount (in case of a trial account it should be called ",(0,i.kt)("em",{parentName:"p"},"trial"),").\nIn the menu bar on the left, there should be a section ",(0,i.kt)("em",{parentName:"p"},"Connectivity")," with an entry called ",(0,i.kt)("em",{parentName:"p"},"Destinations"),".\nClick ",(0,i.kt)("em",{parentName:"p"},"Destinations"),".\nOn the page that opens, click ",(0,i.kt)("em",{parentName:"p"},"New Destination")," and fill in the details below."),(0,i.kt)("img",{alt:"SAP BTP Cockpit Subaccount Destinations",src:(0,r.Z)("img/sap_cloud_platform_cockpit.png"),width:"100%"}),(0,i.kt)("p",null,"For ",(0,i.kt)("em",{parentName:"p"},"Name"),", choose a name that describes your system.\nThis tutorial will go with ",(0,i.kt)("inlineCode",{parentName:"p"},"MockServer"),"."),(0,i.kt)("p",null,"If you use the business partner mock server, for URL enter the URL that you have saved from the previous step and use ",(0,i.kt)("inlineCode",{parentName:"p"},"NoAuthentication")," for ",(0,i.kt)("em",{parentName:"p"},"Authentication"),".\nIf you use an SAP S/4HANA Cloud system, enter the systems URL in the URL field and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicAuthentication")," as authentication type.\nThis will make the fields ",(0,i.kt)("em",{parentName:"p"},"User")," and ",(0,i.kt)("em",{parentName:"p"},"Password")," appear.\nEnter here the credentials of a technical user for your SAP S/4HANA Cloud system."),(0,i.kt)("h2",{id:"bind-destination-service"},"Bind Destination Service"),(0,i.kt)("p",null,"To allow the application to use the destination you have just configured, you need to bind instances of the destination and the XSUAA services to your application."),(0,i.kt)("p",null,"To create an instance of the destination service, execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf create-service destination lite my-destination\n")),(0,i.kt)("p",null,"This tells Cloud Foundry to create an instance of the destination service with service plan ",(0,i.kt)("em",{parentName:"p"},"lite")," and make it accessible under the name ",(0,i.kt)("inlineCode",{parentName:"p"},"my-destination"),".\nYou can now use the name to bind this service to your application.\nTo do this, open your ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," and add a section called ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),", under which you can then add the name of the created service."),(0,i.kt)("p",null,"The resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: .\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n    services:\n      - my-destination\n")),(0,i.kt)("p",null,"Secondly, you need an instance of the XSUAA service.\nThe XSUAA service is responsible for issuing access tokens that are necessary to talk to other services, like the destination service.\nFor this service, you will need a bit of extra configuration in the form of a configuration file.\nCreate a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-security.json")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "xsappname": "<YOUR-APPLICATION-NAME>",\n  "tenant-mode": "shared"\n}\n')),(0,i.kt)("p",null,"The value for ",(0,i.kt)("inlineCode",{parentName:"p"},"xsappname")," again has to be unique across the whole of Cloud Foundry in SAP Business Technology Platform.\nMake sure to choose a unique name or prefix.\nNow, execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cf create-service xsuaa application my-xsuaa -c xs-security.json\n")),(0,i.kt)("p",null,"As before, add the newly created services to the services section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"services:\n      - my-destination\n      - my-xsuaa\n")),(0,i.kt)("p",null,"Finally, you need to adapt the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllBusinessPartners")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"business-partner.services.ts")," to use the destination defined in the SAP BTP Cockpit."),(0,i.kt)("p",null,"The function now looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    destinationName: 'MockServer'\n  });\n}\n")),(0,i.kt)("p",null,"In the snippet, the parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," is replaced with an object whose key ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationName")," refers to the name of the destination you defined earlier.\nIf you followed this ",(0,i.kt)("a",{parentName:"p",href:"./execute-an-odata-request#manage-destinations-centrally-optional"},"step")," in the previous tutorial, your code will already refer to the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationName"),".\nIf you chose a different name than ",(0,i.kt)("inlineCode",{parentName:"p"},"MockServer"),", make sure to use it here accordingly."),(0,i.kt)("p",null,"Now you can recompile and redeploy the application.\nWhen you now call the ",(0,i.kt)("inlineCode",{parentName:"p"},"/business-partners")," route of your app, the Business Partners will be retrieved from the defined destination."),(0,i.kt)("h2",{id:"final-code-review"},"Final Code Review"),(0,i.kt)("p",null,"In this tutorial, you deployed your application to Cloud Foundry.\nYou configured a new destination in the Cloud Cockpit.\nYou created instances of destination and XSUAA services to consume the configured destination."),(0,i.kt)("p",null,"Here are the code files discussed on this page:"),(0,i.kt)(l.Z,{groupId:"code-files",defaultValue:"manifest",values:[{label:"manifest.yml",value:"manifest"},{label:"xs-security.json",value:"xs-security"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"manifest",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: .\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n    services:\n      - my-destination\n      - my-xsuaa\n"))),(0,i.kt)(s.Z,{value:"xs-security",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "xsappname": "<YOUR-APPLICATION-NAME>",\n  "tenant-mode": "shared"\n}\n')))))}y.isMDXComponent=!0}}]);