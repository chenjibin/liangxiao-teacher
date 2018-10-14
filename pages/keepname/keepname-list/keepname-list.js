Page({
  data: {
    testImg: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
    showModalStatus: false,
    showView: true,
      stuData: [
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 1,
          checked: true
        },
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 2,
          checked: true
        },
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 3,
          checked: true
        },
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 4,
          checked: false
        },
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 5,
          checked: false
        },
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 6,
          checked: true
        },
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 7,
          checked: true
        },
        {
          avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
          nick: '小元宝',
          phone: '15061998877',
          sex: '男',
          age: '10',
          uid: 8,
          checked: false
        }
      ],
      stuValue: []
    },
    stuChange({ detail }) {
      let objArr = this.data.stuData;
      let valueArr = detail.map(Number);
      objArr.forEach((item) => {
        const flag = valueArr.indexOf(item.uid) > -1
        item.checked = flag;
      })
      this.setData({
        'stuData': objArr,
        'stuValue': detail.map(Number),
      })
    },
    showInfo({ detail }) {
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
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画 
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭 
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
  },
  bindTouchStart: function (e) {
    this.startTime = e.timeStamp;
  },
  bindTouchEnd: function (e) {
    this.endTime = e.timeStamp;
  },
  bindTap: function (e) {
    if (this.endTime - this.startTime < 350) {
      var that = this;
      that.setData({
        showView: (!that.data.showView)
      })
    }
  }
})