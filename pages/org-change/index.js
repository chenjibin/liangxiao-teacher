// pages/org-change/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyList: [],
    currentCompany: {}
  },
  chooseItem({currentTarget}) {
    app.setGlobalData('currentOrganize', currentTarget.dataset.company);
    wx.setStorageSync('currentOrganize', currentTarget.dataset.company);
    wx.reLaunch({
      url: '/pages/my/index'
    })
    // wx.navigateBack({
    //   delta: 1
    // })
  },
  getOrgList() {
    const studentId = app.globalData.userInfo.studentId
    app.apis.getUserOrganizeList({ studentId }).then(res => {
      if (res.code) {
        this.setData({
          'companyList': res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      'currentCompany': app.globalData.currentOrganize
    })
    this.getOrgList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})