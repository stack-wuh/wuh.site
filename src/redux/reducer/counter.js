import { combineReducers } from 'redux'

const initStore = {
    count: 0,
    asyncCount: 1
}

export const counter = (state = initStore, action) => {
    switch (action.type) {
        case 'INCREMENT': return { ...state, count: state.count + 1} 
        case 'DECREMENT': return { ...state, count: state.count - 1}
        default: return state
    }
}

export const asyncCounter = (state = initStore, action) => {
    switch(action.type) {
        case 'A_INCREMENT': return {...state, asyncCount: state.asyncCount+1}
        case 'A_DECREMENT': return {...state, asyncCount: state.asyncCount-1}
        default: return state
    }
}


const CountRoot = combineReducers({
    counter,
    asyncCounter
})
export default CountRoot