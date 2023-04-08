"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(83117),s=(n(67294),n(3905));const o={},a="glTF Extensions",i={unversionedId:"modules/gltf/api-reference/gltf-extensions",id:"modules/gltf/api-reference/gltf-extensions",title:"glTF Extensions",description:"glTF extensions can be present in glTF files, and will be present in the parsed JSON. glTF extensions can supported by applications by inspecting the extensions fields inside glTF objects, and it is up to each application to handle or ignore them.",source:"@site/../docs/modules/gltf/api-reference/gltf-extensions.md",sourceDirName:"modules/gltf/api-reference",slug:"/modules/gltf/api-reference/gltf-extensions",permalink:"/docs/modules/gltf/api-reference/gltf-extensions",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/gltf/api-reference/gltf-extensions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/gltf/"},next:{title:"GLTFScenegraph",permalink:"/docs/modules/gltf/api-reference/gltf-scenegraph"}},l={},p=[{value:"Official Extensions",id:"official-extensions",level:2},{value:"KHR_draco_mesh_compression",id:"khr_draco_mesh_compression",level:3},{value:"KHR_lights_punctual",id:"khr_lights_punctual",level:3},{value:"KHR_materials_unlit",id:"khr_materials_unlit",level:3},{value:"KHR_texture_basisu",id:"khr_texture_basisu",level:3},{value:"Custom Extensions",id:"custom-extensions",level:2},{value:"EXT_meshopt_compression",id:"ext_meshopt_compression",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"gltf-extensions"},"glTF Extensions"),(0,s.kt)("p",null,"glTF extensions can be present in glTF files, and will be present in the parsed JSON. glTF extensions can supported by applications by inspecting the ",(0,s.kt)("inlineCode",{parentName:"p"},"extensions")," fields inside glTF objects, and it is up to each application to handle or ignore them."),(0,s.kt)("p",null,"loaders.gl aims to provide support for glTF extensions that can be handled completely or partially during loading, and article describes glTF extensions that are fully or partially processed by the ",(0,s.kt)("inlineCode",{parentName:"p"},"@loaders.gl/gltf")," classes."),(0,s.kt)("p",null,"Note that many glTF extensions affect aspects that are firmly outside of the scope of loaders.gl (e.g. rendering), and no attempt is made to process those extensions in loaders.gl."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Extension"),(0,s.kt)("th",{parentName:"tr",align:null},"Preprocessed"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[KHR_draco_mesh_compression][KHR_draco_mesh_compression]"),(0,s.kt)("td",{parentName:"tr",align:null},"Y"),(0,s.kt)("td",{parentName:"tr",align:null},"Decompresses draco-compressed geometries")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[EXT_meshopt_compression][EXT_meshopt_compression]",")"),(0,s.kt)("td",{parentName:"tr",align:null},"Y"),(0,s.kt)("td",{parentName:"tr",align:null},"Decompresses meshopt-compressed geometries")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[KHR_texture_basisu][KHR_texture_basisu]",")"),(0,s.kt)("td",{parentName:"tr",align:null},"Y"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[KHR_texture_webp][KHR_texture_webp]",")"),(0,s.kt)("td",{parentName:"tr",align:null},"Y"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[KHR_lights_punctual][KHR_lights_punctual]",")"),(0,s.kt)("td",{parentName:"tr",align:null},"Y","*"),(0,s.kt)("td",{parentName:"tr",align:null},"Deprecated")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[KHR_materials_unlit][KHR_materials_unlit]",")"),(0,s.kt)("td",{parentName:"tr",align:null},"Y","*"),(0,s.kt)("td",{parentName:"tr",align:null},"Deprecated")))),(0,s.kt)("h2",{id:"official-extensions"},"Official Extensions"),(0,s.kt)("h3",{id:"khr_draco_mesh_compression"},"KHR_draco_mesh_compression"),(0,s.kt)("p",null,"Supports compression of mesh attributes (geometry)."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," by default fully decompresses draco compressed geometries, removing the draco extension and the compressed data from the parsed glTF data structure."),(0,s.kt)("p",null,"Specification: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression"},"KHR_draco_mesh_compression"),"."),(0,s.kt)("p",null,"Parsing Support:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"By adding the ",(0,s.kt)("inlineCode",{parentName:"li"},"decompress: true")," options to the ",(0,s.kt)("inlineCode",{parentName:"li"},"GLTFParser")," any decompressed by the ",(0,s.kt)("inlineCode",{parentName:"li"},"GLTFParser"),"."),(0,s.kt)("li",{parentName:"ul"},"The expanded attributes are placed in the mesh object (effectively making it look as if it had never been compressed)."),(0,s.kt)("li",{parentName:"ul"},"The extension objects are removed from the glTF file.")),(0,s.kt)("p",null,"Encoding Support:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Meshes can be compressed as they are added to the ",(0,s.kt)("inlineCode",{parentName:"li"},"GLTFBuilder"),".")),(0,s.kt)("h3",{id:"khr_lights_punctual"},"KHR_lights_punctual"),(0,s.kt)("p",null,"Supports specification of point light sources and addition of such sources to the scenegraph node."),(0,s.kt)("p",null,"Specification: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual"},"KHR_lights_punctual")),(0,s.kt)("p",null,"Parsing Support:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Any nodes with a ",(0,s.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extension will get a ",(0,s.kt)("inlineCode",{parentName:"li"},"light")," field with value containing a light definition object with properties defining the light (this object will be resolved by index from the global ",(0,s.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extension object's ",(0,s.kt)("inlineCode",{parentName:"li"},"lights")," array) ."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extensions will be removed from all nodes."),(0,s.kt)("li",{parentName:"ul"},"Finally, the global ",(0,s.kt)("inlineCode",{parentName:"li"},"KHR_lights_punctual")," extension (including its light list)) will be removed.")),(0,s.kt)("p",null,"Encoding Support:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"N/A")),(0,s.kt)("h3",{id:"khr_materials_unlit"},"KHR_materials_unlit"),(0,s.kt)("p",null,"Specifies that a material should not be affected by light. Useful for pre-lit materials (e.g. photogrammetry)."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit"},"KHR_materials_unlit")),(0,s.kt)("h3",{id:"khr_texture_basisu"},"KHR_texture_basisu"),(0,s.kt)("p",null,"This extension adds the ability to specify textures using KTX v2 images with Basis Universal supercompression."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," by default fully decompresses compressed textures, removing the basisu extension and the compressed data from the parsed glTF data structure."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_basisu"},"KHR_texture_basisu")),(0,s.kt)("h2",{id:"custom-extensions"},"Custom Extensions"),(0,s.kt)("h3",{id:"ext_meshopt_compression"},"EXT_meshopt_compression"),(0,s.kt)("p",null,"This extension provides a support for the meshopt binary geometry data compression format that is tailored to the common types of data seen in glTF buffers.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," by default fully decompresses meshopt compressed geometries, removing the meshopt extension and the compressed data from the parsed glTF data structure."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_meshopt_compression/README"},"EXT_meshopt_compression")),(0,s.kt)("p",null,"KHR_draco_mesh_compression: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression"},"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression"),"\nKHR_lights_punctual: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual"},"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual"),(0,s.kt)("br",{parentName:"p"}),"\n","KHR_materials_unlit: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit"},"https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit"),(0,s.kt)("br",{parentName:"p"}),"\n","KHR_texture_basisu: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_basisu"},"https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_basisu"),(0,s.kt)("br",{parentName:"p"}),"\n","EXT_meshopt_compression: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_meshopt_compression/README"},"https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_meshopt_compression/README"),")"))}c.isMDXComponent=!0}}]);