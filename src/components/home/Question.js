import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Question extends Component {
	render() {
		return (
			<div
				style={{
					width: '50%',
					margin: '10px auto',
					backgroundColor: 'lightgrey',
					borderRadius: '10px'
				}}
			>
				<div
					style={{
						fontWeight: 'bold',
						fontSize: '20px',
						backgroundColor: 'grey',
						padding: '10px',
						color: 'white',
						borderRadius: '10px 10px 0 0'
					}}
				>
					{this.props.authorName} asks:
				</div>
				<div style={{ display: 'flex', padding: '10px' }}>
					<img src={this.props.avatarURL} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
					<div style={{ marginLeft: '10px' }}>
						<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Would you rather</div>
						<div style={{ margin: '10px 0' }}>{this.props.optionOne}?</div>
						<div>OR</div>
						<div style={{ margin: '10px 0' }}>{this.props.optionTwo}?</div>

						<Button>View Poll</Button>
					</div>
				</div>
			</div>
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
