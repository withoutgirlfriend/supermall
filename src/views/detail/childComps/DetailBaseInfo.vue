<template>
  <div id="" class="base-info" v-if="goods">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="other-info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service-info">
      <div class="service" v-for="index in goods.services.length-2" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 10px 5px;
}

.title {
  font-size: 20px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.price {
  margin: 10px 0;
  /* position: relative; */
}

.new-price {
  font-size: 18px;
  color: var(--color-high-text)
}

.old-price {
  font-size: 12px;
  padding-left: 5px;
  text-decoration: line-through
}

.discount {
  position:relative;
  top: -5px;
  left: 3px;
  font-size: 12px;
  color:#fff;
  border-radius: 6px;
  padding: 2px;
  background-color: var(--color-tint);
}

.other-info {
  font-size: 14px;
  color: rgb(190, 190, 190);
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid rgba(210, 210, 210, 0.3);
}

.other-info {
  flex: 1;
}

.service-info {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 3px solid rgba(210, 210, 210, 0.3);
}

.service img{
  width: 16px;
  vertical-align: top;
}
</style>