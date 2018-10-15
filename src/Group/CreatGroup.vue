<style lang="less" rel="stylesheet/less">
  @import "../assets/css/common.less";
  @import "CreatGroup.less";
</style>
<template>
  <div class="page-body CreatGroup">
    <x-header :left-options="{backText: ''}">创建群组</x-header>
    <x-input placeholder="请输入群组名称"></x-input>
    <x-button class="" type="primary">创建</x-button>
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
      employeelist: state => state.employeelist,
    }),
    store,
    watch:{
      employeelist:function (val) {
        if(val){
          this.employeelistFun()
        }
      }
    },
    methods: {
      ...mapActions([
        "getemployeelist"
      ]),
      ...mapMutations([

      ]),
      employeelistFun:function () {
        this.$vux.alert.show({
          title: '提示',
          content: '创建成功',
        })
        this.$vux.toast.text('hello', 'middle')
      },
    },
    created(){
      this.getemployeelist()
      console.log(this.getNowDate());
    }
  }
</script>
