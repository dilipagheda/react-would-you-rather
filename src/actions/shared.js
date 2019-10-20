import { _getUsers, _getQuestions } from '../utils/_DATA';
import { fetchUsers } from '../actions/users';
import { fetchQuestions } from '../actions/questions';
import { setAuthedUser } from '../actions/authedUser';
import { showLoader, hideLoader } from '../actions/loader';

const AUTHED_ID = 'sarahedo';

export function handleData() {
	return (dispatch) => {
		dispatch(showLoader());

		return Promise.all([ _getUsers(), _getQuestions() ]).then((values) => {
			dispatch(fetchUsers(values[0]));
			dispatch(fetchQuestions(values[1]));
			dispatch(setAuthedUser(AUTHED_ID));
			dispatch(hideLoader());
		});
	};
}
