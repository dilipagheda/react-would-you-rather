import { FETCH_QUESTIONS, ADD_NEW_QUESTION, RESET_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case FETCH_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		case ADD_NEW_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};
		case RESET_QUESTIONS:
			return {};
		default:
			return state;
	}
}
