import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import AppMenu from './components/AppMenu';
import HomeView from './components/home/HomeView';
import LeaderBoardView from './components/leaderboard/LeaderBoardView';
import PollMain from './components/poll/PollMain';
import CreateQuestion from './components/question/CreateQuestion';
import NotFound from './components/shared/NotFound';
import Loader from './components/shared/Loader';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/shared/PrivateRoute';
import styled from 'styled-components';

const HelloUser = styled.span`
	padding: 0 30px;
	background-color: #fccd04;
	color: #a64ac9;
	border-radius: 0 0 10px 10px;
`;

class App extends Component {
	renderWelcomeText = () => {
		if (this.props.authedUser) {
			return (
				<div className="d-flex flex-row-reverse">
					<HelloUser>Hello {this.props.authedUserName}</HelloUser>
				</div>
			);
		} else {
			return null;
		}
	};
	render() {
		return (
			<div>
				<Router>
					<AppMenu />
					{
						this.props.loader ? <Container
							className="d-flex justify-content-center"
							style={{ height: '100vh' }}
						>
							<Loader />
						</Container> :
						<Container>
							{this.renderWelcomeText()}
							<Switch>
								<Route exact path="/" component={Login} />
								<PrivateRoute path="/home" component={HomeView} />
								<PrivateRoute path="/add" component={CreateQuestion} />
								<PrivateRoute path="/leaderboard" component={LeaderBoardView} />
								<PrivateRoute path="/questions/:question_id" component={PollMain} />
								<Route path="/logout" component={Logout} />

								<Route component={NotFound} />
							</Switch>
						</Container>}
				</Router>
			</div>
		);
	}
}
function mapStateToProps({ users, authedUser, loader }) {
	const authedUserName =

			!loader && authedUser ? users[authedUser].name :
			null;
	return {
		loader,
		authedUserName,
		authedUser
	};
}
export default connect(mapStateToProps)(App);
