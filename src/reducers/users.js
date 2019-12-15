import { FETCH_USERS, ADD_NEW_QUESTION } from '../actions/types';

export default function users(state = {}, action) {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
				...action.users
			};
		case ADD_NEW_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([ action.question.id ])
				}
			};
		default:
			return state;
	}
}
