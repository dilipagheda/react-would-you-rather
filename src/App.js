import React from 'react';

import { Container } from 'react-bootstrap';

import AppMenu from './components/AppMenu';
import HomeView from './components/home/HomeView';

function App() {
	return (
		<div>
			<AppMenu />
			<Container>
				<div className="d-flex flex-row-reverse">
					<span style={{ padding: '0 30px', backgroundColor: 'grey', color: 'white', borderRadius: '30px' }}>
						Hello user!
					</span>
				</div>
				<HomeView />
			</Container>
		</div>
	);
}

export default App;
