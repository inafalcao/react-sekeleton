import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './posts_reducers'
import weather from './weather_reducers'

const rootReducer = combineReducers({
	form: formReducer,
	posts,
	weather
});

export default rootReducer;
