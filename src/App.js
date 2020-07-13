import React, { Component, Fragment } from 'react'
import GlobalStyle from './style'
import Iconfont from './statics/iconfont/iconfont'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './store'
import './mock/TestMock'
import {
  BrowserRouter,
  Route
} from "react-router-dom"
import Detail from './pages/detail'
import Home from './pages/home'

class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle />
        <Iconfont />
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <Route path='/' exact component={Home} />
              <Route path='/detail' exact component={Detail} />
            </BrowserRouter>
          </div>
        </Provider>
      </Fragment>
    )
  }
}

export default App
