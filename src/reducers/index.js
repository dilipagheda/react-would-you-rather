import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import auth from './auth';

export default combineReducers({
	users,
	questions,
	authedUser: auth
});
