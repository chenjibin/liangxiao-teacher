// compoments/fs-rate/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    level: {
      type: Number,
      value: 0
    },
    fullPoint: {
      type: Number,
      value: 5
    },
    size: {
      type: String,
      value: 'small'
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
    starClickHandler({ currentTarget = {} }) {
      const dataset = currentTarget.dataset || {};
      console.log(dataset)
      const { starnum } = dataset;
      this.triggerEvent('star-click', { starnum });
    }
  }
})
