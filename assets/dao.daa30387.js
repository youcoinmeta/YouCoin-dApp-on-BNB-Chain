import{ae as a,B as e,af as t,ag as n,N as o}from"./index.6399d1e7.js";import{W as s,a1 as c,r,c as u,h as l}from"./index.a4b4b41e.js";import{d as i,u as w}from"./system.baf15b3c.js";import{h as d}from"./contract.6eb045b0.js";import{u as p}from"./tip.9f3691cb.js";const f=p();function m(t){const n=i();return{getUconBalance:async function(o){const s=await a.call("balanceOf",[n.account]),c=await a.call("allowance",[n.account,t]),r=-1===new e(c).comparedTo(new e(o)),u=!(-1===new e(s).comparedTo(new e(o)));return r?(f.changeDao(!0),!1):(u||f.changeDao(!1),u)}}}const{getUconBalance:v}=m("0x84EF0D09F9Ba4239976CC68cD6e549b5c8729dc1"),U=i();function h(){return w(),{getSysParam:async function(a){const e=await t.call("getSysParam",[]);let{marketOut:o,daoShareOut:s,totalInUcon:c,avaiUcon:r}=e;const u=await n.call("getAll",[a]);let{minStakeUcon:l,dayUnstakeRate:i,unstakeBurnUcon:w,unstakeWithdrawBurnUcon:d,maxRunningProposal:p,commitProposalBurnUcon:f,finishProposalReward:m,shareRewardBurnUcon:v,totalStakeUcon:U,shareTimes:h,totalVote:k,uconStakeIncrease:P,medalIncreaseRate:S,proposalIncreaseRate:g,fullProposalIncreaseRate:y,totalShareReward:R,voteProposalBurnUcon:x}=u.param;return{minStakeUcon:l,dayUnstakeRate:i,unstakeBurnUcon:w,unstakeWithdrawBurnUcon:d,maxRunningProposal:p,voteProposalBurnUcon:x,commitProposalBurnUcon:f,finishProposalReward:m,shareRewardBurnUcon:v,totalStakeUcon:U,shareTimes:h,totalVote:k,uconStakeIncrease:P,medalIncreaseRate:S,proposalIncreaseRate:g,fullProposalIncreaseRate:y,totalShareReward:R,marketOut:o,daoShareOut:s,totalInUcon:c,avaiUcon:r}},getAccount:async function(a){const e=await n.call("getAll",[a]),{ai:t,processCount:o}=e;return{...t,processCount:o}},getProposalList:async function(a,e,t){return await n.call("getProposalList",[a,t,e])},getAccountProposal:async function(a,e,t){return await n.call("getAccountProposal",[a,t,e])},isRole:async function(){return await d(U.account)},stakeUcon:async function(a){await n.execute("stakeUCON",[a])},unstakeUcon:async function(a,e){await v(e)&&await n.execute("unstakeUCON",[a])},withdrawUnstakeUcon:async function(a){await v(a)&&await n.execute("withdrawUnstakeUcon",[])},submitProposal:async function(a,e,t,o,s,c,r){await v(c)&&await n.execute("submitProposaldixczv",[[a,e,t,o,s],r])},voteProposal:async function(a,e,t){await n.execute("voteProposalasdfxzcv",[a,e,t])},flushProcessProposal:async function(a,e){await n.execute("flushProcessProposal",[a,e])},finishProposal:async function(a){await n.execute("finishProposalasdfzxcv",[a])},withdrawShareReward:async function(a){await v(a)&&await n.execute("withdrawShareReward",[])},flushAccountStatus:async function(a){await v(a)&&await n.execute("flushAccountStatus",[U.account,"0x0000000000000000000000000000000000000000000000000000000000000000","10"])},CancelProposal:async function(a){await n.execute("CancelProposal",[a])},RecoveryHideProposal:async function(a){await n.execute("RecoveryHideProposal",[a])}}}new s;const{getSysParam:k,getAccount:P,getProposalList:S,getAccountProposal:g}=h(),y=c("dao",(()=>{const a=r(1),t=r(!0),n=r(!0),s=r("10"),c=r(!1),w=r(!1),d=i(),p=u((()=>d.account)),f=r({totalStakeUcon:"0",marketOut:"0",daoShareOut:"0",totalInUcon:"0",avaiUcon:"0",dayUnstakeRate:"0",totalVote:"0",shareTimes:"0",totalShareReward:"0",commitProposalBurnUcon:"0",unstakeBurnUcon:"0",unstakeWithdrawBurnUcon:"0",shareRewardBurnUcon:"0",uconStakeIncrease:[],medalIncreaseRate:[],minStakeUcon:"0",proposalIncreaseRate:"0",fullProposalIncreaseRate:"0",finishProposalReward:"0",voteProposalBurnUcon:"0"}),m=r({voteDetail:["0","0","0","0"],stakeUCON:"0",processCount:"0",totalUnstakeUcon:"0",pendingUnstakeUcon:"0",unstakeStartTime:"0",avaiUnstakeUcon:"0",totalVote:"0",avaiShareUcon:"0",totalShareUcon:"0",totalExecuteFinishReward:"0",blockFlag:"0",blockSubmitDeadline:"0"}),v=r([]),U=u((()=>{const{dayUnstakeRate:a}=f.value;return new e(1e18).div(new e(a)).toString(10)})),h=u((()=>{const{totalVote:a}=f.value,t=m.value.totalVote;return new e(t).div(new e(a)).times(100).decimalPlaces(0).toString(10)})),y=u((()=>{const{stakeUCON:a}=m.value,{uconStakeIncrease:t}=f.value;if(t.length>0){const n=t[0],o=t[1],s=t[2],c=t[3];return new e(a).comparedTo(new e(c.minStake))>=0?4:new e(a).comparedTo(new e(s.minStake))>=0?3:new e(a).comparedTo(new e(o.minStake))>=0?2:new e(a).comparedTo(new e(n.minStake))>=0?1:0}return 0})),R=u((()=>{const{processCount:a,stakeUCON:t}=m.value;return new e(t).comparedTo(new e("100").times(new e("1e18")))>=0})),x=u((()=>{const{processCount:a}=m.value;return"0"===a}));async function I(){let a=await k(p.value);f.value=a;const e=await P(p.value);m.value={...e}}l(p,(async e=>{if(e){B(a.value,!0);const t=await o.call("hasRole",["0x35867f9e6c4fc47417f2f795eba6eb7f71dd6647351ab9ec723bbce399915b0a",e]);I(),w.value=t}}),{immediate:!0});const b=u((()=>{const a=v.value,e=a.length;return 0===e?"0x0000000000000000000000000000000000000000000000000000000000000000":a[e-1].proposalInfo.id}));async function B(e,o){if(a.value!==e&&(t.value=!0,n.value=!0),e>-1&&(a.value=e),e=a.value,o&&(v.value=[]),1===e){const a=await g(p.value,s.value,b.value),{infos:e}=a;e.length<Number(s.value)&&(n.value=!1);let t=[];for(let n=0;n<e.length;n++){const{proposalInfo:{status:a,flag:o}}=e[n];(w.value||"2"!==a&&"0"===o)&&t.push(e[n])}v.value=v.value.concat(t)}else{const a=[{index:0,status:"255"},{index:2,status:"4"},{index:3,status:"3"},{index:4,status:"0"},{index:5,status:"1"},{index:6,status:"2"}].find((a=>a.index===e))||{index:0,status:"255"};await async function(a){const{hasRemain:e,infos:t,totalItems:o}=await S(a,s.value,b.value);let c=[];n.value=e;for(let n=0;n<t.length;n++){const{proposalInfo:{status:a,flag:e}}=t[n];(w.value||"2"!==a&&"0"===e)&&c.push(t[n])}return v.value=v.value.concat(c),{hasRemain:e,infos:t,totalItems:o}}(a.status)}n.value&&v.value.length<10&&B(e)}return{daoSystemInfo:f,accountInfo:m,proposalList:v,availabelShares:h,identity:y,dayUnstake:U,isRedeem:x,isAdmin:c,isDaoAdmin:w,isStake:R,isHasRemain:n,pageNum:s,getSystemInfo:I,getList:B}}));export{h as a,m as b,y as u};