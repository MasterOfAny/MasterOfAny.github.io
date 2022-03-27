(function(){var e={1454:function(e,t,a){"use strict";var n=a(9242),r=a(8716),l=(a(4415),a(3396));function o(e,t){const a=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(a)}var i=a(89);const s={},u=(0,i.Z)(s,[["render",o]]);var d=u,c=a(678);const p=(0,l._)("h2",{class:"users-table__header"},"Список пользователей",-1),m=(0,l.Uk)("Удалить"),g=(0,l._)("h2",{class:"events-table__header"},"События",-1);function h(e,t,a,r,o,i){const s=(0,l.up)("Header"),u=(0,l.up)("el-table-column"),d=(0,l.up)("el-button"),c=(0,l.up)("el-table"),h=(0,l.up)("el-pagination"),f=(0,l.up)("el-col"),v=(0,l.up)("el-row"),w=(0,l.up)("el-main"),b=(0,l.Q2)("loading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s,{activeIndex:"/"}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{gutter:20},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{lg:14,xs:24},{default:(0,l.w5)((()=>[p,(0,l.wy)(((0,l.wg)(),(0,l.j4)(c,{class:"users-table",data:i.pagedTableData,style:{width:"100%"},"element-loading-text":"Loading...","element-loading-spinner":o.svg,"element-loading-svg-view-box":"-10, -10, 50, 50","element-loading-background":"rgba(0, 0, 0, 0.8)"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{prop:"id",label:"ID"}),(0,l.Wm)(u,{prop:"name",label:"Имя"}),(0,l.Wm)(u,{prop:"role",label:"Роль"}),(0,l.Wm)(u,{prop:"ctime",label:"Дата создания"}),(0,l.Wm)(u,{label:"Действия"},{default:(0,l.w5)((e=>[(0,l.Wm)(d,{onClick:t=>i.deleteRow(e.$index),type:"danger",size:"small"},{default:(0,l.w5)((()=>[m])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","element-loading-spinner"])),[[b,o.loading]]),(0,l.Wm)(h,{class:"pagination",background:"",layout:"prev, pager, next",total:10*o.totalPages,onCurrentChange:i.setPage},null,8,["total","onCurrentChange"])])),_:1}),(0,l.Wm)(f,{lg:10,xs:24},{default:(0,l.w5)((()=>[g,(0,l.Wm)(n.uT,{name:"el-fade-in-linear"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"events-table",data:i.eventsUpload,style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{prop:"ctime",label:"Дата"}),(0,l.Wm)(u,{prop:"event",label:"Событие"})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1})])),_:1})],64)}const f=(0,l.Uk)("Главная страница"),v=(0,l.Uk)("Авторизация"),w=(0,l.Uk)("Магазин");function b(e,t,a,n,r,o){const i=(0,l.up)("el-menu-item"),s=(0,l.up)("el-menu"),u=(0,l.up)("el-header");return(0,l.wg)(),(0,l.j4)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{"default-active":a.activeIndex,onSelect:o.handleSelect,class:"menu",mode:"horizontal",router:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{index:"/"},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(i,{index:"/login"},{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(i,{index:"/shop"},{default:(0,l.w5)((()=>[w])),_:1})])),_:1},8,["default-active","onSelect"])])),_:1})}var _={name:"Header",props:{activeIndex:{type:String,required:!0}},methods:{handleSelect(e){console.log(e)}}};const y=(0,i.Z)(_,[["render",b]]);var x=y,W={components:{Header:x},data(){return{tableData:[],eventsData:[],totalPages:Number,page:1,loading:Boolean,svg:'\n        <path class="path" d="\n          M 30 15\n          L 28 17\n          M 25.61 25.61\n          A 15 15, 0, 0, 1, 15 30\n          A 15 15, 0, 1, 1, 27.99 7.5\n          L 15 15\n        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n      '}},methods:{fetchData(){this.loading=!0,this.axios.get("https://test.relabs.ru/api/users/list?offset="+5*(this.page-1)).then((e=>{this.totalPages=e.data.total/5,this.tableData=e.data.items,this.toHumanDate(this.tableData),this.loading=!1}))},toHumanDate(e){const t={day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"};if(!Array.isArray(e))return new Date(1e3*e).toLocaleString("ru-RU",t);for(let a=0;a<e.length;a++)e[a].ctime=new Date(1e3*e[a].ctime).toLocaleString("ru-RU",t)},setPage(e){this.page=e,this.fetchData()},deleteRow(e){this.tableData.splice(e,1)}},mounted(){this.$store.state.isLogged?(this.fetchData(),this.$connect("wss://test.relabs.ru/event",{format:"json"}),this.$options.sockets.onmessage=e=>{let t=JSON.parse(e.data),a=this.toHumanDate(t.ctime);this.eventsData.push({ctime:a,event:t.event})}):this.$router.push({path:"/login"})},unmounted(){this.$store.state.isLogged&&this.$disconnect()},computed:{pagedTableData(){return this.tableData},eventsUpload(){return this.eventsData.length>10&&this.eventsData.shift(),this.eventsData}}};const D=(0,i.Z)(W,[["render",h]]);var k=D;const j={class:"shop__items"};function O(e,t,a,n,r,o){const i=(0,l.up)("Header"),s=(0,l.up)("ItemCard"),u=(0,l.up)("el-main");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i,{activeIndex:"/shop"}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("div",j,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(6,(e=>(0,l.Wm)(s,{key:e,image:Math.floor(3*Math.random())+1,value:Math.floor(5*Math.random())+1},null,8,["image","value"]))),64))])])),_:1})],64)}var U=a(7139),L=a(8762);const M=e=>((0,l.dD)("data-v-53b3b925"),e=e(),(0,l.Cn)(),e),C={style:{"background-color":"white"}},I={style:{padding:"20px 10px 10px 10px"}},E={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},P={class:"item-card__link",href:"#"},S=["src"],$=(0,l.Uk)("-15%"),H={class:"item-card__description"},T=M((()=>(0,l._)("div",{class:"price"},[(0,l._)("span",{class:"price__new"},"86 956 ₽"),(0,l._)("span",{class:"price__old"},"99 990 ₽")],-1))),V=M((()=>(0,l._)("div",{class:"e-price"},[(0,l._)("span",{class:"e-price__price"},"85 251 ₽")],-1))),Z=M((()=>(0,l._)("div",{class:"specs"},[(0,l._)("p",{class:"specs-text"},' Apple / Смартфон iPhone 12 Pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ ')],-1))),A={class:"rating"},N={class:"rating__likes"},R={class:"payment"},q=(0,l.Uk)("Рассрочка 0-0-6"),F={class:"actions"},z=(0,l.Uk)("В корзину"),Y=M((()=>(0,l._)("img",{class:"fav",src:L,alt:""},null,-1)));function B(e,t,n,r,o,i){const s=(0,l.up)("el-skeleton-item"),u=(0,l.up)("el-tag"),d=(0,l.up)("el-rate"),c=(0,l.up)("el-button"),p=(0,l.up)("el-card"),m=(0,l.up)("el-skeleton");return(0,l.wg)(),(0,l.j4)(m,{loading:o.isImgLoading,animated:""},{template:(0,l.w5)((()=>[(0,l._)("div",C,[(0,l.Wm)(s,{variant:"image",style:{width:"215px",height:"224px",display:"block",margin:"0 auto"}}),(0,l._)("div",I,[(0,l.Wm)(s,{variant:"h3",style:{width:"50%",display:"block"}}),(0,l.Wm)(s,{variant:"h3",style:{"margin-top":"5px",width:"50%",display:"block"}}),(0,l.Wm)(s,{variant:"text",style:{"margin-top":"5px",width:"100%",height:"20px"}}),(0,l.Wm)(s,{variant:"h3",style:{"margin-top":"5px",width:"50%",display:"block"}}),(0,l.Wm)(s,{variant:"h3",style:{"margin-top":"5px",width:"50%",display:"block"}}),(0,l._)("div",E,[(0,l.Wm)(s,{variant:"text",style:{width:"40%"}}),(0,l.Wm)(s,{variant:"text",style:{"margin-left":"10px",width:"10%"}})])])])])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"item-card"},{default:(0,l.w5)((()=>[(0,l._)("a",P,[(0,l._)("img",{src:a(6441)(`./smart${n.image}.jpg`),alt:"",class:"item-card__img"},null,8,S),(0,l.Wm)(u,{class:"item-card__img-tag",type:"danger"},{default:(0,l.w5)((()=>[$])),_:1})]),(0,l._)("div",H,[T,V,Z,(0,l._)("div",A,[(0,l.Wm)(d,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),disabled:"",colors:["#d409b9","#d409b9","#d409b9"],"disabled-void-color":"#c2c2c2"},null,8,["modelValue"]),(0,l._)("div",N,(0,U.zw)(Math.floor(80*Math.random())+1),1)]),(0,l._)("div",R,[(0,l.Wm)(c,{class:"payment-bg",round:""},{default:(0,l.w5)((()=>[q])),_:1})]),(0,l._)("div",F,[(0,l.Wm)(c,{class:"cart"},{default:(0,l.w5)((()=>[z])),_:1}),Y])])])),_:1})])),_:1},8,["loading"])}var G={name:"ItemCard",props:{image:{type:Number,required:!0},value:{type:Number,required:!0}},data(){return{isImgLoading:!0}},mounted(){setTimeout((()=>{this.isImgLoading=!1}),1e3)}};const J=(0,i.Z)(G,[["render",B],["__scopeId","data-v-53b3b925"]]);var K=J,Q={components:{Header:x,ItemCard:K}};const X=(0,i.Z)(Q,[["render",O],["__scopeId","data-v-2c4daeb7"]]);var ee=X;const te=e=>((0,l.dD)("data-v-7dceb8ba"),e=e(),(0,l.Cn)(),e),ae={class:"login-card"},ne=te((()=>(0,l._)("h1",{class:"login-header"},"Авторизация",-1))),re=(0,l.Uk)(" Войти ");function le(e,t,a,r,o,i){const s=(0,l.up)("el-input"),u=(0,l.up)("el-form-item"),d=(0,l.up)("el-button"),c=(0,l.up)("el-form"),p=(0,l.up)("el-card");return(0,l.wg)(),(0,l.iD)("div",ae,[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[ne,(0,l.Wm)(c,{"label-position":"top",class:"login-form",model:o.loginData,rules:o.rules,ref:"loginFormRef","label-width":"120px","validate-on-rule-change":"",onSubmit:(0,n.iM)(i.login,["prevent"])},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"input-field",prop:"email"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{type:"email",modelValue:o.loginData.email,"onUpdate:modelValue":t[0]||(t[0]=e=>o.loginData.email=e),placeholder:"Почта",readonly:o.loading},null,8,["modelValue","readonly"])])),_:1}),(0,l.Wm)(u,{class:"input-field",prop:"password"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{type:"password",modelValue:o.loginData.password,"onUpdate:modelValue":t[1]||(t[1]=e=>o.loginData.password=e),placeholder:"Пароль",readonly:o.loading},null,8,["modelValue","readonly"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{loading:o.loading,class:"login-button",type:"primary","native-type":"submit",block:""},{default:(0,l.w5)((()=>[re])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","rules","onSubmit"])])),_:1})])}a(1703);var oe={data(){let e=(e,t,a)=>{""===t?a(new Error("Пожалуйста, введите адрес почты")):t.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?a():a(new Error("Введите корректный адрес почты"))},t=(e,t,a)=>{this.loginData.password=t.trim(),""===t.trim()?a(new Error("Пожалуйста, введите пароль")):t.trim().length<8?a(new Error("Длина пароля должна быть не менее 8 символов")):0===t.trim().replace(/[^A-Z]/g,"").length?a(new Error("Пароль должен содержать хотя бы 1 заглавную букву")):a()};return{loginData:{email:"",password:""},loading:!1,rules:{email:[{required:!0,validator:e,trigger:"blur"}],password:[{required:!0,validator:t,trigger:"blur"}]}}},methods:{simulateLogin(){return new Promise((e=>{setTimeout(e,2e3)}))},async login(){let e=await this.$refs.loginFormRef.validate();if(!e)return!1;this.loading=!0,this.$store.state.isLogged=!0,await this.simulateLogin(),this.$router.push({path:"/"}),this.loading=!1}}};const ie=(0,i.Z)(oe,[["render",le],["__scopeId","data-v-7dceb8ba"]]);var se=ie;const ue=[{path:"/",name:"home",component:k},{path:"/login",name:"login",component:se},{path:"/shop",name:"shop",component:ee}],de=(0,c.p7)({history:(0,c.PO)("/relabs-test/"),routes:ue});var ce=de,pe=a(65),me=a(6265),ge=a.n(me),he=a(6423),fe=a(636),ve=a.n(fe);const we=(0,pe.MT)({state(){return{isLogged:!1}}}),be=(0,n.ri)(d);be.use(ce).use(we).use(he.Z,ge()).use(r.Z).use(ve()," ",{connectManually:!0,reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}).mount("#app")},6441:function(e,t,a){var n={"./smart1.jpg":3563,"./smart2.jpg":1638,"./smart3.jpg":2305};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=6441},8762:function(e,t,a){"use strict";e.exports=a.p+"img/fav.2e000a20.svg"},3563:function(e,t,a){"use strict";e.exports=a.p+"img/smart1.56e5bc22.jpg"},1638:function(e,t,a){"use strict";e.exports=a.p+"img/smart2.7bb9b73b.jpg"},2305:function(e,t,a){"use strict";e.exports=a.p+"img/smart3.15a0806d.jpg"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,n,r,l){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],l=e[d][2];for(var i=!0,s=0;s<n.length;s++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,r,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/relabs-test/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,o=n[0],i=n[1],s=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var d=s(a)}for(t&&t(n);u<o.length;u++)l=o[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},n=self["webpackChunkrelabs_test"]=self["webpackChunkrelabs_test"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1454)}));n=a.O(n)})();
//# sourceMappingURL=app.b3fd6c4f.js.map