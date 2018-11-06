// pages/login/login.js
const {$Toast} = require('../../libs/iview/base/index');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canGet: true,
    setTime: 30,
    timmer: null,
    phoneNumber: ''
  },
  toRegister() {
    wx.navigateTo({
      url: '../register/index'
    })
  },
  phoneChangeHander({detail}) {
    const phoneNumber = detail.value
    this.setData({
      phoneNumber,
    })
  },
  getCodeHandle() {
    if (!this.data.phoneNumber) {
      $Toast({
        content: '请输入手机号'
      });
      return
    }
    if (this.data.canGet) {
      this.setData({
        canGet: false,
        setTime: this.data.setTime - 1
      })
      this.data.timmer = setInterval(() => {
        if (this.data.setTime === 0) {
          clearInterval(this.data.timmer)
          this.setData({
            canGet: true,
            setTime: 30
          })
        } else {
          this.setData({
            setTime: this.data.setTime - 1
          })
        }
      }, 1000)
    }
  },
  formSubmit({detail}) {
    const sendData = detail.value;
    if (!sendData.phone) {
      $Toast({
        content: '手机号码不能为空！'
      });
      return
    }
    if (!sendData.verifyCode) {
      $Toast({
        content: '验证码不能为空！'
      });
      return
    }
    app.apis.userLogin(sendData).then(res => {
      if (res.code) {
        app.apis.setCookie(res.data.sessionId);
        app.setGlobalData('userInfo', res.data.userInfo);
        wx.setStorageSync('userInfo', res.data.userInfo);
        wx.setStorageSync('sessionId', res.data.sessionId);
        let studentId = res.data.studentId;
        app.apis.getUserOrganizeList({studentId}).then(resp => {
          if (resp.code) {
            app.setGlobalData('currentOrganize', resp.data[0]);
            wx.setStorageSync('currentOrganize', resp.data[0]);
            wx.switchTab({
              url: '/pages/home/index'
            })
          }
        })
      } else {
        if (res.msg === '您还未注册') {
          wx.navigateTo({
            url: './error'
          })
        } else {
          $Toast({
            content: res.msg
          });
        }
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
