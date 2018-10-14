// compoments/fs-date-picker.js
const dayjs = require('../../libs/dayjs.min.js');
const NOW_MONTH = dayjs().format('YYYY-MM');
const NOW_MONTH_NEW = dayjs().format('YYYYMM');
const toDay = dayjs().format('YYYYMMDD');
const WINDOW_WIDTH = wx.getSystemInfoSync().windowWidth;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hasClassArr: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nowMonth: NOW_MONTH,
    dateMonth: NOW_MONTH_NEW,
    chooseDate: '',
    arr: [],
    sysW: WINDOW_WIDTH / 7,
    sysH: WINDOW_WIDTH / 7 * 0.7 - 10,
    lastDay: null,
    firstDay: null,
    toDay: toDay,
    weekArr: ['一', '二', '三', '四', '五', '六', '日']
  },
  ready() {
    this.createDateData(NOW_MONTH)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dateChoose({currentTarget}) {
      let date = currentTarget.dataset.day;
      if (this.data.chooseDate && this.data.chooseDate === date) {
        this.setData({
          'chooseDate': ''
        })
        this.triggerEvent('date-item-change', { date: this.data.dateMonth});
      } else {
        this.setData({
          'chooseDate': date
        })
        this.triggerEvent('date-item-change', { date: date });
      }
    },
    createDateData(ym) {
      const days = dayjs(ym).daysInMonth();
      const monthString = dayjs(ym).format('YYYYMM');
      let firstDay = dayjs(dayjs(ym).startOf('month')).day(); // 第一天是星期几
      firstDay = firstDay === 0 ? 6 : firstDay - 1;
      let arr = [];
      for (var i = 1; i < days + 1; i++) {
        let obj = {};
        let day = (i + '').length === 1 ? '0' + i : i + ''
        obj.num = i;
        obj.date = monthString + day;
        obj.hasClass = this.data.hasClassArr.indexOf(obj.date) > -1
        arr.push(obj);
      }
      this.setData({
        firstDay,
        arr
      });
    },
    forwordMonth() {
      const nowMonth = dayjs(this.data.nowMonth).add(1, 'month').format('YYYY-MM');
      const dateMonth = dayjs(this.data.nowMonth).add(1, 'month').format('YYYYMM');
      this.setData({
        nowMonth,
        dateMonth
      })
      this.createDateData(nowMonth)
      this.triggerEvent('month-change', {date: dateMonth});
    },
    beforeMonth() {
      const nowMonth = dayjs(this.data.nowMonth).subtract(1, 'month').format('YYYY-MM');
      const dateMonth = dayjs(this.data.nowMonth).add(1, 'month').format('YYYYMM');
      this.setData({
        nowMonth,
        dateMonth
      })
      this.createDateData(nowMonth)
      this.triggerEvent('month-change', {date: dateMonth});
    }
  }
})
