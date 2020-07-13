import React, { Component } from 'react'
import {
  ListInfo,
  ListItem,
  LoadMore
} from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render () {
    return (
      <div>
        {
          this.props.articleList.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <img alt='' className='pic' src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore>更多文字</LoadMore>
			</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapStateToProps, null)(List)
