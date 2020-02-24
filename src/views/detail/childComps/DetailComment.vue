<template>
  <div id="" class="goods-comment" >
    <div class="title">
      <div class="counter">用户评价</div>
      <div class="more">更多<i class="arrow-right"></i></div>
    </div>

    <div v-if="Object.keys(comment).length != 0">
      <div class="user" v-if="comment.user">
        <img :src="comment.user.avatar" alt="" class="user-image">
        <span class="user-name">{{comment.user.uname}}</span>
      </div>

      <div class="comment-content">
        <div class="comment-text">
          {{comment.content}}
        </div>
        <div class="comment-info" v-if="comment.created">
          <span class="date">{{comment.created|formatDate(comment.created)}}</span>
          <span>&nbsp;{{comment.style}}</span>
          <div class="comment-img" v-if="comment.images">
            <img :src="item" v-for="(item, index) in comment.images" :key="index" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-comment">
      <span>该商品暂无任何评价！</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailComment',
  props: {
    comment: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    formatDate(time){
      const date = new Date(time * 1000)
      const months = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
      const dates = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return date.getFullYear() + '-' + months + '-' + dates + ' ' + hours + ':' + minutes + ':' + seconds;
    }
  }
}
</script>

<style scoped>
.goods-comment {
  margin-top: 20px;
  padding: 15px;
  border-top: 3px solid rgba(204,204,204,.3);
  border-bottom: 3px solid rgba(204,204,204,.3);
}

.title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(204,204,204,.3);
}

.arrow-right {
  display: inline-block;
  height: 10px;
  width: 10px;
  border-top:2px solid #ccc;
  border-left:2px solid #ccc;
  transform: rotate(135deg)
}

.user {
  padding: 10px 0;
}

.user img {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-right: 10px;
  vertical-align: middle;
}

.comment-text {
  font-size: 14px;
}

.comment-info {
  margin: 10px 0;
  font-size: 13px;
}

.comment-img {
  margin-top: 10px;
}

.comment-img img {
  width: 65px;
  height: 65px;
  vertical-align: middle;
}

.comment-img img:nth-child(n+2) {
  margin-left: 5px;
}

.no-comment {
  margin-top: 15px;
  font-size: 14px;
}
</style>  