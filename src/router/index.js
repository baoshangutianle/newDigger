import Vue from 'vue'
import Router from 'vue-router'
const CreatGroup = () => import('@/Group/CreatGroup.vue').then(m => m.default)
const Reward = () => import('@/Reward/Reward.vue').then(m => m.default)
const NoBankCard = () => import('@/Bank/NoBankCard.vue').then(m => m.default)
const BankCard = () => import('@/Bank/BankCard.vue').then(m => m.default)
const BindBankCard = () => import('@/Bank/BindBankCard.vue').then(m => m.default)
const OrderCash = () => import('@/Bank/OrderCash.vue').then(m => m.default)
const singleRedP = () => import('@/RedPacket/singleRedP.vue').then(m => m.default)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/CreatGroup',
      name: 'CreatGroup',
      component: CreatGroup,
    },
    {
      path: '/Reward',
      name: 'Reward',
      component: Reward,
    },
    {
      path: '/NoBankCard',
      name: 'NoBankCard',
      component: NoBankCard,
    },
    {
      path: '/BankCard',
      name: 'BankCard',
      component: BankCard,
    },
    {
      path: '/BindBankCard',
      name: 'BindBankCard',
      component: BindBankCard,
    },
    {
      path: '/OrderCash',
      name: 'OrderCash',
      component: OrderCash,
    },
    {
      path: '/singleRedP',
      name: 'singleRedP',
      component: singleRedP,
    },
  ]
})
