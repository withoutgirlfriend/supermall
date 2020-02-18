<template>
  <div id="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="isActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#FF5777'
        }
    },
    data(){
        return {
            // isActive: true
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !=-1
        },
        isActiveStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick(){
            if(this.$route.path!=this.path){
            this.$router.replace(this.path)
            }
        }
    }
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
    .active {
        color:#FF5777;
    }
</style>