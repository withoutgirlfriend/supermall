<template>
  <div id="" class="">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailNavBar from './childComps/DetailNavBar'
export default {
  name: 'Detail',
  data(){
    return {
      iid: null
    }
  },
  components: {
    DetailNavBar
  },
  created(){
    this.iid = this.$route.params.iid
  }
}
</script>
<style scoped>
</style>