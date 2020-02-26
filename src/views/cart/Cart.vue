<template>
  <div class="cart">
    <!-- 顶部 -->
    <nav-bar class="cart-bar">
      <template v-slot:center>
        <div class="center">购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <!-- 购物车列表 -->
      <cart-list></cart-list>
    <!-- 商品价格汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList'])
    }
}
</script>

<style scoped>
  .cart-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>