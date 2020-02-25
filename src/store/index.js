import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
//安装插件
Vue.use(Vuex)

const state = {
    cartList: []
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

//导出store
export default store