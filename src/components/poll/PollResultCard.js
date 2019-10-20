import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';

const now = 60;

const Wrapper = styled.div`
	border: 1px solid black;
	padding: 10px;
	background-color: white;
	border-radius: 10px;
	margin: 25px 0;
	position: relative;
`;

const YourVote = styled.span`
	position: absolute;
	top: -20px;
	right: -10px;
	background-color: #9b786f;
	color: white;
	padding: 10px;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	font-size: 11px;
	font-weight: bold;
	border: 1px solid black;
	text-align: center;
`;

const Footer = styled.div`font-size: 15px;`;

class PollResultCard extends Component {
	render() {
		const now = Math.floor(this.props.votes / this.props.totalVotes * 100);
		return (
			<Wrapper className="d-flex flex-column">
				{
					this.props.userVote ? <YourVote>
						Your <br />Vote
					</YourVote> :
					null}
				<div>{this.props.text}</div>

				<div className="d-flex flex-row">
					<div style={{ alignSelf: 'center', marginRight: '5px', width: '30px', fontSize: '12px' }}>
						{now}%
					</div>
					<ProgressBar now={now} style={{ margin: '10px 0 5px 0', flexGrow: '1' }} />
				</div>

				<Footer className="align-self-center">{`${this.props.votes} out of ${this.props
					.totalVotes} votes`}</Footer>
			</Wrapper>
		);
	}
}
export default PollResultCard;
