// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   * 
*       wx.showTabBarRedDot({
        index: 3,
      });
      wx.hideTabBarRedDot({
        index: 0,
      });
   */
  data: {
    swiperList: [
      "../../jpg/1.jpg",
      "../../jpg/2.jpg",
      "../../jpg/3.jpg",
    ],
    div_1: [
      {
        "src": "../../jpg/icon_div_1/1.png",
        "text": "恋爱心理",
      },
      {
        "src": "../../jpg/icon_div_1/2.png",
        "text": "压力疏导",
      },
      {
        "src": "../../jpg/icon_div_1/3.png",
        "text": "我要倾诉",
      },
      {
        "src": "../../jpg/icon_div_1/4.png",
        "text": "婚姻关系",
      },
      {
        "src": "../../jpg/icon_div_1/5.png",
        "text": "亲子教育",
      },
      {
        "src": "../../jpg/icon_div_1/6.png",
        "text": "成长解惑",
      },
      {
        "src": "../../jpg/icon_div_1/7.png",
        "text": "人际关系",
      },
      {
        "src": "../../jpg/icon_div_1/8.png",
        "text": "抑郁疏导",
      },
      {
        "src": "../../jpg/icon_div_1/9.png",
        "text": "职场心理",
      },
      {
        "src": "../../jpg/icon_div_1/10.png",
        "text": "法律咨询",
      }
    ],
    div_2: [
      "../../jpg/icon_div_2/1.jpg",
      "../../jpg/icon_div_2/2.jpg",
      "../../jpg/icon_div_2/3.jpg",
      "../../jpg/icon_div_2/4.jpg",

    ],
    tabs: [
      {
        id: 0,
        name: "恋爱心理  ",
        isActive: true
      },
      {
        id: 1,
        name: "压力疏导  ",
        isActive: false
      },
      {
        id: 2,
        name: "我要倾诉  ",
        isActive: false
      },
      {
        id: 3,
        name: "婚姻关系  ",
        isActive: false
      },

      {
        id: 4,
        name: "亲子教育  ",
        isActive: false
      },
      {
        id: 5,
        name: "成长解惑  ",
        isActive: false
      },
      {
        id: 6,
        name: "人际关系  ",
        isActive: false
      },/*
          {
            id:7,
            name:"抑郁疏导",
            isActive:false
          },
          {
            id:8,
            name:"职场心理",
            isActive:false
          },
          {
            id:9,
            name:"法律咨询",
            isActive:false
          },
          */
    ],

    cap_info: {
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      width: 0,
      bottom: 0
    },

    list_info_data:[
      {
        id:"111",//数据库ID
        name:"阮智祥",
        achieveLabel:["二级心理咨询师"], //头衔
        expertLabel:["恋爱心理","压力疏导","我要倾诉"], //代表四个不同的领域 具体指代以首页顺序为主
        price:150,
        customNum:1314, //曾今帮助服务到的人的数量
        fanNum:2333, //粉丝数量
        timeNum:4023,//服务小时数
        star:5, //评分
        avatar:"../../jpg/avatar/1.jpg",
      },


    ]
  },

  onReady: function () {

    let menuButton = wx.getMenuButtonBoundingClientRect()
    this.setData({
      cap_info: {
        height: menuButton.height,
        right: menuButton.right,
        left: menuButton.left,
        top: menuButton.top,
        width: menuButton.width,
        bottom: menuButton.bottom
      }
    });
    //console.log(cap_info);
  },
  handleTabsChange(e) {
    const { index } = e.detail;
    let tabs = JSON.parse(JSON.stringify(this.data.tabs));

    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);

    this.setData({
      tabs
    })
  },


})