import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Image, RichText } from '@tarojs/components';
import Header from '../../components/header/index';
import ALink from "../../components/link";
import Reply from '../../components/reply';
import classNames from "classnames";
import * as utils from '../../libs/utils';
import { withUser } from "../../hoc/router";
import update from "immutability-helper";
import { post, get } from "../../utils/request";
import BackTop from "../../components/backtotop/index";
import { connect } from "@tarojs/redux";
import * as actions from "../../actions/auth";
import { IAuth } from "../../interfaces/auth";
import Markdown from "../../components/markdown/index";

import './index.scss'

type PageStateProps = {
  userInfo: IAuth;
};


type PageDispatchProps = {
  authLogin: (token) => void;
  authCheckState: () => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

@connect(({ auth }) => ({ userInfo: auth }),
  (dispatch: Function) => ({
    authLogin: (...args) => dispatch(actions.auth(...args)),
    authCheckState: () => dispatch(actions.authCheckState())
  })
)
class Topic extends Component<IProps, PageState> {
  config: Config = {
    navigationBarTitleText: "主题"
  };

  static options = {
    addGlobalClass: true
  };


  state = {
    showMenu: false,
    topic: {
      title: "",
      create_at: "",
      visit_count: 0,
      content: "",
      tab: "",
      good: false,
      top: false,
      reply_count: 0,
      author: {
        avatar_url: "",
        loginname: ""
      },
      replies: []
    },
    noData: false,
    topicId: "",
    curReplyId: ""
  };
  componentDidMount() {
    this.getTopic();
  }
  addReply(id) {
    this.setState({ curReplyId: id });
    if (!this.props.userInfo.userId) {

    }
  }
  hideItemReply() {
    this.setState({ curReplyId: '' });
  }
  upReply(item, index) {
    const { userInfo } = this.props;
    const { topic } = this.state;
    if (!userInfo.userId) {
      utils.navigateTo({
        url: "/pages/login/index",
        params: {
          redirect: encodeURIComponent(this.$router.fullUrl)
        }
      });
    } else {
      post({
        url: "https://cnodejs.org/api/v1/reply/" + item.id + "/ups",
        data: {
          accesstoken: userInfo.token
        }
      }).then(resp => {
        let res = resp.data;
        if (res.success) {
          if (res.action === "down") {
            let index = utils.inArray(userInfo.userId, item.ups);
            item.ups.splice(index, 1);
          } else {
            item.ups.push(userInfo.userId);
          }
          update(topic.replies, {
            [index]: {
              $set: item
            }
          });
          this.setState({ topic: topic });
        }
      });
    }
  }
  getTopic = () => {
    const topicId = this.$router.params.id;
    this.setState({ topicId });
    get({
      url: "https://cnodejs.org/api/v1/topic/" + topicId,
      data: {
        mdrender: Taro.getEnv() == "WEAPP" ? false : true
      }
    }).then(resp => {
      let d = resp.data;
      if (d && d.data) {
        this.setState({ topic: d.data });
      } else {
        this.setState({ noData: true });
      }
    });
  };
  render() {
    const { noData, topicId, showMenu, curReplyId, topic } = this.state;
    const { userInfo } = this.props;
    const getLastTimeStr = (Text, ago) => {
      return utils.getLastTimeStr(Text, ago);
    };

    const getTabInfo = (tab, good = false, top, isClass) => {
      return utils.getTabInfo(tab, good, top, isClass);
    };
    const isUps = ups => {
      return ups.includes((userInfo || {}).userId)
    };
    const updateReplies = (fn) => { fn(topic, this) }
    const replayList = topic.replies.map((item, index) => {
      return <View className="li flex-wrp" key={index}>
          <View className="user">
            <ALink to={{ url: "/pages/user/index", params: { loginname: item.author.loginname } }}>
              <Image className="head" src={item.author.avatar_url} />
            </ALink>
            <View className="info">
              <Text className="cl">
                <Text className="name">{item.author.loginname}</Text>
                <Text className="name mt10">
                  发布于:
                  {getLastTimeStr(item.create_at, true)}
                </Text>
              </Text>
              <Text className="cr">
                <Text className={classNames({
                    iconfont: 1,
                    icon: 1,
                    uped: isUps(item.ups)
                  })} onClick={this.upReply.bind(this, item, index)}>
                  &#xe608;
                </Text>
                <Text className="upcount">{item.ups.length}</Text>
                <Text className="iconfont icon" onClick={this.addReply.bind(this, item.id)}>
                  &#xe609;
                </Text>
              </Text>
            </View>
          </View>
        {Taro.getEnv() == "WEAPP" ?
          <Markdown className="reply_content" md={item.content} />
        :
          <View className="reply_content" dangerouslySetInnerHTML={{ __html: item.content }} />
        }
        {userInfo.userId && curReplyId === item.id ? <Reply topic={topic} updateReplies={updateReplies} topicId={topicId} replyId={item.id} replyTo={item.author.loginname} show={curReplyId} onClose={this.hideItemReply.bind(this)} /> : ""}
        </View>;
    });

    return <View className="flex-wrp">
        <Header pageType={"主题"} fixHead={true} needAdd={true} />
        {topic.title ? <View className={classNames({
              'page-box': 1
              'page': 1
              "show-menu": showMenu
            })}>
            <View className="topic-title">{topic.title}</View>
            <View className="author-info">
              <ALink to={{ url: "/pages/user/index", params: { loginname: topic.author.loginname } }}>
                <Image className="avatar" src={topic.author.avatar_url} />
              </ALink>
              <View className="col">
                <Text className="name">{topic.author.loginname}</Text>
                <Text className="time">
                  发布于:
                  {getLastTimeStr(topic.create_at, true)}
                </Text>
              </View>
              <View className="right">
                <Text
                  className={
                    "tag " +
                    getTabInfo(topic.tab, topic.good, topic.top, true)
                  }
                >
                  {getTabInfo(topic.tab, topic.good, topic.top, false)}
                </Text>
                <Text className="name">
                  {topic.visit_count}
                  次浏览
                </Text>
              </View>
            </View>
          {Taro.getEnv() == "WEAPP" ?
            <Markdown className="markdown-body topic-content" md={topic.content} />
          :
            <View className="markdown-body topic-content" dangerouslySetInnerHTML={{ __html: topic.content }} />
          }
            <View className="topic-reply">
              <Text className="strong">{topic.reply_count}</Text> 回复
            </View>
            <View className="reply-list">
              <View className="ul">{replayList}</View>
            </View>
            <BackTop />
        {userInfo.userId ? <Reply topic={topic} updateReplies={updateReplies} topicId={topicId} /> : ""}
          </View> : ""}
        {noData ? <View className="no-data">
          <Text className="iconfont icon-empty">&#xe60a;</Text>
            该话题不存在!
          </View> : ""}
      </View>;
  }
}

export default Topic as ComponentClass<PageOwnProps, PageState>; //withUser(Topic as ComponentClass<PageOwnProps, PageState>, true);
