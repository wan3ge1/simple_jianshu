import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	showScroll: false
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.INIT_INFO:
			return state.merge({
				// topicList: fromJS(action.data.topicList),
				// articleList: fromJS(action.data.articleList),
				// recommendList: fromJS(action.data.recommendList)
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			})
		case constants.LOAD_MORE:
			return state.merge({
				'articleList': state.get('articleList').concat(action.list)
			})
		case constants.TOGGLE_SCROLL:
			return state.set('showScroll', action.value)
		default:
			return state
	}
}
