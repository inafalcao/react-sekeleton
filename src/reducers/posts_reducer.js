import { FETCH_POSTS } from '../actions/index'

export default function postsFetched(state = [], action) {
	switch(action.type) {
		case FETCH_POSTS: return action.payload
		default: return state
	}
}
