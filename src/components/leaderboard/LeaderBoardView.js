import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ScoreCard from './ScoreCard';

class LeaderBoardView extends Component {
	render() {
		return (
			<Container>
				<ScoreCard />
			</Container>
		);
	}
}

export default LeaderBoardView;
