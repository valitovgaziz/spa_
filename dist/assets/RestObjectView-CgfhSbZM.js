import{_,F as m,a as f}from"./footerB-B_sYJCD0.js";import{o as n,c as o,b as e,t as a,F as i,e as p,a as r,n as g,r as b,p as c}from"./index-BIfu7HcU.js";const k="/assets/restObject-CcS1cBol.jpg",h={name:"PlaceDetails",props:{place:Object}},x={class:"place-details"},j={class:"place-header"},v={class:"place-info"},y={class:"place-name"},B={class:"place-type"},F={class:"place-coordinates"},O={class:"place-contacts"},V={class:"place-reviews"},C={class:"place-actions"};function N(d,s,t,D,P,R){const u=b("router-link");return n(),o("div",x,[e("header",j,[s[0]||(s[0]=e("img",{src:k,alt:"Фото места",class:"place-image"},null,-1)),e("div",v,[e("h1",y,a(t.place.name),1),e("span",B,"Тип: "+a(t.place.type),1),e("span",F,"Координаты: "+a(t.place.coordinates),1)])]),e("section",O,[s[1]||(s[1]=e("h2",null,"Контакты",-1)),e("ul",null,[(n(!0),o(i,null,p(t.place.contacts,l=>(n(),o("li",{key:l.id},[e("strong",null,a(l.label)+":",1),c(" "+a(l.value),1)]))),128))])]),e("section",V,[s[4]||(s[4]=e("h2",null,"Отзывы",-1)),e("ul",null,[(n(!0),o(i,null,p(t.place.reviews,l=>(n(),o("li",{key:l.id},[e("p",null,[s[2]||(s[2]=e("strong",null,"Автор:",-1)),c(" "+a(l.author),1)]),e("p",null,[s[3]||(s[3]=e("strong",null,"Отзыв:",-1)),c(" "+a(l.text),1)])]))),128))])]),e("footer",C,[r(u,{to:`/edit/${t.place.id}`,class:"btn-edit"},{default:g(()=>s[5]||(s[5]=[c("Редактировать")])),_:1},8,["to"])])])}const w=_(h,[["render",N],["__scopeId","data-v-4f7fe9ca"]]),H={__name:"RestObjectView",setup(d){return(s,t)=>(n(),o(i,null,[r(m),r(w,{place:s.mockPlace},null,8,["place"]),r(f)],64))}};export{H as default};
