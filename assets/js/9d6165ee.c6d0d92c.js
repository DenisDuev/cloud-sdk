"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2514],{74434:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"environments/code/kyma-app-tabs","title":"kyma-app-tabs","description":"<Tabs defaultValue=\\"deployment\\"","source":"@site/docs-js/environments/code/kyma-app-tabs.mdx","sourceDirName":"environments/code","slug":"/environments/code/kyma-app-tabs","permalink":"/cloud-sdk/docs/js/environments/code/kyma-app-tabs","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/environments/code/kyma-app-tabs.mdx","tags":[],"version":"current","frontMatter":{}}');var r=a(74848),s=a(28453),o=a(11470),l=a(19365);const i={},c=void 0,u={},d=[];function p(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(o.A,{defaultValue:"deployment",values:[{label:"values.yaml",value:"values"},{label:"Chart.yaml",value:"Chart"},{label:"configmap.yaml",value:"configmap"},{label:"deployment.yaml",value:"deployment"},{label:"service.yaml",value:"service"}],children:[(0,r.jsx)(l.A,{value:"values",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"image:\n  repository: <YOUR_REPO>/k8s-e2e-app:latest # replace <YOUR_REPO> with your Docker repository\n  tag: latest\nresources:\n  requests:\n    memory: '256Mi'\n    cpu: '500m'\n  limits:\n    memory: '512Mi'\n    cpu: '1000m'\n"})})}),(0,r.jsx)(l.A,{value:"Chart",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v2\nname: app-chart\ndescription: A Helm chart for Kubernetes\n\n# A chart can be either an 'application' or a 'library' chart.\n#\n# Application charts are a collection of templates that can be packaged into versioned archives\n# to be deployed.\n#\n# Library charts provide useful utilities or functions for the chart developer. They're included as\n# a dependency of application charts to inject those utilities and functions into the rendering\n# pipeline. Library charts do not define any templates and therefore cannot be deployed.\ntype: application\n\n# This is the chart version. This version number should be incremented each time you make changes\n# to the chart and its templates, including the app version.\n# Versions are expected to follow Semantic Versioning (https://semver.org/)\nversion: 0.1.0\n\n# This is the version number of the application being deployed. This version number should be\n# incremented each time you make changes to the application. Versions are not expected to\n# follow Semantic Versioning. They should reflect the version the application is using.\n# It is recommended to use it with quotes.\nappVersion: '1.0.0'\n"})})}),(0,r.jsx)(l.A,{value:"configmap",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: {{ include "app-chart.fullname" . }}-config\ndata:\n  cloud_destination: {{ .Values.cloudDestination | quote }}\n  onpremise_destination: {{ .Values.onPremiseDestination | quote }}\n  principal_propagation_destination: {{ .Values.principalPropagationDestination | quote }}\n'})})}),(0,r.jsx)(l.A,{value:"service",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: {{ include "app-chart.fullname" . }}-svc\n  labels:\n    {{- include "app-chart.labels" . | nindent 4 }}\nspec:\n  ports:\n    - port: 8080\n      targetPort: 3000\n  selector:\n    {{- include "app-chart.selectorLabels" . | nindent 4 }}\n'})})}),(0,r.jsx)(l.A,{value:"deployment",className:"code-block-height-js thin-scrollbar",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ include "app-chart.fullname" . }}\n  labels:\n    {{- include "app-chart.labels" . | nindent 4 }}\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      {{- include "app-chart.selectorLabels" . | nindent 6 }}\n  template:\n    metadata:\n      labels:\n        {{- include "app-chart.selectorLabels" . | nindent 8 }}\n    spec:\n      {{- with .Values.imagePullSecrets }}\n      imagePullSecrets:\n        {{- toYaml . | nindent 8 }}\n      {{- end }}\n      serviceAccountName: {{ include "app-chart.serviceAccountName" . }}\n      containers:\n        - name: {{ .Chart.Name }}\n          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"\n          ports:\n            - containerPort: 3000\n          resources:\n            {{- toYaml .Values.resources | nindent 12 }}\n          env:\n            - name: CLOUD_DESTINATION\n              valueFrom:\n                configMapKeyRef:\n                  name: {{ include "app-chart.fullname" . }}-config\n                  key: cloud_destination\n            - name: ONPREMISE_DESTINATION\n              valueFrom:\n                configMapKeyRef:\n                  name: {{ include "app-chart.fullname" . }}-config\n                  key: onpremise_destination\n            - name: PRINCIPAL_PROPAGATION_DESTINATION\n              valueFrom:\n                configMapKeyRef:\n                  name: {{ include "app-chart.fullname" . }}-config\n                  key: principal_propagation_destination\n          volumeMounts:\n            - name: destination-volume\n              mountPath: {{ printf "/etc/secrets/sapcp/destination/%s" .Values.destinationBinding | quote }}\n              readOnly: true\n            - name: xsuaa-volume\n              mountPath: {{ printf "/etc/secrets/sapcp/xsuaa/%s" .Values.xsuaaBinding | quote }}\n              readOnly: true\n            - name: connectivity-volume\n              mountPath: {{ printf "/etc/secrets/sapcp/connectivity/%s" .Values.connectivityBinding | quote }}\n              readOnly: true\n      volumes:\n        - name: destination-volume\n          secret:\n            secretName: {{ .Values.destinationBinding | quote }}\n        - name: xsuaa-volume\n          secret:\n            secretName: {{ .Values.xsuaaBinding | quote }}\n        - name: connectivity-volume\n          secret:\n            secretName: {{ .Values.connectivityBinding | quote }}\n'})})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(96540),r=a(34164),s=a(23104),o=a(56347),l=a(205),i=a(57485),c=a(31682),u=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:a,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function y(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=l[a].value;r!==t&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:s}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function V(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function k(e){const n=(0,v.A)();return(0,g.jsx)(V,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);