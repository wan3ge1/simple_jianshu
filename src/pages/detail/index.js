import React, { Component } from 'react'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends Component {

  componentDidMount () {
    this.props.handleGetDetail()
  }

  render () {
    return (
      <DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content dangerouslySetInnerHTML={{__html: this.props.content}} />
			</DetailWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetDetail () {
      dispatch(actionCreators.getDetailInfoSync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
