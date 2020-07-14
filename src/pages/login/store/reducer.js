import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  loginStatus:false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.USER_LOGIN:
      return state.set('loginStatus', action.value)
    case constants.USER_LOGOUT:
      return state.set('loginStatus', action.value)
    default:
      return state
  }
}
