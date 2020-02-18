<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Recommend',
    props: {
        recommends: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}

.recommend-item {
    flex: 1;
    width: 100%;
}
.recommend-item a img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>