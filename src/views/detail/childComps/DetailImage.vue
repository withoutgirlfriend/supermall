<template>
  <div id="" class="detail-image" v-if="detailImage.detailImage">
    <div class="deco">
      <div class="left"></div>
      <div class="text">{{detailImage.desc}}</div>
      <div class="right"></div>
      
    </div>
    <div v-for="(item, index) in detailImage.detailImage" :key="index">
      <div class="image-desc">
        {{item.key}}
      </div>
      <div >
        <img  v-for="(image, indexs) in item.list"
              :key="indexs" 
              :src="image" alt="" 
              @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailImage',
  props: {
    detailImage: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      counter: 0,
      // imageLength: 0
    }
  },
  methods: {
    imageLoad(){
      // if(++this.counter === this.imageLength){
      this.$emit('image-load')
      console.log(this.counter)
      // }
      
    }
  },
  // watch: {
  //   detailImage(){
  //     this.imageLength = this.detailImage.detailImage[0].list.length
  //   }
  // }
}
</script>
<style scoped>
img {
  width: 100%;
}

.deco {
  margin: 20px 15px 5px;
}

.left,
.right{
  width: 100px;
  height: 0.5px;
  background-color: #000;
  position: relative;
}

.text {
  padding: 20px 0;
}

.left::before,
.right::after {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #000;
  position: absolute;
  bottom: 0;
}

.left::before {
  left: 0;
}
.right::after {
  right: 0;
}

.image-desc {
  margin: 5px 0 5px 15px ;
}
</style>