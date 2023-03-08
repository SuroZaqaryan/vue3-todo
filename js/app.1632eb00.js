(function(){"use strict";var e={7713:function(e,t,o){var s=o(9242),n=o(3396);function r(e,t,o,s,r,i){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(a)}var i=(0,n.aZ)({name:"App"}),a=o(89);const l=(0,a.Z)(i,[["render",r]]);var d=l,c=o(2483),u=o(7139),p=o.p+"img/filter-icon.cee5d3dd.svg";const g=e=>((0,n.dD)("data-v-34ea92db"),e=e(),(0,n.Cn)(),e),m={class:"p-2 mobile:p-5"},h={class:"max-w-1xl m-auto"},f={class:"px-8 py-5 border border-[#bdbdbd]"},b={class:"flex items-center justify-between flex-wrap gap-3 rounded bg-indigo-700 p-3 mb-5"},v={class:"text-lg mobile:text-2xl text-white font-bold"},w={class:"w-full mobile:w-auto"},y=g((()=>(0,n._)("div",{class:"flex justify-between mb-5"},[(0,n._)("div",null,[(0,n._)("h3",{class:"mb-1 text-xl"},"Список задач"),(0,n._)("p",{class:"text-gray-600"},"Успевай больше и ничего не забывай")])],-1))),_={class:"basis-[90%] mb-4 mobile:mb-0"},x=g((()=>(0,n._)("div",{class:"basis-[10%]"},[(0,n._)("input",{type:"submit",value:"Добавить",class:"w-full rounded-lg bg-indigo-700 hover:bg-indigo-600 cursor-pointer text-white py-2 px-4 text-sm"})],-1))),S={class:"px-8 py-6 bg-gray-100"},O={class:"flex flex-wrap justify-between items-end mt-4 bg-[#3f51b517] p-4 rounded"},T=g((()=>(0,n._)("div",{class:"flex items-center"},[(0,n._)("img",{class:"mr-2",width:"22",height:"22",src:p}),(0,n._)("h3",{class:"text-lg"},"Фильтры")],-1))),I={class:"mt-2"},k={for:"all",class:"flex items-center cursor-pointer mb-1"},C=g((()=>(0,n._)("span",{class:"text-sm"},"Все",-1))),D={for:"todays",class:"flex items-center cursor-pointer"},Z=g((()=>(0,n._)("span",{class:"text-sm"},"Сегодняшние",-1))),A=["disabled"],P={class:"mt-4 md:mt-0"},j=g((()=>(0,n._)("div",{class:"my-5"},[(0,n._)("p",{class:"text-gray-600"},"Текущие задачи")],-1))),U={class:"grid gap-4 grid-cols-1 grid-rows-2 md:grid-cols-2"},N=["for"],E={class:"mr-2 bg-red-500"},H=["id","onChange","checked"],L={class:"w-[90%]"},R={class:"todo-title"},V=["onClick"],G=g((()=>(0,n._)("p",{class:"text-red-500 text-sm font-semibold"},"Удалить",-1))),J=[G];function M(e,t,o,r,i,a){return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",h,[(0,n._)("div",f,[(0,n._)("div",b,[(0,n._)("div",null,[(0,n._)("h2",v,(0,u.zw)(e.user.username)+" 🧑 ",1)]),(0,n._)("div",w,[(0,n._)("button",{onClick:t[0]||(t[0]=(...t)=>e.handleSignOut&&e.handleSignOut(...t)),class:"w-full bg-transparent text-white text-sm py-2 px-4 border border-white rounded"}," Выйти из аккаунта ")])]),y,(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...t)=>e.addTodo&&e.addTodo(...t)),["prevent"])),class:"block mobile:flex items-center gap-4 flex-wrap mobile:flex-nowrap"},[(0,n._)("div",_,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.newTodoTitle=t),placeholder:"Новая задача...",class:"w-full rounded-lg text-sm border border-gray-400 focus:ring-0",maxlength:"70",required:""},null,512),[[s.nr,e.newTodoTitle]])]),x],32)]),(0,n._)("div",S,[(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.searchTerm=t),placeholder:"Поиск...",class:"w-full rounded-lg text-sm border border-gray-400 focus:ring-0"},null,512),[[s.nr,e.searchTerm]])]),(0,n._)("div",O,[(0,n._)("div",null,[T,(0,n._)("div",I,[(0,n._)("label",k,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.selectedOption=t),type:"radio",id:"all",name:"all",value:"Все",class:"mr-2 cursor-pointer"},null,512),[[s.G2,e.selectedOption]]),C]),(0,n._)("label",D,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.selectedOption=t),type:"radio",id:"todays",name:"todays",value:"Сегодняшние",class:"mr-2 cursor-pointer"},null,512),[[s.G2,e.selectedOption]]),Z]),(0,n._)("button",{disabled:0===e.selectedOption.length,onClick:t[6]||(t[6]=(...t)=>e.unCheck&&e.unCheck(...t)),class:"bg-indigo-600 hover:bg-indigo-700 text-white mt-3 text-sm font-bold py-2 px-4 border border-indigo-700 rounded"}," Сбросить фильтры ",8,A)])]),(0,n._)("div",P,[(0,n._)("button",{onClick:t[7]||(t[7]=(...t)=>e.createTomorrowTodo&&e.createTomorrowTodo(...t)),title:"Данная кнопка добовляет статистическую заметку со вчерашневой датой для проверки роботоспособности фильтра",class:"bg-red-500 hover:bg-red-400 text-white text-sm font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"}," Добавить заметку со вчерашневой датой ")])]),j,(0,n._)("div",U,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.filteredTodos,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.id,class:(0,u.C_)([{"line-through":t.completed},"flex items-center justify-between p-3 select-none rounded cursor-pointer border border-gray-400"])},[(0,n._)("label",{for:t.id.toString(),class:"flex w-[90%] items-center cursor-pointer"},[(0,n._)("div",E,[(0,n._)("input",{type:"checkbox",id:t.id.toString(),onChange:o=>e.toggleCompleted(t.id),checked:t.completed,class:"flex cursor-pointer focus:ring-0"},null,40,H)]),(0,n._)("div",L,[(0,n._)("span",R,(0,u.zw)(t.title),1)])],8,N),(0,n._)("div",{onClick:o=>e.removeTodo(t.id)},J,8,V)],2)))),128))])])])])}o(7658);var F=o(4870),K=o(4161),Y=o(1609),z=o(1020);const B=(0,z.Q_)({id:"user",state:()=>({username:"",isSignedIn:!1}),actions:{setUsername(e){this.username=e}},getters:{formattedUsername(){return`@${this.username}`}},persist:{enabled:!0,strategies:[{storage:localStorage,paths:["username","isSignedIn"]}]}});var q=o(3029);const W=(0,z.Q_)({id:"todo",state:()=>({todos:[],searchTerm:""}),actions:{add(e){const t={id:(0,q.Z)(),title:e,completed:!1,createdAt:new Date};K.Z.post("http://localhost:4000/todos",t).then((e=>{this.todos.push(e.data)}))},filterTodayTodos(){const e=new Date,t=this.todos.filter((t=>{const o=new Date(t.createdAt);return o.getDate()===e.getDate()&&o.getMonth()===e.getMonth()&&o.getFullYear()===e.getFullYear()}));this.todos=t},async toggleCompleted(e){await K.Z.patch(`http://localhost:4000/todos/${e}`,{completed:!0}).then((()=>{const t=this.todos.find((t=>t.id===e));t&&(t.completed=!t.completed)})).catch((e=>{console.error(e)}))},filterTomorrowObjects(){const e=new Date,t=new Date(e);t.setDate(e.getDate()-1);const o={id:(0,q.Z)(),title:"Static todo",completed:!1,createdAt:t};K.Z.post("http://localhost:4000/todos",o).then((e=>{this.todos.push(e.data)}))},async remove(e){try{await K.Z["delete"](`http://localhost:4000/todos/${e}`).then((()=>{this.todos=this.todos.filter((t=>t.id!==e))}))}catch(t){console.log(t)}},setSearchTerm(e){this.searchTerm=e}},getters:{filteredTodos(){return this.todos.filter((e=>e.title.toLowerCase().includes(this.searchTerm.toLowerCase())))}}});var $=(0,n.aZ)({name:"HomePage",setup(){const e=(0,Y.v0)(),t=B(),o=(0,c.tv)(),s=W(),r=(0,F.iH)(""),i=(0,F.iH)(""),a=["Все","Сегодняшние"],l=(0,F.iH)("");(0,n.bv)((async()=>{const e=sessionStorage.getItem("filteredProducts"),t=sessionStorage.getItem("selectedOption");if(e&&"Все"!==t){s.todos.splice(0,s.todos.length);for(const t in JSON.parse(e))s.todos.push(JSON.parse(e)[t])}else g()})),(0,n.YP)(l,(e=>{switch(sessionStorage.setItem("selectedOption",l.value),e){case"Все":g();break;case"Сегодняшние":s.filterTodayTodos();break;default:g();break}}));const d=()=>{""!==r.value.trim()&&(s.add(r.value),r.value="")},u=()=>l.value="",p=e=>s.toggleCompleted(e),g=async()=>{try{const e=await K.Z.get("http://localhost:4000/todos");s.todos=e.data}catch(e){console.error(e)}},m=e=>s.remove(e),h=()=>{s.filterTomorrowObjects(),l.value=""};function f(){(0,Y.w7)(e).then((()=>{sessionStorage.removeItem("user"),o.push("/login")})).catch((e=>{console.log(e)}))}const b=(0,n.Fl)((()=>s.todos.filter((e=>e.title.toLowerCase().includes(i.value.toLowerCase())))));return(0,n.YP)(i,(async()=>{sessionStorage.setItem("filteredProducts",JSON.stringify({...b.value}));const e=sessionStorage.getItem("filteredProducts");if(e){s.todos.splice(0,s.todos.length);for(const t in JSON.parse(e))s.todos.push(JSON.parse(e)[t])}})),{user:t,options:a,searchTerm:i,newTodoTitle:r,filteredTodos:b,selectedOption:l,unCheck:u,addTodo:d,removeTodo:m,getAllTodos:g,handleSignOut:f,toggleCompleted:p,createTomorrowTodo:h}}});const Q=(0,a.Z)($,[["render",M],["__scopeId","data-v-34ea92db"]]);var X=Q;const ee=e=>((0,n.dD)("data-v-d912fdc2"),e=e(),(0,n.Cn)(),e),te={class:"relative h-screen"},oe={class:"absolute max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},se=ee((()=>(0,n._)("div",{id:"firebaseui-auth-container"},null,-1))),ne=ee((()=>(0,n._)("div",{id:"loader"},"Loading...",-1))),re=ee((()=>(0,n._)("br",null,null,-1))),ie={key:0};function ae(e,t,o,s,r,i){return(0,n.wg)(),(0,n.iD)("div",te,[(0,n._)("div",oe,[se,ne,re,s.user.isSignedIn?((0,n.wg)(),(0,n.iD)("div",ie,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>s.handleSignOut&&s.handleSignOut(...e))},"Sign Out")])):(0,n.kq)("",!0)])])}var le={apiKey:"AIzaSyCnCg8miAUi6IHqvK68wysyS37AUGX1my0",authDomain:"practice8-vue3-firebaseui-app.firebaseapp.com",projectId:"practice8-vue3-firebaseui-app",storageBucket:"practice8-vue3-firebaseui-app.appspot.com",messagingSenderId:"623503090265",appId:"1:623503090265:web:92183f62bc14489ce50748",measurementId:"G-6D4L7KKB3W"},de=o(1509),ce=o(6866);de.Z.initializeApp(le);const ue=(0,Y.v0)();var pe={setup(){const e=(0,c.tv)(),t=B(),o={signInFlow:"popup",signinSuccessUrl:"http://localhost:8080/",signInOptions:[de.Z.auth.GoogleAuthProvider.PROVIDER_ID,de.Z.auth.TwitterAuthProvider.PROVIDER_ID,de.Z.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(o){return t.value=o.user.displayName,t.setUsername(o.user.displayName),t.isSignedIn=!0,e.push("/"),!1},uiShown:function(){document.getElementById("loader").style.display="none"}}};try{var s=new ce.I.AuthUI(de.Z.auth());s.start("#firebaseui-auth-container",o)}catch{window.location.reload()}const n=()=>{(0,Y.w7)(ue).then((()=>{t.value=null,t.isSignedIn=!1,console.log("Signed out"),s.start("#firebaseui-auth-container",o)})).catch((e=>{console.log(e)}))};return{user:t,handleSignOut:n}}};const ge=(0,a.Z)(pe,[["render",ae],["__scopeId","data-v-d912fdc2"]]);var me=ge;const he=[{path:"/login",name:"Login",component:me,meta:{isAuth:!1}},{path:"/",name:"Home",component:X,meta:{isAuth:!0}}],fe=(0,c.p7)({history:(0,c.PO)(),routes:he});function be(){const e=localStorage.getItem("user");if(null!==e){const{isSignedIn:t}=JSON.parse(e);return t}return!1}fe.beforeEach(((e,t,o)=>{const s=e.matched.some((e=>e.meta.isAuth));s&&!be()?o("/login"):o()}));var ve=fe,we=o(3282);const ye=(0,z.WB)();ye.use(we.Z),(0,s.ri)(d).use(ve).use(ye).mount("#app")}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}o.m=e,function(){o.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var e=[];o.O=function(t,s,n,r){if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],r=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/vue3-todo/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,r,i=s[0],a=s[1],l=s[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var c=l(o)}for(t&&t(s);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},s=self["webpackChunkvue3_todo"]=self["webpackChunkvue3_todo"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(7713)}));s=o.O(s)})();
//# sourceMappingURL=app.1632eb00.js.map