import React, { Component } from 'react'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {

  render () {
    return (
      <HeaderWrapper>
				<Logo/>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>退出</NavItem>
          <NavItem className='right'>登陆</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused': ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe614;
						</i>
					</SearchWrapper>
				</Nav>
				<Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
    )
  }

}

const mapStateToProps = state => {
	return {
		// focused: state.header.focused
		// focused: state.header.get('focused')
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused'])
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus: () => {
			dispatch(actionCreators.getInputFocus())
		},
		handleInputBlur: () => {
			dispatch(actionCreators.getInputBlur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
