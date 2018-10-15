<style lang="less" rel="stylesheet/less">
  @import "../assets/css/common.less";
  @import "singleRedP.less";
</style>
<template>
  <div class="page-body OrderCash">
    <x-header :left-options="{backText: ''}" class="header">发红包</x-header>
    
    <x-button class="" type="primary">塞钱进红包</x-button>
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
