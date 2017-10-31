import { combineReducers } from 'redux';
import posts from './posts_reducers'
import weather from './weather_reducers'

const rootReducer = combineReducers({
	posts,
	weather
});

export default rootReducer;
