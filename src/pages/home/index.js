import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
import { BackTop } from './style'

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';

class Home extends Component {

	componentDidMount () {
		this.props.handleInitInfo()
		window.addEventListener('scroll', this.props.handleScroll)
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.props.handleScroll)
	}

  render () {
    return (
      <HomeWrapper>
				<HomeLeft>
          <img 
            className='banner-img' 
            alt='' 
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
          />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.showScroll ? <BackTop onClick={() => {window.scrollTo(0, 0)}}>回到顶部</BackTop> : null}
			</HomeWrapper>
    )
  }
}

const mapStateToProps = state => {
	return {
		showScroll: state.getIn(['home', 'showScroll'])
	}
}

const mapDispatchToProps = dispatch => ({
	handleInitInfo () {
		dispatch(actionCreators.getInitInfoSync())
		
	},
	handleScroll () {
		let value = document.documentElement.scrollTop > 150 ? true : false
		dispatch(actionCreators.getToggleScroll(value))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
