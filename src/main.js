// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

const FastClick = require('fastclick')
FastClick.attach(document.body)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './assets/css/reset.css'
import common from './assets/js/common.js'
Vue.use(common);

import { XHeader } from 'vux'
import { XButton } from 'vux'
import  { AlertPlugin } from 'vux'
import  { ToastPlugin } from 'vux'
import { XInput } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'


Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.component('x-input', XInput)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})

export { router,store}
