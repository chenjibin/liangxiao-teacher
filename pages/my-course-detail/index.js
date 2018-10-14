// pages/my-course-detail/inde.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  keepnamelist:function(){
    wx.navigateTo({
      url: "/pages/keepname/keepname-list/keepname-list",
    })
  },
   keepnameId: function () {
    wx.navigateTo({
      url: "/pages/keepname/keepname",
    })
  },
  mycourseRecord: function () {
    wx.navigateTo({
      url: "/pages/my-course-record/index",
    })
  }
});