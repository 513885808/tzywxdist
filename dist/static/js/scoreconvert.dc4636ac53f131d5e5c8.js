webpackJsonp([25,0],{0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=o(7),r=n(i),a=o(557),s=n(a),c=o(19),l=n(c);r.default.use(l.default),r.default.http.interceptors.push(function(e,t){var o;e._timeout&&(o=setTimeout(function(){t(e.respondWith(e.body,{status:408,statusText:"Request Timeout"}))},e._timeout)),t(function(e){clearTimeout(o)})});new r.default({el:"#app",render:function(e){return e(s.default)}})},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={userId:"",token:"",userAccount:"",provinceCode:"330000",provinceName:"浙江省",highSchool:null,highYear:null,userAvatar:null,sex:null,userName:null,http:null};t.default=o},2:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.API_SERVER="http://www.tzhiyuan.net/v2_1/client/",n=t.WEB_URL="http://www.tzhiyuan.net/v2_1/mobile/",i=t.STATIC_URL="http://www.tzhiyuan.net/";t.URL_APPOINTMENT_LIST=o+"{province}/tzy/appointment/all",t.URL_APPOINTMENT_TYPES=o+"{province}/tzy/appointment/types",t.URL_COUPON_LIST=o+"{province}/profile/couponList",t.URL_PING_PAY=o+"{province}/pay",t.URL_SHARE=n+"{province}/profile/share?userId={uid}",t.URL_CREATE=o+"{province}/tzy/appointment/create",t.GET_COUPON=o+"coupon/dole",t.URL_SCORE_CONVERT=o+"{province}/tzy/plan/scoreChange",t.POST_COLLEGE=o+"{province}/data/college",t.ULR_GET_BANNER=o+"{province}/ad/banner",t.POST_SEARCH=o+"{province}/data/college/search",t.GET_COLDETAIL=o+"{province}/data/college/{collegeId}",t.ADD_LOVE=o+"{province}/profile/favor/college/add",t.DELETE_LOVE=o+"{province}/profile/favor/delete",t.GET_COLLOVE=o+"{province}/profile/favor/college",t.GET_MAJORLOVE=o+"{province}/profile/favor/major",t.POST_KEYMAJOR=o+"{province}/data/major/search",t.GET_MAJOR=o+"{province}/data/major/all",t.GET_MAJORDETAIL=o+"{province}/data/major",t.ADD_MAJORLOVE=o+"{province}/profile/favor/major/add",t.URL_GET_COLLEGE_MAJOR=o+"{province}/data/college/{collegeId}/category2018",t.URL_GET_SET_COLLEGE=o+"{province}/data/major/college",t.URL_GET_SET_MAJOR=o+"{province}/data/college/{collegeId}/majors",t.GET_COLLEGES_BY_SUBJECTS=o+"{province}/data/subject/search",t.GET_MAJOR_AND_SUBJECTS=o+"{province}/data/subject/{collegeId}",t.GET_SUBMAJORS=o+"{province}/data/major/category/{categoryId}",t.URL_WISH_CREATE=o+"{province}/tzy/plan/upgradeWishes/create",t.URL_WISH_DETIAL=o+"{province}/profile/plan/detail",t.GET_HISTORYPLAN=o+"{province}/profile/plan/list",t.GET_WISHPLAN_PARAMS=o+"{province}/profile/plan/param",t.GET_HIGHSCHOOL=o+"{province}/data/schools",t.PERFECTMSG=o+"{province}/profile/editInfo",t.URL_CREATE_ASSESSMENT=o+"{province}/tzy/plan/upgradeAssessment/create",t.GET_NOTIFYLIST=o+"{province}/profile/notifyList",t.GET_UNREADCOUNT=i+"api/common/getUnreadCount",t.GET_MAJORAD=o+"{province}/ad/major",t.URL_SET_HIGH_SCHOOL=o+"{province}/profile/school",t.ULR_GET_EXAM_DAY=o+"{province}/awayExamDay",t.ULR_IS_FILL_EXAM_INFO=o+"{province}/profile/isFillExamInfo",t.ULR_GET_EXAM_INFO=o+"{province}/profile/getExamInfo",t.ULR_GET_FILL_EXAM_INFO=o+"{province}/profile/fillExamInfo",t.ULR_GET_MAJOR_UNSCRAMBLE_LIST=o+"{province}/newsV3/majorUnscrambleList",t.ULR_GET_FIND_MAJOR_LIST=o+"{province}/newsV3/findMajorList",t.ULR_GET_FIND_UNSC_LIST=o+"{province}/newsV3/findUniversityList",t.ULR_GET_FIND_LEVEL_LIST=o+"{province}/newsV3/findLevelList",t.ULR_GET_MAJOR_UNSCRAMBLE_DETAIL=o+"{province}/newsV3/majorUnscrambleDetail",t.ULR_GET_FILL_POLIC_LIST=o+"{province}/newsV3/fillPolicList",t.ULR_GET_FILL_POLIC_DETAIL=o+"{province}/newsV3/fillPolicDetail",t.URL_WISH2018=o+"{province}/tzy/plan/wishes2018",t.URL_ACCESSMENT2018=o+"{province}/tzy/plan/accessment2018",t.URL_UNI_MAJOR=o+"{province}/data/subject/uni_major",t.URL_PREVIEW_CONTENT=o+"{province}/profile/plan/getPreViewContent"},3:function(e,t,o){var n,i;o(9),n=o(8);var r=o(10);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-b8c08860",e.exports=n},4:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.doPostJson=t.doGet=void 0;var i=o(17),r=n(i),a=o(18),s=n(a),c=o(1),l=n(c),u=o(5);l.default.userId||(l.default.userId="74023",l.default.token="717e96d96b53535481b0517871db9a88");t.doGet=function(e){e=e.replace("http://www.tzhiyuan.net","");var t=void 0;return new s.default(function(o,n){l.default.http({method:"get",url:e,_timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId}}).then(function(e){return t=e.ok,e.json()}).then(function(e){t&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html":o(e):("1001"!=e.code&&"1026"!=e.code&&"1025"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html"),n(e))}).catch(function(e){n(e)})})},t.doPostJson=function(e,t){e=e.replace("http://www.tzhiyuan.net","");var o=void 0;return new s.default(function(n,i){l.default.http({method:"post",url:e,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId},_timeout:3e4,body:(0,r.default)(t)}).then(function(e){return o=e.ok,e.json()}).then(function(e){o&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html":n(e):("1001"!=e.code&&"1026"!=e.code&&"1025"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/login/login.html"),i(e))}).catch(function(e){i(e)})})}},5:function(e,t){"use strict";function o(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}function n(){r={versions:function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&e.indexOf("KHTML")==-1,mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,webApp:e.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}}function i(){return null==r&&n(),r.versions.ios||r.versions.iPhone||r.versions.iPad?o()?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):(window.location="https://itunes.apple.com/cn/app/tao-zhi-yuan/id975982568?mt=8",!0):r.versions.android?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.isWeiXin=o,t.downloadApp=i;var r=void 0},6:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(){var e=localStorage.TzyUserId;if(null==e||""==e)return!1;var t={TzyUserId:"userId",TzyUserToken:"token",TzyUserAccount:"userAccount",TzyUserProvinceCode:"provinceCode",TzyUserProvinceName:"provinceName",TzyHighSchool:"highSchool",TzyHighschoolstarttime:"highYear",TzyUserPhoto:"userAvatar",TzyUserSex:"sex",TzyUserName:"userName"};for(var o in t)localStorage[o]&&(s.default[t[o]]=localStorage[o]);return!0}function r(){var e=localStorage.TzyUserName;if(!e)return!1;var t=localStorage.TzyUserSex;if(!t)return!1;if("0"==t)return!1;var o=localStorage.TzyHighschoolstarttime;if(!o||"0"==o)return!1;var n=localStorage.TzyHighSchool;return!!n}Object.defineProperty(t,"__esModule",{value:!0}),t.readUserInfoFromLocalStorage=i,t.checkPersonInfoComplete=r;var a=o(1),s=n(a)},8:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{leftOptions:{type:Object,default:function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):history.back()}}}},9:function(e,t){},10:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vux-header"},[o("div",{staticClass:"vux-header-left"},[o("a",{directives:[{name:"show",rawName:"v-show",value:e.leftOptions.showBack,expression:"leftOptions.showBack"}],staticClass:"vux-header-back",attrs:{transition:e.transition},on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(e.leftOptions.backText))]),e._v(" "),e._t("left")],2),e._v(" "),o("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],attrs:{transition:e.transition}},[e._v(e._s(e.title))]),e._t("default")],2),e._v(" "),o("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?o("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},11:function(e,t){},15:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(){var e=window.location.search;e||(e=""),e.indexOf("?")!=-1&&(e=e.substr(1));var t=e.split("&"),o={},n=!0,i=!1,r=void 0;try{for(var s,c=(0,a.default)(t);!(n=(s=c.next()).done);n=!0){var l=s.value,u=l.split("=");o[u[0]]=u[1]}}catch(e){i=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw r}}return o}Object.defineProperty(t,"__esModule",{value:!0});var r=o(42),a=n(r);t.getQueryParams=i},20:function(e,t){},69:function(e,t,o){e.exports=o.p+"static/img/icon.0e99841.png"},327:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(11),r=(n(i),o(14)),a=n(r),s=o(1),c=n(s),l=o(382),u=o(3),d=n(u),p=o(15),f=o(5),v=o(6);t.default={name:"ScoreConvert",data:function(){return{showResult:!1,score:"",title:"",scoreArr:null,showTitle:!0,showBack:!1,showmask:!1}},components:{THeader:d.default},created:function(){(0,v.readUserInfoFromLocalStorage)();c.default.http=this.$http;var e=(0,p.getQueryParams)(),t=e.showTitle;void 0!=t&&"true"==t?this.showTitle=!0:this.showTitle=!1;var o=e.showBack;void 0!=o&&"true"==o?this.showBack=!0:this.showBack=!1},methods:{convertScore:function(){var e=this;if(!this.score)return void(0,a.default)("请输入2017年高考分数");var t=parseInt(this.score);return isNaN(t)||t>1e3||t<=0?void(0,a.default)("请输入正确的分数"):void(0,l.doConvertScore)(t).then(function(o){e.showResult=!0,e.title="%d分在2016年相应的分数".replace("%d",t),e.scoreArr=o.result}).catch(function(e){(0,a.default)("分数转换出错")})},download:function(){(0,f.downloadApp)()||(this.showmask=!0)},hideMask:function(){this.showmask=!1}}},document.body.addEventListener("touchstart",function(){})},382:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.doConvertScore=void 0;var r=o(17),a=(i(r),o(2)),s=n(a),c=o(4),l=o(1),u=i(l);t.doConvertScore=function(e){var t={score:e},o=s.URL_SCORE_CONVERT.replace("{province}",u.default.provinceCode);return(0,c.doPostJson)(o,t)}},466:function(e,t){},529:function(e,t,o){e.exports=o.p+"static/img/dz_title.bb99f3a.png"},557:function(e,t,o){var n,i;o(466),n=o(327);var r=o(649);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=n},649:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-header",{directives:[{name:"show",rawName:"v-show",value:e.showTitle,expression:"showTitle"}],attrs:{"left-options":{preventGoBack:!1,backText:"",showBack:e.showBack}}},[e._v("分数转换")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.score,expression:"score"}],staticClass:"score-input",attrs:{type:"number",placeholder:"请输入2017年高考分数"},domProps:{value:e.score},on:{input:function(t){t.target.composing||(e.score=t.target.value)},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("button",{staticClass:"convert-btn",on:{click:e.convertScore}},[e._v("转换")])]),e._v(" "),n("div",{staticStyle:{"margin-top":"14px"},style:{visibility:e.showResult?"visible":"hidden"}},[n("div",{staticStyle:{"text-align":"center","z-index":"1000",position:"relative"}},[n("img",{staticClass:"title-img",attrs:{src:o(529)}}),e._v(" "),n("span",{staticClass:"convert-title"},[e._v("\n            "+e._s(e.title)+"\n          ")])]),e._v(" "),n("div",{staticClass:"score-container"},[n("div",[n("span",{staticClass:"score-label"},[e._v("\n                  总分一（第一批）：\n                ")]),e._v(" "),n("span",{staticClass:"score"},[e._v("\n                  "+e._s(null!=e.scoreArr&&e.scoreArr.length>0?e.scoreArr[0].score:"")+"分\n                ")])]),e._v(" "),n("div",[n("span",{staticClass:"score-label"},[e._v("\n                  总分二（第二批）：\n                ")]),e._v(" "),n("span",{staticClass:"score"},[e._v("\n                  "+e._s(null!=e.scoreArr&&e.scoreArr.length>1?e.scoreArr[1].score:"")+"分\n                ")])]),e._v(" "),n("div",[n("span",{staticClass:"score-label"},[e._v("\n                  总分三（第三批）：\n                ")]),e._v(" "),n("span",{staticClass:"score"},[e._v("\n                  "+e._s(null!=e.scoreArr&&e.scoreArr.length>2?e.scoreArr[2].score:"")+"分\n                ")])])])]),e._v(" "),n("div",{staticStyle:{"text-align":"center",color:"#999999","font-size":"16px","margin-top":"-15px"}},[e._v("\n      分数转换了，你才能更好地使用数据库\n    ")]),e._v(" "),e.showTitle?n("div",{staticStyle:{position:"absolute",bottom:"0",width:"100%",height:"55px","background-color":"#ffffff"}},[n("img",{staticClass:"icon",attrs:{src:o(69)}}),e._v(" "),n("span",{staticClass:"slogan"},[e._v("淘志愿")]),e._v(" "),n("button",{staticClass:"download",on:{click:e.download}},[e._v("立即下载")])]):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showmask,expression:"showmask"}],staticClass:"mask",on:{click:e.hideMask}},[e._m(0)])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"padding-right":"20px","padding-top":"10px"}},[e._v("\n    点击右上角按钮，"),o("br"),e._v("\n    选择“在Safari中打开”"),o("br"),e._v("\n    才可以下载哦~\n    ")])}]}}});