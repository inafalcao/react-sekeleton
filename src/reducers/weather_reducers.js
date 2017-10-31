import { FETCH_WEATHER_SUCCESS } from '../actions/index'

export default function weatherFetched(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER_SUCCESS: return action.weather
		default: return state
	}
}
