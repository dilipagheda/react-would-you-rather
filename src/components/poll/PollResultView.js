import React, { Component } from 'react';
import PollResultCard from './PollResultCard';
import { OuterDiv, HeaderDiv, DetailDiv } from '../shared/Shared';

class PollResultView extends Component {
	render() {
		return (
			<OuterDiv>
				<HeaderDiv>Asked by Dilip</HeaderDiv>
				<DetailDiv>
					<img
						src="https://i.pravatar.cc/150?img=3"
						style={{ borderRadius: '50%', height: '100px', width: '100px', alignSelf: 'center' }}
					/>
					<div
						style={{
							margin: '0 10px',
							flexGrow: 1,
							borderLeft: '1px solid grey',
							paddingLeft: '10px'
						}}
					>
						<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Results</div>
						<PollResultCard />
						<PollResultCard />
					</div>
				</DetailDiv>
			</OuterDiv>
		);
	}
}

export default PollResultView;
