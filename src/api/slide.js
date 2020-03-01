import request from '../utils/request'

export const slideQuery = async () => request({
    url: '/menus'
})