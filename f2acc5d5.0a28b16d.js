(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(136)),c={title:"Row Types"},s={id:"formatting/row-types",isDocsHomePage:!1,title:"Row Types",description:"When creating a CSV fast-csv supports a few row formats.",source:"@site/docs/formatting/row-types.md",permalink:"/fast-csv/docs/formatting/row-types",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/formatting/row-types.md",sidebar:"docs",previous:{title:"Options",permalink:"/fast-csv/docs/formatting/options"},next:{title:"Methods",permalink:"/fast-csv/docs/formatting/methods"}},i=[],p={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When creating a CSV ",Object(o.b)("inlineCode",{parentName:"p"},"fast-csv")," supports a few row formats."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"{[string]: any}"))),Object(o.b)("p",null,"You can pass in object to any formatter function if your CSV requires headers the keys of the first object will be used as the header names."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  a: "a1",\n  b: "b1",\n  c: "c1",\n}\n\n//Generated CSV\n//a,b,c\n//a1,b1,c1\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"string[]"))),Object(o.b)("p",null,"You can also pass in your rows as arrays. If your CSV requires headers the first row passed in will be the headers used."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'[\n    ["a", "b", "c"],\n    ["a1", "b1", "c1"]\n]\n//Generated CSV\n//a,b,c\n//a1,b1,c1\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"[string, any][]"))),Object(o.b)("p",null,"This is the least commonly used format but can be useful if you have requirements to generate a CSV with headers with the same column name (Crazy we know but we have seen it)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'[\n    [\n        ["a", "a1"],\n        ["a", "a2"],\n        ["b", "b1"],\n        ["b", "b2"],\n        ["c", "c1"],\n        ["c", "c2"]\n    ]\n]\n\n//Generated CSV\n//a,a,b,b,c,c\n//a1,a2,b1,b2,c1,c2\n')))}b.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||o;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);