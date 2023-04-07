"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(83117),o=(r(67294),r(3905));const i={},l="Request Scheduler",a={unversionedId:"modules/loader-utils/api-reference/request-scheduler",id:"modules/loader-utils/api-reference/request-scheduler",title:"Request Scheduler",description:'The request scheduler enables an application to "issue" a large number of requests without flooding the browser\'s limited request queue.',source:"@site/../docs/modules/loader-utils/api-reference/request-scheduler.md",sourceDirName:"modules/loader-utils/api-reference",slug:"/modules/loader-utils/api-reference/request-scheduler",permalink:"/docs/modules/loader-utils/api-reference/request-scheduler",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/loader-utils/api-reference/request-scheduler.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Iterator Utilities",permalink:"/docs/modules/core/api-reference/iterator-utilities"},next:{title:"Loader Object",permalink:"/docs/specifications/loader-object-format"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor(options?: object)",id:"constructoroptions-object",level:3},{value:"scheduleRequest(handle: any, getPriority?: () =&gt; number): Promise&lt;{done: () =&gt; any)}&gt;;",id:"schedulerequesthandle-any-getpriority---number-promisedone---any",level:3},{value:"About Request Priorities",id:"about-request-priorities",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request-scheduler"},"Request Scheduler"),(0,o.kt)("p",{class:"badges"},(0,o.kt)("img",{src:"https://img.shields.io/badge/From-v2.2-blue.svg?style=flat-square",alt:"From-v2.2"})),(0,o.kt)("p",null,'The request scheduler enables an application to "issue" a large number of requests without flooding the browser\'s limited request queue.'),(0,o.kt)("p",null,'A getPriority callback is called on all outstanding requests whenever a slot frees up, allowing the application to reprioritize or even cancel "issued" requests if the application state has changed.'),(0,o.kt)("p",null,"Note: The request scheduler does not actually issue requests, it just lets apps know when the request can be issued without overwhelming the connection and the server."),(0,o.kt)("p",null,"A primary use case is to let the app reprioritize or cancel requests if circumstances change before the request can be scheduled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some information on browser ",(0,o.kt)("a",{parentName:"li",href:"https://docs.pushtechnology.com/cloud/latest/manual/html/designguide/solution/support/connection_limitations.html"},"request throttling"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To schedule a request so that it can be issued at a time when it can be immediately processed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const URL = '...';\nconst requestToken = await requestScheduler.scheduleRequest(URL);\nif (requestToken) {\n  await fetch(URL);\n  requestToken.done(); // NOTE: **must** be called for the next request in queue to resolve\n}\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"constructoroptions-object"},"constructor(options?: object)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),"?: string;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"throttleRequests"),"?: boolean;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxRequests"),"?: number;")),(0,o.kt)("h3",{id:"schedulerequesthandle-any-getpriority---number-promisedone---any"},"scheduleRequest(handle: any, getPriority?: () => number): Promise<{done: () => any)}>;"),(0,o.kt)("p",null,"Called by an application that wants to issue a request, without having it deeply queued by the browser"),(0,o.kt)("p",null,"When the returned promise resolved, it is OK for the application to issue a request.\nThe promise resolves to an object that contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," method.\nWhen the application's request has completed (or failed), the application must call the ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," function"),(0,o.kt)("p",null,"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"handle")," an arbitrary handle to identify the request, e.g. a URL string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPriority"),' will be called when request "slots" open up,\nallowing the caller to update priority or cancel the request\nHighest priority executes first, priority < 0 cancels the request')),(0,o.kt)("p",null,"Returns a promise that"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"resolves to an object (with a ",(0,o.kt)("inlineCode",{parentName:"li"},"done")," field) when the request can be issued without queueing. The application should issue the request and call ",(0,o.kt)("inlineCode",{parentName:"li"},"done()")," when completed."),(0,o.kt)("li",{parentName:"ul"},"resolves to ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," if the request has been cancelled (by the callback return < 0).\nIn this case the application should not issue the request.")),(0,o.kt)("h2",{id:"about-request-priorities"},"About Request Priorities"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getPriority")," callback controls priority of requests and also cancellation of outstanding requests."))}d.isMDXComponent=!0}}]);