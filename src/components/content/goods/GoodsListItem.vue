<template>
  <div id="" class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{'￥'+goodsItem.price}}</span>
      <!-- <img src="~assets/img/common/collect.svg" alt=""> -->
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imageLoad(){
    this.$bus.$emit("imageLoad")
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 35px;
  position: relative;
  vertical-align: middle;
  width: 48%;
}

.goods-list-item img {
  border-radius: 5px;
  width: 100%;
}
.goods-info {
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
  margin-bottom: 3px;
  text-align: center;
  font-size: 13px;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  margin-right: 2px;
  color: var(--color-high-text)
}

.collect::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 3px;
  vertical-align: top;
  background: url("~assets/img/common/collect.svg") no-repeat 0/14px 14px;
}
</style>