import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import AnsweredQuestions from './AnsweredQuestions';
import UnansweredQuestions from './UnAnsweredQuestions';

const ANSWERED_QUESTIONS = 'Answered Questions';
const UNANSWERED_QUESTIONS = 'Unanswered Questions';
const TEMP_USERID = 'tylermcginnis';

const HomeViewButton = styled.button`
	margin-right: 10px;
	background-color: ${(props) =>

			props.active === true ? '#5a5560' :
			'white'};
	color: ${(props) =>

			props.active === true ? 'white' :
			'grey'};
	padding: 10px;
	border-radius: 5px;
`;

class HomeView extends Component {
	state = { currentSelection: UNANSWERED_QUESTIONS };

	handleClick = (e) => {
		console.log(e.target.innerText);
		this.setState({ currentSelection: e.target.innerText });
	};

	render() {
		return (
			<Container>
				<div
					className="d-flex justify-content-center"
					style={{ width: '70%', margin: 'auto', padding: '10px' }}
				>
					<HomeViewButton
						active={ANSWERED_QUESTIONS === this.state.currentSelection}
						onClick={this.handleClick}
					>
						Answered Questions
					</HomeViewButton>
					<HomeViewButton
						active={UNANSWERED_QUESTIONS === this.state.currentSelection}
						onClick={this.handleClick}
					>
						Unanswered Questions
					</HomeViewButton>
				</div>
				{
					this.state.currentSelection === ANSWERED_QUESTIONS ? <AnsweredQuestions userId={TEMP_USERID} /> :
					this.state.currentSelection === UNANSWERED_QUESTIONS ? <UnansweredQuestions
						userId={TEMP_USERID}
					/> :
					null}
			</Container>
		);
	}
}

export default HomeView;
