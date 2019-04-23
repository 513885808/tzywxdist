webpackJsonp([26,0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(6),r=o(i),a=n(543),s=o(a),c=n(19),l=o(c);r.default.use(l.default),r.default.http.interceptors.push(function(e,t){var n;e._timeout&&(n=setTimeout(function(){t(e.respondWith(e.body,{status:408,statusText:"Request Timeout"}))},e._timeout)),t(function(e){clearTimeout(n)})});new r.default({el:"#app",render:function(e){return e(s.default)}})},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={userId:"",token:"",userAccount:"",provinceCode:"330000",provinceName:"浙江省",highSchool:null,highYear:null,userAvatar:null,sex:null,userName:null,http:null};t.default=n},2:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.API_SERVER="http://www.tzhiyuan.net/v2_1/client/",o=t.WEB_URL="http://www.tzhiyuan.net/v2_1/mobile/",i=t.STATIC_URL="http://www.tzhiyuan.net/";t.URL_APPOINTMENT_LIST=n+"{province}/tzy/appointment/all",t.URL_APPOINTMENT_TYPES=n+"{province}/tzy/appointment/types",t.URL_COUPON_LIST=n+"{province}/profile/couponList",t.URL_PING_PAY=n+"{province}/pay",t.URL_SHARE=o+"{province}/profile/share?userId={uid}",t.URL_CREATE=n+"{province}/tzy/appointment/create",t.GET_COUPON=n+"coupon/dole",t.URL_SCORE_CONVERT=n+"{province}/tzy/plan/scoreChange",t.POST_COLLEGE=n+"{province}/data/college",t.ULR_GET_BANNER=n+"{province}/ad/banner",t.POST_SEARCH=n+"{province}/data/college/search",t.GET_COLDETAIL=n+"{province}/data/college/{collegeId}",t.ADD_LOVE=n+"{province}/profile/favor/college/add",t.DELETE_LOVE=n+"{province}/profile/favor/delete",t.GET_COLLOVE=n+"{province}/profile/favor/college",t.GET_MAJORLOVE=n+"{province}/profile/favor/major",t.POST_KEYMAJOR=n+"{province}/data/major/search",t.GET_MAJOR=n+"{province}/data/major/all",t.GET_MAJORDETAIL=n+"{province}/data/major",t.ADD_MAJORLOVE=n+"{province}/profile/favor/major/add",t.URL_GET_COLLEGE_MAJOR=n+"{province}/data/college/{collegeId}/category2018",t.URL_GET_SET_COLLEGE=n+"{province}/data/major/college",t.URL_GET_SET_MAJOR=n+"{province}/data/college/{collegeId}/majors",t.GET_COLLEGES_BY_SUBJECTS=n+"{province}/data/subject/search",t.GET_MAJOR_AND_SUBJECTS=n+"{province}/data/subject/{collegeId}",t.GET_SUBMAJORS=n+"{province}/data/major/category/{categoryId}",t.URL_WISH_CREATE=n+"{province}/tzy/plan/upgradeWishes/create",t.URL_WISH_DETIAL=n+"{province}/profile/plan/detail",t.GET_HISTORYPLAN=n+"{province}/profile/plan/list",t.GET_WISHPLAN_PARAMS=n+"{province}/profile/plan/param",t.GET_HIGHSCHOOL=n+"{province}/data/schools",t.PERFECTMSG=n+"{province}/profile/editInfo",t.URL_CREATE_ASSESSMENT=n+"{province}/tzy/plan/upgradeAssessment/create",t.GET_NOTIFYLIST=n+"{province}/profile/notifyList",t.GET_UNREADCOUNT=i+"api/common/getUnreadCount",t.GET_MAJORAD=n+"{province}/ad/major",t.URL_SET_HIGH_SCHOOL=n+"{province}/profile/school",t.ULR_GET_EXAM_DAY=n+"{province}/awayExamDay",t.ULR_IS_FILL_EXAM_INFO=n+"{province}/profile/isFillExamInfo",t.ULR_GET_EXAM_INFO=n+"{province}/profile/getExamInfo",t.ULR_GET_FILL_EXAM_INFO=n+"{province}/profile/fillExamInfo",t.ULR_GET_MAJOR_UNSCRAMBLE_LIST=n+"{province}/newsV3/majorUnscrambleList",t.ULR_GET_FIND_MAJOR_LIST=n+"{province}/newsV3/findMajorList",t.ULR_GET_FIND_UNSC_LIST=n+"{province}/newsV3/findUniversityList",t.ULR_GET_FIND_LEVEL_LIST=n+"{province}/newsV3/findLevelList",t.ULR_GET_MAJOR_UNSCRAMBLE_DETAIL=n+"{province}/newsV3/majorUnscrambleDetail",t.ULR_GET_FILL_POLIC_LIST=n+"{province}/newsV3/fillPolicList",t.ULR_GET_FILL_POLIC_DETAIL=n+"{province}/newsV3/fillPolicDetail",t.URL_WISH2018=n+"{province}/tzy/plan/wishes2018",t.URL_ACCESSMENT2018=n+"{province}/tzy/plan/accessment2018",t.URL_UNI_MAJOR=n+"{province}/data/subject/uni_major",t.URL_PREVIEW_CONTENT=n+"{province}/profile/plan/getPreViewContent"},3:function(e,t,n){var o,i;n(8),o=n(7);var r=n(9);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-52bfcd15",e.exports=o},4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.doPostJson=t.doGet=void 0;var i=n(17),r=o(i),a=n(18),s=o(a),c=n(1),l=o(c),u=n(5);t.doGet=function(e){e=e.replace("http://www.tzhiyuan.net","");var t=void 0;return new s.default(function(n,o){l.default.http({method:"get",url:e,_timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId}}).then(function(e){return t=e.ok,e.json()}).then(function(e){t&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/wxweb/login":n(e):("1001"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/wxweb/login"),o(e))}).catch(function(e){o(e)})})},t.doPostJson=function(e,t){e=e.replace("http://www.tzhiyuan.net","");var n=void 0;return new s.default(function(o,i){l.default.http({method:"post",url:e,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId},_timeout:3e4,body:(0,r.default)(t)}).then(function(e){return n=e.ok,e.json()}).then(function(e){n&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="/tzywx/wxweb/login":o(e):("1001"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,u.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="/tzywx/wxweb/login"),i(e))}).catch(function(e){i(e)})})}},5:function(e,t){"use strict";function n(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}function o(){r={versions:function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&e.indexOf("KHTML")==-1,mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,webApp:e.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}}function i(){return null==r&&o(),r.versions.ios||r.versions.iPhone||r.versions.iPad?n()?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):(window.location="https://itunes.apple.com/cn/app/tao-zhi-yuan/id975982568?mt=8",!0):r.versions.android?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.isWeiXin=n,t.downloadApp=i;var r=void 0},7:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{leftOptions:{type:Object,default:function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):history.back()}}}},8:function(e,t){},9:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[n("a",{directives:[{name:"show",rawName:"v-show",value:e.leftOptions.showBack,expression:"leftOptions.showBack"}],staticClass:"vux-header-back",attrs:{transition:e.transition},on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(e.leftOptions.backText))]),e._v(" "),e._t("left")],2),e._v(" "),n("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],attrs:{transition:e.transition}},[e._v(e._s(e.title))]),e._t("default")],2),e._v(" "),n("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},11:function(e,t){},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(){var e=window.location.search;e||(e=""),e.indexOf("?")!=-1&&(e=e.substr(1));var t=e.split("&"),n={},o=!0,i=!1,r=void 0;try{for(var s,c=(0,a.default)(t);!(o=(s=c.next()).done);o=!0){var l=s.value,u=l.split("=");n[u[0]]=u[1]}}catch(e){i=!0,r=e}finally{try{!o&&c.return&&c.return()}finally{if(i)throw r}}return n}Object.defineProperty(t,"__esModule",{value:!0});var r=n(41),a=o(r);t.getQueryParams=i},20:function(e,t){},69:function(e,t,n){e.exports=n.p+"static/img/icon.0e99841.png"},317:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),r=(o(i),n(14)),a=o(r),s=n(1),c=o(s),l=n(372),u=n(3),d=o(u),p=n(15),f=n(5);t.default={name:"ScoreConvert",data:function(){return{showResult:!1,score:"",title:"",scoreArr:null,showTitle:!0,showBack:!1,showmask:!1}},components:{THeader:d.default},created:function(){c.default.http=this.$http;var e=(0,p.getQueryParams)(),t=e.showTitle;void 0!=t&&"true"==t?this.showTitle=!0:this.showTitle=!1;var n=e.showBack;void 0!=n&&"true"==n?this.showBack=!0:this.showBack=!1},methods:{convertScore:function(){var e=this;if(!this.score)return void(0,a.default)("请输入2017年高考分数");var t=parseInt(this.score);return isNaN(t)||t>1e3||t<=0?void(0,a.default)("请输入正确的分数"):void(0,l.doConvertScore)(t).then(function(n){e.showResult=!0,e.title="%d分在2016年相应的分数".replace("%d",t),e.scoreArr=n.result}).catch(function(e){(0,a.default)("分数转换出错")})},download:function(){(0,f.downloadApp)()||(this.showmask=!0)},hideMask:function(){this.showmask=!1}}},document.body.addEventListener("touchstart",function(){})},372:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.doConvertScore=void 0;var r=n(17),a=(i(r),n(2)),s=o(a),c=n(4),l=n(1),u=i(l);t.doConvertScore=function(e){var t={score:e},n=s.URL_SCORE_CONVERT.replace("{province}",u.default.provinceCode);return(0,c.doPostJson)(n,t)}},460:function(e,t){},514:function(e,t,n){e.exports=n.p+"static/img/dz_title.bb99f3a.png"},543:function(e,t,n){var o,i;n(460),o=n(317);var r=n(633);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},633:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("t-header",{directives:[{name:"show",rawName:"v-show",value:e.showTitle,expression:"showTitle"}],attrs:{"left-options":{preventGoBack:!1,backText:"",showBack:e.showBack}}},[e._v("分数转换")]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.score,expression:"score"}],staticClass:"score-input",attrs:{type:"number",placeholder:"请输入2017年高考分数"},domProps:{value:e.score},on:{input:function(t){t.target.composing||(e.score=t.target.value)},blur:function(t){e.$forceUpdate()}}}),e._v(" "),o("button",{staticClass:"convert-btn",on:{click:e.convertScore}},[e._v("转换")])]),e._v(" "),o("div",{staticStyle:{"margin-top":"14px"},style:{visibility:e.showResult?"visible":"hidden"}},[o("div",{staticStyle:{"text-align":"center","z-index":"1000",position:"relative"}},[o("img",{staticClass:"title-img",attrs:{src:n(514)}}),e._v(" "),o("span",{staticClass:"convert-title"},[e._v("\n            "+e._s(e.title)+"\n          ")])]),e._v(" "),o("div",{staticClass:"score-container"},[o("div",[o("span",{staticClass:"score-label"},[e._v("\n                  总分一（第一批）：\n                ")]),e._v(" "),o("span",{staticClass:"score"},[e._v("\n                  "+e._s(null!=e.scoreArr&&e.scoreArr.length>0?e.scoreArr[0].score:"")+"分\n                ")])]),e._v(" "),o("div",[o("span",{staticClass:"score-label"},[e._v("\n                  总分二（第二批）：\n                ")]),e._v(" "),o("span",{staticClass:"score"},[e._v("\n                  "+e._s(null!=e.scoreArr&&e.scoreArr.length>1?e.scoreArr[1].score:"")+"分\n                ")])]),e._v(" "),o("div",[o("span",{staticClass:"score-label"},[e._v("\n                  总分三（第三批）：\n                ")]),e._v(" "),o("span",{staticClass:"score"},[e._v("\n                  "+e._s(null!=e.scoreArr&&e.scoreArr.length>2?e.scoreArr[2].score:"")+"分\n                ")])])])]),e._v(" "),o("div",{staticStyle:{"text-align":"center",color:"#999999","font-size":"16px","margin-top":"-15px"}},[e._v("\n      分数转换了，你才能更好地使用数据库\n    ")]),e._v(" "),e.showTitle?o("div",{staticStyle:{position:"absolute",bottom:"0",width:"100%",height:"55px","background-color":"#ffffff"}},[o("img",{staticClass:"icon",attrs:{src:n(69)}}),e._v(" "),o("span",{staticClass:"slogan"},[e._v("淘志愿")]),e._v(" "),o("button",{staticClass:"download",on:{click:e.download}},[e._v("立即下载")])]):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showmask,expression:"showmask"}],staticClass:"mask",on:{click:e.hideMask}},[e._m(0)])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"padding-right":"20px","padding-top":"10px"}},[e._v("\n    点击右上角按钮，"),n("br"),e._v("\n    选择“在Safari中打开”"),n("br"),e._v("\n    才可以下载哦~\n    ")])}]}}});