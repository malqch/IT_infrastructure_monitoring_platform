(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0973b2ef","chunk-2d0aa9b6"],{1276:function(e,t,n){"use strict";var i=n("d784"),a=n("44e7"),s=n("825a"),o=n("1d80"),r=n("4840"),l=n("8aa5"),u=n("50c4"),h=n("14c3"),c=n("9263"),d=n("d039"),p=[].push,g=Math.min,v=4294967295,f=!d((function(){return!RegExp(v,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(o(this)),s=void 0===n?v:n>>>0;if(0===s)return[];if(void 0===e)return[i];if(!a(e))return t.call(i,e,s);var r,l,u,h=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,f=new RegExp(e.source,d+"g");while(r=c.call(f,i)){if(l=f.lastIndex,l>g&&(h.push(i.slice(g,r.index)),r.length>1&&r.index<i.length&&p.apply(h,r.slice(1)),u=r[0].length,g=l,h.length>=s))break;f.lastIndex===r.index&&f.lastIndex++}return g===i.length?!u&&f.test("")||h.push(""):h.push(i.slice(g)),h.length>s?h.slice(0,s):h}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=o(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,a,n):i.call(String(a),t,n)},function(e,a){var o=n(i,e,this,a,i!==t);if(o.done)return o.value;var c=s(e),d=String(this),p=r(c,RegExp),m=c.unicode,_=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(f?"y":"g"),y=new p(f?c:"^(?:"+c.source+")",_),w=void 0===a?v:a>>>0;if(0===w)return[];if(0===d.length)return null===h(y,d)?[d]:[];var b=0,x=0,S=[];while(x<d.length){y.lastIndex=f?x:0;var k,I=h(y,f?d:d.slice(x));if(null===I||(k=g(u(y.lastIndex+(f?0:x)),d.length))===b)x=l(d,x,m);else{if(S.push(d.slice(b,x)),S.length===w)return S;for(var $=1;$<=I.length-1;$++)if(S.push(I[$]),S.length===w)return S;x=b=k}}return S.push(d.slice(b)),S}]}),!f)},"4ea1":function(e,t,n){},af7b:function(e,t,n){"use strict";var i=n("4ea1"),a=n.n(i);a.a},d81d:function(e,t,n){"use strict";var i=n("23e7"),a=n("b727").map,s=n("1dde"),o=n("ae40"),r=s("map"),l=o("map");i({target:"Array",proto:!0,forced:!r||!l},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},e337:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}})],1),n("div",{staticClass:"container"},[n("div",{staticStyle:{"padding-bottom":"15px"}},[n("span",[e._v("华为云环境：")]),n("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"请选择华为云环境"},on:{change:e.handleSelectHuaweiEnv},model:{value:e.huaweiyun_env,callback:function(t){e.huaweiyun_env=t},expression:"huaweiyun_env"}},e._l(e.huaweiyun_options,(function(e){return n("el-option",{key:e.id,attrs:{label:e.hw_ip,value:e.hw_ip}})})),1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":"600"}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),n("el-table-column",{attrs:{prop:"arch",label:"CPU架构",align:"center"}}),n("el-table-column",{attrs:{prop:"os_type",label:"OS类型",formatter:e.osTypeFormat,align:"center"}}),n("el-table-column",{attrs:{prop:"cpu",label:"CPU核数",align:"center"}}),n("el-table-column",{attrs:{prop:"memory",label:"内存大小(MB)",align:"center"}}),n("el-table-column",{attrs:{prop:"disks",label:"磁盘总大小(GB)",align:"center"}})],1)],1)])},a=[],s=(n("d81d"),n("ac1f"),n("1276"),n("424b")),o={data:function(){return{query:{address:"",name:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],huaweiyun_env_info:"",huaweiyun_env:"",title:"",windows_os_version:[],linux_os_version:[],other_os_version:[],huaweiyun_options:[],editVisible:!1,deleteVisible:!1,datetimeFormat:null,loading:!0,pageTotal:0,form:{},idx:-1,id:-1}},created:function(){this.token=localStorage.getItem("token"),this.username=localStorage.getItem("username"),this.getHuaweiyunData(),this.datetimeFormat=s["datetimeFormat"]},methods:{osTypeFormat:function(e){if("Windows"===e.os_type.osType){for(var t=0;t<this.windows_os_version.length;t++)if(this.linux_os_version[t].os_id===e.os_type.osVersion)return this.linux_os_version[t].os_version}else if("Linux"===e.os_type.osType){for(var n=0;n<this.linux_os_version.length;n++)if(this.linux_os_version[n].os_id===e.os_type.osVersion)return this.linux_os_version[n].os_version}else if("Other"===e.os_type.osType)for(var i=0;i<this.other_os_version.length;i++)if(this.linux_os_version[i].os_id===e.os_type.osVersion)return this.linux_os_version[i].os_version},getHuaweiyunData:function(){var e=this;this.$http.get("automation/api/huawei/",{headers:{token:this.token}}).then((function(t){sessionStorage.getItem("huaweiyun_env")?e.huaweiyun_env=JSON.parse(sessionStorage.getItem("huaweiyun_env")).hw_ip:(sessionStorage.setItem("huaweiyun_env",JSON.stringify(t.data[0])),e.huaweiyun_env=t.data[0].hw_ip),e.huaweiyun_options=t.data,e.getData(),e.getOsType()})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))}))},getData:function(){var e=this;this.$http.get("automation/api/huawei/vms/?Template=true",{headers:{token:this.token,env:sessionStorage.getItem("huaweiyun_env")}}).then((function(t){t.data.vms.map((function(e){e["id"]=e["uri"].split("/")[5],e["cpu"]=e["vmConfig"].cpu.quantity,e["memory"]=e["vmConfig"].memory.quantityMB,e["disks"]=e["vmConfig"].disks[0].quantityGB,e["os_type"]=e["osOptions"]})),e.tableData=t.data.vms,e.pageTotal=t.data.total,e.loading=!1})).catch((function(t){console.log(t),e.$message.error("查询失败！"),e.loading=!1}))},handleSelectHuaweiEnv:function(e){this.tableData=[],this.handleSetHuaweiEnvInfo(e),sessionStorage.setItem("huaweiyun_env",JSON.stringify(this.huaweiyun_env_info)),this.getData()},handleSetHuaweiEnvInfo:function(e){for(var t=0,n=this.huaweiyun_options.length;t<n;t++)if(this.huaweiyun_options[t].hw_ip===e)return this.huaweiyun_env_info=this.huaweiyun_options[t]},getOsType:function(){var e=this;this.$http.get("automation/api/huawei/vms/osversions/",{headers:{token:this.token,env:sessionStorage.getItem("huaweiyun_env")}}).then((function(t){e.windows_os_version=t.data.windows,e.linux_os_version=t.data.linux,e.other_os_version=t.data.other})).catch((function(t){console.log(t),e.$message.error(e.$message.error("查询失败！"))}))},handleSelectionChange:function(e){this.multipleSelection=e},handleCreate:function(){this.form={},this.title="新增",this.editVisible=!0},saveEdit:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return e.$message.warning("请选择必填项"),!1;e.$http.post("automation/api/script/",e.form,{headers:{token:e.token,env:sessionStorage.getItem("huaweiyun_env")}}).then((function(t){200===t.status||201===t.status?(e.$message.success("创建成功！"),e.editVisible=!1,e.getData()):e.$message.success("创建失败！")})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))}))}))},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}},r=o,l=(n("af7b"),n("2877")),u=Object(l["a"])(r,i,a,!1,null,"b7b3bdd4",null);t["default"]=u.exports}}]);