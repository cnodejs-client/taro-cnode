import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from "@tarojs/redux";
import List from './pages/list'
import configStore from './store';
import * as actions from "./actions/auth";

import './assets/scss/CV.scss';
import './assets/scss/iconfont/iconfont.css';
import './assets/scss/github-markdown.css';
import './app.scss'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css");
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/style/index.scss");
}

const store = configStore()
// store.dispatch();
actions.authCheckState();

class App extends Component{
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/index/index",
      "pages/about/index",
      "pages/add/index",
      "pages/list/index",
      "pages/message/index",
      "pages/login/index",
      "pages/topic/index",
      "pages/user/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {
    store.subscribe(function() {});
  }
  componentDidHide() {}
  componentCatchError() {}
  render() {
    return <Provider store={store}>
          <List></List>
      </Provider>;
  }
}

Taro.render(<App/>, document.getElementById("app"));
