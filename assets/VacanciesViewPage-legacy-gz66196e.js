System.register(["./AppCard-legacy-Bn9DqPcj.js","./FeedbackComponent-legacy-DGFNs_q4.js","./index-legacy-DBDcd4Zl.js"],(function(e,t){"use strict";var a,n,i,c,s,o,l,r,p,f,d,x,v;return{setters:[e=>{a=e.A},e=>{n=e.F},e=>{i=e.d,c=e.u,s=e.v,o=e.z,l=e._,r=e.o,p=e.c,f=e.a,d=e.t,x=e.F,v=e.h}],execute:function(){var t=document.createElement("style");t.textContent='@keyframes background{50%{background:#00ffe1;box-shadow:0 -200px 100px -100px #00b3ff inset}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.vacancy{color:#fff;margin-bottom:240px}.vacancy__wrapper{display:flex;flex-direction:column;max-width:1216px;margin:70px auto 0}.vacancy__header{position:relative;display:flex;align-items:center;justify-content:space-between;padding-bottom:40px}.vacancy__header:after{content:"";position:absolute;left:0;bottom:0;height:1px;width:100%;background-color:rgba(255,255,255,.3)}.vacancy-title{font-family:Lato,sans-serif;font-size:calc(32px + 18 * (100vw - 320px) / 1280);line-height:calc(48px + 18 * (100vw - 320px) / 1280);font-weight:800;text-align:left;white-space:pre-wrap}.vacancy-schedule{display:flex;justify-content:center;align-content:center;align-items:center;text-align:center;text-decoration:unset;font-family:Inter,sans-serif;font-size:19px;font-weight:600;line-height:21.78px;letter-spacing:-.03em;text-align:left;white-space:pre-wrap;color:#fff;width:186px;height:42px;border-radius:100px;border:1px solid rgba(255,255,255,.3)}.vacancy__info{margin-top:80px;display:flex;flex-direction:column;row-gap:60px}.vacancy__info-item-title{font-family:Lato,sans-serif;font-size:calc(24px + 6 * (100vw - 320px) / 1280);line-height:calc(30px + 6 * (100vw - 320px) / 1280);font-weight:800;text-align:left;letter-spacing:-.03em;white-space:pre-wrap}.vacancy__list{display:flex;flex-direction:column;row-gap:16px;margin-top:24px}.vacancy__list-item{position:relative;padding-left:28px}.vacancy__list-item:before{content:"";position:absolute;top:12px;left:0;width:20px;height:1px;background:#fff}.vacancy__list-item-text{font-family:Montserrat,sans-serif;font-size:calc(16px + 6 * (100vw - 320px) / 1280);line-height:calc(26px + 6 * (100vw - 320px) / 1280);font-weight:500;letter-spacing:.02em;text-align:left;white-space:pre-wrap}.vacancy__feedback{max-width:1216px;margin:100px auto 0}@media only screen and (max-width: 1600px){.vacancy{padding:0 30px}}@media only screen and (max-width: 578px){.vacancy__header{flex-direction:column;align-items:start;row-gap:16px}}\n',document.head.appendChild(t);const y=i({name:"ServicesPage",components:{AppCard:a,FeedbackComponent:n},setup(){const{t:e}=c(),t=o();return{t:e,vacancy:s.find((e=>e.title==t.params.id))}}}),m={class:"vacancy"},g={class:"vacancy__wrapper"},_={class:"vacancy__header"},h={class:"vacancy-title"},w={class:"vacancy-schedule"},u={class:"vacancy__info-item"},b={class:"vacancy__info-item-title"},k={class:"vacancy__info-item-list vacancy__list"},C={class:"vacancy__list-item-text"};e("default",l(y,[["render",function(e,t,a,n,i,c){return r(),p("div",m,[f("div",g,[f("div",_,[f("span",h,d(e.t(`vacancies.view.${e.vacancy?.title}.title`)),1),f("span",w,d(e.t("time.full")),1)]),(r(!0),p(x,null,v(e.vacancy?.infoList,((t,a)=>(r(),p("div",{class:"vacancy__info",key:a},[f("div",u,[f("span",b,d(e.t(`vacancies.view.${e.vacancy?.title}.${a}.title`)),1),f("div",k,[(r(!0),p(x,null,v(t,((t,n)=>(r(),p("div",{class:"vacancy__list-item",key:n},[f("span",C,d(e.t(`vacancies.view.${e.vacancy?.title}.${a}.${t}`)),1)])))),128))])])])))),128))])])}]]))}}}));
