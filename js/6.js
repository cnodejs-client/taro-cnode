(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"117":function(e,t,n){},"36":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=_interopRequireDefault(o),a=_interopRequireDefault(n(0)),u=n(42),l=_interopRequireDefault(n(47)),s=n(49),c=n(44);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(117);var f=function(e){function Login(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Login);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Login.__proto__||Object.getPrototypeOf(Login)).apply(this,arguments));return e.config={"navigationBarTitleText":"登录"},e.logon=function(){if(""===e.state.token)return e.showMessage("令牌格式错误,应为36位UUID字符串"),!1;e.props.authLogin(e.state.token).then(function(){i.default.navigateTo({"url":"/pages/list/index"})})},e.scanCode=function(){i.default.scanCode({"success":function success(t){if("scanCode:ok"!=t.errMsg)return e.showMessage("令牌格式错误,应为36位UUID字符串"),!1;36==t.result.length&&e.props.authLogin(t.result).then(function(){i.default.navigateTo({"url":"/pages/list/index"})})}})},e.state={"token":"","err":{"isHiddenIcon":!0,"iconSize":36,"iconType":"error","iconColor":"#f00","text":""}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Login,o.Component),r(Login,[{"key":"showMessage","value":function showMessage(e){i.default.showToast({"title":e})}},{"key":"handleChange","value":function handleChange(e){this.setState({"token":e})}},{"key":"render","value":function render(){var e=this.state.token;return a.default.createElement(u.View,{"className":"page-box login-page"},a.default.createElement(l.default,{"pageType":"登录","fixHead":!0,"needAdd":!0}),a.default.createElement(u.View,{"className":"page-body"},"WEAPP"==i.default.getEnv()?a.default.createElement(u.View,null,a.default.createElement(u.View,{"className":"tip"}," 前往 主页/ 设置 "),a.default.createElement(u.View,{"className":"label"},a.default.createElement(u.View,{"className":"button","onClick":this.scanCode},"扫码登陆"))):a.default.createElement(u.View,null,a.default.createElement(u.View,{"className":"label"},a.default.createElement(s.AtInput,{"className":"txt","type":"text","placeholder":"Access Token","value":e,"onChange":this.handleChange.bind(this),"maxlength":"36"})),a.default.createElement(u.View,{"className":"label"},a.default.createElement(u.View,{"className":"button","onClick":this.logon},"登录")))))}}]),Login}();t.default=(0,c.withUser)(f,!0)},"44":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0},i=n(1),a=_interopRequireDefault(i),u=_interopRequireWildcard(n(43)),l=(_interopRequireDefault(n(0)),n(6)),s=_interopRequireWildcard(n(7));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=i.Component,t.withUser=function withUser(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(n){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),r(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||a.default.redirectTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?o(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return n=u.__decorate([(0,l.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(s.auth.apply(s,arguments))},"authCheckState":function authCheckState(){return e(s.authCheckState())}}})],n)}}}]);