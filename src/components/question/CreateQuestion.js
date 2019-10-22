import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { OuterDiv, HeaderDiv, DetailDiv, AppButton } from '../shared/Shared';
import { saveNewQuestion } from '../../actions/questions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateRedirectStatus } from '../../actions/shared';

class CreateQuestion extends Component {
	state = {
		optionOne: 'a',
		optionTwo: 'b',
		errorOne: '',
		errorTwo: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.optionOne.length === 0) {
			this.setState({ errorOne: 'Please enter option one text' });
		}
		if (this.state.optionTwo.length === 0) {
			this.setState({ errorTwo: 'Please enter option two text' });
		}
		if (this.state.optionOne.length > 0 && this.state.optionTwo.length > 0) {
			this.props
				.dispatch(
					saveNewQuestion({
						optionOneText: this.state.optionOne,
						optionTwoText: this.state.optionTwo,
						author: this.props.authedUser
					})
				)
				.then(() => {
					this.props.dispatch(updateRedirectStatus(true));
				});
		}
	};

	componentWillUnmount() {
		this.props.dispatch(updateRedirectStatus(false));
	}

	render() {
		if (this.props.redirectToHome) {
			return <Redirect to="/" />;
		} else {
			return (
				<Row>
					<Col sm={12} md={8} lg={6} style={{ margin: 'auto' }}>
						<OuterDiv>
							<HeaderDiv>Create New Question</HeaderDiv>
							<DetailDiv>
								<div style={{ marginLeft: '10px', flexGrow: '1' }}>
									<div>Complete the Question:</div>
									<div style={{ fontWeight: 'bold', fontSize: '20px', margin: '5px 0' }}>
										Would you rather -{' '}
									</div>
									<Form onSubmit={this.handleSubmit}>
										<Form.Control
											type="input"
											placeholder="Enter option one"
											value={this.state.optionOne}
											onChange={(e) => this.setState({ optionOne: e.target.value })}
										/>
										<div className="error-message">{this.state.errorOne}</div>
										<div style={{ textAlign: 'center', margin: '10px 0' }}>
											<span>- OR -</span>
										</div>
										<Form.Control
											type="input"
											placeholder="Enter option two"
											value={this.state.optionTwo}
											onChange={(e) => this.setState({ optionTwo: e.target.value })}
										/>
										<div className="error-message"> {this.state.errorTwo}</div>
										<AppButton type="submit">Submit</AppButton>
									</Form>
								</div>
							</DetailDiv>
						</OuterDiv>
					</Col>
				</Row>
			);
		}
	}
}

function mapStateToProps({ authedUser, redirectToHome }) {
	return { authedUser, redirectToHome };
}
export default connect(mapStateToProps)(CreateQuestion);
