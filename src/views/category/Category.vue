<template>
  <div><h2>分类</h2>
  <button @click="clicks">按钮</button></div>
</template>

<script>
export default {
    name: 'Category',
    data(){
      return {
        message: 'hellow'
      }
    },
    methods: {
      clicks:()=>{
        console.log(this)
      }
      
    }
}
</script>

<style>

</style>