import { combineReducers } from 'redux'
const store = {
    data: [],
    isShowDialog: false
}

export const fetcher = (state = store, action) => {
    switch (action.type) {
        case 'SLIDE_SAVE': return { ...state, data: [...action.payload]}
    
        default: return state
    }
}

export const toggleDialog = (state = store, action) => {
    switch (action.type) {
        case 'SLIDE_CHANGE': return {
            ...state,
            isShowDialog: !state.isShowDialog
        }
        default: return {
            ...state
        }
    }
}

const SLIDE = combineReducers({
    fetcher,
    toggleDialog
})

export default SLIDE