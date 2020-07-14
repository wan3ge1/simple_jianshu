import axios from 'axios'
import * as constants from './constants'

export const getDetailInfo = data => ({
  type: constants.DETAIL_INFO,
  data
})

export const getDetailInfoSync = () => {
  return dispatch => {
    axios.get('/api/detail')
    .then(res => {
      dispatch(getDetailInfo(res.data.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
