<template>
  <div id="" class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>
-..                                                                              
<script type="text/ecmascript-6">
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail, Goods, Shop} from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
export default {
  name: 'Detail',
  data(){
    return {
      iid: null,
      topImages: null,
      goods: null,
      shop: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  created(){
    //保存传入的iid
    this.iid = this.$route.params.iid
    //根据iid请求对应的详情数据
    getDetail(this.iid).then(res => {
      //获取轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages
      //获取商品信息数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //获取店铺数据
      this.shop = new Shop(data.shopInfo)
      
    })
  }
}
</script>
<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>