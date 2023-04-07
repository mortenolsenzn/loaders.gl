"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4719],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(r),s=a,g=c["".concat(p,".").concat(s)]||c[s]||u[s]||o;return r?n.createElement(g,l(l({ref:e},m),{},{components:r})):n.createElement(g,l({ref:e},m))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},63090:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(83117),a=(r(67294),r(3905));const o={},l="DracoWriter",i={unversionedId:"modules/draco/images/draco-writer",id:"modules/draco/images/draco-writer",title:"DracoWriter",description:"The DracoWriter encodes a mesh or point cloud (maps of attributes) using Draco3D compression.",source:"@site/../docs/modules/draco/images/draco-writer.md",sourceDirName:"modules/draco/images",slug:"/modules/draco/images/draco-writer",permalink:"/docs/modules/draco/images/draco-writer",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/draco/images/draco-writer.md",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}],m={toc:d},c="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dracowriter"},"DracoWriter"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DracoWriter")," encodes a mesh or point cloud (maps of attributes) using ",(0,a.kt)("a",{parentName:"p",href:"https://google.github.io/draco/"},"Draco3D")," compression."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Loader"),(0,a.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".drc"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File Typoe"),(0,a.kt)("td",{parentName:"tr",align:null},"Binary")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"docs/specifications/category-mesh"},"Mesh"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File Format"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://google.github.io/draco/"},"Draco"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Encoder Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Synchronous")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Worker Thread Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Streaming Support"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {DracoWriter} from '@loaders.gl/draco';\nimport {encode} from '@loaders.gl/core';\n\nconst mesh = {\n  attributes: {\n    POSITION: {...}\n  }\n};\n\nconst data = await encode(mesh, DracoWriter, options);\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pointcloud")),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," to compress pointclouds (mode=",(0,a.kt)("inlineCode",{parentName:"td"},"0")," and no ",(0,a.kt)("inlineCode",{parentName:"td"},"indices"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"method")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MESH_EDGEBREAKER_ENCODING")),(0,a.kt)("td",{parentName:"tr",align:null},"set Draco encoding method (applies to meshes only).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"speed")),(0,a.kt)("td",{parentName:"tr",align:null},"[Number, Number]"),(0,a.kt)("td",{parentName:"tr",align:null},"set Draco speed options."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"log")),(0,a.kt)("td",{parentName:"tr",align:null},"Function"),(0,a.kt)("td",{parentName:"tr",align:null},"callback for debug info."),(0,a.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);