import{_ as d,F,a as k}from"./footer-lI4RVBdw.js";import{u,o as n,c as r,b as c,t as o,a as _,r as m,F as h,d as g}from"./index-BEtakfEN.js";import{a as x}from"./axios-upsvKRUO.js";const w={setup(){const{t:e}=u();return{t:e}}},A={class:"container"};function y(e,a,p,s,i,l){return n(),r("div",A,[c("h1",null,o(s.t("messages.tripFreedomAdventure.name")),1),c("p",null,o(s.t("messages.tripFreedomAdventure.text")),1)])}const C=d(w,[["render",y],["__scopeId","data-v-aa005713"]]),z="/assets/photo_2025-01-25_05-57-24-BwgIchq6.jpg",I={setup(){const{t:e}=u();return{t:e}},methods:{donat(){window.open("https://www.tinkoff.ru/rm/r_fFXNVwPxmH.VMEQXkfWxO/Ho4MN83486","_blank")}},components:{FTA:C}},D={class:"about"};function H(e,a,p,s,i,l){const t=m("FTA");return n(),r("div",D,[_(t),c("p",null,o(s.t("messages.aboutL.donat-request")),1),c("button",{onClick:a[0]||(a[0]=(...f)=>l.donat&&l.donat(...f)),class:"donat-coffee"},o(s.t("messages.aboutL.donat-coffee")),1),a[1]||(a[1]=c("img",{src:z,alt:"Донат QRcod",class:"QRcod"},null,-1))])}const L=d(I,[["render",H],["__scopeId","data-v-6a219422"]]),V={setup(){const{t:e}=u();return{t:e}},data(){return{loading:!0,commits:[],error:null}},mounted(){this.fetchCommits()},methods:{async fetchCommits(){try{const e=await x.get("https://api.github.com/repos/valitovgaziz/spa_/commits",{headers:{Accept:"application/vnd.github.v3+json"}});this.commits=e.data}catch(e){this.error=e.message||"Произошла неизвестная ошибка"}finally{this.loading=!1}}}},B={key:0},N={key:1},Q={key:2};function T(e,a,p,s,i,l){return i.loading?(n(),r("div",B,o(s.t("messages.commits.download")),1)):i.error?(n(),r("ul",N,o(s.t("messages.commits.errorOc"))+": "+o(i.error),1)):(n(),r("ul",Q,[a[0]||(a[0]=c("h2",null,"Commits",-1)),(n(!0),r(h,null,g(i.commits,t=>(n(),r("li",{key:t.sha},[c("i",null,o(t.author.login)+" "+o(t.commit.author.date.slice(0,10))+" "+o(t.commit.message),1)]))),128))]))}const j=d(V,[["render",T],["__scopeId","data-v-ab2221db"]]),q={setup(){const{t:e}=u();return{t:e}},name:"DevelopersList",data(){return{developers:[{nickname:"valitovgaziz",name:"Валитов Газиз",profileUrl:"https://github.com/valitovgaziz"}]}}},E={class:"developers"},M={class:"title"},O={class:"developer-list"},R=["href"];function U(e,a,p,s,i,l){return n(),r("div",E,[c("h1",M,o(s.t("messages.aboutL.developers")),1),c("ul",O,[(n(!0),r(h,null,g(i.developers,t=>(n(),r("li",{key:t.name,class:"developer-item"},[c("a",{href:t.profileUrl,target:"_blank",rel:"noopener noreferrer"},o(t.nickname)+" ("+o(t.name)+") ",9,R)]))),128))])])}const X=d(q,[["render",U],["__scopeId","data-v-948e9ec5"]]),P={components:{FHeader:F,Footer:k,About:L,Developers:X,Commits:j}};function S(e,a,p,s,i,l){const t=m("FHeader"),f=m("About"),v=m("Developers"),$=m("Commits"),b=m("Footer");return n(),r(h,null,[_(t),_(f),_(v),_($),_(b)],64)}const K=d(P,[["render",S]]);export{K as default};
