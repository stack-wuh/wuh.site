import { combineReducers } from 'redux'

const store = {
    data: [],
    info: {}
}

export const fetcher = (state = store, action) => {
    switch(action.type) {
        case 'ARTICLE_SAVE' : return { ...state, data: [...action.data] }
        default: return state
    }
}

export const detailer = (state = store, action) => {
    switch(action.type) {
        case 'DETAIL_SAVE' : return {...state, info: action.data}
        default: return state
    }
}


const ARTICLE = combineReducers({
    fetcher,
    detailer
})

export default ARTICLE