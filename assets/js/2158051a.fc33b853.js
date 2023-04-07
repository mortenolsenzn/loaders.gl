"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3462],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32353:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(83117),a=(t(67294),t(3905));const o={},l="parseSync",i={unversionedId:"modules/core/api-reference/parse-sync",id:"modules/core/api-reference/parse-sync",title:"parseSync",description:"Synchronous parsing is not supported by all loaders. Refer to the documentation for each loader.",source:"@site/../docs/modules/core/api-reference/parse-sync.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/parse-sync",permalink:"/docs/modules/core/api-reference/parse-sync",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/core/api-reference/parse-sync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"parse",permalink:"/docs/modules/core/api-reference/parse"},next:{title:"parseInBatches",permalink:"/docs/modules/core/api-reference/parse-in-batches"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>parseSync(data: ArrayBuffer | String, loaders: Loader | Loader[], options?: LoaderOptions, url?: String]]) : any</code>",id:"parsesyncdata-arraybuffer--string-loaders-loader--loader-options-loaderoptions-url-string--any",level:3}],c={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parsesync"},"parseSync"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Synchronous parsing is not supported by all loaders. Refer to the documentation for each loader.")),(0,a.kt)("p",null,"For supporting loaders, the synchronous ",(0,a.kt)("inlineCode",{parentName:"p"},"parseSync")," function works on already loaded data."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {fetchFile, parseSync} from '@loaders.gl/core';\nimport {OBJLoader} from '@loaders.gl/obj';\n\nconst response = await fetchFile(url);\nconst arraybuffer = await response.arrayBuffer();\n\ndata = parseSync(arraybuffer, OBJLoader);\n// Application code here\n...\n")),(0,a.kt)("p",null,"Handling errors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const data = await parseSync(data);\n} catch (error) {\n  console.log(error);\n}\n")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"parsesyncdata-arraybuffer--string-loaders-loader--loader-options-loaderoptions-url-string--any"},(0,a.kt)("inlineCode",{parentName:"h3"},"parseSync(data: ArrayBuffer | String, loaders: Loader | Loader[], options?: LoaderOptions, url?: String]]) : any")),(0,a.kt)("p",null,"Parses data synchronously using the provided loader, if possible. If not, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", in which case asynchronous parsing is required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),": already loaded data, either in binary or text format. This parameter can be any of the following types:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Response"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," response object returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"fetchFile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ArrayBuffer"),": Parse from binary data in an array buffer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String"),": Parse from text data in a string. (Only works for loaders that support textual input)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Iterator"),": Iterator that yeilds binary (",(0,a.kt)("inlineCode",{parentName:"li"},"ArrayBuffer"),") chunks or string chunks (string chunks only work for loaders that support textual input).\ncan also be supplied."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loaders"),": can be a single loader or an array of loaders. If ommitted, will use the list of registered loaders (see ",(0,a.kt)("inlineCode",{parentName:"li"},"registerLoaders"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": See ",(0,a.kt)("a",{parentName:"li",href:"./loader-options"},(0,a.kt)("inlineCode",{parentName:"a"},"LoaderOptions")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url"),": optional, assists in the autoselection of a loader if multiple loaders are supplied to ",(0,a.kt)("inlineCode",{parentName:"li"},"loader"),".")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Return value depends on the ",(0,a.kt)("em",{parentName:"li"},"loader object")," category")))}u.isMDXComponent=!0}}]);