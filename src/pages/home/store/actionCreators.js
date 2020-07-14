import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const getInitInfo = data => ({
  type: constants.INIT_INFO,
  // data
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList
})

export const getInitInfoSync = () => {
  return dispatch => {
    axios.get('/api/home')
    .then(res => {
      dispatch(getInitInfo(res.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const getLoadMore = data => ({
  type: constants.LOAD_MORE,
  list: fromJS(data)
})

export const getLoadMoreSync = () => {
  return dispatch => {
    axios.get('/api/homeList')
    .then(res => {
      dispatch(getLoadMore(res.data.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const getToggleScroll = value => ({
  type: constants.TOGGLE_SCROLL,
  value
})
