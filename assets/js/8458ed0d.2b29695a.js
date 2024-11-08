"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7859],{21026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"environments/code/kyma-approuter-tabs","title":"kyma-approuter-tabs","description":"<Tabs defaultValue=\\"deployment\\"","source":"@site/docs-js/environments/code/kyma-approuter-tabs.mdx","sourceDirName":"environments/code","slug":"/environments/code/kyma-approuter-tabs","permalink":"/cloud-sdk/docs/js/environments/code/kyma-approuter-tabs","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/environments/code/kyma-approuter-tabs.mdx","tags":[],"version":"current","frontMatter":{}}');var r=t(74848),s=t(28453),o=t(11470),l=t(19365);const i={},u=void 0,c={},d=[];function p(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(o.A,{defaultValue:"deployment",values:[{label:"values.yaml",value:"values"},{label:"Chart.yaml",value:"Chart"},{label:"configmap.yaml",value:"configmap"},{label:"deployment.yaml",value:"deployment"},{label:"service.yaml",value:"service"}],children:[(0,r.jsx)(l.A,{value:"values",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"xsuaaBinding:\n  config:\n    idp:\n    pattern:\n  image:\n    repository: <YOUR_REPO>/k8s-approuter:latest # replace <YOUR_REPO> with your Docker repository\n    tag: latest\n  resources:\n    requests:\n      memory: '256Mi'\n      cpu: '500m'\n    limits:\n      memory: '512Mi'\n      cpu: '1000m'\n"})})}),(0,r.jsx)(l.A,{value:"Chart",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v2\nname: approuter-chart\ndescription: A Helm chart for Kubernetes\n\n# A chart can be either an 'application' or a 'library' chart.\n#\n# Application charts are a collection of templates that can be packaged into versioned archives\n# to be deployed.\n#\n# Library charts provide useful utilities or functions for the chart developer. They're included as\n# a dependency of application charts to inject those utilities and functions into the rendering\n# pipeline. Library charts do not define any templates and therefore cannot be deployed.\ntype: application\n\n# This is the chart version. This version number should be incremented each time you make changes\n# to the chart and its templates, including the app version.\n# Versions are expected to follow Semantic Versioning (https://semver.org/)\nversion: 0.1.0\n\n# This is the version number of the application being deployed. This version number should be\n# incremented each time you make changes to the application. Versions are not expected to\n# follow Semantic Versioning. They should reflect the version the application is using.\n# It is recommended to use it with quotes.\nappVersion: '1.0.0'\n"})})}),(0,r.jsx)(l.A,{value:"configmap",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: {{ include "approuter-chart.fullname" . }}-config\ndata:\n  {{- if .Values.config.idp }}\n  xs-app.json: {{ printf "{\\"welcomeFile\\":\\"/web-pages/index.html\\",\\"routes\\":[{\\"source\\":\\"/backend-app/(.*)\\",\\"target\\":\\"$1\\",\\"destination\\":\\"backend\\",\\"identityProvider\\":\\"%s\\"},{\\"source\\":\\"/web-pages/(.*)\\",\\"target\\":\\"$1\\",\\"localDir\\":\\"static-resources\\",\\"identityProvider\\":\\"%s\\"}]}" .Values.config.idp .Values.config.idp | toPrettyJson }}\n  {{- else }}\n  xs-app.json: {{ .Values.config.json | toPrettyJson | quote }}\n  {{ end -}}\n'})})}),(0,r.jsx)(l.A,{value:"service",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: {{ include "approuter-chart.fullname" . }}-svc\n  labels:\n    {{- include "approuter-chart.labels" . | nindent 4 }}\nspec:\n  ports:\n    - port: 8080\n      targetPort: 5000\n  selector:\n    {{- include "approuter-chart.selectorLabels" . | nindent 4 }}\n'})})}),(0,r.jsx)(l.A,{value:"deployment",className:"code-block-height-js thin-scrollbar",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ include "approuter-chart.fullname" . }}\n  labels:\n    {{- include "approuter-chart.labels" . | nindent 4 }}\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      {{- include "approuter-chart.selectorLabels" . | nindent 6 }}\n  template:\n    metadata:\n      labels:\n        {{- include "approuter-chart.selectorLabels" . | nindent 8 }}\n    spec:\n      {{- with .Values.imagePullSecrets }}\n      imagePullSecrets:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n      serviceAccountName: {{ include "approuter-chart.serviceAccountName" . }}\n      containers:\n        - name: {{ .Chart.Name }}\n          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"\n          ports:\n            - containerPort: 5000\n          resources:\n            {{- toYaml .Values.resources | nindent 12 }}\n          env:\n            - name: PORT\n              value: "5000"\n            - name: destinations\n              value: \'[{"name":"backend", "url":"http://{{ printf "%s-%s" .Release.Name "app-chart" | trunc 63 | trimSuffix "-" }}-svc:8080/", "forwardAuthToken": true}]\'\n            - name: TENANT_HOST_PATTERN\n              value: {{ .Values.config.pattern | quote }}\n          volumeMounts:\n            - name: xsuaa-volume\n              mountPath: {{ printf "/etc/secrets/sapcp/xsuaa/%s" .Values.xsuaaBinding | quote}}\n              readOnly: true\n            - name: approuter-volume\n              mountPath: "/usr/src/app/xs-app.json"\n              subPath: "xs-app.json"\n              readOnly: true\n      volumes:\n        - name: xsuaa-volume\n          secret:\n            secretName: {{ .Values.xsuaaBinding | quote}}\n        - name: approuter-volume\n          configMap:\n            name: {{ include "approuter-chart.fullname" . }}-config\n            items:\n              - key: xs-app.json\n                path: xs-app.json\n\n\n'})})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),r=t(34164),s=t(23104),o=t(56347),l=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function V(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(V,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);