import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import authedUser from './authedUser';
import loader from './loader';
import redirectToHome from './redirectToHome';

export default combineReducers({
	users,
	questions,
	authedUser,
	loader,
	redirectToHome
});
