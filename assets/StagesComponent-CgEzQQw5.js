import{d as i,i as c,u as _,_ as d,r as l,o as a,c as r,a as t,t as n,K as m,F as g,g as u,j as h,w}from"./index-DDyZIDCy.js";import{A as S}from"./AppCard-Cb1KVcua.js";const C=i({name:"StagesComponent",components:{AppCard:S},props:{title:String,stages:Object,showButton:Boolean},setup(){const s=c(),{t:o}=_();return{t:o,mainStore:s}}}),$={class:"stages"},f={class:"stages__wrapper"},v={class:"stages__wrapper-actions"},B={class:"stages__wrapper-actions-title"},k={class:"stages__wrapper-list"},b={class:"stages__wrapper-item-title"},y={class:"stages__wrapper-item-description"};function A(s,o,M,j,F,I){const p=l("AppCard");return a(),r("div",$,[t("div",f,[t("div",v,[t("span",B,n(s.$props.title),1),s.$props.showButton?(a(),r("button",{key:0,class:"stages__wrapper-actions-button",onClick:o[0]||(o[0]=(...e)=>s.mainStore.changeStateModal&&s.mainStore.changeStateModal(...e))},n(s.t("home.order")),1)):m("",!0)]),t("div",k,[(a(!0),r(g,null,u(s.$props.stages,e=>(a(),h(p,{key:e.title,class:"stages__wrapper-item"},{body:w(()=>[t("span",b,n(s.t("stage.develop.item.".concat(e.title))),1),t("span",y,n(e.description),1)]),_:2},1024))),128))])])])}const D=d(C,[["render",A],["__scopeId","data-v-03d1a0b0"]]);export{D as S};