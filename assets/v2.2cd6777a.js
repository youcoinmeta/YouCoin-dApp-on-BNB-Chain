import{u as e,b as a,c as t,d as n}from"./system.abdb71fd.js";import{V as s,C as i,B as o,_ as r}from"./index.c5a6da3b.js";import{W as c,a1 as u,c as l,r as d,h as w}from"./index.f3e191e6.js";const f=r,g=new c,{utils:v}=g;function y(){const a=e();async function t(e){const t=new i(f,"0x1F88E9956c8f8F64c8D5fEF5eD8A818E2237112c"),n=await t.call("balanceOf",[a.account]),s=await t.call("allowance",[a.account,"0x3341391e8750ca8Db57F69570AfAf0319c6b93C3"]),r=-1===new o(s).comparedTo(new o(e)),c=!(-1===new o(n).comparedTo(new o(e)));return r?(a.changeTipV2(!0),!1):(c||a.changeTipV2(!0),c)}return{unstake:async function(e,a,n){v.bytesToHex(JSON.parse(JSON.stringify(e))),await t(n)&&await s.execute("abcdeunstake",[e,a])},activeUser:async function(){await s.execute("abcdeactive",[])},restake:async function(e){await s.execute("abcderestake",[e])},getSysParam:async function(e){return await s.call("getSysParam",[e])},getAccount:async function(e,a,t,n){try{return await s.call("getAccount",[e,a,t,n])}catch(i){}},stake:async function(e,a,t,n){try{return await s.execute("stake",[e,a,t,n])}catch(i){}},enableAutoReinvest:async function(e,a){await s.execute("enableAutoReinvest",[e,a])},withdrawKeepPool:async function(e,a){await s.execute("withdrawKeepPool",[e,a])},withdraw:async function(e){await t(e)&&await s.execute("withdraw",[])},issueNFT:async function(e){await s.execute("abcdeissueNFT",[e])},trigger:async function(e,a){if(await t(a))return await s.execute("abcdetrigger",[e])},addToken:async function(e){await s.execute("addToken",[e])}}}const{getSysParam:m,getAccount:k}=y(),{getAccountID:h,getUserAccount:A}=a();async function p(e,a){let t=[];const n=await k("0",e,a,!1),{orders:{orders:s,unfinish:i}}=n;if(t=t.concat(s),i){const a=s[s.length-1].link.id;let n=await p(e,a);t=t.concat(n)}return t}const S=u("v2",(()=>{const e=t(),a=n(),s=l((()=>a.account)),i=d(""),r=d("0"),c=d("0"),u=d("0"),f=d({avaiReward:"0",id:"0",level:"0",medalValue:"0",myselfAchieveLevel:"0",totalAffUsd:"0",totalReward:"0",needActive:"0",totalStakeAffWithdraw:"0",totalStakeUsd:"0",withdrawAddrs:[],migrateReward:"0",totalWithdrawUSD:"",migrateRewardUsd:"0"}),g=d([]),v=d({autoRestakeGapTime:"0",damagesRatio:"0",day:"300",lastStakeTime:"0",newOrderID:"0",noStakePauseDays:"0",sero:"0xBB18b3210eB0d8926fF89D339495F0940b736162",stake2Burn:"0",stake2DAO:"0",stake2Market:"0",stake2Sero:"0",stake2Share:"0",stake2UCON:"0",startTime:"1683775446",sysCoinAffAssignTotal:"0",sysCoinAffTotal:"0",sysCoinBoughtTotal:"0",sysCoinBurnTotal:"0",sysCoinDamages2Share:"0",sysCoinDamagesTotal:"0",sysCoinFeeBurnTotal:"0",sysCoinReplenish:"0",sysCoinRewardActually:"0",sysCoinStakeBurnTotal:"0",sysCoinTotalReward:"0",tradeFee:"0",triggleFee:"0",ubsInvestTotal:"0",ucon:"0xD755f05d67a4cc2Da81923ACdAE5640A9e863ABc",usdDecimal:"1000000",withdrawFee:"0",triggerFee:"0"}),y=d([]);w(s,(async e=>{i.value=localStorage.getItem(s.value)||"Account",C()}));const A=l((()=>{const{stake2Burn:e,stake2DAO:a,stake2Market:t,stake2Sero:n,stake2Share:s,stake2UCON:i}=v.value,r=new o(e).plus(new o(a)).plus(new o(t)).plus(new o(n)).plus(new o(s)).plus(new o(i)).times(new o(100));return new o(1e20).minus(r).toString(10)})),S=l((()=>{if("0"===r.value)return"0";return new o(v.value.withdrawFee).times(new o("1e18")).div(r.value).toString(10)})),T=l((()=>"0"===r.value?"0":new o(v.value.triggerFee).times(new o("1e18")).div(r.value).toString(10))),R=l((()=>{const{totalReward:e="0",totalAffReward:a="0",migrateReward:t="0"}=f.value;return new o(e).plus(new o(a)).plus(t).toString(10)}));async function C(){if(!s.value)return;const{medalInfos:a,param:t,tokens:n}=await m(!1);v.value=t;let i,l=await h(s.value),d=[];if("0"!==l.id){const a=await k("0",s.value,"0x000000000000000000000000000000000000000000000000000000000000",!1),{accountInfo:t,atokens:n,orders:o}=a;d=await p(s.value,"0x000000000000000000000000000000000000000000000000000000000000"),f.value=t;const{issueMedalLevel:r,latestMedalLevel:c}=f.value;e.change(r,c),i=o,g.value=n}else f.value={avaiReward:"0",id:"0",level:"0",medalValue:"0",myselfAchieveLevel:"0",totalAffUsd:"0",totalReward:"0",needActive:"0",totalStakeAffWithdraw:"0",totalStakeUsd:"0",withdrawAddrs:[],migrateReward:"0",totalWithdrawUSD:"",migrateRewardUsd:"0"};const w=[];for(let e=0;e<n.length;e++){const a=n[e];let{name:t}=n[e];if("bSERO"===t&&(t="SERO"),"YouCoin"===t&&(t="UCON"),"Ethereum Token"===t&&(t="ETH"),"UCON"===t&&(r.value=n[e].ti.price),"SERO"===t&&(c.value=a.ti.price),"ETH"===t&&(u.value=o(a.ti.price).dividedBy("1000000").toString(10)),"0"!==l.id){const a=d.filter((a=>a.token.toLocaleLowerCase()===n[e].ti.addr.toLocaleLowerCase())),s={ati:g.value[e].ati,packages:g.value[e].packages,orders:{...i,orders:a}};w.push({...n[e],name:t,user:s})}else w.push({...n[e],name:t})}y.value=w}return{account:s,tokenList:y,stakeRate:A,accountInfo:f,userTokenList:g,price:r,seroPrice:c,ethPrice:u,withdrawFee:S,triggerFee:T,systemInfoV2:v,totalReward:R,getSystemInfo:C}}));export{y as a,S as u};