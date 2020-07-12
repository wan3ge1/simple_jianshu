import React, { Component, Fragment } from 'react'
import GlobalStyle from './style'
import Iconfont from './statics/iconfont/iconfont'
import Header from './common/Header'

class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle />
        <Iconfont />
        <Header />
      </Fragment>
    )
  }
}

export default App
