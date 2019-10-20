import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollResultView from './PollResultView';
import PollForm from './PollForm';
import NotFound from '../shared/NotFound';

class PollMain extends Component {
	render() {
		if (!this.props.questionExists) {
			return <NotFound />;
		}
		const ComponentToRender =

				this.props.didUserVote && this.props.didUserVote === true ? <PollResultView
					question_id={this.props.question_id}
				/> :
				<PollForm question_id={this.props.question_id} />;
		return ComponentToRender;
	}
}

function mapStateToProps({ users, questions, authedUser }, { match: { params: { question_id } } }) {
	const questionExists = question_id && Object.keys(questions).includes(question_id);
	const didUserVote =
		authedUser ? Object.keys(users[authedUser].answers).includes(question_id) ? true :
		false :
		null;

	return {
		questionExists,
		didUserVote,
		authedUser,
		question_id
	};
}
export default connect(mapStateToProps)(PollMain);
