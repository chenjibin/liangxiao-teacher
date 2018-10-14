Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasClassArr: [
      '20181002',
      '20181005',
      '20181006',
      '20181009',
      '20181015'
    ],
    courseRecord: [
      {
        courseLogId: 1,
        courseId: 1,
        courseName: '宝宝②班',
        teacherId: 1,
        teacherName: '袁行',
        score: 0,
        signTime: '今天 18：00'
      },
      {
        courseLogId: 1,
        courseId: 1,
        courseName: 'locking基础小班2',
        teacherId: 1,
        teacherName: '袁行',
        score: 0,
        signTime: '昨天 18：00'
      },
      {
        courseLogId: 1,
        courseId: 1,
        courseName: 'locking基础小班2',
        teacherId: 1,
        teacherName: '袁行',
        score: 3,
        signTime: '前天 18：00'
      },
      {
        courseLogId: 1,
        courseId: 1,
        courseName: '宝宝②班',
        teacherId: 1,
        teacherName: '袁行',
        score: 4,
        signTime: '06-05 18：00'
      }
    ]
  },
  mongthChangeHandler() {

  },
  dateItemChangeHandler() {

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