(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b0d13d1"],{"8dcb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}})],1),a("div",{staticClass:"container"},[a("el-input",{staticStyle:{width:"200px","margin-bottom":"15px"},attrs:{type:"text",placeholder:"请输入脚本名",clearable:""},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","max-height":"600"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{prop:"script_name",label:"脚本名字",align:"center"}}),a("el-table-column",{attrs:{prop:"network_ip",label:"主机ip",align:"center"}}),a("el-table-column",{attrs:{prop:"hostname",label:"主机名",align:"center"}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center"}}),a("el-table-column",{attrs:{label:"脚本输出",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.script_output,placement:"top-start"}},[a("span",[t._v(t._s(e.row.script_output))])])]}}])}),a("el-table-column",{attrs:{prop:"execute_time",label:"执行时间",formatter:t.datetimeFormat,align:"center"}}),a("el-table-column",{attrs:{label:"执行结果",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.execute_res,placement:"top-start"}},[a("span",[t._v(t._s(e.row.execute_res))])])]}}])}),a("el-table-column",{attrs:{prop:"executor",label:"执行人",align:"center"}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":t.query.pageIndex,"page-size":t.query.pageSize,total:t.pageTotal},on:{"current-change":t.handlePageChange}})],1)],1)])},l=[],i=(a("99af"),a("b0c0"),a("424b")),r={data:function(){return{options:[],keywords:"",query:{address:"",name:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],title:"",editVisible:!1,deleteVisible:!1,datetimeFormat:null,loading:!0,pageTotal:0,form:{},idx:-1,id:-1}},created:function(){this.token=localStorage.getItem("token"),this.username=localStorage.getItem("username"),this.getData(),this.datetimeFormat=i["datetimeFormat"]},methods:{getData:function(){var t=this,e=this.keywords,a=this.url;a=e?"automation/api/script_log/?name=".concat(e,"&log_use=0&current_page=").concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize):"automation/api/script_log/?log_use=0&current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize),this.$http.get(a,{headers:{token:this.token}}).then((function(e){t.tableData=e.data.data,t.pageTotal=e.data.total_count,t.loading=!1})).catch((function(e){t.$message.error(JSON.stringify(e.response.data)),t.loading=!1}))},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handleSelectionChange:function(t){this.multipleSelection=t},delAllSelection:function(){var t=this.multipleSelection.length,e="";this.delList=this.delList.concat(this.multipleSelection);for(var a=0;a<t;a++)e+=this.multipleSelection[a].name+" ";this.$message.error("删除了".concat(e)),this.multipleSelection=[]},handlePageChange:function(t){this.$set(this.query,"pageIndex",t),this.getData()}}},o=r,s=(a("d99b"),a("2877")),c=Object(s["a"])(o,n,l,!1,null,"7aa1193a",null);e["default"]=c.exports},bc1a:function(t,e,a){},d99b:function(t,e,a){"use strict";var n=a("bc1a"),l=a.n(n);l.a}}]);