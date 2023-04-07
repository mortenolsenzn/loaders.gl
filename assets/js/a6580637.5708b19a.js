"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[f]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(83117),i=(r(67294),r(3905));const a={},o="setPathPrefix",p={unversionedId:"modules/core/api-reference/set-path-prefix",id:"modules/core/api-reference/set-path-prefix",title:"setPathPrefix",description:"resolvePath(path String",source:"@site/../docs/modules/core/api-reference/set-path-prefix.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/set-path-prefix",permalink:"/docs/modules/core/api-reference/set-path-prefix",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/core/api-reference/set-path-prefix.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"writeFile",permalink:"/docs/modules/core/api-reference/write-file"},next:{title:"Binary Utilities",permalink:"/docs/modules/core/api-reference/binary-utilities"}},s={},l=[{value:"resolvePath(path : String) : String",id:"resolvepathpath--string--string",level:3},{value:"setPathPrefix(prefix : String)",id:"setpathprefixprefix--string",level:3},{value:"getPathPrefix() : String",id:"getpathprefix--string",level:3}],c={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setpathprefix"},"setPathPrefix"),(0,i.kt)("h3",{id:"resolvepathpath--string--string"},"resolvePath(path : String) : String"),(0,i.kt)("p",null,"Applies aliases and path prefix, in that order. Returns an updated path."),(0,i.kt)("h3",{id:"setpathprefixprefix--string"},"setPathPrefix(prefix : String)"),(0,i.kt)("p",null,"This sets a path prefix that is automatically prepended to relative path names provided to load functions."),(0,i.kt)("h3",{id:"getpathprefix--string"},"getPathPrefix() : String"),(0,i.kt)("p",null,"Returns the current path prefix set by ",(0,i.kt)("inlineCode",{parentName:"p"},"setPathPrefix"),"."))}u.isMDXComponent=!0}}]);