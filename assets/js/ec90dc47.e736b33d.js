"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[476],{3086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"tutorials/getting-started/deploy-app-to-cf","title":"Deploy Application to Cloud Foundry with the SAP Cloud SDK for JavaScript","description":"Deploy an existing application and deploy it to Cloud Foundry in SAP Business Technology Platform.","source":"@site/docs-js/tutorials/getting-started/3-deploy-app-to-cf.mdx","sourceDirName":"tutorials/getting-started","slug":"/tutorials/getting-started/deploy-app-to-cf","permalink":"/cloud-sdk/docs/js/tutorials/getting-started/deploy-app-to-cf","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/tutorials/getting-started/3-deploy-app-to-cf.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"deploy-app-to-cf","title":"Deploy Application to Cloud Foundry with the SAP Cloud SDK for JavaScript","sidebar_label":"Deploy Application to Cloud Foundry","description":"Deploy an existing application and deploy it to Cloud Foundry in SAP Business Technology Platform.","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},"sidebar":"docsJsSidebar","previous":{"title":"Execute an OData Request","permalink":"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request"},"next":{"title":"Read Address Data","permalink":"/cloud-sdk/docs/js/tutorials/address-manager/read"}}');var i=t(74848),s=t(28453),a=t(86025),r=t(11470),l=t(19365);const c={id:"deploy-app-to-cf",title:"Deploy Application to Cloud Foundry with the SAP Cloud SDK for JavaScript",sidebar_label:"Deploy Application to Cloud Foundry",description:"Deploy an existing application and deploy it to Cloud Foundry in SAP Business Technology Platform.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},d=void 0,u={},h=[{value:"Overview",id:"overview",level:2},{value:"Deploy Application to Cloud Foundry",id:"deploy-application-to-cloud-foundry",level:2},{value:"Deploy the Business Partner Mock Server (Optional)",id:"deploy-the-business-partner-mock-server-optional",level:2},{value:"Configure Destination",id:"configure-destination",level:2},{value:"Bind Destination Service",id:"bind-destination-service",level:2},{value:"Final Code Review",id:"final-code-review",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"In this part of the tutorial, you will do the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Deploy your application to Cloud Foundry in SAP Business Technology Platform"}),"\n",(0,i.jsx)(n.li,{children:"Configure a destination in the SAP Business Technology cockpit"}),"\n",(0,i.jsx)(n.li,{children:"Consume the destination in your application"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deploy-application-to-cloud-foundry",children:"Deploy Application to Cloud Foundry"}),"\n",(0,i.jsxs)(n.p,{children:["To deploy your application, you need to add a ",(0,i.jsx)(n.code,{children:"manifest.yml"})," file to the root directory.\nIt is a deployment descriptor file for Cloud Foundry environment in SAP BTP.\nThe file should look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: .\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.code,{children:"<YOUR-APPLICATION-NAME>"})," is replaced by the name you specified when initializing the project."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The specified ",(0,i.jsx)(n.code,{children:"path"})," instructs Cloud Foundry to upload all the files from the ",(0,i.jsx)(n.code,{children:"dist/"})," folder."]}),"\n",(0,i.jsxs)(n.li,{children:["The command specified under the ",(0,i.jsx)(n.code,{children:"command"})," attribute tells the buildpack what command to issue to start the application."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Next, you need to login to Cloud Foundry in SAP Business Technology Platform using the cf CLI.\nFirst, you need to set an API endpoint.\nThe exact URL of this API endpoint depends on the region your ",(0,i.jsx)(n.em,{children:"subaccount"})," is in.\nOpen the ",(0,i.jsx)(n.a,{href:"https://account.hana.ondemand.com/",children:"SAP Business Technology Platform Cockpit"})," and navigate to the subaccount you are planning to deploy your application to.\nClick on ",(0,i.jsx)(n.em,{children:"Overview"})," on the left and you can see the URL of the API endpoint."]}),"\n",(0,i.jsx)("img",{alt:"SAP BTP Cockpit Subaccount overview",src:(0,a.Ay)("img/subaccount_api_endpoint.png"),width:"100%"}),"\n",(0,i.jsx)(n.p,{children:"Copy the URL and paste it into the following command in your command line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cf api https://api.cf.<region>.hana.ondemand.com\ncf login\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cf login"})," command will prompt you for your ",(0,i.jsx)(n.em,{children:"username"})," and your ",(0,i.jsx)(n.em,{children:"password"}),".\nShould you have more than one organization or space, you will also have to select those."]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, if you have logged in successfully, it is time to build and deploy your application.\nThe ",(0,i.jsx)(n.code,{children:"package.json"})," contains a few scripts that can be used for this purpose.\nIn productive environments you would transpile the application from TypeScript to JavaScript using the ",(0,i.jsx)(n.code,{children:"build"})," script and deploy the application using:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cf push\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Dependencies will be installed automatically when deploying to Cloud Foundry.\nThe Cloud Foundry CLI will automatically pick up the ",(0,i.jsx)(n.code,{children:"manifest.yml"})," of the project when deploying your application."]}),"\n",(0,i.jsx)(n.p,{children:"When everything works as expected, you should get an output that looks something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Waiting for app to start...\n\nname:              <YOUR-APPLICATION-NAME>\nrequested state:   started\nroutes:            <YOUR-APPLICATION-NAME>.cfapps.eu10.hana.ondemand.com\nlast uploaded:     Thu 21 Mar 14:05:32 CET 2019\nstack:             cflinuxfs3\nbuildpacks:        nodejs\n\ntype:            web\ninstances:       1/1\nmemory usage:    256M\nstart command:   node index.js\n     state     since                  cpu    memory        disk           details\n#0   running   2019-03-21T13:05:47Z   0.0%   16M of 256M   126.8M of 1G\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The application will be running at the ",(0,i.jsx)(n.code,{children:"routes"})," URL.\nYou can also make sure that the application works correctly by running the start command, this command can be different from the one shown above."]}),"\n",(0,i.jsx)(n.p,{children:"Should the application not work for whatever reason, you can call the following command to access the logs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Shell",children:"cf logs <YOUR-APPLICATION-NAME> --recent\n"})}),"\n",(0,i.jsx)(n.h2,{id:"deploy-the-business-partner-mock-server-optional",children:"Deploy the Business Partner Mock Server (Optional)"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you have access to an SAP S/4HANA Cloud system, you can skip this step."})}),"\n",(0,i.jsxs)(n.p,{children:["If you have used the ",(0,i.jsx)(n.a,{href:"https://github.com/SAP/cloud-s4-sdk-book/tree/mock-server",children:"OData Mock Service"})," for the business partner API in the previous tutorial, you will now also have to deploy it to Cloud Foundry.\nNavigate to the mock server project's root folder, which already contains a ",(0,i.jsx)(n.code,{children:"manifest.yml"}),", and run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cf push\n"})}),"\n",(0,i.jsx)(n.p,{children:"Make sure that your mock server and Node.js are up to date.\nWhen the server has been pushed successfully, cf CLI will output the route where the server can be reached.\nCopy this route, as you will need it in the next step."}),"\n",(0,i.jsx)(n.h2,{id:"configure-destination",children:"Configure Destination"}),"\n",(0,i.jsx)(n.p,{children:"Now that you have deployed your application, you need to configure a destination in the Cloud Cockpit so that it can be used by your application."}),"\n",(0,i.jsxs)(n.p,{children:["Start by opening the ",(0,i.jsx)(n.a,{href:"https://account.hana.ondemand.com/#/home/welcome",children:"Cloud Cockpit"})," in your browser and logging in."]}),"\n",(0,i.jsxs)(n.p,{children:["Next, navigate to your respective subaccount (in case of a trial account it should be called ",(0,i.jsx)(n.em,{children:"trial"}),").\nIn the menu bar on the left, there should be a section ",(0,i.jsx)(n.em,{children:"Connectivity"})," with an entry called ",(0,i.jsx)(n.em,{children:"Destinations"}),".\nClick ",(0,i.jsx)(n.em,{children:"Destinations"}),".\nOn the page that opens, click ",(0,i.jsx)(n.em,{children:"New Destination"})," and fill in the details below."]}),"\n",(0,i.jsx)("img",{alt:"SAP BTP Cockpit Subaccount Destinations",src:(0,a.Ay)("img/sap_cloud_platform_cockpit.png"),width:"100%"}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.em,{children:"Name"}),", choose a name that describes your system.\nThis tutorial will go with ",(0,i.jsx)(n.code,{children:"MockServer"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you use the business partner mock server, for URL enter the URL that you have saved from the previous step and use ",(0,i.jsx)(n.code,{children:"NoAuthentication"})," for ",(0,i.jsx)(n.em,{children:"Authentication"}),".\nIf you use an SAP S/4HANA Cloud system, enter the system URL in the URL field and choose ",(0,i.jsx)(n.code,{children:"BasicAuthentication"})," as the authentication type.\nThis will make the fields ",(0,i.jsx)(n.em,{children:"User"})," and ",(0,i.jsx)(n.em,{children:"Password"})," appear.\nEnter here the credentials of a technical user for your SAP S/4HANA Cloud system."]}),"\n",(0,i.jsx)(n.h2,{id:"bind-destination-service",children:"Bind Destination Service"}),"\n",(0,i.jsx)(n.p,{children:"To allow the application to use the destination you have just configured, you need to bind instances of the destination and the XSUAA services to your application."}),"\n",(0,i.jsx)(n.p,{children:"To create an instance of the destination service, execute the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cf create-service destination lite my-destination\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This tells Cloud Foundry to create an instance of the destination service with service plan ",(0,i.jsx)(n.em,{children:"lite"})," and make it accessible under the name ",(0,i.jsx)(n.code,{children:"my-destination"}),".\nYou can now use the name to bind this service to your application.\nTo do this, open your ",(0,i.jsx)(n.code,{children:"manifest.yml"})," and add a section called ",(0,i.jsx)(n.code,{children:"services"}),", under which you can then add the name of the created service."]}),"\n",(0,i.jsxs)(n.p,{children:["The resulting ",(0,i.jsx)(n.code,{children:"manifest.yml"})," should look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: .\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n    services:\n      - my-destination\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Secondly, you need an instance of the XSUAA service.\nThe XSUAA service is responsible for issuing access tokens that are necessary to talk to other services, like the destination service.\nFor this service, you will need a bit of extra configuration in the form of a configuration file.\nCreate a file called ",(0,i.jsx)(n.code,{children:"xs-security.json"})," with the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "xsappname": "<YOUR-APPLICATION-NAME>",\n  "tenant-mode": "shared"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The value for ",(0,i.jsx)(n.code,{children:"xsappname"})," again has to be unique across the whole of Cloud Foundry in SAP Business Technology Platform.\nMake sure to choose a unique name or prefix.\nNow, execute the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cf create-service xsuaa application my-xsuaa -c xs-security.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As before, add the newly created services to the services section of your ",(0,i.jsx)(n.code,{children:"manifest.yml"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:"services:\n      - my-destination\n      - my-xsuaa\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, you need to adapt the ",(0,i.jsx)(n.code,{children:"getAllBusinessPartners()"})," function in ",(0,i.jsx)(n.code,{children:"business-partner.service.ts"})," to use the destination defined in the SAP BTP Cockpit."]}),"\n",(0,i.jsx)(n.p,{children:"The function now looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n  const { businessPartnerApi } = businessPartnerService();\n  return await businessPartnerApi.requestBuilder().getAll().execute({\n    destinationName: 'MockServer'\n  });\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the snippet, the parameter of the ",(0,i.jsx)(n.code,{children:"execute()"})," method is replaced with an object whose key ",(0,i.jsx)(n.code,{children:"destinationName"})," refers to the name of the destination you defined earlier.\nIf you followed this ",(0,i.jsx)(n.a,{href:"./execute-an-odata-request#manage-destinations-centrally-optional",children:"step"})," in the previous tutorial, your code will already refer to the correct ",(0,i.jsx)(n.code,{children:"destinationName"}),".\nIf you chose a different name than ",(0,i.jsx)(n.code,{children:"MockServer"}),", make sure to use it here accordingly."]}),"\n",(0,i.jsxs)(n.p,{children:["Now you can recompile and redeploy the application.\nWhen you now call the ",(0,i.jsx)(n.code,{children:"/business-partner"})," route of your app, the Business Partners will be retrieved from the defined destination."]}),"\n",(0,i.jsx)(n.h2,{id:"final-code-review",children:"Final Code Review"}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, you deployed your application to Cloud Foundry.\nYou configured a new destination in the Cloud Cockpit.\nYou created instances of destination and XSUAA services to consume the configured destination."}),"\n",(0,i.jsx)(n.p,{children:"Here are the code files discussed on this page:"}),"\n",(0,i.jsxs)(r.A,{groupId:"code-files",defaultValue:"manifest",values:[{label:"manifest.yml",value:"manifest"},{label:"xs-security.json",value:"xs-security"}],children:[(0,i.jsx)(l.A,{value:"manifest",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: .\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n    services:\n      - my-destination\n      - my-xsuaa\n"})})}),(0,i.jsx)(l.A,{value:"xs-security",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "xsappname": "<YOUR-APPLICATION-NAME>",\n  "tenant-mode": "shared"\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var o=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var o=t(96540),i=t(34164),s=t(23104),a=t(56347),r=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:i}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,s]),tabValues:s}}var y=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=r[t].value;i!==o&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function A(e){const n=(0,y.A)();return(0,j.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);