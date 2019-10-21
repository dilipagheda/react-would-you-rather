import React, { Component } from 'react';
import PollResultCard from './PollResultCard';
import { OuterDiv, HeaderDiv, DetailDiv } from '../shared/Shared';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

class PollResultView extends Component {
	renderPollResultCards = () =>
		[ this.props.optionOne, this.props.optionTwo ].map((option, index) => (
			<PollResultCard key={index} totalVotes={this.props.totalVotes} {...option} />
		));

	render() {
		return (
			<Row>
				<Col sm={12} md={8} lg={6} style={{ margin: 'auto' }}>
					<OuterDiv>
						<HeaderDiv>{`Asked by ${this.props.author}`}</HeaderDiv>
						<DetailDiv>
							<img
								src={this.props.avatarURL}
								style={{ borderRadius: '50%', height: '100px', width: '100px', alignSelf: 'center' }}
							/>
							<div
								style={{
									margin: '0 10px',
									flexGrow: 1,
									borderLeft: '1px solid grey',
									paddingLeft: '10px'
								}}
							>
								<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Results</div>
								{this.renderPollResultCards()}
							</div>
						</DetailDiv>
					</OuterDiv>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ users, questions, authedUser }, { question_id }) {
	const optionOne = {
		votes: questions[question_id].optionOne.votes.length,
		text: questions[question_id].optionOne.text,
		userVote: questions[question_id].optionOne.votes.includes(authedUser)
	};
	const optionTwo = {
		votes: questions[question_id].optionTwo.votes.length,
		text: questions[question_id].optionTwo.text,
		userVote: questions[question_id].optionTwo.votes.includes(authedUser)
	};
	const totalVotes = optionOne.votes + optionTwo.votes;
	const author = users[questions[question_id].author].name;
	const avatarURL = users[questions[question_id].author].avatarURL;
	return {
		optionOne,
		optionTwo,
		totalVotes,
		author,
		avatarURL
	};
}
export default connect(mapStateToProps)(PollResultView);
