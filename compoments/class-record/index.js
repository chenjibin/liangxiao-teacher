// compoments/class-record/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recordData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    commomViisible: false,
    commonLevel: 0,
    commonList: [{
      title: '上课评价',
      img: '../../images/face-default.png'
    },
    {
      title: '非常糟糕',
      img: '../../images/face-1.png'
    },
    {
      title: '差',
      img: '../../images/face-2.png'
    },
    {
      title: '一般',
      img: '../../images/face-3.png'
    },
    {
      title: '满意',
      img: '../../images/face-4.png'
    },
    {
      title: '超赞',
      img: '../../images/face-5.png'
    }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toKeepNameList() {
      wx.navigateTo({
        url: "/pages/keepname/keepname-list/keepname-list",
      })
    }
  }
})