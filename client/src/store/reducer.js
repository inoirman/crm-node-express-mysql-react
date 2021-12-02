import {combineReducers} from 'redux'
import {AuthReducer} from './Auth/AuthReducer'
import {UserReducer} from "./Users/UserReducer";



export const Reducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer
})
