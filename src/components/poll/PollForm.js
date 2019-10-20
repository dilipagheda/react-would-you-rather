import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { OuterDiv, HeaderDiv, DetailDiv, AppButton } from '../shared/Shared';
import { connect } from 'react-redux';

class PollForm extends Component {
	state = {
		currentSelection: ''
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	};
	handleChange = (event) => {
		this.setState({
			currentSelection: event.target.value
		});
	};
	render() {
		return (
			<OuterDiv>
				<HeaderDiv>{this.props.author} asks:</HeaderDiv>
				<DetailDiv>
					<img
						src="https://i.pravatar.cc/150?img=3"
						style={{ width: '100px', height: '100px', borderRadius: '50%' }}
					/>
					<div style={{ marginLeft: '10px', flexGrow: '1' }}>
						<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Would you rather</div>

						<Form onSubmit={this.handleSubmit}>
							<div key={`default-radio`} className="mb-3">
								<Form.Check
									name="opt"
									type="radio"
									id="opt1"
									label={this.props.optionOne.text}
									value="1"
									checked={this.state.currentSelection === '1'}
									onChange={this.handleChange}
								/>

								<Form.Check
									name="opt"
									type="radio"
									label={this.props.optionTwo.text}
									id="opt2"
									value="2"
									checked={this.state.currentSelection === '2'}
									onChange={this.handleChange}
								/>
							</div>
							<AppButton type="submit">Submit</AppButton>
						</Form>
					</div>
				</DetailDiv>
			</OuterDiv>
		);
	}
}

function mapStateToProps({ users, questions, authedUser }, { question_id }) {
	const optionOne = {
		text: questions[question_id].optionOne.text
	};
	const optionTwo = {
		text: questions[question_id].optionTwo.text
	};
	const author = users[questions[question_id].author].name;
	return {
		optionOne,
		optionTwo,
		author
	};
}
export default connect(mapStateToProps)(PollForm);
