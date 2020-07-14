import React, { PureComponent } from 'react'
import {
  ListInfo,
  ListItem,
  LoadMore
} from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class List extends PureComponent {
  render () {
    return (
      <div>
        {
          this.props.articleList.map((item, index) => {
            return (
              <ListItem key={index}>
                <img alt='' className='pic' src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={this.props.handleLoadMore}>更多文字</LoadMore>
			</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLoadMore () {
      dispatch(actionCreators.getLoadMoreSync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
