import * as constants from './constants'
import { fromJS } from 'immutable'

// const defaultState = {
//   focused: false
// }

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constants.INPUT_FOCUS) {
    // const newState = JSON.parse(JSON.stringify(state))
    // newState.focused = true
    // return newState
    return state.set('focused', true)
  }
  if (action.type === constants.INPUT_BLUR) {
    // const newState = JSON.parse(JSON.stringify(state))
    // newState.focused = false
    // return newState
    return state.set('focused', false)
  }
  return state
}
