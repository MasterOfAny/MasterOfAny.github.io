(function(e){function t(t){for(var a,s,c=t[0],u=t[1],o=t[2],b=0,p=[];b<c.length;b++)s=c[b],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/animeapi/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"071b":function(e,t,n){"use strict";n("a60a")},"1d5f":function(e,t,n){"use strict";n("ac78")},"1d8d":function(e,t,n){"use strict";n("f117")},"2c45":function(e,t,n){},"307d":function(e,t,n){"use strict";n("2c45")},"367b":function(e,t,n){},"4a91":function(e,t,n){},"4f5f":function(e,t,n){"use strict";n("dae4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("159b"),n("b0c0");var a=n("7a23"),i={class:"app"};function r(e,t){var n=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["g"])("div",i,[Object(a["j"])(n)])}n("9c25");var s=n("6b0d"),c=n.n(s);const u={},o=c()(u,[["render",r]]);var l=o,b=["value"];function p(e,t,n,i,r,s){return Object(a["t"])(),Object(a["g"])("input",{value:n.modelValue,onInput:t[0]||(t[0]=function(){return s.updateInput&&s.updateInput.apply(s,arguments)}),class:"input",type:"text"},null,40,b)}n("a9e3");var d={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput:function(e){console.log(e.target.value),this.$emit("update:modelValue",e.target.value)}}};n("1d5f");const h=c()(d,[["render",p],["__scopeId","data-v-2b0acc56"]]);var j=h,f=function(e){return Object(a["w"])("data-v-32814f40"),e=e(),Object(a["u"])(),e},m={id:"footer"},O=f((function(){return Object(a["h"])("div",{class:"container"},[Object(a["h"])("div",{class:"copyright"},[Object(a["h"])("p",{class:"copyright-text"}," Copyright Anime-api wrapper © 2022 | All rights reserved | Track Anime Online ")])],-1)})),g=[O];function v(e,t,n,i,r,s){return Object(a["t"])(),Object(a["g"])("footer",m,g)}var _={name:"footerUI"};n("f8f4");const y=c()(_,[["render",v],["__scopeId","data-v-32814f40"]]);var A=y,k={class:"header"},w={class:"container"},I={class:"navbar"},C=Object(a["i"])("Anime-api wrapper"),T={class:"header__links"},L=Object(a["h"])("a",{class:"header__btn"},"movies",-1),x=Object(a["i"])("series"),S=Object(a["h"])("a",{class:"header__btn"},"genres",-1),q=Object(a["h"])("i",{class:"fa fa-search"},null,-1),P=[q];function R(e,t,n,i,r,s){var c=Object(a["A"])("router-link"),u=Object(a["A"])("my-input");return Object(a["t"])(),Object(a["g"])("header",k,[Object(a["h"])("div",w,[Object(a["h"])("nav",I,[Object(a["j"])(c,{to:{name:"main"},class:"header__logo"},{default:Object(a["G"])((function(){return[C]})),_:1}),Object(a["h"])("div",T,[L,Object(a["j"])(c,{to:{name:"allAnime"},class:"header__btn"},{default:Object(a["G"])((function(){return[x]})),_:1}),S]),Object(a["h"])("form",{id:"search",onSubmit:t[2]||(t[2]=Object(a["I"])((function(){}),["prevent"]))},[Object(a["j"])(u,{modelValue:r.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.searchQuery=e}),class:"input-search",placeholder:"Search..."},null,8,["modelValue"]),Object(a["h"])("button",{type:"submit",class:"btn-search",onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"searchPage",query:{q1:r.searchQuery}})})},P)],32)])])])}var F={name:"headerUI",data:function(){return{searchQuery:""}},methods:{}};n("72d1");const M=c()(F,[["render",R]]);var U=M,V=[j,A,U],G=n("6c02"),z={class:"wrapper"},$={class:"sug-field"},E=Object(a["h"])("span",{class:"sug"},"Suggestion",-1),N={class:"sug-nav"},Q=Object(a["h"])("div",{class:"push"},null,-1);function H(e,t,n,i,r,s){var c=Object(a["A"])("headerUI"),u=Object(a["A"])("anime-list"),o=Object(a["A"])("footerUI");return Object(a["t"])(),Object(a["g"])(a["a"],null,[Object(a["j"])(c),Object(a["h"])("div",z,[Object(a["h"])("div",$,[E,Object(a["h"])("ul",N,[Object(a["h"])("li",{class:Object(a["p"])({active:r.isF})},[Object(a["h"])("a",{class:"sug-item",onClick:t[0]||(t[0]=function(e){return s.changeSug("popularityRank")})},"Featured")],2),Object(a["h"])("li",{class:Object(a["p"])({active:r.isMF})},[Object(a["h"])("a",{class:"sug-item",onClick:t[1]||(t[1]=function(e){return s.changeSug("favoritesCount")})},"Most Favorite")],2),Object(a["h"])("li",{class:Object(a["p"])({active:r.isT})},[Object(a["h"])("a",{class:"sug-item",onClick:t[2]||(t[2]=function(e){return s.changeSug("ratingRank")})},"Top rating")],2)])]),Object(a["j"])(a["b"],{name:"list"},{default:Object(a["G"])((function(){return[Object(a["H"])(Object(a["j"])(u,{anime:s.uploadAnime},null,8,["anime"]),[[a["E"],!r.isLoad]])]})),_:1}),Q]),Object(a["j"])(o)],64)}var D=n("1da1"),J=(n("96cf"),{class:"anime__list-wrapper"});function B(e,t,n,i,r,s){var c=Object(a["A"])("anime-item");return Object(a["H"])((Object(a["t"])(),Object(a["g"])("div",J,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(n.anime,(function(e,t){return Object(a["t"])(),Object(a["e"])(c,{series:e,key:t+1},null,8,["series"])})),128))],512)),[[a["E"],n.anime]])}n("c96a");var K=["src"],W={class:"anime-episodes"},X=Object(a["i"])("eps"),Y={class:"anime__name"};function Z(e,t,n,i,r,s){var c=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["e"])(c,{to:{name:"animePage",params:{id:n.series.id}},class:"anime__card"},{default:Object(a["G"])((function(){return[Object(a["h"])("img",{src:n.series.attributes.posterImage.small,"src-placeholder":"../assets/logo.png",load:""},null,8,K),Object(a["h"])("span",W,[X,Object(a["h"])("i",null,Object(a["C"])(n.series.attributes.episodeCount?n.series.attributes.episodeCount:"-"),1)]),Object(a["h"])("span",Y,[Object(a["h"])("h2",null,Object(a["C"])(n.series.attributes.titles["en"]?n.series.attributes.titles["en"]:n.series.attributes.titles["en_jp"]?n.series.attributes.titles["en_jp"]:n.series.attributes.titles["en_cn"]?n.series.attributes.titles["en_cn"]:n.series.attributes.titles["en_us"]),1)])]})),_:1},8,["to"])}var ee={props:{series:{type:Object,required:!0}}};n("82f0");const te=c()(ee,[["render",Z],["__scopeId","data-v-3d86c79a"]]);var ne=te,ae={components:{AnimeItem:ne},props:{anime:{type:Array,required:!0}}};n("071b");const ie=c()(ae,[["render",B],["__scopeId","data-v-5ea8ce9e"]]);var re=ie,se=n("bc3a"),ce=n.n(se),ue={components:{AnimeList:re},data:function(){return{animeList:[],crit:"popularityRank",totalPages:6,offset:0,page:1,isLoad:!1,isF:!0,isMF:!1,isT:!1}},methods:{changeSug:function(e){this.crit=e,"popularityRank"==e?(this.isF=!this.isF,this.isMF=!1,this.isT=!1):"favoritesCount"==e?(this.isMF=!this.isMF,this.isF=!1,this.isT=!1):"ratingRank"==e&&(this.isT=!this.isT,this.isF=!1,this.isMF=!1),this.fetchAnime()},fetchAnime:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoad=!0,"favoritesCount"==e.crit&&(e.crit="-"+e.crit),t.next=5,ce.a.get("https://kitsu.io/api/edge/anime?sort="+e.crit+"&fields[anime]=id,titles,posterImage,episodeCount&page[limit]=16&page[offset]=0");case 5:n=t.sent,e.animeList=n.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:return t.prev=12,e.isLoad=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()}},mounted:function(){this.fetchAnime()},computed:{uploadAnime:function(){return this.animeList}}};n("1d8d");const oe=c()(ue,[["render",H]]);var le=oe,be={class:"wrapper"},pe={class:"page__wrapper"},de=["onClick"],he={key:0},je={key:1},fe={key:2},me=Object(a["h"])("div",{class:"push"},null,-1);function Oe(e,t,n,i,r,s){var c=Object(a["A"])("headerUI"),u=Object(a["A"])("anime-list"),o=Object(a["A"])("footerUI");return Object(a["t"])(),Object(a["g"])(a["a"],null,[Object(a["j"])(c),Object(a["h"])("div",be,[Object(a["j"])(a["b"],{name:"list",appear:""},{default:Object(a["G"])((function(){return[Object(a["H"])(Object(a["j"])(u,{anime:s.loadAnime},null,8,["anime"]),[[a["E"],!r.isAnimeLoading]])]})),_:1}),Object(a["h"])("div",pe,[(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(r.pages,(function(e,t){return Object(a["t"])(),Object(a["g"])("a",{key:e,class:Object(a["p"])([r.page===e?"current-page":"page"]),onClick:function(n){return r.page!==e?s.changePage(e,t):{}}},[r.page>3&&0===t?(Object(a["t"])(),Object(a["g"])("span",he," First")):5===t?(Object(a["t"])(),Object(a["g"])("span",je,"Last")):(Object(a["t"])(),Object(a["g"])("span",fe,Object(a["C"])(e),1))],10,de)})),128))]),me]),Object(a["j"])(o)],64)}n("99af");var ge={components:{AnimeList:re},data:function(){return{anime:[],pages:[1,2,3,4,5,void 0],isAnimeLoading:!1,totalPages:5,offset:0,page:1,last:Number}},methods:{changePage:function(e,t){if(this.page=e,this.offset=0+32*this.page-32,e===this.last)for(var n=1;n<5;n++)this.pages[n]=this.last+(n-5);else if(e>=4&&e<=this.last-4)for(var a=1;a<5;a++)this.pages[a]+=t-2;else if(3==e||1==e)for(var i=1;i<5;i++)this.pages[i]=i+1;this.fetchAnime()},fetchAnime:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isAnimeLoading=!0,t.next=4,ce.a.get("https://kitsu.io/api/edge/anime?filter[subtype]=TV&sort=popularityRank&fields[anime]=id,titles,posterImage,episodeCount&page[limit]=16&page[offset]="+e.offset);case 4:return n=t.sent,a=n.data.data,t.next=8,ce.a.get("https://kitsu.io/api/edge/anime?filter[subtype]=TV&sort=popularityRank&fields[anime]=id,titles,posterImage,episodeCount&page[limit]=16&page[offset]="+(e.offset+16));case 8:i=t.sent,r=i.data.data,e.anime=a.concat(r),e.pages[5]=Math.ceil(n.data.meta.count/32),e.last=e.pages[5],t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:return t.prev=18,e.isAnimeLoading=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,15,18,21]])})))()}},mounted:function(){this.fetchAnime()},computed:{loadAnime:function(){return this.anime}}};n("cdc1");const ve=c()(ge,[["render",Oe]]);var _e=ve,ye=(n("a4d3"),n("e01a"),{class:"wrapper"}),Ae={key:0,class:"anime__target"},ke={class:"anime__header"},we=["src"],Ie={class:"anime__title"},Ce={class:"anime__info"},Te={class:"anime__description"},Le={class:"anime__sinopsys"},xe={class:"anime__extra"},Se=["src"],qe={class:"links"},Pe={class:"genre-list"},Re=Object(a["h"])("span",{class:"link__header"},"Genre:",-1),Fe={class:"status"},Me=Object(a["h"])("span",{class:"link__header"},"Status:",-1),Ue={class:"duration"},Ve=Object(a["h"])("span",{class:"link__header"},"Duration: ",-1),Ge={class:"release"},ze=Object(a["h"])("span",{class:"link__header"},"Release: ",-1),$e=Object(a["h"])("div",{class:"push"},null,-1);function Ee(e,t,n,i,r,s){var c=Object(a["A"])("headerUI"),u=Object(a["A"])("footerUI");return Object(a["t"])(),Object(a["g"])(a["a"],null,[Object(a["j"])(c),Object(a["h"])("div",ye,[r.isAnimeLoading?Object(a["f"])("",!0):(Object(a["t"])(),Object(a["g"])("div",Ae,[Object(a["h"])("div",ke,[r.animeTarget.attributes.coverImage?(Object(a["t"])(),Object(a["g"])("img",{key:0,class:"anime__poster large",src:r.animeTarget.attributes.coverImage.small},null,8,we)):Object(a["f"])("",!0),Object(a["h"])("span",Ie,[Object(a["h"])("h1",null,Object(a["C"])(r.animeTarget.attributes.canonicalTitle),1)])]),Object(a["h"])("div",Ce,[Object(a["h"])("div",Te,[Object(a["h"])("p",Le,Object(a["C"])(r.animeTarget.attributes.description),1),Object(a["h"])("div",xe,[r.animeTarget.attributes.posterImage?(Object(a["t"])(),Object(a["g"])("img",{key:0,class:"anime__poster small",src:r.animeTarget.attributes.posterImage.small},null,8,Se)):Object(a["f"])("",!0),Object(a["h"])("div",qe,[Object(a["h"])("div",Pe,[Re,(Object(a["t"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(r.genres,(function(e,t){return Object(a["t"])(),Object(a["g"])("span",{class:"genre",key:t},Object(a["C"])(e.attributes.name)+", ",1)})),128))]),Object(a["h"])("div",Fe,[Me,Object(a["i"])(" "+Object(a["C"])(r.animeTarget.attributes.status),1)]),Object(a["h"])("div",Ue,[Ve,Object(a["i"])(" "+Object(a["C"])(r.animeTarget.attributes.episodeLength)+" min ",1)]),Object(a["h"])("div",Ge,[ze,Object(a["i"])(" "+Object(a["C"])(r.animeTarget.attributes.startDate.substring(0,4)),1)])])])])])])),$e]),Object(a["j"])(u)],64)}n("a434");var Ne={data:function(){return{animeTarget:null,id:this.$route.params.id,isAnimeLoading:!1,genres:[],size:Number}},methods:{fetchTargetAnime:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isAnimeLoading=!0,t.next=4,ce.a.get("https://kitsu.io/api/edge/anime/"+e.id);case 4:return n=t.sent,t.next=7,ce.a.get("https://kitsu.io/api/edge/anime/"+e.id+"/genres");case 7:a=t.sent,e.animeTarget=n.data.data,e.genres=a.data.data,e.size=e.genres.length-3,e.genres.splice(3,e.size),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:return t.prev=17,e.isAnimeLoading=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})))()}},created:function(){this.fetchTargetAnime()}};n("4f5f");const Qe=c()(Ne,[["render",Ee]]);var He=Qe;function De(e,t,n,i,r,s){var c=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["e"])(c)}var Je={};const Be=c()(Je,[["render",De]]);var Ke=Be,We=function(e){return Object(a["w"])("data-v-2211cb16"),e=e(),Object(a["u"])(),e},Xe={class:"header"},Ye={class:"container"},Ze={class:"navbar"},et=Object(a["i"])("Anime-api wrapper"),tt={class:"header__links"},nt=We((function(){return Object(a["h"])("a",{class:"header__btn"},"movies",-1)})),at=Object(a["i"])("series"),it=We((function(){return Object(a["h"])("a",{class:"header__btn"},"genres",-1)})),rt=We((function(){return Object(a["h"])("i",{class:"fa fa-search"},null,-1)})),st=[rt],ct={class:"wrapper"},ut={class:"search"},ot={class:"search-value"},lt={key:1,class:"no-result"},bt=We((function(){return Object(a["h"])("div",{class:"push"},null,-1)}));function pt(e,t,n,i,r,s){var c=Object(a["A"])("router-link"),u=Object(a["A"])("my-input"),o=Object(a["A"])("anime-list"),l=Object(a["A"])("footerUI");return Object(a["t"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("header",Xe,[Object(a["h"])("div",Ye,[Object(a["h"])("nav",Ze,[Object(a["j"])(c,{to:{name:"main"},class:"header__logo"},{default:Object(a["G"])((function(){return[et]})),_:1}),Object(a["h"])("div",tt,[nt,Object(a["j"])(c,{to:{name:"allAnime"},class:"header__btn"},{default:Object(a["G"])((function(){return[at]})),_:1}),it]),Object(a["h"])("form",{id:"search",onSubmit:t[2]||(t[2]=Object(a["I"])((function(){}),["prevent"]))},[Object(a["j"])(u,{modelValue:r.query,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.query=e}),class:"input-search",placeholder:"Search..."},null,8,["modelValue"]),Object(a["h"])("button",{type:"submit",class:"btn-search",onClick:t[1]||(t[1]=function(){return s.submitSearch&&s.submitSearch.apply(s,arguments)})},st)],32)])])]),Object(a["h"])("div",ct,[Object(a["h"])("div",ut,[Object(a["h"])("span",ot,'Search results for "'+Object(a["C"])(e.$route.query.q1)+'"',1)]),!r.isLoad&&r.animeSearch?(Object(a["t"])(),Object(a["e"])(o,{key:0,anime:s.loadAnime},null,8,["anime"])):(Object(a["t"])(),Object(a["g"])("div",lt,"No result found.")),bt]),Object(a["j"])(l)],64)}var dt={components:{AnimeList:re},data:function(){return{animeSearch:[],isLoad:!1,query:""}},methods:{submitSearch:function(){this.$router.push({name:"searchPage",query:{q1:this.query}}),this.fetchAnime()},fetchAnime:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoad=!0,"favoritesCount"==e.crit&&(e.crit="-"+e.crit),t.next=5,ce.a.get("https://kitsu.io/api/edge/anime?filter[text]="+e.query+"&fields[anime]=id,titles,posterImage,episodeCount&page[limit]=20&page[offset]=0");case 5:n=t.sent,e.animeSearch=n.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:return t.prev=12,e.isLoad=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()}},mounted:function(){this.query=this.$route.query.q1,this.fetchAnime()},computed:{loadAnime:function(){return this.animeSearch}}};n("307d");const ht=c()(dt,[["render",pt],["__scopeId","data-v-2211cb16"]]);var jt=ht,ft=[{name:"main",path:"/",component:le},{name:"animeLayout",path:"/anime",component:Ke,children:[{path:"/series",name:"allAnime",component:_e},{path:":id",name:"animePage",component:He}]},{name:"searchPage",path:"/search",component:jt}],mt=Object(G["a"])({routes:ft,history:Object(G["b"])("/animeapi/")}),Ot=mt,gt=Object(a["d"])(l);V.forEach((function(e){gt.component(e.name,e)})),gt.use(Ot).mount("#app")},"72d1":function(e,t,n){"use strict";n("b5f0")},"751f":function(e,t,n){},"82f0":function(e,t,n){"use strict";n("367b")},"9c25":function(e,t,n){"use strict";n("b9e2")},a60a:function(e,t,n){},ac78:function(e,t,n){},b5f0:function(e,t,n){},b9e2:function(e,t,n){},cdc1:function(e,t,n){"use strict";n("4a91")},dae4:function(e,t,n){},f117:function(e,t,n){},f8f4:function(e,t,n){"use strict";n("751f")}});
//# sourceMappingURL=app.187ddff1.js.map