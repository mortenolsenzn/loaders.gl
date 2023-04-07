"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const i={},l="WMTS Overview",o={unversionedId:"modules/wms/formats/wmts",id:"modules/wms/formats/wmts",title:"WMTS Overview",description:"The WMTS (Web Map Tile Service) is a standardized protocol for serving pre-rendered or run-time computed georeferenced map tiles over the Internet.",source:"@site/../docs/modules/wms/formats/wmts.md",sourceDirName:"modules/wms/formats",slug:"/modules/wms/formats/wmts",permalink:"/docs/modules/wms/formats/wmts",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/wms/formats/wmts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WMS Overview",permalink:"/docs/modules/wms/formats/wms"},next:{title:"WFS Overview",permalink:"/docs/modules/wms/formats/wfs"}},s={},p=[{value:"Characteristics",id:"characteristics",level:2},{value:"Request Types",id:"request-types",level:2},{value:"Request Formats",id:"request-formats",level:2},{value:"Map images",id:"map-images",level:2},{value:"Layers",id:"layers",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wmts-overview"},"WMTS Overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_Map_Tile_Service"},"WMTS")," (Web Map Tile Service) is a standardized protocol for serving pre-rendered or run-time computed georeferenced ",(0,n.kt)("strong",{parentName:"p"},"map tiles")," over the Internet."),(0,n.kt)("p",null,"The specification was developed and first published by the Open Geospatial Consortium in 2010."),(0,n.kt)("h2",{id:"characteristics"},"Characteristics"),(0,n.kt)("p",null,"WMTS is not a single file format but rather a protocol, specifying a number of required and optional requests. Some requests return binary images, and some return metadata formatted as XML (text) responses. The XML responses are fairly detailed and some variations exists, so when working with WMTS it is typically useful to have access to pre-tested parsers for each response type."),(0,n.kt)("h2",{id:"request-types"},"Request Types"),(0,n.kt)("p",null,'The WMTS standard specifies a number of "request types" that a standards-compliant WMTS server should support. loaders.gl provides loaders for all WMTS request responses:'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"WMTS Request")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Response Loader")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"GetCapabilities")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"WMTSCapabilitiesLoader")),(0,n.kt)("td",{parentName:"tr",align:null},"Returns parameters about the WMTS (such as map image format and WMTS version compatibility) and the available layers (map bounding box, coordinate reference systems, URI of the data and whether the layer is mostly opaque or not)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"GetTile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ImageLoader")),(0,n.kt)("td",{parentName:"tr",align:null},"returns a map image. Parameters include: width and height of the map, coordinate reference system, rendering style, image format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"GetFeatureInfo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"WMTSFeatureInfoLoader")),(0,n.kt)("td",{parentName:"tr",align:null},"if a layer is marked as 'queryable' then you can request data about a coordinate of the map image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"GetLegendGraphic")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ImageLoader")),(0,n.kt)("td",{parentName:"tr",align:null},"An image of the map's legend, giving a visual guide to map elements.")))),(0,n.kt)("p",null,"Note that only the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTile")," request types are are required to be supported by a WMTS server. The response to ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," contains information about which request types are supported"),(0,n.kt)("h2",{id:"request-formats"},"Request Formats"),(0,n.kt)("p",null,"The WMTS standard defines three different ways to send request parameters to the server."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Constant"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Key-Value Pairs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"'kvp'")),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Query parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"'restful'")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"URL path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SOAP"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"'soap'")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"XML encoded payloads")))),(0,n.kt)("h2",{id:"map-images"},"Map images"),(0,n.kt)("p",null,"A WMTS server usually serves the map in a bitmap format, e.g. PNG, GIF, JPEG. In addition, vector graphics can be included, such as points, lines, curves and text, expressed in SVG or WebCGM format. The MIME types of the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTile")," request can be inspected in the response to the ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," request."),(0,n.kt)("h2",{id:"layers"},"Layers"),(0,n.kt)("p",null,"Unlike WMS, there is no specified way to request a server to combine and return a map tile with information coming from more than one layer in a single retrieval. WMTS clients that want to show a combination of layers must make independent requests for the layer tiles and then combine or overlay the responses. Also, bounding boxes and scales of these WMTS tiles are constrained to a discrete set of values."))}u.isMDXComponent=!0}}]);