import { _getUsers, _getQuestions } from '../utils/_DATA';
import { fetchUsers } from '../actions/users';
import { fetchQuestions } from '../actions/questions';
import { showLoader, hideLoader } from '../actions/loader';
import { SET_REDIRECT_HOME, RESET_REDIRECT_HOME } from './types';

export function handleData() {
	return (dispatch) => {
		dispatch(showLoader());

		return Promise.all([ _getUsers(), _getQuestions() ]).then((values) => {
			dispatch(fetchUsers(values[0]));
			dispatch(fetchQuestions(values[1]));
			dispatch(hideLoader());
		});
	};
}

export function updateRedirectStatus(flag) {
	return {
		type:
			flag ? SET_REDIRECT_HOME :
			RESET_REDIRECT_HOME
	};
}
