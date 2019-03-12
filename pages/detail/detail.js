// let wxparse = require("../../wxParse/wxParse.js");
Page({
  data: {
    art: {},
    body:''
  },
  onReady () {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onLoad (options) {
    var that = this
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
       
         that.setData({
           art: res.data,
         })
      }
    })
  }
})