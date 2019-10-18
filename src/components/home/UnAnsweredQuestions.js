import React, { Component } from 'react';
import QuestionList from './QuestionList';

class UnansweredQuestions extends Component {
	render() {
		return <QuestionList ids={this.props.unansweredQuestionIds} />;
	}
}

function mapStateToProps({ users, questions }, { userId }) {
	const user = users[id];
	const answers = user.answers;
	const answeredQuestionIds = Object.keys(answers);
	const unansweredQuestionIds = Object.keys(questions).filter((id) => answeredQuestionIds.includes(id));

	return {
		unansweredQuestionIds
	};
}
export default connect(mapStateToProps)(UnansweredQuestions);
