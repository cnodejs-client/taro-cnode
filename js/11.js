(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"131":function(e,t,r){},"41":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=_interopRequireDefault(r(1)),i=_interopRequireWildcard(r(43)),u=_interopRequireDefault(r(0)),c=r(44),l=r(42),s=r(6),f=_interopRequireDefault(r(47)),p=_interopRequireDefault(r(46)),d=_interopRequireDefault(r(45)),h=_interopRequireWildcard(r(7)),y=_interopRequireWildcard(r(4)),m=r(8);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(131);var _=function(e){function User(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(User.__proto__||Object.getPrototypeOf(User)).apply(this,arguments));return e.config={"navigationBarTitleText":"用户信息"},e.changeItem=function(t){var r=1===t?e.state.user.recent_replies:e.state.user.recent_topics;e.setState(function(e){return n({},e,{"selectItem":t,"currentData":r})})},e.state={"currentData":[],"user":{"avatar_url":""},"showMenu":!1,"selectItem":1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(User,c.Component),o(User,[{"key":"componentDidMount","value":function componentDidMount(){this.getUser()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"getUser","value":function getUser(){var e=this,t=this.$router.params.loginname;if(!t)return a.default.showToast({"title":"缺少用户名参数"}),a.default.navigateTo({"url":"/pages/list/index"}),!1;(0,m.get)({"url":"https://cnodejs.org/api/v1/user/"+t}).then(function(t){var r=t.data;if(r&&r.data){var n=r.data;e.setState({"user":n}),n.recent_replies.length>0?e.setState({"currentData":n.recent_replies}):e.setState({"currentData":n.recent_topics,"selectItem":2})}})}},{"key":"render","value":function render(){var e=this.state,t=e.selectItem,r=e.user,n=e.currentData,o=function getLastTimeStr(e,t){return y.getLastTimeStr(e,t)};return u.default.createElement(l.View,{"className":"flex-wrp"},u.default.createElement(f.default,{"pageType":"用户信息","fixHead":!0,"showMenu":!0,"needAdd":!0}),u.default.createElement(l.View,{"className":"userinfo"},u.default.createElement(l.Image,{"className":"u-img","src":r.avatar_url}),u.default.createElement("br",null),u.default.createElement(l.Text,{"className":"u-name"},r.loginname),u.default.createElement(l.View,{"className":"u-bottom"},u.default.createElement(l.Text,{"className":"u-time"},o(r.create_at,!1)),u.default.createElement(l.Text,{"className":"u-score"},"积分：",r.score))),u.default.createElement(l.View,{"className":"topics"},u.default.createElement(l.View,{"className":"user-tabs"},u.default.createElement(l.View,{"className":(0,d.default)({"item":1,"br":1,"selected":1===t}),"onClick":this.changeItem.bind(this,1)},"最近回复"),u.default.createElement(l.View,{"className":(0,d.default)({"item":1,"selected":2===t}),"onClick":this.changeItem.bind(this,2)},"最新发布")),n.map(function(e){return u.default.createElement(l.View,{"className":"message"},u.default.createElement(l.View,{"className":"user"},u.default.createElement(p.default,{"link-class":"head","to":{"url":"/pages/user/index","params":{"loginname":e.author.loginname}}},u.default.createElement(l.Image,{"class":"head","src":e.author.avatar_url})),u.default.createElement(p.default,{"link-class":"info","to":{"url":"/pages/topic/index","params":{"id":e.id}}},u.default.createElement(l.View,{"className":"t-title"},e.title),u.default.createElement(l.Text,{"className":"cl mt12"},u.default.createElement(l.Text,{"className":"name"},e.author.loginname)),u.default.createElement(l.Text,{"className":"cr mt12"},u.default.createElement(l.Text,{"className":"name"},o(e.last_reply_at,!0))))))}),0===n.length?u.default.createElement(l.View,{"className":"no-data"},u.default.createElement(l.Text,{"className":"iconfont icon-empty"},""),"暂无数据!"):""))}}]),User}();_=i.__decorate([(0,s.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(h.authCheckState())}}})],_),t.default=_},"43":function(e,t,r){(function(r){var n,o,a,i,u,c,l,s,f,p,d,h,y,m,_,b,v,w,g,O;!function(j){var P="object"==typeof r?r:"object"==typeof self?self:"object"==typeof this?this:{};function createExporter(e,t){return e!==P&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{"value":!0}):e.__esModule=!0),function(r,n){return e[r]=t?t(r,n):n}}void 0===(n=function(e){!function(e){var t=Object.setPrototypeOf||{"__proto__":[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};o=function(e,r){function __(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)},a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r},u=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},c=function(e,t){return function(r,n){t(r,n,e)}},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})},f=function(e,t){var r,n,o,a,i={"label":0,"sent":function(){if(1&o[0])throw o[1];return o[1]},"trys":[],"ops":[]};return a={"next":verb(0),"throw":verb(1),"return":verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(u){return function step(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{"value":a[1],"done":!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{"value":a[0]?a[1]:void 0,"done":!0}}([a,u])}}},p=function(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])},d=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{"next":function(){return e&&r>=e.length&&(e=void 0),{"value":e&&e[r++],"done":!e}}}},h=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={"error":e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},y=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e},m=function(e){return this instanceof m?(this.v=e,this):new m(e)},_=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){a.push([e,t,r,n])>1||resume(e,t)})})}function resume(e,t){try{!function step(e){e.value instanceof m?Promise.resolve(e.value.v).then(fulfill,reject):settle(a[0][2],e)}(o[e](t))}catch(e){settle(a[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),a.shift(),a.length&&resume(a[0][0],a[0][1])}},b=function(e){var t,r;return t={},verb("next"),verb("throw",function(e){throw e}),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{"value":m(e[n](t)),"done":"return"===n}:o?o(t):t}:o}},v=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof d?d(e):e[Symbol.iterator](),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){t=e[r](t),function settle(e,t,r,n){Promise.resolve(n).then(function(t){e({"value":t,"done":r})},t)}(n,o,t.done,t.value)})}}},w=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{"value":t}):e.raw=t,e},g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},O=function(e){return e&&e.__esModule?e:{"default":e}},e("__extends",o),e("__assign",a),e("__rest",i),e("__decorate",u),e("__param",c),e("__metadata",l),e("__awaiter",s),e("__generator",f),e("__exportStar",p),e("__values",d),e("__read",h),e("__spread",y),e("__await",m),e("__asyncGenerator",_),e("__asyncDelegator",b),e("__asyncValues",v),e("__makeTemplateObject",w),e("__importStar",g),e("__importDefault",O)}(createExporter(P,createExporter(e)))}.apply(t,[t]))||(e.exports=n)}()}).call(this,r(2))},"44":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0},a=r(1),i=_interopRequireDefault(a),u=_interopRequireWildcard(r(43)),c=(_interopRequireDefault(r(0)),r(6)),l=_interopRequireWildcard(r(7));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=a.Component,t.withUser=function withUser(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=function(r){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),n(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||i.default.redirectTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?o(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return r=u.__decorate([(0,c.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(l.auth.apply(l,arguments))},"authCheckState":function authCheckState(){return e(l.authCheckState())}}})],r)}}}]);