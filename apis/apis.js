import request from './request.js'
class apis {
  constructor() {
    this._baseUrl = 'http://zxkwxtest.s1.natapp.cc/xcx/'
    this._defaultHeader = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // http://result.eolinker.com/z4RAcFIffee48fe3a9d96eeb416e04ed53abb77ed13c73b?uri=/xcx/user/studentLogin
    // http://www.keshiguanjia.com
    // http://zxkwxtest.s1.natapp.cc
    this._request = new request(this._defaultHeader)
    this._request.setErrorHandler(this.errorHander)
  }

  /**
   * 统一的异常处理方法
   */
  errorHander(res) {
    console.error(res)
  }
  /**
   * 用户登录
   */
  userLogin(data) {
    return this._request.postRequest(this._baseUrl + 'user/teacherLogin', data).then(res => res.data)
  }
  /**
   * 首页在教课程
   */
  userOrganize(data) {
    return this._request.postRequest(this._baseUrl + 'teacherManage/getCourseByTeacherid', data).then(res => res.data)
  }
  /**
   * 首页点名签到
   */
  getGoodTeacher(data) {
    return this._request.postRequest(this._baseUrl + 'teacherManage/getStudentsByCourseid', data).then(res => res.data)
  }
  /**
   * 上课记录，日历等
   */
  teacherList(data) {
    return this._request.postRequest(this._baseUrl + 'teacherManage/getTeacherCourselogByCourse', data).then(res => res.data)
  }
  /**
   * 课程列表（时间倒序）
   */
  courseList() {
    return this._request.postRequest(this._baseUrl + 'teacherManage/getTeacherCourselog(有同名方法)', data).then(res => res.data)
  }
  /**
   * 首页
   */
  // teacherCourse() {
  //   return this._request.postRequest(this._baseUrl + 'studentManage/getCourseByTeacherId', data).then(res => res.data)
  // }
  /**
   * 上课记录评价
   */
  // setCourseScore() {
  //   return this._request.postRequest(this._baseUrl + 'studentManage/setCourseScore', data).then(res => res.data)
  // }
  // /**
  //  * 查询所有新闻列表
  //  */
  // getNews(page = 1, size = 10) {
  //   let data = {
  //     page,
  //     size
  //   }
  //   return this._request.getRequest(this._baseUrl + 'news/client', data).then(res => res.data)
  // }

  // /**
  //  * 获取所有课程
  //  */
  // getCourseList(page = 1, size = 10, key = null) {
  //   let data = key != null ? {
  //     page: page,
  //     size: size,
  //     queryValue: key
  //   } : {
  //     page: page,
  //     size: size
  //   }
  //   return this._request.getRequest(this._baseUrl + '/course/mobile', data).then(res => res.data)
  // }
}
export default apis
