"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3942],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||s;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<s;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47719:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var t=n(83117),o=(n(67294),n(3905));const s={},c="fetchProgress",a={unversionedId:"modules/core/api-reference/fetch-progress",id:"modules/core/api-reference/fetch-progress",title:"fetchProgress",description:"This function is still experimental",source:"@site/../docs/modules/core/api-reference/fetch-progress.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/fetch-progress",permalink:"/docs/modules/core/api-reference/fetch-progress",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/core/api-reference/fetch-progress.md",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"_fetchProgress(response : Response | Promise, onProgress : function, onDone : function, onError : function) : Response",id:"_fetchprogressresponse--response--promise-onprogress--function-ondone--function-onerror--function--response",level:2}],l={toc:p},u="wrapper";function f(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetchprogress"},"fetchProgress"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This function is still experimental")),(0,o.kt)("p",null,"A function that tracks a fetch response object and calls ",(0,o.kt)("inlineCode",{parentName:"p"},"onProgress")," callbacks."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {_fetchProgress} from '@loaders.gl/core';\n\nfunction onProgress(percent, {loadedBytes, totalBytes}) {\n  console.log(`${percent}% ${Math.round(loadedBytes/1000)} of ${Math.round(totalBytes/1000)} Kbytes`);\n}\n\nasync function main() {\n  const response = await _fetchProgress(fetch(PROGRESS_IMAGE_URL, onProgress),\n  const data = await response.arrayBuffer();\n  // At this point, onProgress will have been called one or more times.\n  ...\n}\n")),(0,o.kt)("h2",{id:"_fetchprogressresponse--response--promise-onprogress--function-ondone--function-onerror--function--response"},"_","fetchProgress(response : Response | Promise, onProgress : function, onDone : function, onError : function) : Response"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onProgress: (percent: number, {loadedBytes : number, totalBytes : number}) => void")))}f.isMDXComponent=!0}}]);