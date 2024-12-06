"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[53636],{35415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"guides/cloud-foundry-xsuaa-service","title":"SAP BTP, Cloud Foundry Environment XSUAA Explained","description":"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications","source":"@site/docs-java/guides/cf-xsuaa.mdx","sourceDirName":"guides","slug":"/guides/cloud-foundry-xsuaa-service","permalink":"/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-java/guides/cf-xsuaa.mdx","tags":[],"version":"current","frontMatter":{"id":"cloud-foundry-xsuaa-service","title":"SAP BTP, Cloud Foundry Environment XSUAA Explained","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"CF XSUAA Service","description":"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications","keywords":["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","xsuaa","destination","connectivity"]},"sidebar":"docsJavaSidebar","previous":{"title":"Tutorials Overview","permalink":"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"},"next":{"title":"Deploy to Cloud Foundry","permalink":"/cloud-sdk/docs/java/guides/cf-deploy"}}');var i=t(74848),s=t(28453);const r={id:"cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CF XSUAA Service",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","xsuaa","destination","connectivity"]},a=void 0,c={},d=[{value:"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases",id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases",level:2},{value:"Read the Application Properties",id:"read-the-application-properties",level:3},{value:"Authorization Code Grant",id:"authorization-code-grant",level:2},{value:"Get Authorization Code",id:"get-authorization-code",level:3},{value:"Get OAuth2 Access Token",id:"get-oauth2-access-token",level:3},{value:"JSON Web Token Bearer Token Grant",id:"json-web-token-bearer-token-grant",level:2},{value:"Client Credentials Grant",id:"client-credentials-grant",level:2},{value:"Refresh Token Grant",id:"refresh-token-grant",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["When developing and deploying an application it quickly becomes important to understand how authentication and authorizations work on the SAP BTP, Cloud Foundry environment.\nIn our tutorials and documentation, we recommend using ",(0,i.jsx)(n.code,{children:"approuter"})," as a proxy service to handle authentication management to your implemented application.\nThe following steps will show what happens behind the scenes.\nThe requests can be manually reproduced by a REST client of your choice, e.g. Postman or Insomnia."]}),"\n",(0,i.jsx)(n.admonition,{title:"XSUAA service is developed independently of SAP Cloud SDK",type:"note",children:(0,i.jsxs)(n.p,{children:["The following documentation only touches a subset of features of the XSUAA Service on Cloud Foundry.\nThe SAP Cloud SDK and XSUAA are developed independently.\nWe do not provide in-depth support on XSUAA topics beyond SAP Cloud SDK use cases.\nMind, if some information seems outdated - get in touch with us and refer to ",(0,i.jsx)(n.a,{href:"https://docs.cloudfoundry.org/api/uaa/",children:"official XSUAA docs"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases",children:"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["User Login: ",(0,i.jsx)(n.code,{children:"Authorization Code Grant"})]}),"\n",(0,i.jsxs)(n.li,{children:["SAP BTP Service Usage on behalf of a User: ",(0,i.jsx)(n.code,{children:"JWT Bearer Token Grant"})]}),"\n",(0,i.jsxs)(n.li,{children:["SAP BTP Service Usage on behalf of a service: ",(0,i.jsx)(n.code,{children:"Client Credentials Grant"})]}),"\n",(0,i.jsxs)(n.li,{children:["Resolve User Access Token: ",(0,i.jsx)(n.code,{children:"Refresh Token Grant"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"read-the-application-properties",children:"Read the Application Properties"}),"\n",(0,i.jsx)(n.p,{children:"To create a request, we need to parse the XSUAA connection data."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Take note of your "',(0,i.jsx)(n.em,{children:"application route"}),"\". That's the URL for which an authorization request will be built."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"system-provided"})," environment variables of your application on Cloud Foundry."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Extract values ",(0,i.jsx)(n.code,{children:"_url_"}),", ",(0,i.jsx)(n.code,{children:"_clientid_"}),", ",(0,i.jsx)(n.code,{children:"_clientsecret_"})," from the JSON value, located in the object ",(0,i.jsx)(n.code,{children:"VCAP_SERVICES.xsuaa[0].credentials"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Depending on your setup, the ",(0,i.jsx)(n.code,{children:"xsuaa"})," array may have more than one entry.\nBecause your application can be bound to multiple instances, e.g. through different service plans."]})}),"\n",(0,i.jsx)(n.h2,{id:"authorization-code-grant",children:"Authorization Code Grant"}),"\n",(0,i.jsxs)(n.p,{children:["Since we start without an existing access token, our journey begins with the browser flow of ",(0,i.jsx)(n.a,{href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#authorization-code-grant",children:"Authorization Code Grant"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This flow is split into two steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get authorization code on behalf of a single-sign-on login form."}),"\n",(0,i.jsx)(n.li,{children:"Get personal access token from authorization code."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"get-authorization-code",children:"Get Authorization Code"}),"\n",(0,i.jsx)(n.p,{children:"You will likely need to run the following HTTP request in your browser and check the HTTP response."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make the following request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET https://[xsuaa.url]/oauth/authorize\n\nQuery parameters:\n\nclient_id=[xsuaa.clientid]\nredirect_uri=[application.route]\nresponse_type=code\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:['Optional values can be set for "scope" and "login_hint".\nUse ',(0,i.jsx)(n.code,{children:"scope=uaa.user"}),' here when facing unexpected "Unauthorized" response for the resulting ',(0,i.jsx)(n.code,{children:"[code]"})," in the next request."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Submit login form via a browser or REST API debugging tools like POSTMAN or Insomnia."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check the HTTP response and extract ",(0,i.jsx)(n.code,{children:"[code]"})," from the ",(0,i.jsx)(n.code,{children:"Location"})," header."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"HTTP/1.1 302 Found\nStrict-Transport-Security: max-age=31536000\nSet-Cookie: X-Uaa-Csrf=[...]; Path=/; Max-Age=86400; Expires=[...]; HttpOnly\nCache-Control: no-store\nContent-Language: en\nLocation: [application.route]?code=[code]\nX-XSS-Protection: 1; mode=block\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"get-oauth2-access-token",children:"Get OAuth2 Access Token"}),"\n",(0,i.jsx)(n.p,{children:"With the authorization code we can now request a real access token from the OAuth2 service endpoint:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make the following request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nredirect_uri=[application.route]\ncode=[code]\ngrant_type=authorization_code\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Congratulation, now you've fetched a valid ",(0,i.jsx)(n.code,{children:"access_token"}),".\nIt can be further evaluated and forwarded."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Some applications like ",(0,i.jsx)(n.code,{children:"_approuter_"})," will save the ",(0,i.jsx)(n.code,{children:"refresh_token"})," to the user session for you.\nThis enables the automatic retrieval of new access tokens after the existing one has expired during the active session."]})}),"\n",(0,i.jsx)(n.h2,{id:"json-web-token-bearer-token-grant",children:"JSON Web Token Bearer Token Grant"}),"\n",(0,i.jsxs)(n.p,{children:["Several services on the SAP BTP, require a dedicated OAuth2 access token, e.g. ",(0,i.jsx)(n.em,{children:"Connectivity Service"})," and ",(0,i.jsx)(n.em,{children:"Destination Service"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"system-provided"})," environment variables of your application."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the JSON value, locate the object ",(0,i.jsx)(n.code,{children:"VCAP_SERVICES.destination[0].credentials"}),". Make note of ",(0,i.jsx)(n.code,{children:"clientid"}),", ",(0,i.jsx)(n.code,{children:"clientsecret"}),", ",(0,i.jsx)(n.code,{children:"uri"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make the following request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\nassertion=[access_token]\ngrant_type=urn:ietf:params:oauth:grant-type:jwt-bearer\nresponse_type=token\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Congratulation, you have a valid ",(0,i.jsx)(n.code,{children:"destination_access_token"}),".\nIt can be used to query the ",(0,i.jsx)(n.code,{children:"destination.uri"})," linked destination service on behalf of the current user."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"client-credentials-grant",children:"Client Credentials Grant"}),"\n",(0,i.jsxs)(n.p,{children:["Some applications require access to a platform service without an active user session, with ",(0,i.jsx)(n.em,{children:"technical user"})," credentials.\nFor example, reading a list of destinations does not require a user access token.\nInstead, we can request an access token on behalf of the service binding itself.\nHere we use the ",(0,i.jsx)(n.a,{href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#without-authorization",children:"Client Credentials Grant"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make a request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\ngrant_type=client_credentials\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Congratulation, you have a valid ",(0,i.jsx)(n.code,{children:"destination_access_token"}),".\nIt can be used to query the ",(0,i.jsx)(n.code,{children:"destination.uri"})," linked destination service on behalf of the service binding."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"refresh-token-grant",children:"Refresh Token Grant"}),"\n",(0,i.jsxs)(n.p,{children:["If the current access token is expired, a new one can be requested with the ",(0,i.jsx)(n.a,{href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#refresh-token",children:"Refresh Token flow"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make a request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nrefresh_token=[refresh_token]\ngrant_type=refresh_token\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Congratulation, you now have a refreshed ",(0,i.jsx)(n.code,{children:"access_token"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);