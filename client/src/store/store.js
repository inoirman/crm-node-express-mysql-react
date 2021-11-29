import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Reducer } from './reducer'

export const store = createStore(Reducer, applyMiddleware(thunk, logger))