import { combineReducers } from 'redux'

import {apiReducer} from '../reducer/api'

export const rootReducer = combineReducers({
    api: apiReducer,
})