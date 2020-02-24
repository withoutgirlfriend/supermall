import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/hy',
        // baseURL: 'http://106.54.54.237:8000/api/hy',
        timeout: 5000
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {})
    return instance(config)
}