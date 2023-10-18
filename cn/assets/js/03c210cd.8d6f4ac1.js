"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[7312],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?a.createElement(m,l(l({ref:e},p),{},{components:r})):a.createElement(m,l({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[s]="string"==typeof t?t:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9769:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={hide_table_of_contents:!0},l="\u8ba1\u7b97\u673a",i={unversionedId:"AppGuide/Trade/Calculator",id:"AppGuide/Trade/Calculator",title:"\u8ba1\u7b97\u673a",description:"Pendle\u6536\u76ca\u8ba1\u7b97\u673a\u53ef\u4ee5\u5e2e\u52a9\u60a8\u9884\u6d4b\u5728Pendle\u4e0a\u4e0d\u540c\u7b56\u7565\u7684\u6f5c\u5728\u56de\u62a5\uff0c\u8ba9\u60a8\u8bc6\u522b\u6700\u4f73\u6536\u76ca\u7684\u673a\u4f1a\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/AppGuide/Trade/Calculator.md",sourceDirName:"AppGuide/Trade",slug:"/AppGuide/Trade/Calculator",permalink:"/cn/AppGuide/Trade/Calculator",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Exiting the Kyber Pool",permalink:"/cn/AppGuide/Trade/Guides/ExitingKyberPool"},next:{title:"\u6d41\u52a8\u6027\u6c60",permalink:"/cn/AppGuide/Trade/Pools"}},c={},u=[{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2}],p={toc:u},s="wrapper";function d(t){let{components:e,...o}=t;return(0,n.kt)(s,(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u8ba1\u7b97\u673a"},"\u8ba1\u7b97\u673a"),(0,n.kt)("p",null,"Pendle\u6536\u76ca\u8ba1\u7b97\u673a\u53ef\u4ee5\u5e2e\u52a9\u60a8\u9884\u6d4b\u5728Pendle\u4e0a\u4e0d\u540c\u7b56\u7565\u7684\u6f5c\u5728\u56de\u62a5\uff0c\u8ba9\u60a8\u8bc6\u522b\u6700\u4f73\u6536\u76ca\u7684\u673a\u4f1a\u3002"),(0,n.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u5165Pendle Pro\u754c\u9762\uff0c\u5e76\u70b9\u51fb\u201c\u8ba1\u7b97\u673a\u201d (Calculator)\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Tutorial 1&quot;",src:r(7769).Z,width:"800",height:"450"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u79cd\u6216\u591a\u79cd\u7b56\u7565\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Tutorial 2&quot;",src:r(2349).Z,width:"800",height:"450"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u5e95\u5c42\u8d44\u4ea7\u7c7b\u522b\u548c\u76f8\u5e94\u7684\u5230\u671f\u65e5\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Tutorial 3&quot;",src:r(8628).Z,width:"800",height:"450"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9\u60a8\u5e0c\u671b\u63d0\u4f9b\u7684\u521d\u59cb\u91d1\u989d\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u6309\u94ae\u5728\u300c\u7f8e\u5143\u672c\u4f4d\u300d\u548c\u300c\u5e95\u5c42\u8d44\u4ea7(\u5e01)\u672c\u4f4d\u300d\u6a21\u5f0f\u4e4b\u95f4\u5207\u6362\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Tutorial 4&quot;",src:r(6981).Z,width:"800",height:"450"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u952e\u5165\u60a8\u9884\u671f\u5e95\u5c42\u8d44\u4ea7\u7684\u5e73\u5747\u672a\u6765APY (Average Future APY)\u3002\u8fd9\u4e5f\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u5404\u79cdAPY\u573a\u5883\u4e0b\u7684\u5229\u6da6\u60c5\u51b5\u3002\u6ce8\u610f\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u5f53\u524d\u5e95\u5c42\u8d44\u4ea7\u7684APY (Underlying APY)\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Tutorial 5&quot;",src:r(422).Z,width:"800",height:"450"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u9009\u62e9\u4e86\u63d0\u4f9bLP\uff0c\u5c06\u4f1a\u6709\u4e00\u4e2a\u989d\u5916\u7684\u8f93\u5165\u680f\uff0c\u53ef\u7528\u6765\u6539\u53d8PENDLE\u7684\u76ee\u6807\u9501\u5b9a\u671f\u9650\u548cPENDLE\u9501\u5b9a\u91cf\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6b64\u9009\u9879\u6765\u8ba1\u7b97\u51fa\u8fbe\u5230\u6700\u5927\u52a0\u901f(Max Boost)\u7684\u6700\u4f4e\u9501\u4ed3\u8981\u6c42\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Tutorial 6&quot;",src:r(8113).Z,width:"800",height:"450"})),(0,n.kt)("p",null,"\u70b9\u51fb\u201c\u8ba1\u7b97\u201d\uff0c\u53f3\u4fa7\u5c06\u51fa\u73b0\u4e00\u5f20\u8868\u683c\uff0c\u4f30\u7b97\u60a8\u7684\u7b56\u7565\u80fd\u4ea7\u751f\u7684\u9884\u671f\u5229\u6da6\u548cAPY"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Tutorial 7&quot;",src:r(2194).Z,width:"800",height:"450"})))}d.isMDXComponent=!0},7769:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-1-ffb49053270d756229a1042e84874578.png"},2349:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-2-b7a1a86ceb9afcb2e8151d778025fdde.png"},8628:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-3-c6b2be29da1034bb7201542dae4f8d15.png"},6981:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-4-65d25f975a8e83c5f83a4059c04c0da4.png"},422:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-5-aebb6b5e40c32bfcc4c408fed848a8d9.png"},8113:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-6-0e5633204deebfc592087ed55adc00b8.png"},2194:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/calculator-tutorial-7-ba86b9a3aee7a27a21dc0fdeeceb84b7.png"}}]);