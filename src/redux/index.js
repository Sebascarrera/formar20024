import { combineReducers } from 'redux'
import UserReducer from './user'

const appReducer = combineReducers({
    user: UserReducer,
  })
  
export default appReducer