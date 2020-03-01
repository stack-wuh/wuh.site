import request from '../utils/request'

export const getList = (params = {}) => request({
    url: '/articles',
    params
})

export const getDetailById = id => request({
    url: '/articles/detail',
    params: {
        id
    }
})