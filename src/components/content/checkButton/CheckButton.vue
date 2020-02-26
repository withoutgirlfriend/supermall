<template>
  <div id="" class="check-button" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .check-button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #ccc;
    margin: 5px;
    padding: 2px;
  }

  .check-button img {
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
  }

  .checked {
    background-color: var(--color-tint)!important;
    border-color: var(--color-tint);
  }
</style>