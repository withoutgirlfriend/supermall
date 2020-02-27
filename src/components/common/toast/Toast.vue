<template>
  <div id="" class="toast" v-show="isShow">
    <div class="messge">{{message}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Toast',
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '默认内容', delay = 1500){
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, delay);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 129, 152, .85);
    padding: 8px 10px;
    color: #fff;
    z-index: 999;
    border-radius: 5px;
  }
</style>