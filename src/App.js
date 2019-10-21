import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import AppMenu from './components/AppMenu';
import HomeView from './components/home/HomeView';
import LeaderBoardView from './components/leaderboard/LeaderBoardView';
import PollMain from './components/poll/PollMain';
import CreateQuestion from './components/question/CreateQuestion';
import NotFound from './components/shared/NotFound';
import Loader from './components/shared/Loader';
import { handleData } from './actions/shared';

class App extends Component {
	componentDidMount() {
		console.log('componentDidMount:App.js');
		this.props.dispatch(handleData());
	}

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
							<div className="d-flex flex-row-reverse">
								<span
									style={{
										padding: '0 30px',
										backgroundColor: '#FCCD04',
										color: '#A64AC9',
										borderRadius: '0 0 10px 10px'
									}}
								>
									Hello {this.props.authedUserName}
								</span>
							</div>
							{/* <HomeView /> */}
							{/* <PollResultView /> */}
							{/* <PollForm /> */}
							{/* <LeaderBoardView /> */}
							{/* <CreateQuestion /> */}
							<Switch>
								<Route exact path="/" component={HomeView} />
								<Route path="/add" component={CreateQuestion} />
								<Route path="/leaderboard" component={LeaderBoardView} />
								<Route path="/questions/:question_id" component={PollMain} />
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
		authedUserName
	};
}
export default connect(mapStateToProps)(App);
