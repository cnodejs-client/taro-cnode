(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"136":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),l=n(51),u=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),c=n(66),s=n(65),f=_interopRequireDefault(n(52)),p=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(137);var d=n(139).markdown,h=function(e){function Reply(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Reply);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Reply.__proto__||Object.getPrototypeOf(Reply)).apply(this,arguments));return e.handleChange=function(t){e.setState({"content":t.target.value})},e.state={"hasErr":!1,"content":"","author_txt":"\n\n 来自拉风的 [Taro-cnode](https://github.com/icai/taro-cnode)"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Reply,o.Component),r(Reply,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentDidMount","value":function componentDidMount(){this.props.replyTo&&this.setState({"content":"@"+this.props.replyTo})}},{"key":"addReply","value":function addReply(){var e=this,t=this.state,n=t.content,r=t.author_txt,o=(t.hasErr,this.props),i=o.userInfo,l=(o.topic,o.topicId),c=o.replyId,s=o.show,f=o.updateReplies;if(n){var h=new Date,m=u.linkUsers(n),y=d.toHTML(m)+r,_=u.getContentHtml(y),b={"accesstoken":i.token,"content":n+r};c&&(b.reply_id=c),a.default.request({"method":"POST","data":u.param(b),"header":{"Content-Type":"application/x-www-form-urlencoded","Accept":"application/json"},"url":"https://cnodejs.org/api/v1/topic/"+l+"/replies"}).then(function(t){var n=t.data;n.success?(f&&f(function(e,t){var r=(0,p.default)(e.replies,{"$push":[{"id":n.reply_id,"author":{"loginname":i.loginname,"avatar_url":i.avatar_url},"content":_,"ups":[],"create_at":h}]});e.replies=r,t.setState({"topic":e})}),e.setState({"content":""}),s&&e.props.onClose()):a.default.showToast({"title":n.error_msg})}).catch(function(e){console.info(e)})}else this.setState({"hasErr":!0})}},{"key":"render","value":function render(){var e=this,t=this.state.hasErr;return i.default.createElement(l.View,{"className":"reply"},i.default.createElement(s.AtTextarea,{"id":"content","className":(0,f.default)({"text":1,"err":t}),"value":this.state.content,"onChange":this.handleChange,"type":"text","placeholder":"回复支持Markdown语法,请注意标记代码","rows":"8","class":"text"}),i.default.createElement("a",{"className":"button","onClick":function onClick(t){e.addReply()}}," ","确定"))}}]),Reply}();t.default=(0,c.withUser)(h)},"137":function(e,t,n){},"143":function(e,t,n){},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),l=n(51),u=_interopRequireDefault(n(54)),c=_interopRequireDefault(n(53)),s=_interopRequireDefault(n(136)),f=_interopRequireDefault(n(52)),p=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),d=n(66),h=_interopRequireDefault(n(68)),m=_interopRequireDefault(n(74));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(143);var y=function(e){function Topic(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Topic);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Topic.__proto__||Object.getPrototypeOf(Topic)).apply(this,arguments));return e.config={"navigationBarTitleText":"主题"},e.getTopic=function(){var t=e.$router.params.id;e.setState({"topicId":t}),a.default.request({"method":"GET","url":"https://cnodejs.org/api/v1/topic/"+t}).then(function(t){var n=t.data;n&&n.data?e.setState({"topic":n.data}):e.setState({"noData":!0})})},e.state={"showMenu":!1,"topic":{"title":"","create_at":"","visit_count":0,"content":"","tab":"","good":!1,"top":!1,"reply_count":0,"author":{"avatar_url":"","loginname":""},"replies":[]},"noData":!1,"topicId":"","curReplyId":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Topic,o.Component),r(Topic,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentDidMount","value":function componentDidMount(){this.getTopic()}},{"key":"addReply","value":function addReply(e){this.setState({"curReplyId":e}),this.props.userInfo.userId}},{"key":"hideItemReply","value":function hideItemReply(){this.setState({"curReplyId":""})}},{"key":"upReply","value":function upReply(e,t){var n=this,r=this.props.userInfo,o=this.state.topic;r.userId&&a.default.request({"method":"POST","url":"https://cnodejs.org/api/v1/reply/"+e.id+"/ups","header":{"Content-Type":"application/x-www-form-urlencoded","Accept":"application/json"},"data":p.param({"accesstoken":r.token})}).then(function(a){var i=a.data;if(i.success){if("down"===i.action){var l=p.inArray(r.userId,e.ups);e.ups.splice(l,1)}else e.ups.push(r.userId);(0,h.default)(o.replies,function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},t,{"$set":e})),n.setState({"topic":o})}})}},{"key":"render","value":function render(){var e=this,t=this.state,n=t.noData,r=t.topicId,o=t.showMenu,a=t.curReplyId,d=t.topic,h=this.props.userInfo,y=function getLastTimeStr(e,t){return p.getLastTimeStr(e,t)},_=function getTabInfo(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments[2],r=arguments[3];return p.getTabInfo(e,t,n,r)},b=d.replies.map(function(t,n){return i.default.createElement(l.View,{"className":"li flex-wrp"},i.default.createElement(l.View,{"className":"user"},i.default.createElement(c.default,{"to":{"url":"/pages/user/index","params":{"loginname":t.author.loginname}}},i.default.createElement(l.Image,{"className":"head","src":t.author.avatar_url})),i.default.createElement(l.View,{"className":"info"},i.default.createElement(l.Text,{"className":"cl"},i.default.createElement(l.Text,{"className":"name"},t.author.loginname),i.default.createElement(l.Text,{"className":"name mt10"},i.default.createElement(l.Text,null),"发布于:",y(t.create_at,!0))),i.default.createElement(l.Text,{"className":"cr"},i.default.createElement(l.Text,{"className":(0,f.default)({"iconfont":1,"icon":1,"uped":function isUps(e){return e.includes((h||{}).userId)}(t.ups)}),"onClick":function onClick(r){e.upReply(t,n)}},""),t.ups.length,i.default.createElement(l.Text,{"className":"iconfont icon","onClick":function onClick(n){e.addReply(t.id)}},"")))),i.default.createElement(l.View,{"className":"reply_content","dangerouslySetInnerHTML":{"__html":t.content}}),h.userId&&a===t.id?i.default.createElement(s.default,{"topic":d,"updateReplies":function updateReplies(t){t(d,e)},"topicId":r,"replyId":t.id,"replyTo":t.author.loginname,"show":a,"onClose":function onClose(t){e.hideItemReply()}}):"")});return i.default.createElement(l.View,{"className":"flex-wrp"},i.default.createElement(u.default,{"pageType":"主题","fixHead":!0,"needAdd":!0}),d.title?i.default.createElement(l.View,{"id":"page","className":(0,f.default)({"show-menu":o})},i.default.createElement(l.View,{"className":"topic-title"},d.title),i.default.createElement(l.View,{"className":"author-info"},i.default.createElement(c.default,{"to":{"url":"/pages/user/index","params":{"loginname":d.author.loginname}}},i.default.createElement(l.Image,{"className":"avatar","src":d.author.avatar_url})),i.default.createElement(l.View,{"className":"col"},i.default.createElement(l.Text,null,d.author.loginname),i.default.createElement(l.Text,{"className":"time"},"发布于:",y(d.create_at,!0))),i.default.createElement(l.View,{"className":"right"},i.default.createElement(l.Text,{"className":"tag "+_(d.tab,d.good,d.top,!0)},_(d.tab,d.good,d.top,!1)),i.default.createElement(l.Text,{"className":"name"},d.visit_count,"次浏览"))),i.default.createElement(l.View,{"className":"markdown-body topic-content","dangerouslySetInnerHTML":{"__html":d.content}}),i.default.createElement(l.View,{"className":"topic-reply"},i.default.createElement(l.Text,{"className":"strong"},d.reply_count)," 回复"),i.default.createElement(l.View,{"className":"reply-list"},i.default.createElement(l.View,{"className":"ul"},b)),i.default.createElement(m.default,null),h.userId?i.default.createElement(s.default,{"topic":d,"updateReplies":function updateReplies(t){t(d,e)},"topicId":r}):""):"",n?i.default.createElement(l.View,{"className":"no-data"},i.default.createElement("i",{"className":"iconfont icon-empty"},""),"该话题不存在!"):"")}}]),Topic}();t.default=(0,d.withUser)(y,!0)},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(2),i=_interopRequireDefault(a),l=n(51),u=_interopRequireDefault(n(0)),c=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return i.default.navigateTo({"url":t+(n?"?"+c.param(n):"")}),!1},e.defaultProps={"to":{"url":"","params":""}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,a.Component),o(Link,[{"key":"render","value":function render(){var e=this,t=this.props;return u.default.createElement(l.View,r({},t,{"onClick":function onClick(n){e.goTo(t.to)}}),this.props.children)}}]),Link}();t.default=s},"54":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),l=_interopRequireDefault(n(52)),u=n(51),c=_interopRequireDefault(n(55));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var s=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e.goToAdd=function(){a.default.navigateTo({"url":"/pages/add/index"})},e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),r(Header,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,o=this.props,a=o.needAdd,s=o.pageType,f=o.fixHead,p=o.messageCount,d=(0,l.default)({"show":t&&f,"fix-header":f,"no-fix":!f});return i.default.createElement(u.View,{"className":"header"},t&&f?i.default.createElement(u.View,null,i.default.createElement(u.View,{"className":"page-cover","onClick":this.showMenus})):"",i.default.createElement(u.View,{"className":d,"id":"hd"},i.default.createElement(u.View,{"className":"nv-toolbar"},f?i.default.createElement(u.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",i.default.createElement(u.Text,null,s),p>0?i.default.createElement(u.Text,{"className":"num"},p):"",a&&!p||p<=0?i.default.createElement("a",{"className":"iconfont add-icon","onClick":this.goToAdd},""):"")),f?i.default.createElement(c.default,{"showMenu":t,"pageType":s,"nickName":n,"profileUrl":r}):"")}}]),Header}();s.defaultProps={"messageCount":0,"scrollTop":0},t.default=s},"55":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),l=n(51),u=_interopRequireDefault(n(56)),c=_interopRequireDefault(n(52)),s=_interopRequireDefault(n(60)),f=n(5);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(61);var p=function(e){function NvMenu(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments));return e.listAll=function(){e.toList({"tab":"all"})},e.listGood=function(){e.toList({"tab":"good"})},e.listShare=function(){e.toList({"tab":"share"})},e.listAsk=function(){e.toList({"tab":"ask"})},e.listJob=function(){e.toList({"tab":"job"})},e.listMessage=function(){a.default.navigateTo({"url":"/pages/message/index"})},e.listAbout=function(){a.default.navigateTo({"url":"/pages/about/index"})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.Component),r(NvMenu,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"toList","value":function toList(e){a.default.navigateTo({"url":"/pages/list/index?"+(0,f.param)(e)})}},{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,c.default)({"nav-list":!0,"show":e});return i.default.createElement(l.View,{"id":"sideBar","className":t},i.default.createElement(s.default,{"mask":!1,"show":e},i.default.createElement(u.default,null),i.default.createElement(l.View,{"className":"list-ul"},i.default.createElement(l.View,{"className":"icon-quanbu iconfont item","onClick":this.listAll},"全部"),i.default.createElement(l.View,{"className":"icon-hao iconfont item","onClick":this.listGood},"精华"),i.default.createElement(l.View,{"className":"icon-fenxiang iconfont item","onClick":this.listShare},"分享"),i.default.createElement(l.View,{"className":"icon-wenda iconfont item","onClick":this.listAsk},"问答"),i.default.createElement(l.View,{"className":"icon-zhaopin iconfont item","onClick":this.listJob},"招聘"),i.default.createElement(l.View,{"className":"icon-xiaoxi iconfont item line","onClick":this.listMessage},"消息"),i.default.createElement(l.View,{"className":"icon-about iconfont item","onClick":this.listAbout},"关于"))))}}]),NvMenu}();t.default=p},"56":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireWildcard(n(57)),a=n(2),i=_interopRequireDefault(n(0)),l=n(51),u=_interopRequireDefault(n(53)),c=n(6),s=_interopRequireWildcard(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(58);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,a.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return i.default.createElement(l.View,{"className":"user-info"},e.loginname?i.default.createElement(u.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},i.default.createElement(l.View,{"className":"avertar"},e.avatar_url?i.default.createElement(l.Image,{"class":"avertar","src":e.avatar_url}):""),i.default.createElement(l.View,{"className":"info"},e.loginname?i.default.createElement(l.Text,null,e.loginname):"")):i.default.createElement(u.default,{"className":"login-no","to":{"url":"/pages/login/index"}},i.default.createElement(l.View,{"className":"login"},i.default.createElement("a",null,"登录"))))}}]),UserInfo}();f=o.__decorate([(0,c.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(s.authCheckState())}}})],f),t.default=f},"58":function(e,t,n){},"60":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(2)),_interopRequireDefault(n(0))),a=n(51),i=n(65);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function Drawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,i.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,i=r.animShow,l=r.show,u=["at-drawer"],c={"display":t?"block":"none","opacity":i?1:0};return n?u.push("at-drawer--right"):u.push("at-drawer--left"),i&&u.push("at-drawer--show"),u=u.filter(function(e){return""!==e}),l&&o.default.createElement(a.View,{"className":u},o.default.createElement(a.View,{"className":"at-drawer__mask","style":c,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(a.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=l},"61":function(e,t,n){},"63":function(e,t,n){},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0},a=n(2),i=_interopRequireDefault(a),l=_interopRequireWildcard(n(57)),u=(_interopRequireDefault(n(0)),n(6)),c=_interopRequireWildcard(n(7));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=a.Component,t.withUser=function withUser(e,t){t=t||!1;var n=function(n){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),r(WithUserHOC,[{"key":"render","value":function render(){var e=this.props;return t||e.userInfo&&e.userInfo.userId?o(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):(i.default.navigateTo({"url":"/pages/login/index"}),null)}}]),WithUserHOC}();return n=l.__decorate([(0,u.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(c.authCheckState())}}})],n)}},"74":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),a=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),i=n(51),l=n(67);n(75);var u=function(e){function BackTop(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments));return e.handleScroll=function(){var t=e.componentScrollBox.scrollTop>=.5*document.body.clientHeight;e.setState({"show":t})},e.goTop=function(){e.componentScrollBox.scrollTop=0},e.state={"show":!1},e.componentScrollBox=document.documentElement,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,o.Component),r(BackTop,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){window.removeEventListener("scroll",this.scrollbinding)}},{"key":"componentDidMount","value":function componentDidMount(){this.scrollbinding=(0,l.throttle)(300,this.handleScroll),window.addEventListener("scroll",this.scrollbinding)}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.state.show;return a.default.createElement(i.View,null,e?a.default.createElement(i.View,{"className":"iconfont icon-top","onClick":this.goTop},""):"")}}]),BackTop}();t.default=u},"75":function(e,t,n){}}]);