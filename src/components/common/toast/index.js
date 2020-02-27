import Toast from 'components/common/toast/Toast'

const obj = {}

obj.install = Vue => { //默认传入Vue
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)
        //2.通过new的方式，通过组件构造器创建一个组件对象
    const toast = new toastConstructor()
        // 3.将组件对象手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))
        //4.
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj