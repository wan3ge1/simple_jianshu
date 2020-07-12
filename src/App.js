import React, { Component, Fragment } from 'react'
import GlobalStyle from './style'
import Iconfont from './statics/iconfont/iconfont'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle />
        <Iconfont />
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    )
  }
}

export default App
