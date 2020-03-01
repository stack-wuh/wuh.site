import {
    getList,
    getDetailById
} from 'api/article'

export const fetchArtList = () => dispatch => {
    getList().then(res => {
        dispatch({
            type: 'ARTICLE_SAVE',
            data: res.data.data
        })
    })
}

export const fetchDetailById = id => dispatch => {
    getDetailById(id).then(res => {
        dispatch({
            type: 'DETAIL_SAVE',
            data: res.data.info[0] || {}
        })
    })
}