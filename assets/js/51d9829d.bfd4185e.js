"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[34669],{97937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"guides/approuter","title":"Using the SAP Application Router with the SAP Cloud SDK","description":"This article describes how you can use the SAP Application Router with the SAP Cloud SDK","source":"@site/docs-js_versioned_docs/version-v2/guides/how-to-use-the-approuter.mdx","sourceDirName":"guides","slug":"/guides/approuter","permalink":"/cloud-sdk/docs/js/v2/guides/approuter","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/guides/how-to-use-the-approuter.mdx","tags":[],"version":"v2","frontMatter":{"id":"approuter","title":"Using the SAP Application Router with the SAP Cloud SDK","sidebar_label":"Using the SAP Application Router","description":"This article describes how you can use the SAP Application Router with the SAP Cloud SDK","keywords":["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},"sidebar":"docsJsSidebar","previous":{"title":"Trust and Keystores","permalink":"/cloud-sdk/docs/js/v2/guides/trust-and-keystores"},"next":{"title":"How to Add Resilience","permalink":"/cloud-sdk/docs/js/v2/guides/resilience"}}');var r=n(74848),i=n(28453),o=n(21122),a=n(86025);const c={id:"approuter",title:"Using the SAP Application Router with the SAP Cloud SDK",sidebar_label:"Using the SAP Application Router",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",keywords:["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},p="Using the SAP Application Router with the SAP Cloud SDK",d={},l=[{value:"SAP Application Router",id:"sap-application-router",level:2},{value:"Application Router Setup",id:"application-router-setup",level:3},{value:"Securing Your Application",id:"securing-your-application",level:2},{value:"Enabling Principal Propagation",id:"enabling-principal-propagation",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"using-the-sap-application-router-with-the-sap-cloud-sdk",children:"Using the SAP Application Router with the SAP Cloud SDK"})}),"\n",(0,r.jsxs)(t.p,{children:["In this guide, we will show you how to use the SAP Application Router together with the SAP Cloud SDK.\nYou will learn how to secure your application and configure multi-tenancy for principal propagation with an SAP Cloud SDK-based application example powered by ",(0,r.jsx)(t.a,{href:"https://nestjs.com/",children:"nestJS"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"sap-application-router",children:"SAP Application Router"}),"\n",(0,r.jsxs)(t.p,{children:["When we want to enable multi-tenancy for our application, we use the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@sap/approuter",children:"SAP Application Router"}),".\nThe application router's primary purpose is to be the single entry point of a microservice-based application and act as the application's reverse proxy."]}),"\n",(0,r.jsx)(t.p,{children:"Its responsibilities consist of dispatching requests to backend microservices, authenticating users, and serving static content.\nThe application router checks if a given request has a valid JSON Web Token (JWT) when accessing a target service.\nIf the request contains a valid JWT, the application router forwards the request to the target service; if the request does not contain a valid JWT, the user must authenticate.\nAs we can see in the diagram below, we use an Identity Provider (IdP) to authenticate, the request is redirected to an IdP where a user gets authenticated and then redirected back to the application router for passing further according to its desired destination."}),"\n",(0,r.jsx)(o.A,{alt:"Application Router flow",sources:{light:(0,a.Ay)("img/approuter_light.svg"),dark:(0,a.Ay)("img/approuter_dark.svg")},className:"center",width:"80%"}),"\n",(0,r.jsx)(t.h3,{id:"application-router-setup",children:"Application Router Setup"}),"\n",(0,r.jsx)(t.p,{children:"To deploy our application router in SAP BTP Cloud Foundry, we need to configure it first.\nLet's walk through the four files we need to use."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"xs-security.json"})," file defines the security and deployment options for an application.\nWith the below example, we enable the ",(0,r.jsx)(t.code,{children:"shared"})," tenant-mode for our ",(0,r.jsx)(t.code,{children:"xsuaa"})," instance, which we need for multi-tenancy."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "xsappname": "approuter-scaffold",\n  "tenant-mode": "shared"\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"xs-app.json"}),", we specify to which backend service a request is forwarded to, and how this request has to be authenticated.\nWe can optionally also specify a specific ",(0,r.jsx)(t.code,{children:"identityProvider"})," that is used for the authentication."]}),"\n",(0,r.jsxs)(t.p,{children:["In the example below, we forward every request against the application router's ",(0,r.jsx)(t.code,{children:"/"})," route to the backend destination's ",(0,r.jsx)(t.code,{children:"/"})," route."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "welcomeFile": "index.html",\n  "routes": [\n    {\n      "source": "/",\n      "target": "/",\n      "destination": "approuter-scaffold"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"package.json"})," we only have one dependency, the application router module."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "name": "approuter",\n  "dependencies": {\n    "@sap/approuter": "*"\n  },\n  "scripts": {\n    "start": "node node_modules/@sap/approuter/approuter.js"\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The manifest contains our application router, as well as environment variables which our application router needs for multi-tenancy.\nAs you see under ",(0,r.jsx)(t.code,{children:"env"}),", we specify the ",(0,r.jsx)(t.code,{children:"TENANT_HOST_PATTERN"})," and ",(0,r.jsx)(t.code,{children:"destinations"}),".\nThe ",(0,r.jsx)(t.code,{children:"destinations"})," are the destinations we use in our ",(0,r.jsx)(t.code,{children:"xs-app.json"})," where we forward requests to.\nThe ",(0,r.jsx)(t.code,{children:"TENANT_HOST_PATTERN"})," is a regular expression that describes how a tenant name should be retrieved from the host.\nWe also have to bind the ",(0,r.jsx)(t.code,{children:"xsuaa"})," which we configured with our ",(0,r.jsx)(t.code,{children:"xs-security.json"})," to the application router."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'applications:\n  - name: approuter-scaffold-approuter\n    routes:\n      - route: approuter-scaffold-apps.cfapps.sap.hana.ondemand.com\n    path: .\n    memory: 128M\n    buildpacks:\n      - nodejs_buildpack\n    env:\n      TENANT_HOST_PATTERN: \'approuter-scaffold-(.*).cfapps.sap.hana.ondemand.com\'\n      destinations: \'[{"name":"approuter-scaffold","url":"approuter-scaffold.cfapps.sap.hana.ondemand.com","forwardAuthToken":true}]\'\n    services:\n      - approuter-scaffold-xsuaa\n'})}),"\n",(0,r.jsx)(t.h2,{id:"securing-your-application",children:"Securing Your Application"}),"\n",(0,r.jsxs)(t.p,{children:["To secure our application endpoints, we utilize the ",(0,r.jsx)(t.a,{href:"http://www.passportjs.org/packages/passport-jwt",children:"passport"})," library.\nIt lets us authenticate endpoints using a JSON web token."]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, we use the ",(0,r.jsx)(t.code,{children:"xsenv"})," library to retrieve our ",(0,r.jsx)(t.code,{children:"xsuaa"})," credentials and the ",(0,r.jsx)(t.code,{children:"xssec"})," library's ",(0,r.jsx)(t.code,{children:"JWTStrategy"})," object for the middleware."]}),"\n",(0,r.jsxs)(t.p,{children:["Below is a simple example, where we get the ",(0,r.jsx)(t.code,{children:"approuter-scaffold-xsuaa"})," which is bound to our application, use it in the ",(0,r.jsx)(t.code,{children:"JWTStrategy"}),", and then forward the middleware to the passport."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { JWTStrategy } from '@sap/xssec';\nimport { getServices } from '@sap/xsenv';\nimport * as passport from 'passport';\n\nconst xsuaa = getServices({\n  xsuaa: { name: 'approuter-scaffold-xsuaa' }\n}).xsuaa;\npassport.use(new JWTStrategy(xsuaa));\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.use(passport.initialize());\n  app.use(passport.authenticate('JWT', { session: false }));\n  await app.listen(process.env.PORT || 3000);\n}\nbootstrap();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"enabling-principal-propagation",children:"Enabling Principal Propagation"}),"\n",(0,r.jsx)(t.p,{children:"To enable principal propagation with this setup, we must forward the request to our endpoints."}),"\n",(0,r.jsxs)(t.p,{children:["First, we forward the request in our ",(0,r.jsx)(t.code,{children:"app.controller.ts"})," to our principal propagation endpoint."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"@Get('principal-business-partner')\n  getPrincipalBusinessPartner(\n    @Req() request: Request,\n  ): Promise<BusinessPartner[]> {\n    return this.principalBusinessPartnerService.getFiveBusinessPartners(\n      request,\n    );\n  }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then, we simply use the SAP Cloud SDK's ",(0,r.jsx)(t.code,{children:"retrieveJwt"})," function to extract the JWT from our request, and forward it to the ",(0,r.jsx)(t.code,{children:"execute"})," method."]}),"\n",(0,r.jsxs)(t.p,{children:["Below is an example using the ",(0,r.jsx)(t.code,{children:"BusinessPartnerService"}),", where we retrieve the top five business partners."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { Injectable } from '@nestjs/common';\nimport { retrieveJwt } from '@sap-cloud-sdk/connectivity';\nimport { Request } from 'express';\nimport { businessPartnerService } from './generated/business-partner-service';\n\n@Injectable()\nexport class PrincipalBusinessPartnerService {\n  async getFiveBusinessPartners(request: Request): Promise<BusinessPartner[]> {\n    return BusinessPartner.requestBuilder()\n      .getAll()\n      .top(5)\n      .execute({\n        destinationName: 'MY-DESTINATION',\n        jwt: retrieveJwt(request)\n      });\n  }\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);