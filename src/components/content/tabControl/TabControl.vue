<template>
  <div id="" class="tab-control">
      <div v-for="(item, index) in titles" 
      :key="index"
      class="tab-control-item" 
      :class="{active: index == currentItem}" 
      @click="clickItem(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'TabControl',
  data(){
      return {
          currentItem: 0
      }
  },
  methods: {
      clickItem(index){
          this.currentItem = index;
          this.$emit('toggleItem', index)
      }
  },
  props: {
      titles: {
          type: Array,
          default(){
              return []
          }
      }
  }
}
</script>
<style scoped>
.tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 10;
}

.tab-control-item {
    flex: 1;
} 

.tab-control-item span {
    padding: 3px;
}

.active {
    color: var(--color-high-text);
}

.active span {
    
    border-bottom: 3px solid var(--color-high-text);
}
</style>