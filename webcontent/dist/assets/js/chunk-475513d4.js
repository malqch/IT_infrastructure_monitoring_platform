(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-475513d4"],{"7c733":function(e,t,a){"use strict";var i=a("8488"),l=a.n(i);l.a},8488:function(e,t,a){},bf48:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}})],1),a("div",{staticClass:"container"},[a("el-input",{staticStyle:{width:"200px","margin-bottom":"15px"},attrs:{type:"text",placeholder:"请输入存储信息名",clearable:""},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),a("el-button",{staticClass:"change_el_button",staticStyle:{"margin-left":"10px"},on:{click:e.handleSearch}},[e._v("查询")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.handleCreate}},[e._v("新增")]),a("el-table",{staticClass:"user-table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":"600"}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{prop:"storage_type",label:"存储类型",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"item_name",label:"监控项名称",align:"center"}}),a("el-table-column",{attrs:{prop:"item_obj",label:"监控对象",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["11"==t.row.item_obj?a("span",[e._v(e._s("LUN"))]):"207"==t.row.item_obj?a("span",[e._v(e._s("控制器"))]):"216"==t.row.item_obj?a("span",[e._v(e._s("存储池"))]):"213"==t.row.item_obj?a("span",[e._v(e._s("以太网口"))]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"item",label:"监控项",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"danger",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"93px"}},[a("el-form-item",{attrs:{label:"存储类型",prop:"storage_type"}},[a("el-select",{attrs:{placeholder:"请选择","popper-append-to-body":!1},model:{value:e.form.storage_type,callback:function(t){e.$set(e.form,"storage_type",t)},expression:"form.storage_type"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"监控项名称",prop:"item_name"}},[a("el-input",{model:{value:e.form.item_name,callback:function(t){e.$set(e.form,"item_name",t)},expression:"form.item_name"}})],1),a("el-form-item",{attrs:{label:"监控对象",prop:"item_obj"}},[a("el-select",{attrs:{placeholder:"请选择","popper-append-to-body":!1},model:{value:e.form.item_obj,callback:function(t){e.$set(e.form,"item_obj",t)},expression:"form.item_obj"}},e._l(e.item_obj_options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"监控项",prop:"item"}},[a("el-input",{model:{value:e.form.item,callback:function(t){e.$set(e.form,"item",t)},expression:"form.item"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"change_el_button",on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.deleteVisible,width:"25%"},on:{"update:visible":function(t){e.deleteVisible=t}}},[a("span",[e._v("确定要删除 "+e._s(e.storage_type)+" - "+e._s(e.item)+" 存储监控项信息吗？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"change_el_button",on:{click:function(t){e.deleteVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deletestorageitem}},[e._v("确 定")])],1)])],1)])},l=[],s=(a("99af"),a("b0c0"),{data:function(){return{options:[{value:"HUAWEI",label:"HUAWEI"}],item_obj_options:[{value:"11",label:"LUN"},{value:"207",label:"控制器"},{value:"216",label:"存储池"},{value:"213",label:"以太网口"}],keywords:"",title:"",query:{address:"",name:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],editVisible:!1,assignVisible:!1,deleteVisible:!1,pageTotal:0,form:{},idx:-1,id:-1,rules:{item_name:[{required:!0,message:"请输入监控项中文名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],item:[{required:!0,message:"请输入监控项",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 位之间",trigger:"blur"}],item_obj:[{required:!0,message:"请输入监控对象",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 位之间",trigger:"blur"}],storage_type:[{required:!0,message:"请输入存储类型",trigger:"blur"}]},storage_type:"",item:""}},created:function(){this.getData()},methods:{getData:function(){var e=this,t=this.keywords,a=this.url;a=t?"monitor/api/storageitem/?item_name=".concat(t,"&current_page=").concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize):"monitor/api/storageitem/?current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize),this.$http.get("".concat(a),{headers:{token:localStorage.getItem("token")}}).then((function(t){e.tableData=t.data.data,e.pageTotal=t.data.total_count})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))}))},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handleDelete:function(e,t){this.id=t.id,this.form=t,this.storage_type=t.storage_type,this.item=t.item,this.deleteVisible=!0},deletestorageitem:function(){var e=this;this.$http.delete("monitor/api/storageitem/".concat(this.id,"/"),{headers:{token:localStorage.getItem("token")}}).then((function(t){204===t.status?(e.$message.success("删除成功！"),e.deleteVisible=!1,e.getData()):e.$message.error("删除失败！")})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))}))},handleSelectionChange:function(e){this.multipleSelection=e},delAllSelection:function(){var e=this.multipleSelection.length,t="";this.delList=this.delList.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了".concat(t)),this.multipleSelection=[]},handleEdit:function(e,t){this.id=t.id,this.form=t,this.title="编辑",this.editVisible=!0},handleCreate:function(){this.form={},this.title="新增",this.editVisible=!0},saveEdit:function(){var e=this;"编辑"===this.title?this.$http.put("monitor/api/storageitem/".concat(this.id,"/"),this.form,{headers:{token:localStorage.getItem("token")}}).then((function(t){200===t.status?(e.$message.success("修改成功！"),e.editVisible=!1,e.getData()):e.$message.error("修改失败！")})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))})):this.$http.post("monitor/api/storageitem/",this.form,{headers:{token:localStorage.getItem("token")}}).then((function(t){200===t.status||201===t.status?(e.$message.success("创建成功！"),e.editVisible=!1,e.getData()):e.$message.error("创建失败！")})).catch((function(t){e.$message.error(JSON.stringify(t.response.data))}))},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}}),o=s,r=(a("7c733"),a("2877")),n=Object(r["a"])(o,i,l,!1,null,"061da2be",null);t["default"]=n.exports}}]);