"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8751],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},65799:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(83117),n=(o(67294),o(3905));const i={},a="Loader Options",l={unversionedId:"modules/core/api-reference/set-loader-options",id:"modules/core/api-reference/set-loader-options",title:"Loader Options",description:"Set or get the supplied options onto the current global options object",source:"@site/../docs/modules/core/api-reference/set-loader-options.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/set-loader-options",permalink:"/docs/modules/core/api-reference/set-loader-options",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/core/api-reference/set-loader-options.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"selectLoader",permalink:"/docs/modules/core/api-reference/select-loader"},next:{title:"registerLoaders",permalink:"/docs/modules/core/api-reference/register-loaders"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"setLoaderOptions(options: LoaderOptions) : void",id:"setloaderoptionsoptions-loaderoptions--void",level:3},{value:"getLoaderOptions() : LoaderOptions",id:"getloaderoptions--loaderoptions",level:3},{value:"Options",id:"options",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loader-options"},"Loader Options"),(0,n.kt)("p",null,"Set or get the supplied options onto the current global options object"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Bundling the entire ",(0,n.kt)("inlineCode",{parentName:"p"},"draco3d")," library (instead of loading it on-demand from CDN):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import draco from 'draco3d';\nimport {setLoaderOptions} from '@loaders.gl/core';\nsetLoaderOptions({\n  modules: {\n    draco3d\n  }\n});\n")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"setloaderoptionsoptions-loaderoptions--void"},"setLoaderOptions(options: LoaderOptions) : void"),(0,n.kt)("p",null,"Merges the supplied options into the current global options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),": See ",(0,n.kt)("a",{parentName:"li",href:"./loader-options"},(0,n.kt)("inlineCode",{parentName:"a"},"LoaderOptions")),".")),(0,n.kt)("h3",{id:"getloaderoptions--loaderoptions"},"getLoaderOptions() : LoaderOptions"),(0,n.kt)("p",null,"Returns current global options"),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"A loader object, that can contain a mix of options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"options defined by the ",(0,n.kt)("inlineCode",{parentName:"li"},"parse")," function can be specified."),(0,n.kt)("li",{parentName:"ul"},"options specific to any loaders can also be specified (in loader specific sub-objects).")),(0,n.kt)("p",null,"Please refer to the corresponding documentation page for for ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," and for each loader for details."))}u.isMDXComponent=!0}}]);