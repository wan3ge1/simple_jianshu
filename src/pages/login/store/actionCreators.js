import axios from 'axios'
import * as constants from './constants'

export const getUserLogin = value => ({
  type: constants.USER_LOGIN,
  value
})

export const getUserLoginSync = () => {
  return dispatch => {
    axios.get('/api/login')
    .then(res => {
      if (res.data.success) {
        dispatch(getUserLogin(res.data.data))
      } else {
        alert('登录失败')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const getUserLogout = () => ({
  type: constants.USER_LOGOUT,
  value: false
})
