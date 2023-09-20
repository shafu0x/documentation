"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[4332],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={hide_table_of_contents:!0},l="Developer FAQ",i={unversionedId:"Developers/DeveloperFAQ",id:"Developers/DeveloperFAQ",title:"Developer FAQ",description:"How to read unclaimed Rewards and Interest for SY/YT/Market",source:"@site/docs/Developers/DeveloperFAQ.md",sourceDirName:"Developers",slug:"/Developers/DeveloperFAQ",permalink:"/cn/Developers/DeveloperFAQ",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Overview",permalink:"/cn/Developers/Overview"},next:{title:"High Level Architecture",permalink:"/cn/Developers/HighLevelArchitecture"}},c={},s=[{value:"How to read unclaimed Rewards and Interest for SY/YT/Market",id:"how-to-read-unclaimed-rewards-and-interest-for-syytmarket",level:3},{value:"How to calculate various parameters using on-chain methods",id:"how-to-calculate-various-parameters-using-on-chain-methods",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-faq"},"Developer FAQ"),(0,o.kt)("h3",{id:"how-to-read-unclaimed-rewards-and-interest-for-syytmarket"},"How to read unclaimed Rewards and Interest for SY/YT/Market"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On-Chain Method:")),(0,o.kt)("p",null,"To read for SY, please execute an ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_call")," (",(0,o.kt)("inlineCode",{parentName:"p"},"callStatic")," in ethersjs) to the following function of SY:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimRewards(address user) external returns (uint256[] memory rewardAmounts);\n")),(0,o.kt)("p",null,"For YT, execute the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemDueInterestAndRewards(\n    address user,\n    bool redeemInterest,\n    bool redeemRewards\n) external returns (uint256 interestOut, uint256[] memory rewardsOut);\n")),(0,o.kt)("p",null,"For Market, execute the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemRewards(address user) external returns (uint256[] memory);\n")),(0,o.kt)("p",null,"These calls can be batched through Multicall if necessary."),(0,o.kt)("h3",{id:"how-to-calculate-various-parameters-using-on-chain-methods"},"How to calculate various parameters using on-chain methods"),(0,o.kt)("p",null,"Pendle's RouterStatic, which includes a variety of useful functions for supporting parameter calculations. You can read more on it ",(0,o.kt)("a",{parentName:"p",href:"/cn/Developers/Contracts/PendleRouterStatic"},"here"),"."))}d.isMDXComponent=!0}}]);