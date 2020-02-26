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
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct) {
            context.commit(ADD_COUNT, oldProduct)
        } else {
            payload.count = 1
            context.commit(ADD_TO_CART, payload)
        }
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