import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import CountRoot from './reducer/counter'
import ARTICLE from './reducer/article'
import SLIDE from './reducer/slide'

const reducers = combineReducers({
    CountRoot, ARTICLE, SLIDE
})

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = new createStore(reducers, applyMiddleware(...middleware))

export default store