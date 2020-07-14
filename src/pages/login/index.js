import React, { Component } from 'react'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  render () {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={input => {this.account = input}} />
            <Input placeholder='密码' type='password' ref={input => {this.password = input}} />
            <Button onClick={() => {this.props.handleLogin(this.account, this.password)}}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin (accountElem, passwordElem) {
      // console.log(accountElem, passwordElem)
      dispatch(actionCreators.getUserLoginSync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
