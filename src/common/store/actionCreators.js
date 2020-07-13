import axios from 'axios'
import * as constants from './constants'

export const getInputFocus = () => ({
  type: constants.INPUT_FOCUS
})

export const getInputBlur = () => ({
  type: constants.INPUT_BLUR
})

export const getInitList = data => ({
  type: constants.INIT_LIST,
  data,
  // 10 个条目 1 页
  totalPage: Math.ceil(data.length / 10)
})

export const getInitListSync = () => {
  return dispatch => {
    axios.get('/api/headerList')
    .then(res => {
      // console.log(res)
      dispatch(getInitList(res.data.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const getMouseEnter = () => ({
  type: constants.MOUSE_ENTER,
  value: true
})

export const getMouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
  value: false
})

export const getChangeList = page => ({
  type: constants.CHANGE_LIST,
  page
})
