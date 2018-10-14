// pages/login/login.js
const { $Toast } = require('../../libs/iview/base/index');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canGet: true,
    setTime: 30,
    timmer: null,
    phoneNumber: '',
    getOrganization:''
  },
  toRegister() {
    wx.navigateTo({
      url: '../register/index'
    })
  },
  getOrganization: function (e) {
    this.data.getOrganization = e.detail.value
  },
  phoneChangeHander({ detail }) {
    const phoneNumber = detail.value
    this.setData({
      phoneNumber,
    })
  },
  getCodeHandle () {
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
  formSubmit({ detail }) {
    const sendData = detail.value;
    if (!sendData.phone) {
      $Toast({
        content: '手机号码不能为空！'
      });
      return
      // wx.switchTab({
      //   url: '/pages/home/index'
      // })
    }
    if (!sendData.verifyCode) {
      $Toast({
        content: '验证码不能为空！'
      });
      return
      // wx.switchTab({
      //   url: '/pages/home/index'
      // })
    }
    if (!sendData.companyId) {
      $Toast({
        content: '机构不能为空！'
      });
      return
      // wx.switchTab({
      //   url: '/pages/home/index'
      // })
    }
      wx.switchTab({
        url: '/pages/home/index'
      })
    // app.apis.userLogin(sendData).then(res => {
    //   if (res.code) {

    //   }
    //   console.log(res)
    // })
    // else {
    //   wx.navigateTo({
    //     url: './error'
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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