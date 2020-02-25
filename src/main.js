import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
    render: h => h(App),
    router,
    //将Vuex挂载在Vue实例上
    store
}).$mount('#app')