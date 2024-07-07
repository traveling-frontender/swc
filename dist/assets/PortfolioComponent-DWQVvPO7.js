import{d as G,u as R,A as V,B as W,_ as Z,r as I,o as C,c as $,a as g,t as k,F,g as H,k as J,w as O,n as ee,x as X,h as te,C as A,i as se,b as q,p as ie,f as ae}from"./index-CfnTAeZw.js";import{A as oe}from"./AppCard-CRHvH-I8.js";import{m as b,c as ne,b as U,d as re,S as le,a as ce,P as de}from"./pagination-BnmzBkqr.js";import{_ as pe}from"./portfolio-1-Cvfo_UJn.js";const fe=G({name:"TechnologiesComponent",components:{AppCard:oe},props:{type:{type:String,required:!0}},setup(i){const{t:e}=R(),a=V(()=>i.type==="technologies"?W.filter(l=>l.title!=="AI"&&l.title!=="1C + Битрикс"):W);return{t:e,technologiesList:a}}}),ue={class:"technologies"},me={class:"technologies__title"},he={class:"technologies__list-title"},ge={class:"technologies__stack"};function ve(i,e,a,l,m,h){const u=I("AppCard");return C(),$("div",ue,[g("span",me,k(i.t("".concat(i.type,".title"))),1),g("div",{class:ee(["technologies__list",i.type])},[(C(!0),$(F,null,H(i.technologiesList,p=>(C(),J(u,{key:p.title,class:"technologies__list-item"},{body:O(()=>[g("span",he,k(p.title),1),g("div",ge,[(C(!0),$(F,null,H(p.stack,c=>(C(),$("span",{key:c,class:"technologies__stack-item"},k(c),1))),128))])]),_:2},1024))),128))],2)])}const De=Z(fe,[["render",ve],["__scopeId","data-v-2fc346a1"]]);function we(i){let{swiper:e,extendParams:a,on:l,emit:m}=i;a({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function h(t){let s;return t&&typeof t=="string"&&e.isElement&&(s=e.el.querySelector(t),s)?s:(t&&(typeof t=="string"&&(s=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t=="string"&&s&&s.length>1&&e.el.querySelectorAll(t).length===1?s=e.el.querySelector(t):s&&s.length===1&&(s=s[0])),t&&!s?t:s)}function u(t,s){const o=e.params.navigation;t=b(t),t.forEach(n=>{n&&(n.classList[s?"add":"remove"](...o.disabledClass.split(" ")),n.tagName==="BUTTON"&&(n.disabled=s),e.params.watchOverflow&&e.enabled&&n.classList[e.isLocked?"add":"remove"](o.lockClass))})}function p(){const{nextEl:t,prevEl:s}=e.navigation;if(e.params.loop){u(s,!1),u(t,!1);return}u(s,e.isBeginning&&!e.params.rewind),u(t,e.isEnd&&!e.params.rewind)}function c(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),m("navigationPrev"))}function v(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),m("navigationNext"))}function f(){const t=e.params.navigation;if(e.params.navigation=ne(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(t.nextEl||t.prevEl))return;let s=h(t.nextEl),o=h(t.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:o}),s=b(s),o=b(o);const n=(r,_)=>{r&&r.addEventListener("click",_==="next"?v:c),!e.enabled&&r&&r.classList.add(...t.lockClass.split(" "))};s.forEach(r=>n(r,"next")),o.forEach(r=>n(r,"prev"))}function d(){let{nextEl:t,prevEl:s}=e.navigation;t=b(t),s=b(s);const o=(n,r)=>{n.removeEventListener("click",r==="next"?v:c),n.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach(n=>o(n,"next")),s.forEach(n=>o(n,"prev"))}l("init",()=>{e.params.navigation.enabled===!1?L():(f(),p())}),l("toEdge fromEdge lock unlock",()=>{p()}),l("destroy",()=>{d()}),l("enable disable",()=>{let{nextEl:t,prevEl:s}=e.navigation;if(t=b(t),s=b(s),e.enabled){p();return}[...t,...s].filter(o=>!!o).forEach(o=>o.classList.add(e.params.navigation.lockClass))}),l("click",(t,s)=>{let{nextEl:o,prevEl:n}=e.navigation;o=b(o),n=b(n);const r=s.target;let _=n.includes(r)||o.includes(r);if(e.isElement&&!_){const y=s.path||s.composedPath&&s.composedPath();y&&(_=y.find(E=>o.includes(E)||n.includes(E)))}if(e.params.navigation.hideOnClick&&!_){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===r||e.pagination.el.contains(r)))return;let y;o.length?y=o[0].classList.contains(e.params.navigation.hiddenClass):n.length&&(y=n[0].classList.contains(e.params.navigation.hiddenClass)),m(y===!0?"navigationShow":"navigationHide"),[...o,...n].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});const S=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),p()},L=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:S,disable:L,update:p,init:f,destroy:d})}function _e(i){const{effect:e,swiper:a,on:l,setTranslate:m,setTransition:h,overwriteParams:u,perspective:p,recreateShadows:c,getEffectParams:v}=i;l("beforeInit",()=>{if(a.params.effect!==e)return;a.classNames.push("".concat(a.params.containerModifierClass).concat(e)),p&&p()&&a.classNames.push("".concat(a.params.containerModifierClass,"3d"));const d=u?u():{};Object.assign(a.params,d),Object.assign(a.originalParams,d)}),l("setTranslate",()=>{a.params.effect===e&&m()}),l("setTransition",(d,S)=>{a.params.effect===e&&h(S)}),l("transitionEnd",()=>{if(a.params.effect===e&&c){if(!v||!v().slideShadows)return;a.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(S=>S.remove())}),c()}});let f;l("virtualUpdate",()=>{a.params.effect===e&&(a.slides.length||(f=!0),requestAnimationFrame(()=>{f&&a.slides&&a.slides.length&&(m(),f=!1)}))})}function Ee(i,e){const a=U(e);return a!==e&&(a.style.backfaceVisibility="hidden",a.style["-webkit-backface-visibility"]="hidden"),a}function Y(i,e,a){const l="swiper-slide-shadow".concat(a?"-".concat(a):"").concat(" swiper-slide-shadow-".concat(i)),m=U(e);let h=m.querySelector(".".concat(l.split(" ").join(".")));return h||(h=re("div",l.split(" ")),m.append(h)),h}function be(i){let{swiper:e,extendParams:a,on:l}=i;a({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),_e({effect:"coverflow",swiper:e,on:l,setTranslate:()=>{const{width:u,height:p,slides:c,slidesSizesGrid:v}=e,f=e.params.coverflowEffect,d=e.isHorizontal(),S=e.translate,L=d?-S+u/2:-S+p/2,t=d?f.rotate:-f.rotate,s=f.depth;for(let o=0,n=c.length;o<n;o+=1){const r=c[o],_=v[o],y=r.swiperSlideOffset,E=(L-y-_/2)/_,w=typeof f.modifier=="function"?f.modifier(E):E*f.modifier;let x=d?t*w:0,P=d?0:t*w,N=-s*Math.abs(w),M=f.stretch;typeof M=="string"&&M.indexOf("%")!==-1&&(M=parseFloat(f.stretch)/100*_);let D=d?0:M*w,j=d?M*w:0,z=1-(1-f.scale)*Math.abs(w);Math.abs(j)<.001&&(j=0),Math.abs(D)<.001&&(D=0),Math.abs(N)<.001&&(N=0),Math.abs(x)<.001&&(x=0),Math.abs(P)<.001&&(P=0),Math.abs(z)<.001&&(z=0),e.browser&&e.browser.need3dFix&&(Math.abs(x)/90%2===1&&(x+=.001),Math.abs(P)/90%2===1&&(P+=.001));const K="translate3d(".concat(j,"px,").concat(D,"px,").concat(N,"px)  rotateX(").concat(P,"deg) rotateY(").concat(x,"deg) scale(").concat(z,")"),Q=Ee(f,r);if(Q.style.transform=K,r.style.zIndex=-Math.abs(Math.round(w))+1,f.slideShadows){let T=d?r.querySelector(".swiper-slide-shadow-left"):r.querySelector(".swiper-slide-shadow-top"),B=d?r.querySelector(".swiper-slide-shadow-right"):r.querySelector(".swiper-slide-shadow-bottom");T||(T=Y("coverflow",r,d?"left":"top")),B||(B=Y("coverflow",r,d?"right":"bottom")),T&&(T.style.opacity=w>0?w:0),B&&(B.style.opacity=-w>0?-w:0)}}},setTransition:u=>{e.slides.map(c=>U(c)).forEach(c=>{c.style.transitionDuration="".concat(u,"ms"),c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>{v.style.transitionDuration="".concat(u,"ms")})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const Se=G({name:"ClientsComponent",components:{Swiper:le,SwiperSlide:ce},setup(){const{t:i}=R(),e=V(()=>X),a=V(()=>X[p.value]),l=te(),m=A(null),h=A(null),u=A(),p=A(0),c=v=>{p.value=v.realIndex};return se(()=>{u.value=document.querySelector(".portfolio-slider__carousel-item").offsetWidth+"px"}),{t:i,modules:[de,we,be],next:m,prev:h,projects:e,slideWidth:u,onSlideChange:c,currentSlide:a,mainStore:l}}}),ye=i=>(ie("data-v-495d817c"),i=i(),ae(),i),Ce={class:"portfolio-slider"},ke={class:"portfolio-slider__title"},$e={class:"portfolio-slider__carousel"},xe=ye(()=>g("div",{class:"portfolio-slider__carousel-item",style:{position:"relative"}},[g("img",{src:pe,alt:""})],-1)),Pe={class:"portfolio-slider__carousel-info"},Me={class:"portfolio-slider__carousel-title"},qe={class:"portfolio-slider__carousel-description"},Ie={ref:"next",class:"swiper-button-next"},Le={ref:"prev",class:"swiper-button-prev"};function Te(i,e,a,l,m,h){const u=I("swiper-slide"),p=I("swiper"),c=I("SvgIcon"),v=I("router-link");return C(),$("div",Ce,[g("span",ke,k(i.t("portfolio.title")),1),g("div",$e,[q(p,{effect:"coverflow",centeredSlides:!1,loop:!0,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:3},320:{spaceBetween:5}},coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!1,navigation:{nextEl:i.next,prevEl:i.prev},modules:i.modules,onSlideChange:i.onSlideChange,class:"mySwiper"},{default:O(()=>[(C(!0),$(F,null,H(i.projects,(f,d)=>(C(),J(u,{key:d},{default:O(()=>[xe]),_:2},1024))),128))]),_:1},8,["navigation","modules","onSlideChange"]),g("div",Pe,[g("span",Me,k(i.t("portfolio.card.".concat(i.currentSlide.title,".title"))),1),g("span",qe,k(i.currentSlide.description),1),q(v,{to:i.currentSlide.link,class:"portfolio-slider__carousel-more"},{default:O(()=>[g("span",null,k(i.t("portfolio.card.more")),1),q(c,{icon:"arrow-right_medium"})]),_:1},8,["to"]),g("div",Ie,[q(c,{icon:"arrow-right_circle"})],512),g("div",Le,[q(c,{icon:"arrow-left_circle"})],512)])])])}const je=Z(Se,[["render",Te],["__scopeId","data-v-495d817c"]]);export{je as P,De as T};
