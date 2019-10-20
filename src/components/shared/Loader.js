import React, { Component } from 'react';

class Loader extends Component {
	render() {
		return (
			<div class="d-flex justify-content-center w-100 h-100">
				<div class="spinner-border" role="status" style={{ alignSelf: 'center' }}>
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		);
	}
}

export default Loader;
