import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Question extends Component {
	render() {
		return (
			<div style={{ width: '50%', margin: 'auto', backgroundColor: 'lightgrey' }}>
				<div
					style={{
						fontWeight: 'bold',
						fontSize: '20px',
						backgroundColor: 'grey',
						padding: '10px',
						color: 'white'
					}}
				>
					Sarah asks:
				</div>
				<div style={{ display: 'flex', padding: '10px' }}>
					<img
						src="https://i.pravatar.cc/150?img=3"
						style={{ width: '100px', height: '100px', borderRadius: '50%' }}
					/>
					<div style={{ marginLeft: '10px' }}>
						<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Would you rather?</div>
						<div style={{ margin: '10px 0' }}>..be a frontend...</div>
						<Button>View Poll</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Question;
