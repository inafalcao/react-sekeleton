import { FETCH_POSTS_SUCCESS } from '../actions/index'

export default function postsFetched(state = [], action) {
	switch(action.type) {
		case FETCH_POSTS_SUCCESS: return action.posts
		default: return state
	}
}
