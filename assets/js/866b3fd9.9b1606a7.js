"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(a),k=r,u=s["".concat(o,".").concat(k)]||s[k]||N[k]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},79951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={},i="Mesh and PointCloud Loaders",d={unversionedId:"specifications/category-mesh",id:"specifications/category-mesh",title:"Mesh and PointCloud Loaders",description:'The mesh and pointcloud loader category is intended for simpler mesh and point clouds formats that describe a "single geometry primitive" (as opposed to e.g. a scenegraph consisting of a hierarchy of multiple geometries).',source:"@site/../docs/specifications/category-mesh.md",sourceDirName:"specifications",slug:"/specifications/category-mesh",permalink:"/docs/specifications/category-mesh",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/specifications/category-mesh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Geospatial Loaders",permalink:"/docs/specifications/category-gis"},next:{title:"Scenegraph Loaders",permalink:"/docs/specifications/category-scenegraph"}},o={},p=[{value:"Mesh/PointCloud Category Loaders",id:"meshpointcloud-category-loaders",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Header",id:"header",level:3},{value:"Mode",id:"mode",level:3},{value:"Accessor",id:"accessor",level:3},{value:"glTF Attribute Name Mapping",id:"gltf-attribute-name-mapping",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Scenegraph support",id:"scenegraph-support",level:3},{value:"Material support",id:"material-support",level:3}],m={toc:p},s="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mesh-and-pointcloud-loaders"},"Mesh and PointCloud Loaders"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"mesh and pointcloud"),' loader category is intended for simpler mesh and point clouds formats that describe a "single geometry primitive" (as opposed to e.g. a scenegraph consisting of a hierarchy of multiple geometries).'),(0,r.kt)("h2",{id:"meshpointcloud-category-loaders"},"Mesh/PointCloud Category Loaders"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Loader"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"modules/draco/docs/api-reference/draco-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"DracoLoader"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"modules/las/docs/api-reference/las-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"LASLoader"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"modules/obj/docs/api-reference/obj-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"OBJLoader"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"modules/pcd/docs/api-reference/pcd-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"PCDLoader"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"modules/ply/docs/api-reference/ply-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"PLYLoader"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"modules/terrain/docs/api-reference/quantized-mesh-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"QuantizedMeshLoader"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"modules/terrain/docs/api-reference/terrain-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"TerrainLoader"))),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"data-format"},"Data Format"),(0,r.kt)("p",null,"A single mesh is typically defined by a set of attributes, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"positions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"colors"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"normals")," etc, as well as a draw mode."),(0,r.kt)("p",null,"The Pointcloud/Mesh loaders output mesh data in a common form that is optimized for use in WebGL frameworks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All attributes (and indices if present) are stored as typed arrays of the proper type."),(0,r.kt)("li",{parentName:"ul"},'All attributes (and indices if present) are wrapped into glTF-style "accessor objects", e.g. ',(0,r.kt)("inlineCode",{parentName:"li"},"{size: 1-4, value: typedArray}"),"."),(0,r.kt)("li",{parentName:"ul"},"Attribute names are mapped to glTF attribute names (on a best-effort basis)."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"indices")," field is added (only if present in the loaded geometry)."),(0,r.kt)("li",{parentName:"ul"},"A primitive drawing ",(0,r.kt)("inlineCode",{parentName:"li"},"mode")," value is added (the numeric value matches WebGL constants, e.g ",(0,r.kt)("inlineCode",{parentName:"li"},"GL.TRIANGLES"),").")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loaderData")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Loader and format specific data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"header")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#header"},"Header"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#mode"},"Mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Keys are ",(0,r.kt)("a",{parentName:"td",href:"#gltf-attribute-name-mapping"},"glTF attribute names")," and values are ",(0,r.kt)("a",{parentName:"td",href:"#accessor"},"accessor")," objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"indices")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"If present, describes the indices (elements) of the geometry as an ",(0,r.kt)("a",{parentName:"td",href:"#accessor"},"accessor")," object.")))),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," fields are only recommended at this point, applications can not assume they will be present:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"header")," Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vertexCount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boundingBox")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[[minX, minY, minZ], [maxX, maxY, maxZ]]"))))),(0,r.kt)("h3",{id:"mode"},"Mode"),(0,r.kt)("p",null,"Primitive modes are aligned with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#primitive"},"OpenGL/glTF primitive types")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Primitive Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POINTS")),(0,r.kt)("td",{parentName:"tr",align:null},"Used for point cloud category data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINES")),(0,r.kt)("td",{parentName:"tr",align:null},"Lines are rarely used due to limitations in GPU-based rendering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINE_LOOP")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINE_STRIP")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIANGLES")),(0,r.kt)("td",{parentName:"tr",align:null},"Used for most meshes. Indices attributes are often used to reuse vertex data in remaining attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIANGLE_STRIP")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"6")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIANGLE_FAN")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"accessor"},"Accessor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"indices"),' are represented by glTF "accessor objects" with the binary data for that attribute resolved into a typed array of the proper type.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Accessors Fields"),(0,r.kt)("th",{parentName:"tr",align:null},"glTF?"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TypedArray")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the typed array (corresponds to ",(0,r.kt)("inlineCode",{parentName:"td"},"bufferView"),"). The type of the array will match the GL constant in ",(0,r.kt)("inlineCode",{parentName:"td"},"componentType"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of components, ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"4"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byteOffset")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Starting offset into the bufferView.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"count")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of elements/vertices in the attribute data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"originalName")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"If this was a named attribute in the original file, the original name (before substitution with glTF attribute names) will be made available here.")))),(0,r.kt)("h3",{id:"gltf-attribute-name-mapping"},"glTF Attribute Name Mapping"),(0,r.kt)("p",null,"To help applications manage attribute name differences between various formats, mesh loaders map known attribute names to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#geometry"},"glTF 2.0 standard attribute names")," a best-effort basis."),(0,r.kt)("p",null,"When a loader can map an attribute name, it will replace ir with the glTF equivalent. This allows applications to use common code to handle meshes and point clouds from different formats."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Accessor Type(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Component Type(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POSITION")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC3"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5126")," (FLOAT)"),(0,r.kt)("td",{parentName:"tr",align:null},"XYZ vertex positions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NORMAL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC3"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5126")," (FLOAT)"),(0,r.kt)("td",{parentName:"tr",align:null},"Normalized XYZ vertex normals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TANGENT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC4"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5126")," (FLOAT)"),(0,r.kt)("td",{parentName:"tr",align:null},"XYZW vertex tangents where the ",(0,r.kt)("em",{parentName:"td"},"w")," component is a sign value (-1 or +1) indicating handedness of the tangent basis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TEXCOORD_0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC2"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5126")," (FLOAT), ",(0,r.kt)("inlineCode",{parentName:"td"},"5121")," (UNSIGNED_BYTE) normalized, ",(0,r.kt)("inlineCode",{parentName:"td"},"5123")," (UNSIGNED_SHORT) normalized"),(0,r.kt)("td",{parentName:"tr",align:null},"UV texture coordinates for the first set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TEXCOORD_1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC2"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5126")," (FLOAT), ",(0,r.kt)("inlineCode",{parentName:"td"},"5121")," (UNSIGNED_BYTE) normalized, ",(0,r.kt)("inlineCode",{parentName:"td"},"5123")," (UNSIGNED_SHORT) normalized"),(0,r.kt)("td",{parentName:"tr",align:null},"UV texture coordinates for the second set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"COLOR_0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC3"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"VEC4"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5126")," (FLOAT), ",(0,r.kt)("inlineCode",{parentName:"td"},"5121")," (UNSIGNED_BYTE) normalized, ",(0,r.kt)("inlineCode",{parentName:"td"},"5123")," (UNSIGNED_SHORT) normalized"),(0,r.kt)("td",{parentName:"tr",align:null},"RGB or RGBA vertex color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JOINTS_0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC4"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5121")," (UNSIGNED_BYTE), ",(0,r.kt)("inlineCode",{parentName:"td"},"5123")," (UNSIGNED_SHORT)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WEIGHTS_0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"VEC4"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5126")," (FLOAT), ",(0,r.kt)("inlineCode",{parentName:"td"},"5121")," (UNSIGNED_BYTE) normalized, ",(0,r.kt)("inlineCode",{parentName:"td"},"5123")," (UNSIGNED_SHORT) normalized"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that for efficiency reasons, mesh loaders are not required to convert the format of an attribute's binary data to match the glTF specifications (i.e. if normals were encoded using BYTES then that is what will be returned even though glTF calls out for FLOAT32). Any such alignment needs to be done by the application as a second step.")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("h3",{id:"scenegraph-support"},"Scenegraph support"),(0,r.kt)("p",null,"For more complex, scenegraph-type formats (i.e. formats that contain multiple geometric primitives), loaders.gl provides glTF 2.0 support via the ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader"),"."),(0,r.kt)("h3",{id:"material-support"},"Material support"),(0,r.kt)("p",null,"Material support is provided by some mesh formats (e.g. OBJ/MTL) and is currently not implemented by loaders.gl, however the glTF loader has full support for PBR (Physically-Based Rendering) materials."))}N.isMDXComponent=!0}}]);