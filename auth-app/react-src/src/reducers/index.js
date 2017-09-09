import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer'
import AuthReducer from './AuthReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostsReducer,
  form: formReducer
  // very critical to have the "form" state in the reducer. must be spelled "form"!
});

export default rootReducer;
