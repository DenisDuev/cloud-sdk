"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[366],{90113:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"features/error-handling","title":"Error Handling","description":"How to work with errors thrown by the SAP Cloud SDK","source":"@site/docs-js/features/error-handling.mdx","sourceDirName":"features","slug":"/features/error-handling","permalink":"/cloud-sdk/docs/js/features/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/error-handling.mdx","tags":[],"version":"current","frontMatter":{"id":"error-handling","title":"Error Handling","sidebar_label":"Error Handling","description":"How to work with errors thrown by the SAP Cloud SDK","keywords":["sap","cloud","sdk","JavaScript","TypeScript","error","cause","root cause"]},"sidebar":"docsJsSidebar","previous":{"title":"Middleware","permalink":"/cloud-sdk/docs/js/features/middleware"},"next":{"title":"Logging","permalink":"/cloud-sdk/docs/js/features/logging"}}');var n=s(74848),t=s(28453);const a={id:"error-handling",title:"Error Handling",sidebar_label:"Error Handling",description:"How to work with errors thrown by the SAP Cloud SDK",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","cause","root cause"]},i=void 0,d={},c=[{value:"Debug <code>AxiosError</code>",id:"debug-axioserror",level:2}];function l(e){const r={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["There are many reasons for errors to occur when developing software.\nThe SAP Cloud SDK tries to provide as much information as possible and necessary to understand what caused an error.\nGenerally speaking, there is no difference in handling errors when working with the SAP Cloud SDK.\nHowever, some errors are caused by underlying problems.\nIn these cases, the SAP Cloud SDK throws an ",(0,n.jsx)(r.code,{children:"ErrorWithCause"}),", that allows access to the immediate cause and root cause of this error.\nThese can be accessed by the ",(0,n.jsx)(r.code,{children:"cause"})," and ",(0,n.jsx)(r.code,{children:"rootCause"})," properties on ",(0,n.jsx)(r.code,{children:"ErrorWithCause"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The example below shows how to create a business partner entity.\nThe destination is set to ",(0,n.jsx)(r.code,{children:"https://example.com"}),".\nAs this is not an SAP S/4HANA system, this will fail and the error reveals the cause and root cause of the failure."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { businessPartnerService } from './generated/business-partner-service';\nconst { businessPartnerApi } = businessPartnerService();\n\nbusinessPartnerApi\n  .requestBuilder()\n  .create(BusinessPartner.builder().build())\n  .execute({ url: 'https://example.com' })\n  .catch(err => {\n    console.log('Error:', err.message);\n    console.log('Cause:', err.cause?.message);\n    console.log('Root cause:', err.rootCause?.message);\n  });\n"})}),"\n",(0,n.jsx)(r.p,{children:"The example above will yield the following output:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Error: Create request failed!\nCause: post request to https://example.com/sap/opu/odata/sap/API_BUSINESS_PARTNER failed!\nRoot cause: Request failed with status code 404\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The final error is an ",(0,n.jsx)(r.code,{children:"ErrorWithCause"})," that was caused by another ",(0,n.jsx)(r.code,{children:"ErrorWithCause"}),".\nThe root cause is an ",(0,n.jsx)(r.code,{children:"Error"})," and reveals that the requested URL does not exist."]}),"\n",(0,n.jsxs)(r.h2,{id:"debug-axioserror",children:["Debug ",(0,n.jsx)(r.code,{children:"AxiosError"})]}),"\n",(0,n.jsxs)(r.p,{children:['A common error message is "Request failed with status code XXX", which is a typical error message of ',(0,n.jsx)(r.code,{children:"AxiosError"}),".\nIt might occur, when sending an HTTP request via ",(0,n.jsx)(r.code,{children:"axios"})," client, and fails due to e.g., the following reasons:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"authentication failed (401)"}),"\n",(0,n.jsx)(r.li,{children:"unauthorized request (403)"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["However, instead of this general error message, the HTTP response body contains more meaningful details of the error.\nYou can check the example below about how to print the response body, when the root cause is an ",(0,n.jsx)(r.code,{children:"AxiosError"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"businessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .top(1)\n  .addCustomHeaders({ APIKey: 'my-api-key' })\n  .execute({ url: 'https://sandbox.api.sap.com/s4hanacloud' })\n  .catch(err => {\n    console.log('Message:', err.rootCause?.message);\n    console.log('Response body:', err.rootCause?.response?.data);\n  });\n"})}),"\n",(0,n.jsx)(r.p,{children:"The code snippets above will result in the following output, when the request is sent during a planned downtime."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Message: Request failed with status code 503\nResponse body: {\n  code: 'SERVICE_UNAVAILABLE',\n  message: 'From XXX until XXX there is a planned downtime for the API sandbox system. During this period you cannot use the Try it Out feature on our API sandbox system to test an API service.'\n}\n"})}),"\n",(0,n.jsxs)(r.admonition,{type:"tip",children:[(0,n.jsx)(r.p,{children:"If you want to see the complete root cause of an error object, add the following log statement:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"console.log('Complete root cause error object:', err.rootCause);\n"})})]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>i});var o=s(96540);const n={},t=o.createContext(n);function a(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);