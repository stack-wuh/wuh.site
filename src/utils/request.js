import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://wuh.site/api/' ,
    timeout: 5e3,
})

instance.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data)
        return config
    }, 
    error => {
        console.log(error)
    }
)

instance.interceptors.response.use(response => {
    return Promise.resolve(response)
}, error => {
    return Promise.reject(error)
})

export default instance