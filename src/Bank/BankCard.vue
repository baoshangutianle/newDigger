<style lang="less" rel="stylesheet/less">
  @import "../assets/css/common.less";
  @import "BankCard.less";
</style>
<template>
  <div class="page-body BankCard">
    <x-header :left-options="{backText: ''}">我的银行卡</x-header>
    <div class="card">
      <img class="img1" src="../assets/img/zhaoshang.png" alt="">
      <div class="disMid">
        <div class="word1">招商银行</div>
        <div class="word2">储蓄卡</div>
      </div>
      <flexbox>
        <flexbox-item><div class="flex-demo">6888</div></flexbox-item>
        <flexbox-item><div class="flex-demo txtc">****</div></flexbox-item>
        <flexbox-item><div class="flex-demo txtr">5478</div></flexbox-item>
      </flexbox>
    </div>
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
