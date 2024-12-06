"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[79022],{12151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guides/trust-and-keystores","title":"How the SAP Cloud SDK handles Trust and Keystores","description":"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.","source":"@site/docs-js_versioned_docs/version-v1/guides/trust-and-key-stores.mdx","sourceDirName":"guides","slug":"/guides/trust-and-keystores","permalink":"/cloud-sdk/docs/js/v1/guides/trust-and-keystores","draft":false,"unlisted":false,"editUrl":"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/guides/trust-and-key-stores.mdx","tags":[],"version":"v1","frontMatter":{"id":"trust-and-keystores","title":"How the SAP Cloud SDK handles Trust and Keystores","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Trust and Keystores","description":"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.","keywords":["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript","Keystore","Truststore"]},"sidebar":"docsJsSidebar","previous":{"title":"Use the SAP Cloud SDK in the Browser","permalink":"/cloud-sdk/docs/js/v1/guides/browser"},"next":{"title":"Using the SAP Application Router","permalink":"/cloud-sdk/docs/js/v1/guides/approuter"}}');var i=n(74848),o=n(28453);const r={id:"trust-and-keystores",title:"How the SAP Cloud SDK handles Trust and Keystores",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Trust and Keystores",description:"This article describes how to configure trust and keystores in the SAP Business Technology Platform and how the SAP Cloud SDK handles them.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript","Keystore","Truststore"]},a=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Formats and Naming",id:"formats-and-naming",level:3},{value:"Classic TLS / One-Way SSL",id:"classic-tls--one-way-ssl",level:3},{value:"Mutual TLS (mTLS) / Two-Way SSL",id:"mutual-tls-mtls--two-way-ssl",level:3},{value:"Truststore Configuration",id:"truststore-configuration",level:2},{value:"Keystore Configuration",id:"keystore-configuration",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The essence of web applications is communication between two parties.\nThese two parties could be a server and a client, two servers, or any other combination.\nIn the communication you want to ensure that:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"You are talking to the party you expect to talk to."}),"\n",(0,i.jsx)(t.li,{children:"The content of your conversation is securely encrypted and therefore private."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To ensure this the secure socket layer (SSL), later called transport layer security (TLS), was developed.\nIf you want to add this security layer to your request you use ",(0,i.jsx)(t.code,{children:"HTTPS"})," instead of ",(0,i.jsx)(t.code,{children:"HTTP"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The method to achieve both points above (trust and privacy) are private and public keys.\nSuch keys offer the following properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You can encrypt something with one key, but you can decrypt it only with the counterpart."}),"\n",(0,i.jsx)(t.li,{children:"You can distribute one key but you can not derive the counterpart from the distributed one."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The process of encrypting something with the private key is sometimes called ",(0,i.jsx)(t.code,{children:"signing"})," because everybody can check the signature with the public key.\nThe format of the private and public keys are certificates that provide additional information like:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"the used encryption algorithm"}),"\n",(0,i.jsx)(t.li,{children:"the issuer of the key pair"}),"\n",(0,i.jsx)(t.li,{children:"the validity of the key"}),"\n",(0,i.jsx)(t.li,{children:"the domain the key was issued for"}),"\n",(0,i.jsx)(t.li,{children:"etc."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"formats-and-naming",children:"Formats and Naming"}),"\n",(0,i.jsx)(t.p,{children:"We already introduced terms like certificates for the public and private keys.\nHowever, we would like to introduce a few more terms:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Keystore"}),": A keystore is an object containing keys.\nUsually, these are private and public key pairs as introduced above, but they may contain a certificate instead.\nYou need a password to open a keystore.\nTypical formats are ",(0,i.jsx)(t.code,{children:".JKS"}),", ",(0,i.jsx)(t.code,{children:".P12"}),", ",(0,i.jsx)(t.code,{children:".PFCKS"}),", and ",(0,i.jsx)(t.code,{children:".PKCS7"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Truststore"}),": A truststore contains public keys like certificates.\nSome formats allow you to protect the trust store with a password.\nTypical formats are ",(0,i.jsx)(t.code,{children:".JKS"}),", ",(0,i.jsx)(t.code,{children:".CRT"}),", ",(0,i.jsx)(t.code,{children:".PEM"}),", ",(0,i.jsx)(t.code,{children:".PUB"}),", and ",(0,i.jsx)(t.code,{children:".DER"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For X.509 certificate there are two encodings: base64 ASCII (e.g. ",(0,i.jsx)(t.code,{children:".PEM"}),") and binary (e.g. ",(0,i.jsx)(t.code,{children:".DER"}),").\nThe content of a PEM file looks like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQGHcPvmUGa79M6pM42bGFYjANBgkqhkiG9wA\n\u2026.\nLvHPhNDM3rMsLu06agF4JTbO8ANYtWQTx0PVrZKJu+8fcIaUp7MVBIVZ\n-----END CERTIFICATE-----\n"})}),"\n",(0,i.jsx)(t.h3,{id:"classic-tls--one-way-ssl",children:"Classic TLS / One-Way SSL"}),"\n",(0,i.jsx)(t.p,{children:"The typical situation is that a client requests something from a public server and wants to be sure that the server is not somebody else.\nThe server does not care about the identity of the client.\nThe identity is verified in the following way:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Server presents the public key (certificate) and some signed content to the client."}),"\n",(0,i.jsx)(t.li,{children:"Client checks that the domain in the certificate matches the requested resource."}),"\n",(0,i.jsxs)(t.li,{children:["Client checks that the certificate issuer is on the list of trusted ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Certificate_authority",children:"certificate authorities (CA)"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Client checks that the content was signed with the public key."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If all checks have passed, the server is trustworthy.\nCreating a secure connection is possible using private and public keys.\nFor an encrypted connection, you need to interchange a secret.\nAn initial secret can be encrypted using the public certificate and sent back to the server.\nThis is the starting point for a private connection between client and server."}),"\n",(0,i.jsx)(t.h3,{id:"mutual-tls-mtls--two-way-ssl",children:"Mutual TLS (mTLS) / Two-Way SSL"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes you would also like to verify the identity of the client.\nYou can do this via a username and password or some authentication token.\nHowever, you can also use a private and public key pair to do that."}),"\n",(0,i.jsxs)(t.p,{children:["You would store the public part of your client certificate on the server.\nWhen sending a request you then access your keystore and sign your request with the private part.\nThis is called ",(0,i.jsx)(t.code,{children:"client certificate authentication"})," or two-way SSL because the identity of the server and client is verified using private and public keys."]}),"\n",(0,i.jsx)(t.h2,{id:"truststore-configuration",children:"Truststore Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["In most cases, your server will use a certificate from trusted CAs and one-way SSL just works without additional actions.\nSometimes this is impossible and locally created key pairs also call ",(0,i.jsx)(t.code,{children:"self-signed certificates"})," are used.\nPer default, browsers and node clients do not trust such a certificate.\nYou will encounter errors like:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Error: self-signed certificate in certificate chain.\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In such a case you need to add the self-signed certificate to the ",(0,i.jsx)(t.code,{children:"ca"})," property of the ",(0,i.jsx)(t.a,{href:"https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions",children:"node http client"}),".\nThe SAP Cloud SDK does this for you if you maintain the truststore configuration via the destination service.\nYou have to do the following steps:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Upload your certificate ",(0,i.jsx)(t.a,{href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/df1bb55a526942b9bee78fea2ebb3162.html",children:"to destinations sections of the subaccount"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Maintain the ",(0,i.jsx)(t.code,{children:"TrustStoreLocation"})," property on the destination and ",(0,i.jsx)(t.a,{href:"https://help.sap.com/docs/CP_CONNECTIVITY/b865ed651e414196b39f8922db2122c7/3f1247537c1a4f069235ee63633659c5.html",children:"select the uploaded certificate"}),".\nThe password value is only relevant for the java keys store format (JKS)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Note that you can also upload certificates in the destination service instance.\nThe SAP Cloud SDK searches the subaccount first and only if no certificate with the given name is found proceeds to the instance certificates."}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["The SAP Cloud SDK for JavaScript supports only ",(0,i.jsx)(t.code,{children:".pem"})," as certificate format."]})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["The SAP Cloud SDK also considers the ",(0,i.jsx)(t.code,{children:"TrustAll"})," property on the destination.\nThis leads to ",(0,i.jsx)(t.code,{children:"rejectUnauthorized: false"})," in the node client and should be used with great caution.\nIf you trust everybody, you are vulnerable to man-in-the-middle attacks.\nAvoid this option if possible."]})}),"\n",(0,i.jsx)(t.h2,{id:"keystore-configuration",children:"Keystore Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["As discussed above you can also use a certificate to authenticate the client.\nThis is the mentioned two-way SSL scenario and is called ",(0,i.jsx)(t.code,{children:"clientCertificateAuthentication"})," in the destination service.\nThe SAP Cloud SDK supports this authentication flow.\nYou have to do the following steps:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Upload the keystore in the destinations section of the subaccount."}),"\n",(0,i.jsxs)(t.li,{children:["Configure the destination to use ",(0,i.jsx)(t.a,{href:"https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/4e13a04147314e8e9e54321f25d93fdc.html",children:"ClientCertificateAuthentication"})," and provide the keystore information like keystore name and password."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["The SAP Cloud SDK for JavaScript only supports formats ",(0,i.jsx)(t.code,{children:".P12"})," and ",(0,i.jsx)(t.code,{children:".PFX"})," for the keystore."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);