<style lang="less" rel="stylesheet/less">
  @import "../assets/css/common.less";
  @import "Reward.less";
</style>
<template>
  <div class="total">
    <x-header :left-options="{backText: ''}">打赏</x-header>
    <i class="gap"></i>
    <div class="content">
        <div class="rewardLogo">
        <img src="../assets/img/rewardLogo.png" alt="" class="logo">
        </div>
        <h2 class="slogan">仰卧起坐</h2>
        <h2 class="slogan">为健康加油，为人生喝彩</h2>
        <div class="rewardPriceTitle">打赏金额</div>
        <div class="rewardPrice">
            <i class="symbol"></i>
            <x-input placeholder="请输入打赏金额" class="input" :show-clear="false"></x-input>
        </div>
    </div>
    <div class="footer">
        <x-button class="reward" type="primary">打赏</x-button>
    </div>
  </div>
</template>
<script>
export default {
    components: {
        
    },
    data () {
        return {
            
        }
    }
}
</script>

