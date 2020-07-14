import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DETAIL_INFO:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    default:
      return state
  }
}
