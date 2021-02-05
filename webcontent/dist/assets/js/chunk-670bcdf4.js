(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-670bcdf4"],{4532:function(e,t,a){"use strict";var s=a("de46"),i=a.n(s);i.a},b97f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 备件管理 ")])],1)],1),a("div",{staticClass:"container"},[a("el-form",{attrs:{inline:!0},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("div",[a("el-button",{staticClass:"handle-box",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.handleCreate()}}},[e._v("增加 ")])],1),a("div",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[a("el-form-item",[a("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"状态"},model:{value:e.searchData.disk_status,callback:function(t){e.$set(e.searchData,"disk_status",t)},expression:"searchData.disk_status"}})],1),a("el-form-item",[a("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"SN"},model:{value:e.searchData.disk_sn,callback:function(t){e.$set(e.searchData,"disk_sn",t)},expression:"searchData.disk_sn"}})],1),a("el-form-item",[a("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"厂商"},model:{value:e.searchData.disk_vendor,callback:function(t){e.$set(e.searchData,"disk_vendor",t)},expression:"searchData.disk_vendor"}})],1),a("el-form-item",[a("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"所属主机"},model:{value:e.searchData.disk_host,callback:function(t){e.$set(e.searchData,"disk_host",t)},expression:"searchData.disk_host"}})],1),a("el-button",{staticClass:"handle-box",attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.handleSearch}},[e._v("查询")])],1)])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{prop:"disk_vendor",align:"center",label:"厂商"}}),a("el-table-column",{attrs:{prop:"disk_sn",align:"center",label:"SN"}}),a("el-table-column",{attrs:{prop:"disk_capacity",align:"center",label:"容量"}}),a("el-table-column",{attrs:{prop:"disk_status",align:"center",label:"状态"}}),a("af-table-column",{attrs:{prop:"disk_host",align:"center",label:"所属主机"}}),a("af-table-column",{attrs:{prop:"disk_service_start_time",align:"center",label:"服务开始时间"}}),a("af-table-column",{attrs:{prop:"disk_service_end_time",align:"center",label:"服务结束时间"}}),a("af-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑 ")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除 ")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"editform",attrs:{rules:e.rules,model:e.editform,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"厂商",prop:"disk_vendor"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"vendor_name",placeholder:"请选择所属厂商"},on:{focus:function(t){return e.queryvendor()}},model:{value:e.editform.disk_vendor,callback:function(t){e.$set(e.editform,"disk_vendor",t)},expression:"editform.disk_vendor"}},e._l(e.vendorData,(function(e){return a("el-option",{key:e.vendor_name,attrs:{label:e.vendor_name,value:e.vendor_name}})})),1)],1),a("el-form-item",{attrs:{label:"SN",prop:"disk_sn"}},[a("el-input",{model:{value:e.editform.disk_sn,callback:function(t){e.$set(e.editform,"disk_sn",t)},expression:"editform.disk_sn"}})],1),a("el-form-item",{attrs:{label:"容量"}},[a("el-input",{attrs:{type:"number"},model:{value:e.editform.disk_capacity,callback:function(t){e.$set(e.editform,"disk_capacity",t)},expression:"editform.disk_capacity"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-input",{model:{value:e.editform.disk_status,callback:function(t){e.$set(e.editform,"disk_status",t)},expression:"editform.disk_status"}})],1),a("el-form-item",{attrs:{label:"所属主机"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",filterable:"",remote:"",placeholder:"请输入所属主机名称或ip","remote-method":e.queryHost},model:{value:e.editform.disk_host,callback:function(t){e.$set(e.editform,"disk_host",t)},expression:"editform.disk_host"}},e._l(e.hostData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.hostname+"/"+e.device_ip,value:e.hostname+"/"+e.device_ip}})})),1)],1),a("el-form-item",{attrs:{label:"服务开始时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",editable:!1,"value-format":"yyyy-MM-dd"},model:{value:e.editform.disk_service_start_time,callback:function(t){e.$set(e.editform,"disk_service_start_time",t)},expression:"editform.disk_service_start_time"}})],1),a("el-form-item",{attrs:{label:"服务结束时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",editable:!1,"value-format":"yyyy-MM-dd"},model:{value:e.editform.disk_service_end_time,callback:function(t){e.$set(e.editform,"disk_service_end_time",t)},expression:"editform.disk_service_end_time"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.resetedit}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"创建",visible:e.createVisible,"show-close":!1,width:"30%"},on:{"update:visible":function(t){e.createVisible=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"厂商",prop:"disk_vendor"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"vendor_name",placeholder:"请选择所属厂商"},on:{focus:function(t){return e.queryvendor()}},model:{value:e.form.disk_vendor,callback:function(t){e.$set(e.form,"disk_vendor",t)},expression:"form.disk_vendor"}},e._l(e.vendorData,(function(e){return a("el-option",{key:e.vendor_name,attrs:{label:e.vendor_name,value:e.vendor_name}})})),1)],1),a("el-form-item",{attrs:{label:"SN",prop:"disk_sn"}},[a("el-input",{model:{value:e.form.disk_sn,callback:function(t){e.$set(e.form,"disk_sn",t)},expression:"form.disk_sn"}})],1),a("el-form-item",{attrs:{label:"容量"}},[a("el-input",{attrs:{type:"number"},model:{value:e.form.disk_capacity,callback:function(t){e.$set(e.form,"disk_capacity",t)},expression:"form.disk_capacity"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-input",{model:{value:e.form.disk_status,callback:function(t){e.$set(e.form,"disk_status",t)},expression:"form.disk_status"}})],1),a("el-form-item",{attrs:{label:"所属主机"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",filterable:"",remote:"",placeholder:"请输入所属主机名称或ip","remote-method":e.queryHost},model:{value:e.form.disk_host,callback:function(t){e.$set(e.form,"disk_host",t)},expression:"form.disk_host"}},e._l(e.hostData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.hostname+"/"+e.device_ip,value:e.hostname+"/"+e.device_ip}})})),1)],1),a("el-form-item",{attrs:{label:"服务开始时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",editable:!1,"value-format":"yyyy-MM-dd"},model:{value:e.form.disk_service_start_time,callback:function(t){e.$set(e.form,"disk_service_start_time",t)},expression:"form.disk_service_start_time"}})],1),a("el-form-item",{attrs:{label:"服务结束时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",editable:!1,"value-format":"yyyy-MM-dd"},model:{value:e.form.disk_service_end_time,callback:function(t){e.$set(e.form,"disk_service_end_time",t)},expression:"form.disk_service_end_time"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.resetCreate}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveCreate}},[e._v("确 定")])],1)],1)],1)},i=[],r=(a("99af"),a("b0c0"),{name:"disktable",data:function(){return{query:{address:"",name:"",pageIndex:1,pageSize:10},tableData:[],vendorData:[],multipleSelection:[],delList:[],editVisible:!1,createVisible:!1,disk_vendor:"",pageTotal:0,form:{disk_capacity:0},editform:{},idx:-1,id:-1,searchData:{disk_vendor:"",disk_host:"",disk_sn:"",disk_status:"",is_delete:0},rules:{disk_vendor:[{required:!0,message:"请输入厂商"},{trigger:"blur"}],disk_sn:[{required:!0,message:"请输入sn"},{trigger:"blur"}],disk_qn:[{required:!0,message:"请输入qn"},{trigger:"blur"}]},hostData:[],loading:!0}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.$http.get("asset/api/disk/?current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize,"&disk_status=").concat(this.searchData.disk_status,"&disk_sn=").concat(this.searchData.disk_sn,"&disk_vendor=").concat(this.searchData.disk_vendor,"&disk_host=").concat(this.searchData.disk_host,"&is_delete=").concat(this.searchData.is_delete),{headers:{token:localStorage.getItem("token")}}).then((function(t){e.tableData=t.data.data,e.pageTotal=t.data.total_count,e.loading=!1})).catch((function(t){e.$message.error(JSON.stringify(t.response.data)),e.loading=!1}))},queryvendor:function(){var e=this;this.$http.get("asset/api/vendor/",{headers:{token:localStorage.getItem("token")}}).then((function(t){console.log(t),e.vendorData=t.data,console.log(e.vendorData)}))},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handleDelete:function(e){var t=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){t.$http.put("asset/api/disk/".concat(e.id,"/logic_delete/"),{is_delete:1},{headers:{token:localStorage.getItem("token")}}).then((function(e){200===e.status?(t.$message.success("删除成功！"),t.$set(t.query,"pageIndex",1),t.getData()):(t.$message.error("删除失败！"),t.$set(t.query,"pageIndex",1),t.getData())})).catch((function(e){t.$message.error(JSON.stringify(e.response.data))}))}))},handleSelectionChange:function(e){this.multipleSelection=e},delAllSelection:function(){var e=this.multipleSelection.length,t="";this.delList=this.delList.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了".concat(t)),this.multipleSelection=[]},handleEdit:function(e,t){var a=this;this.id=t.id,this.editform=t,this.editVisible=!0,this.$nextTick((function(){a.$refs.editform.clearValidate()}))},saveEdit:function(){var e=this;this.$refs.editform.validate().then((function(t){console.log(t),e.$http.put("asset/api/disk/".concat(e.id,"/"),{disk_vendor:e.editform.disk_vendor,disk_sn:e.editform.disk_sn,disk_capacity:e.editform.disk_capacity,disk_status:e.editform.disk_status,disk_host:e.editform.disk_host,disk_service_start_time:e.editform.disk_service_start_time,disk_service_end_time:e.editform.disk_service_end_time},{headers:{token:localStorage.getItem("token")}}).then((function(t){200===t.status?(e.$message.success("修改成功！"),e.editVisible=!1,e.getData()):(e.$message.error("修改失败！"),e.getData())})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))}))})).catch((function(t){console.log(t),e.$message.error("参数错误")}))},resetedit:function(){this.getData(),this.editVisible=!1},handleCreate:function(){var e=this;this.createVisible=!0,this.$nextTick((function(){e.$refs.form.clearValidate()}))},saveCreate:function(){var e=this;this.$refs.form.validate().then((function(t){console.log(t),e.$http.post("asset/api/disk/",{disk_vendor:e.form.disk_vendor,disk_sn:e.form.disk_sn,disk_capacity:e.form.disk_capacity,disk_status:e.form.disk_status,disk_host:e.form.disk_host,disk_service_start_time:e.form.disk_service_start_time,disk_service_end_time:e.form.disk_service_end_time},{headers:{token:localStorage.getItem("token")}}).then((function(t){201===t.status?(e.$message.success("创建成功！"),e.createVisible=!1,e.form={disk_capacity:0},e.vendorData=[],e.searchData={disk_vendor:"",disk_host:"",disk_sn:"",disk_status:"",is_delete:0},e.getData()):(e.$message.error("创建失败！"),e.vendorData=[],e.form={disk_capacity:0})})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))}))})).catch((function(t){console.log(t),e.$message.error("参数错误")}))},resetCreate:function(){this.createVisible=!1,this.vendorData=[],this.form={disk_capacity:0}},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()},dateFormat:function(e,t){var a=e[t.property];if(null!=a){var s=new Date(a),i=s.getFullYear(),r=s.getMonth()+1,o=s.getDate(),l=s.getHours(),n=s.getMinutes(),d=s.getSeconds(),c=i+"-"+r+"-"+o+" "+l+":"+n+":"+d;return c}},queryHost:function(e){var t=this;console.log(e,111),this.$http.get("asset/api/device/device/?query=".concat(e),{headers:{token:localStorage.getItem("token")}}).then((function(e){t.hostData=e.data})).catch((function(e){t.$message.error(JSON.stringify(e.response.data))}))}}}),o=r,l=(a("4532"),a("2877")),n=Object(l["a"])(o,s,i,!1,null,"66c59e83",null);t["default"]=n.exports},de46:function(e,t,a){}}]);