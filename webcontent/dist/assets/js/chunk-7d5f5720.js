(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d5f5720"],{"159b":function(e,t,a){var o=a("da84"),r=a("fdbc"),s=a("17c2"),n=a("9112");for(var l in r){var i=o[l],c=i&&i.prototype;if(c&&c.forEach!==s)try{n(c,"forEach",s)}catch(p){c.forEach=s}}},"15cf":function(e,t,a){"use strict";var o=a("5821"),r=a.n(o);r.a},"346c":function(e,t,a){"use strict";var o=a("7863"),r=a.n(o);r.a},5821:function(e,t,a){},7863:function(e,t,a){},"8d72":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" pxe管理 ")])],1)],1),a("div",{staticClass:"container"},[a("el-form",{attrs:{inline:!0},model:{value:e.searchData,callback:function(t){e.searchData=t},expression:"searchData"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("div",[a("el-button",{staticClass:"handle-box",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.handleAdd()}}},[e._v("增加 ")])],1),a("div",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[a("el-form-item",[a("el-input",{staticClass:"handle-input",attrs:{placeholder:"名称",clearable:""},model:{value:e.searchData.pxe_name,callback:function(t){e.$set(e.searchData,"pxe_name",t)},expression:"searchData.pxe_name"}})],1),a("el-form-item",[a("el-input",{staticClass:"handle-input",attrs:{placeholder:"ip",clearable:""},model:{value:e.searchData.pxe_server_ip,callback:function(t){e.$set(e.searchData,"pxe_server_ip",t)},expression:"searchData.pxe_server_ip"}})],1),a("el-button",{staticClass:"handle-box",attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.handleSearch}},[e._v("查询")])],1)])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"expand-change":e.queryPxeos}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.osloading,expression:"osloading"}],ref:"ostable",staticStyle:{width:"100%"},attrs:{data:t.row.ruleItemData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"os_name",label:"os名称",align:"center"}}),a("el-table-column",{attrs:{prop:"os_version",label:"os版本",align:"center"}}),a("el-table-column",{attrs:{prop:"ks_name",label:"ks_name",align:"center"}}),a("el-table-column",{attrs:{prop:"profile",label:"profile",align:"center",width:"150px"}}),a("el-table-column",{attrs:{prop:"ifenable",label:"ifenable",align:"center"}}),a("el-table-column",{attrs:{prop:"type",label:"type",align:"center"}}),a("el-table-column",{attrs:{prop:"ks_content",label:"ks_content",align:"center",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{on:{click:function(a){return e.querykscontent(t.row)}}},[e._v("查看ks文件")])]}}],null,!0)}),a("el-table-column",{attrs:{prop:"create_time",label:"create_time",align:"center",formatter:e.datetimeFormat,width:"120px"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(o){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleosEdit(t.row,o.row)}}},[e._v("编辑 ")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleosdelete(t.row,o.row)}}},[e._v("删除 ")])]}}],null,!0)})],1)]}}])}),a("el-table-column",{attrs:{prop:"pxe_name",label:"pxe_name",align:"center"}}),a("el-table-column",{attrs:{prop:"pxe_server_ip",label:"pxe_server_ip",align:"center"}}),a("el-table-column",{attrs:{prop:"ipmi_server_ip",label:"ipmi_server_ip",align:"center"}}),a("el-table-column",{attrs:{prop:"ifenable",label:"ifenable",align:"center"}}),a("el-table-column",{attrs:{prop:"device_usage",label:"usage",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("el-table-column",{attrs:{prop:"create_time",label:" 创建时间 ",align:"center",formatter:e.datetimeFormat}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑 ")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handledelete(t.row)}}},[e._v("删除 ")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:e.makeTitle,visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"pxe_name",prop:"pxe_name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.pxe_name,callback:function(t){e.$set(e.form,"pxe_name",t)},expression:"form.pxe_name"}})],1),a("el-form-item",{attrs:{label:"pxe_server_ip",prop:"pxe_server_ip"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.pxe_server_ip,callback:function(t){e.$set(e.form,"pxe_server_ip",t)},expression:"form.pxe_server_ip"}})],1),a("el-form-item",{attrs:{label:"ipmi_server_ip",prop:"ipmi_server_ip"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.ipmi_server_ip,callback:function(t){e.$set(e.form,"ipmi_server_ip",t)},expression:"form.ipmi_server_ip"}})],1),a("el-form-item",{attrs:{label:"ifenable"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择是否启用",clearable:""},model:{value:e.form.ifenable,callback:function(t){e.$set(e.form,"ifenable",t)},expression:"form.ifenable"}},e._l(e.typeifenable,(function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"usage"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.device_usage,callback:function(t){e.$set(e.form,"device_usage",t)},expression:"form.device_usage"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:e.makeosTitle,visible:e.editosVisible,width:"30%"},on:{"update:visible":function(t){e.editosVisible=t}}},[a("el-form",{ref:"osform",attrs:{model:e.osform,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"os_name"}},[a("el-input",{model:{value:e.osform.os_name,callback:function(t){e.$set(e.osform,"os_name",t)},expression:"osform.os_name"}})],1),a("el-form-item",{attrs:{label:"os_version"}},[a("el-input",{model:{value:e.osform.os_version,callback:function(t){e.$set(e.osform,"os_version",t)},expression:"osform.os_version"}})],1),a("el-form-item",{attrs:{label:"ks_name"}},[a("el-input",{model:{value:e.osform.ks_name,callback:function(t){e.$set(e.osform,"ks_name",t)},expression:"osform.ks_name"}})],1),a("el-form-item",{attrs:{label:"profile"}},[a("el-input",{model:{value:e.osform.profile,callback:function(t){e.$set(e.osform,"profile",t)},expression:"osform.profile"}})],1),a("el-form-item",{attrs:{label:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类型",clearable:""},model:{value:e.osform.type,callback:function(t){e.$set(e.osform,"type",t)},expression:"osform.type"}},e._l(e.typeData,(function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"ifenable"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择是否启用",clearable:""},model:{value:e.osform.ifenable,callback:function(t){e.$set(e.osform,"ifenable",t)},expression:"osform.ifenable"}},e._l(e.typeifenable,(function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"ks_content"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.osform.ks_content,callback:function(t){e.$set(e.osform,"ks_content",t)},expression:"osform.ks_content"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editosVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveosEdit}},[e._v("确 定")])],1)],1)],1)},r=[],s=(a("99af"),a("4160"),a("d81d"),a("159b"),a("424b")),n={name:"pxeserver",data:function(){return{tableData:[],editVisible:!1,form:{},id:-1,os_id:-1,staffData:[],pageTotal:0,query:{address:"",name:"",pageIndex:1,pageSize:10},searchData:{pxe_name:"",pxe_server_ip:""},makeTitle:"",typeifenable:[{value:"enabled"},{value:"disabled"}],pxeosData:[],osform:{},makeosTitle:"",editosVisible:!1,pxeData:[],typeData:[{value:"suse"},{value:"rhel"},{value:"neokylin"},{value:"exit"}],kscontentVisible:!1,ksContentData:"",pxe_server_id:1,datetimeFormat:null,rules:{pxe_name:[{required:!0,message:"请输入名称"},{trigger:"blur"}],pxe_server_ip:[{required:!0,message:"请输入pxe server的ip"},{trigger:"blur"}],ipmi_server_ip:[{required:!0,message:"请输入ipmi server的ip"},{trigger:"blur"}]},loading:!0,osloading:!1}},created:function(){this.getData(),this.datetimeFormat=s["datetimeFormat"]},methods:{getData:function(){var e=this;this.$http.get("automation/api/pxe_server/?current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize,"&pxe_name=").concat(this.searchData.pxe_name,"&pxe_server_ip=").concat(this.searchData.pxe_server_ip),{headers:{token:localStorage.getItem("token")}}).then((function(t){console.log(t.data["data"]),t.data["data"]&&t.data["data"].map((function(e){e.ruleItemData=[]})),e.tableData=t.data["data"],e.pageTotal=t.data["total_count"],e.loading=!1,console.log(e.tableData)})).catch((function(t){console.log("失败=="+t),e.$message.error(JSON.stringify(t.response.data)),e.loading=!1}))},handleEdit:function(e){this.id=e.id,this.makeTitle="编辑",this.form=JSON.parse(JSON.stringify(e)),this.editVisible=!0},saveEdit:function(){var e=this;this.$refs.form.validate().then((function(t){console.log(t),"增加"==e.makeTitle?e.$http.post("automation/api/pxe_server/",e.form,{headers:{token:localStorage.getItem("token")}}).then((function(t){e.editVisible=!1,console.log("Response:"+JSON.stringify(t)),e.$message.success("保存成功"),e.form={},e.getData()})).catch((function(t){console.log("Error"+t.response),e.$message.error(JSON.stringify(t.response.data))})):e.$http.put("automation/api/pxe_server/".concat(e.id,"/"),e.form,{headers:{token:localStorage.getItem("token")}}).then((function(t){e.editVisible=!1,console.log("Response:"+JSON.stringify(t)),e.$message.success("修改成功"),e.getData()})).catch((function(t){console.log("Error"+t.response),e.$message.error(JSON.stringify(t.response.data))}))})).catch((function(t){console.log(t),e.$message.error("参数错误")}))},handleAdd:function(){var e=this;this.form={},this.makeTitle="增加",this.editVisible=!0,this.$nextTick((function(){e.$refs.form.clearValidate()}))},handleosEdit:function(e,t){this.os_id=t.id,this.makeosTitle="编辑",this.pxe_server_id=e.id,this.osform=JSON.parse(JSON.stringify(t)),this.editosVisible=!0},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handledelete:function(e){var t=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){t.$http.delete("automation/api/pxe_server/".concat(e.id),{headers:{token:localStorage.getItem("token")}}).then((function(e){204===e.status?(t.$message.success("删除成功！"),t.$set(t.query,"pageIndex",1),t.getData()):t.$message.error("删除失败！")})).catch((function(e){console.log("Error"+e.response),t.$message.error(JSON.stringify(e.response.data))}))}))},querypxeserveros:function(){var e=this;this.$http.get("automation/api/pxe_server_os/?pxe_server_id=".concat(this.osform.pxe_server_id),{headers:{token:localStorage.getItem("token")}}).then((function(t){e.tableData.forEach((function(a,o){a.id===e.pxe_server_id&&(e.tableData[o].ruleItemData=t.data,console.log(e.tableData))}))}))},queryPxeos:function(e,t){var a=this;t.length>0&&(this.osloading=!0,this.$http.get("automation/api/pxe_server_os/?pxe_server_id=".concat(e.id),{headers:{token:localStorage.getItem("token")}}).then((function(t){a.tableData.forEach((function(o,r){o.id===e.id&&(a.tableData[r].ruleItemData=t.data)})),a.osloading=!1})))},queryPxeserver:function(){var e=this;this.$http.get("automation/api/pxe_server/",{headers:{token:localStorage.getItem("token")}}).then((function(t){e.pxeData=t.data})).catch((function(t){console.log("失败=="+t),e.$message.error(JSON.stringify(t.response.data))}))},saveosEdit:function(){var e=this;"增加"==this.makeosTitle?this.$http.post("automation/api/pxe_server_os/",this.osform,{headers:{token:localStorage.getItem("token")}}).then((function(t){e.editosVisible=!1,console.log("Response:"+JSON.stringify(t)),e.$message.success("保存成功"),e.querypxeserveros()})).catch((function(t){console.log("Error"+t.response),e.$message.error(JSON.stringify(t.response.data))})):this.$http.put("automation/api/pxe_server_os/".concat(this.os_id,"/"),this.osform,{headers:{token:localStorage.getItem("token")}}).then((function(t){e.editosVisible=!1,console.log("Response:"+JSON.stringify(t)),e.$message.success("修改成功"),e.querypxeserveros()})).catch((function(t){console.log("Error"+t.response),e.$message.error(JSON.stringify(t.response.data))}))},querykscontent:function(e){this.$alert(e.ks_content,"ks_content",{confirmButtonText:"取消",customClass:"message-logout"})},handleosdelete:function(e,t){var a=this;this.pxe_server_id=e.id,this.osform={pxe_server_id:e.id},this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){a.$http.delete("automation/api/pxe_server_os/".concat(t.id),{headers:{token:localStorage.getItem("token")}}).then((function(e){204===e.status?(a.$message.success("删除成功！"),a.querypxeserveros()):a.$message.error("删除失败！")})).catch((function(e){console.log("Error"+e.response),a.$message.error(JSON.stringify(e.response.data))}))}))}}},l=n,i=(a("15cf"),a("346c"),a("2877")),c=Object(i["a"])(l,o,r,!1,null,"9bdc730c",null);t["default"]=c.exports},d81d:function(e,t,a){"use strict";var o=a("23e7"),r=a("b727").map,s=a("1dde"),n=a("ae40"),l=s("map"),i=n("map");o({target:"Array",proto:!0,forced:!l||!i},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);