import { combineReducers } from 'redux';
import posts from './posts_reducer'

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
