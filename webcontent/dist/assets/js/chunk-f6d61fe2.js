(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6d61fe2"],{1738:function(t,e,s){"use strict";var n=s("2cc0"),a=s.n(n);a.a},"1c97":function(t,e,s){},"2cc0":function(t,e,s){},"2d7c":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags-monitor"},[s("ul",t._l(t.tagsList,(function(e,n){return s("li",{key:n,staticClass:"tags-li-monitor",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-monitor-title",attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),0),s("div",{staticClass:"tags-close-box-monitor"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(" 标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},a=[],o=(s("4de4"),s("45fc"),s("a434"),s("b0c0"),s("876b")),i={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[0].components.default.name})),o["default"].$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),o["default"].$on("close_current_tags",(function(){for(var e=0,s=t.tagsList.length;e<s;e++){var n=t.tagsList[e];if(n.path===t.$route.fullPath){e<s-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}}))}},l=i,r=(s("6cc7"),s("2877")),c=Object(r["a"])(l,n,a,!1,null,"2a0b3e22",null);e["default"]=c.exports},3521:function(t,e,s){},"3ab9":function(t,e,s){},"45fc":function(t,e,s){"use strict";var n=s("23e7"),a=s("b727").some,o=s("a640"),i=s("ae40"),l=o("some"),r=i("some");n({target:"Array",proto:!0,forced:!l||!r},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,s){"use strict";var n=s("23e7"),a=s("b727").filter,o=s("1dde"),i=s("ae40"),l=o("filter"),r=i("filter");n({target:"Array",proto:!0,forced:!l||!r},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5503:function(t,e,s){"use strict";var n=s("3521"),a=s.n(n);a.a},6844:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box content-box-monitor",class:{"content-collapse":t.collapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("router-view")],1)],1),s("el-backtop",{attrs:{target:".content"}})],1)],1)],1)},a=[],o=(s("b0c0"),s("e7b5")),i=s("d50c"),l=s("2d7c"),r=s("876b"),c={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:o["default"],vSidebar:i["default"],vTags:l["default"]},created:function(){var t=this;r["default"].$on("collapse-content",(function(e){t.collapse=e})),r["default"].$on("tags",(function(e){for(var s=[],n=0,a=e.length;n<a;n++)e[n].name&&s.push(e[n].name);t.tagsList=s}))}},u=c,d=(s("5503"),s("2877")),m=Object(d["a"])(u,n,a,!1,null,"1108fe3a",null);e["default"]=m.exports},"6cc7":function(t,e,s){"use strict";var n=s("1c97"),a=s.n(n);a.a},7159:function(t,e,s){t.exports=s.p+"assets/img/img.jpg"},"876b":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=new n["default"];e["default"]=a},9834:function(t,e,s){"use strict";var n=s("a4e5"),a=s.n(n);a.a},a434:function(t,e,s){"use strict";var n=s("23e7"),a=s("23cb"),o=s("a691"),i=s("50c4"),l=s("7b0b"),r=s("65f0"),c=s("8418"),u=s("1dde"),d=s("ae40"),m=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m||!h},{splice:function(t,e){var s,n,u,d,m,h,b=l(this),_=i(b.length),w=a(t,_),C=arguments.length;if(0===C?s=n=0:1===C?(s=0,n=_-w):(s=C-2,n=p(f(o(e),0),_-w)),_+s-n>g)throw TypeError(v);for(u=r(b,n),d=0;d<n;d++)m=w+d,m in b&&c(u,d,b[m]);if(u.length=n,s<n){for(d=w;d<_-n;d++)m=d+n,h=d+s,m in b?b[h]=b[m]:delete b[h];for(d=_;d>_-n+s;d--)delete b[d-1]}else if(s>n)for(d=_-n;d>w;d--)m=d+n-1,h=d+s-1,m in b?b[h]=b[m]:delete b[h];for(d=0;d<s;d++)b[d+w]=arguments[d+2];return b.length=_-n+s,u}})},a4e5:function(t,e,s){},d50c:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-monitor"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"text-color":"rgb(239 239 241)","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,(function(e){return[e.children?[s("el-submenu",{key:e.id,attrs:{index:JSON.stringify(e.id)}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._l(e.children,(function(e){return[e.children?s("el-submenu",{key:e.id,attrs:{index:e.menu_url}},[s("template",{slot:"title"},[t._v(t._s(e.name))]),t._l(e.children,(function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.menu_url}},[t._v(t._s(e.name)+" ")])}))],2):s("el-menu-item",{key:e.id,attrs:{index:e.menu_url}},[t._v(t._s(e.name)+" ")])]}))],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.menu_url}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])]]}))],2)],1)},a=[],o=(s("99af"),s("ac1f"),s("5319"),s("876b")),i=s("424b"),l={data:function(){return{collapse:!1,items:[],query:{address:"",name:"",pageIndex:1,pageSize:10,application:"monitor"}}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;o["default"].$on("collapse",(function(e){t.collapse=e,o["default"].$emit("collapse-content",e)})),this.getData(),this.getPermArr()},methods:{getData:function(){var t=this,e=localStorage.getItem("username");this.$http.get("sys/api/user/role/?username=".concat(e,"&application=").concat(this.query.application,"&type=menu"),{headers:{token:localStorage.getItem("token")}}).then((function(e){0==e.data.length&&null==e.data||(t.items=Object(i["treeDataTranslate"])(e.data,"id"))})).catch((function(t){console.log("失败=="+t),alert(t)}))},getPermArr:function(){var t=localStorage.getItem("username");this.$http.get("sys/api/user/role/?username=".concat(t,"&application=").concat(this.query.application,"&type=button"),{headers:{token:localStorage.getItem("token")}}).then((function(t){if(0!=t.data.length||null!=t.data){var e=t.data;localStorage.setItem("btnPermission",JSON.stringify(e))}})).catch((function(t){console.log("失败=="+t),alert(t)}))}}},r=l,c=(s("9834"),s("1738"),s("2877")),u=Object(c["a"])(r,n,a,!1,null,"997f3432",null);e["default"]=u.exports},e7b5:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-monitor"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[t.collapse?s("i",{staticClass:"el-icon-s-unfold"}):s("i",{staticClass:"el-icon-s-fold"})]),s("div",{staticClass:"logo"},[t._v("集中监控平台")]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{divided:"",command:"goto_sys"}},[t._v("系统管理")]),s("el-dropdown-item",{attrs:{divided:"",command:"goto_asset"}},[t._v("资产管理")]),s("el-dropdown-item",{attrs:{divided:"",command:"goto_monitor"}},[t._v("集中监控平台")]),s("el-dropdown-item",{attrs:{divided:"",command:"goto_automation"}},[t._v("自动化运维")]),s("el-dropdown-item",{attrs:{divided:"",command:"elk"}},[t._v("日志监控分析")]),"admin"===this.username?s("el-dropdown-item",{attrs:{divided:"",command:"nro"}},[t._v("网络编排")]):t._e(),s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:s("7159")}})])}],o=(s("b0c0"),s("876b")),i={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("username");return t||this.name}},methods:{handleCommand:function(t){"loginout"===t?(localStorage.removeItem("token"),localStorage.removeItem("username"),this.$router.push("/login")):"goto_sys"===t?this.$router.push("/sys/dashboard"):"goto_asset"===t?this.$router.push("/asset/dashboard"):"goto_monitor"===t?this.$router.push("/monitor/dashboard"):"goto_automation"===t?this.$router.push("/automation/dashboard"):"elk"===t?window.open(this.globalAPI.elkUrl,"_blank"):"nro"===t&&window.open(this.globalAPI.nroUrl,"_blank")},collapseChage:function(){this.collapse=!this.collapse,o["default"].$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},l=i,r=(s("ee7b"),s("2877")),c=Object(r["a"])(l,n,a,!1,null,"271e3e00",null);e["default"]=c.exports},ee7b:function(t,e,s){"use strict";var n=s("3ab9"),a=s.n(n);a.a}}]);