<style lang="less" rel="stylesheet/less">
  @import "../assets/css/common.less";
  @import "BindBankCard.less";
</style>
<template>
  <div class="page-body BindBankCard">
    <x-header :left-options="{backText: ''}">我的银行卡</x-header>
    <div class="inputBlock">
      <x-input title="持卡人" placeholder="请输入持卡人姓名" novalidate :show-clear="true" placeholder-align="right"></x-input>
      <x-input title="银行卡号" placeholder="请输入银行卡号" novalidate :show-clear="true" mask="9999 9999 9999 9999 9999" placeholder-align="right"></x-input>
      <x-input title="银行名称" placeholder="请输入银行名称，如招商银行" novalidate :show-clear="true" placeholder-align="right"></x-input>
    </div>
    <x-button class="" type="primary">绑定银行卡</x-button>
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
