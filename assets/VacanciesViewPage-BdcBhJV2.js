import{A as h}from"./AppCard-DrzycpZN.js";import{F as $}from"./FeedbackComponent-fgyhUBNp.js";import{d as w,u as g,v as F,z as k,_ as B,o as e,c as t,a as s,t as c,F as p,h as m}from"./index-D0Zy7z6O.js";const C=w({name:"ServicesPage",components:{AppCard:h,FeedbackComponent:$},setup(){const{t:a}=g(),i=k(),o=F.find(_=>_.title==i.params.id);return{t:a,vacancy:o}}}),V={class:"vacancy"},A={class:"vacancy__wrapper"},L={class:"vacancy__header"},P={class:"vacancy-title"},S={class:"vacancy-schedule"},b={class:"vacancy__info-item"},z={class:"vacancy__info-item-title"},D={class:"vacancy__info-item-list vacancy__list"},E={class:"vacancy__list-item-text"};function I(a,i,o,_,N,R){var r,l;return e(),t("div",V,[s("div",A,[s("div",L,[s("span",P,c(a.t("vacancies.view.".concat((r=a.vacancy)==null?void 0:r.title,".title"))),1),s("span",S,c(a.t("time.full")),1)]),(e(!0),t(p,null,m((l=a.vacancy)==null?void 0:l.infoList,(u,n)=>{var v;return e(),t("div",{class:"vacancy__info",key:n},[s("div",b,[s("span",z,c(a.t("vacancies.view.".concat((v=a.vacancy)==null?void 0:v.title,".").concat(n,".title"))),1),s("div",D,[(e(!0),t(p,null,m(u,(y,f)=>{var d;return e(),t("div",{class:"vacancy__list-item",key:f},[s("span",E,c(a.t("vacancies.view.".concat((d=a.vacancy)==null?void 0:d.title,".").concat(n,".").concat(y))),1)])}),128))])])])}),128))])])}const H=B(C,[["render",I]]);export{H as default};