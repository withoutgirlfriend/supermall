<template>
  <div id="tab-bar-item">
      <div><slot name="item-icon"></slot></div>
      <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name: "TabBarItem"
}
</script>

<style>
    #tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    #tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        margin-bottom: 2px;
        vertical-align: middle;
    }
</style>