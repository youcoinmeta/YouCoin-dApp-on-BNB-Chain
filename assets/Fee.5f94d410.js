import{c as s,B as a}from"./index.6399d1e7.js";import{u as e}from"./system.baf15b3c.js";import{d as i,c as t,o as n,a as o,e as c,t as r,u as f,p as l,f as d,_ as m}from"./index.a4b4b41e.js";const p=s=>(l("data-v-131a3b67"),s=s(),d(),s),v={class:"info fee"},u={class:"info-item"},b=p((()=>c("i",{class:"info-icon icon-water"},null,-1))),x={class:"text"},_={class:"info-item"},F=p((()=>c("i",{class:"info-icon icon-fire"},null,-1))),j={class:"text"},w=m(i({__name:"Fee",props:{fee:null},setup(i){const l=i,d=e(),m=t((()=>new a(l.fee).times(new a("1e18")).idiv(d.basePrice).idiv(a("1000000")).toString(10)));return(a,e)=>(n(),o("div",v,[c("div",u,[b,c("span",x,r(a.$t("Harvest.TransactionFee",{value:f(s)(f(m))})),1)]),c("div",_,[F,c("span",j,r(a.$t("Harvest.TransactionFees")),1)])]))}}),[["__scopeId","data-v-131a3b67"]]);export{w as F};