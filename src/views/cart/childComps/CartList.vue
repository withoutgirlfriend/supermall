<template>
  <div id="" class="cart-list">
    <scroll class="scroll" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import CartListItem from './CartListItem'

import Scroll from 'components/common/scroll/Scroll'

import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated(){
      //进入CartList时刷新scroll的可滚动高度
      this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.scroll {
  height: calc(100vh - 44px - 49px - 44px);
  overflow: hidden;
}
</style>  