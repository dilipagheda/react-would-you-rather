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
					<NavLink exact to="/">
						<Navbar.Brand style={{ color: 'white' }}>Would you rather?</Navbar.Brand>
					</NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto" onSelect={this.handleSelect} style={{ width: '100%' }}>
							<NavLink activeClassName="active" to="/home">
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
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default AppMenu;
