<template>
  <div id="" class="cart-bottom-bar">
    <div class="button-bar-left">
      <!-- 全选按钮 -->
      <check-button :is-checked="isSelectAll" @click.native="checkAllClick"/>
      <span class="check-all">全选</span>
      <div>
        <span>合计：</span>
        <span class="total-price">￥{{getTotalPrice}}</span>
      </div>
    </div>

    <div class="button-bar-right" @click="clickPay">
      <p class="to-pay">去付款({{checkProduct}})</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import checkButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'
export default {
  name: 'CartBottomBar',
  components: {
    checkButton
  },
  computed: {
    ...mapGetters(['cartList']),
    getTotalPrice(){
      //计算总价格
      return this.cartList.filter(item => item.checked).reduce((preval, currentItem) => preval + currentItem.price * currentItem.count, 0).toFixed(2)
    },
    checkProduct(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      //当cartList长度为0时直接返回fasle
      if(this.cartList.length === 0) return false
      //find遍历法
      return !this.cartList.find(item => !item.checked)
      //普通遍历法
      // for(let item of this.cartList){
      //   if(!item.checked){
      //     return false
      //   }
      // }
      // return true
    }
  },
  methods: {
    //监听全选按钮的点击
    checkAllClick(){
      this.$store.dispatch('checkAll', !this.isSelectAll)
    },
    clickPay(){
      if(!this.checkProduct){
        this.$toast.show('请选择要购买的商品', 2000)
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar {
  height: 44px;
  width: 100%;
  background-color: rgb(249, 249, 249);
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
}

.button-bar-left {
  flex: 7.5;
  display: flex;
  align-items: center;
}

.total-price {
  color: var(--color-tint);
}

.button-bar-right  {
  flex: 2.5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  background-color: var(--color-tint);
  color: #fff;
}

/* .button-bar-right .to-pay {
  height: 44px;
} */

.check-all {
  font-size: 18px;
  margin-right: 15px;
}
</style>