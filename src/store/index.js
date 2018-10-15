import Vue from 'vue'
import Vuex from 'vuex'
import mutations from  './mutations' //引入mutations
import actions from './actions'   //引入actions
Vue.use(Vuex)

const state = {
  employeelist:[],  //员工列表
}

export  default  new Vuex.Store({//导出store
  state,
  mutations,
  actions})
