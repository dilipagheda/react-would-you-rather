import React, { Component } from 'react';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';

class AnsweredQuestions extends Component {
	render() {
		const { answeredQuestionIds } = this.props;

		return <QuestionList ids={answeredQuestionIds} />;
	}
}

function mapStateToProps({ users, questions }, { userId }) {
	const user = users[userId];
	const answers = user && user.answers;

	return {
		answeredQuestionIds:
			answers ? Object.keys(answers) :
			[]
	};
}
export default connect(mapStateToProps)(AnsweredQuestions);
