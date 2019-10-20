import React from 'react';

import { Container } from 'react-bootstrap';

import AppMenu from './components/AppMenu';
import HomeView from './components/home/HomeView';
import PollResultView from './components/poll/PollResultView';
import LeaderBoardView from './components/leaderboard/LeaderBoardView';
import PollMain from './components/poll/PollMain';
import CreateQuestion from './components/question/CreateQuestion';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NotFound from './components/shared/NotFound';
function App() {
	return (
		<div>
			<AppMenu />
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
						Hello user!
					</span>
				</div>
				{/* <HomeView /> */}
				{/* <PollResultView /> */}
				{/* <PollForm /> */}
				{/* <LeaderBoardView /> */}
				{/* <CreateQuestion /> */}
				<Router>
					<Switch>
						<Route exact path="/" component={HomeView} />
						<Route path="/add" component={CreateQuestion} />
						<Route path="/leaderboard" component={LeaderBoardView} />
						<Route path="/questions/:question_id" component={PollMain} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</Container>
		</div>
	);
}

export default App;
