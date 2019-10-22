import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetAuthedUser } from '../actions/authedUser';
import { resetQuestions } from '../actions/questions';

class Logout extends Component {
	componentWillMount() {
		this.props.dispatch(resetAuthedUser());
		this.props.dispatch(resetQuestions());
	}
	render() {
		return <Redirect to="/" />;
	}
}

export default connect()(Logout);
