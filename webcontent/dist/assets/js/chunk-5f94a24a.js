(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f94a24a"],{"0dc8":function(t,e,a){},2924:function(t,e,a){"use strict";var s=a("0dc8"),i=a.n(s);i.a},ea03:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}})],1),a("div",{staticClass:"container"},[a("el-col",{attrs:{span:24,inline:!0}},[a("el-input",{staticStyle:{width:"200px","margin-bottom":"15px"},attrs:{type:"text",placeholder:"请输入脚本名",clearable:""},model:{value:t.keywordsName,callback:function(e){t.keywordsName=e},expression:"keywordsName"}}),a("el-select",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{clearable:"",placeholder:"请选择脚本状态"},model:{value:t.keywordsStatus,callback:function(e){t.keywordsStatus=e},expression:"keywordsStatus"}},t._l(t.typeOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","max-height":"600"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{prop:"script_name",label:"脚本名字",align:"center"}}),a("el-table-column",{attrs:{prop:"host_info",label:"host_info",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticClass:"color-link",attrs:{type:"info"},on:{click:function(a){return t.searchHostLabel(e.row)}}},[t._v("查看主机信息")])]}}])}),a("el-table-column",{attrs:{prop:"execute_type",label:"执行方式",align:"center"}}),a("el-table-column",{attrs:{label:"执行时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.execute_time,placement:"top-start"}},[a("span",[t._v(t._s(e.row.execute_time))])])]}}])}),a("el-table-column",{attrs:{prop:"execute_week",label:"每周几执行",align:"center"}}),a("el-table-column",{attrs:{label:"开始时间",formatter:t.datetimeFormat,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.start_time,placement:"top-start"}},[a("span",[t._v(t._s(e.row.start_time))])])]}}])}),a("el-table-column",{attrs:{label:"结束时间",formatter:t.datetimeFormat,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.end_time,placement:"top-start"}},[a("span",[t._v(t._s(e.row.end_time))])])]}}])}),a("el-table-column",{attrs:{prop:"status",formatter:t.scriptStatus,label:"状态",align:"center"}}),a("el-table-column",{attrs:{prop:"executor",label:"执行人",align:"center"}}),a("el-table-column",{attrs:{prop:"uuid",label:"唯一标识符",align:"center"}}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return["定时执行"===e.row.execute_type?a("el-button",{attrs:{type:"text",icon:"el-icon-video-pause",disabled:""},on:{click:function(a){return t.handlePause(e.$index,e.row)}}},[t._v("暂停")]):t._e(),"定时执行"!==e.row.execute_type&&0===e.row.status?a("el-button",{staticClass:"color-link",attrs:{type:"text",icon:"el-icon-video-pause"},on:{click:function(a){return t.handlePause(e.$index,e.row)}}},[t._v("暂停")]):t._e(),"定时执行"!==e.row.execute_type&&1===e.row.status?a("el-button",{staticClass:"color-green",attrs:{type:"text",icon:"el-icon-video-play"},on:{click:function(a){return t.handleResume(e.$index,e.row)}}},[t._v("重启")]):t._e(),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":t.query.pageIndex,"page-size":t.query.pageSize,total:t.pageTotal},on:{"current-change":t.handlePageChange}})],1)],1),a("el-dialog",{staticClass:"alert_dialog",attrs:{title:"主机信息",visible:t.hostLabelVisible,width:"35%"},on:{"update:visible":function(e){t.hostLabelVisible=e}}},t._l(t.hostLabelData,(function(e){return a("ul",{key:e.id,staticClass:"network_ul",attrs:{model:t.hostLabelData[0]}},[a("li",[a("em",{staticClass:"network_ang"}),a("label",{staticClass:"network_label"},[t._v("network_ip:")]),a("span",{staticClass:"network_span"},[t._v(t._s(e.network_ip))]),a("label",{staticClass:"network_label"},[t._v("hostname:")]),a("span",{staticClass:"network_span"},[t._v(t._s(e.hostname))]),a("label",{staticClass:"network_label"},[t._v("type:")]),a("span",{staticClass:"network_span"},[t._v(t._s(e.type))])])])})),0),a("el-dialog",{attrs:{title:"提示",visible:t.pauseVisible,width:"25%"},on:{"update:visible":function(e){t.pauseVisible=e}}},[a("span",[t._v("确定暂停定时任务 "+t._s(t.uuid)+" 吗？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.pauseVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.pauseTimedTask}},[t._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"提示",visible:t.resumeVisible,width:"25%"},on:{"update:visible":function(e){t.resumeVisible=e}}},[a("span",[t._v("确定重启定时任务 "+t._s(t.uuid)+" 吗？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.resumeVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.resumeTimedTask}},[t._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"提示",visible:t.deleteVisible,width:"25%"},on:{"update:visible":function(e){t.deleteVisible=e}}},[a("span",[t._v("确定要删除定时任务 "+t._s(t.uuid)+" 吗？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.deleteVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteTimedTask}},[t._v("确 定")])],1)])],1)},i=[],l=(a("99af"),a("b0c0"),a("424b")),n={data:function(){return{options:[],keywordsName:"",keywordsStatus:"",typeOptions:[{value:"1",label:"已暂停"},{value:"0",label:"运行中"}],query:{address:"",name:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],title:"",uuid:"",editVisible:!1,deleteVisible:!1,pauseVisible:!1,resumeVisible:!1,hostLabelVisible:!1,hostLabelData:[],pageTotal:0,form:{},datetimeFormat:null,loading:!0,idx:-1,id:-1}},created:function(){this.token=localStorage.getItem("token"),this.username=localStorage.getItem("username"),this.getData(),this.datetimeFormat=l["datetimeFormat"]},methods:{getData:function(){var t=this;this.$http.get("automation/api/script_timed_task/?name=".concat(this.keywordsName,"&status=").concat(this.keywordsStatus,"&current_page=").concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize),{headers:{token:this.token}}).then((function(e){t.tableData=e.data.data,t.pageTotal=e.data.total_count,t.loading=!1})).catch((function(e){t.$message.error(JSON.stringify(e.response.data)),t.loading=!1}))},searchHostLabel:function(t){this.hostLabelData=JSON.parse(t.host_info),this.hostLabelVisible=!0},scriptStatus:function(t){return 0===t.status?"运行中":"已暂停"},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handlePause:function(t,e){this.uuid=e.uuid,this.pauseVisible=!0},pauseTimedTask:function(){var t=this;this.$http.post("automation/api/script/pause_timed_task/",{uuid:this.uuid},{headers:{token:this.token}}).then((function(e){200===e.status?(t.$message.success("暂停成功！"),t.pauseVisible=!1,t.getData()):(t.$message.error("暂停失败！"),t.pauseVisible=!1)})).catch((function(e){t.$message.error(JSON.stringify(e.response.data)),t.pauseVisible=!1}))},handleResume:function(t,e){var a=this.execEndDatetimeFormat(e.end_time),s=this.execEndDatetimeFormat(Object(l["getFormatDate"])());e.end_time&&a<s?this.$message.warning("重启失败，结束时间小于当前时间，请重新选择！"):(this.uuid=e.uuid,this.resumeVisible=!0)},execEndDatetimeFormat:function(t){if(null!=t){var e=new Date(t);return e.getTime()}},resumeTimedTask:function(){var t=this;this.$http.post("automation/api/script/restart_timed_task/",{uuid:this.uuid},{headers:{token:this.token}}).then((function(e){200===e.status?(t.$message.success("重启成功！"),t.resumeVisible=!1,t.getData()):(t.$message.error("重启失败！"),t.resumeVisible=!1)})).catch((function(e){t.$message.error(JSON.stringify(e.response.data)),t.resumeVisible=!1}))},handleDelete:function(t,e){this.uuid=e.uuid,this.deleteVisible=!0},deleteTimedTask:function(){var t=this;this.$http.post("automation/api/script/remove_timed_task/",{uuid:this.uuid},{headers:{token:this.token}}).then((function(e){200===e.status?(t.$message.success("删除成功！"),t.deleteVisible=!1,t.getData()):(t.$message.error("删除失败！"),t.deleteVisible=!1)})).catch((function(e){t.$message.error(JSON.stringify(e.response.data)),t.deleteVisible=!1}))},handleSelectionChange:function(t){this.multipleSelection=t},delAllSelection:function(){var t=this.multipleSelection.length,e="";this.delList=this.delList.concat(this.multipleSelection);for(var a=0;a<t;a++)e+=this.multipleSelection[a].name+" ";this.$message.error("删除了".concat(e)),this.multipleSelection=[]},handlePageChange:function(t){this.$set(this.query,"pageIndex",t),this.getData()}}},o=n,r=(a("2924"),a("2877")),c=Object(r["a"])(o,s,i,!1,null,"4a55a651",null);e["default"]=c.exports}}]);