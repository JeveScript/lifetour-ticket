(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ticket"],{3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"3d14":function(t,e,a){},"6b54":function(t,e,a){"use strict";a("3846");var r=a("cb7c"),o=a("0bfb"),i=a("9e1e"),n="toString",l=/./[n],s=function(t){a("2aba")(RegExp.prototype,n,t,!0)};a("79e5")((function(){return"/a/b"!=l.call({source:"a",flags:"b"})}))?s((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):l.name!=n&&s((function(){return l.call(this)}))},"6be8":function(t,e,a){"use strict";var r=a("9d94"),o=a("8088"),i={list:function(){return r["a"].get(o["a"].company)}};e["a"]=i},8741:function(t,e,a){"use strict";var r=a("3d14"),o=a.n(r);o.a},"8f20":function(t,e,a){},"8fc2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("v-breadcrumb"),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"page-content"},[a("div",{staticClass:"mb-20"},[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",plain:""},on:{click:t.handleShowDialog}},[t._v("生成卡券")])],1),a("div",[a("el-form",{attrs:{inline:"","label-width":"100px"}},[t.companySelect?a("el-form-item",{attrs:{label:"公司："}},[a("el-select",{attrs:{placeholder:"请选择公司"},model:{value:t.form.company_id,callback:function(e){t.$set(t.form,"company_id",e)},expression:"form.company_id"}},t._l(t.companys,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),a("el-form-item",{attrs:{label:"公司："}},[a("el-select",{attrs:{placeholder:"请选择产品"},model:{value:t.form.goods_id,callback:function(e){t.$set(t.form,"goods_id",e)},expression:"form.goods_id"}},t._l(t.goods,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"兑换情况："}},[a("el-select",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-option",{attrs:{label:"未兑换",value:0}}),a("el-option",{attrs:{label:"已兑换",value:1}})],1)],1),a("el-form-item",{attrs:{label:"卡券号码"}},[a("el-input",{attrs:{placeholder:"请输入卡券号码"},model:{value:t.form.findex,callback:function(e){t.$set(t.form,"findex",e)},expression:"form.findex"}})],1),a("div",[a("el-form-item",{attrs:{label:"时间："}},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd","picker-options":t.pickerOptions},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)],1),a("div",[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getData}},[t._v("查询")]),a("el-button",{on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"goods_name",label:"产品"}}),a("el-table-column",{attrs:{prop:"company_name",label:"所属公司"}}),a("el-table-column",{attrs:{prop:"findex",label:"卡号"}}),a("el-table-column",{attrs:{prop:"start_at",label:"生效时间"}}),a("el-table-column",{attrs:{prop:"end_at",label:"过期时间"}}),a("el-table-column",{attrs:{label:"电子卡"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{attrs:{type:"primary"},on:{click:function(a){return t.handleDownLoadImage(e.row.id,e.row.findex)}}},[t._v("下载")])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?a("el-tag",[t._v("已兑换")]):a("el-tag",{attrs:{type:"danger"}},[t._v("未兑换")])]}}])})],1),a("div",[t.pagination.total>t.pagination.pageSize?a("el-pagination",{staticStyle:{"margin-top":"16px"},attrs:{background:"",layout:"prev, pager, next","current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.total},on:{"update:currentPage":function(e){return t.$set(t.pagination,"currentPage",e)},"update:current-page":function(e){return t.$set(t.pagination,"currentPage",e)},"current-change":t.getData}}):t._e()],1)],1),a("el-dialog",{attrs:{title:"卡券生成",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dialogForm",staticClass:"ticket-dialogForm",attrs:{model:t.dialogForm,rules:t.rules}},[a("el-form-item",{attrs:{label:"产品",prop:"goods_id","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择产品"},model:{value:t.dialogForm.goods_id,callback:function(e){t.$set(t.dialogForm,"goods_id",e)},expression:"dialogForm.goods_id"}},t._l(t.goods,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"数量",prop:"number","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"number",placeholder:"请输入卡券数量"},model:{value:t.dialogForm.number,callback:function(e){t.$set(t.dialogForm,"number",e)},expression:"dialogForm.number"}},[a("template",{slot:"append"},[t._v("张")])],2)],1),a("el-form-item",{attrs:{label:"生效时间",prop:"start_at","label-width":t.formLabelWidth}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.dialogForm.start_at,callback:function(e){t.$set(t.dialogForm,"start_at",e)},expression:"dialogForm.start_at"}})],1),a("el-form-item",{attrs:{label:"有效年限",prop:"period","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"number",placeholder:"请输入卡券有效年限"},model:{value:t.dialogForm.period,callback:function(e){t.$set(t.dialogForm,"period",e)},expression:"dialogForm.period"}},[a("template",{slot:"append"},[t._v("年")])],2)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.handleAddTicket}},[t._v("确 定")])],1)],1)],1)},o=[],i=(a("6b54"),a("c5f6"),a("ac6a"),a("5df3"),a("a14e")),n=a("9d94"),l=a("8088"),s={list:function(t){return n["a"].get(l["a"].ticket,t)},insert:function(t){return n["a"].post(l["a"].ticket,t)},wxcode:function(t){return n["a"].get(l["a"].wxcode(t))}},c=s,d=a("6be8"),u=a("9892"),m=a("94c4"),p={data:function(){return{loading:!1,companySelect:!1,companys:[],goods:[],form:{company_id:"",goods_id:"",status:"",findex:"",date:[]},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},tableData:[],pagination:{currentPage:1,pageSize:10,total:0},rules:{goods_id:[{required:!0,message:"请选择产品",trigger:"blur"}],number:[{required:!0,message:"请输入卡券数量",trigger:"blur"}],start_at:[{required:!0,message:"请输入生效时间",trigger:"blur"}],period:[{required:!0,message:"请输入卡券有效年限",trigger:"blur"}]},dialogFormVisible:!1,formLabelWidth:"120px",dialogForm:{goods_id:"",number:"",start_at:"",period:2}}},created:function(){var t=u["a"].getUserInfo();t.company_id?this.form.company_id=t.company_id:(this.getCompanys(),this.companySelect=!0),this.getData()},methods:{getCompanys:function(){var t=this;Promise.all([d["a"].list(),m["a"].list({company_id:this.form.company_id,page_size:100})]).then((function(e){t.companys=e[0],t.goods=e[1].datas}))},getData:function(){var t=this,e={current_page:this.pagination.currentPage,page_size:this.pagination.pageSize,company_id:this.form.company_id,goods_id:this.form.goods_id,status:this.form.status},a=this.form.date;a.length&&(e.start_at=a[0],e.end_at=a[1]),this.loading=!0,c.list(e).then((function(e){t.tableData=e.datas,t.pagination.pageSize=Number(e.pagination.page_size),t.pagination.currentPage=Number(e.pagination.current_page),t.pagination.total=Number(e.pagination.total)})).finally((function(){t.loading=!1}))},handleReset:function(){this.pagination.currentPage=1,this.companySelect&&(this.form.company_id=""),this.form.goods_id="",this.form.status="",this.form.findex="",this.getData()},handleShowDialog:function(){this.dialogFormVisible=!0,this.dialogForm.period=2,this.dialogForm.goods_id="",this.dialogForm.number="",this.dialogForm.start_at=""},handleAddTicket:function(){var t=this;this.$refs.dialogForm.validate((function(e){if(e){t.dialogFormVisible=!1,t.loading=!1;var a={period:t.dialogForm.period,goods_id:t.dialogForm.goods_id,number:Number(t.dialogForm.number),start_at:t.formatDate(t.dialogForm.start_at)};c.insert(a).then((function(){t.$message.success("创建成功"),t.getData()}))}}))},formatDate:function(t){var e=function(t){return t=t.toString(),t[1]?t:"0"+t},a=t.getFullYear(),r=t.getMonth()+1,o=t.getDate();return[a,r,o].map(e).join("-")},handleDownLoadImage:function(t,e){c.wxcode(t).then((function(t){var a=document.createElement("a");a.setAttribute("download","电子卡_"+e+".jpeg"),a.setAttribute("href",t),a.click()}))}},components:{"v-breadcrumb":i["a"]}},f=p,g=(a("8741"),a("2877")),b=Object(g["a"])(f,r,o,!1,null,null,null);e["default"]=b.exports},"94c4":function(t,e,a){"use strict";var r=a("9d94"),o=a("8088"),i={list:function(t){return r["a"].get(o["a"].goods,t)},show:function(t){return r["a"].get(o["a"].goodsItem(t))},update:function(t,e){return r["a"].put(o["a"].goodsItem(t),e)}};e["a"]=i},a14e:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.breadcrumbValue.length||t.title||t.description?a("div",{staticClass:"breadcrumb-section"},[t.breadcrumbValue.length?a("el-breadcrumb",{staticClass:"breadcrumb-list"},[t._l(t.breadcrumbValue,(function(e){return[e.to?a("el-breadcrumb-item",{key:e.name,attrs:{replace:!0,to:e.to}},[t._v(t._s(e.name))]):a("el-breadcrumb-item",{key:e.name},[t._v(t._s(e.name))])]}))],2):t._e(),t.title?a("div",{staticClass:"breadcrumb-title"},[t._v(t._s(t.title))]):t._e(),t.description?a("div",{staticClass:"breadcrumb-description"},[t._v("\n    "+t._s(t.description)+"\n  ")]):t._e()],1):t._e()},o=[],i=(a("7f7f"),a("a481"),{props:{breadcrumb:{type:Array,default:function(){return[]}},title:{type:String,default:""},description:{type:String,default:""}},computed:{breadcrumbValue:function(){var t=this.breadcrumb;return t.length?t:this.$route.matched.filter((function(t){return t.meta&&t.meta.breadcrumb})).map((function(t){return{name:t.meta.breadcrumb.title,to:t.meta.breadcrumb.replace?{name:t.name}:void 0}}))}}}),n=i,l=(a("c895"),a("2877")),s=Object(l["a"])(n,r,o,!1,null,null,null);e["a"]=s.exports},aa77:function(t,e,a){var r=a("5ca1"),o=a("be13"),i=a("79e5"),n=a("fdef"),l="["+n+"]",s="​",c=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),u=function(t,e,a){var o={},l=i((function(){return!!n[t]()||s[t]()!=s})),c=o[t]=l?e(m):n[t];a&&(o[a]=c),r(r.P+r.F*l,"String",o)},m=u.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},c5f6:function(t,e,a){"use strict";var r=a("7726"),o=a("69a8"),i=a("2d95"),n=a("5dbc"),l=a("6a99"),s=a("79e5"),c=a("9093").f,d=a("11e9").f,u=a("86cc").f,m=a("aa77").trim,p="Number",f=r[p],g=f,b=f.prototype,h=i(a("2aeb")(b))==p,_="trim"in String.prototype,v=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():m(e,3);var a,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var n,s=e.slice(2),c=0,d=s.length;c<d;c++)if(n=s.charCodeAt(c),n<48||n>o)return NaN;return parseInt(s,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(h?s((function(){b.valueOf.call(a)})):i(a)!=p)?n(new g(v(e)),a,f):v(e)};for(var y,k=a("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;k.length>F;F++)o(g,y=k[F])&&!o(f,y)&&u(f,y,d(g,y));f.prototype=b,b.constructor=f,a("2aba")(r,p,f)}},c895:function(t,e,a){"use strict";var r=a("8f20"),o=a.n(r);o.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=ticket.87632f87.js.map