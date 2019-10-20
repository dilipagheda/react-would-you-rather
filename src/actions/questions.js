import { showLoader, hideLoader } from './loader';
import { _saveQuestionAnswer } from '../utils/_DATA';
// import { handleData } from './shared';
import { fetchUsers } from '../actions/users';
// import { fetchQuestions } from '../actions/questions';
import { _getUsers, _getQuestions } from '../utils/_DATA';
import { handleData } from './shared';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export function fetchQuestions(questions) {
	return {
		type: FETCH_QUESTIONS,
		questions
	};
}

export function saveQuestionAnswer(authedUser, qid, answer) {
	return (dispatch) => {
		dispatch(showLoader());

		return _saveQuestionAnswer({ authedUser, qid, answer }).then((values) => {
			Promise.all([ _getUsers(), _getQuestions() ]).then((values) => {
				// dispatch(fetchUsers(values[0]));
				// dispatch(fetchQuestions(values[1]));
				dispatch(handleData()).then(() => {
					dispatch(hideLoader());
				});
			});
		});
	};
}
