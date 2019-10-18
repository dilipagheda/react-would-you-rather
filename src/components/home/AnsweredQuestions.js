import React, { Component } from 'react';
import QuestionList from './QuestionList';

class AnsweredQuestions extends Component {
	render() {
		return <QuestionList ids={this.props.answeredQuestionIds} />;
	}
}

function mapStateToProps({ users, questions }, { userId }) {
	const user = users[id];
	const answers = user.answers;

	return {
		answeredQuestionIds: Object.keys(answers)
	};
}
export default connect(mapStateToProps)(AnsweredQuestions);
