import * as constants from './constants'
import { fromJS } from 'immutable'

// const defaultState = {
//   focused: false
// }

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case constants.INPUT_FOCUS:
      return state.set('focused', true)
    case constants.INPUT_BLUR:
      return state.set('focused', false)
    case constants.INIT_LIST:
      // return state.set('list', action.data)
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', action.value)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', action.value)
    case constants.CHANGE_LIST:
      return state.set('page', action.page)
    default:
      return state
  }

  
}
