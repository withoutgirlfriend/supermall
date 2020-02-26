import {
    ADD_COUNT,
    ADD_TO_CART,
    CHANGE_CHECK,
    INCREASE_COUNT,
    DECREASE_COUNT,
    CHECK_ALL
} from './mutation-types'

export default {
    [ADD_COUNT](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    [CHANGE_CHECK](state, payload) {
        payload.checked = !payload.checked
    },
    [INCREASE_COUNT](state, payload) {
        payload.count++
    },
    [DECREASE_COUNT](state, payload) {
        payload.count--
    },
    [CHECK_ALL](state, payload) {
        state.cartList.forEach(item => {
            item.checked = payload
        });
    }
}