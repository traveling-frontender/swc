System.register(["./AppCard-legacy-BEey5juf.js","./index-legacy-koDsyyuN.js"],(function(e,t){"use strict";var i,s,n,r,a,c,o,l,p,f,x,d,m,g,v;return{setters:[e=>{i=e.A},e=>{s=e.d,n=e.u,r=e.m,a=e._,c=e.r,o=e.o,l=e.c,p=e.a,f=e.t,x=e.F,d=e.h,m=e.i,g=e.w,v=e.b}],execute:function(){var t=document.createElement("style");t.textContent="@keyframes background{50%{background:#00ffe1;box-shadow:0 -200px 100px -100px #00b3ff inset}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.services{display:flex;flex-direction:column;max-width:1216px;margin:70px auto 150px}.services-title{font-family:Lato,sans-serif;font-size:calc(32px + 18 * (100vw - 320px) / 1280);line-height:calc(48px + 18 * (100vw - 320px) / 1280);font-weight:800;text-align:left;white-space:pre-wrap;text-align:center;color:#fff}.services__list{margin-top:90px;display:flex;flex-direction:column;row-gap:30px}.services__list-item{padding:30px;display:flex;align-items:center;column-gap:96px}.services__list-item.card:before{background:#00ffe1;box-shadow:0 -200px 100px -120px #42ff0a inset;animation:background 5s infinite alternate}.services__list-info{color:#fff;display:flex;flex-direction:column}.services__list-info-title{font-family:Lato,sans-serif;font-size:calc(24px + 6 * (100vw - 320px) / 1280);line-height:calc(30px + 6 * (100vw - 320px) / 1280);font-weight:800;text-align:left;letter-spacing:-.03em;white-space:pre-wrap}.services__list-info-description{margin-top:21px;font-family:Montserrat,sans-serif;font-size:calc(12px + 6 * (100vw - 320px) / 1280);line-height:calc(20px + 6 * (100vw - 320px) / 1280);font-size:16px;font-weight:500;line-height:24px;letter-spacing:-.02em;text-align:left;white-space:pre-wrap}.services__list-icon{width:70px}@media only screen and (max-width: 1024px){.services{padding:0 30px}}@media only screen and (max-width: 578px){.services__list{margin-top:50px}.services__list-item{flex-direction:column;padding:20px;row-gap:15px}}\n",document.head.appendChild(t);const _=s({name:"ServicesPage",components:{AppCard:i},setup(){const{t:e}=n();return{t:e,services:r}}}),w={class:"services"},u={class:"services-title"},h={class:"services__list"},y={class:"services__list-info"},k={class:"services__list-info-title"},b={class:"services__list-info-description"};e("default",a(_,[["render",function(e,t,i,s,n,r){const a=c("SvgIcon"),_=c("router-link"),C=c("AppCard");return o(),l("div",w,[p("span",u,f(e.t("footer.mock.services")),1),p("div",h,[(o(!0),l(x,null,d(e.services,(t=>(o(),m(C,{class:"services__list-item",key:t.title},{body:g((()=>[p("div",y,[p("span",k,f(e.t(`footer.mock.${t.title}`)),1),p("span",b,f(e.t(`services.${t.title}.description`)),1)]),v(_,{to:t.link,class:"services__list-icon"},{default:g((()=>[v(a,{icon:"arrow-right_long-circle"})])),_:2},1032,["to"])])),_:2},1024)))),128))])])}]]))}}}));