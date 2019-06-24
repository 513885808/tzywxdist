webpackJsonp([21,0],{0:function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=n(7),c=a(t),d=n(570),i=a(d),r=n(19),l=a(r);c.default.use(l.default),c.default.http.interceptors.push(function(e,o){var n;e._timeout&&(n=setTimeout(function(){o(e.respondWith(e.body,{status:408,statusText:"Request Timeout"}))},e._timeout)),o(function(e){clearTimeout(n)})});new c.default({el:"#app",render:function(e){return e(i.default)}})},1:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={userId:"",token:"",userAccount:"",provinceCode:"330000",provinceName:"浙江省",highSchool:null,highYear:null,userAvatar:null,sex:null,userName:null,http:null};o.default=n},2:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=o.API_SERVER="http://www.tzhiyuan.net/v2_1/client/",a=o.WEB_URL="http://www.tzhiyuan.net/v2_1/mobile/",t=o.STATIC_URL="http://www.tzhiyuan.net/";o.URL_APPOINTMENT_LIST=n+"{province}/tzy/appointment/all",o.URL_APPOINTMENT_TYPES=n+"{province}/tzy/appointment/types",o.URL_COUPON_LIST=n+"{province}/profile/couponList",o.URL_PING_PAY=n+"{province}/pay",o.URL_SHARE=a+"{province}/profile/share?userId={uid}",o.URL_CREATE=n+"{province}/tzy/appointment/create",o.GET_COUPON=n+"coupon/dole",o.URL_SCORE_CONVERT=n+"{province}/tzy/plan/scoreChange",o.POST_COLLEGE=n+"{province}/data/college",o.ULR_GET_BANNER=n+"{province}/ad/banner",o.POST_SEARCH=n+"{province}/data/college/search",o.GET_COLDETAIL=n+"{province}/data/college/{collegeId}",o.ADD_LOVE=n+"{province}/profile/favor/college/add",o.DELETE_LOVE=n+"{province}/profile/favor/delete",o.GET_COLLOVE=n+"{province}/profile/favor/college",o.GET_MAJORLOVE=n+"{province}/profile/favor/major",o.POST_KEYMAJOR=n+"{province}/data/major/search",o.GET_MAJOR=n+"{province}/data/major/all",o.GET_MAJORDETAIL=n+"{province}/data/major",o.ADD_MAJORLOVE=n+"{province}/profile/favor/major/add",o.URL_GET_COLLEGE_MAJOR=n+"{province}/data/college/{collegeId}/category2018",o.URL_GET_SET_COLLEGE=n+"{province}/data/major/college",o.URL_GET_SET_MAJOR=n+"{province}/data/college/{collegeId}/majors",o.GET_COLLEGES_BY_SUBJECTS=n+"{province}/data/subject/search",o.GET_MAJOR_AND_SUBJECTS=n+"{province}/data/subject/{collegeId}",o.GET_SUBMAJORS=n+"{province}/data/major/category/{categoryId}",o.URL_WISH_CREATE=n+"{province}/tzy/plan/upgradeWishes/create",o.URL_WISH_DETIAL=n+"{province}/profile/plan/detail",o.GET_HISTORYPLAN=n+"{province}/profile/plan/list",o.GET_WISHPLAN_PARAMS=n+"{province}/profile/plan/param",o.GET_HIGHSCHOOL=n+"{province}/data/schools",o.PERFECTMSG=n+"{province}/profile/editInfo",o.URL_CREATE_ASSESSMENT=n+"{province}/tzy/plan/upgradeAssessment/create",o.GET_NOTIFYLIST=n+"{province}/profile/notifyList",o.GET_UNREADCOUNT=t+"api/common/getUnreadCount",o.GET_MAJORAD=n+"{province}/ad/major",o.URL_SET_HIGH_SCHOOL=n+"{province}/profile/school",o.ULR_GET_EXAM_DAY=n+"{province}/awayExamDay",o.ULR_IS_FILL_EXAM_INFO=n+"{province}/profile/isFillExamInfo",o.ULR_GET_EXAM_INFO=n+"{province}/profile/getExamInfo",o.ULR_GET_FILL_EXAM_INFO=n+"{province}/profile/fillExamInfo",o.ULR_GET_MAJOR_UNSCRAMBLE_LIST=n+"{province}/newsV3/majorUnscrambleList",o.ULR_GET_FIND_MAJOR_LIST=n+"{province}/newsV3/findMajorList",o.ULR_GET_FIND_UNSC_LIST=n+"{province}/newsV3/findUniversityList",o.ULR_GET_FIND_LEVEL_LIST=n+"{province}/newsV3/findLevelList",o.ULR_GET_MAJOR_UNSCRAMBLE_DETAIL=n+"{province}/newsV3/majorUnscrambleDetail",o.ULR_GET_FILL_POLIC_LIST=n+"{province}/newsV3/fillPolicList",o.ULR_GET_FILL_POLIC_DETAIL=n+"{province}/newsV3/fillPolicDetail",o.URL_WISH2018=n+"{province}/tzy/plan/wishes2018",o.URL_ACCESSMENT2018=n+"{province}/tzy/plan/accessment2018",o.URL_UNI_MAJOR=n+"{province}/data/subject/uni_major",o.URL_PREVIEW_CONTENT=n+"{province}/profile/plan/getPreViewContent"},3:function(e,o,n){var a,t;n(9),a=n(8);var c=n(10);t=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(t=a=a.default),"function"==typeof t&&(t=t.options),t.render=c.render,t.staticRenderFns=c.staticRenderFns,t._scopeId="data-v-52bfcd15",e.exports=a},4:function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0}),o.doPostJson=o.doGet=void 0;var t=n(17),c=a(t),d=n(18),i=a(d),r=n(1),l=a(r),s=n(6);o.doGet=function(e){e=e.replace("http://www.tzhiyuan.net","");var o=void 0;return new i.default(function(n,a){l.default.http({method:"get",url:e,_timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId}}).then(function(e){return o=e.ok,e.json()}).then(function(e){o&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,s.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/wxweb/login":n(e):("1001"!=e.code&&"1025"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,s.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="http://www.tzhiyuan.net/tzywx/wxweb/login"),a(e))}).catch(function(e){a(e)})})},o.doPostJson=function(e,o){e=e.replace("http://www.tzhiyuan.net","");var n=void 0;return new i.default(function(a,t){l.default.http({method:"post",url:e,headers:{Accept:"application/json","Content-Type":"application/json",token:l.default.token,userId:l.default.userId},_timeout:3e4,body:(0,c.default)(o)}).then(function(e){return n=e.ok,e.json()}).then(function(e){n&&"1"==e.code?null==l.default.userId||""==l.default.userId||null==l.default.token||""==l.default.token?(0,s.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="/tzywx/wxweb/login":a(e):("1001"!=e.code&&null!=l.default.userId&&""!=l.default.userId&&null!=l.default.token&&""!=l.default.token||(alert("登录失效，请重新登录!"),(0,s.isWeiXin)()?window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbec99f8e442396e7&redirect_uri=http%3A%2F%2Fwww.tzhiyuan.net%2Ftzywx%2Fwxweb%2Flogin&response_type=code&scope=snsapi_base&state=gh_455583e37d8a":window.location.href="/tzywx/wxweb/login"),t(e))}).catch(function(e){t(e)})})}},5:function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function t(){var e=localStorage.TzyUserId;if(null==e||""==e)return!1;var o={TzyUserId:"userId",TzyUserToken:"token",TzyUserAccount:"userAccount",TzyUserProvinceCode:"provinceCode",TzyUserProvinceName:"provinceName",TzyHighSchool:"highSchool",TzyHighschoolstarttime:"highYear",TzyUserPhoto:"userAvatar",TzyUserSex:"sex",TzyUserName:"userName"};for(var n in o)localStorage[n]&&(i.default[o[n]]=localStorage[n]);return!0}function c(){var e=localStorage.TzyUserName;if(!e)return!1;var o=localStorage.TzyUserSex;if(!o)return!1;if("0"==o)return!1;var n=localStorage.TzyHighschoolstarttime;if(!n||"0"==n)return!1;var a=localStorage.TzyHighSchool;return!!a}Object.defineProperty(o,"__esModule",{value:!0}),o.readUserInfoFromLocalStorage=t,o.checkPersonInfoComplete=c;var d=n(1),i=a(d)},6:function(e,o){"use strict";function n(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}function a(){c={versions:function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&e.indexOf("KHTML")==-1,mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,webApp:e.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}}function t(){return null==c&&a(),c.versions.ios||c.versions.iPhone||c.versions.iPad?n()?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):(window.location="https://itunes.apple.com/cn/app/tao-zhi-yuan/id975982568?mt=8",!0):c.versions.android?(window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.theotino.gkzy",!0):void 0}Object.defineProperty(o,"__esModule",{value:!0}),o.isWeiXin=n,o.downloadApp=t;var c=void 0},8:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:{leftOptions:{type:Object,default:function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):history.back()}}}},9:function(e,o){},10:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[n("a",{directives:[{name:"show",rawName:"v-show",value:e.leftOptions.showBack,expression:"leftOptions.showBack"}],staticClass:"vux-header-back",attrs:{transition:e.transition},on:{click:[function(o){if(!("button"in o)&&e._k(o.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(e.leftOptions.backText))]),e._v(" "),e._t("left")],2),e._v(" "),n("h1",{staticClass:"vux-header-title",on:{click:function(o){e.$emit("on-click-title")}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],attrs:{transition:e.transition}},[e._v(e._s(e.title))]),e._t("default")],2),e._v(" "),n("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(o){if(!("button"in o)&&e._k(o.keyCode,"preventDefault"))return null},function(o){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},12:function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o.default=e,o}Object.defineProperty(o,"__esModule",{value:!0}),o.getMajorAd=o.getSubmajorOfBigMajor=o.getMajorAndSubject=o.getCollegeListBySubjects=o.postSetMajor=o.postSetCollege=o.getMajorCotegoryOfCollege=o.postMajorSearch=o.postAddMajor=o.getMajorDetail=o.getMajor=o.getKeyMajor=o.getMajorLove=o.getCollegeLove=o.postDeleteCollege=o.postAddCollege=o.getCollegeDetail=o.postCollegeSearch=o.postCollegeList=void 0;var c=n(2),d=t(c),i=n(4),r=n(1),l=a(r);o.postCollegeList=function(e){return(0,i.doPostJson)(d.POST_COLLEGE.replace("{province}",l.default.provinceCode),e)},o.postCollegeSearch=function(e){return(0,i.doPostJson)(d.POST_SEARCH.replace("{province}",l.default.provinceCode),e)},o.getCollegeDetail=function(e){var o;return o=d.GET_COLDETAIL.replace("{province}",l.default.provinceCode),o=o.replace("{collegeId}",e),(0,i.doGet)(o)},o.postAddCollege=function(e){return(0,i.doPostJson)(d.ADD_LOVE.replace("{province}",l.default.provinceCode),e)},o.postDeleteCollege=function(e){return(0,i.doPostJson)(d.DELETE_LOVE.replace("{province}",l.default.provinceCode),e)},o.getCollegeLove=function(){return(0,i.doGet)(d.GET_COLLOVE.replace("{province}",l.default.provinceCode))},o.getMajorLove=function(){return(0,i.doGet)(d.GET_MAJORLOVE.replace("{province}",l.default.provinceCode))},o.getKeyMajor=function(e){return(0,i.doPostJson)(d.POST_KEYMAJOR.replace("{province}",l.default.provinceCode))},o.getMajor=function(){return(0,i.doGet)(d.GET_MAJOR.replace("{province}",l.default.provinceCode))},o.getMajorDetail=function(e){var o=d.GET_MAJORDETAIL.replace("{province}",l.default.provinceCode);return o=o+"?majorId="+e,(0,i.doGet)(o)},o.postAddMajor=function(e){return(0,i.doPostJson)(d.ADD_MAJORLOVE.replace("{province}",l.default.provinceCode),e)},o.postMajorSearch=function(e){return(0,i.doPostJson)(d.POST_KEYMAJOR.replace("{province}",l.default.provinceCode),e)},o.getMajorCotegoryOfCollege=function(e,o){var n={subjects:o},a=d.URL_GET_COLLEGE_MAJOR.replace("{province}",l.default.provinceCode).replace("{collegeId}",e);return(0,i.doPostJson)(a,n)},o.postSetCollege=function(e,o,n,a,t,c){var r={majorId:e,province:o,year:n,batch:a,page:t,capacity:10,orderCondition:c},s=d.URL_GET_SET_COLLEGE.replace("{province}",l.default.provinceCode);return(0,i.doPostJson)(s,r)},o.postSetMajor=function(e,o,n,a,t,c){var r={province:o,year:n,batch:a,page:t,capacity:10,orderCondition:c},s=d.URL_GET_SET_MAJOR.replace("{province}",l.default.provinceCode).replace("{collegeId}",e);return(0,i.doPostJson)(s,r)},o.getCollegeListBySubjects=function(e,o){var n={page:o,capacity:10,subjectList:e},a=d.GET_COLLEGES_BY_SUBJECTS.replace("{province}",l.default.provinceCode);return(0,i.doPostJson)(a,n)},o.getMajorAndSubject=function(e,o){var n={majorType:0,subjects:o},a=d.GET_MAJOR_AND_SUBJECTS.replace("{province}",l.default.provinceCode).replace("{collegeId}",e);return(0,i.doPostJson)(a,n)},o.getSubmajorOfBigMajor=function(e){var o;return o=d.GET_SUBMAJORS.replace("{province}",l.default.provinceCode),o=o.replace("{categoryId}",e),(0,i.doGet)(o)},o.getMajorAd=function(e){return(0,i.doGet)(d.GET_MAJORAD.replace("{province}",l.default.provinceCode)+"?majorId="+e)}},20:function(e,o){},23:function(e,o){e.exports=[{code:"340000",name:"安徽省",cities:[{code:"340100",name:"合肥市"},{code:"340200",name:"芜湖市"},{code:"340300",name:"蚌埠市"},{code:"340400",name:"淮南市"},{code:"340500",name:"马鞍山市"},{code:"340600",name:"淮北市"},{code:"340700",name:"铜陵市"},{code:"340800",name:"安庆市"},{code:"341000",name:"黄山市"},{code:"341100",name:"滁州市"},{code:"341200",name:"阜阳市"},{code:"341300",name:"宿州市"},{code:"341500",name:"六安市"},{code:"341600",name:"亳州市"},{code:"341700",name:"池州市"},{code:"341800",name:"宣城市"}]},{code:"350000",name:"福建省",cities:[{code:"350100",name:"福州市"},{code:"350200",name:"厦门市"},{code:"350300",name:"莆田市"},{code:"350400",name:"三明市"},{code:"350500",name:"泉州市"},{code:"350600",name:"漳州市"},{code:"350700",name:"南平市"},{code:"350800",name:"龙岩市"},{code:"350900",name:"宁德市"}]},{code:"360000",name:"江西省",cities:[{code:"360100",name:"南昌市"},{code:"360200",name:"景德镇市"},{code:"360300",name:"萍乡市"},{code:"360400",name:"九江市"},{code:"360500",name:"新余市"},{code:"360600",name:"鹰潭市"},{code:"360700",name:"赣州市"},{code:"360800",name:"吉安市"},{code:"360900",name:"宜春市"},{code:"361000",name:"抚州市"},{code:"361100",name:"上饶市"}]},{code:"370000",name:"山东省",cities:[{code:"370100",name:"济南市"},{code:"370200",name:"青岛市"},{code:"370300",name:"淄博市"},{code:"370400",name:"枣庄市"},{code:"370500",name:"东营市"},{code:"370600",name:"烟台市"},{code:"370700",name:"潍坊市"},{code:"370800",name:"济宁市"},{code:"370900",name:"泰安市"},{code:"371000",name:"威海市"},{code:"371100",name:"日照市"},{code:"371200",name:"莱芜市"},{code:"371300",name:"临沂市"},{code:"371400",name:"德州市"},{code:"371500",name:"聊城市"},{code:"371600",name:"滨州市"},{code:"371700",name:"菏泽市"}]},{code:"410000",name:"河南省",cities:[{code:"410100",name:"郑州市"},{code:"410200",name:"开封市"},{code:"410300",name:"洛阳市"},{code:"410400",name:"平顶山市"},{code:"410500",name:"安阳市"},{code:"410600",name:"鹤壁市"},{code:"410700",name:"新乡市"},{code:"410800",name:"焦作市"},{code:"410900",name:"濮阳市"},{code:"411000",name:"许昌市"},{code:"411100",name:"漯河市"},{code:"411200",name:"三门峡市"},{code:"411300",name:"南阳市"},{code:"411400",name:"商丘市"},{code:"411500",name:"信阳市"},{code:"411600",name:"周口市"},{code:"411700",name:"驻马店市"},{code:"419000",name:"省直辖县级行政区划"}]},{code:"420000",name:"湖北省",cities:[{code:"420100",name:"武汉市"},{code:"420200",name:"黄石市"},{code:"420300",name:"十堰市"},{code:"420500",name:"宜昌市"},{code:"420600",name:"襄阳市"},{code:"420700",name:"鄂州市"},{code:"420800",name:"荆门市"},{code:"420900",name:"孝感市"},{code:"421000",name:"荆州市"},{code:"421100",name:"黄冈市"},{code:"421200",name:"咸宁市"},{code:"421300",name:"随州市"},{code:"422800",name:"恩施土家族苗族自治州"},{code:"429000",name:"省直辖县级行政区划"}]},{code:"430000",name:"湖南省",cities:[{code:"430100",name:"长沙市"},{code:"430200",name:"株洲市"},{code:"430300",name:"湘潭市"},{code:"430400",name:"衡阳市"},{code:"430500",name:"邵阳市"},{code:"430600",name:"岳阳市"},{code:"430700",name:"常德市"},{code:"430800",name:"张家界市"},{code:"430900",name:"益阳市"},{code:"431000",name:"郴州市"},{code:"431100",name:"永州市"},{code:"431200",name:"怀化市"},{code:"431300",name:"娄底市"},{code:"433100",name:"湘西土家族苗族自治州"}]},{code:"440000",name:"广东省",cities:[{code:"440100",name:"广州市"},{code:"440200",name:"韶关市"},{code:"440300",name:"深圳市"},{code:"440400",name:"珠海市"},{code:"440500",name:"汕头市"},{code:"440600",name:"佛山市"},{code:"440700",name:"江门市"},{code:"440800",name:"湛江市"},{code:"440900",name:"茂名市"},{code:"441200",name:"肇庆市"},{code:"441300",name:"惠州市"},{code:"441400",name:"梅州市"},{code:"441500",name:"汕尾市"},{code:"441600",name:"河源市"},{code:"441700",name:"阳江市"},{code:"441800",name:"清远市"},{code:"441900",name:"东莞市"},{code:"442000",name:"中山市"},{code:"445100",name:"潮州市"},{code:"445200",name:"揭阳市"},{code:"445300",name:"云浮市"}]},{code:"110000",name:"北京市",cities:[{code:"110100",name:"北京市"}]},{code:"120000",name:"天津市",cities:[{code:"120100",name:"天津市"}]},{code:"450000",name:"广西壮族自治区",cities:[{code:"450100",name:"南宁市"},{code:"450200",name:"柳州市"},{code:"450300",name:"桂林市"},{code:"450400",name:"梧州市"},{code:"450500",name:"北海市"},{code:"450600",name:"防城港市"},{code:"450700",name:"钦州市"},{code:"450800",name:"贵港市"},{code:"450900",name:"玉林市"},{code:"451000",name:"百色市"},{code:"451100",name:"贺州市"},{code:"451200",name:"河池市"},{code:"451300",name:"来宾市"},{code:"451400",name:"崇左市"}]},{code:"460000",name:"海南省",cities:[{code:"460100",name:"海口市"},{code:"460200",name:"三亚市"},{code:"460300",name:"三沙市"},{code:"469000",name:"省直辖县级行政区划"}]},{code:"140000",name:"山西省",cities:[{code:"140100",name:"太原市"},{code:"140200",name:"大同市"},{code:"140300",name:"阳泉市"},{code:"140400",name:"长治市"},{code:"140500",name:"晋城市"},{code:"140600",name:"朔州市"},{code:"140700",name:"晋中市"},{code:"140800",name:"运城市"},{code:"140900",name:"忻州市"},{code:"141000",name:"临汾市"},{code:"141100",name:"吕梁市"}]},{code:"500000",name:"重庆市",cities:[{code:"500100",name:"重庆市"}]},{code:"510000",name:"四川省",cities:[{code:"510100",name:"成都市"},{code:"510300",name:"自贡市"},{code:"510400",name:"攀枝花市"},{code:"510500",name:"泸州市"},{code:"510600",name:"德阳市"},{code:"510700",name:"绵阳市"},{code:"510800",name:"广元市"},{code:"510900",name:"遂宁市"},{code:"511000",name:"内江市"},{code:"511100",name:"乐山市"},{code:"511300",name:"南充市"},{code:"511400",name:"眉山市"},{code:"511500",name:"宜宾市"},{code:"511600",name:"广安市"},{code:"511700",name:"达州市"},{code:"511800",name:"雅安市"},{code:"511900",name:"巴中市"},{code:"512000",name:"资阳市"},{code:"513200",name:"阿坝藏族羌族自治州"},{code:"513300",name:"甘孜藏族自治州"},{code:"513400",name:"凉山彝族自治州"}]},{code:"520000",name:"贵州省",cities:[{code:"520100",name:"贵阳市"},{code:"520200",name:"六盘水市"},{code:"520300",name:"遵义市"},{code:"520400",name:"安顺市"},{code:"520500",name:"毕节市"},{code:"520600",name:"铜仁市"},{code:"522300",name:"黔西南布依族苗族自治州"},{code:"522600",name:"黔东南苗族侗族自治州"},{code:"522700",name:"黔南布依族苗族自治州"}]},{code:"530000",name:"云南省",cities:[{code:"530100",name:"昆明市"},{code:"530300",name:"曲靖市"},{code:"530400",name:"玉溪市"},{code:"530500",name:"保山市"},{code:"530600",name:"昭通市"},{code:"530700",name:"丽江市"},{code:"530800",name:"普洱市"},{code:"530900",name:"临沧市"},{code:"532300",name:"楚雄彝族自治州"},{code:"532500",name:"红河哈尼族彝族自治州"},{code:"532600",name:"文山壮族苗族自治州"},{code:"532800",name:"西双版纳傣族自治州"},{code:"532900",name:"大理白族自治州"},{code:"533100",name:"德宏傣族景颇族自治州"},{code:"533300",name:"怒江傈僳族自治州"},{code:"533400",name:"迪庆藏族自治州"}]},{code:"540000",name:"西藏自治区",cities:[{code:"540100",name:"拉萨市"},{code:"542100",name:"昌都地区"},{code:"542200",name:"山南地区"},{code:"542300",name:"日喀则地区"},{code:"542400",name:"那曲地区"},{code:"542500",name:"阿里地区"},{code:"542600",name:"林芝地区"}]},{code:"610000",name:"陕西省",cities:[{code:"610100",name:"西安市"},{code:"610200",name:"铜川市"},{code:"610300",name:"宝鸡市"},{code:"610400",name:"咸阳市"},{code:"610500",name:"渭南市"},{code:"610600",name:"延安市"},{code:"610700",name:"汉中市"},{code:"610800",name:"榆林市"},{code:"610900",name:"安康市"},{code:"611000",name:"商洛市"}]},{code:"620000",name:"甘肃省",cities:[{code:"620100",name:"兰州市"},{code:"620200",name:"嘉峪关市"},{code:"620400",name:"白银市"},{code:"620500",name:"天水市"},{code:"620600",name:"武威市"},{code:"620700",name:"张掖市"},{code:"620800",name:"平凉市"},{code:"620900",name:"酒泉市"},{code:"621000",name:"庆阳市"},{code:"621100",name:"定西市"},{code:"621200",name:"陇南市"},{code:"622900",name:"临夏回族自治州"},{code:"623000",name:"甘南藏族自治州"}]},{code:"630000",name:"青海省",cities:[{code:"630100",name:"西宁市"},{code:"632100",name:"海东地区"},{code:"632200",name:"海北藏族自治州"},{code:"632300",name:"黄南藏族自治州"},{code:"632500",name:"海南藏族自治州"},{code:"632600",name:"果洛藏族自治州"},{code:"632700",name:"玉树藏族自治州"},{code:"632800",name:"海西蒙古族藏族自治州"}]},{code:"640000",name:"宁夏回族自治区",cities:[{code:"640100",name:"银川市"},{code:"640200",name:"石嘴山市"},{code:"640300",name:"吴忠市"},{code:"640400",name:"固原市"},{code:"640500",name:"中卫市"}]},{code:"650000",name:"新疆维吾尔自治区",cities:[{code:"650100",name:"乌鲁木齐市"},{code:"650200",name:"克拉玛依市"},{code:"652100",name:"吐鲁番地区"},{code:"652200",name:"哈密地区"},{code:"652300",name:"昌吉回族自治州"},{code:"652700",name:"博尔塔拉蒙古自治州"},{code:"652800",name:"巴音郭楞蒙古自治州"},{code:"652900",name:"阿克苏地区"},{code:"653000",name:"克孜勒苏柯尔克孜自治州"},{code:"653100",name:"喀什地区"},{code:"653200",name:"和田地区"},{code:"654000",name:"伊犁哈萨克自治州"},{code:"654200",name:"塔城地区"},{code:"654300",name:"阿勒泰地区"},{code:"659000",name:"自治区直辖县级行政区划"}]},{code:"150000",name:"内蒙古自治区",cities:[{code:"150100",name:"呼和浩特市"},{code:"150200",name:"包头市"},{code:"150300",name:"乌海市"},{code:"150400",name:"赤峰市"},{code:"150500",name:"通辽市"},{code:"150600",name:"鄂尔多斯市"},{code:"150700",name:"呼伦贝尔市"},{code:"150800",name:"巴彦淖尔市"},{code:"150900",name:"乌兰察布市"},{code:"152200",name:"兴安盟"},{code:"152500",name:"锡林郭勒盟"},{code:"152900",name:"阿拉善盟"}]},{code:"130000",name:"河北省",cities:[{code:"130200",name:"唐山市"},{code:"130300",name:"秦皇岛市"},{code:"130400",name:"邯郸市"},{code:"130500",name:"邢台市"},{code:"130700",name:"张家口市"},{code:"130800",name:"承德市"},{code:"130900",name:"沧州市"},{code:"131000",name:"廊坊市"},{code:"131100",name:"衡水市"},{code:"130600",name:"保定市"},{code:"130100",name:"石家庄市"}]},{code:"210000",name:"辽宁省",cities:[{code:"210100",name:"沈阳市"},{code:"210200",name:"大连市"},{code:"210300",name:"鞍山市"},{code:"210400",name:"抚顺市"},{code:"210500",name:"本溪市"},{code:"210600",name:"丹东市"},{code:"210700",name:"锦州市"},{code:"210800",name:"营口市"},{code:"210900",name:"阜新市"},{code:"211000",name:"辽阳市"},{code:"211100",name:"盘锦市"},{code:"211200",name:"铁岭市"},{code:"211300",name:"朝阳市"},{code:"211400",name:"葫芦岛市"}]},{code:"220000",name:"吉林省",cities:[{code:"220100",name:"长春市"},{code:"220200",name:"吉林市"},{code:"220300",name:"四平市"},{code:"220400",name:"辽源市"},{code:"220500",name:"通化市"},{code:"220600",name:"白山市"},{code:"220700",name:"松原市"},{code:"220800",name:"白城市"},{code:"222400",name:"延边朝鲜族自治州"}]},{code:"230000",name:"黑龙江省",cities:[{code:"230100",name:"哈尔滨市"},{code:"230200",name:"齐齐哈尔市"},{code:"230300",name:"鸡西市"},{code:"230400",name:"鹤岗市"},{code:"230500",name:"双鸭山市"},{code:"230600",name:"大庆市"},{code:"230700",name:"伊春市"},{code:"230800",name:"佳木斯市"},{code:"230900",name:"七台河市"},{code:"231000",name:"牡丹江市"},{code:"231100",name:"黑河市"},{code:"231200",name:"绥化市"},{code:"232700",name:"大兴安岭地区"}]},{code:"310000",name:"上海市",cities:[{code:"310100",name:"上海市"}]},{code:"320000",name:"江苏省",cities:[{code:"320100",name:"南京市"},{code:"320200",name:"无锡市"},{code:"320300",name:"徐州市"},{code:"320400",name:"常州市"},{code:"320500",name:"苏州市"},{code:"320600",name:"南通市"},{code:"320700",name:"连云港市"},{code:"320800",name:"淮安市"},{code:"320900",name:"盐城市"},{code:"321000",name:"扬州市"},{code:"321100",name:"镇江市"},{code:"321200",name:"泰州市"},{code:"321300",name:"宿迁市"}]},{code:"330000",name:"浙江省",cities:[{code:"330100",name:"杭州市"},{code:"330200",name:"宁波市"},{code:"330300",name:"温州市"},{code:"330400",name:"嘉兴市"},{code:"330500",name:"湖州市"},{code:"330600",name:"绍兴市"},{code:"330700",name:"金华市"},{code:"330800",name:"衢州市"},{code:"330900",name:"舟山市"},{code:"331000",name:"台州市"},{code:"331100",name:"丽水市"}]},{code:"810000",name:"香港",cities:[]}]},47:function(e,o){},48:function(e,o){},49:function(e,o){},58:function(e,o,n){"use strict";function a(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o.default=e,o}Object.defineProperty(o,"__esModule",{value:!0});var t=n(2);a(t);o.default={name:"NavTab",props:{id:{type:String,default:"college",required:!0}},methods:{sendtab:function(){this.$emit("input",this.id)}}}},59:function(e,o){},61:function(e,o,n){var a,t;n(59),a=n(58);var c=n(62);t=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(t=a=a.default),"function"==typeof t&&(t=t.options),t.render=c.render,t.staticRenderFns=c.staticRenderFns,t._scopeId="data-v-245e57cb",e.exports=a},62:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("a",{staticClass:"NavTab",class:{"is-selected":e.$parent.value===e.id},on:{click:e.sendtab}},[n("div",{class:{"navtab-label":!0,"active-color":e.$parent.value===e.id}},[e._t("default")],2)])},staticRenderFns:[]}},194:function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var t=n(48),c=(a(t),n(79)),d=a(c),i=n(49),r=(a(i),n(80)),l=a(r),s=n(47),m=(a(s),n(78)),u=a(m),p=n(3),f=a(p),v=n(61),_=a(v),g=n(12),h=n(23),L=[];L.push({code:0,name:"全部区域"});for(var C=0;C<h.length;C++)for(var E=0;E<h[C].cities.length;E++)L.push({code:h[C].cities[E].code,name:h[C].cities[E].name});o.default={name:"MyCollection",components:{THeader:f.default,Navbar:u.default,TabContainer:l.default,TabContainerItem:d.default,NavTabWhite:_.default},data:function(){return{selected:"college",CollegeList:[],MajorList:[],overCollegeList:[],active:!0}},methods:{clickLevel:function(e){window.location.href="majorDetail.html?majorId="+e.major.majorId},getCollegeDetail:function(e){window.location.href="collegeDetai.html?showBack=true&collegeID="+e.college.collegeId},overWriteCollegeList:function(){for(var e=this.CollegeList,o=0;o<e.length;o++){for(var n=0;n<e[o].college.feature.length;n++)1==e[o].college.feature[n]?e[o].college.feature[n]="985":2==e[o].college.feature[n]?e[o].college.feature[n]="211":3==e[o].college.feature[n]&&(e[o].college.feature[n]="教育部直属");for(var a=0;a<L.length;a++)if(e[o].college.city==L[a].code){e[o].college.city=L[a].name;break}}this.overCollegeList=e},onClickBack:function(){location.href="index.html"},setValues:function(e){this.selected=e,"college"==this.selected?this.active=!0:this.active=!1},getCollegeList:function(){var e=this;(0,g.getCollegeLove)().then(function(o){e.CollegeList=o.result.favorites,e.overWriteCollegeList()}).catch(function(e){})},getMajorList:function(){var e=this;(0,g.getMajorLove)().then(function(o){e.MajorList=o.result.favorites}).catch(function(e){})}},created:function(){this.getCollegeList(),this.getMajorList(),this.selected="college",this.active=!0}}},220:function(e,o){},254:function(e,o,n){var a,t;n(220),a=n(194);var c=n(267);t=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(t=a=a.default),"function"==typeof t&&(t=t.options),t.render=c.render,t.staticRenderFns=c.staticRenderFns,t._scopeId="data-v-4f847528",e.exports=a},267:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"MyCollection"},[n("div",{ref:"header",staticClass:"header-box"},[n("t-header",{attrs:{"left-options":{preventGoBack:!0,backText:"",showBack:!0}},on:{"on-click-back":e.onClickBack}},[e._v("\n\t\t\t\t我的收藏\n\t\t\t")])],1),e._v(" "),n("navbar",{ref:"tabbar",staticClass:"navbar",model:{value:e.selected,callback:function(o){e.selected=o},expression:"selected"}},[n("nav-tab-white",{attrs:{id:"college"},on:{input:e.setValues}},[e._v("院校")]),e._v(" "),n("nav-tab-white",{attrs:{id:"major"},on:{input:e.setValues}},[e._v("专业")])],1),e._v(" "),e.active?n("div",{staticClass:"CollegeListContainer"},e._l(e.overCollegeList,function(o){return n("a",{staticClass:"CollegeList",attrs:{id:o.collegeId},on:{click:function(n){e.getCollegeDetail(o)}}},[n("img",{staticClass:"collegelogo",attrs:{src:o.college.logo}}),e._v(" "),n("p",{staticClass:"collegename"},[e._v(e._s(o.college.collegeName))]),n("label",{staticClass:"locationname"},[n("i",{staticClass:"location"}),e._v(e._s(o.college.city))]),e._v(" "),n("label",{staticClass:"colegelevel"},e._l(o.college.feature,function(o){return n("span",{staticClass:"level"},[e._v(e._s(o))])})),e._v(" "),n("i",{staticClass:"arrow-right"})])})):n("div",{staticClass:"major_container"},e._l(e.MajorList,function(o){return n("div",{staticClass:"MajorList",on:{click:function(n){e.clickLevel(o)}}},[n("label",[e._v(e._s(o.major.majorName))]),n("i",{staticClass:"majorarrow"})])}))],1)},staticRenderFns:[]}},333:function(e,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var t=n(1),c=a(t),d=n(254),i=a(d),r=n(5);o.default={name:"MyCollectionH",components:{MyCollection:i.default},data:function(){return{}},created:function(){(0,r.readUserInfoFromLocalStorage)();c.default.http=this.$http}},document.body.addEventListener("touchstart",function(){})},432:function(e,o){},570:function(e,o,n){var a,t;n(432),a=n(333);var c=n(617);t=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(t=a=a.default),"function"==typeof t&&(t=t.options),t.render=c.render,t.staticRenderFns=c.staticRenderFns,e.exports=a},617:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("my-collection")],1)},staticRenderFns:[]}}});