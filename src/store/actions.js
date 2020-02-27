import {
    ADD_COUNT,
    ADD_TO_CART,
    CHANGE_CHECK,
    INCREASE_COUNT,
    DECREASE_COUNT,
    CHECK_ALL
} from './mutation-types'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            //查找购物车数组中是否有该商品
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                //商品数量+1
                context.commit(ADD_COUNT, oldProduct)
                resolve('商品数量+1')
            } else {
                //添加商品到购物车
                payload.count = 1
                context.commit(ADD_TO_CART, payload)
                resolve('成功添加到购物车')
            }
        })

    },
    changeCheck(context, payload) {
        let found = context.state.cartList.find(item => item.iid === payload)
        context.commit(CHANGE_CHECK, found)
    },
    inCount(context, payload) {
        let found = context.state.cartList.find(item => item.iid === payload)
        context.commit(INCREASE_COUNT, found)
    },
    deCount(context, payload) {
        let found = context.state.cartList.find(item => item.iid === payload)
        context.commit(DECREASE_COUNT, found)
    },
    checkAll(context, payload) {
        context.commit(CHECK_ALL, payload)
    }
}