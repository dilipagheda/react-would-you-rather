export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export function fetchQuestions(questions) {
	return {
		type: FETCH_QUESTIONS,
		questions
	};
}
