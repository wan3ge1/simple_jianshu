import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: []
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.INIT_INFO:
			return state.merge({
				topicList: fromJS(action.data.topicList),
				articleList: fromJS(action.data.articleList),
				recommendList: fromJS(action.data.recommendList)
			})
		default:
			return state
	}
}
