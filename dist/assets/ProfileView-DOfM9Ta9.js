import{_ as m,F as p,a as _}from"./footerB-B_sYJCD0.js";import{o as r,c as l,b as e,t as n,w as v,v as y,f as P,F as u,e as d,g as h,a as c}from"./index-BIfu7HcU.js";const k={name:"Profile",data(){return{user:{avatar:"https://via.placeholder.com/150",name:"Иван Иванов",email:"ivan@example.com",places:[{id:1,title:"Место 1",description:"Описание места 1",editUrl:"/edit-place/1"},{id:2,title:"Место 2",description:"Описание места 2",editUrl:"/edit-place/2"}]},searchQuery:""}},computed:{filteredPlaces(){return this.searchQuery?this.user.places.filter(o=>o.title.toLowerCase().includes(this.searchQuery.toLowerCase())):this.user.places}},methods:{editUserInfo(){alert("Редактируем информацию о пользователе...")},searchPlaces(){console.log(`Поиск мест по запросу: ${this.searchQuery}`)}}},g={class:"profile"},x={class:"profile-header"},Q=["src"],U={class:"name"},w={class:"email"},b={class:"search-form"},C={key:0,class:"search-results"},F=["href"],V={key:1,class:"places-list"},B=["href"];function I(o,s,f,N,i,a){return r(),l("div",g,[e("header",x,[e("img",{src:i.user.avatar,alt:"Avatar",class:"avatar"},null,8,Q),e("h1",U,n(i.user.name),1),e("p",w,n(i.user.email),1)]),e("button",{onClick:s[0]||(s[0]=t=>a.editUserInfo()),class:"edit-profile-btn"},"Редактировать профиль"),e("form",b,[v(e("input",{type:"text",placeholder:"Поиск...","onUpdate:modelValue":s[1]||(s[1]=t=>i.searchQuery=t)},null,512),[[y,i.searchQuery,void 0,{trim:!0}]]),e("button",{onClick:s[2]||(s[2]=P(t=>a.searchPlaces(),["prevent"]))},"Найти")]),a.filteredPlaces.length>0&&i.searchQuery!==""?(r(),l("section",C,[s[3]||(s[3]=e("h2",null,"Результаты поиска",-1)),e("ul",null,[(r(!0),l(u,null,d(a.filteredPlaces,t=>(r(),l("li",{key:t.id,class:"place-item"},[e("h3",null,[e("a",{href:t.editUrl},n(t.title),9,F)]),e("p",null,n(t.description),1)]))),128))])])):h("",!0),a.filteredPlaces.length>0?(r(),l("section",V,[s[4]||(s[4]=e("h2",null,"Места",-1)),e("ul",null,[(r(!0),l(u,null,d(a.filteredPlaces,t=>(r(),l("li",{key:t.id,class:"place-item"},[e("h3",null,[e("a",{href:t.editUrl},n(t.title),9,B)]),e("p",null,n(t.description),1)]))),128))])])):h("",!0)])}const L=m(k,[["render",I],["__scopeId","data-v-f0c15aba"]]),A={__name:"ProfileView",setup(o){return(s,f)=>(r(),l(u,null,[c(p),c(L),c(_)],64))}};export{A as default};
