"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[9365],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(i),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return i?r.createElement(h,o(o({ref:t},u),{},{components:i})):r.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5381:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=i(7462),a=(i(7294),i(3905));const n={hide_table_of_contents:!0},o="Pool",l={unversionedId:"AppGuide/Trade/Guides/Pool",id:"AppGuide/Trade/Guides/Pool",title:"Pool",description:"Pendle's liquidity pools can be found here. You can see the Pools, their Maturity date, the total Liquidity in the pool, and the current APY of liquidity provision. This APY is the base value, and can be boosted with vePENDLE.",source:"@site/docs/AppGuide/Trade/Guides/Pool.md",sourceDirName:"AppGuide/Trade/Guides",slug:"/AppGuide/Trade/Guides/Pool",permalink:"/AppGuide/Trade/Guides/Pool",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Limit Order",permalink:"/AppGuide/Trade/Guides/LimitOrder"},next:{title:"Claim",permalink:"/AppGuide/Trade/Guides/Claim"}},p={},s=[{value:"Tutorial",id:"tutorial",level:2},{value:"Zapping In to LP",id:"zapping-in-to-lp",level:2},{value:"Zero Price Impact Zap",id:"zero-price-impact-zap",level:3},{value:"Transfer Liquidity",id:"transfer-liquidity",level:2},{value:"Key Features",id:"key-features",level:3},{value:"How to use",id:"how-to-use",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pool"},"Pool"),(0,a.kt)("p",null,"Pendle's liquidity pools can be found ",(0,a.kt)("a",{parentName:"p",href:"https://app.pendle.finance/pro/pools"},"here"),". You can see the ",(0,a.kt)("strong",{parentName:"p"},"Pools"),", their ",(0,a.kt)("strong",{parentName:"p"},"Maturity")," date, the total ",(0,a.kt)("strong",{parentName:"p"},"Liquidity")," in the pool, and the current APY of liquidity provision. This ",(0,a.kt)("strong",{parentName:"p"},"APY")," is the base value, and can be boosted with vePENDLE. "),(0,a.kt)("p",null,"Liquidity providers receive returns from multiple avenues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed rate from PT"),(0,a.kt)("li",{parentName:"ul"},"Protocol rewards from underlying token"),(0,a.kt)("li",{parentName:"ul"},"Swap fees"),(0,a.kt)("li",{parentName:"ul"},"PENDLE incentives")),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("p",null,"Provide liquidity in our trading pools and earn yield in return."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://app.pendle.finance/pro/pools"},"Pools")),(0,a.kt)("li",{parentName:"ol"},"Select your desired pool to LP "),(0,a.kt)("li",{parentName:"ol"},"Choose your input asset to zap with"),(0,a.kt)("li",{parentName:"ol"},"Enter your transaction amount "),(0,a.kt)("li",{parentName:"ol"},"Control your slippage tolerance with the Gear icon in the top right"),(0,a.kt)("li",{parentName:"ol"},"Approve the transaction and Zap In! ")),(0,a.kt)("h2",{id:"zapping-in-to-lp"},"Zapping In to LP"),(0,a.kt)("p",null,"When liquidity is zapped in, a portion of the underlying asset is used to purchase PT from the PT/SY pool, and the rest is wrapped into SY:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Your assets are converted to the required assets and wrapped into SY"),(0,a.kt)("li",{parentName:"ol"},"Some of the SY are minted into PT and YT"),(0,a.kt)("li",{parentName:"ol"},"Minted YTs are sold into PT"),(0,a.kt)("li",{parentName:"ol"},"PTs are paired with SY to provide liquidity")),(0,a.kt)("p",null,"The selling of YT in the 3rd step above can cause a price impact. But, this can be avoided by toggling ",(0,a.kt)("strong",{parentName:"p"},"Zero Price Impact Mode")," (see below)."),(0,a.kt)("h3",{id:"zero-price-impact-zap"},"Zero Price Impact Zap"),(0,a.kt)("p",null,"On Pendle, users have the option to activate ",(0,a.kt)("strong",{parentName:"p"},"Zero Price Impact Mode"),", which allows them to provide liquidity to the PT/SY pool without affecting the price. Normally, when liquidity is added, a portion of the underlying asset is used to purchase PT from the PT/SY pool, and the rest is wrapped into SY. However, this purchase of PT can cause a price impact."),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"Zero Price Impact Mode")," enabled, the underlying asset is fully wrapped into SY, a portion of which is used to mint PT and YT. The PT and remaining SY are then used for liquidity provision, with the YT returned to the user's wallet. This eliminates the step of purchasing PT, thereby avoiding any potential price impact."),(0,a.kt)("h2",{id:"transfer-liquidity"},"Transfer Liquidity"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transfer Liqudiity",src:i(7797).Z,title:"Transfer Liquidity",width:"1538",height:"1125"})),(0,a.kt)("p",null,"Pendle allows users to directly transfer liquidity from one LP pool to another in a single transaction. This feature simplifies the process of exiting and entering different liquidity pools, ensuring optimal transitions and minimizing complexities."),(0,a.kt)("h3",{id:"key-features"},"Key Features"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Seamless LP Pool Transfers"),(0,a.kt)("p",{parentName:"li"},"Swap LP tokens from one pool to another effortlessly with automated processes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Optimal Path Optimization"),(0,a.kt)("p",{parentName:"li"},"Pendle calculates the most efficient route, maximizing returns and minimizing price impact.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Flexible Transfer Options"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LP Only: Transfers only your LP tokens."),(0,a.kt)("li",{parentName:"ul"},"All Positions: Includes LP, PT, and YT positions. Pendle handles the redemption of dual liquidity and the combination of PT and YT for you."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Target Pool information display"),(0,a.kt)("p",{parentName:"li"},"You can check out Pool and APY information of the target Pool at the ",(0,a.kt)("strong",{parentName:"p"},"Target Pool Info")," segment at the top right part of the page "))),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the Transfer Liquidity Page"),(0,a.kt)("p",{parentName:"li"},"Access the feature from the Transfer Liquidity tab in the Pools Action page of an asset")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select Your Transfer Mode"),(0,a.kt)("p",{parentName:"li"},"Choose between LP Only and All Positions based on your needs."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LP Only: Transfers only LP tokens."),(0,a.kt)("li",{parentName:"ul"},"All Positions: Transfers all positions (LP, PT, YT)."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose your Params"),(0,a.kt)("p",{parentName:"li"},"Enable Zero Price Impact Mode to avoid any price impact but you will receive some YT as a result. Or disable the mode to purely receive LP tokens but at the risk of some price impact from swapping. Refer to the docs for Zero Price Impact mode above.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Approve and Execute"),(0,a.kt)("p",{parentName:"li"},"Approve the transaction and let Pendle handle the rest. The system will automatically execute the optimal path for your transfer."))))}c.isMDXComponent=!0},7797:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/transfer-liquidity-906ef196171a448f6fe036a8f39366b7.png"}}]);