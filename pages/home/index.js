// pages/home/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/banner-img.png',
      '/images/banner-img.png',
      '/images/banner-img.png',
      '/images/banner-img.png'
    ],
    swiperCurrent: 0,
    caselist:[]
  },
  swiperChangeHandle(event) {
    this.setData({
      swiperCurrent: event.detail.current
    })
  },
  // 在教课程跳转点名
  getTeacheridDetail: function (event) {
    var Teacherid = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/keepname/keepname?id=" + Teacherid
    })
    console.log("/pages/keepname/keepname?id=" + Teacherid)
  },
  toTeacherList() {
    wx.navigateTo({
      url: '/pages/my-course-detail/index'
    })
  },
  toCourseList() {
    wx.navigateTo({
      url: '/pages/keepname/keepname'
    })
  },
  VipcommonOpen() {
    wx.navigateTo({
   url: "/pages/vip-course-detail/index",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getTeacherid();
      wx.showTabBar({
        aniamtion: true
      })
  },
  getTeacherid: function () {
    var that = this;
    // wx.showLoading({
    //   title: '加载中',
    //   mask: true,
    // })
    const mock = [
      { courseId: 1, courseName: "中级街舞训练班", courseType: "1", campusId: 2, campusName: "10", signTime: "每周二、四下午4点", status: 1 },
      { courseId: 2, courseName: "初级街舞训练班", courseType: "1", campusId: 2, campusName: "20", signTime: "每周一、三下午5点", status: 0 },
      { courseId: 3, courseName: "高级街舞训练班", courseType: "1", campusId: 2, campusName: "30", signTime: "每周二、四下午6点", status: 1 },
      { courseId: 4, courseName: "特级街舞训练班", courseType: "1", campusId: 2, campusName: "40", signTime: "每周一、三下午3点", status: 0 },
    ]
    this.setData({
      caselist: mock
    })
  },
})