<template>
  <div id="" class="cart-list-item" :class="{checked: product.checked}">
    <!-- 选择按钮 -->
    <check-button @click.native="checkClick" :is-checked="product.checked"/>
    <!-- 图片 -->
    <div class="product-image">
      <img class="product-image" :src="product.image" alt="">
    </div>
    <!-- 商品信息 -->
    <div class="product-info">
      <h1 class="product-title">{{product.title}}</h1>
      <p class="product-desc">{{product.desc}}</p>
      <div class="product-price">￥{{product.price}}</div>
      <div class="product-count">
        <button @click="increase">+</button>
        ×{{product.count}}
        <button @click="decrease" :disabled="isDisabled">-</button>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  data(){
    return {
      isdisabled: false
    }
  },
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    isDisabled(){
      //商品数量为1时减按钮禁用
      return this.product.count <= 1 ? true : false
    }
  },
  methods: {
    //监听选择按钮的状态
    checkClick(){
      //商品选择按钮发生点击时，派遣一个事件去store中改变选择按钮的状态
      this.$store.dispatch('changeCheck', this.product.iid)
      //商品选择按钮每次点击后都通过事件总线发送一个事件去遍历所有选择按钮的状态
      // this.$bus.$emit("checkChange")
    },
    increase(){
      //增加按钮点击时派遣一个事件去store中增加商品的count
      this.$store.dispatch('inCount', this.product.iid)
    },
    decrease(){
      //减少按钮点击时派遣一个事件去store中减少商品的count
      this.$store.dispatch('deCount', this.product.iid)
    },
  }
}
</script>

<style scoped>
  .checked {
    background-color: rgb(245, 245, 245);
  }

  .cart-list-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }

  .product-image img {
    height: 100px;
    width: 75px;
    border-radius: 5px;
    vertical-align: middle;
  }

  .product-info {
    height: 100px;
    position: relative;
    min-width: 0;
    margin: 0 15px;
  }

  .product-title,
  .product-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .product-title {
    margin-top: 0;
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }

  .product-desc {
    font-size: 15px;
  }

  .product-price {
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--color-tint);
  }

  .product-count {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  .product-count>button {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background-color: var(--color-tint);
    color:#fff;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  .product-count>button[disabled] {
    background-color: #ffa3b4;
  }
</style>