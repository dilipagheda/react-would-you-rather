import { _getUsers, _getQuestions } from '../utils/_DATA';
import { fetchUsers } from '../actions/users';
import { fetchQuestions } from '../actions/questions';
import { showLoader, hideLoader } from '../actions/loader';

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

export const SET_REDIRECT_HOME = 'SET_REDIRECT_HOME';
export const RESET_REDIRECT_HOME = 'RESET_REDIRECT_HOME';

export function updateRedirectStatus(flag) {
	return {
		type:
			flag ? SET_REDIRECT_HOME :
			RESET_REDIRECT_HOME
	};
}
