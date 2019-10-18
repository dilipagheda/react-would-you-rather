import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class AppMenu extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Would you rather?</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">New Question</Nav.Link>
							<Nav.Link href="#link">Leaderboard</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#link" className="justify-content-end">
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
