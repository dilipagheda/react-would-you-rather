import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class AppMenu extends Component {
	state = {
		currentSelection: ''
	};
	handleSelect = (e) => {
		this.setState({ currentSelection: e });
	};
	render() {
		return (
			<Navbar expand="lg" style={{ backgroundColor: '#46344e' }}>
				<Container>
					<Navbar.Brand href="#home" style={{ color: 'white' }}>
						Would you rather?
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto" onSelect={this.handleSelect} style={{ width: '100%' }}>
							<NavLink exact activeClassName="active" to="/">
								Home
							</NavLink>
							<NavLink activeClassName="active" to="/add">
								New Question
							</NavLink>
							<NavLink activeClassName="active" to="/leaderboard">
								Leaderboard
							</NavLink>
							<NavLink to="/logout" style={{ color: 'white', marginLeft: 'auto' }}>
								Logout
							</NavLink>
							{/* <Nav.Link
								active={this.state.currentSelection === 'home'}
								eventKey="home"
								as={NavLink}
								exact
								to="/"
								style={{ color: 'white' }}
							>
								Home
							</Nav.Link>
							<Nav.Link
								active={this.state.currentSelection === 'newquestion'}
								eventKey="newquestion"
								as={NavLink}
								to="/add"
								style={{ color: 'white' }}
							>
								New Question
							</Nav.Link>
							<Nav.Link
								active={this.state.currentSelection === 'leaderboard'}
								eventKey="leaderboard"
								as={NavLink}
								to="/leaderboard"
								style={{ color: 'white' }}
							>
								Leaderboard
							</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default AppMenu;
