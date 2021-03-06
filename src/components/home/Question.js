import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { OuterDiv, HeaderDiv, DetailDiv } from '../shared/Shared';

class Question extends Component {
	render() {
		return (
			<Row>
				<Col sm={12} md={8} lg={6} style={{ margin: 'auto' }}>
					<OuterDiv>
						<HeaderDiv>{this.props.authorName} asks:</HeaderDiv>
						<DetailDiv>
							<img
								alt={this.props.authorName}
								src={this.props.avatarURL}
								style={{ width: '100px', height: '100px', borderRadius: '50%', alignSelf: 'center' }}
							/>
							<div
								style={{
									marginLeft: '10px',
									flexGrow: '1',
									backgroundColor: 'white',
									padding: '10px',
									borderRadius: '5px'
								}}
							>
								<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Would you rather</div>
								<div style={{ margin: '10px 0' }}>{this.props.optionOne}?</div>
								<div>OR</div>
								<div style={{ margin: '10px 0' }}>{this.props.optionTwo}?</div>

								<Link to={`/questions/${this.props.id}`}>
									<Button
										style={{
											width: '100%',
											backgroundColor: '#5a5560',
											color: 'white',
											border: 'none',
											borderRadius: '10px'
										}}
									>
										View Poll
									</Button>
								</Link>
							</div>
						</DetailDiv>
					</OuterDiv>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ users, questions }, { id }) {
	const question = questions[id];
	const author = users[question.author];

	return {
		authorName: author.name,
		avatarURL: author.avatarURL,
		optionOne: question.optionOne.text,
		optionTwo: question.optionTwo.text
	};
}
export default connect(mapStateToProps)(Question);
