import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import { OuterDiv, HeaderDiv, DetailDiv, AppButton } from '../shared/Shared';
import { connect } from 'react-redux';
import { saveQuestionAnswer } from '../../actions/questions';

class PollForm extends Component {
	state = {
		currentSelection: '',
		error: ''
	};
	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.currentSelection.length === 0) {
			this.setState({ error: 'Please select one of the option!' });
		} else {
			this.setState({ error: '' });
			this.props.dispatch(
				saveQuestionAnswer(this.props.authedUser, this.props.question_id, this.state.currentSelection)
			);
		}
	};
	handleChange = (event) => {
		this.setState({
			currentSelection: event.target.value
		});
	};
	render() {
		const ComponntToRender = (
			<DetailDiv>
				<Col sm={12} md={8} lg={6} style={{ margin: 'auto' }}>
					<OuterDiv>
						<HeaderDiv>{this.props.author} asks:</HeaderDiv>
						<DetailDiv>
							<img
								alt={this.props.author}
								src={this.props.avatarURL}
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
											value="optionOne"
											checked={this.state.currentSelection === 'optionOne'}
											onChange={this.handleChange}
										/>

										<Form.Check
											name="opt"
											type="radio"
											label={this.props.optionTwo.text}
											id="opt2"
											value="optionTwo"
											checked={this.state.currentSelection === 'optionTwo'}
											onChange={this.handleChange}
										/>
									</div>
									<div className="error-message">{this.state.error}</div>
									<AppButton type="submit">Submit</AppButton>
								</Form>
							</div>
						</DetailDiv>
					</OuterDiv>
				</Col>
			</DetailDiv>
		);

		return ComponntToRender;
	}
}

function mapStateToProps({ users, questions, authedUser, loader }, { question_id }) {
	const optionOne = {
		text: questions[question_id].optionOne.text
	};
	const optionTwo = {
		text: questions[question_id].optionTwo.text
	};
	const author = users[questions[question_id].author].name;
	const avatarURL = users[questions[question_id].author].avatarURL;

	return {
		optionOne,
		optionTwo,
		author,
		question_id,
		authedUser,
		loader,
		avatarURL
	};
}
export default connect(mapStateToProps)(PollForm);
