webpackJsonp([20,0],{0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=o(7),a=n(i),s=o(574),r=n(s),c=o(72),l=n(c),u=o(19),d=n(u),h=o(1),p=(n(h),o(258)),f=n(p),v=o(152),_=n(v);a.default.config.devtools=!0,a.default.use(l.default),a.default.use(d.default),a.default.http.interceptors.push(function(e,t){var o;e._timeout&&(o=setTimeout(function(){t(e.respondWith(e.body,{status:408,statusText:"Request Timeout"}))},e._timeout)),t(function(e){clearTimeout(o)})});var g=[{path:"/",component:f.default},{path:"/HighSchoolList",component:_.default}],w=new l.default({history:!1,hashbang:!0,routes:g});w.beforeEach(function(e,t,o){o()});new a.default({router:w,el:"#app",render:function(e){return e(r.default)}})},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={userId:"",token:"",userAccount:"",provinceCode:"330000",provinceName:"浙江省",highSchool:null,highYear:null,userAvatar:null,sex:null,userName:null,http:null};t.default=o},2:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.API_SERVER="http://www.tzhiyuan.net/v2_1/client/",n=t.WEB_URL="http://www.tzhiyuan.net/v2_1/mobile/",i=t.STATIC_URL="http://www.tzhiyuan.net/";t.URL_APPOINTMENT_LIST=o+"{province}/tzy/appointment/all",t.URL_APPOINTMENT_TYPES=o+"{province}/tzy/appointment/types",t.URL_COUPON_LIST=o+"{province}/profile/couponList",t.URL_PING_PAY=o+"{province}/pay",t.URL_SHARE=n+"{province}/profile/share?userId={uid}",t.URL_CREATE=o+"{province}/tzy/appointment/create",t.GET_COUPON=o+"coupon/dole",t.URL_SCORE_CONVERT=o+"{province}/tzy/plan/scoreChange",t.POST_COLLEGE=o+"{province}/data/college",t.ULR_GET_BANNER=o+"{province}/ad/banner",t.POST_SEARCH=o+"{province}/data/college/search",t.GET_COLDETAIL=o+"{province}/data/college/{collegeId}",t.ADD_LOVE=o+"{province}/profile/favor/college/add",t.DELETE_LOVE=o+"{province}/profile/favor/delete",t.GET_COLLOVE=o+"{province}/profile/favor/college",t.GET_MAJORLOVE=o+"{province}/profile/favor/major",t.POST_KEYMAJOR=o+"{province}/data/major/search",t.GET_MAJOR=o+"{province}/data/major/all",t.GET_MAJORDETAIL=o+"{province}/data/major",t.ADD_MAJORLOVE=o+"{province}/profile/favor/major/add",t.URL_GET_COLLEGE_MAJOR=o+"{province}/data/college/{collegeId}/category2018",t.URL_GET_SET_COLLEGE=o+"{province}/data/major/college",t.URL_GET_SET_MAJOR=o+"{province}/data/college/{collegeId}/majors",t.GET_COLLEGES_BY_SUBJECTS=o+"{province}/data/subject/search",t.GET_MAJOR_AND_SUBJECTS=o+"{province}/data/subject/{collegeId}",t.GET_SUBMAJORS=o+"{province}/data/major/category/{categoryId}",t.URL_WISH_CREATE=o+"{province}/tzy/plan/upgradeWishes/create",t.URL_WISH_DETIAL=o+"{province}/profile/plan/detail",t.GET_HISTORYPLAN=o+"{province}/profile/plan/list",t.GET_WISHPLAN_PARAMS=o+"{province}/profile/plan/param",t.GET_HIGHSCHOOL=o+"{province}/data/schools",t.PERFECTMSG=o+"{province}/profile/editInfo",t.URL_CREATE_ASSESSMENT=o+"{province}/tzy/plan/upgradeAssessment/create",t.GET_NOTIFYLIST=o+"{province}/profile/notifyList",t.GET_UNREADCOUNT=i+"api/common/getUnreadCount",t.GET_MAJORAD=o+"{province}/ad/major",t.URL_SET_HIGH_SCHOOL=o+"{province}/profile/school",t.ULR_GET_EXAM_DAY=o+"{province}/awayExamDay",t.ULR_IS_FILL_EXAM_INFO=o+"{province}/profile/isFillExamInfo",t.ULR_GET_EXAM_INFO=o+"{province}/profile/getExamInfo",t.ULR_GET_FILL_EXAM_INFO=o+"{province}/profile/fillExamInfo",t.ULR_GET_MAJOR_UNSCRAMBLE_LIST=o+"{province}/newsV3/majorUnscrambleList",t.ULR_GET_FIND_MAJOR_LIST=o+"{province}/newsV3/findMajorList",t.ULR_GET_FIND_UNSC_LIST=o+"{province}/newsV3/findUniversityList",t.ULR_GET_FIND_LEVEL_LIST=o+"{province}/newsV3/findLevelList",t.ULR_GET_MAJOR_UNSCRAMBLE_DETAIL=o+"{province}/newsV3/majorUnscrambleDetail",t.ULR_GET_FILL_POLIC_LIST=o+"{province}/newsV3/fillPolicList",t.ULR_GET_FILL_POLIC_DETAIL=o+"{province}/newsV3/fillPolicDetail",t.URL_WISH2018=o+"{province}/tzy/plan/wishes2018",t.URL_ACCESSMENT2018=o+"{province}/tzy/plan/accessment2018",t.URL_UNI_MAJOR=o+"{province}/data/subject/uni_major",t.URL_PREVIEW_CONTENT=o+"{province}/profile/plan/getPreViewContent"},3:function(e,t,o){var n,i;o(9),n=o(8);var a=o(10);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-b8c08860",e.exports=n},4:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.doPostJson=t.doGet=void 0;var i=o(17),a=n(i),s=o(18),r=n(s),c=o(1),l=n(c),u=o(5);t.doGet=function(e){e=e.replace("http://www.tzhiyuan.net","");var t=void 0;return new r.default(function(o,n){l.default.http({method:"get",url:e,_timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId}}).then(function(e){return t=e.ok,e.json()}).then(function(e){t&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html":o(e):("1001"!=e.code&&"1026"!=e.code&&"1025"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html"),n(e))}).catch(function(e){n(e)})})},t.doPostJson=function(e,t){e=e.replace("http://www.tzhiyuan.net","");var o=void 0;return new r.default(function(n,i){l.default.http({method:"post",url:e,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId},_timeout:3e4,body:(0,a.default)(t)}).then(function(e){return o=e.ok,e.json()}).then(function(e){o&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html":n(e):("1001"!=e.code&&"1026"!=e.code&&"1025"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html"),i(e))}).catch(function(e){i(e)})})}},5:function(e,t){"use strict";function o(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}function n(){a={versions:function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&e.indexOf("KHTML")==-1,mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,webApp:e.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}}function i(){return null==a&&n(),a.versions.ios||a.versions.iPhone||a.versions.iPad?o()?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):(window.location="https://itunes.apple.com/cn/app/tao-zhi-yuan/id975982568?mt=8",!0):a.versions.android?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.isWeiXin=o,t.downloadApp=i;var a=void 0},6:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(){var e=localStorage.TzyUserId;if(null==e||""==e)return!1;var t={TzyUserId:"userId",TzyUserToken:"token",TzyUserAccount:"userAccount",TzyUserProvinceCode:"provinceCode",TzyUserProvinceName:"provinceName",TzyHighSchool:"highSchool",TzyHighschoolstarttime:"highYear",TzyUserPhoto:"userAvatar",TzyUserSex:"sex",TzyUserName:"userName"};for(var o in t)localStorage[o]&&(r.default[t[o]]=localStorage[o]);return!0}function a(){var e=localStorage.TzyUserName;if(!e)return!1;var t=localStorage.TzyUserSex;if(!t)return!1;if("0"==t)return!1;var o=localStorage.TzyHighschoolstarttime;if(!o||"0"==o)return!1;var n=localStorage.TzyHighSchool;return!!n}Object.defineProperty(t,"__esModule",{value:!0}),t.readUserInfoFromLocalStorage=i,t.checkPersonInfoComplete=a;var s=o(1),r=n(s)},8:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{leftOptions:{type:Object,default:function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):history.back()}}}},9:function(e,t){},10:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vux-header"},[o("div",{staticClass:"vux-header-left"},[o("a",{directives:[{name:"show",rawName:"v-show",value:e.leftOptions.showBack,expression:"leftOptions.showBack"}],staticClass:"vux-header-back",attrs:{transition:e.transition},on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(e.leftOptions.backText))]),e._v(" "),e._t("left")],2),e._v(" "),o("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],attrs:{transition:e.transition}},[e._v(e._s(e.title))]),e._t("default")],2),e._v(" "),o("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?o("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},11:function(e,t){},13:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(7),a=n(i);t.default=new a.default},16:function(e,t){},20:function(e,t){},22:function(e,t){},38:function(e,t){},46:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.setHighSchool=t.getUnreadCount=t.getNotifyList=t.perfectMsg=t.getHighSchoolList=t.getDays=t.getBanner=void 0;var a=o(2),s=i(a),r=o(4),c=o(1),l=n(c);t.getBanner=function(){var e=s.ULR_GET_BANNER.replace("{province}",l.default.provinceCode);return(0,r.doGet)(e)},t.getDays=function(){var e=s.ULR_GET_EXAM_DAY.replace("{province}",l.default.provinceCode);return(0,r.doGet)(e)},t.getHighSchoolList=function(e,t){var o=s.GET_HIGHSCHOOL.replace("{province}",l.default.provinceCode),n={page:e,capacity:20,keyword:t};return(0,r.doPostJson)(o,n)},t.perfectMsg=function(e,t,o,n){var i=s.PERFECTMSG.replace("{province}",l.default.provinceCode),a={name:e,gender:t,highSchoolYear:o,highSchoolId:n};return(0,r.doPostJson)(i,a)},t.getNotifyList=function(e){var t=s.GET_NOTIFYLIST.replace("{province}",l.default.provinceCode),o={pageNo:e,pageSize:10};return(0,r.doPostJson)(t,o)},t.getUnreadCount=function(e){var t=s.GET_UNREADCOUNT+"?userId="+e+"&type=2";return(0,r.doGet)(t)},t.setHighSchool=function(e){var t=s.URL_SET_HIGH_SCHOOL.replace("{province}",l.default.provinceCode),o={schoolId:e};return(0,r.doPostJson)(t,o)}},64:function(e,t){},126:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(50),a=n(i),s=o(22),r=(n(s),o(44)),c=n(r),l=o(11),u=(n(l),o(14)),d=n(u),h=o(16),p=(n(h),o(40)),f=n(p),v=o(38),_=(n(v),o(57)),g=n(_),w=o(7),m=n(w),y=o(3),S=n(y),T=o(46),L=o(13),E=n(L),x=o(46),C=o(1);n(C);m.default.use(g.default),t.default={name:"HighSchoolList",components:{THeader:S.default,InfiniteScroll:g.default,Spinner:f.default,Toast:d.default},data:function(){return{searchHighSchool:null,search:!1,busy:!0,loading:!1,page:1,keywords:"",schoolList:[],schools:[],showspinner:!1}},watch:{searchHighSchool:function(e){this.schoolList.splice(0),this.page=1,this.keywords=this.searchHighSchool,this.loadMore()}},methods:{selectedHighSchool:function(e){this.$route?(E.default.$emit("on-select-highschool",e.name,e.code),this.$router.push("/")):(c.default.open("正在提交数据，请稍后..."),(0,x.setHighSchool)(e.code).then(function(t){c.default.close(),localStorage.TzyHighSchool=e.code,(0,d.default)("设置成功"),window.location.href="/tzywx/tzy/PersonInfo.html"}).catch(function(e){c.default.close(),"object"==("undefined"==typeof e?"undefined":(0,a.default)(e))&&e.hasOwnProperty("code")?(0,d.default)(e.msg):(0,d.default)("数据提交失败，请重试")}))},startSearch:function(){this.search=!0},canclesearch:function(){this.search=!1,this.schoolList.splice(0),this.page=1,this.searchHighSchool=null,this.keywords="",this.loadMore()},searching:function(){},loadMore:function(){var e=this;this.showspinner=!0,(0,T.getHighSchoolList)(this.page,this.keywords).then(function(t){e.showspinner=!1,e.schools=t.result.schools;for(var o=(e.schoolList[e.schoolList.length-1],0);o<e.schools.length;o++)e.schoolList.push(e.schools[o]);0==e.schools.length&&(0,d.default)("无对应院校～"),e.page+=1}).catch(function(t){e.loading=!0,e.showspinner=!1})},getHighSchool:function(){var e=this;this.showspinner=!0,(0,T.getHighSchoolList)(this.page,this.keywords).then(function(t){e.showspinner=!1,e.schoolList=t.result.schools}).catch(function(t){e.showspinner=!1,(0,d.default)("加载失败")})}},created:function(){this.getHighSchool()}}},133:function(e,t){},152:function(e,t,o){var n,i;o(133),n=o(126);var a=o(155);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-01b91e6c",e.exports=n},155:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"highSchoolList"},[o("div",{staticClass:"header-box"},[o("t-header",{attrs:{"left-options":{showBack:!0}}},[e._v("\n\t\t\t\t选择高中\n\t\t\t")])],1),e._v(" "),o("div",{staticClass:"searching"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchHighSchool,expression:"searchHighSchool"}],attrs:{type:"text",name:"searching",placeholder:"请输入高中名称关键字"},domProps:{value:e.searchHighSchool},on:{input:function(t){t.target.composing||(e.searchHighSchool=t.target.value)}}}),e._v(" "),o("span",{staticClass:"searchicon",on:{click:e.searching}}),e._v(" "),o("span",{staticClass:"cancle",on:{click:e.canclesearch}},[e._v("取消")])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.search,expression:"!search"}],staticClass:"searching",on:{click:e.startSearch}},[o("label",[o("span",{staticClass:"searchicon-mid",on:{click:e.searching}}),o("span",{staticClass:"searchtip"},[e._v("请输入高中名称关键字")])])]),e._v(" "),o("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"listContainer",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"5","infinite-scroll-immediate-check":"busy"}},[e._l(e.schoolList,function(t){return o("div",{staticClass:"listItem",on:{click:function(o){e.selectedHighSchool(t)}}},[o("label",[e._v(e._s(t.name))])])}),e._v(" "),o("spinner",{directives:[{name:"show",rawName:"v-show",value:e.showspinner,expression:"showspinner"}],staticClass:"spinner",attrs:{type:"triple-bounce",color:"#65C0E0",size:50}})],2)])},staticRenderFns:[]}},196:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});for(var i=o(11),a=(n(i),o(14)),s=n(a),r=o(64),c=(n(r),o(112)),l=n(c),u=o(3),d=n(u),h=o(46),p=o(1),f=(n(p),o(13)),v=n(f),_=(new Date).getFullYear(),g=[],w=2013;w<_;w++)g.push(String(w));t.default={name:"perfectMsg",components:{THeader:d.default,Picker:l.default,Toast:s.default},data:function(){return{username:null,selectedsex:null,selectedyear:null,iselectedsex:"男",iselectedyear:"2013",showSex:!1,showYear:!1,sex:[{flex:1,values:["男","女"],className:"sex",textAlign:"center"}],year:[{flex:1,values:g,className:"year",textAlign:"center"}],schoolname:null,schoolcode:null}},methods:{onClickBack:function(){location.href="index.html"},submitMsg:function(){var e=this,t=void 0;return t="男"==this.selectedsex?1:2,null==this.username||""==this.username?void(0,s.default)("请填写姓名"):null==t||""==t?void(0,s.default)("请选择性别"):null==this.schoolcode||""==this.schoolcode?void(0,s.default)("请选择高中"):null==this.selectedyear||""==this.selectedyear?void(0,s.default)("请选择入学年份"):void(0,h.perfectMsg)(this.username,t,Number(this.selectedyear),this.schoolcode).then(function(o){(0,s.default)("提交成功"),localStorage.TzyUserName=e.username,localStorage.TzyUserSex=t,localStorage.TzyHighSchool=e.schoolname,localStorage.TzyHighSchoolCode=e.schoolcode,localStorage.TzyHighschoolstarttime=e.selectedyear,location.href="index.html"}).then(function(e){})},hidePicker:function(){this.showSex=!1,this.showYear=!1},openSexPicker:function(){this.hidePicker(),this.showSex=!0},openYearPicker:function(){this.hidePicker(),this.showYear=!0},selectSex:function(){this.selectedsex=this.iselectedsex,this.showSex=!1},selectYear:function(){this.selectedyear=this.iselectedyear,this.showYear=!1},onValuesChangeYear:function(e,t){this.iselectedyear=t[0]},onValuesChangeSex:function(e,t){this.iselectedsex=t[0]},gotoSelectHighSchool:function(){this.$router.push("HighSchoolList")},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?decodeURI(o[2]):null}},created:function(){v.default.$on("on-select-highschool",function(e,t){this.schoolname=e,this.schoolcode=t}.bind(this));var e=localStorage.TzyUserName;e&&(this.username=e);var t=localStorage.TzyUserSex;t&&"0"!=t&&(this.selectedsex=t);var o=localStorage.TzyHighschoolstarttime;o&&"0"!=o&&(this.selectedyear=o)}}},230:function(e,t){},258:function(e,t,o){var n,i;o(230),n=o(196);var a=o(279);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-b4e1232c",e.exports=n},279:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"perfectMsg"},[o("div",{staticClass:"header-box"},[o("t-header",{attrs:{"left-options":{preventGoBack:!0,backText:"",showBack:!0}},on:{"on-click-back":e.onClickBack}},[e._v("\n\t\t\t完善信息\n\t\t")])],1),e._v(" "),o("div",{staticClass:"msgContainer"},[o("div",{staticClass:"msglist"},[o("label",[e._v("姓名")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"请输入"},domProps:{value:e.username},on:{click:e.hidePicker,input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"msglist"},[o("label",[e._v("性别")]),e._v(" "),o("input",{attrs:{type:"text",name:"sex",readonly:"",placeholder:"请选择"},domProps:{value:e.selectedsex},on:{click:e.openSexPicker}})]),e._v(" "),o("div",{staticClass:"msglist"},[o("label",[e._v("高中")]),e._v(" "),o("input",{attrs:{type:"text",name:"highschool",readonly:"",placeholder:"请选择"},domProps:{value:e.schoolname},on:{click:e.gotoSelectHighSchool}})]),e._v(" "),o("div",{staticClass:"msglist"},[o("label",[e._v("入学年份")]),e._v(" "),o("input",{attrs:{type:"text",name:"year",readonly:"",placeholder:"请选择"},domProps:{value:e.selectedyear},on:{click:e.openYearPicker}})])]),e._v(" "),o("div",{staticClass:"submitBtn"},[o("button",{on:{click:e.submitMsg}},[e._v("提交")])]),e._v(" "),o("div",{staticClass:"mask",on:{click:e.hidePicker}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showSex,expression:"showSex"}],staticClass:"pickerContainer"},[o("div",{staticClass:"pickerTitle"},[o("label",{on:{click:e.selectSex}},[e._v("确定")])]),e._v(" "),o("picker",{attrs:{slots:e.sex},on:{change:e.onValuesChangeSex}})],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showYear,expression:"showYear"}],staticClass:"pickerContainer"},[o("div",{staticClass:"pickerTitle"},[o("label",{on:{click:e.selectYear}},[e._v("确定")])]),e._v(" "),o("picker",{attrs:{slots:e.year},on:{change:e.onValuesChangeYear}})],1)])},staticRenderFns:[]}},338:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),a=n(i),s=o(6);t.default={name:"perfectMsgH",data:function(){return{}},created:function(){(0,s.readUserInfoFromLocalStorage)();a.default.http=this.$http}},document.body.addEventListener("touchstart",function(){})},427:function(e,t){},574:function(e,t,o){var n,i;o(427),n=o(338);var a=o(611);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=n},611:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("keep-alive",[o("router-view")],1)],1)},staticRenderFns:[]}}});