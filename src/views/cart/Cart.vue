<template>
  <div class="cart">

    <nav-bar class="cart-bar">
      <template v-slot:center>
        <div class="center">购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'
export default {
    name: 'Cart',
    components: {
      NavBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
}
</script>

<style scoped>
  .cart-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>