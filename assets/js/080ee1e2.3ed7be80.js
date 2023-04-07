"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const o={},l="DracoLoader",i={unversionedId:"modules/draco/api-reference/draco-loader",id:"modules/draco/api-reference/draco-loader",title:"DracoLoader",description:"The DracoLoader decodes a mesh or point cloud (maps of attributes) using DRACO compression.",source:"@site/../docs/modules/draco/api-reference/draco-loader.md",sourceDirName:"modules/draco/api-reference",slug:"/modules/draco/api-reference/draco-loader",permalink:"/docs/modules/draco/api-reference/draco-loader",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/draco/api-reference/draco-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSVLoader",permalink:"/docs/modules/csv/api-reference/csv-loader"},next:{title:"DracoWriter",permalink:"/docs/modules/draco/api-reference/draco-writer"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Dependencies",id:"dependencies",level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dracoloader"},"DracoLoader"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"DracoLoader")," decodes a mesh or point cloud (maps of attributes) using ",(0,n.kt)("a",{parentName:"p",href:"https://google.github.io/draco/"},"DRACO")," compression."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"),(0,n.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},".drc"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Binary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Format"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://google.github.io/draco/"},"Draco"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/specifications/category-mesh"},"Mesh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supported APIs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"parse"))))),(0,n.kt)("p",null,"Features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supports meshes and point clouds."),(0,n.kt)("li",{parentName:"ul"},"Supports custom attributes."),(0,n.kt)("li",{parentName:"ul"},"Extracts metadata dictionaries, both for the full mesh and for each attribute."),(0,n.kt)("li",{parentName:"ul"},"Supports all Draco metadata field types, including ",(0,n.kt)("inlineCode",{parentName:"li"},"Int32Array"),"."),(0,n.kt)("li",{parentName:"ul"},"Loads draco decoders dynamically from CDN (can optionally be bundled)."),(0,n.kt)("li",{parentName:"ul"},"Ability to prevent decompression of specific attributes (returns quantization or octahedron transform parameters).")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {DracoLoader} from '@loaders.gl/draco';\nimport {load} from '@loaders.gl/core';\n\nconst data = await load(url, DracoLoader, options);\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description")))),(0,n.kt)("h2",{id:"dependencies"},"Dependencies"),(0,n.kt)("p",null,"Draco libraries by default are loaded from CDN, but can be bundled and injected. See ","[modules/draco/docs]"," for details."))}u.isMDXComponent=!0}}]);