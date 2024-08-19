"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[2184],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={hide_table_of_contents:!0},i="Uncategorised questions",l={unversionedId:"Developers/UncategorisedQuestions",id:"Developers/UncategorisedQuestions",title:"Uncategorised questions",description:"This document is being iterated on rapidly due to incoming questions from partner protocols.",source:"@site/docs/Developers/UncategorisedQuestions.md",sourceDirName:"Developers",slug:"/Developers/UncategorisedQuestions",permalink:"/Developers/UncategorisedQuestions",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"High Level Architecture",permalink:"/Developers/HighLevelArchitecture"},next:{title:"Pendle Backend",permalink:"/Developers/Backend"}},s={},d=[{value:"Router",id:"router",level:2},{value:"Why No\xa0<code>swapExactSyForPt</code>?",id:"why-noswapexactsyforpt",level:3},{value:"Others",id:"others",level:2},{value:"Getting Up-to-Date\xa0<code>accruedRewards</code>\xa0On-Chain (Applicable to SY, YT, &amp; LP)",id:"getting-up-to-dateaccruedrewardson-chain-applicable-to-sy-yt--lp",level:3},{value:"Can the output of\xa0<code>getRewardTokens</code>\xa0change?",id:"can-the-output-ofgetrewardtokenschange",level:3},{value:"How to read unclaimed Rewards and Interest for SY/YT/Market",id:"how-to-read-unclaimed-rewards-and-interest-for-syytmarket",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uncategorised-questions"},"Uncategorised questions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This document is being iterated on rapidly due to incoming questions from partner protocols."),"\xa0"),(0,a.kt)("h2",{id:"router"},"Router"),(0,a.kt)("h3",{id:"why-noswapexactsyforpt"},"Why No\xa0",(0,a.kt)("inlineCode",{parentName:"h3"},"swapExactSyForPt"),"?"),(0,a.kt)("p",null,"Unlike standard AMMs, Pendle's AMM only allows swapping exact PT in/out. Therefore, functions like\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"swapExactSyForPt"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"swapPtForExactSy"),"\xa0should generally be avoided. If necessary, use PendleRouter's\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"swapExactSyForPt"),"\xa0with\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"approx"),"\xa0parameters. Refer to the PendleRouter documentation for details."),(0,a.kt)("h2",{id:"others"},"Others"),(0,a.kt)("h3",{id:"getting-up-to-dateaccruedrewardson-chain-applicable-to-sy-yt--lp"},"Getting Up-to-Date\xa0",(0,a.kt)("inlineCode",{parentName:"h3"},"accruedRewards"),"\xa0On-Chain (Applicable to SY, YT, & LP)"),(0,a.kt)("p",null,"There are two methods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Call\xa0",(0,a.kt)("inlineCode",{parentName:"strong"},"redeemRewards(user)"),"\xa0and retrieve the output."),"\xa0This method has the side effect of redeeming the user's rewards, so it might not be ideal."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Call\xa0",(0,a.kt)("inlineCode",{parentName:"strong"},"IERC20(market).transfer(user,0)"),"\xa0followed by\xa0",(0,a.kt)("inlineCode",{parentName:"strong"},"accruedRewards"),"."),"\xa0The transfer triggers an update of the user's rewards.")),(0,a.kt)("h3",{id:"can-the-output-ofgetrewardtokenschange"},"Can the output of\xa0",(0,a.kt)("inlineCode",{parentName:"h3"},"getRewardTokens"),"\xa0change?"),(0,a.kt)("p",null,"Yes, the output can change if the underlying protocol adds new reward tokens. However, no reward tokens will ever be removed."),(0,a.kt)("h3",{id:"how-to-read-unclaimed-rewards-and-interest-for-syytmarket"},"How to read unclaimed Rewards and Interest for SY/YT/Market"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On-Chain Method:")),(0,a.kt)("p",null,"To read for SY, please execute an ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_call")," (",(0,a.kt)("inlineCode",{parentName:"p"},"callStatic")," in ethersjs) to the following function of SY:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimRewards(address user) external returns (uint256[] memory rewardAmounts);\n")),(0,a.kt)("p",null,"For YT, execute the following function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemDueInterestAndRewards(\n    address user,\n    bool redeemInterest,\n    bool redeemRewards\n) external returns (uint256 interestOut, uint256[] memory rewardsOut);\n")),(0,a.kt)("p",null,"For Market, execute the following function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemRewards(address user) external returns (uint256[] memory);\n")),(0,a.kt)("p",null,"These calls can be batched through Multicall if necessary."))}p.isMDXComponent=!0}}]);