Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasClassArr: [
      '20181002',
      '20181005',
      '20181006',
      '20181009',
      '20181015'
    ]
  },
  mongthChangeHandler() {

  },
  dateItemChangeHandler() {

  },
  commonOpen:function(){
    wx.navigateTo({
      url: "/pages/keepname/keepname-list/keepname-list",
    })
  },
  VipcommonOpen: function () {
    wx.navigateTo({
      url: "/pages/vip-course-detail/index",
    })
  }
})