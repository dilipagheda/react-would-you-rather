import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { OuterDiv, HeaderDiv, DetailDiv, AppButton } from '../shared/Shared';

class CreateQuestion extends Component {
	render() {
		return (
			<OuterDiv>
				<HeaderDiv>Create New Question</HeaderDiv>
				<DetailDiv>
					<div style={{ marginLeft: '10px', flexGrow: '1' }}>
						<div>Complete the Question:</div>
						<div style={{ fontWeight: 'bold', fontSize: '20px', margin: '5px 0' }}>Would you rather - </div>
						<Form>
							<Form.Control type="input" placeholder="Enter option one" required />
							<div style={{ textAlign: 'center', margin: '10px 0' }}>
								<span>- OR -</span>
							</div>
							<Form.Control type="input" placeholder="Enter option two" required />
							<AppButton type="submit">Submit</AppButton>
						</Form>
					</div>
				</DetailDiv>
			</OuterDiv>
		);
	}
}

export default CreateQuestion;
