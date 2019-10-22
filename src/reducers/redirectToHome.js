import { SET_REDIRECT_HOME, RESET_REDIRECT_HOME } from '../actions/shared';

export default function redirectToHome(state = false, action) {
	switch (action.type) {
		case SET_REDIRECT_HOME:
			return true;
		case RESET_REDIRECT_HOME:
			return false;
		default:
			return state;
	}
}
