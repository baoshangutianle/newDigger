import api from '../fetch/api'
import { router,store } from '../main.js'
import Vue from 'vue'
var a = 0
// //登录超时
function timeoutLogin(data) {
  if(data.op.code == 'E' && data.op.errorcode==='-10002'){
    if(a == 1){
      return
    }
    a = 1
    Vue.$vux.alert.show({
      title: '提示',
      content: '登录超时',
      onHide () {
        console.log(router.push('Login'))
      }
    })
  }else{
    Vue.$vux.alert.show({
      title: '提示',
      content: data.op.info? data.op.info: '',
    })
  }
}
//网络异常
function yiChangFun(err){
  Vue.$vux.toast.show({
    text: '网络异常',
    type:'warn',
    position:'middle',
  })
  console.log(err)
}
const actions = {
//获取员工
  getemployeelist ({dispatch,commit}){
    let query = {}
    query.sid = localStorage.diggsid
    api.getemployeelist(query).then(data => {
      console.log('获取员工',data)
      if(data.op.code == 'Y'){
        commit('setEmployeelist',data.datalist)
      }else{
        timeoutLogin(data)
      }
    }, err => {
      yiChangFun(err)
    });
  },
}
export default actions
