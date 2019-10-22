import { _getUsers } from '../utils/_DATA';
import { showLoader, hideLoader } from '../actions/loader';

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(users) {
	return {
		type: FETCH_USERS,
		users
	};
}

export function getUsers() {
	return (dispatch) => {
		dispatch(showLoader());

		return _getUsers().then((values) => {
			dispatch(fetchUsers(values));
			dispatch(hideLoader());
		});
	};
}
