(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-228b135c"],{"123d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}})],1),a("div",{staticClass:"container"},[a("div",{staticStyle:{"padding-bottom":"15px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.handleCreate}},[e._v("新增")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"user-table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":"600"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{prop:"hw_username",label:"用户名",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"hw_password",label:"密码",formatter:e.format_pwd,align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"hw_ip",label:"ip",align:"center"}}),a("el-table-column",{attrs:{prop:"hw_address",label:"地址",align:"center"}}),a("el-table-column",{attrs:{prop:"update_time",label:"更新时间",formatter:e.datetimeFormat,align:"center"}}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",formatter:e.datetimeFormat,align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"hw_username"}},[a("el-input",{model:{value:e.form.hw_username,callback:function(t){e.$set(e.form,"hw_username",t)},expression:"form.hw_username"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"hw_password"}},[a("el-input",{attrs:{type:this.registration_data.pwdType},model:{value:e.form.hw_password,callback:function(t){e.$set(e.form,"hw_password",t)},expression:"form.hw_password"}}),this.form.hw_password?a("img",{staticClass:"eye",attrs:{src:this.registration_data.src},on:{click:e.changeType}}):e._e()],1),a("el-form-item",{attrs:{label:"ip",prop:"hw_ip"}},[a("el-input",{model:{value:e.form.hw_ip,callback:function(t){e.$set(e.form,"hw_ip",t)},expression:"form.hw_ip"}})],1),a("el-form-item",{attrs:{label:"地址",prop:"hw_address"}},[a("el-input",{model:{value:e.form.hw_address,callback:function(t){e.$set(e.form,"hw_address",t)},expression:"form.hw_address"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.deleteVisible,width:"25%"},on:{"update:visible":function(t){e.deleteVisible=t}}},[a("span",[e._v("确定要删除环境 "+e._s(e.hw_address)+" 吗？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.deleteVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteEdit}},[e._v("确 定")])],1)])],1)},s=[],r=(a("99af"),a("b0c0"),a("424b")),n={name:"usertable",data:function(){return{registration_data:{pwdType:"password",src:a("2c33")},check_roles:[],keywords:"",title:"",query:{address:"",name:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],editVisible:!1,deleteVisible:!1,pageTotal:0,form:{},datetimeFormat:null,loading:!0,idx:-1,id:-1,rules:{hw_username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}],hw_password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:99,message:"长度在 6 到 99 位之间",trigger:"blur"}],hw_ip:[{required:!0,message:"请输入ip",trigger:"blur"}],hw_address:[{required:!0,message:"请输入私有云地址",trigger:"blur"}]},hw_address:""}},created:function(){this.token=localStorage.getItem("token"),this.username=localStorage.getItem("username"),this.getData(),this.datetimeFormat=r["datetimeFormat"]},methods:{changeType:function(){this.registration_data.pwdType="password"===this.registration_data.pwdType?"text":"password",this.registration_data.src=this.registration_data.src==a("2c33")?a("fc5e7"):a("2c33")},format_pwd:function(e){if(e.hw_password)return"******"},getData:function(){var e=this;this.$http.get("automation/api/huawei/?current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize),{headers:{token:this.token}}).then((function(t){e.tableData=t.data.data,e.pageTotal=t.data.total_count,e.loading=!1})).catch((function(t){console.log(t),e.$message.error(JSON.stringify(t.response.data)),e.loading=!1}))},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handleDelete:function(e,t){this.id=t.id,this.form=t,this.hw_address=t.hw_address,this.deleteVisible=!0},deleteEdit:function(){var e=this;this.$http.delete("automation/api/huawei/".concat(this.id,"/"),{headers:{token:this.token}}).then((function(t){200===t.status||204===t.status?(e.$message.success("删除成功！"),e.deleteVisible=!1,e.getData()):(e.$message.error("删除失败！"),e.deleteVisible=!1)})).catch((function(t){e.$message.error(JSON.stringify(t.response.data)),e.deleteVisible=!1}))},handleSelectionChange:function(e){this.multipleSelection=e},delAllSelection:function(){var e=this.multipleSelection.length,t="";this.delList=this.delList.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了".concat(t)),this.multipleSelection=[]},handleEdit:function(e,t){var i=this;this.id=t.id,this.form=t,this.title="编辑",this.editVisible=!0,this.$nextTick((function(){i.$refs.form.clearValidate()})),this.registration_data.pwdType=this.registration_data.pwdConfirmType="password",this.registration_data.src=this.registration_data.srcConfirm=a("2c33")},handleCreate:function(){var e=this;this.form={},this.title="新增",this.editVisible=!0,this.$nextTick((function(){e.$refs.form.clearValidate()})),this.registration_data.pwdType=this.registration_data.pwdConfirmType="password",this.registration_data.src=this.registration_data.srcConfirm=a("2c33")},saveEdit:function(){var e=this;"编辑"===this.title?this.$http.put("automation/api/huawei/".concat(this.id,"/"),this.form,{headers:{token:this.token}}).then((function(t){200===t.status?(e.$message.success("修改成功！"),e.editVisible=!1,e.getData()):(e.$message.error("修改失败！"),e.editVisible=!1)})).catch((function(t){e.$message.error(JSON.stringify(t.response.data)),e.editVisible=!1})):this.$refs.form.validate((function(t){if(!t)return e.$message.warning("请选择必填项"),!1;e.$http.post("automation/api/huawei/",e.form,{headers:{token:e.token}}).then((function(t){200===t.status||201===t.status?(e.$message.success("创建成功！"),e.editVisible=!1,e.getData()):(e.$message.error("创建失败！"),e.editVisible=!1)})).catch((function(t){e.$message.error(JSON.stringify(t.response.data)),e.editVisible=!1}))}))},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}},o=n,l=(a("cca5"),a("2877")),d=Object(l["a"])(o,i,s,!1,null,"10e6829a",null);t["default"]=d.exports},"2c33":function(e,t,a){e.exports=a.p+"assets/img/colse_eye.png"},6291:function(e,t,a){},cca5:function(e,t,a){"use strict";var i=a("6291"),s=a.n(i);s.a},fc5e7:function(e,t,a){e.exports=a.p+"assets/img/open_eye.png"}}]);