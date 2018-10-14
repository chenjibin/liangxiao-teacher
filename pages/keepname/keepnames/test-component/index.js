// // pages/test-component/index.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     stuData: [
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 1,
//         checked: true
//       },
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 2,
//         checked: true
//       },
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 3,
//         checked: true
//       },
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 4,
//         checked: false
//       },
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 5,
//         checked: false
//       },
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 6,
//         checked: true
//       },
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 7,
//         checked: true
//       },
//       {
//         avator: 'http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png',
//         nick: '小元宝',
//         phone: '15061998877',
//         sex: '男',
//         age: '10',
//         uid: 8,
//         checked: false
//       }
//     ],
//     stuValue: []
//   },
//   stuChange({ detail }) {
//     let objArr = this.data.stuData;
//     let valueArr = detail.map(Number);
//     objArr.forEach((item) => {
//       const flag = valueArr.indexOf(item.uid) > -1
//       item.checked = flag;
//     })
//     this.setData({
//       'stuData': objArr,
//       'stuValue': detail.map(Number),
//     })
//   },
//   showInfo({detail}) {
//     let objArr = this.data.stuData;
//     objArr.forEach((item) => {
//       const flag = item.uid === detail;
//       if (flag) {
//         item.infoShow = !item.infoShow
//       } else {
//         item.infoShow = false
//       }
//     })
//     this.setData({
//       'stuData': objArr
//     })
//   }
// })
