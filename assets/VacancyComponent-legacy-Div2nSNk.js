System.register(["./index-legacy-B6ih2TQn.js","./AppCard-legacy-CpJrMG4-.js"],(function(t,e){"use strict";var a,n,i,r,c,o,s,l,p,f,m,d,g,x,v;return{setters:[t=>{a=t.d,n=t.u,i=t.v,r=t._,c=t.r,o=t.o,s=t.c,l=t.g,p=t.k,f=t.w,m=t.a,d=t.t,g=t.b,x=t.F},t=>{v=t.A}],execute:function(){var e=document.createElement("style");e.textContent='@property --my-angle{syntax: "<angle>"; inherits: false; initial-value: 0turn;}@keyframes gradient{to{--my-angle: 1turn }}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.vacancy-item{grid-column:span 1;display:flex;flex-direction:column;padding:20px}.vacancy-item-title{font-family:Inter,sans-serif;font-size:calc(24px + .00625*(100vw - 320px));line-height:calc(30px + .00625*(100vw - 320px));font-weight:700;text-align:left;white-space:pre-wrap;margin-bottom:23px}.vacancy-item-description{font-family:Montserrat,sans-serif;font-size:calc(12px + 4 * (100vw - 320px) / 1280);line-height:calc(20px + 4 * (100vw - 320px) / 1280);font-size:16px;font-weight:500;line-height:24px;letter-spacing:-.02em;text-align:left;white-space:pre-wrap;margin-bottom:40px;-webkit-box-orient:vertical;display:block;display:-webkit-box;overflow:hidden!important;text-overflow:ellipsis;-webkit-line-clamp:5}.vacancy-item-link{display:flex;align-items:center;gap:2px;color:#fff;text-decoration:unset;font-family:Montserrat,sans-serif;font-size:calc(14px + 2 * (100vw - 320px) / 1280);line-height:calc(21px + 2 * (100vw - 320px) / 1280);font-weight:500;text-align:left;white-space:pre-wrap;margin-top:auto}\n',document.head.appendChild(e);const y=a({name:"HomePage",components:{AppCard:v},setup(){const{t:t}=n();return{t:t,vacancies:i}}}),w={class:"vacancy-item-title"},u={class:"vacancy-item-description"};t("V",r(y,[["render",function(t,e,a,n,i,r){const v=c("SvgIcon"),y=c("router-link"),h=c("AppCard");return o(!0),s(x,null,l(t.vacancies,(e=>(o(),p(h,{key:e.title,class:"vacancy-item"},{body:f((()=>[m("span",w,d(t.t(`vacancies.card.${e.title}.title`)),1),m("span",u,d(t.t(`vacancies.card.${e.title}.description`)),1),g(y,{to:e.link,class:"vacancy-item-link"},{default:f((()=>[m("span",null,d(t.t("vacancies.card.conditions")),1),g(v,{icon:"arrow-right"})])),_:2},1032,["to"])])),_:2},1024)))),128)}]]))}}}));
