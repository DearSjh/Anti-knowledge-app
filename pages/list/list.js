let wxparse = require("../../wxParse/wxParse.js");
Page({
  data: {
    list: {}
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
  onLoad: function (options) {
    this.title = options.title
    var that = this
    wx.request({
      url: 'https://news-at.zhihu.com/api/3/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           list: res.data.body
         })
      }
    })
  }
})
