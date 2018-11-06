var app = getApp();

Page({
  data: {
    testImg: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
    showModalStatus: false,
    showView: true,
    animationData: {},
    arrLenght: 0,
    canSingn: false,
    stuData: [{
        avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
        nick: '刘亦篪',
        phone: '18036678906',
        sex: '男',
        age: '8',
        uid: 1,
        checked: false
      },
      {
        avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
        nick: '张涵博',
        phone: '15061998877',
        sex: '男',
        age: '10',
        uid: 2,
        checked: false
      },
      {
        avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
        nick: '卞玉轩',
        phone: '15252806688',
        sex: '男',
        age: '9',
        uid: 3,
        checked: false
      },
      {
        avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
        nick: '陈俊宇',
        phone: '15861206411',
        sex: '男',
        age: '11',
        uid: 4,
        checked: false
      },
      {
        avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
        nick: '常誉馨',
        phone: '18352187222',
        sex: '男',
        age: '12',
        uid: 5,
        checked: false
      }
    ],
    stuValue: []
  },
  stuChange({
    detail
  }) {
    console.log(detail)
    let objArr = this.data.stuData;
    let valueArr = detail.map(Number);
    let arrLength = detail.length;

    objArr.forEach((item) => {
      item.checked = valueArr.indexOf(item.uid) > -1;
    })
    this.setData({
      'stuData': objArr,
      'stuValue': detail.map(Number),
      'arrLenght': arrLength,
      'canSingn': !!arrLength
    })
  },
  showInfo({
    detail
  }) {
    let objArr = this.data.stuData;
    objArr.forEach((item) => {
      const flag = item.uid === detail;
      if (flag) {
        item.infoShow = !item.infoShow
      } else {
        item.infoShow = false
      }
    })
    this.setData({
      'stuData': objArr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function() {
    var animation = wx.createAnimation({
    });
    this.animation = animation;
    animation.opacity(0).step();
    this.setData({
      animationData: animation.export()
    })
  },
  fadeIn: function() {
    this.animation.opacity(1).step();
    this.setData({
      animationData: this.animation.export()
    })
  },
  fadeOut: function() {
    this.animation.opacity(0).step();
    this.setData({
      animationData: this.animation.export()
    })
  },
  onLoad: function(options) {
  },
  comfirm() {
    this.setData({
      showModalStatus: false
    })
    this.fadeOut()
  },
  signStu() {
    if (!this.data.canSingn) return
    this.setData({
      showModalStatus: true
    })
    this.fadeIn()
  },
  bindTouchStart: function(e) {
    this.startTime = e.timeStamp;
  },
  bindTouchEnd: function(e) {
    this.endTime = e.timeStamp;
  }
})