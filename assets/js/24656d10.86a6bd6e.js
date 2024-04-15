"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[3613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={hide_table_of_contents:!0},o="PT",l={unversionedId:"ProtocolMechanics/YieldTokenization/PT",id:"ProtocolMechanics/YieldTokenization/PT",title:"PT",description:"Principal Token (PT) represents the principal portion of an underlying yield-bearing asset. Upon maturity, PT can be redeemed at 1:1 for the accounting asset.  This is the base, principal asset deployed in the underlying protocol such as Lido, Renzo, and Aave (e.g. ETH in stETH, ETH in ezETH, USDC in aUSDC).",source:"@site/docs/ProtocolMechanics/YieldTokenization/PT.md",sourceDirName:"ProtocolMechanics/YieldTokenization",slug:"/ProtocolMechanics/YieldTokenization/PT",permalink:"/ProtocolMechanics/YieldTokenization/PT",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Minting",permalink:"/ProtocolMechanics/YieldTokenization/Minting"},next:{title:"YT",permalink:"/ProtocolMechanics/YieldTokenization/YT"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pt"},"PT"),(0,r.kt)("p",null,"Principal Token (PT) represents the principal portion of an underlying yield-bearing asset. Upon maturity, PT can be redeemed at 1:1 for the accounting asset.  This is the base, principal asset deployed in the underlying protocol such as Lido, Renzo, and Aave (e.g. ETH in stETH, ETH in ezETH, USDC in aUSDC). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PT Mechanics",src:n(6902).Z,title:"PT Mechanics",width:"1225",height:"166"})),(0,r.kt)("p",null,"Since the collective value of its yield component has been separated, PT can be acquired at a discount relative to its accounting asset. Assuming no swaps, the value of PT will approach and ultimately match the value of accounting asset on maturity when redemption is enabled."),(0,r.kt)("p",null,"This appreciation in value is what establishes its Fixed Yield APY."),(0,r.kt)("h1",{id:"redemption-value"},"Redemption Value"),(0,r.kt)("p",null,"In general, yield bearing assets can be broadly categorized as:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rebasing assets - tokens that increase in count/number overtime as yield is accrued")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Examples: stETH, aUSDC"),"\n2. Reward-bearing assets - tokens that increase in value overtime as yield is accrued"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Examples: ezETH, wstETH")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Redemption Value",src:n(4331).Z,title:"Redemption Value",width:"1860",height:"831"})),(0,r.kt)("p",null,"In the case of reward-bearing assets, it\u2019s particularly important to note that PT is redeemable 1:1 for the accounting asset, ",(0,r.kt)("em",{parentName:"p"},"NOT")," the **underlying asset."),(0,r.kt)("p",null,"For example, the value of Renzo ezETH increases overtime relative to ETH as staking and restaking rewards are accrued. For every 1 PT-ezETH you own, you\u2019ll be able to redeem 1 ETH worth of ezETH upon maturity, ",(0,r.kt)("em",{parentName:"p"},"NOT")," 1 ezETH which has a higher value",(0,r.kt)("strong",{parentName:"p"},".")),(0,r.kt)("p",null,"You can double-check the redemption value of PT on ",(0,r.kt)("a",{parentName:"p",href:"https://app.pendle.finance/trade/markets"},"Pendle Trade"),"'s individual asset pages."),(0,r.kt)("h1",{id:"how-to-redeem-pt"},"How to Redeem PT"),(0,r.kt)("p",null,"To redeem your PT on maturity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://app.pendle.finance/trade/markets"},"Pendle Trade Markets")," and toggle to the \u201cInactive\u201d markets page"),(0,r.kt)("li",{parentName:"ol"},"Select a market"),(0,r.kt)("li",{parentName:"ol"},"Select an output asset. Pendle will automatically perform Redemption > Swap (if needed) for you")))}u.isMDXComponent=!0},6902:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pt-mechanics-570352369debc97eca60acff6fdbe73e.png"},4331:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redemption-value-5a9cc135d827dacc111106a846d51eb4.png"}}]);