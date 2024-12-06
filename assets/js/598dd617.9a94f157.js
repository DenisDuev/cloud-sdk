"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[77707],{35150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"features/odata/generate-client","title":"Generate an OData client for JavaScript","description":"The OData client generator allows you to generate custom OData client libraries for OData services.","source":"@site/docs-js/features/odata/generate-odata-client.mdx","sourceDirName":"features/odata","slug":"/features/odata/generate-client","permalink":"/cloud-sdk/docs/js/v4/features/odata/generate-client","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/generate-odata-client.mdx","tags":[],"version":"current","frontMatter":{"id":"generate-client","title":"Generate an OData client for JavaScript","sidebar_label":"Generate an OData Client","keywords":["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},"sidebar":"docsJsSidebar","previous":{"title":"Overview","permalink":"/cloud-sdk/docs/js/v4/features/odata/overview"},"next":{"title":"Execute an OData request","permalink":"/cloud-sdk/docs/js/v4/features/odata/execute-request"}}');var s=n(74848),r=n(28453);const l={id:"generate-client",title:"Generate an OData client for JavaScript",sidebar_label:"Generate an OData Client",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","generate"]},a=void 0,o={},d=[{value:"Installation",id:"installation",level:2},{value:"Generate a Client Using the Command Line Interface",id:"generate-a-client-using-the-command-line-interface",level:2},{value:"Options",id:"options",level:2},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",level:2},{value:"npm Packages Versus Local Clients",id:"npm-packages-versus-local-clients",level:2},{value:"Transpilation",id:"transpilation",level:2},{value:"Prettier",id:"prettier",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The OData client generator allows you to generate custom OData client libraries for OData services.\nYou can then access these services from your code using the client libraries."}),"\n",(0,s.jsx)(t.p,{children:"You can use the SAP Cloud SDK generator both as a command-line interface (CLI) and programmatically."}),"\n",(0,s.jsxs)(t.p,{children:["All you need to use is a service metadata specification in the EDMX format (file ending can be ",(0,s.jsx)(t.code,{children:".edmx"})," or ",(0,s.jsx)(t.code,{children:".xml"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Check this ",(0,s.jsx)(t.a,{href:"/cloud-sdk/docs/js/v4/guides/api-business-hub-download-specification",children:"guide"})," for downloading a specification from SAP Business Accelerator Hub."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"Run this command in your project's terminal to install the generator as a development dependency`:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install -D @sap-cloud-sdk/generator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["It is recommended to install the generator as a local dependency, because global installations hide the used generator version and cause problems when transpiling to JavaScript.\nIf you must use a globally installed generator, install the",(0,s.jsx)(t.code,{children:"@types/node"})," and ",(0,s.jsx)(t.code,{children:"@sap-cloud-sdk/odata-v2"})," or ",(0,s.jsx)(t.code,{children:"@sap-cloud-sdk/odata-v4"})," package in your project to make the transpilation work.\nSee ",(0,s.jsx)(t.a,{href:"#transpilation",children:"Transpilation"})," for more details.\nIf you need to transpile sources without any local ",(0,s.jsx)(t.code,{children:"node_modules"}),", you must manually execute the ",(0,s.jsx)(t.code,{children:"tsc"})," compiler with a custom ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",children:"path mapping"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"generate-a-client-using-the-command-line-interface",children:"Generate a Client Using the Command Line Interface"}),"\n",(0,s.jsx)(t.p,{children:"The SAP Cloud SDK generator is primarily intended to be used on the command line."}),"\n",(0,s.jsx)(t.p,{children:"Run"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"npx generate-odata-client --input path/to/your/service-specifications --outputDir path/to/store/generated/modules\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Adapt the ",(0,s.jsx)(t.code,{children:"path/to/your/service-specifications"})," to the directory containing your service specifications in EDMX format, for example ",(0,s.jsx)(t.code,{children:"service-specifications/"}),".\nAlso adapt ",(0,s.jsx)(t.code,{children:"path/to/store/generated/modules"})," to your OData client directory for example ",(0,s.jsx)(t.code,{children:"odata-client"}),".\nThis will generate OData clients for all your service specifications."]}),"\n",(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.code,{children:"options-per-service.json"})," file is created using the ",(0,s.jsx)(t.code,{children:"--optionsPerService"})," option."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When set to a directory path, an ",(0,s.jsx)(t.code,{children:"options-per-service.json"})," file is read from or created in the given directory."]}),"\n",(0,s.jsx)(t.li,{children:"When set to a file path, the file is read or created with the given name."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This file is used for customizing subdirectory naming and contains a mapping from the original file name to the following information:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"directoryName"}),": the name of the subdirectory the client code will be generated into."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"packageName"}),": the name of the npm package, if a ",(0,s.jsx)(t.code,{children:"package.json"})," file is generated.\nThis information is optional."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"basePath"}),": the URL path to be prepended before every request (e.g. ",(0,s.jsx)(t.code,{children:"'/sap/opu/odata/sap/'"})," for SAP S/4HANA services).\nSAP Cloud SDK will try to determine this value from either the EDMX or Swagger file.\nHowever, if automatic determination fails, it will set the ",(0,s.jsx)(t.code,{children:"basePath"})," value to ",(0,s.jsx)(t.code,{children:"/"})," and log a warning message.\nYou can also manually specify the ",(0,s.jsx)(t.code,{children:"basePath"})," in the ",(0,s.jsx)(t.code,{children:"options-per-service.json"})," file and re-generate the client."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This information can be adjusted manually and ensure that every run of the generator produces the same names for the generation."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "path/to/your/service-specifications/MyService.edmx": {\n    "directoryName": "my-service",\n    "basePath": "/odata/v2",\n    "packageName": "my-service"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"By default, the generated module contains the following sources:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["TypeScript code (",(0,s.jsx)(t.code,{children:".ts"}),") representing request builders, entity representations, and if needed representations for complex types as well as function/action imports."]}),"\n",(0,s.jsxs)(t.li,{children:["All of the above as transpiled sources, including JavaScript sources (",(0,s.jsx)(t.code,{children:".js"}),"), type definition files (",(0,s.jsx)(t.code,{children:".d.ts"}),"), and sourcemap files (",(0,s.jsx)(t.code,{children:".js.map"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["An ",(0,s.jsx)(t.code,{children:".npmrc"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.code,{children:"typedoc.json"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.code,{children:"tsconfig.json"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The generation always includes the TypeScript sources.\nAll other files can be excluded from the generation - see the options below."}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"generate-odata-client --help"})," for additional options."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.th,{style:{textAlign:"left"},children:["Option ",(0,s.jsx)("div",{style:{width:"225px"}})]}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\xa0Default"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"-i"}),", ",(0,s.jsx)(t.code,{children:"--input"})," ",(0,s.jsx)(t.em,{children:"(required)"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0Specify the path to the directory or file containing the OData service definition(s) to generate clients for. Accepts definitions as XML and EDMX files. Throws an error if the path does not exist."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"-o"}),", ",(0,s.jsx)(t.code,{children:"--outputDir"})," ",(0,s.jsx)(t.em,{children:"(required)"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0Directory to save the generated code in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--optionsPerService"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0Set the path to a file containing the options per service. The configuration allows to set a ",(0,s.jsx)(t.code,{children:"directoryName"})," and ",(0,s.jsx)(t.code,{children:"packageName"})," for every service, identified by the path to the original file. It also makes sure that names do not change between generator runs. If a directory is passed, an ",(0,s.jsx)(t.code,{children:"options-per-service.json"})," file is read/created in this directory."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--overwrite"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0Exit when encountering a file that already exists. When set to true, it will be overwritten instead. Please note that compared to the ",(0,s.jsx)(t.code,{children:"--clearOutputDir"})," option, this will not delete outdated files."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--clearOutputDir"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0Deletes EVERYTHING in the specified output directory before generating code."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--generateTypedocJson"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0Generates a ",(0,s.jsx)(t.code,{children:"typedoc.json"}),' file for each package, used for the corresponding "doc" npm script.']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--packageJson"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0Generate a ",(0,s.jsx)(t.code,{children:"package.json"})," file, specifying dependencies and scripts for compiling and generating documentation."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--include"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"''"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0Glob describing additional files to be added to the each generated service directory - relative to ",(0,s.jsx)(t.code,{children:"input"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"-t"}),", ",(0,s.jsx)(t.code,{children:"--transpile"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0Transpile the generated TypeScript code. When enabled, a default ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," will be generated and used. It emits ",(0,s.jsx)(t.code,{children:".js"}),", ",(0,s.jsx)(t.code,{children:".js.map"})," and ",(0,s.jsx)(t.code,{children:".d.ts"})," files. To configure transpilation set ",(0,s.jsx)(t.code,{children:"--tsconfig"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--tsconfig"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"default tsconfig"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Replace the default ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," by passing a path to a custom configuration. By default, a ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," is only generated when transpilation is enabled (",(0,s.jsx)(t.code,{children:"--transpile"}),"). If a directory is passed, a ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," file is read from this directory."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--transpilationProcesses"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"16"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0Number of processes used for transpilation of JavaScript files."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"-p"}),", ",(0,s.jsx)(t.code,{children:"--prettierConfig"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"default prettier config"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0Configuration file for prettier if you want to change the default value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--verbose"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\xa0By default, only errors, warnings and important info logs will be displayed. If set to true, all logs will be displayed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"--skipValidation"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\xa0Generation will stop if objects need renaming due to non-unique conditions or conflicts with certain SDK reserved keywords (e.g. ",(0,s.jsx)(t.code,{children:"Entity"}),", ",(0,s.jsx)(t.code,{children:"Service"}),", etc.). If you enable this option, conflicts are resolved by appending postfixes like '_1'\""]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"-c"}),", ",(0,s.jsx)(t.code,{children:"--config"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Set the path to the file containing the options for generation. If other flags are used, they overwrite the options set in the configuration file. If a directory is passed, a ",(0,s.jsx)(t.code,{children:"config.json"})," file is read from this directory."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"generate-a-client-programmatically",children:"Generate a Client Programmatically"}),"\n",(0,s.jsx)(t.p,{children:"You can also use the generator programmatically.\nYou will have to provide the options."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { generate } from '@sap-cloud-sdk/generator';\n\n// Create your options, adapt the input & output directory as well as the package name according to your setup.\nconst input = 'service-specifications';\nconst outputDir = 'odata-client';\n\n// Create your project datastructure with all sourcefiles based on your options\nconst generatorConfig = {\n  overwrite: true,\n  transpile: false,\n  readme: false,\n  clearOutputDir: true,\n  generateTypedocJson: false,\n  packageJson: false\n  /* optional:\n    optionsPerService: 'test/directory',\n    include: 'glob of files to include'\n  */\n};\n\n// generate your project, you can also redefine options\ngenerate({\n  ...generatorConfig,\n  input,\n  outputDir\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"npm-packages-versus-local-clients",children:"npm Packages Versus Local Clients"}),"\n",(0,s.jsx)(t.p,{children:"The SAP Cloud SDK OData client generator generates TypeScript code.\nBy default, it creates only the TypeScript sources."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to use the generated client in your TypeScript code without sharing it, you can work with the default configuration.\nIf you work with JavaScript, you can enable and configure transpilation with the ",(0,s.jsx)(t.code,{children:"--transpile"})," and ",(0,s.jsx)(t.code,{children:"--tsconfig"})," flags."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to publish a generated client to an npm registry, in addition to transpiling, you will need a ",(0,s.jsx)(t.code,{children:"package.json"})," file for the client.\nYou can generate it with the ",(0,s.jsx)(t.code,{children:"--packageJson"})," flag or include a custom ",(0,s.jsx)(t.code,{children:"package.json"})," with the ",(0,s.jsx)(t.code,{children:"--include"})," flag.\nMake sure to check intellectual property regulations before publishing to a public registry."]}),"\n",(0,s.jsxs)(t.p,{children:["The generated clients depend on the ",(0,s.jsx)(t.code,{children:"@sap-cloud-sdk/odata-v2"})," or ",(0,s.jsx)(t.code,{children:"@sap-cloud-sdk/odata-v4"})," packages, depending on the OData version of the service.\nYou have to make sure there is a local reference to these packages by running:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install @sap-cloud-sdk/odata-v2\n"})}),"\n",(0,s.jsx)(t.p,{children:"or:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install @sap-cloud-sdk/odata-v4\n"})}),"\n",(0,s.jsx)(t.p,{children:"respectively."}),"\n",(0,s.jsx)(t.h2,{id:"transpilation",children:"Transpilation"}),"\n",(0,s.jsxs)(t.p,{children:["If you installed the generator globally and want to transpile the generated code, you have to install the required dependency (or ",(0,s.jsx)(t.code,{children:"devDependency"}),") for your client (",(0,s.jsx)(t.code,{children:"sap-cloud-sdk/odata-v2"})," or ",(0,s.jsx)(t.code,{children:"sap-cloud-sdk/odata-v4"}),") prior to generation.\nYou do this by running:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install -D @sap-cloud-sdk/odata-v2\n"})}),"\n",(0,s.jsx)(t.p,{children:"or:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install -D @sap-cloud-sdk/odata-v4\n"})}),"\n",(0,s.jsx)(t.p,{children:"respectively."}),"\n",(0,s.jsxs)(t.p,{children:["If you installed the generator as a ",(0,s.jsx)(t.code,{children:"devDependency"}),", transpilation will work without additional steps."]}),"\n",(0,s.jsx)(t.h2,{id:"prettier",children:"Prettier"}),"\n",(0,s.jsxs)(t.p,{children:["Since version 2.11.0, the SAP Cloud SDK runs prettier on the generated sources using a default prettier config.\nThe prettier formats only TypeScript files (",(0,s.jsx)(t.code,{children:".ts"})," and ",(0,s.jsx)(t.code,{children:".d.ts"}),") to avoid broken source maps.\nIf you are not happy with the configuration, you can provide a custom configuration using the ",(0,s.jsx)(t.code,{children:"--prettierConfig"})," command line argument.\nNote that this formatting is done in-memory before the generator emits the files, so no expensive additional I/O is required.\nAlternatively, you can execute a custom formatting step after the generation is finished."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that custom formatting steps could break source maps when you generate a JavaScript client (option ",(0,s.jsx)(t.code,{children:"--transpile"})," enabled).\nThe generated ",(0,s.jsx)(t.code,{children:".js"})," and ",(0,s.jsx)(t.code,{children:".map.js"})," files are not meant for humans to read and should be excluded from formatting."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);