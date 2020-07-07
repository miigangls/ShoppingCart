import { combineReducers } from 'redux'

import router from './router'
import shopping from './shopping'
import comments from './comments'
import product from './product'

const appReducer = combineReducers({
    router, 
    shopping, 
    comments, 
    product
})
  
  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }
  
  export default rootReducer;