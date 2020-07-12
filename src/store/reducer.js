import { combineReducers } from 'redux-immutable'
// import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer
