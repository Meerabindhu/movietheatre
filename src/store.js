import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from '../src/Reducer'

export const store=createStore(rootReducer,compose(applyMiddleware(thunk)))