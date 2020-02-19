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
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @toggleItem="toggleItem"/>
    <goods-list :goods="showGoods"/>

    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
    <p>11</p>
    <p>12</p>
    <p>13</p>
    <p>14</p>
    <p>15</p>
    <p>16</p>
    <p>17</p>
    <p>18</p>
    <p>19</p>
    <p>20</p>
    <p>21</p>
    <p>22</p>
    <p>23</p>
    <p>24</p>
    <p>25</p>
    <p>26</p>
    <p>27</p>
    <p>28</p>
    <p>29</p>
    <p>30</p>
    <p>31</p>
    <p>32</p>
    <p>33</p>
    <p>34</p>
    <p>35</p>
    <p>36</p>
    <p>37</p>
    <p>38</p>
    <p>39</p>
    <p>40</p>
    <p>41</p>
    <p>42</p>
    <p>43</p>
    <p>44</p>
    <p>45</p>
    <p>46</p>
    <p>47</p>
    <p>48</p>
    <p>49</p>
    <p>50</p>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods} from "network/home/home"
export default {
    name: 'Home',
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList
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
        currentType: 'pop'
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
      }
    }
}
</script>

<style scope>

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

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
