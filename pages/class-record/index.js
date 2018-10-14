Page({

  /**
   * 页面的初始数据
   */
  data: {
    commomViisible: false,
    hasClassArr: [
      '20181002',
      '20181005',
      '20181006',
      '20181009',
      '20181015'
    ],
    keshiData: [
      { name: '全部', value: -1 },
      { name: '宝宝②班', value: 1 },
      { name: 'locking基础小班2', value: 2 }
    ],
    keshiValue: -1,
    filterTitle: '全部课程',
    courseRecord: [
      {
        courseLogId: 1,
        courseId: 1,
        courseName: '宝宝②班',
        teacherId: 1,
        teacherName: '刘亦篪',
        score: 0,
        signTime: '今天 18：00'
      },
      {
        courseLogId: 1,
        courseId: 1,
        courseName: 'locking基础小班2',
        teacherId: 1,
        teacherName: '张涵博',
        score: 0,
        signTime: '昨天 18：00'
      },
      {
        courseLogId: 1,
        courseId: 1,
        courseName: 'locking基础小班2',
        teacherId: 1,
        teacherName: '卞玉轩',
        score: 3,
        signTime: '前天 18：00'
      },
      {
        courseLogId: 1,
        courseId: 1,
        courseName: '宝宝②班',
        teacherId: 1,
        teacherName: '陈俊宇',
        score: 4,
        signTime: '06-05 18：00'
      }
    ]
  },
  mongthChangeHandler() {

  },
  dateItemChangeHandler() {

  },
  commonOpenHandler() {
    this.setData({
      commomViisible: true
    })
  },
  closeMask() {
    this.setData({
      commomViisible: false
    })
  },
  getFilterText(value) {
    const result = this.data.keshiData.find(x => x.value === value)
    return result.name;
  },
  keshiChange({ detail }) {
    const title = this.getFilterText(+detail)
    this.setData({
      'keshiValue': +detail,
      'commomViisible': false,
      'filterTitle': title,
      'pageNum': 1
    })
    // this.getCourseRecord(this.data.nowMonth)
  },
  commonOpen:function(){
    wx.navigateTo({
      url: "/pages/keepname/keepname-list/keepname-list",
    })
  },
  VipcommonOpen: function () {
    wx.navigateTo({
      url: "/pages/vip-course-detail/index",
    })
  }
})