import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ScoreCard from './ScoreCard';
import { connect } from 'react-redux';

class LeaderBoardView extends Component {
	renderUserScores = () => this.props.userScores.map((userScore) => <ScoreCard key={userScore.id} {...userScore} />);

	render() {
		return <Container>{this.renderUserScores()}</Container>;
	}
}

function mapStateToProps({ users }) {
	const userScores = Object.values(users)
		.map((user) => {
			const totalAnswered = Object.keys(user.answers).length;
			const totalQuestions = user.questions.length;
			const score = totalAnswered + totalQuestions;
			return {
				id: user.id,
				name: user.name,
				avatarURL: user.avatarURL,
				totalAnswered,
				totalQuestions,
				score
			};
		})
		.sort((a, b) => b.score - a.score);

	return { userScores };
}

export default connect(mapStateToProps)(LeaderBoardView);
