"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[9720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},E="mdxType",P={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),E=i(n),d=a,v=E["".concat(c,".").concat(d)]||E[d]||P[d]||o;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[E]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>P,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={hide_table_of_contents:!0},l="vePENDLE",s={unversionedId:"ProtocolMechanics/Mechanisms/vePENDLE",id:"ProtocolMechanics/Mechanisms/vePENDLE",title:"vePENDLE",description:"Pendle\u7684\u6cbb\u7406\u4f9d\u8d56\u4e8e\u6295\u7968\u9501\u5b9a\uff08vote-escrowed\uff09\u7684PENDLE\uff0c\u4e5f\u79f0\u4e3avePENDLE\uff0c\u4ee5\u5b9e\u73b0\u66f4\u9ad8\u7684\u53bb\u4e2d\u5fc3\u5316\u7a0b\u5ea6\u3002\u901a\u8fc7\u5229\u7528vePENDLE\uff0cPENDLE\u6301\u6709\u4eba\u53ef\u4ee5\u83b7\u5f97\u4e00\u7cfb\u5217\u7684\u8d4b\u80fd\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/ProtocolMechanics/Mechanisms/vePENDLE.md",sourceDirName:"ProtocolMechanics/Mechanisms",slug:"/ProtocolMechanics/Mechanisms/vePENDLE",permalink:"/cn/ProtocolMechanics/Mechanisms/vePENDLE",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Tokenomics",permalink:"/cn/ProtocolMechanics/Mechanisms/Tokenomics"},next:{title:"\u8d39\u7528",permalink:"/cn/ProtocolMechanics/Mechanisms/Fees"}},c={},i=[{value:"\u83b7\u53d6vePENDLE",id:"\u83b7\u53d6vependle",level:2},{value:"\u5f15\u5bfc\u6fc0\u52b1",id:"\u5f15\u5bfc\u6fc0\u52b1",level:2},{value:"\u8d39\u7528\u548c\u5956\u52b1",id:"\u8d39\u7528\u548c\u5956\u52b1",level:2},{value:"vePENDLE APY",id:"vependle-apy",level:2},{value:"LP\u5956\u52b1\u52a0\u901f (Boost)",id:"lp\u5956\u52b1\u52a0\u901f-boost",level:2}],p={toc:i},E="wrapper";function P(e){let{components:t,...o}=e;return(0,a.kt)(E,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vependle"},"vePENDLE"),(0,a.kt)("p",null,"Pendle\u7684\u6cbb\u7406\u4f9d\u8d56\u4e8e\u6295\u7968\u9501\u5b9a\uff08vote-escrowed\uff09\u7684PENDLE\uff0c\u4e5f\u79f0\u4e3avePENDLE\uff0c\u4ee5\u5b9e\u73b0\u66f4\u9ad8\u7684\u53bb\u4e2d\u5fc3\u5316\u7a0b\u5ea6\u3002\u901a\u8fc7\u5229\u7528vePENDLE\uff0cPENDLE\u6301\u6709\u4eba\u53ef\u4ee5\u83b7\u5f97\u4e00\u7cfb\u5217\u7684\u8d4b\u80fd\u3002"),(0,a.kt)("p",null,"vePENDLE\u4e5f\u51cf\u5c11\u4e86PENDLE\u4ee3\u5e01\u7684\u4f9b\u5e94\uff0c\u4ece\u800c\u589e\u52a0\u4ee3\u5e01\u7684\u7a33\u5b9a\u6027\u548c\u534f\u8bae\u7684\u6574\u4f53\u5f3a\u5ea6\u3002\u56e0\u6b64\uff0cvePENDLE\u5bf9\u4e8e\u7ef4\u62a4Pendle\u751f\u6001\u7cfb\u7edf\u7684\u957f\u671f\u5065\u5eb7\u548c\u6210\u529f\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"\u83b7\u53d6vependle"},"\u83b7\u53d6vePENDLE"),(0,a.kt)("p",null,"\u9501\u5b9aPENDLE\u5373\u53ef\u83b7\u5f97vePENDLE\u3002\u60a8\u7684vePENDLE\u4ef7\u503c\u4e0e\u9501\u5b9a\u65f6\u95f4\u548c\u6570\u91cf\u6210\u6b63\u6bd4\uff08\u6700\u957f\u9501\u5b9a\u65f6\u95f4\u4e3a2\u5e74\uff09\u3002\u5728",(0,a.kt)("a",{parentName:"p",href:"/cn/ProtocolMechanics/Mechanisms/Guides/Lock"},"\u6b64\u5904"),"\u53ef\u4ee5\u627e\u5230\u6559\u7a0b\u3002\u6bcf\u4e2a\u94b1\u5305\u53ea\u80fd\u7ed1\u5b9a\u4e00\u4e2avePENDLE\u7684\u5230\u671f\u65e5\u3002"),(0,a.kt)("p",null,"\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u60a8\u7684vePENDLE\u6570\u503c\u4f1a\u9010\u6e10\u964d\u4f4e\uff0c\u5e76\u4e14\u4e00\u65e6\u9501\u5b9a\u65f6\u95f4\u7ed3\u675f\uff0c\u60a8\u9501\u5b9a\u7684PENDLE\u5c06\u88ab\u89e3\u9501\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vePENDLE Value Over Time",src:n(8088).Z,title:"vePENDLE Value Over Time",width:"1999",height:"808"})),(0,a.kt)("p",null,"\u8981\u589e\u52a0\u60a8\u7684vePENDLE\u6570\u503c\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5ef6\u957f\u9501\u5b9a\u65f6\u95f4\uff0c\u4e0e\u53ca\uff0f\u6216\u8005 \u589e\u52a0\u9501\u4ed3\u7684PENDLE\u6570\u91cf\u3002"),(0,a.kt)("h2",{id:"\u5f15\u5bfc\u6fc0\u52b1"},"\u5f15\u5bfc\u6fc0\u52b1"),(0,a.kt)("p",null,"vePENDLE\u540c\u65f6\u9a71\u52a8Pendle\u4e0a\u7684\u6fc0\u52b1\u5f15\u5bfc\u673a\u5236\u3002vePENDLE\u6301\u6709\u4eba\u53ef\u4ee5\u6295\u7968\u5e76\u5f15\u5bfc\u589e\u53d1\u5956\u52b1\u5206\u6d3e\u5230\u4e0d\u540c\u7684\u6c60\u5b50\uff0c\u4ece\u800c\u6709\u6548\u5730\u6fc0\u52b1\u4e0d\u540c\u7684\u6d41\u52a8\u6027\u6c60\u3002"),(0,a.kt)("p",null,"\u76f4\u89c2\u5730\u8bf4\uff0c\u60a8\u7684vePENDLE\u4ef7\u503c\u8d8a\u9ad8\uff0c\u60a8\u5c31\u6709\u6743\u5f15\u5bfc\u5f97\u66f4\u591a\u7684\u6fc0\u52b1\u3002"),(0,a.kt)("p",null,"\u5728\u6bcf\u4e2aepoch\u7684\u5f00\u59cb\uff0c\u5373\u6bcf\u4e2a\u661f\u671f\u56db00:00 UTC\uff0c\u5c06\u8fdb\u884c\u6295\u7968\u7ed3\u679c\u7684\u5feb\u7167\uff0c\u968f\u540e\u5c06\u76f8\u5e94\u5730\u8c03\u6574\u6bcf\u4e2a\u6c60\u7684\u6fc0\u52b1\u5206\u6d3e\u6bd4\u7387\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Epoch Snapshots",src:n(2732).Z,title:"Epoch Snapshots",width:"4000",height:"2404"})),(0,a.kt)("p",null,"\u6295\u7968\u7684vePENDLE\u6301\u6709\u4eba\uff0c\u8fd8\u6709\u6743\u83b7\u5f97\u8be5\u6c60\u5b5080\uff05\u7684\u4ea4\u6613\u5fb5\u8d39\uff08\u4e0e\u8be5\u6c60\u5b50\u7684\u6240\u6709\u6295\u7968\u8005\u95f4\u6309\u6bd4\u4f8b\u5206\u914d\uff09\u3002"),(0,a.kt)("h2",{id:"\u8d39\u7528\u548c\u5956\u52b1"},"\u8d39\u7528\u548c\u5956\u52b1"),(0,a.kt)("p",null,"Pendle\u4eceYT\u4ea7\u751f\u7684\u6240\u6709\u6536\u76ca\u4e2d\u6536\u53d63\uff05\u7684\u8d39\u7528\u3002\u76ee\u524d\uff0c\u8be5\u8d39\u7528\u7684100\uff05\u5206\u914d\u7ed9vePENDLE\u6301\u6709\u8005\uff0c\u800c\u534f\u8bae\u4e0d\u6536\u96c6\u4efb\u4f55\u6536\u5165\u3002\u8fd9\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u53d1\u751f\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u5df2\u5230\u671f(matured)\u4f46\u5c1a\u672a\u88ab\u6301\u6709\u4eba\u5151\u73b0\u9886\u56de(redeem)\u7684PT\u7684\u90e8\u5206\u6536\u76ca\uff0c\u4e5f\u5c06\u6309\u6bd4\u4f8b\u5206\u914d\u7ed9vePENDLE\u6301\u6709\u8005\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5df2\u5230\u671f\u7684PT-aUSDC\u76f8\u5f53\u4e8eaUSDC\u65e0\u5f02\u3002\u5982\u679c\u6301\u6709\u4eba\u4e0d\u8fdb\u884c\u5151\u73b0\uff0c\u5176\u6240\u6709\u6536\u76ca\u5c06\u88ab\u8f6c\u6362\u4e3a\u7a33\u5b9a\u5e01\u5e76\u7531\u534f\u8bae\u6536\u96c6\u4f5c\u4e3a\u534f\u8bae\u6536\u5165\uff0c\u5e76\u5206\u914d\u7ed9vePENDLE\u6301\u6709\u8005\u3002"),(0,a.kt)("p",null,"\u65e0\u8bba\u60a8\u7684vePENDLE\u5b58\u50a8\u5728\u4f55\u5904\uff0c\u6240\u6709\u8fd9\u4e9b\u5956\u52b1\u5c06\u88ab\u8f6c\u6362\u4e3aETH\uff0c\u5e76\u7531\u4e00\u4e2a\u5206\u914d\u5408\u7ea6\u5b9a\u671f\u5206\u914d\u3002"),(0,a.kt)("h2",{id:"vependle-apy"},"vePENDLE APY"),(0,a.kt)("p",null,"\u4eceYT\u4e2d\u6536\u96c6\u7684\u5229\u606f\u62bd\u6210\uff0c\u52a0\u4e0a\u5df2\u5230\u671fPT\u7684\u5956\u52b1\uff0c\u6784\u6210\u4e86vePENDLE\u7684 \u201cBase APY\u201d\uff08\u57fa\u672cAPY\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vePENDLE Voter APYs",src:n(5356).Z,title:"vePENDLE Voter APYs",width:"1809",height:"555"})),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0cvePENDLE\u6295\u7968\u8005\u8fd8\u6709\u6743\u83b7\u5f97\u88ab\u6295\u7968\u6c60\u5b5080\uff05\u7684\u4ea4\u6613\u8d39\uff0c\u8fd9\u6784\u6210\u4e86 \u201cVoter\u2019s APY\u201d\uff08\u6295\u7968\u8005APY\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Base APY + Voter's APY")," \uff0d \u5c31\u662f\u60a8\u5c06\u6536\u5230\u7684\u603b\u6536\u76ca\u5956\u52b1\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Base APY + \u300c\u6700\u9ad8\u53ef\u80fd\u7684Voter's APY\u300d"),"\uff0d \u5c31\u662f\u60a8\u53ef\u4ee5\u4ecevePENDLE\u83b7\u5f97\u7684\u6700\u9ad8\u6536\u76ca\u5956\u52b1\uff08\u5373vePENDLE \u201cMax APY\u201d\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vePENDLE Base/Max APYs",src:n(8398).Z,title:"vePENDLE Base/Max APYs",width:"1810",height:"597"})),(0,a.kt)("p",null,"\u6709\u5173vePENDLE\u7684\u66f4\u591a\u4fe1\u606f\u548c\u7edf\u8ba1\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f",(0,a.kt)("a",{parentName:"p",href:"https://app.pendle.finance/vependle/stats"},"\u793e\u533a\u4eea\u8868\u677f"),"\u3002"),(0,a.kt)("h2",{id:"lp\u5956\u52b1\u52a0\u901f-boost"},"LP\u5956\u52b1\u52a0\u901f (Boost)"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5728\u6301\u6709vePENDLE\u7684\u60c5\u51b5\u4e0b\uff0c\u5728LP\u6c60\u4e2d\u63d0\u4f9b\u6d41\u52a8\u6027\uff0c\u5219\u60a8\u7684\u6240\u6709LP\u7684PENDLE\u6fc0\u52b1\u548c\u5e95\u5c42\u5206\u6d3e\u7684\u5956\u52b1\uff0c\u90fd\u5c06\u8fdb\u4e00\u6b65\u63d0\u9ad8\uff0c\u6700\u9ad8\u53ef\u63d0\u9ad8250\uff05\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u60a8\u7684vePENDLE\u4ef7\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Boost received against vePendle",src:n(1882).Z,title:"Boost received against vePendle",width:"1999",height:"806"})),(0,a.kt)("p",null,"\u5c3d\u7ba1\u60a8\u7684vePENDLE\u4ef7\u503c\u4f1a\u968f\u65f6\u95f4\u8870\u51cf\uff0c\u4f46\u60a8\u7684LP\u52a0\u901f\u7387(Boost)\u662f\u6309\u9996\u6b21\u5957\u7528\u52a0\u901f\u65f6\u8ba1\u7b97\u7684\u3002\u52a0\u901f\u7387\u5c06\u4fdd\u6301\u4e0d\u53d8\uff0c\u76f4\u5230\u60a8\u66f4\u65b0\u60a8\u7684LP\u6301\u4ed3\uff0c\u5c4a\u65f6\u52a0\u901f\u7387\u5c06\u6839\u636e\u60a8\u5f53\u524d\u7684vePENDLE\u4ef7\u503c\u800c\u6539\u53d8\u3002"),(0,a.kt)("p",null,"\u60a8\u5e94\u8be5\u5148\u5c06PENDLE\u9501\u5b9a\u5230vePENDLE\u4e2d\uff0c\u7136\u540e\u518d\u63d0\u4f9b\u6d41\u52a8\u6027\uff0c\u4ee5\u83b7\u5f97\u52a0\u901f\u5956\u52b1(Boost)\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u63d0\u4f9b\u4e86\u6d41\u52a8\u6027\uff0c\u5e76\u5e0c\u671b\u4f7f\u7528vePENDLE\u63d0\u9ad8\u60a8\u7684\u5956\u52b1\uff0c\u60a8\u9700\u8981",(0,a.kt)("a",{parentName:"p",href:"/cn/ProtocolMechanics/Mechanisms/Guides/ApplyBoost"},"\u624b\u52a8\u5957\u7528\u52a0\u901f"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u8de8\u94fe\u5956\u52b1\u52a0\u901f\uff08\u4f8b\u5982\uff0c\u5728Arbitrum\u4e0a\u52a0\u901fLP\u6301\u4ed3\uff09\uff0c\u60a8\u9700\u8981\u9996\u5148\u4ece\u4ee5\u592a\u574a\u540c\u6b65\u60a8\u7684vePENDLE\u4f59\u989d\uff0c\u7136\u540e\u624d\u80fd\u5957\u7528\u52a0\u901f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vePENDLE Cross-chain Reward Boosts",src:n(6628).Z,title:"vePENDLE Cross-chain Reward Boosts",width:"1920",height:"1080"})))}P.isMDXComponent=!0},2732:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/epoch_snapshots-33b9dcd785ec7f13fa42698c8b5dd5ed.jpg"},8398:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vependle_base_max_apys-f19c68d0f5eacedf896c66fbaa15d807.png"},1882:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vependle_boost-149eaa1385d92ef54903cf848283eab6.jpg"},6628:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vependle_crosschain-039f915aa660c870da7fd1d41f0ddaad.png"},8088:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vependle_value-5d17de6b1df07fd7fe79bbfc3baaf742.jpg"},5356:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vependle_voter_apys-8240cf49a71e31c2e76ab4296f73efb9.png"}}]);