import{_ as c,F as w,a as b}from"./footerB-B2x-DufX.js";import{u as y,o as f,c as h,b as s,t as i,w as d,v as l,f as x,a as u,F as v,r as p}from"./index-DglDEnDz.js";const R={name:"register-form",setup(){const{t}=y();return{t}},data(){return{username:"",email:"",password:""}},methods:{handleSubmit(){if(!this.isValid(this.username,this.email,this.password)){alert("Пожалуйста, заполните все поля корректно.");return}this.sendRegistrationData({username:this.username,email:this.email,password:this.password}).then(()=>{this.$router.push("/login")}).catch(t=>{console.error(t),alert("Что-то пошло не так. Попробуйте еще раз."+t)})},isValid(t,e,a){return!(t.length===0||e.length===0||a.length===0||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||!/^[a-zA-Z0-9_]{3,20}$/.text(t)||a.length<6)},async sendRegistrationData(t){console.log("Register by this data: ",t);try{if(!(await fetch("https://yalarba.ru/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Ошибка при регистрации")}catch(e){throw e}}}},F={class:"register-form"},V={class:"form-name-h3"},B={class:"form-group"},S={for:"username"},C={class:"form-group"},N={for:"email"},D={class:"form-group"},k={for:"password"},q={type:"submit"};function H(t,e,a,n,r,m){return f(),h("div",F,[s("h3",V,i(n.t("messages.inout.registration")),1),s("form",{onSubmit:e[3]||(e[3]=x((...o)=>m.handleSubmit&&m.handleSubmit(...o),["prevent"]))},[s("div",B,[s("label",S,i(n.t("messages.inout.name"))+": ",1),d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.username=o),type:"text",id:"username",required:""},null,512),[[l,r.username,void 0,{trim:!0}]])]),s("div",C,[s("label",N,i(n.t("messages.inout.email"))+": ",1),d(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.email=o),type:"email",id:"email",required:""},null,512),[[l,r.email,void 0,{trim:!0}]])]),s("div",D,[s("label",k,i(n.t("messages.inout.password"))+": ",1),d(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.password=o),type:"password",id:"password",required:""},null,512),[[l,r.password,void 0,{trim:!0}]])]),s("button",q,i(n.t("messages.inout.registrationB")),1)],32)])}const T=c(R,[["render",H],["__scopeId","data-v-a3adfedb"]]),U={name:"RegistrationView",components:{FHeader:w,RegistrationComponent:T,FooterB:b}};function E(t,e,a,n,r,m){const o=p("FHeader"),g=p("RegistrationComponent"),_=p("FooterB");return f(),h(v,null,[u(o),u(g),u(_)],64)}const O=c(U,[["render",E]]);export{O as default};
