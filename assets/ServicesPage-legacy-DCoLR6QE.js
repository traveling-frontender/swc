System.register(["./index-legacy-B6ih2TQn.js","./AppCard-legacy-CpJrMG4-.js"],(function(e,t){"use strict";var i,s,n,r,a,l,c,o,p,f,d,x,g,m,v;return{setters:[e=>{i=e.d,s=e.u,n=e.s,r=e._,a=e.r,l=e.o,c=e.c,o=e.a,p=e.t,f=e.F,d=e.g,x=e.k,g=e.w,m=e.b},e=>{v=e.A}],execute:function(){var t=document.createElement("style");t.textContent='@property --my-angle{syntax: "<angle>"; inherits: false; initial-value: 0turn;}@keyframes gradient{to{--my-angle: 1turn }}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.services{display:flex;flex-direction:column;max-width:1216px;margin:70px auto 150px}.services-title{font-family:Lato,sans-serif;font-size:calc(32px + .0125*(100vw - 320px));line-height:calc(48px + .0125*(100vw - 320px));font-weight:800;text-align:left;white-space:pre-wrap;text-align:center;color:#fff}.services__list{margin-top:90px;display:flex;flex-direction:column;row-gap:30px}.services__list-item{padding:30px;display:flex;align-items:center;column-gap:96px}.services__list-item.card:before{background:linear-gradient(var(--my-angle),#EB0AFF 0%,#00B3FF 100%);animation:gradient 10s ease infinite}.services__list-info{color:#fff;display:flex;flex-direction:column}.services__list-info-title{font-family:Lato,sans-serif;font-size:calc(24px + 4 * (100vw - 320px) / 1280);line-height:calc(30px + 4 * (100vw - 320px) / 1280);font-weight:800;text-align:left;letter-spacing:-.03em;white-space:pre-wrap}.services__list-info-description{margin-top:21px;font-family:Montserrat,sans-serif;font-size:calc(12px + 4 * (100vw - 320px) / 1280);line-height:calc(20px + 4 * (100vw - 320px) / 1280);font-size:16px;font-weight:500;line-height:24px;letter-spacing:-.02em;text-align:left;white-space:pre-wrap}.services__list-icon{width:70px}@media only screen and (max-width: 1024px){.services{padding:0 30px}}@media only screen and (max-width: 578px){.services__list{margin-top:50px}.services__list-item{flex-direction:column;padding:20px;row-gap:15px}}\n',document.head.appendChild(t);const _=i({name:"ServicesPage",components:{AppCard:v},setup(){const{t:e}=s();return{t:e,services:n}}}),u={class:"services"},w={class:"services-title"},y={class:"services__list"},h={class:"services__list-info"},k={class:"services__list-info-title"},b={class:"services__list-info-description"};e("default",r(_,[["render",function(e,t,i,s,n,r){const v=a("SvgIcon"),_=a("router-link"),A=a("AppCard");return l(),c("div",u,[o("span",w,p(e.t("footer.mock.services")),1),o("div",y,[(l(!0),c(f,null,d(e.services,(t=>(l(),x(A,{class:"services__list-item",key:t.title},{body:g((()=>[o("div",h,[o("span",k,p(e.t(`footer.mock.${t.title}`)),1),o("span",b,p(t.description),1)]),m(_,{to:t.link,class:"services__list-icon"},{default:g((()=>[m(v,{icon:"arrow-right_long-circle"})])),_:2},1032,["to"])])),_:2},1024)))),128))])])}]]))}}}));
