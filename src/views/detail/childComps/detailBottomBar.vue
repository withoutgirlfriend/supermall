<template>
  <div id="" class="bottom-bar">
    <div class="bar-left">
      <div class="service">
        <i class="service-icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="shop-icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="collect-icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="add-cart" @click="addToCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'detailBottomBar',
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.bottom-bar {
  display: flex;
}

.bar-left,
.bar-right {
  flex: 1;
  display: flex;
}

.bar-left>div {
  flex: 1;
  text-align: center
}

.bar-left>div>i {
  margin: 3px auto;
  display: block;
  width: 24.5px;
  height: 24.5px;
  background: url('~assets/img/detail/detail_bottom.png') no-repeat;
  background-size: 100%;
}

.service-icon {
  background-position: 0px -58px!important;
}
.shop-icon {
  background-position: 0px -110px!important;
}
/* .collect-icon {
  background-position: 0px 0px
} */

.add-cart,
.purchase {
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 18px;
}

.add-cart {
  background-color: #ffdf10;
  color: black;
}

.purchase {
  background-color: #ff789a;
  color: #fff;
}
</style>