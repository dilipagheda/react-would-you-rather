import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OuterDiv, HeaderDiv, DetailDiv, AppButton } from '../shared/Shared';

class Question extends Component {
	render() {
		return (
			<OuterDiv>
				<HeaderDiv>{this.props.authorName} asks:</HeaderDiv>
				<DetailDiv>
					<img src={this.props.avatarURL} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
					<div style={{ marginLeft: '10px' }}>
						<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Would you rather</div>
						<div style={{ margin: '10px 0' }}>{this.props.optionOne}?</div>
						<div>OR</div>
						<div style={{ margin: '10px 0' }}>{this.props.optionTwo}?</div>

						<AppButton>View Poll</AppButton>
					</div>
				</DetailDiv>
			</OuterDiv>
		);
	}
}

function mapStateToProps({ users, questions }, { id }) {
	const question = questions[id];
	const author = users[question.author];
	// const words = question.optionOne.text.split(' ');
	// let shortOption = '';
	// if (words && words.length > 2) {
	// 	shortOption = `...${words[1]}...`;
	// } else if (words && words.length > 1) {
	// 	shortOption = `...${words[0]}...`;
	// }
	// shortOption = question.optionOne.text;
	return {
		authorName: author.name,
		avatarURL: author.avatarURL,
		optionOne: question.optionOne.text,
		optionTwo: question.optionTwo.text
	};
}
export default connect(mapStateToProps)(Question);
