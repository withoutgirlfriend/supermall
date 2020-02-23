<template>
  <div id="" class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-image :detail-image="detailImage" @image-load="imageLoad"></detail-image>
      <detail-goods-params :goodsParams="goodsParams"></detail-goods-params>
    </scroll>
  </div>
</template>
-..                                                                              
<script type="text/ecmascript-6">
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImage from './childComps/DetailImage'
import DetailGoodsParams from './childComps/DetailGoodsParams'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods, Shop} from 'network/detail'
export default {
  name: 'Detail',
  data(){
    return {
      iid: null,
      topImages: null,
      goods: null,
      shop: {},
      detailImage: {},
      goodsParams: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImage,
    DetailGoodsParams,
    Scroll
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
      //获取详情图片
      this.detailImage = data.detailInfo
      //获取参数信息
      this.goodsParams = data.itemParams
      console.log(this.goodsParams);
      
    })
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>
<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.scroll {
  height: calc(100% - 44px);
}
</style>