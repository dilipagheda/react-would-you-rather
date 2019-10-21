import React, { Component } from 'react';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import { sort } from '../shared/Shared';

class UnansweredQuestions extends Component {
	render() {
		return <QuestionList ids={this.props.unansweredQuestionIds} />;
	}
}

function mapStateToProps({ users, questions }, { userId }) {
	const user = users[userId];
	const answers = user && user.answers;
	const answeredQuestionIds =
		answers ? Object.keys(answers) :
		[];
	let unansweredQuestionIds =
		answeredQuestionIds ? Object.keys(questions).filter((id) => !answeredQuestionIds.includes(id)) :
		[];
	unansweredQuestionIds = sort(questions, unansweredQuestionIds);
	return {
		unansweredQuestionIds
	};
}
export default connect(mapStateToProps)(UnansweredQuestions);
