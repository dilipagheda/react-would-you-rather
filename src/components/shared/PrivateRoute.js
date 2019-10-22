import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class PrivateRoute extends Component {
	render() {
		const { component: Component, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={(props) =>

						this.props.authedUser ? <Component {...props} /> :
						<Redirect to="/" />}
			/>
		);
	}
}
function mapStateToProps({ authedUser }) {
	return { authedUser };
}
export default connect(mapStateToProps)(PrivateRoute);
