System.register(["./index-legacy-BwLks9WK.js","./AppCard-legacy-DdM4BLXw.js"],(function(e,t){"use strict";var i,s,n,r,c,l,o,a,p,f,x,d,m,v,g;return{setters:[e=>{i=e.d,s=e.u,n=e.s,r=e._,c=e.r,l=e.o,o=e.c,a=e.a,p=e.t,f=e.F,x=e.g,d=e.j,m=e.w,v=e.b},e=>{g=e.A}],execute:function(){var t=document.createElement("style");t.textContent="@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.services{display:flex;flex-direction:column;max-width:1216px;margin:70px auto 150px}.services-title{font-family:Lato,sans-serif;font-size:calc(32px + .0125*(100vw - 320px));line-height:calc(48px + .0125*(100vw - 320px));font-weight:800;text-align:left;text-align:center;color:#fff}.services__list{margin-top:90px;display:flex;flex-direction:column;row-gap:30px}.services__list-item{padding:30px;display:flex;align-items:center;column-gap:96px}.services__list-info{color:#fff;display:flex;flex-direction:column}.services__list-info-title{font-family:Lato,sans-serif;font-size:calc(24px + .00625*(100vw - 320px));line-height:calc(30px + .00625*(100vw - 320px));font-weight:800;text-align:left}.services__list-info-description{margin-top:21px;font-family:Montserrat,sans-serif;font-size:calc(12px + 4 * (100vw - 320px) / 1280);line-height:calc(20px + 4 * (100vw - 320px) / 1280);font-size:16px;font-weight:500;line-height:24px;letter-spacing:-.02em;text-align:left}.services__list-icon{width:70px}@media only screen and (max-width: 1024px){.services{padding:0 30px}}@media only screen and (max-width: 578px){.services__list{margin-top:50px}.services__list-item{flex-direction:column;padding:20px;row-gap:15px}}\n",document.head.appendChild(t);const _=i({name:"ServicesPage",components:{AppCard:g},setup(){const{t:e}=s();return{t:e,services:n}}}),u={class:"services"},w={class:"services-title"},h={class:"services__list"},y={class:"services__list-info"},k={class:"services__list-info-title"},b={class:"services__list-info-description"};e("default",r(_,[["render",function(e,t,i,s,n,r){const g=c("SvgIcon"),_=c("router-link"),C=c("AppCard");return l(),o("div",u,[a("span",w,p(e.t("footer.mock.services")),1),a("div",h,[(l(!0),o(f,null,x(e.services,(t=>(l(),d(C,{class:"services__list-item",key:t.title},{body:m((()=>[a("div",y,[a("span",k,p(e.t(`footer.mock.${t.title}`)),1),a("span",b,p(t.description),1)]),v(_,{to:t.link,class:"services__list-icon"},{default:m((()=>[v(g,{icon:"arrow-right_long-circle"})])),_:2},1032,["to"])])),_:2},1024)))),128))])])}]]))}}}));