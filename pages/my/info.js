// pages/my/info.js
const dayjs = require('../../libs/dayjs.min.js');
const NOW_DATE = dayjs().format('YYYY-MM-DD');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    testImg: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
    region: [],
    date: NOW_DATE,
    nowDate: NOW_DATE,
    sexIndex: 0,
    sexArray: ['男', '女']
  },
  bindPickerChange({detail}) {
    this.setData({
      sexIndex: detail.value
    })
  },
  bindRegionChange({detail}) {
    this.setData({
      region: detail.value
    })
  },
  bindDateChange({detail}) {
    this.setData({
      date: detail.value
    })
  },
  avatorChange() {
    const vm = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePath = res.tempFilePaths[0]
        console.log(tempFilePath)
        vm.setData({
          testImg: tempFilePath
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})