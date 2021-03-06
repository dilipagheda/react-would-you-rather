import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { OuterDiv, HeaderDiv, DetailDiv } from '../components/shared/Shared';
import { getUsers } from '../actions/users';
import styled from 'styled-components';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';
import { updateRedirectStatus } from '../actions/shared';
import { handleData } from '../actions/shared';

const UserNameButton = styled.button`
	margin: 5px;
	border-radius: 5px;
	background-color: white;
	border: 2px solid #fdcd07;
	:hover {
		border-color: black;
		cursor: pointer;
	}
`;

class Login extends Component {
	componentDidMount() {
		if (Object.keys(this.props.users).length === 0) {
			this.props.dispatch(getUsers());
		}
	}

	componentWillUnmount() {
		this.props.dispatch(updateRedirectStatus(false));
		if (
			this.props.authedUser &&
			(Object.keys(this.props.questions).length === 0 || Object.keys(this.props.users).length === 0)
		) {
			this.props.dispatch(handleData());
		}
	}

	handleClick = (id) => {
		this.props.dispatch(setAuthedUser(id));
	};

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/home' } };

		if (this.props.authedUser) {
			this.props.dispatch(updateRedirectStatus(true));
		}
		if (this.props.redirectToHome) {
			return <Redirect to={from} />;
		} else {
			return (
				<Row>
					<Col sm={12} md={8} lg={6} style={{ margin: 'auto' }}>
						<OuterDiv>
							<HeaderDiv>
								<div style={{ textAlign: 'center' }}>Login</div>
								<div style={{ fontSize: '15px', fontWeight: 'normal', textAlign: 'center' }}>
									Please select a user
								</div>
							</HeaderDiv>
							<DetailDiv>
								<div className="d-flex flex-column" style={{ margin: 'auto' }}>
									{Object.keys(this.props.users).map((id) => {
										return (
											<UserNameButton key={id} onClick={() => this.handleClick(id)}>
												{this.props.users[id].name}
											</UserNameButton>
										);
									})}
								</div>
							</DetailDiv>
						</OuterDiv>
					</Col>
				</Row>
			);
		}
	}
}

function mapStateToProps({ users, questions, redirectToHome, authedUser }) {
	return { users, redirectToHome, authedUser, questions };
}
export default connect(mapStateToProps)(Login);
