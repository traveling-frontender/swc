System.register(["./AppCard-legacy-Bn9DqPcj.js","./index-legacy-DBDcd4Zl.js","./swiper-vue-legacy-B-AIrVNl.js","./TechnologiesComponent-legacy-DTaBXe2T.js","./FeedbackComponent-legacy-DGFNs_q4.js","./VacancyComponent-legacy-DNvbfliW.js","./portfolio-stage-4-legacy-D-3cVQXS.js"],(function(e,t){"use strict";var a,i,n,s,o,l,r,c,p,d,m,f,g,_,u,h,x,v,w,y,b,k,S,C,T,E,I,L,z,j,M,F,A,O;return{setters:[e=>{a=e.A},e=>{i=e.d,n=e.S,s=e.u,o=e.g,l=e._,r=e.r,c=e.o,p=e.c,d=e.a,m=e.t,f=e.b,g=e.w,_=e.F,u=e.h,h=e.i,x=e.s,v=e.n,w=e.p,y=e.f,b=e.j,k=e.k,S=e.l,C=e.m,T=e.v,E=e.e},e=>{I=e.g,L=e.S,z=e.a,j=e.P},e=>{M=e.T,F=e.P},e=>{A=e.F},e=>{O=e.V},null],execute:function(){var t=document.createElement("style");function P(e){let t,a,{swiper:i,extendParams:n,on:s,emit:o,params:l}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,c,p,d,m,f,g,_,u=l&&l.autoplay?l.autoplay.delay:3e3,h=l&&l.autoplay?l.autoplay.delay:3e3,x=(new Date).getTime();function v(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",v),_||e.detail&&e.detail.bySwiperTouchMove||C())}const w=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?c=!0:c&&(h=r,c=!1);const e=i.autoplay.paused?r:x+h-(new Date).getTime();i.autoplay.timeLeft=e,o("autoplayTimeLeft",e,e/u),a=requestAnimationFrame((()=>{w()}))},y=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(a),w();let n=void 0===e?i.params.autoplay.delay:e;u=i.params.autoplay.delay,h=i.params.autoplay.delay;const s=(()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],e)return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(s)&&s>0&&void 0===e&&(n=s,u=s,h=s),r=n;const l=i.params.speed,c=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(l,!0,!0),o("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,l,!0,!0),o("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(l,!0,!0),o("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,l,!0,!0),o("autoplay")),i.params.cssMode&&(x=(new Date).getTime(),requestAnimationFrame((()=>{y()}))))};return n>0?(clearTimeout(t),t=setTimeout((()=>{c()}),n)):requestAnimationFrame((()=>{c()})),n},b=()=>{x=(new Date).getTime(),i.autoplay.running=!0,y(),o("autoplayStart")},k=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(a),o("autoplayStop")},S=(e,a)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(g=!0);const n=()=>{o("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",v):C()};if(i.autoplay.paused=!0,a)return f&&(r=i.params.autoplay.delay),f=!1,void n();const s=r||i.params.autoplay.delay;r=s-((new Date).getTime()-x),i.isEnd&&r<0&&!i.params.loop||(r<0&&(r=0),n())},C=()=>{i.isEnd&&r<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(x=(new Date).getTime(),g?(g=!1,y(r)):y(),i.autoplay.paused=!1,o("autoplayResume"))},T=()=>{if(i.destroyed||!i.autoplay.running)return;const e=I();"hidden"===e.visibilityState&&(g=!0,S(!0)),"visible"===e.visibilityState&&C()},E=e=>{"mouse"===e.pointerType&&(g=!0,_=!0,i.animating||i.autoplay.paused||S(!0))},L=e=>{"mouse"===e.pointerType&&(_=!1,i.autoplay.paused&&C())};s("init",(()=>{i.params.autoplay.enabled&&(i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",E),i.el.addEventListener("pointerleave",L)),I().addEventListener("visibilitychange",T),b())})),s("destroy",(()=>{i.el&&"string"!=typeof i.el&&(i.el.removeEventListener("pointerenter",E),i.el.removeEventListener("pointerleave",L)),I().removeEventListener("visibilitychange",T),i.autoplay.running&&k()})),s("_freeModeStaticRelease",(()=>{(d||g)&&C()})),s("_freeModeNoMomentumRelease",(()=>{i.params.autoplay.disableOnInteraction?k():S(!0,!0)})),s("beforeTransitionStart",((e,t,a)=>{!i.destroyed&&i.autoplay.running&&(a||!i.params.autoplay.disableOnInteraction?S(!0,!0):k())})),s("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?k():(p=!0,d=!1,g=!1,m=setTimeout((()=>{g=!0,d=!0,S(!0)}),200)))})),s("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&p){if(clearTimeout(m),clearTimeout(t),i.params.autoplay.disableOnInteraction)return d=!1,void(p=!1);d&&i.params.cssMode&&C(),d=!1,p=!1}})),s("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(f=!0)})),Object.assign(i.autoplay,{start:b,stop:k,pause:S,resume:C})}t.textContent='@keyframes background-9e5caab2{50%{background:#00ffe1;box-shadow:0 -200px 100px -100px #00b3ff inset}}@keyframes rotate-9e5caab2{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate-9e5caab2{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.clients[data-v-9e5caab2]{display:flex;flex-direction:column}.clients__title[data-v-9e5caab2]{font-family:Lato,sans-serif;font-size:calc(32px + 18 * (100vw - 320px) / 1280);line-height:calc(48px + 18 * (100vw - 320px) / 1280);font-weight:800;text-align:left;white-space:pre-wrap;text-align:center}.clients__carousel[data-v-9e5caab2]{margin-top:89px}.clients .mySwiper__slide[data-v-9e5caab2]{min-width:240px}.clients[data-v-9e5caab2] .swiper-slide{min-width:200px!important;height:300px}.clients[data-v-9e5caab2] .swiper-wrapper{width:100%}.clients .swiper[data-v-9e5caab2]{padding-bottom:70px;--swiper-pagination-color: #fff;--swiper-pagination-bullet-size: 10px;--swiper-pagination-bullet-inactive-opacity: 50%;--swiper-pagination-bullet-inactive-color: #fff;--swiper-pagination-bullet-height: 4px;--swiper-pagination-bullet-width: 20px;--swiper-pagination-bullet-border-radius: 0;--swiper-wrapper-transition-timing-function: linear}.clients .swiper-container[data-v-9e5caab2]{width:calc(100vw - 70px)!important;max-width:600px!important}.clients .swiper-wrapper[data-v-9e5caab2]{list-style:none;padding:0;transition-timing-function:linear}.clients .swiper-slide[data-v-9e5caab2]{display:block!important;width:auto!important}@media only screen and (max-width: 578px){.clients .swiper-slide[data-v-9e5caab2]{display:flex;justify-content:center}}@keyframes background-0711cabd{50%{background:#00ffe1;box-shadow:0 -200px 100px -100px #00b3ff inset}}@keyframes rotate-0711cabd{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate-0711cabd{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.facilities__title[data-v-0711cabd]{font-family:Lato,sans-serif;font-size:calc(32px + 18 * (100vw - 320px) / 1280);line-height:calc(48px + 18 * (100vw - 320px) / 1280);font-weight:800;text-align:left;white-space:pre-wrap;text-align:center}.facilities__carousel[data-v-0711cabd]{margin-top:63px}.facilities__carousel .swiper[data-v-0711cabd]{padding-bottom:70px}.facilities__carousel-item[data-v-0711cabd]{display:grid;grid-template-columns:1fr 2fr;column-gap:40px}.facilities__carousel-info[data-v-0711cabd]{position:relative;padding-bottom:110px}.facilities__carousel-subtitle[data-v-0711cabd]{font-family:Inter,sans-serif;font-size:19px;font-weight:600;line-height:21.78px;letter-spacing:-.03em;text-align:left;white-space:pre-wrap}.facilities__carousel-title[data-v-0711cabd]{font-family:Lato,sans-serif;font-size:calc(24px + 6 * (100vw - 320px) / 1280);line-height:calc(30px + 6 * (100vw - 320px) / 1280);font-weight:800;text-align:left;letter-spacing:-.03em;white-space:pre-wrap;margin-bottom:16px;display:flex;align-items:center;column-gap:16px}.facilities__carousel-discription[data-v-0711cabd]{font-family:Montserrat,sans-serif;font-size:calc(16px + 6 * (100vw - 320px) / 1280);line-height:calc(26px + 6 * (100vw - 320px) / 1280);font-weight:500;letter-spacing:.02em;text-align:left;white-space:pre-wrap;display:block;margin-top:13px}.facilities__carousel-images[data-v-0711cabd]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.facilities__carousel-images img[data-v-0711cabd]{object-fit:cover}.facilities__carousel-image[data-v-0711cabd]:first-child{grid-column:2 span}.facilities__carousel-list[data-v-0711cabd]{margin-top:48px;padding-left:30px;display:flex;flex-direction:column}.facilities__carousel-list-item[data-v-0711cabd]{font-family:Montserrat,sans-serif;font-size:calc(16px + 6 * (100vw - 320px) / 1280);line-height:calc(26px + 6 * (100vw - 320px) / 1280);font-weight:500;letter-spacing:.02em;text-align:left;white-space:pre-wrap;position:relative}.facilities__carousel-list-item[data-v-0711cabd]:before{content:"";position:absolute;width:4px;height:4px;background:#fff;border-radius:50%;left:-17px;top:50%;transform:translateY(-50%)}.facilities__achievements[data-v-0711cabd]{position:absolute;bottom:0;display:flex;column-gap:12px;margin-top:auto}.facilities__achievements-item[data-v-0711cabd]{display:flex;flex-direction:column;align-items:center;padding:23px 26px}.facilities__achievements-item-title[data-v-0711cabd]{font-family:Inter,sans-serif;font-size:calc(24px + 10 * (100vw - 320px) / 1280);line-height:calc(30px + 10 * (100vw - 320px) / 1280);font-weight:700;text-align:left;white-space:pre-wrap;display:block}.facilities__achievements-item-discription[data-v-0711cabd]{font-family:Montserrat,sans-serif;font-size:calc(15px + 5 * (100vw - 320px) / 1280);line-height:calc(19px + 5 * (100vw - 320px) / 1280);font-weight:500;letter-spacing:-.03em;text-align:left;white-space:pre-wrap}.facilities .facilities__pagination .swiper-pagination-bullet[data-v-0711cabd]{background:#fff!important;width:10px;height:10px;opacity:.5}@media only screen and (max-width: 1024px){.facilities__carousel-item[data-v-0711cabd]{display:grid;grid-template-columns:2fr 3fr;align-items:center}.facilities__carousel-images[data-v-0711cabd]{grid-template-columns:1fr;align-self:start}.facilities__carousel-image[data-v-0711cabd]{max-height:150px;width:100%}.facilities__carousel-image img[data-v-0711cabd]{width:100%;height:100%}.facilities__carousel-image[data-v-0711cabd]:first-child{grid-column:1}.facilities__carousel-list[data-v-0711cabd]{margin-top:32px}.facilities__achievements-item[data-v-0711cabd]{padding:16px}.facilities__achievements-item-title[data-v-0711cabd]{text-wrap:nowrap}}@media only screen and (max-width: 768px){.facilities__carousel-item[data-v-0711cabd]{display:flex;flex-direction:column-reverse;row-gap:16px}.facilities__carousel-images[data-v-0711cabd]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;width:100%}.facilities__carousel-image[data-v-0711cabd]{max-height:300px}.facilities__carousel-image[data-v-0711cabd]:first-child{grid-column:2 span}}@media only screen and (max-width: 578px){.facilities__achievements[data-v-0711cabd]{position:relative;flex-direction:column;row-gap:10px;margin-top:16px}}@keyframes background{50%{background:#00ffe1;box-shadow:0 -200px 100px -100px #00b3ff inset}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.home{color:#fff}.home__greetings{margin:155px auto 0;max-width:1216px;display:flex;justify-content:center;align-content:center;align-items:center;text-align:center;flex-direction:column}.home__greetings-title{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:calc(32px + 43 * (100vw - 320px) / 1280);line-height:calc(70px + 43 * (100vw - 320px) / 1280);white-space:pre-wrap;display:block;overflow:hidden;margin:0 auto;align-items:center}.home__greetings-title div{display:block}.home__greetings-title span{display:block;width:0;overflow:hidden;border-right:2px solid transparent;white-space:nowrap}.home__greetings-title .typingEffect__line1{animation:typing 2s steps(30) forwards,blink 1s 2}.home__greetings-title .typingEffect__line2_cancel{animation:unTyping 2.5s steps(35) forwards,blink 1s 3s infinite!important}.home__greetings-title .typingEffect__line2_started{animation:typing 2.5s steps(35) forwards,blink 1s 0s infinite}@keyframes typing{0%{width:0}to{width:100%}}@keyframes typing2{0%{width:0}to{width:100%}}@keyframes unTyping{0%{width:100%}to{width:0}}@keyframes blink{0%,45%{border-color:transparent}50%,to{border-color:#fff}}.home__greetings-description{margin-top:30px;font-family:Montserrat,sans-serif;font-size:calc(15px + 5 * (100vw - 320px) / 1280);line-height:calc(20px + 5 * (100vw - 320px) / 1280);font-weight:500;letter-spacing:-.03em;max-width:900px;white-space:pre-wrap}.home__greetings-actions{display:flex;margin-top:50px;gap:20px}.home__greetings-order{outline:none;border:none;cursor:pointer;background:unset;font-family:Inter,sans-serif;font-size:15px;font-weight:700;line-height:18.15px;display:flex;justify-content:center;align-content:center;align-items:center;text-align:center;height:50px;border:1px solid #ffffff;background:#fff;color:#1a1a1a;border-radius:10px;padding:16px 29.5px;width:186px}.home__greetings-order:hover{background:transparent;color:#fff}.home__greetings-order:disabled{background:#fff;color:#1a1a1a;cursor:unset;opacity:.5}.home__greetings-generate{outline:none;border:none;cursor:pointer;background:unset;font-family:Inter,sans-serif;font-size:15px;font-weight:700;line-height:18.15px;display:flex;justify-content:center;align-content:center;align-items:center;text-align:center;height:50px;border:1px solid #ffffff;background:transparent;color:#fff;border-radius:10px;padding:16px 23.5px;width:186px}.home__greetings-generate:hover{background:#fff;color:#1a1a1a}.home__greetings-generate:disabled{background:transparent;color:#fff;cursor:unset;opacity:.5}.home__greetings-advantages{display:flex;justify-content:center;width:100%;gap:110px;margin-top:100px}.home__greetings-advantage{display:flex;flex-direction:column}.home__greetings-advantage-value{font-family:Montserrat,sans-serif;font-size:calc(28px + 14 * (100vw - 320px) / 1280);line-height:calc(36px + 14 * (100vw - 320px) / 1280);font-weight:700;letter-spacing:-.03em;white-space:pre-wrap}.home__greetings-advantage-text{font-family:Inter,sans-serif;font-size:calc(15px + 5 * (100vw - 320px) / 1280);line-height:calc(19px + 5 * (100vw - 320px) / 1280);font-weight:500;letter-spacing:-.03em;text-align:left;white-space:pre-wrap;text-align:center}.home__services{display:flex;flex-direction:column;max-width:1216px;margin:130px auto 0}.home__services-title{font-family:Lato,sans-serif;font-size:calc(32px + 18 * (100vw - 320px) / 1280);line-height:calc(48px + 18 * (100vw - 320px) / 1280);font-weight:800;text-align:left;white-space:pre-wrap;text-align:center}.home__services-list{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:60px}.home__services-item{grid-column:span 1;display:flex;flex-direction:column;padding:20px}.home__services-item:last-child{grid-column:span 2}.home__services-item-title{font-family:Inter,sans-serif;font-size:calc(24px + 10 * (100vw - 320px) / 1280);line-height:calc(30px + 10 * (100vw - 320px) / 1280);font-weight:700;text-align:left;white-space:pre-wrap;margin-bottom:23px}.home__services-item-link{display:flex;align-items:center;gap:2px;color:#fff;text-decoration:unset;font-family:Montserrat,sans-serif;font-size:calc(14px + 4 * (100vw - 320px) / 1280);line-height:calc(21px + 4 * (100vw - 320px) / 1280);font-weight:500;text-align:left;white-space:pre-wrap;margin-top:auto}.home__technologies{display:flex;justify-content:center;max-width:1216px;margin:240px auto 0}.home__clients{margin-top:240px}.home__portfolio{max-width:1216px;margin:140px auto 0}.home__facilities{display:flex;flex-direction:column;justify-content:center;max-width:1216px;margin:240px auto 0}.home__vacancies{display:flex;flex-direction:column;max-width:1216px;margin:197px auto 0}.home__vacancies-title{font-family:Lato,sans-serif;font-size:calc(32px + 18 * (100vw - 320px) / 1280);line-height:calc(48px + 18 * (100vw - 320px) / 1280);font-weight:800;text-align:left;white-space:pre-wrap;text-align:center}.home__vacancies-list{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:60px}.home__vacancies-all{outline:none;border:none;padding:0;cursor:pointer;background:unset;font-family:Inter,sans-serif;font-size:15px;font-weight:700;line-height:18.15px;display:flex;justify-content:center;align-content:center;align-items:center;text-align:center;height:50px;border:1px solid #ffffff;background:#fff;color:#1a1a1a;border-radius:10px;text-decoration:none;width:186px;align-self:start;margin:60px auto 0}.home__vacancies-all:hover{background:transparent;color:#fff}.home__vacancies-all:disabled{background:#fff;color:#1a1a1a;cursor:unset;opacity:.5}.home__feedback{max-width:1216px;margin:240px auto}@media only screen and (max-width: 1024px){.home__services,.home__technologies,.home__facilities,.home__vacancies,.home__feedback{padding:0 20px}}@media only screen and (max-width: 768px){.home__greetings{margin:90px auto 0}.home__services,.home__vacancies,.home__facilities{margin:140px auto 0}.home__clients,.home__portfolio{margin-top:160px}.home__technologies,.home__facitilies,.home__feedback{margin:160px auto}.home__services-list{grid-template-columns:1fr}}@media only screen and (max-width: 1024px){.home__vacancies-list{grid-template-columns:repeat(2,1fr)}.home__greetings-advantages{display:grid;grid-template-columns:repeat(2,1fr);gap:40px}.home__greetings-actions{flex-direction:column}}@media only screen and (max-width: 578px){.home__services-list{grid-template-columns:1fr}.home__services-item{grid-column:auto!important}.home__greetings{margin:45px auto 0}.home__services,.home__vacancies,.home__facilities{margin:70px auto 0}.home__clients,.home__portfolio{margin-top:80px}.home__technologies,.home__facitilies,.home__feedback{margin:80px auto}.home__vacancies-list{grid-template-columns:1fr}}\n',document.head.appendChild(t);const D=i({name:"ClientsComponent",components:{Swiper:L,SwiperSlide:z,SvgIcon:n},setup(){const{t:e}=s();return{t:e,modules:[P],projects:o(["client-5","client-6","client-7","client-8","client-5","client-6","client-7","client-8","client-5","client-6","client-7","client-8","client-5","client-6","client-7","client-8"])}}}),B={class:"clients"},N={class:"clients__title"},V={class:"clients__carousel"},$={class:"mySwiper__slide"},q=l(D,[["render",function(e,t,a,i,n,s){const o=r("SvgIcon"),l=r("swiper-slide"),x=r("swiper");return c(),p("div",B,[d("span",N,m(e.t("clients.title")),1),d("div",V,[f(x,{slidesPerView:"auto",speed:5e3,autoplay:{delay:0,disableOnInteraction:!0,waitForTransition:!0},breakpoints:{320:{spaceBetween:30},578:{spaceBetween:60},1024:{spaceBetween:180}},modules:e.modules,centeredSlides:!0,loop:!0,spaceBetween:180,pagination:{clickable:!0},class:"mySwiper"},{default:g((()=>[(c(!0),p(_,null,u(e.projects,(e=>(c(),h(l,{key:e},{default:g((()=>[d("div",$,[f(o,{icon:e},null,8,["icon"])])])),_:2},1024)))),128))])),_:1},8,["modules"])])])}],["__scopeId","data-v-9e5caab2"]]),R=i({name:"FacilitiesComponent",components:{Swiper:L,SwiperSlide:z,AppCard:a},setup(){const{t:e}=s();return{t:e,modules:[j,P],solutions:x}}}),H={class:"facilities"},J={class:"facilities__title"},K={class:"facilities__carousel"},W={class:"facilities__carousel-item"},Y=(e=>(w("data-v-0711cabd"),e=e(),y(),e))((()=>d("div",{class:"facilities__carousel-images"},[d("div",{class:"facilities__carousel-image"},[d("img",{src:"/swc/assets/facilities-1-Bet9qm7V.png",alt:""})]),d("div",{class:"facilities__carousel-image"},[d("img",{src:"/swc/assets/facilities-2-DmSnvWKP.png",alt:""})]),d("div",{class:"facilities__carousel-image"},[d("img",{src:"/swc/assets/facilities-3-J8l-MuP2.png",alt:""})])],-1))),G={class:"facilities__carousel-info"},Q={class:"facilities__carousel-title"},U={class:"facilities__carousel-subtitle"},X={class:"facilities__carousel-list"},Z={class:"facilities__carousel-achievements facilities__achievements"},ee={class:"facilities__achievements-item-title"},te={class:"facilities__achievements-item-discription"},ae={class:"facilities__achievements-item-title"},ie={class:"facilities__achievements-item-discription"},ne={class:"facilities__achievements-item-title"},se={class:"facilities__achievements-item-discription"},oe=i({name:"HomePage",components:{AppCard:a,TechnologiesComponent:M,ClientsComponent:q,PortfolioComponent:F,FacilitiesComponent:l(R,[["render",function(e,t,a,i,n,s){const o=r("SvgIcon"),l=r("AppCard"),x=r("swiper-slide"),w=r("swiper");return c(),p("div",H,[d("span",J,m(e.t("facilities.title")),1),d("div",K,[f(w,{style:{"--swiper-pagination-color":"#fff","--swiper-pagination-bullet-size":"10px","--swiper-pagination-bullet-inactive-opacity":"50%","--swiper-pagination-bullet-inactive-color":"#fff"},speed:1200,autoplay:{delay:2e4,disableOnInteraction:!1},slidesPerView:1,centeredSlides:!1,pagination:{el:".facilities__pagination",clickable:!0},loop:!0,spaceBetween:50,modules:e.modules,class:"mySwiper"},{default:g((()=>[(c(!0),p(_,null,u(e.solutions,(t=>(c(),h(x,{key:t},{default:g((()=>[d("div",W,[Y,d("div",G,[d("div",Q,[d("span",null,m(e.t(`facilities.card.${t.title}.title`)),1),f(o,{icon:"arrow-right_medium"})]),d("span",U,m(e.t(`facilities.card.${t.title}.list.title`)),1),d("div",X,[(c(!0),p(_,null,u(t.detailsCount,(a=>(c(),p("span",{class:"facilities__carousel-list-item",key:a},m(e.t(`facilities.card.${t.title}.list.item.${a}`)),1)))),128))]),d("div",Z,[f(l,{class:"facilities__achievements-item"},{body:g((()=>[d("span",ee,"2.5+ "+m(e.t("facilities.card.million")),1),d("span",te,m(e.t("facilities.card.downloads")),1)])),_:1}),f(l,{class:"facilities__achievements-item"},{body:g((()=>[d("span",ae,"2.5+ "+m(e.t("facilities.card.million")),1),d("span",ie,m(e.t("facilities.card.downloads")),1)])),_:1}),f(l,{class:"facilities__achievements-item"},{body:g((()=>[d("span",ne,"2.5+ "+m(e.t("facilities.card.million")),1),d("span",se,m(e.t("facilities.card.downloads")),1)])),_:1})])])])])),_:2},1024)))),128)),d("div",{class:v(["swiper-pagination","facilities__pagination"])})])),_:1},8,["modules"])])])}],["__scopeId","data-v-0711cabd"]]),FeedbackComponent:A,VacancyComponent:O},setup(){const{t:e}=s(),t=b(),a=["mobile","crm","erp","web","ai"];let i=0,n=null,o=null,l=null;return k((()=>{n=setTimeout((()=>{const t=document.querySelector(".typingEffect__line2");t&&(t.textContent=e(`home.title.${a[i]}`),t?.classList.add("typingEffect__line2_started"),o=setInterval((()=>{t?.classList.add("typingEffect__line2_cancel")}),3200),l=setInterval((()=>{a[i+1]?i+=1:i=0,t.textContent=e(`home.title.${a[i]}`),t?.classList.remove("typingEffect__line2_cancel")}),6400))}),2500)})),S((()=>{clearTimeout(Number(n)),clearInterval(Number(o)),clearInterval(Number(l))})),{t:e,services:C,vacancies:T,mainStore:t}}}),le={class:"home"},re={class:"home__greetings"},ce={class:"home__greetings-title"},pe={class:"typingEffect__line1"},de={class:"typingEffect__line2"},me={class:"home__greetings-description"},fe={class:"home__greetings-actions"},ge={class:"home__greetings-generate"},_e={class:"home__greetings-advantages"},ue={class:"home__greetings-advantage"},he=d("span",{class:"home__greetings-advantage-value"},"10",-1),xe={class:"home__greetings-advantage-text"},ve={class:"home__greetings-advantage"},we=d("span",{class:"home__greetings-advantage-value"},"100+",-1),ye={class:"home__greetings-advantage-text"},be={class:"home__greetings-advantage"},ke=d("span",{class:"home__greetings-advantage-value"},"50+",-1),Se={class:"home__greetings-advantage-text"},Ce={class:"home__greetings-advantage"},Te=d("span",{class:"home__greetings-advantage-value"},"30",-1),Ee={class:"home__greetings-advantage-text"},Ie={class:"home__services"},Le={class:"home__services-title"},ze={class:"home__services-list"},je={class:"home__services-item-title"},Me={class:"home__vacancies"},Fe={class:"home__vacancies-title"},Ae={class:"home__vacancies-list"};e("default",l(oe,[["render",function(e,t,a,i,n,s){const o=r("SvgIcon"),l=r("router-link"),x=r("AppCard"),v=r("TechnologiesComponent"),w=r("ClientsComponent"),y=r("PortfolioComponent"),b=r("FacilitiesComponent"),k=r("VacancyComponent"),S=r("FeedbackComponent");return c(),p("div",le,[d("div",re,[d("div",ce,[d("div",null,[d("span",pe,m(e.t("home.title.create")),1)]),d("div",null,[d("span",de,m(e.t("home.title.second")),1)])]),d("span",me,m(e.t("mock.description")),1),d("div",fe,[d("button",{class:"home__greetings-order open-modal",onClick:t[0]||(t[0]=(...t)=>e.mainStore.changeStateModal&&e.mainStore.changeStateModal(...t))},m(e.t("home.order")),1),d("button",ge,m(e.t("home.generate")),1)]),d("div",_e,[d("div",ue,[he,d("span",xe,m(e.t("home.years")),1)]),d("div",ve,[we,d("span",ye,m(e.t("home.completed")),1)]),d("div",be,[ke,d("span",Se,m(e.t("home.customers")),1)]),d("div",Ce,[Te,d("span",Ee,m(e.t("home.team")),1)])])]),d("div",Ie,[d("span",Le,m(e.t("home.servicesList")),1),d("div",ze,[(c(!0),p(_,null,u(e.services,(t=>(c(),h(x,{key:t.title,link:t.link,class:"home__services-item"},{body:g((()=>[d("span",je,m(e.t(`footer.mock.${t.title}`)),1),f(l,{to:t.link,class:"home__services-item-link"},{default:g((()=>[d("span",null,m(e.t("home.card.more")),1),f(o,{icon:"arrow-right"})])),_:2},1032,["to"])])),_:2},1032,["link"])))),128))])]),f(v,{type:"competencies",class:"home__technologies"}),f(w,{class:"home__clients"}),f(y,{class:"home__portfolio"}),f(b,{class:"home__facilities"}),d("div",Me,[d("span",Fe,m(e.t("vacancies.title")),1),d("div",Ae,[f(k)]),f(l,{to:"/vacancies",class:"home__vacancies-all"},{default:g((()=>[E(m(e.t("vacancies.all")),1)])),_:1})]),f(S,{class:"home__feedback"})])}]]))}}}));
