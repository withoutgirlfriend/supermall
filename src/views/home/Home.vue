<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @toggleItem="toggleItem" ref="tabControl1" v-show="isFixed" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3" @pulling-up="loadMore" :pull-up-load="true">
      <home-swiper :banners="banners" @imageLoad="imageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @toggleItem="toggleItem" ref="tabControl"/>
      <goods-list :goods="showGoods"/>  
    </scroll>  
    <back-top @click.native="backClick"  v-show="isShow" ></back-top>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from "network/home/home"  
  import { debounce } from 'common/tools'
export default {
    name: 'Home',
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShow: false,
        tabControlTop: 0,
        isFixed: false,
        scrollY: 0
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata(),
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh, 20)
      this.$bus.$on("homeImageLoad", () =>{
        refresh();
      })
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.scrollY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated(){   
      this.scrollY = this.$refs.scroll.scrollY()
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /*
      * 网络请求相关方法
      */
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res =>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++
          //完成上拉加载
          this.$refs.scroll.finishPullUp()
        })
      },
      /*
      * 事件监听相关方法
       */
      toggleItem(index){
        switch(index){
          case 0: this.currentType = 'pop';break;
          case 1: this.currentType = 'new';break;
          case 2: this.currentType = 'sell';break;
        }
        this.$refs.tabControl1.currentItem = index
        this.$refs.tabControl.currentItem = index
      },
      backClick(){
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position){
        //返回顶部显示
        this.isShow = -position.y > 1000 ? true : false
        //tabControl显示
        this.isFixed = -position.y > this.tabControlTop ? true : false
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      imageLoad(){
        this.tabControlTop = this.$refs.tabControl.$el.offsetTop
      },
      //防抖函数
      // debounce(func, delay){
      //   let timer = null
      //   return (...args) =>{
      //     if(timer) clearTimeout(timer)
      //     timer = setTimeout(() => {
      //       func.apply(this, args)
      //     }, delay);
      //   }
      // }
    }
}
</script>

<style scope>

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0; */
}

#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}

.tab-control {
  position: relative
}

.content {
  /* height: calc(100% - 93px); */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;  
  overflow: hidden;
}


</style>
