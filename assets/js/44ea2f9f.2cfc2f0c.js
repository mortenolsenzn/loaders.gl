"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=l(n),b=a,g=c["".concat(s,".").concat(b)]||c[b]||m[b]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const i={},o="GLTFScenegraph",d={unversionedId:"modules/gltf/api-reference/gltf-scenegraph",id:"modules/gltf/api-reference/gltf-scenegraph",title:"GLTFScenegraph",description:"The GLTFScenegraph class provides an API for accessing and modifying glTF data.",source:"@site/../docs/modules/gltf/api-reference/gltf-scenegraph.md",sourceDirName:"modules/gltf/api-reference",slug:"/modules/gltf/api-reference/gltf-scenegraph",permalink:"/docs/modules/gltf/api-reference/gltf-scenegraph",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/gltf/api-reference/gltf-scenegraph.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"glTF Extensions",permalink:"/docs/modules/gltf/api-reference/gltf-extensions"},next:{title:"postProcessGLTF",permalink:"/docs/modules/gltf/api-reference/post-process-gltf"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Accessing",id:"accessing",level:3},{value:"Modifying",id:"modifying",level:3},{value:"Fields",id:"fields",level:2},{value:"gltf: object",id:"gltf-object",level:3},{value:"sourceBuffers: Array&lt;ArrayBuffer | { arrayBuffer?: ArrayBuffer; buffer?: ArrayBuffer; byteOffset: number; byteLength: number}&gt;",id:"sourcebuffers-arrayarraybuffer---arraybuffer-arraybuffer-buffer-arraybuffer-byteoffset-number-bytelength-number",level:3},{value:"byteLength: number",id:"bytelength-number",level:3},{value:"Accessor Methods",id:"accessor-methods",level:2},{value:"constructor(gltf: object)",id:"constructorgltf-object",level:3},{value:"json()",id:"json",level:3},{value:"getApplicationData(key: string): unknown",id:"getapplicationdatakey-string-unknown",level:3},{value:"getExtraData(key: string): object?",id:"getextradatakey-string-object",level:3},{value:"getExtension(name: string): object?",id:"getextensionname-string-object",level:3},{value:"getUsedExtensions(): string[]",id:"getusedextensions-string",level:3},{value:"getRequiredExtensions(): string[]",id:"getrequiredextensions-string",level:3},{value:"getRemovedExtensions(): string[]",id:"getremovedextensions-string",level:3},{value:"getObjectExtension(object, extensionName)",id:"getobjectextensionobject-extensionname",level:3},{value:"getScene(index: Number): object?",id:"getsceneindex-number-object",level:3},{value:"getScene(index: Number): object",id:"getsceneindex-number-object-1",level:3},{value:"getNode(index: Number): object",id:"getnodeindex-number-object",level:3},{value:"getSkin(index: Number): object",id:"getskinindex-number-object",level:3},{value:"getMesh(index: Number): object",id:"getmeshindex-number-object",level:3},{value:"getMaterial(index: Number): object",id:"getmaterialindex-number-object",level:3},{value:"getAccessor(index: Number): object",id:"getaccessorindex-number-object",level:3},{value:"getCamera(index: Number): object",id:"getcameraindex-number-object",level:3},{value:"getTexture(index: Number): object",id:"gettextureindex-number-object",level:3},{value:"getSampler(index: Number): object",id:"getsamplerindex-number-object",level:3},{value:"getImage(index: Number): object",id:"getimageindex-number-object",level:3},{value:"getBufferView(index: Number): object",id:"getbufferviewindex-number-object",level:3},{value:"getBuffer(index: Number): object",id:"getbufferindex-number-object",level:3},{value:"getTypedArrayForBufferView(bufferView: Number | object): Uint8Array",id:"gettypedarrayforbufferviewbufferview-number--object-uint8array",level:3},{value:"getTypedArrayForAccessor(accessor: Number | object): Uint8Array | Float32Array | ...",id:"gettypedarrayforaccessoraccessor-number--object-uint8array--float32array--",level:3},{value:"getTypedArrayForImageData(image: Number | object): Uint8Array",id:"gettypedarrayforimagedataimage-number--object-uint8array",level:3},{value:"Modifiers",id:"modifiers",level:2},{value:"addApplicationData(key, data)",id:"addapplicationdatakey-data",level:3},{value:"addExtraData(key, data)",id:"addextradatakey-data",level:3},{value:"addRequiredExtension(extensionName, data)",id:"addrequiredextensionextensionname-data",level:3},{value:"registerUsedExtension(extensionName)",id:"registerusedextensionextensionname",level:3},{value:"registerRequiredExtension(extensionName)",id:"registerrequiredextensionextensionname",level:3},{value:"removeExtension(extensionName)",id:"removeextensionextensionname",level:3},{value:"setObjectExtension(object, extensionName, data)",id:"setobjectextensionobject-extensionname-data",level:3},{value:"setDefaultScene(sceneIndex: number);",id:"setdefaultscenesceneindex-number",level:3},{value:"addScene(arguments: {nodeIndices: number[]}): number;",id:"addscenearguments-nodeindices-number-number",level:3},{value:"addNode(arguments: {meshIndex: number}): number;",id:"addnodearguments-meshindex-number-number",level:3},{value:"addMesh(arguments: {attributes: object, indices: object, material: number, mode = 4})",id:"addmesharguments-attributes-object-indices-object-material-number-mode--4",level:3},{value:"addPointCloud(attributes)",id:"addpointcloudattributes",level:3},{value:"addBufferView(buffer)",id:"addbufferviewbuffer",level:3},{value:"addTexture(arguments: {imageIndex: number}): number;",id:"addtexturearguments-imageindex-number-number",level:3},{value:"addMaterial(pbrMaterialInfo: object): number;",id:"addmaterialpbrmaterialinfo-object-number",level:3},{value:"addAccessor(bufferViewIndex, accessor)",id:"addaccessorbufferviewindex-accessor",level:3},{value:"addImage(imageData, mimeType)",id:"addimageimagedata-mimetype",level:3},{value:"createBinChunk()",id:"createbinchunk",level:3}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gltfscenegraph"},"GLTFScenegraph"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GLTFScenegraph")," class provides an API for accessing and modifying glTF data."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Caveat: Modification of binary data chunks has limitations, and this class is currently not intended to be a generic utility for modifying glTF data.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"accessing"},"Accessing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {GLTFLoader, GLTFScenegraph} from '@loaders.gl/gltf';\nimport {load} from '@loaders.gl/core';\n\n// Load and parse a file\nconst gltfData = await parse(fetch(GLTF_URL), GLTFLoader);\n\n// Create a parser\nconst gltf = new GLTFScenegraph(gltfData);\n\n// Get the complete glTF JSON structure\nconst gltfJson = gltf.getJSON();\n\n// Get specific top-level fields from the glTF JSON chunk\nconst appData = gltf.getApplicationData('customData');\n\n// Get a top level extension from the glTF JSON chunk\nconst topLevelExtension = gltf.getExtension('ORGNAME_extensionName');\nif (topLevelExtension) {\n  ...\n}\n\n// Get images from the binary chunk (together with metadata)\nconst imageIndex = 0;\nconst image = gltf.getImage(imageIndex);\n\n// Get default glTF scenegraph\nconst scenegraph = gltf.getScene();\n// Get specific glTF scenegraph\nconst scenegraph = gltf.getScene(2);\n")),(0,a.kt)("h3",{id:"modifying"},"Modifying"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {load, encode} from '@loaders.gl/core';\nimport {ImageWriter} from '@loaders.gl/images';\nimport {GLTFLoader, GLTFWriter, GLTFScenegraph} from '@loaders.gl/gltf';\n\n// Load and parse a file\nconst gltfData = await load(GLTF_URL, GLTFLoader);\n\nconst meshIndex = gltfBuilder.addMesh(gltfData.meshes[0].primitives[0].attributes);\nconst nodeIndex = gltfBuilder.addNode(meshIndex);\nconst sceneIndex = gltfBuilder.addScene([nodeIndex]);\ngltfBuilder.setDefaultScene(sceneIndex);\nconst imageBuffer = await encode(gltfData.images[0].image, ImageWriter);\nconst imageIndex = gltfBuilder.addImage(imageBuffer, 'image/jpeg');\nconst textureIndex = gltfBuilder.addTexture(imageIndex);\nconst pbrMaterialInfo = {\n  pbrMetallicRoughness: {\n    baseColorTexture: textureIndex\n  }\n};\ngltfBuilder.addMaterial(pbrMaterialInfo);\ngltfBuilder.createBinaryChunk();\n\nconst gltfBuffer = encodeSync(gltfBuilder.gltf, GLTFWriter);\n")),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"gltf-object"},"gltf: object"),(0,a.kt)("p",null,"Contains all data of gltf including the json part and the binary chunk. The binary chunk is generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"createBinChunk()")," method"),(0,a.kt)("h3",{id:"sourcebuffers-arrayarraybuffer---arraybuffer-arraybuffer-buffer-arraybuffer-byteoffset-number-bytelength-number"},"sourceBuffers: Array","<","ArrayBuffer | { arrayBuffer?: ArrayBuffer; buffer?: ArrayBuffer; byteOffset: number; byteLength: number}",">"),(0,a.kt)("p",null,"Accumulates buffers of resources added by ",(0,a.kt)("inlineCode",{parentName:"p"},"addMesh()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"addImage()")," etc. These buffers should be compiled before encoding using ",(0,a.kt)("inlineCode",{parentName:"p"},"createBinaryChunk()")),(0,a.kt)("h3",{id:"bytelength-number"},"byteLength: number"),(0,a.kt)("p",null,"Total byteLength of the binary part of gltf"),(0,a.kt)("h2",{id:"accessor-methods"},"Accessor Methods"),(0,a.kt)("h3",{id:"constructorgltf-object"},"constructor(gltf: object)"),(0,a.kt)("p",null,"Creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"GLTFScenegraph")," instance from a pure JavaScript object."),(0,a.kt)("h3",{id:"json"},"json()"),(0,a.kt)("h3",{id:"getapplicationdatakey-string-unknown"},"getApplicationData(key: string): unknown"),(0,a.kt)("p",null,"Returns the given data field in the top-level glTF JSON object."),(0,a.kt)("h3",{id:"getextradatakey-string-object"},"getExtraData(key: string): object?"),(0,a.kt)("p",null,"Returns a key in the top-level glTF ",(0,a.kt)("inlineCode",{parentName:"p"},"extras")," JSON object."),(0,a.kt)("h3",{id:"getextensionname-string-object"},"getExtension(name: string): object?"),(0,a.kt)("p",null,"Returns the top-level extension by ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", if present."),(0,a.kt)("h3",{id:"getusedextensions-string"},"getUsedExtensions(): string[]"),(0,a.kt)("p",null,"Returns an array of extension names (covering all extensions used at any level of the glTF hierarchy)."),(0,a.kt)("h3",{id:"getrequiredextensions-string"},"getRequiredExtensions(): string[]"),(0,a.kt)("p",null,"Returns an array of extensions at any level of the glTF hierarchy that are required to properly display this file (covering all extensions used at any level of the glTF hierarchy)."),(0,a.kt)("h3",{id:"getremovedextensions-string"},"getRemovedExtensions(): string[]"),(0,a.kt)("p",null,"When loaders.gl parses a glTF file, by default it pre-processes and removes certain extensions (e.g. various mesh and image compression formats), see documentation on glTF extensions for more information. "),(0,a.kt)("p",null,"The resulting glTF is intended to be identical to a glTF created without those extensions. However in some cases it is useful to know what extensions were removed during preprocessing."),(0,a.kt)("h3",{id:"getobjectextensionobject-extensionname"},"getObjectExtension(object, extensionName)"),(0,a.kt)("h3",{id:"getsceneindex-number-object"},"getScene(","[index: Number]","): object?"),(0,a.kt)("p",null,"Returns the scene (scenegraph) with the given index, or the default scene if no index is specified."),(0,a.kt)("h3",{id:"getsceneindex-number-object-1"},"getScene(index: Number): object"),(0,a.kt)("h3",{id:"getnodeindex-number-object"},"getNode(index: Number): object"),(0,a.kt)("h3",{id:"getskinindex-number-object"},"getSkin(index: Number): object"),(0,a.kt)("h3",{id:"getmeshindex-number-object"},"getMesh(index: Number): object"),(0,a.kt)("h3",{id:"getmaterialindex-number-object"},"getMaterial(index: Number): object"),(0,a.kt)("h3",{id:"getaccessorindex-number-object"},"getAccessor(index: Number): object"),(0,a.kt)("h3",{id:"getcameraindex-number-object"},"getCamera(index: Number): object"),(0,a.kt)("h3",{id:"gettextureindex-number-object"},"getTexture(index: Number): object"),(0,a.kt)("h3",{id:"getsamplerindex-number-object"},"getSampler(index: Number): object"),(0,a.kt)("h3",{id:"getimageindex-number-object"},"getImage(index: Number): object"),(0,a.kt)("p",null,"Returns the image with specified index"),(0,a.kt)("h3",{id:"getbufferviewindex-number-object"},"getBufferView(index: Number): object"),(0,a.kt)("h3",{id:"getbufferindex-number-object"},"getBuffer(index: Number): object"),(0,a.kt)("h3",{id:"gettypedarrayforbufferviewbufferview-number--object-uint8array"},"getTypedArrayForBufferView(bufferView: Number | object): Uint8Array"),(0,a.kt)("p",null,"Accepts buffer view index or buffer view object"),(0,a.kt)("h3",{id:"gettypedarrayforaccessoraccessor-number--object-uint8array--float32array--"},"getTypedArrayForAccessor(accessor: Number | object): Uint8Array | Float32Array | ..."),(0,a.kt)("p",null,"Accepts accessor index or accessor object."),(0,a.kt)("p",null,"Returns a typed array with type that matches the types"),(0,a.kt)("h3",{id:"gettypedarrayforimagedataimage-number--object-uint8array"},"getTypedArrayForImageData(image: Number | object): Uint8Array"),(0,a.kt)("p",null,"accepts accessor index or accessor object"),(0,a.kt)("h2",{id:"modifiers"},"Modifiers"),(0,a.kt)("h3",{id:"addapplicationdatakey-data"},"addApplicationData(key, data)"),(0,a.kt)("p",null,"Add an extra application-defined key to the top-level data structure"),(0,a.kt)("h3",{id:"addextradatakey-data"},"addExtraData(key, data)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"extras")," - Standard GLTF field for storing application specific data"),(0,a.kt)("p",null,"Add to GLTF top level extension object, mark as used"),(0,a.kt)("h3",{id:"addrequiredextensionextensionname-data"},"addRequiredExtension(extensionName, data)"),(0,a.kt)("p",null,"Add GLTF top level extension object, mark as used and required"),(0,a.kt)("h3",{id:"registerusedextensionextensionname"},"registerUsedExtension(extensionName)"),(0,a.kt)("p",null,"Add extensionName to list of used extensions"),(0,a.kt)("h3",{id:"registerrequiredextensionextensionname"},"registerRequiredExtension(extensionName)"),(0,a.kt)("p",null,"Add extensionName to list of required extensions"),(0,a.kt)("h3",{id:"removeextensionextensionname"},"removeExtension(extensionName)"),(0,a.kt)("p",null,"Removes an extension name string from the top-level glTF extension fields (",(0,a.kt)("inlineCode",{parentName:"p"},"extensionsUsed")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"extensionsRequired"),") if present.\nAlso adds the same extensionName to the ",(0,a.kt)("inlineCode",{parentName:"p"},"extensionsRemoved"),"."),(0,a.kt)("h3",{id:"setobjectextensionobject-extensionname-data"},"setObjectExtension(object, extensionName, data)"),(0,a.kt)("h3",{id:"setdefaultscenesceneindex-number"},"setDefaultScene(sceneIndex: number);"),(0,a.kt)("p",null,"Set the default scene which is to be displayed at load time"),(0,a.kt)("h3",{id:"addscenearguments-nodeindices-number-number"},"addScene(arguments: {nodeIndices: number[]}): number;"),(0,a.kt)("p",null,"Add a scene to the json part"),(0,a.kt)("h3",{id:"addnodearguments-meshindex-number-number"},"addNode(arguments: {meshIndex: number}): number;"),(0,a.kt)("p",null,"Add a node to the json part"),(0,a.kt)("h3",{id:"addmesharguments-attributes-object-indices-object-material-number-mode--4"},"addMesh(arguments: {attributes: object, indices: object, material: number, mode = 4})"),(0,a.kt)("h3",{id:"addpointcloudattributes"},"addPointCloud(attributes)"),(0,a.kt)("h3",{id:"addbufferviewbuffer"},"addBufferView(buffer)"),(0,a.kt)("p",null,"Add one untyped source buffer, create a matching glTF ",(0,a.kt)("inlineCode",{parentName:"p"},"bufferView"),", and return its index"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The binary data will not be added to the gltf buffer until ",(0,a.kt)("inlineCode",{parentName:"p"},"createBinChunk()")," is called.")),(0,a.kt)("h3",{id:"addtexturearguments-imageindex-number-number"},"addTexture(arguments: {imageIndex: number}): number;"),(0,a.kt)("p",null,"Add a texture to the json part"),(0,a.kt)("h3",{id:"addmaterialpbrmaterialinfo-object-number"},"addMaterial(pbrMaterialInfo: object): number;"),(0,a.kt)("p",null,"Add a material to the json part"),(0,a.kt)("h3",{id:"addaccessorbufferviewindex-accessor"},"addAccessor(bufferViewIndex, accessor)"),(0,a.kt)("p",null,"Adds an accessor to a bufferView"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The binary data will not be added to the gltf buffer until ",(0,a.kt)("inlineCode",{parentName:"p"},"createBinChunk()")," is called.")),(0,a.kt)("h3",{id:"addimageimagedata-mimetype"},"addImage(imageData, mimeType)"),(0,a.kt)("p",null,'Adds a binary image. Builds glTF "JSON metadata" and saves buffer reference\nBuffer will be copied into BIN chunk during "pack"'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The binary data will not be added to the gltf buffer until ",(0,a.kt)("inlineCode",{parentName:"p"},"createBinChunk()")," is called.")),(0,a.kt)("h3",{id:"createbinchunk"},"createBinChunk()"),(0,a.kt)("p",null,"Packs any pending binary data into the first binary glTF buffer."),(0,a.kt)("p",null,"Note: Overwrites the existing first buffer if present."))}m.isMDXComponent=!0}}]);