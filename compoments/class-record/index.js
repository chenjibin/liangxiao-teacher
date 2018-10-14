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
    commonLevel: 0
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