// compoments/fs-modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
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
    closeHandler(event) {
      console.log(event)
      this.triggerEvent('mask-close');
    }
  }
})
