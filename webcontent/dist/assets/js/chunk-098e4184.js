(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-098e4184"],{"0dd4":function(t,e,a){},"70f8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}})],1),a("div",{staticClass:"container"},[a("el-row",[a("el-input",{staticStyle:{width:"200px","margin-bottom":"15px"},attrs:{type:"text",placeholder:"请输入脚本名",clearable:""},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")])],1),a("button",{staticClass:"btn btn-primary",staticStyle:{background:"#a6baf3"},attrs:{type:"button"},on:{click:function(e){return t.getPdf("#pdfDom")}}},[t._v("导出巡检报告")]),a("div",{staticClass:"row",attrs:{id:"pdfDom"}},[a("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:t.tableData,border:"","max-height":"600"}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),a("el-table-column",{attrs:{prop:"patrol_name",label:"巡检任务",align:"center"}}),a("el-table-column",{attrs:{prop:"script_name",label:"脚本名字",align:"center"}}),a("el-table-column",{attrs:{prop:"network_ip",label:"主机ip",align:"center"}}),a("el-table-column",{attrs:{prop:"hostname",label:"主机名",align:"center"}}),a("af-table-column",{attrs:{label:"脚本输出",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.script_output,placement:"top-start"}},[a("span",[t._v(t._s(e.row.script_output))])])]}}])}),a("af-table-column",{attrs:{prop:"execute_time",label:"执行时间",formatter:t.datetimeFormat,align:"center"}}),a("af-table-column",{attrs:{type:"text",label:"执行结果",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.execute_res,placement:"top-start"}},[a("span",[t._v(t._s(e.row.execute_res))])])]}}])}),a("el-table-column",{attrs:{prop:"executor",label:"执行人",align:"center"}})],1)],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":t.query.pageIndex,"page-size":t.query.pageSize,total:t.pageTotal},on:{"current-change":t.handlePageChange}})],1)],1)])},i=[],r=(a("99af"),a("b0c0"),a("424b")),l={data:function(){return{options:[],keywords:"",query:{address:"",name:"",pageIndex:1,pageSize:10},htmlTitle:"巡检报告",tableData:[],pageDataHtml:"",searchData:{start_time:"",end_time:""},multipleSelection:[],delList:[],title:"",editVisible:!1,deleteVisible:!1,datetimeFormat:null,pageTotal:0,form:{},idx:-1,id:-1}},created:function(){this.token=localStorage.getItem("token"),this.username=localStorage.getItem("username"),this.getData(),this.datetimeFormat=r["datetimeFormat"]},methods:{getData:function(){var t=this,e=this.keywords,a=this.url;a=e?"automation/api/script_log/?name=".concat(e,"&current_page=").concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize,"&log_use=1"):"automation/api/script_log/?current_page=".concat(this.query.pageIndex,"&pre_page=").concat(this.query.pageSize,"\n                &log_use=1"),this.$http.get(a,{headers:{token:this.token}}).then((function(e){t.tableData=e.data.data,t.pageTotal=e.data.total_count})).catch((function(e){t.$message.error(JSON.stringify(e.response.data))}))},generate_report:function(){var t=this;this.$http.post("automation/api/patrol/generate_report/",{start_time:this.searchData.start_time,end_time:this.searchData.end_time},{headers:{token:this.token,username:this.username}}).then((function(e){t.$message.success(789)}))},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handleSelectionChange:function(t){this.multipleSelection=t},delAllSelection:function(){var t=this.multipleSelection.length,e="";this.delList=this.delList.concat(this.multipleSelection);for(var a=0;a<t;a++)e+=this.multipleSelection[a].name+" ";this.$message.error("删除了".concat(e)),this.multipleSelection=[]},handlePageChange:function(t){this.$set(this.query,"pageIndex",t),this.getData()}}},s=l,o=(a("9cc7"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"f07beef0",null);e["default"]=c.exports},"9cc7":function(t,e,a){"use strict";var n=a("0dd4"),i=a.n(n);i.a}}]);