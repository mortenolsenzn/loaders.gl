"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,b=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(b,l(l({ref:t},d),{},{components:r})):a.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const i={},l="WMSCapabilitiesLoader",o={unversionedId:"modules/wms/api-reference/wms-capabilities-loader",id:"modules/wms/api-reference/wms-capabilities-loader",title:"WMSCapabilitiesLoader",description:"The WMSCapabilitiesLoader parses the XML-formatted response from the",source:"@site/../docs/modules/wms/api-reference/wms-capabilities-loader.md",sourceDirName:"modules/wms/api-reference",slug:"/modules/wms/api-reference/wms-capabilities-loader",permalink:"/docs/modules/wms/api-reference/wms-capabilities-loader",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/wms/api-reference/wms-capabilities-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WKTWriter",permalink:"/docs/modules/wkt/api-reference/wkt-writer"},next:{title:"XMLLoader",permalink:"/docs/modules/xml/api-reference/xml-loader"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Parsed Data Format",id:"parsed-data-format",level:2},{value:"Options",id:"options",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wmscapabilitiesloader"},"WMSCapabilitiesLoader"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v3.3-blue.svg?style=flat-square",alt:"From-3.3"}),(0,n.kt)("img",{src:"https://img.shields.io/badge/-BETA-teal.svg",alt:"BETA"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"WMSCapabilitiesLoader")," parses the XML-formatted response from the\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://www.opengeospatial.org/"},"OGC")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.ogc.org/standards/wms"},"WMS")," (Web Map Service) standard ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," request into a typed JavaScript data structure."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that the WMS standard is rather verbose and the XML responses can contain many rarely used metadata fields, not all of which are extracted by this loader. If this is a problem, it is possible to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"XMLLoader")," directly though the result will be untyped and not normalized.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"),(0,n.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},".xml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Format"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Web_Map_Service"},"WMS"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,n.kt)("td",{parentName:"tr",align:null},"Data structure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decoder Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Synchronous")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Worker Thread Support"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Streaming Support"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {WMSCapabilitiesLoader} from '@loaders.gl/wms';\nimport {load} from '@loaders.gl/core';\n\n// Form a WMS request\nconst url = `${WMS_SERVICE_URL}?REQUEST=GetCapabilities`;\n\nconst data = await load(url, WMSCapabilitiesLoader, options);\n")),(0,n.kt)("h2",{id:"parsed-data-format"},"Parsed Data Format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"/** All capabilities of a WMS service. Typed data structure extracted from XML */\nexport type WMSCapabilities = {\n  name: string;\n  title?: string;\n  abstract?: string;\n  keywords: string[];\n  layer: WMSLayer;\n  requests: Record<string, WMSRequest>;\n}\n\ntype WMSLayer = {\n  name: string;\n  title?: string;\n  srs?: string[];\n  boundingBox?: [number, number, number, number];\n  layers?: WMSLayer[];\n}\n\ntype WMSRequest = {\n  name: string;\n  mimeTypes: string[];\n}\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description")))))}u.isMDXComponent=!0}}]);