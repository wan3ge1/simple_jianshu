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
		const { focused, handleInputFocus, handleInputBlur, list } = this.props
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
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={() => {handleInputFocus(list)}}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe614;
						</i>
						{ this.getListArea() }
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

	getListArea = () => {

		const { focused, mouseIn, handleMouseEnter, handleMouseLeave, list, page, handleChangeList, totalPage } = this.props

		const listItem = []
		const tmp = []
		if (list.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				listItem.push(<SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>)
				tmp.push(list[i])
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={() => {handleChangeList(page, totalPage, this.iconSpin)}}
						>
							<i ref={icon => {this.iconSpin = icon}} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{ listItem }
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null
		}
	}

}

const mapStateToProps = state => {
	return {
		// focused: state.header.focused
		// focused: state.header.get('focused')
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus: list => {
			list.size === 0 && dispatch(actionCreators.getInitListSync())
			dispatch(actionCreators.getInputFocus())
		},
		handleInputBlur: () => {
			dispatch(actionCreators.getInputBlur())
		},
		handleMouseEnter: () => {
			dispatch(actionCreators.getMouseEnter())
		},
		handleMouseLeave: () => {
			dispatch(actionCreators.getMouseLeave())
		},
		handleChangeList: (page, totalPage, iconSpin) => {
			let originAngle = iconSpin.style.transform.match(/\d+/ig)
			if (!originAngle) {
				originAngle = 0
			} else {
				originAngle = parseInt(originAngle[0], 10)
			}
			originAngle += 360
			console.log(originAngle)
			iconSpin.style.transform = 'rotate(' + originAngle + 'deg)'
			if (page < totalPage) {
				page++
			} else {
				page = 1
			}
			dispatch(actionCreators.getChangeList(page))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
