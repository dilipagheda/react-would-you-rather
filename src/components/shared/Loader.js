import React, { Component } from 'react';

class Loader extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center w-100 h-100">
				<div className="spinner-border" role="status" style={{ alignSelf: 'center' }}>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}
}

export default Loader;
