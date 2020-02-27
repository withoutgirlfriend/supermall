import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelazyload from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

//安装toast插件
Vue.use(toast)

//使用懒加载插件
Vue.use(Vuelazyload, {
    //引入加载中的占位图
    loading: require('./assets/img/common/lazy_image.png')
})

//添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
    render: h => h(App),
    router,
    //将Vuex挂载在Vue实例上
    store
}).$mount('#app')