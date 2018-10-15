<style lang="less" rel="stylesheet/less">
  @import "../assets/css/common.less";
  @import "NoBankCard.less";
</style>
<template>
  <div class="page-body NoBankCard">
    <x-header :left-options="{backText: ''}">我的银行卡</x-header>
    <img class="img1" src="../assets/img/weibangka.png" alt="">
    <div class="word1">您还未绑定银行卡</div>
    <x-button class="" type="primary">立即绑卡</x-button>
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
