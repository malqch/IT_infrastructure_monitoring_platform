(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0425e6a6"],{3638:function(e,t,a){"use strict";var s=a("ceaa"),n=a.n(s);n.a},b14b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 业务 ")])],1)],1),a("div",{staticClass:"container"},[a("el-form",{attrs:{inline:!0},model:{value:e.searchData,callback:function(t){e.searchData=t},expression:"searchData"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("div",[a("el-button",{staticClass:"handle-box",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.handleAdd()}}},[e._v("增加 ")])],1),a("div",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[a("el-form-item",[a("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"名称"},model:{value:e.searchData.name,callback:function(t){e.$set(e.searchData,"name",t)},expression:"searchData.name"}})],1),a("el-button",{staticClass:"handle-box",attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.handleSearch}},[e._v("查询")])],1)])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{width:"50",type:"index",label:"序号",align:"center"}}),a("af-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),a("af-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("af-table-column",{attrs:{prop:"staff",label:"工作人员",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticClass:"color-link",attrs:{type:"info"},on:{click:function(a){return e.searchStaff(t.$index)}}},[e._v("查看负责人信息")])]}}])}),a("af-table-column",{attrs:{prop:"update_time",label:" 更新时间 ",align:"center",formatter:e.dateFormat}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑 ")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handledelete(t.row)}}},[e._v("删除 ")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:e.makeTitle,visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"60px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),a("el-form-item",{attrs:{label:"负责人"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",placeholder:"请选择负责人",clearable:""},on:{focus:function(t){return e.querystaff()}},model:{value:e.form.staff,callback:function(t){e.$set(e.form,"staff",t)},expression:"form.staff"}},e._l(e.staffData,(function(e){return a("el-option",{key:e.username,attrs:{label:e.username,value:e.id}})})),1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{staticClass:"alert_dialog",attrs:{title:"负责人信息",visible:e.staffVisible,width:"30%"},on:{"update:visible":function(t){e.staffVisible=t}}},[a("ul",{staticClass:"network_ul",attrs:{model:e.staffDataRes}},[a("li",[a("em",{staticClass:"network_ang"}),a("label",{staticClass:"network_label"},[e._v("负责人:")]),a("span",{staticClass:"network_span"},[e._v(e._s(e.staffDataRes.username))])]),a("li",[a("em",{staticClass:"network_ang"}),a("label",{staticClass:"network_label"},[e._v("邮箱:")]),a("span",{staticClass:"network_span"},[e._v(e._s(e.staffDataRes.email))])]),a("li",[a("em",{staticClass:"network_ang"}),a("label",{staticClass:"network_label"},[e._v("电话:")]),a("span",{staticClass:"network_span"},[e._v(e._s(e.staffDataRes.phone))])]),a("li",[a("em",{staticClass:"network_ang"}),a("label",{staticClass:"network_label"},[e._v("备注:")]),a("span",{staticClass:"network_span"},[e._v(e._s(e.staffDataRes.remark))])])])])],1)},n=[],i=(a("99af"),a("b0c0"),{name:"server",data:function(){return{tableData:[],editVisible:!1,staffVisible:!1,form:{},id:-1,staffData:[],pageTotal:0,query:{address:"",name:"",pageIndex:1,pageSize:10},searchData:{name:""},makeTitle:"",staffDataRes:{username:"",email:"",phone:""},staffObject:"",rules:{name:[{required:!0,message:"请输入业务名"},{trigger:"blur"}]},loading:!0}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.$http.get("asset/api/business/?current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize,"&name=").concat(this.searchData.name),{headers:{token:localStorage.getItem("token")}}).then((function(t){e.tableData=t.data["data"],e.pageTotal=t.data["total_count"],e.loading=!1})).catch((function(t){console.log("失败=="+t),e.$message.error(JSON.stringify(t.response.data)),e.loading=!1}))},handleEdit:function(e){var t=this;this.id=e.id,this.makeTitle="编辑",this.form=JSON.parse(JSON.stringify(e)),e["staff"]&&(this.staffObject=e.staff,this.form.staff=e.staff.username),this.editVisible=!0,this.$nextTick((function(){t.$refs.form.clearValidate()}))},saveEdit:function(){var e=this;this.$refs.form.validate().then((function(t){console.log(t),"增加"==e.makeTitle?e.$http.post("asset/api/business/",e.form,{headers:{token:localStorage.getItem("token")}}).then((function(t){e.editVisible=!1,console.log("Response:"+JSON.stringify(t)),e.$message.success(t.data.msg),e.form={},e.searchData={name:""},e.getData()})).catch((function(t){console.log("Error"+t.response),e.$message.error(JSON.stringify(t.response.data))})):(e.form.staff&&"number"!=typeof e.form.staff&&e.$set(e.form,"staff",e.staffObject.id),e.$http.put("asset/api/business/".concat(e.id,"/"),{id:e.form.id,name:e.form.name,remark:e.form.remark,staff:e.form.staff},{headers:{token:localStorage.getItem("token")}}).then((function(t){e.editVisible=!1,console.log("Response:"+JSON.stringify(t)),e.$message.success(t.data.msg),e.getData()})).catch((function(t){console.log("Error"+t.response),e.$message.error(JSON.stringify(t.response.data))})))})).catch((function(t){console.log(t),e.$message.error("参数错误")}))},handleAdd:function(){var e=this;this.form={},this.makeTitle="增加",this.editVisible=!0,this.$nextTick((function(){e.$refs.form.clearValidate()}))},querystaff:function(){var e=this;this.$http.get("asset/api/staff/",{headers:{token:localStorage.getItem("token")}}).then((function(t){e.staffData=t.data}))},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},searchStaff:function(e){null!=this.tableData[e]["staff"]?(this.staffDataRes=this.tableData[e]["staff"],this.staffVisible=!0):this.$message.success("负责人信息不存在")},handledelete:function(e){var t=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){t.$http.delete("asset/api/business/".concat(e.id),{headers:{token:localStorage.getItem("token")}}).then((function(e){204===e.status?(t.$message.success("删除成功！"),t.$set(t.query,"pageIndex",1),t.getData()):(console.log(e),t.$message.error(e.data.msg))})).catch((function(e){console.log("Error"+e.response),t.$message.error(JSON.stringify(e.response.data))}))}))},dateFormat:function(e,t){var a=e[t.property];if(null!=a){var s=new Date(a),n=s.getFullYear(),i=s.getMonth()+1,r=s.getDate(),l=s.getHours(),o=s.getMinutes(),c=s.getSeconds(),f=n+"-"+i+"-"+r+" "+l+":"+o+":"+c;return f}}}}),r=i,l=(a("3638"),a("2877")),o=Object(l["a"])(r,s,n,!1,null,"9f8431ca",null);t["default"]=o.exports},ceaa:function(e,t,a){}}]);