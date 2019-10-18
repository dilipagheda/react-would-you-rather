import React, { Component } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';

const ANSWERED_QUESTIONS = 'Answered Questions';
const UNANSWERED_QUESTIONS = 'Unanswered Questions';

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
					<Button
						style={{ marginRight: '10px', backgroundColor: 'white', color: 'black' }}
						onClick={this.handleClick}
					>
						Unanswered Questions
					</Button>
					<Button onClick={this.handleClick}>Answered Questions</Button>
				</div>
			</Container>
		);
	}
}

export default HomeView;
