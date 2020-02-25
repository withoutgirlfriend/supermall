<template>
  <div id="" class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="scroll" ref="scroll" @scroll="detailScroll" :probe-type="3">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-image :detail-image="detailImage" @image-load="imageLoad"/>
      <detail-goods-params ref="params" :goodsParams="goodsParams"/>
      <detail-comment ref="comment" :comment="goodsComment"/>
      <goods-list ref="recommend" :goods="recommend" class="recommends"/>
    </scroll>
    <back-top @click.native="backClick"  v-show="isShow" />
    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImage from './childComps/DetailImage'
import DetailGoodsParams from './childComps/DetailGoodsParams'
import DetailComment from './childComps/DetailComment'
import detailBottomBar from './childComps/detailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import { debounce } from 'common/tools'

import {getDetail, getRecommend, Goods, Shop} from 'network/detail'
import {backTopMixin} from 'common/mixin'
export default {
  name: 'Detail',
  mixins: [backTopMixin],
  data(){
    return {
      iid: null,
      topImages: [],
      goods: null,
      shop: {},
      detailImage: {},
      goodsParams: {},
      goodsComment: {},
      recommend: [],
      titleTopY: [],
      getTitleTopY: null,
      positionY: 0,
      currentI: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImage,
    DetailGoodsParams,
    DetailComment,
    detailBottomBar,
    Scroll,
    GoodsList
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
      //获取评论信息
      if(data.rate.cRate != 0){
      this.goodsComment = data.rate.list[0]
      }
    })
    //获取推荐信息
    getRecommend().then(res => {
      this.recommend = res.data.list;
    })

    this.getTitleTopY = debounce(() => {
      this.titleTopY = [],
      this.titleTopY.push(0)
      this.titleTopY.push(this.$refs.params.$el.offsetTop)
      this.titleTopY.push(this.$refs.comment.$el.offsetTop)
      this.titleTopY.push(this.$refs.recommend.$el.offsetTop)
      this.titleTopY.push(Number.MAX_VALUE)
    }, 200)
  },
  mounted(){
      const refresh = debounce(this.$refs.scroll.refresh, 20)
      this.$bus.$on("detailImageLoad", () =>{
        refresh();
      })
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getTitleTopY()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.titleTopY[index], 300);
    },
    detailScroll(position){
      //detailBar与滚动的联动
      this.positionY = -position.y;
      let length = this.titleTopY.length
      for(let i = 0; i < length-1 ; i++){
        if(this.currentI !== i && this.positionY >= this.titleTopY[i] && this.positionY < this.titleTopY[i + 1]){
          this.currentI = i;
          this.$refs.nav.currentIndex = i;
        }
      }
      //返回顶部的显示与隐藏
      this.isShow = -position.y > 1000 ? true : false
    },
    addToCart(){
      console.log('添加到购物车')
      //获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.price = this.goods.realPrice
      product.desc = this.goods.desc
      product.title = this.goods.title
      product.iid = this.iid
      this.$store.dispatch('addCart', product)
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
  height: calc(100% - 44px - 49px);
}

.recommends {
  margin-top: 15px;
}
</style>