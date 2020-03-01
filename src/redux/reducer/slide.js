import { combineReducers } from 'redux'
const store = {
    data: []
}

export const fetcher = (state = store, action) => {
    switch (action.type) {
        case 'SLIDE_SAVE': return { ...state, data: [...action.payload]}
    
        default: return state
    }
}

const SLIDE = combineReducers({
    fetcher
})

export default SLIDE