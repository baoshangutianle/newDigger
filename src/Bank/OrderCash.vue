<style lang="less" rel="stylesheet/less">
  @import "../assets/css/common.less";
  @import "OrderCash.less";
</style>
<template>
  <div class="page-body OrderCash">
    <x-header :left-options="{backText: ''}">提现</x-header>
    <div class="cardBlock">
      <img src="../assets/img/zhaoshang.png" alt="">
      <div class="disMid">
        <div class="word1">招商银行</div>
        <div class="word2">尾号2574储蓄卡</div>
      </div>
    </div>
    <div class="cashBlock">
      <div class="title vux-1px-b">提现金额</div>
      <x-input title="￥" type="number" :show-clear="false" placeholder="请输入金额">
        <div slot="right">全部提现</div>
      </x-input>
    </div>
    <x-button class="" type="primary">确定</x-button>
  </div>
</template>

<script>
  import api from '../fetch/api'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  import store from '@/store/index'
  export default {
    components: {

    },
    data() {
      return {

      }
    },
    computed: mapState({

    }),
    store,
    methods: {
      ...mapActions([

      ]),
      ...mapMutations([

      ]),
    },
    created(){

    }
  }
</script>
