<template>
  <div id="" class="" ref="wrapper">
    <div><slot></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  name: 'Scroll',
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    this.scroll.on('scroll', position =>{
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () =>{
      this.$emit('pulling-up')
    })
  },
  methods: {
    scrollTo(x = 0, y = 0, time = 300){
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
</style>