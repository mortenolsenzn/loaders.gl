"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(v,l(l({ref:t},c),{},{components:r})):a.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(83117),n=(r(67294),r(3905));const o={},l="Overview",i={unversionedId:"modules/csv/README",id:"modules/csv/README",title:"Overview",description:"The @loaders.gl/csv module handles tabular data stored in CSV and TSV format",source:"@site/../docs/modules/csv/README.md",sourceDirName:"modules/csv",slug:"/modules/csv/",permalink:"/docs/modules/csv/",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/csv/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/arrow/"},next:{title:"Overview",permalink:"/docs/modules/compression/"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Loaders and Writers",id:"loaders-and-writers",level:2},{value:"Additional APIs",id:"additional-apis",level:2},{value:"Attributions",id:"attributions",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/csv")," module handles tabular data stored in CSV and TSV format\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Comma-separated_values"},"CSV/DSV file format"),". "),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @loaders.gl/core @loaders.gl/csv\n")),(0,n.kt)("h2",{id:"loaders-and-writers"},"Loaders and Writers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"modules/csv/docs/api-reference/csv-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"CSVLoader")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"modules/csv/docs/api-reference/csv-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"CSVWorkerLoader")))))),(0,n.kt)("h2",{id:"additional-apis"},"Additional APIs"),(0,n.kt)("p",null,"See table category."),(0,n.kt)("h2",{id:"attributions"},"Attributions"),(0,n.kt)("p",null,"CSVLoader is based on a fork of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mholt/PapaParse"},"papaparse")," module, under MIT license."))}u.isMDXComponent=!0}}]);