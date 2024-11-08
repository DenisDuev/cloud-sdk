"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1755],{92106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"features/eslint-configuration","title":"Shared ESLint configuration","description":"How to use our recommended ESLint configuration","source":"@site/docs-js_versioned_docs/version-v1/features/eslint-configuration.mdx","sourceDirName":"features","slug":"/features/eslint-configuration","permalink":"/cloud-sdk/docs/js/v1/features/eslint-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/eslint-configuration.mdx","tags":[],"version":"v1","frontMatter":{"id":"eslint-configuration","title":"Shared ESLint configuration","sidebar_label":"Shared ESLint configuration","description":"How to use our recommended ESLint configuration","keywords":["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},"sidebar":"docsJsSidebar","previous":{"title":"Logging","permalink":"/cloud-sdk/docs/js/v1/features/logging"},"next":{"title":"Migrate to Kubernetes","permalink":"/cloud-sdk/docs/js/v1/guides/kubernetes"}}');var o=t(74848),s=t(28453);const r={id:"eslint-configuration",title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},c=void 0,d={},a=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The SAP Cloud SDK provides a configuration with our recommended ",(0,o.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," rules and plugin.\nIt extends the ",(0,o.jsx)(n.code,{children:"eslint:recommended"})," and ",(0,o.jsx)(n.code,{children:"@typescript-eslint/recommended"})," configurations.\nIt also uses the ",(0,o.jsx)(n.code,{children:"eslint-config-prettier"})," to avoid any formatting conflicts when using the highly recommended ",(0,o.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Install the ",(0,o.jsx)(n.code,{children:"@sap-cloud-sdk/eslint-config"})," package in your project.\nTo add the configuration please adjust your ESLint configuration (usually called ",(0,o.jsx)(n.code,{children:".eslintrc"})," or ",(0,o.jsx)(n.code,{children:".eslintrc.js"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "extends": "@sap-cloud-sdk"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"or if you want to combine this configuration with others:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "extends": ["example-config", "@sap-cloud-sdk"]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This configuration depends on plugins ",(0,o.jsx)(n.code,{children:"eslint-plugin-import"})," and ",(0,o.jsx)(n.code,{children:"eslint-plugin-unused-imports"}),", which need to be installed in your project."]}),"\n",(0,o.jsxs)(n.p,{children:["ESLint merges these shareable configurations with your configuration.\nAny rule configured in your ",(0,o.jsx)(n.code,{children:".eslintrc.js"})," will overwrite the setting for this rule in the shareable configuration."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);