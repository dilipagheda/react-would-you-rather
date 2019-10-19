import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class AppMenu extends Component {
	render() {
		return (
			<Navbar expand="lg" style={{ backgroundColor: '#46344e' }}>
				<Container>
					<Navbar.Brand href="#home" style={{ color: 'white' }}>
						Would you rather?
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home" style={{ color: 'white' }}>
								Home
							</Nav.Link>
							<Nav.Link href="#link" style={{ color: 'white' }}>
								New Question
							</Nav.Link>
							<Nav.Link href="#link" style={{ color: 'white' }}>
								Leaderboard
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#link" className="justify-content-end" style={{ color: 'white' }}>
								Logout
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default AppMenu;
