(()=>{"use strict";var e={9609:(e,t,o)=>{o.d(t,{Z:()=>a});const a=()=>{var e;const t=window.navigator.userAgent.toLowerCase(),o=navigator.standalone??window.matchMedia("(display-mode: standalone)").matches;return/windows/i.test(t)?e="windows":/macintosh/i.test(t)?e="mac":/android/i.test(t)?e="android":/iphone|ipad|ipod/i.test(t)&&(e="ios"),{name:e,standalone:o,isMobile:"android"==e||"ios"==e}}},3779:(e,t,o)=>{var a=o(8935),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("transition",{attrs:{name:"fade"}},[o("router-view")],1),e.isMobile?o("v-snackbar",{attrs:{bottom:"",light:!e.$vuetify.theme.dark,timeout:5e3,color:e.alertData.color||null},nativeOn:{click:function(t){e.alert=!1}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[o("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[o("v-icon",[e._v("clear")])],1)]}}],null,!1,1002458140),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertData.text)+" ")]):e._e(),o("v-snackbar",{attrs:{top:"",light:!e.$vuetify.theme.dark,timeout:1e4,color:"primary"},nativeOn:{click:function(t){return e.updateApp.apply(null,arguments)}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[o("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[o("v-icon",[e._v("cached")])],1)]}}]),model:{value:e.updateAvailable,callback:function(t){e.updateAvailable=t},expression:"updateAvailable"}},[e._v(" Atualização disponível  ")]),o("banner-install-pwa"),o("banner-cookies-warning"),e.isMobile?e._e():o("etcetero",{ref:"etcetero"})],1)},i=[],s=o(9609),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("figure",{class:{shut:e.disabledEtcetero,"center-y":"/"==e.$route.path},attrs:{"aria-label":"ETcétero"},on:{click:e.talk}},[o("span",{attrs:{role:""}},[o("img",{attrs:{src:e.baseUrl+"img/etcetero.png",role:""}})]),o("figcaption",{staticClass:"v-sheet elevation-2",class:{show:e.dialog||e.alert}},[e._v(e._s(e.dialog?e.dialogText:e.alert?e.alertData.text:null))])])},l=[];const c={name:"etcetero",computed:{baseUrl(){return"/poker/"},disabledEtcetero(){return this.$store.state.disabledEtcetero},alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},alertData:{get(){return this.$store.state.alertData},set(e){this.$store.commit("setAlertData",e)}},dialog:{get(){return this.$store.state.dialog},set(e){this.$store.commit("setDialog",e)}},dialogText:{get(){return this.$store.state.dialogText},set(e){this.$store.commit("setDialogText",e)}}},data(){return{synth:new SpeechSynthesisUtterance}},mounted(){this.resize(),this.handleSynth(),this.$root.$on("resize",(()=>{this.resize()})),document.ontouchmove=e=>{this.refreshPosition(e.touches[0].clientX,e.touches[0].clientY)},window.onmousemove=e=>{this.refreshPosition(e.clientX,e.clientY)},window.onpagehide=()=>{speechSynthesis.cancel()}},beforeDestroy(){speechSynthesis.cancel(),this.$root.$off("resize",this.resize())},methods:{refreshPosition(e,t){let o=this.$el.offsetLeft+this.$el.clientWidth/2,a=this.$el.offsetTop+this.$el.clientHeight/2,r=(e-o)/o,i=(t-a)/a;r=Math.min(60,0!=r?3*r:0),i=Math.min(20,0!=i?20*i:0),document.documentElement.style.setProperty("--y-angle",`${r}deg`),document.documentElement.style.setProperty("--x-angle",-1*i+"deg"),document.documentElement.style.setProperty("--z-angle",`${r}deg`),document.documentElement.style.setProperty("--perspective",`${this.imgSize}px`)},setupVoice(){if(this.disabledEtcetero)return setTimeout((()=>this.resetDialog()),5e3);if(!this.synth.voice){let e=["Daniel"],t=speechSynthesis.getVoices().find((t=>new RegExp(`(${e.join("|")})`,"i").test(t.name)));if(!t)return setTimeout((()=>this.setupVoice()),100);this.synth.voice=t}this.synth.lang=this.synth.voice?.lang??"pt-BR",this.synth.text=this.dialog?this.dialogText:this.alert?this.alertData.text:null,this.synth.pitch=1.5,this.synth.rate=1.5,speechSynthesis.speak(this.synth)},talk(){this.dialog=!0,this.setupVoice()},handleSynth(){this.synth.onboundary=e=>{if(this.disabledEtcetero)return;let t=e?.utterance?.text?.substr(e?.charIndex)?.match(/[aeiou]/);t[0]&&this.$el.classList.add(t[0]),setTimeout((()=>this.$el.classList.remove(t[0])),200)},this.synth.onend=()=>{this.resetDialog()}},resize(){let e=window.innerWidth<=1366?150:220,t=Math.round(.075*e);t%2!=0&&t++,document.documentElement.style.setProperty("--size",`${e}px`),document.documentElement.style.setProperty("--mouth-size",`${t}px`)},resetDialog(){speechSynthesis.cancel(),this.dialog=!1,this.alert=!1,this.alertData={}}},watch:{disabledEtcetero:function(e){e&&speechSynthesis.cancel()},alert:function(e){e&&(this.dialog=!1)},dialog:function(e){e&&this.setupVoice()},alertData:function(e){e?.text&&this.setupVoice()}}},d=c;var u=o(1001),m=(0,u.Z)(d,n,l,!1,null,"71169951",null);const h=m.exports;var p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade"}},[e.show?o("main",{staticClass:"banner elevation-12",on:{click:function(t){e.show=!1}}},[o("header",[e._v("Instale esse App no seu ceular")]),"ios"==e.device.name?[o("div",[e._v(" Toque em "),o("v-icon",[e._v("ios_share")]),e._v(" e depois em ")],1),o("div",{staticClass:"ios"},[e._v(" Adicionar à Tela de Início "),o("span")])]:e._e(),"android"==e.device.name?[o("div",[e._v(" Toque em "),o("v-icon",[e._v("more_vert")]),e._v("e depois em ")],1),o("div",[e._v("Adicionar à tela inicial")])]:e._e()],2):e._e()])},v=[];const f={name:"banner-install-pwa",computed:{device(){return(0,s.Z)()}},data(){return{show:!1}},mounted(){this.device.isMobile&&!this.device.standalone&&(this.show=!0,setTimeout((()=>{this.show=!1}),1e4))}},g=f;var b=o(3453),y=o.n(b),_=o(4926),A=(0,u.Z)(g,p,v,!1,null,"c75b7fda",null);const E=A.exports;y()(A,{VIcon:_.Z});var k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade"}},[e.show?o("footer",{staticClass:"banner elevation-12"},[o("p",[e._v("Usamos cookies para melhorar sua experiência.")]),o("p",[e._v("Saiba mais em "),o("font",{on:{click:function(t){return e.$router.push("/privacy-policy")}}},[e._v(e._s(e.link()))])],1),o("v-btn",{attrs:{color:"accent"},on:{click:e.accept}},[o("v-icon",[e._v("check")]),e._v("Aceitar")],1)],1):e._e()])},w=[];const $={name:"banner-cookies-warning",data(){return{show:!localStorage.getItem("cookiesPolicyAccepted")}},methods:{accept(){localStorage.setItem("cookiesPolicyAccepted","true"),this.show=!1},link(){return`${location.host}/privacy-policy`}}},S=$;var P=o(7080),I=(0,u.Z)(S,k,w,!1,null,"c2bad660",null);const x=I.exports;y()(I,{VBtn:P.Z,VIcon:_.Z});o(5495);const T={components:{etcetero:h,bannerInstallPwa:E,bannerCookiesWarning:x},computed:{isMobile:function(){return(0,s.Z)().isMobile},alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},alertData:function(){return this.$store.state.alertData}},created(){this.refreshPageSize()},mounted(){window.onresize=()=>{this.refreshPageSize()}},methods:{updateApp(){location.reload(!0)},refreshPageSize(){document.body.style.setProperty("--vh",`${(0,s.Z)().standalone?window.outerHeight:window.innerHeight}px`),this.$root.$emit("resize")}}},Z=T;var D=o(3167),V=o(8766),C=(0,u.Z)(Z,r,i,!1,null,null,null);const j=C.exports;y()(C,{VApp:D.Z,VBtn:P.Z,VIcon:_.Z,VSnackbar:V.Z});var B=o(3130),O=o(2809),R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("settings-menu"),o("v-card",[o("v-card-title",[o("img",{attrs:{src:e.baseUrl+"img/icons/logo.svg","aria-label":"Logo de uma xícara de café com várias cartas em cima dispostas como se fossem um leque."}})]),o("v-card-text",[o("v-form",{ref:"form"},[o("v-text-field",{attrs:{rules:e.roomRules,loading:3==e.loading,label:"Sala do seu Time",autoComplete:"none"},model:{value:e.form.room,callback:function(t){e.$set(e.form,"room",t)},expression:"form.room"}}),o("v-text-field",{attrs:{rules:e.playerRules,label:"Seu Nome",autoComplete:"none"},model:{value:e.form.player,callback:function(t){e.$set(e.form,"player",t)},expression:"form.player"}})],1)],1),o("v-card-actions",[o("v-btn",{attrs:{color:"primary",loading:0==e.loading||3==e.loading,disabled:1==e.loading,"aria-label":"Criar sala"},on:{click:function(t){return e.join(!0)}}},[o("v-icon",[e._v("add")]),e._v(" Criar")],1),o("v-btn",{attrs:{color:"accent",loading:1==e.loading||3==e.loading,disabled:0==e.loading,"aria-label":"Entrar na sala"},on:{click:function(t){return e.join()}}},[o("v-icon",[e._v("login")]),e._v(" Entrar")],1)],1)],1)],1)},U=[],F=(o(2801),o(6368));const N={components:{settingsMenu:F.Z},computed:{baseUrl(){return"/poker/"}},data(){return{loading:null,form:{room:localStorage.getItem("room"),player:localStorage.getItem("player")},roomRules:[e=>!!e?.trim()||"Informe seu time"],playerRules:[e=>!!e?.trim()||"Informe seu nome"]}},mounted(){this.$route.query?.team&&this.getSharedRoom(),this.$store.commit("setDialogText","Olá! Jogue com seu time, inserindo o nome dele, e o seu nome.\nCaso não tenha uma sala, crie uma.")},methods:{getSharedRoom(){try{let e=JSON.parse(atob(this.$route.query.team));e.roomName?this.form.room=e.roomName:e.roomId&&(this.loading=3,this.axios.get(`/room/${e.roomId}`).then((e=>{200==e.status&&(this.form.room=e.data.name)})).finally((()=>{this.loading=null})))}catch(e){console.log(e)}},join(e=!1){this.$refs.form.validate()&&(this.loading=e?0:1,this.axios.post("/room/"+(e?"create":"join"),this.form).then((e=>{200==e.status&&(this.$store.dispatch("setPlayer",e.data.player),this.$store.dispatch("setRoom",this.form.room),this.$router.push(`/room/${e.data.id}`))})).catch((e=>{this.$store.dispatch("openAlert",{text:`Ops, ${e?.response?.data?.message??"Falha ao acessar sala. Tente novamente."}`,color:"error"}),console.log(e)})).finally((()=>{this.loading=null})))}}},z=N;var L=o(2371),M=o(7118),q=o(6232),H=o(3406),Y=(0,u.Z)(z,R,U,!1,null,"ff9413ca",null);const G=Y.exports;y()(Y,{VBtn:P.Z,VCard:L.Z,VCardActions:M.h7,VCardText:M.ZB,VCardTitle:M.EB,VForm:q.Z,VIcon:_.Z,VTextField:H.Z});const J=()=>Promise.all([o.e(225),o.e(68),o.e(700),o.e(720),o.e(658)]).then(o.bind(o,5720)),W=()=>o.e(268).then(o.bind(o,9268));a.Z.use(O.Z);const K=[{path:"/privacy-policy",name:"Privacy Policy",component:W},{path:"/room/:team",name:"Home",component:J,props:!0},{path:"*",name:"Login",component:G}],X=new O.Z({mode:"hash",base:"/poker/",routes:K});a.Z.use(B.ZP,{appName:"Poker",pageTrackerScreenviewEnabled:!0,pageTrackerExcludedRotues:["/privacy-policy"],config:{id:{VUE_APP_FIREBASE_PROJECT_ID:"poker-cae60",VUE_APP_FIREBASE_APP_ID:"1:616528146779:web:eea5c91b98723c4db32a7e",VUE_APP_API_HOST:"https://us-central1-poker-cae60.cloudfunctions.net",VUE_APP_FIREBASE_API_KEY:"AIzaSyA7QBjytBGmfm6Y01LntNw8tAWTcm1JoF8",VUE_APP_FIREBASE_DATABASE_URL:"https://poker-cae60-default-rtdb.firebaseio.com",VUE_APP_FIREBASE_MESSAGING_ID:"616528146779",VUE_APP_FIREBASE_BUCKET:"poker-cae60.appspot.com",VUE_APP_FIREBASE_MEASUREMENT_ID:"",VUE_APP_FIREBASE_AUTH_DOMAIN:"poker-cae60.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/poker/"}.VUE_APP_GANALYTICS_ID}},X);const Q=X;var ee=o(4665);a.Z.use(ee.ZP);const te=new ee.ZP.Store({state:{updateAvailable:!1,alert:!1,alertData:{},player:null,room:null,dialog:!1,dialogText:null,disabledEtcetero:"true"==localStorage.getItem("disabledEtcetero"),disabledAudio:"true"==localStorage.getItem("disabledAudio")},mutations:{setUpdateAvailable(e,t){e.updateAvailable=t},setAlert(e,t){e.alert=t},setAlertData(e,t){e.alertData=t},setPlayer(e,t){e.player=t},setRoom(e,t){e.room=t},setDialog(e,t){e.dialog=t},setDialogText(e,t){e.dialogText=t},setDisabledEtcetero(e,t){e.disabledEtcetero=t},setDisabledAudio(e,t){e.disabledAudio=t}},actions:{openAlert({commit:e},t){if(t.text){e("setAlertData",t),e("setAlert",!0);try{navigator.vibrate(100)}catch(o){}}},setPlayer({commit:e},t){e("setPlayer",t),localStorage.setItem("player",t.name)},setRoom({commit:e},t){e("setRoom",t),localStorage.setItem("room",t)},setDisabledEtcetero({commit:e},t){e("setDisabledEtcetero",t),t?localStorage.setItem("disabledEtcetero","true"):localStorage.removeItem("disabledEtcetero")},setDisabledAudio({commit:e},t){e("setDisabledAudio",t),t?localStorage.setItem("disabledAudio","true"):localStorage.removeItem("disabledAudio")}}});var oe=o(9132);a.Z.use(oe.Z);let ae=localStorage.getItem("lightTheme");const re=new oe.Z({icons:{iconfont:"md"},theme:{dark:ae?"false"==ae:!!window.matchMedia("(prefers-color-scheme: dark)").matches,options:{customProperties:!0},themes:{light:{primary:"#1f75fe",secondary:"#ba55d3",accent:"#00fa9a",error:"#ea3c53",info:"#9bddff",success:"#77dd77",warning:"#fcf75e"},dark:{primary:"#1f75fe",secondary:"#ba55d3",accent:"#00fa9a",error:"#ea3c53",info:"#9bddff",success:"#77dd77",warning:"#fcf75e"}}}});var ie=o(563);(0,ie.z)("/poker/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){window.Vue.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var se=o(6166),ne=o.n(se);ne().defaults.baseURL="https://us-central1-poker-cae60.cloudfunctions.net/api",ne().defaults.headers.common={Accept:"application/json"};const le=ne().create({});le.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),le.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=le,window.axios=le,Object.defineProperties(e.prototype,{axios:{get(){return le}},$axios:{get(){return le}}})},a.Z.use(Plugin);Plugin;class ce{constructor(){this.audio=new Audio,this.audioAuthorized=!1,document.onclick=()=>{this.audioAuthorized||(this.audio.muted=!0,this.audio.play(),this.audioAuthorized=!0)}}play(e,t=.25){e&&this.audioAuthorized&&!document.hidden&&!window.Vue?.$store?.state?.disabledAudio&&(this.audio.currentTime=0,this.audio.muted=!1,this.audio.volume=t,this.audio.src=`/poker/${e}`,this.audio.play())}}const de=new ce;ce.install=function(e,t){e.$sound=de,Object.defineProperty(e.prototype,"$sound",{get(){return de}})},a.Z.use(ce);a.Z.config.productionTip=!1,a.Z.config.devtools=!1;const ue=new a.Z({router:Q,store:te,vuetify:re,render:e=>e(j)}).$mount("#app");window.Vue=ue},5495:(e,t,o)=>{o.d(t,{F:()=>n});var a=o(9017),r=o(9037),i=o(5843);const s=(0,a.ZF)({databaseURL:"https://poker-cae60-default-rtdb.firebaseio.com",apiKey:"AIzaSyA7QBjytBGmfm6Y01LntNw8tAWTcm1JoF8",authDomain:"poker-cae60.firebaseapp.com",projectId:"poker-cae60",storageBucket:"poker-cae60.appspot.com",messagingSenderId:"616528146779",appId:"1:616528146779:web:eea5c91b98723c4db32a7e",measurementId:""}),n=(0,r.N8)(s),l=(0,i.v0)(s);(0,i.XB)(l)},6368:(e,t,o)=>{o.d(t,{Z:()=>y});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[o("v-btn",e._g(e._b({attrs:{fab:"",small:"",fixed:"",top:"",left:""}},"v-btn",r,!1),a),[o("v-icon",[e._v("settings")])],1)]}}])},[o("v-list",[o("v-list-item",{on:{click:e.toggleTheme}},[o("v-list-item-icon",[o("v-icon",[e._v(e._s(e.$vuetify.theme.dark?"light_mode":"dark_mode"))])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(" "+e._s(e.$vuetify.theme.dark?"Tema claro":"Tema escuro")+" ")])],1)],1),e.device.isMobile?e._e():o("v-list-item",{on:{click:function(t){e.disabledEtcetero=!e.disabledEtcetero}}},[o("v-list-item-icon",[o("v-icon",[e._v(e._s(e.disabledEtcetero?"voice_over_off":"record_voice_over"))])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(" "+e._s(e.disabledEtcetero?"ETcétero calado":"ETcétero atento")+" ")])],1)],1),o("v-list-item",{on:{click:function(t){e.disabledAudio=!e.disabledAudio}}},[o("v-list-item-icon",[o("v-icon",[e._v(e._s(e.disabledAudio?"volume_off":"volume_up"))])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(" "+e._s(e.disabledAudio?"Audio desativado":"Audio ativado")+" ")])],1)],1)],1)],1)},r=[],i=o(9609);const s={name:"settings-menu",computed:{device(){return(0,i.Z)()},disabledEtcetero:{get(){return this.$store.state.disabledEtcetero},set(e){this.$store.dispatch("setDisabledEtcetero",e)}},disabledAudio:{get(){return this.$store.state.disabledAudio},set(e){this.$store.dispatch("setDisabledAudio",e)}}},methods:{toggleTheme(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.$vuetify.theme.dark?localStorage.setItem("lightTheme","false"):localStorage.setItem("lightTheme","true")}}},n=s;var l=o(1001),c=o(3453),d=o.n(c),u=o(7080),m=o(4926),h=o(3920),p=o(8681),v=o(7226),f=o(459),g=o(1010),b=(0,l.Z)(n,a,r,!1,null,null,null);const y=b.exports;d()(b,{VBtn:u.Z,VIcon:m.Z,VList:h.Z,VListItem:p.Z,VListItemContent:v.km,VListItemIcon:f.Z,VListItemTitle:v.V9,VMenu:g.Z})}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,(()=>{var e=[];o.O=(t,a,r,i)=>{if(!a){var s=1/0;for(d=0;d<e.length;d++){for(var[a,r,i]=e[d],n=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(n=!1,i<s&&(s=i));if(n){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,r,i]}})(),(()=>{o.F={},o.E=e=>{Object.keys(o.F).map((t=>{o.F[t](e)}))}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{68:"fe5226e9",225:"23034030",268:"02b2d2d8",658:"3b1e193a",700:"b40bd308",720:"f47e4df9"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+e+"."+{268:"520c6e72",658:"86d98857"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="planning-poker:";o.l=(a,r,i,s)=>{if(e[a])e[a].push(r);else{var n,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+i){n=u;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",t+i),n.src=a),e[a]=[r];var m=(t,o)=>{n.onerror=n.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((e=>e(o))),t)return t(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),l&&document.head.appendChild(n)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p="/poker/"})(),(()=>{var e=(e,t,o,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=i=>{if(r.onerror=r.onload=null,"load"===i.type)o();else{var s=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=n,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var r=o[a],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){r=s[a],i=r.getAttribute("data-href");if(i===e||i===t)return r}},a=a=>new Promise(((r,i)=>{var s=o.miniCssF(a),n=o.p+s;if(t(s,n))return r();e(a,n,r,i)})),r={143:0};o.f.miniCss=(e,t)=>{var o={268:1,658:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=a(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0,283:0};o.f.j=(t,a)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(283|658)$/.test(t))e[t]=0;else{var i=new Promise(((o,a)=>r=e[t]=[o,a]));a.push(r[2]=i);var s=o.p+o.u(t),n=new Error,l=a=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",n.name="ChunkLoadError",n.type=i,n.request=s,r[1](n)}};o.l(s,l,"chunk-"+t,t)}},o.F.j=t=>{if((!o.o(e,t)||void 0===e[t])&&!/^(283|658)$/.test(t)){e[t]=null;var a=document.createElement("link");o.nc&&a.setAttribute("nonce",o.nc),a.rel="prefetch",a.as="script",a.href=o.p+o.u(t),document.head.appendChild(a)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[s,n,l]=a,c=0;if(s.some((t=>0!==e[t]))){for(r in n)o.o(n,r)&&(o.m[r]=n[r]);if(l)var d=l(o)}for(t&&t(a);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},a=globalThis["webpackChunkplanning_poker"]=globalThis["webpackChunkplanning_poker"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{o.O(0,[143],(()=>{[225,68,700,720,658,268].map(o.E)}),5)})();var a=o.O(void 0,[772,910,422,763,75,274,611,125,283,797],(()=>o(3779)));a=o.O(a)})();