import * as constants from './constants'
import axios from 'axios'

export const getInitInfo = data => ({
  type: constants.INIT_INFO,
  data
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
