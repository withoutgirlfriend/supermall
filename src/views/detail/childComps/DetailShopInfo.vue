<template>
  <div id="" class="shop-info">
    <div class="shop-title">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-desc">
      <div class="desc-left">
        <div class="all-sell">
          <div class="sell-number">{{(shop.sells/10000).toFixed(1)}}万</div>
          <span class="text">总销量</span>
        </div>
        <div class="all-goods">
          <div class="goods-number">{{shop.allGoods}}</div>
          <span class="text">全部宝贝</span>
        </div>
      </div>
      <div class="desc-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td style="padding: 0 7px 0 15px;" :style="isRed(item.isBetter)">{{item.score}}</td>
            <td style="color: #fff" :style="bgIsRed(item.isBetter)">{{isBetter(item.isBetter)}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
  methods: {
    isBetter(isBetter){
      return isBetter ? '高' : '低'
    },
    isRed(isBetter){
      return isBetter ? {color: 'red'} : {color: 'green'}
    },
    bgIsRed(isBetter){
      return isBetter ? {backgroundColor: 'red'} : {backgroundColor: 'green'}
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.shop-info {
  padding: 0 8px;
}

.shop-title {
  margin: 10px 0
}

.shop-title img {
  width: 50px;
  border-radius: 25px;
  border: 1px solid #ccc;
  vertical-align: middle;
}

.shop-name {
  margin-left: 10px;
}

.shop-desc {
  display: flex;
  color: #000;
  /* line-height: 25px; */
  padding: 10px 0;
}

.desc-left {
  text-align: center;
  flex: 1;
  display: flex;
}

.all-sell {
  flex: 1;
}

.all-goods {
  flex: 1;
}

.text {
  font-size: 14px;
}

.sell-number,
.goods-number {
  margin: 23px 0 5px 0;
}

.desc-right {
  flex: 1;
  position:relative;
}

.desc-right::before {
  content: '';
  display: block;
  width: 0.5px;
  height: 40px;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-20px)
}

table {
  font-size: 14px;
  float: right;
  border-spacing: 0 10px;
}

</style>