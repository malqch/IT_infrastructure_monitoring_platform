(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cec6c0e4"],{4944:function(a,e,t){},"52cd":function(a,e,t){"use strict";var n=t("4944"),s=t.n(n);s.a},f4e9:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"container"},[t("el-form",{attrs:{inline:!0},model:{value:a.searchData,callback:function(e){a.searchData=e},expression:"searchData"}},[t("el-row",[t("el-form-item",[t("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"ip"},model:{value:a.searchData.virtual_ip,callback:function(e){a.$set(a.searchData,"virtual_ip",e)},expression:"searchData.virtual_ip"}})],1),t("el-form-item",[t("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"主机名"},model:{value:a.searchData.hostname,callback:function(e){a.$set(a.searchData,"hostname",e)},expression:"searchData.hostname"}})],1),t("el-form-item",[t("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"状态"},model:{value:a.searchData.status,callback:function(e){a.$set(a.searchData,"status",e)},expression:"searchData.status"}})],1),t("el-form-item",[t("el-input",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"维护状态"},model:{value:a.searchData.maintain_status,callback:function(e){a.$set(a.searchData,"maintain_status",e)},expression:"searchData.maintain_status"}})],1),t("el-button",{staticClass:"handle-box change_el_button",attrs:{icon:"el-icon-search",type:"primary"},on:{click:a.handleSearch}},[a._v("查询")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,border:""}},[t("el-table-column",{attrs:{prop:"virtual_ip",label:"ip",align:"center"}}),t("el-table-column",{attrs:{prop:"hostname",label:"名称",align:"center"}}),t("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"}}),t("el-table-column",{attrs:{prop:"belong_business",label:"所属业务",align:"center",formatter:a.querybusinessData}}),t("el-table-column",{attrs:{prop:"label",label:"标签",align:"center",formatter:a.querylabelData}}),t("el-table-column",{attrs:{prop:"maintain_status",label:"维护状态",align:"center"}})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":a.query.pageIndex,"page-size":a.query.pageSize,total:a.pageTotal},on:{"current-change":a.handlePageChange}})],1)],1)])])},s=[],l=(t("99af"),t("b0c0"),t("b85c")),r={name:"virtualServer",data:function(){return{tableData:[],searchData:{virtual_ip:"",device_name:"",hostname:"",status:"",maintain_status:"",device_type:"",device_vendor:""},pageTotal:0,query:{address:"",name:"",pageIndex:1,pageSize:10},businessData:[]}},created:function(){this.getData()},methods:{getData:function(){var a=this;this.$http.get("asset/api/virtual_server/?current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize,"&virtual_ip=").concat(this.searchData.virtual_ip,"&status=").concat(this.searchData.status,"&device_vendor=").concat(this.searchData.device_vendor,"&device_type=服务器&maintain_status=").concat(this.searchData.maintain_status,"&hostname=").concat(this.searchData.hostname),{headers:{token:localStorage.getItem("token")}}).then((function(e){a.tableData=e.data["data"],a.pageTotal=e.data["total_count"]})).catch((function(e){a.$message.error(JSON.stringify(e.response.data))}))},handlePageChange:function(a){this.$set(this.query,"pageIndex",a),this.getData()},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},querybusinessData:function(a){if(""!=a.belong_business){var e,t="",n=Object(l["a"])(a.belong_business);try{for(n.s();!(e=n.n()).done;){var s=e.value;t+=" "+s.name}}catch(r){n.e(r)}finally{n.f()}return t}return""},querylabelData:function(a){if(""!=a.label){var e,t="",n=Object(l["a"])(a.label);try{for(n.s();!(e=n.n()).done;){var s=e.value;t+=" "+s.tag_name}}catch(r){n.e(r)}finally{n.f()}return t}return""}}},i=r,c=(t("52cd"),t("2877")),o=Object(c["a"])(i,n,s,!1,null,"b205e60a",null);e["default"]=o.exports}}]);