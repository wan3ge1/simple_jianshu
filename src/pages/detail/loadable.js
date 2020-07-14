import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  // 引入该组件
  loader: () => import('./'),
  // 谁便写写，如有需要可以画一个圈圈
  loading () {
    return (
      <div>正在加载</div>
    )
  }
})

export default () => <LoadableComponent />
