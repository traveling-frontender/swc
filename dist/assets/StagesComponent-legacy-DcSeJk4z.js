System.register(["./index-legacy-BzB813bf.js","./AppCard-legacy-Cfbz62vh.js"],(function(t,e){"use strict";var a,s,r,n,i,p,o,d,l,c,g,f,m,w,x;return{setters:[t=>{a=t.d,s=t.h,r=t.u,n=t._,i=t.r,p=t.o,o=t.c,d=t.a,l=t.t,c=t.L,g=t.F,f=t.g,m=t.k,w=t.w},t=>{x=t.A}],execute:function(){var e=document.createElement("style");e.textContent='@property --my-angle{syntax: "<angle>"; inherits: false; initial-value: 0turn;}@keyframes gradient-03d1a0b0{to{--my-angle: 1turn }}@keyframes rotate-03d1a0b0{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate-03d1a0b0{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.stages[data-v-03d1a0b0]{display:flex;flex-direction:column}.stages__wrapper[data-v-03d1a0b0]{color:#fff;display:grid;grid-template-columns:repeat(2,1fr);column-gap:12px}.stages__wrapper-actions-title[data-v-03d1a0b0]{display:block;font-family:Lato,sans-serif;font-size:calc(32px + .0125*(100vw - 320px));line-height:calc(48px + .0125*(100vw - 320px));font-weight:800;text-align:left;white-space:pre-wrap;max-width:550px}.stages__wrapper-actions-button[data-v-03d1a0b0]{outline:none;border:none;padding:0;cursor:pointer;background:unset;font-family:Inter,sans-serif;font-size:15px;font-weight:700;line-height:18.15px;display:flex;justify-content:center;align-content:center;align-items:center;text-align:center;height:50px;border:1px solid #FFFFFF;background:#fff;color:#1a1a1a;border-radius:10px;width:186px;margin-top:30px}.stages__wrapper-actions-button[data-v-03d1a0b0]:hover{background:transparent;color:#fff}.stages__wrapper-actions-button[data-v-03d1a0b0]:disabled{background:#fff;color:#1a1a1a;cursor:unset;opacity:.5}.stages__wrapper-list[data-v-03d1a0b0]{display:flex;flex-direction:column;row-gap:24px}.stages__wrapper-item[data-v-03d1a0b0]{padding:30px;flex-direction:column}.stages__wrapper-item-title[data-v-03d1a0b0]{font-family:Lato,sans-serif;font-size:calc(24px + 4 * (100vw - 320px) / 1280);line-height:calc(30px + 4 * (100vw - 320px) / 1280);font-weight:800;text-align:left;letter-spacing:-.03em;white-space:pre-wrap}.stages__wrapper-item-description[data-v-03d1a0b0]{font-family:Montserrat,sans-serif;font-size:calc(16px + 4 * (100vw - 320px) / 1280);line-height:calc(26px + 4 * (100vw - 320px) / 1280);font-weight:500;letter-spacing:.02em;text-align:left;white-space:pre-wrap;margin-top:21px}@media only screen and (max-width: 1024px){.stages__wrapper-item[data-v-03d1a0b0]{padding:15px}}@media only screen and (max-width: 578px){.stages__wrapper[data-v-03d1a0b0]{grid-template-columns:1fr;row-gap:16px}.stages__wrapper-actions-button[data-v-03d1a0b0]{width:100%}}\n',document.head.appendChild(e);const _=a({name:"StagesComponent",components:{AppCard:x},props:{title:String,stages:Object,showButton:Boolean},setup(){const t=s(),{t:e}=r();return{t:e,mainStore:t}}}),u={class:"stages"},b={class:"stages__wrapper"},h={class:"stages__wrapper-actions"},v={class:"stages__wrapper-actions-title"},y={class:"stages__wrapper-list"},k={class:"stages__wrapper-item-title"},S={class:"stages__wrapper-item-description"};t("S",n(_,[["render",function(t,e,a,s,r,n){const x=i("AppCard");return p(),o("div",u,[d("div",b,[d("div",h,[d("span",v,l(t.$props.title),1),t.$props.showButton?(p(),o("button",{key:0,class:"stages__wrapper-actions-button",onClick:e[0]||(e[0]=(...e)=>t.mainStore.changeStateModal&&t.mainStore.changeStateModal(...e))},l(t.t("home.order")),1)):c("",!0)]),d("div",y,[(p(!0),o(g,null,f(t.$props.stages,(e=>(p(),m(x,{key:e.title,class:"stages__wrapper-item"},{body:w((()=>[d("span",k,l(t.t(`stage.develop.item.${e.title}`)),1),d("span",S,l(e.description),1)])),_:2},1024)))),128))])])])}],["__scopeId","data-v-03d1a0b0"]]))}}}));