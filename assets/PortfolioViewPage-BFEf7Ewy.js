import{A as g}from"./AppCard-BbBB-XAF.js";import{F as w}from"./FeedbackComponent-CLlOHfTK.js";import{S as h}from"./StagesComponent-C5PvMvqQ.js";import{d as b,u as k,A as C,y as q,x as S,B as P,z as A,_ as y,r,o,c as a,a as s,t as e,b as l,F as n,h as _,w as d}from"./index-CV-Sf8_t.js";import{_ as F}from"./avatar--I9bdTrH.js";const B=b({name:"PortfolioPage",components:{AppCard:g,FeedbackComponent:w,StagesComponent:h},setup(){const{t}=k(),c=A().params.id;return{t,portfolio:C,stages:q,servicesDescription:S,anotherServicesDescription:P,currentPortfolioId:c}}}),E="/swc/assets/portfolio-1-BPUo-9dn.png",$="/swc/assets/portfolio-stage-1-Q2y_fKLE.png",I="/swc/assets/portfolio-stage-2-CEfH6bhp.png",L="/swc/assets/portfolio-stage-3-CXEf7dkx.png",D="/swc/assets/portfolio-stage-4-AFXrQmaR.png",N="/swc/assets/portfolio-similar-1-CL5EkE3T.png",V={class:"portfolio-view"},Q={class:"portfolio-view__greetings"},R={class:"portfolio-view__greetings-title"},T=s("img",{src:E,alt:"",class:"portfolio-view__greetings-images"},null,-1),X=s("span",{class:"portfolio-view__greetings-description"},"Lorem ipsum dolor sit amet consectetur. Senectus elit facilisi velit et est et gravida massa vitae. Nunc odio arcu volutpat nibh volutpat. Vitae maecenas enim ut enim dictum quam vel bibendum. Nec diam fermentum amet massa fames tempus ultrices. Non id est sed in amet orci nibh. Facilisis non facilisis in sapien purus vel egestas dictum ullamcorper. Iaculis ornare enim euismod iaculis bibendum feugiat. A odio lectus gravida mauris habitasse elementum neque elit eget. Aliquet leo netus purus urna ultrices. Proin feugiat ut morbi posuere nulla.",-1),j={class:"portfolio-view__stages"},z={class:"portfolio-view__stages-header"},H={class:"portfolio-view__stages-title"},K={class:"portfolio-view__stages-subtitle"},U={class:"portfolio-view__stages-item"},G={class:"portfolio-view__stages-item-title"},J={class:"portfolio-view__stages-item-description"},M=s("div",{class:"portfolio-view__stages-item-images"},[s("img",{src:$,alt:""})],-1),O={class:"portfolio-view__stages-item"},W={class:"portfolio-view__stages-item-title"},Y={class:"portfolio-view__stages-item-description"},Z={class:"portfolio-view__stages-item"},x={class:"portfolio-view__stages-item-title"},ss={class:"portfolio-view__stages-item-description"},ts=s("div",{class:"portfolio-view__stages-item-images portfolio-view__stages-item-images_multi"},[s("img",{src:I,alt:""}),s("img",{src:L,alt:""})],-1),es={class:"portfolio-view__stages-item"},is={class:"portfolio-view__stages-item-title"},os={class:"portfolio-view__stages-item-description"},as=s("div",{class:"portfolio-view__stages-item-images"},[s("img",{src:D,alt:""})],-1),ls={class:"portfolio-view__result"},rs={class:"portfolio-view__result-title"},ns={class:"portfolio-view__result-list"},_s={class:"portfolio-view__result-list-column"},cs={class:"portfolio-view__result-item-icon"},ps={class:"portfolio-view__result-item-title"},ms={class:"portfolio-view__result-list-column"},ds={class:"portfolio-view__result-item-icon"},us={class:"portfolio-view__result-item-title"},vs={class:"portfolio-view__presentation"},fs=s("span",{class:"portfolio-view__presentation-placeholder"}," Презентация выполненной работы (высота неограниченна) ",-1),gs={class:"portfolio-view__review"},ws={class:"portfolio-view__review-title"},hs=s("div",{class:"portfolio-view__review-author"},[s("img",{src:F,alt:""}),s("span",null,"Иванов И. И.")],-1),bs=s("span",{class:"portfolio-view__review-text"}," Lorem ipsum dolor sit amet consectetur. Turpis est sed scelerisque platea ornare risus auctor sed. Lorem placerat pulvinar sit proin nisi elit. Sapien sem odio aliquet turpis enim. Bibendum dignissim purus at tellus velit. Est purus aliquet adipiscing neque. Placerat ut sit vestibulum laoreet quis. Purus sit velit scelerisque nam consequat velit velit. Sapien quam a pretium pharetra arcu enim. Arcu quam nibh amet viverra netus varius faucibus mi faucibus. ",-1),ks={class:"portfolio-view__similar"},Cs={class:"portfolio-view__similar-title"},qs={class:"portfolio-view__similar__list"},Ss=s("img",{src:N,alt:"",class:"portfolio-view__similar-item-image"},null,-1),Ps={class:"portfolio-view__similar-item-title"};function As(t,u,c,ys,Fs,Bs){const v=r("StagesComponent"),p=r("SvgIcon"),m=r("AppCard"),f=r("FeedbackComponent");return o(),a("div",V,[s("div",Q,[s("span",R,e(t.t("portfolio.card.".concat(t.currentPortfolioId,".title"))),1),T,X]),l(v,{class:"portfolio-view__goals",title:t.t("stage.goals.title"),stages:t.stages},null,8,["title","stages"]),s("div",j,[s("div",z,[s("span",H,e(t.t("stage.work.title")),1),s("span",K,e(t.t("stage.develop.subtitle")),1)]),s("div",U,[s("span",G,e(t.t("stage.develop.item.1.title")),1),s("span",J,e(t.t("stage.develop.item.1.description")),1),M]),s("div",O,[s("span",W,e(t.t("stage.develop.item.2.title")),1),s("span",Y,e(t.t("stage.develop.item.2.description")),1)]),s("div",Z,[s("span",x,e(t.t("stage.develop.item.3.title")),1),s("span",ss,e(t.t("stage.develop.item.3.description")),1),ts]),s("div",es,[s("span",is,e(t.t("stage.develop.item.4.title")),1),s("span",os,e(t.t("stage.develop.item.4.description")),1),as])]),s("div",ls,[s("span",rs,e(t.t("result.title")),1),s("div",ns,[s("div",_s,[(o(!0),a(n,null,_(t.servicesDescription,i=>(o(),a("div",{class:"portfolio-view__result-item",key:i.title},[s("div",cs,[l(p,{icon:"checkmark_circle"})]),s("span",ps,e(t.t("services.list.".concat(i.title))),1)]))),128))]),s("div",ms,[(o(!0),a(n,null,_(t.anotherServicesDescription,i=>(o(),a("div",{class:"portfolio-view__result-item",key:i.title},[s("div",ds,[l(p,{icon:"checkmark_circle"})]),s("span",us,e(t.t("services.list.".concat(i.title))),1)]))),128))])])]),s("div",vs,[l(m,{class:"portfolio-view__presentation-wrapper"},{body:d(()=>[fs]),_:1})]),s("div",gs,[s("span",ws,e(t.t("review.customer")),1),l(m,{class:"portfolio-view__review-item"},{body:d(()=>[hs,bs]),_:1})]),s("div",ks,[s("span",Cs,e(t.t("projects.similar.title")),1),s("div",qs,[(o(),a(n,null,_(3,i=>s("div",{class:"portfolio-view__similar-item",key:i},[Ss,s("span",Ps,e(t.t('portfolio.card.2.title"')),1)])),64))])]),l(f,{stages:t.stages,showButton:!0,title:"Этапы разработки и создания",class:"portfolio-view__feedback"},null,8,["stages"])])}const Ns=y(B,[["render",As]]);export{Ns as default};
