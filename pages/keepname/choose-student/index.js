// compoments/choose-student/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    stuData: {
      type: Array,
      value: []
    },
    value: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInfo({currentTarget}) {
      this.triggerEvent('show-info', currentTarget.dataset.info);
    },
    checkChange({detail}) {
      this.triggerEvent('item-change', detail.value);
    },
    hideAllInfo() {
      let objArr = this.data.stuData;
      objArr.forEach((item) => {
        item.infoShow = false
      })
      this.setData({
        'stuData': objArr
      })
    }
  }
})
