import { FETCH_POSTS, FETCH_WEATHER } from '../actions/index'

export default function postsFetched(state = [], action) {
	switch(action.type) {
		case FETCH_POSTS: return action.payload
		case FETCH_WEATHER: return action.payload
		default: return state
	}
}
