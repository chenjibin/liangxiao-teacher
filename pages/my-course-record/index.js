// pages/my-course-detail/inde.js
Page({
  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
    showModalStatus: false
  },
  tabFun: function (e) {
    //获取触发事件组件的dataset属性
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    });
  },
  onLoad: function (options) {
  },
  keepnamelist: function () {
    wx.navigateTo({
      url: "/pages/keepname/keepname-list/keepname-list",
    })
  },
  keepnameId: function () {
    wx.navigateTo({
      url: "/pages/keepname/keepname",
    })
  }
});