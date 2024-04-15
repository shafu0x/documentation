"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[9333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),k=o,f=s["".concat(c,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=k;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={hide_table_of_contents:!0},i="Order Book",a={unversionedId:"ProtocolMechanics/LiquidityEngines/OrderBook",id:"ProtocolMechanics/LiquidityEngines/OrderBook",title:"Order Book",description:"Pendle \u4e0e\u5176 AMM \u4e00\u8d77\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8ba2\u5355\u7c3f\u7cfb\u7edf\uff0c\u4ee5\u4fbf\u8fdb\u884c PT \u548c YT \u7684\u70b9\u5bf9\u70b9\u4ea4\u6613\u3002\u7528\u6237\u53ef\u4ee5\u653e\u7f6e\u9650\u4ef7\u8ba2\u5355\u4ee5\u6309\u6307\u5b9a\u7684\u9690\u542b APY \u8fdb\u884c\u4e70\u5165\u6216\u5356\u51fa\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/ProtocolMechanics/LiquidityEngines/OrderBook.md",sourceDirName:"ProtocolMechanics/LiquidityEngines",slug:"/ProtocolMechanics/LiquidityEngines/OrderBook",permalink:"/cn/ProtocolMechanics/LiquidityEngines/OrderBook",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"AMM",permalink:"/cn/ProtocolMechanics/LiquidityEngines/AMM"},next:{title:"Tokenomics",permalink:"/cn/ProtocolMechanics/Mechanisms/Tokenomics"}},c={},u=[{value:"\u4ec0\u4e48\u662f\u9650\u4ef7\u8ba2\u5355",id:"\u4ec0\u4e48\u662f\u9650\u4ef7\u8ba2\u5355",level:2},{value:"\u8ba2\u5355\u6267\u884c",id:"\u8ba2\u5355\u6267\u884c",level:2},{value:"\u8ba2\u5355\u6709\u6548\u6027",id:"\u8ba2\u5355\u6709\u6548\u6027",level:2},{value:"\u8d39\u7528",id:"\u8d39\u7528",level:2},{value:"\u5957\u5229",id:"\u5957\u5229",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(s,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"order-book"},"Order Book"),(0,o.kt)("p",null,"Pendle \u4e0e\u5176 AMM \u4e00\u8d77\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8ba2\u5355\u7c3f\u7cfb\u7edf\uff0c\u4ee5\u4fbf\u8fdb\u884c PT \u548c YT \u7684\u70b9\u5bf9\u70b9\u4ea4\u6613\u3002\u7528\u6237\u53ef\u4ee5\u653e\u7f6e\u9650\u4ef7\u8ba2\u5355\u4ee5\u6309\u6307\u5b9a\u7684\u9690\u542b APY \u8fdb\u884c\u4e70\u5165\u6216\u5356\u51fa\u3002"),(0,o.kt)("p",null,"\u8ba2\u5355\u7c3f\u548c AMM \u5171\u540c\u589e\u5f3a\u4e86\u5e02\u573a\u6d41\u52a8\u6027\uff0c\u4fc3\u8fdb\u4e86 Pendle \u4e0a\u7684\u4ea4\u6613\u6d41\u7545\u6027\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Order Book",src:n(3985).Z,title:"Order Book",width:"1263",height:"743"})),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662f\u9650\u4ef7\u8ba2\u5355"},"\u4ec0\u4e48\u662f\u9650\u4ef7\u8ba2\u5355"),(0,o.kt)("p",null,"\u5728 Pendle \u4e0a\uff0c\u9650\u4ef7\u8ba2\u5355\u662f\u6309\u6307\u5b9a\u7684\u9690\u542b APY \u8fdb\u884c\u8d2d\u4e70 / \u51fa\u552e\u8ba2\u5355\u3002\u60a8\u53ef\u4ee5\u5728\u4efb\u4f55\u94fe\u4e0a\u7684\u652f\u6301\u8d44\u4ea7\u7684 PT \u548c YT \u4e0a\u8bbe\u7f6e\u9650\u4ef7\u8ba2\u5355\u3002"),(0,o.kt)("p",null,"Pendle \u4e0a\u6700\u53d7\u6b22\u8fce\u7684\u5e02\u573a\u5927\u591a\u652f\u6301\u9650\u4ef7\u8ba2\u5355\u3002"),(0,o.kt)("h2",{id:"\u8ba2\u5355\u6267\u884c"},"\u8ba2\u5355\u6267\u884c"),(0,o.kt)("p",null,"\u5982\u679c AMM \u7684\u9690\u542b APY \u671d\u5411\u8ba2\u5355 APY \u79fb\u52a8\uff0c\u90a3\u4e48\u9650\u4ef7\u8ba2\u5355\u5c06\u4f1a\u88ab\u6267\u884c\u3002\u5728\u90a3\u4e00\u523b\uff0c\u4efb\u4f55\u8fdb\u4e00\u6b65\u7684\u4ea4\u6613\uff08\u5403\u5355\u8ba2\u5355\uff09\u90fd\u4f1a\u9996\u5148\u586b\u8865\u8ba2\u5355\u7c3f\uff0c\u7136\u540e\u518d\u8fdb\u884c AMM\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u9650\u4ef7\u8ba2\u5355\u5c06\u6df1\u5316\u5728\u7279\u5b9a\u9690\u542b APY \u4e0a\u7684 AMM \u6d41\u52a8\u6027\uff0c\u56e0\u4e3a\u4ea4\u6613\u5c06\u9996\u5148\u586b\u8865\u8ba2\u5355\uff0c\u7136\u540e\u518d\u6b21\u63a8\u52a8 AMM \u7684\u9690\u542b APY\u3002"),(0,o.kt)("p",null,"\u4ea4\u6613\u53ef\u4ee5\u90e8\u5206\u5730\u5206\u914d\u7ed9 AMM \u548c\u9650\u4ef7\u8ba2\u5355\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\uff0c\u4ee5\u4f18\u5316\u4ef7\u683c\u5f71\u54cd\u3002\u8fd9\u4e00\u91cf\u7684\u786e\u5b9a\u662f\u5728\u6700\u4f18\u91cf\u4e0a\uff0c\u8003\u8651\u4e86 AMM \u4ef7\u683c\u5f71\u54cd\u548c\u71c3\u6c14\u8d39\u7528\u3002\u56e0\u6b64\uff0c\u7531\u4e8e\u6240\u9700\u7684\u4ea4\u6613\u6570\u91cf\u589e\u52a0\uff0c\u5c0f\u8ba2\u5355\u7684\u586b\u5145\u53ef\u80fd\u6027\u8f83\u4f4e\uff0c\u5bfc\u81f4\u71c3\u6c14\u8d39\u7528\u589e\u52a0\uff0c\u5c24\u5176\u662f\u5728\u71c3\u6c14\u8d39\u7528\u6602\u8d35\u7684\u94fe\u4e0a\u3002"),(0,o.kt)("p",null,"\u8ba2\u5355\u53ef\u4ee5\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6d3b\u8dc3\uff08\u90e8\u5206\u586b\u5145\u4f46\u4ecd\u7136\u6709\u6548\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\uff08\u8ba2\u5355\u5df2\u5b8c\u5168\u586b\u5145\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u8fc7\u671f\uff08\u8ba2\u5355\u5728\u5230\u671f\u65e5\u671f\u4e4b\u524d\u672a\u5b8c\u5168\u586b\u5145\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u53d6\u6d88"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u6548")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.pendle.finance/ProtocolMechanics/AMM#flash-swaps"},"Flash swap"),"\u589e\u5f3a\u4e86\u8ba2\u5355\u7c3f\u7684\u7075\u6d3b\u6027\uff0c\u5141\u8bb8\u4e00\u4e2a\u8d2d\u4e70 YT \u7684\u5403\u5355\u8ba2\u5355\u4e0e\u4e00\u4e2a\u8d2d\u4e70 PT \u7684\u9650\u4ef7\u8ba2\u5355\u5339\u914d\uff0c\u53cd\u4e4b\u4ea6\u7136\uff0c\u4e00\u4e2a\u5356\u51fa YT \u7684\u5403\u5355\u8ba2\u5355\u53ef\u4ee5\u4e0e\u4e00\u4e2a\u5356\u51fa PT \u7684\u9650\u4ef7\u8ba2\u5355\u5339\u914d\u3002\u8fd9\u79cd\u80fd\u529b\u6781\u5927\u5730\u6269\u5927\u4e86\u6f5c\u5728\u7684\u4ea4\u6613\u5339\u914d\uff0c\u7b80\u5316\u4e86 PT \u548c YT \u4e4b\u95f4\u7684\u4ea4\u6613\u3002"),(0,o.kt)("h2",{id:"\u8ba2\u5355\u6709\u6548\u6027"},"\u8ba2\u5355\u6709\u6548\u6027"),(0,o.kt)("p",null,"\u53ea\u6709\u5e95\u5c42\u7684\u6536\u76ca\u8d44\u4ea7\u53ef\u4ee5\u7528\u4e8e\u653e\u7f6e\u9650\u4ef7\u8ba2\u5355\u3002"),(0,o.kt)("p",null,"\u65e0\u6548\u8ba2\u5355\u5c06\u5728\u9ec4\u8272\u8b66\u544a\u4e2d\u7a81\u51fa\u663e\u793a\u3002\u5f53\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u60a8\u94b1\u5305\u4e2d\u7684\u8d44\u4ea7\u4f59\u989d\u4f4e\u4e8e\u8ba2\u5355\u91d1\u989d\u65f6"),(0,o.kt)("li",{parentName:"ol"},"\u60a8\u5730\u5740\u8bbe\u7f6e\u7684\u6388\u6743\u4f4e\u4e8e\u8ba2\u5355\u91d1\u989d\u65f6")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u9650\u4ef7\u8ba2\u5355\u9700\u8981\u60a8\u5730\u5740\u7684\u7b7e\u540d\uff0c\u800c\u64a4\u9500\u8ba2\u5355\u5219\u9700\u8981\u4e00\u7b14\u7528\u4e8e\u64a4\u9500\u7b7e\u540d\u7684\u4ea4\u6613\u3002"),(0,o.kt)("h2",{id:"\u8d39\u7528"},"\u8d39\u7528"),(0,o.kt)("p",null,"\u9650\u4ef7\u8ba2\u5355\u4e0a\u7684\u4ea4\u6613\u8d39\u4e0e\u5728 AMM \u4e0a\u8fdb\u884c\u7684\u8d39\u7528\u76f8\u540c\u3002\u76ee\u524d\uff0c\u6302\u5355\u8d39\u7387\u8bbe\u7f6e\u4e3a 0\uff08\u5403\u5355\u8d39\u7528\u4fdd\u6301\u4e0d\u53d8\uff09\u3002\u5173\u4e8e\u4f55\u65f6\u63d0\u9ad8\u6302\u5355\u8d39\u7528\uff0c\u56e2\u961f\u6709\u5168\u6743\u51b3\u5b9a\u3002"),(0,o.kt)("p",null,"\u6536\u96c6\u7684\u8d39\u7528\u5c06\u4ee5 $ETH \u5f62\u5f0f\u5206\u914d\u7ed9\u5176\u76f8\u5e94\u6c60\u7684 vePENDLE \u9009\u6c11\u3002"),(0,o.kt)("h2",{id:"\u5957\u5229"},"\u5957\u5229"),(0,o.kt)("p",null,"Pendle \u8fd0\u884c\u4e00\u4e2a\u5957\u5229\u673a\u5668\u4eba\uff0c\u4e0d\u65ad\u5730\u8c03\u6574 AMM \u548c\u8ba2\u5355\u7c3f\u4e4b\u95f4\u7684\u4ef7\u683c\u3002\u8fd9\u786e\u4fdd\u4e86\u7531\u4e8e\u6d41\u52a8\u6027\u5dee\u5f02\u800c\u5bfc\u81f4\u7684\u4efb\u4f55\u4ef7\u683c\u5dee\u5f02\u90fd\u4f1a\u88ab\u5feb\u901f\u7ea0\u6b63\uff0c\u4ece\u800c\u4fdd\u6301\u4e86\u4e24\u4e2a\u7cfb\u7edf\u4e4b\u95f4\u7684\u4e00\u81f4\u5b9a\u4ef7\u3002"))}d.isMDXComponent=!0},3985:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/order_book-abec17db6b23dd6552d333c1e00a5fe3.png"}}]);