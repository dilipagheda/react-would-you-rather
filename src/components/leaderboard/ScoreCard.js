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
								alt={this.props.name}
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
									<tbody>
										<tr>
											<td>Answered Questions</td>
											<td data-info="answered_questions_score" data-user={this.props.name}>
												{this.props.totalAnswered}
											</td>
										</tr>
										<tr>
											<td>Created Questions</td>
											<td data-info="created_questions_score" data-user={this.props.name}>
												{this.props.totalQuestions}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div style={{ alignSelf: 'center' }}>
								<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Score</div>
								<TotalScore data-info="total_score" data-user={this.props.name}>
									{this.props.score}
								</TotalScore>
							</div>
						</DetailDiv>
					</OuterDiv>
				</Col>
			</Row>
		);
	}
}

export default ScoreCard;
