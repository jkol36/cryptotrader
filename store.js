import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { trades } from './reducers'

export const store = createStore(combineReducers({trades}), applyMiddleware(thunk))