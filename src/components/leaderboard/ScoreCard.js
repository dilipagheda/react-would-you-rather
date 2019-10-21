import React, { Component } from 'react';
import { OuterDiv, DetailDiv, TotalScore } from '../shared/Shared';
import { Row, Col } from 'react-bootstrap';

class ScoreCard extends Component {
	render() {
		return (
			<Row>
				<Col sm={12} md={8} lg={6} style={{ margin: 'auto' }}>
					<OuterDiv>
						<DetailDiv>
							<img
								src={this.props.avatarURL}
								style={{ borderRadius: '50%', height: '100px', width: '100px', alignSelf: 'center' }}
							/>
							<div
								style={{
									margin: '0 10px',
									borderLeft: '1px solid grey',
									borderRight: '1px solid grey',
									padding: '0 10px',
									flexGrow: 1,
									justifySelf: 'center'
								}}
							>
								<div style={{ fontWeight: 'bold', fontSize: '20px' }}>{this.props.name}</div>
								<table>
									<tr>
										<td>Answered Questions</td>
										<td>{this.props.totalAnswered}</td>
									</tr>
									<tr>
										<td>Created Questions</td>
										<td>{this.props.totalQuestions}</td>
									</tr>
								</table>
							</div>
							<div style={{ alignSelf: 'center' }}>
								<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Score</div>
								<TotalScore>{this.props.score}</TotalScore>
							</div>
						</DetailDiv>
					</OuterDiv>
				</Col>
			</Row>
		);
	}
}

export default ScoreCard;
