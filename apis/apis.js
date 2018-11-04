import request from './request.js'
class apis {
  constructor() {
    this._baseUrl = 'https://www.keshiguanjia.com/api/'
    this._defaultHeader = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // http://result.eolinker.com/z4RAcFIffee48fe3a9d96eeb416e04ed53abb77ed13c73b?uri=/xcx/user/studentLogin
    // http://www.keshiguanjia.com
    // http://zxkwxtest.s1.natapp.cc
    this._request = new request(this._defaultHeader)
    this._request.setErrorHandler(this.errorHander)
  }
  setCookie(data) {
    this._request.setCookie(data)
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
    return this._request.postRequest(this._baseUrl + 'teacherManage/getTeacherCourselog', data).then(res => res.data)
  }
  /**
   * 注册）
   */
  register(data) {
    return this._request.postRequest(this._baseUrl + 'sign/up/organizer', data).then(res => res.data)
  }
  /**
   * 获取短信验证码
   */
  verifyPhoneMessage(phone, data) {
    return this._request.postRequest(`${this._baseUrl}sign/verify/phone/${phone}`, data).then(res => res.data)
  }
}
export default apis