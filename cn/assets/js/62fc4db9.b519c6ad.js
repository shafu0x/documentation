"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={hide_table_of_contents:!0},p="\u6d41\u52a8\u6027\u6c60",l={unversionedId:"AppGuide/Trade/Guides/Pool",id:"AppGuide/Trade/Guides/Pool",title:"\u6d41\u52a8\u6027\u6c60",description:"\u5728\u8fd9\u9875\u9762\u63d0\u4f9bPendle \u6c60\u5b50\u7684\u6d41\u52a8\u6027 (LP)\u3002\u60a8\u53ef\u67e5\u770b\u4e0d\u540c\u6c60\u5b50\u7684\u5230\u671f\u65e5\u3001\u6c60\u5185\u6d41\u52a8\u6027\u7684\u603b\u91d1\u989d\u3001\u53ca\u63d0\u4f9b\u6d41\u52a8\u6027\u7684\u73b0\u884c\u6536\u76ca\u7387\u3002Base APY\u4e3a\u57fa\u7840\u6536\u76ca\u7387\uff0c\u89c6\u4e4e\u60a8\u6301\u6709\u7684vePENDLE\u6570\u91cf\uff0c\u53ef\u4ee5\u5bf9APY\u8fdb\u884c\u4e00\u5b9a\u7a0b\u5ea6\u7684\u52a0\u901f(Boost)\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/AppGuide/Trade/Guides/Pool.md",sourceDirName:"AppGuide/Trade/Guides",slug:"/AppGuide/Trade/Guides/Pool",permalink:"/cn/AppGuide/Trade/Guides/Pool",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"\u4ea4\u6613",permalink:"/cn/AppGuide/Trade/Guides/Swap"},next:{title:"\u9886\u53d6\u6536\u76ca\uff0f\u5956\u52b1",permalink:"/cn/AppGuide/Trade/Guides/Claim"}},i={},u=[{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u96f6\u4ef7\u683c\u5f71\u54cd Zap",id:"\u96f6\u4ef7\u683c\u5f71\u54cd-zap",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6d41\u52a8\u6027\u6c60"},"\u6d41\u52a8\u6027\u6c60"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"https://app.pendle.finance/pro/pools"},"\u8fd9\u9875\u9762"),"\u63d0\u4f9bPendle \u6c60\u5b50\u7684\u6d41\u52a8\u6027 (LP)\u3002\u60a8\u53ef\u67e5\u770b\u4e0d\u540c\u6c60\u5b50\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5230\u671f\u65e5"),"\u3001\u6c60\u5185\u6d41\u52a8\u6027\u7684",(0,a.kt)("strong",{parentName:"p"},"\u603b\u91d1\u989d"),"\u3001\u53ca\u63d0\u4f9b\u6d41\u52a8\u6027\u7684\u73b0\u884c",(0,a.kt)("strong",{parentName:"p"},"\u6536\u76ca\u7387"),"\u3002Base APY\u4e3a\u57fa\u7840\u6536\u76ca\u7387\uff0c\u89c6\u4e4e\u60a8\u6301\u6709\u7684vePENDLE\u6570\u91cf\uff0c\u53ef\u4ee5\u5bf9APY\u8fdb\u884c\u4e00\u5b9a\u7a0b\u5ea6\u7684\u52a0\u901f(Boost)\u3002"),(0,a.kt)("p",null,"\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u4ece\u591a\u4e2a\u6e20\u9053\u83b7\u5f97\u56de\u62a5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6765\u81ea\u6c60\u4e2d PT \u7684\u56fa\u5b9a\u5229\u7387\u6536\u76ca"),(0,a.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u4ee3\u5e01\u7684\u534f\u8bae\u5956\u52b1"),(0,a.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u8d39\u7528"),(0,a.kt)("li",{parentName:"ul"},"PENDLE \u6fc0\u52b1")),(0,a.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230",(0,a.kt)("a",{parentName:"li",href:"https://app.pendle.finance/pro/pools"},"\u6d41\u52a8\u6027\u6c60"),"\u9875\u9762"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u60a8\u60f3\u8981LP\u7684\u6c60\u5b50"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8f93\u5165 \u201cZap\u201d \u7684\u8d44\u4ea7"),(0,a.kt)("li",{parentName:"ol"},"\u952e\u5165\u60a8\u5e0c\u671b\u63d0\u4f9b\u7684\u6d41\u52a8\u6027\u4ee3\u5e01\u6570\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u8fdb\u9636\uff09\u901a\u8fc7\u70b9\u51fb\u7f51\u9875\u6700\u53f3\u4e0a\u89d2\u7684\u9f7f\u8f6e\u56fe\u6807\uff0c\u63a7\u5236\u60a8\u7684\u6ed1\u70b9\u5bb9\u5fcd\u5ea6"),(0,a.kt)("li",{parentName:"ol"},"\u6279\u51c6\u4ea4\u6613\u5e76\u5b8c\u6210 \u201cZap\u201d \u5b58\u6b3e\uff01")),(0,a.kt)("h3",{id:"\u96f6\u4ef7\u683c\u5f71\u54cd-zap"},"\u96f6\u4ef7\u683c\u5f71\u54cd Zap"),(0,a.kt)("p",null,"\u5728 Pendle \u4e0a\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u6fc0\u6d3b\u300c",(0,a.kt)("strong",{parentName:"p"},"\u96f6\u4ef7\u683c\u5f71\u54cd"),"\u300d\u6a21\u5f0f\uff0c\u8fd9\u6837\u5411 PT/SY \u6c60\u63d0\u4f9b\u6d41\u52a8\u6027\u65f6\uff0c\u5e76\u4e0d\u4f1a\u4ea7\u751f\u4ef7\u683c\u5f71\u54cd\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6dfb\u52a0\u6d41\u52a8\u6027\u65f6\uff0c\u4e00\u90e8\u5206\u5e95\u5c42\u8d44\u4ea7\u4f1a\u88ab\u7528\u4e8e\u4ece PT/SY \u6c60\u8d2d\u4e70 PT\uff0c\u5269\u4f59\u7684\u5219\u88ab\u5305\u88c5\u4e3a SY\u3002\u7136\u800c\uff0c\u8d2d\u4e70 PT \u53ef\u80fd\u4f1a\u5bfc\u81f4\u4ef7\u683c\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"\u542f\u7528\u300c",(0,a.kt)("strong",{parentName:"p"},"\u96f6\u4ef7\u683c\u5f71\u54cd"),"\u300d\u6a21\u5f0f\u540e\uff0c\u5e95\u5c42\u8d44\u4ea7\u5c06\u5b8c\u5168\u88ab\u5305\u88c5\u4e3a SY\uff0c\u5176\u4e2d\u4e00\u90e8\u5206\u7528\u4e8e\u94f8\u9020 PT \u548c YT\u3002\u7136\u540e\u5c06 PT \u548c\u5269\u4f59\u7684 SY \u7528\u4e8e\u63d0\u4f9b\u6d41\u52a8\u6027\uff0cYT \u5c06\u8fd4\u8fd8\u56de\u5230\u7528\u6237\u7684\u94b1\u5305\u3002\u8fd9\u6d88\u9664\u4e86\u8d2d\u4e70 PT \u7684\u6b65\u9aa4\uff0c\u4ece\u800c\u907f\u514d\u4e86\u4efb\u4f55\u6f5c\u5728\u7684\u4ef7\u683c\u5f71\u54cd\u3002"))}s.isMDXComponent=!0}}]);