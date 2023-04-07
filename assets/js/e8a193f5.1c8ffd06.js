"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=r(83117),n=(r(67294),r(3905));const l={},a="@loaders.gl/potree",i={unversionedId:"modules/potree/README",id:"modules/potree/README",title:"@loaders.gl/potree",description:"The potree loaders are still under development and are not yet considered ready for use.",source:"@site/../docs/modules/potree/README.md",sourceDirName:"modules/potree",slug:"/modules/potree/",permalink:"/docs/modules/potree/",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/potree/README.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"Attribution",id:"attribution",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loadersglpotree"},"@loaders.gl/potree"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The potree loaders are still under development and are not yet considered ready for use.")),(0,n.kt)("p",null,"Support for loading and traversing ",(0,n.kt)("a",{parentName:"p",href:"http://potree.org/"},"potree")," format point clouds."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @loaders.gl/potree\nnpm install @loaders.gl/core\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Intended usage only, not yet working!")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import {load} from `@loaders.gl/core`;\nimport {PotreeLoader} from `@loaders.gl/potree`;\nimport {Tileset3D} from `@loaders.gl/category-3d-tiles`;\n\nconst potree = await load(POTREE_URL);\nconst tileset = new Tileset3D(potree);\nconst tilesToRender = tileset.traverse(frameData);\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"This modules provides the following exports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PotreeHierarchyChunkLoader")," for the hierarchy indices")),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"The plan is to provide the following loaders/writers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PotreeLoader")," for individual tiles")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PotreeLoader")," is intended to work with the 3d tileset classes in the ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/3d-tiles")," module."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Tileset3D")," class will be generalized to accept loaded potree tilesets.")),(0,n.kt)("h2",{id:"attribution"},"Attribution"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"PotreeLoader")," is a fork of Markus Schuetz' potree code (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/potree/potree"},"https://github.com/potree/potree"),") under BSD-2 clause license."))}c.isMDXComponent=!0}}]);