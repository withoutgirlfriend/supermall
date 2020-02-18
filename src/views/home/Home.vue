<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import {getHomeMultidata} from "network/home/home";
export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}

#home {
  padding-top: 44px;
}
</style>