import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance = axios.create({
        timeout: 5000
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {})
    return instance(config)
}