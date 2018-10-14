// pages/register/index.js
const app = getApp();
const { $Toast } = require('../../libs/iview/base/index');
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
  getCodeHandle() {
    if (!this.data.phoneNumber) {
      $Toast({
        content: '请输入手机号'
      });
      return
    }
    if (this.data.canGet) {
      app.apis.verifyPhoneMessage(Number(this.data.phoneNumber), {}).then(res => {
        if (!res.code) {
          $Toast({
            content: res.msg
          });
        } else {
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
      })
    }
  },
  phoneChangeHander({ detail }) {
    const phoneNumber = detail.value
    this.setData({
      phoneNumber,
    })
  },
  formSubmit({ detail }) {
    const sendData = detail.value;
    console.log(sendData)
      // wx.redirectTo({
      //   url: './success'
      // })
    if (!sendData.name) {
      $Toast({
        content: '学校/公司名称不能为空！'
      });
      return
    }
    if (!sendData.phone) {
      $Toast({
        content: '手机号码不能为空！'
      });
      return
    }
    if (!sendData.vcode) {
      $Toast({
        content: '验证码不能为空！'
      });
      return
    }
    if (!sendData.password) {
      $Toast({
        content: '密码不能为空！'
      });
      return
    }
    app.apis.register(sendData).then(res => {
      if (res.code) {
         wx.redirectTo({
          url: './success'
        })
      } else {
        $Toast({
          content: res.msg
        });
      }
      console.log(res)
    })
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