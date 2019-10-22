import { showLoader, hideLoader } from './loader';
import { _saveQuestionAnswer } from '../utils/_DATA';
import { _getUsers, _getQuestions, _saveQuestion } from '../utils/_DATA';
import { handleData } from './shared';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';

export function fetchQuestions(questions) {
	return {
		type: FETCH_QUESTIONS,
		questions
	};
}

export function resetQuestions() {
	return {
		type: RESET_QUESTIONS
	};
}

export function saveQuestionAnswer(authedUser, qid, answer) {
	return (dispatch) => {
		dispatch(showLoader());

		return _saveQuestionAnswer({ authedUser, qid, answer }).then((values) => {
			Promise.all([ _getUsers(), _getQuestions() ]).then((values) => {
				dispatch(handleData()).then(() => {
					dispatch(hideLoader());
				});
			});
		});
	};
}

export function addNewQuestion(question) {
	return {
		type: ADD_NEW_QUESTION,
		question
	};
}

export function saveNewQuestion(question) {
	return (dispatch) => {
		dispatch(showLoader());

		return _saveQuestion(question).then((values) => {
			dispatch(addNewQuestion(values));
			dispatch(hideLoader());
		});
	};
}
