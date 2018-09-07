import Taro, { Component, Config } from "@tarojs/taro";
import { withUser } from "../../hoc/router";
import { View } from '@tarojs/components'
import Header from '../../components/header/index'
import { AtTextarea, AtInput } from 'taro-ui'
import * as utils from '../../libs/utils'
import classNames from "classnames";


import './index.scss'


class Add extends Component {
  config: Config = {
      navigationBarTitleText: '主题'
  }

  state = {
    topic: {
        tab: 'share',
        title: '',
        content: ''
    },
    err: '',
    authorTxt: '<br/><br/><a class="from" href="https://github.com/icai/taro-cnode">by taro-cnode</a>'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  addTopic() {
      let title = utils.trim(this.state.topic.title);
      let contents = utils.trim(this.state.topic.content);
      if (!title || title.length < 10) {
          this.setState({
            err: 'title'
          })
          return false;
      }
      if (!contents) {
          this.setState({
            err: 'content'
          })
          return false;
      }
      let postData = { ...this.state.topic, content: this.state.topic.content + this.state.authorTxt, accesstoken: this.props.userInfo.token };

     Taro.request({
       method: "POST",
       data: utils.param(postData),
       header: {
         "Content-Type": "application/x-www-form-urlencoded",
         Accept: "application/json"
       },
       url: "https://cnodejs.org/api/v1/topics"
     })
       .then(resp => {
         let res = resp.data;
         if (res.success) {
           Taro.navigateTo({ url: "/pages/list/index" });
         } else {
           Taro.showToast({ title: res.error_msg });
         }
       })
       .catch(resp => {
         console.info(resp);
       });
  }
  handleTopicTabChange =(e)=> {
    this.state.topic.tab = e;
  }
  handleTopicContentChange = (e)=> {
    this.state.topic.content = e.target.value;
  }
  handleTopicChange = (e)=> {
    this.state.topic.title = e;
  }
  render () {
    const { err } = this.state;
    return (
      <View className="flex-wrp"  >
        <Header pageType={"主题"} fixHead={true} showMenu={true} ></Header>
        <View className="add-container">
            <View className="line">选择分类：
                <select
                  className="add-tab"
                  value={this.state.topic.tab}
                  onChange={this.handleTopicTabChange}>
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                </select>
                <a className="add-btn" onClick={(e) => { this.addTopic() }}>发布</a>
            </View>
            <View className="line">
                <AtInput className={classNames({
                  "add-title": 1,
                  'err': err == 'title'
                })}
                value={this.state.topic.title}
                onChange={this.handleTopicChange}
                type="text"
                placeholder="标题，字数10字以上"
                max-length="100"
                ></AtInput>
            </View>
            <AtTextarea
                className={classNames({
                  "add-content": 1,
                  'err': err == 'content'
                })}
                value={this.state.topic.content}
                onChange={this.handleTopicContentChange}
                maxlength={9999}
                height="400"
                placeholder='回复支持Markdown语法,请注意标记代码'>
            </AtTextarea>
        </View>
      </View>

    )
  }
}

export default withUser(Add);
