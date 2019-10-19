import React, { Component } from 'react';
import { OuterDiv, DetailDiv, TotalScore } from '../shared/Shared';

class ScoreCard extends Component {
	render() {
		return (
			<OuterDiv>
				<DetailDiv>
					<img
						src="https://i.pravatar.cc/150?img=3"
						style={{ borderRadius: '50%', height: '100px', width: '100px', alignSelf: 'center' }}
					/>
					<div
						style={{
							margin: '0 10px',
							borderLeft: '1px solid grey',
							borderRight: '1px solid grey',
							padding: '0 10px',
							flexGrow: 1,
							justifySelf: 'center'
						}}
					>
						<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Dilip Agheda</div>
						<table>
							<tr>
								<td>Answered Questions</td>
								<td>10</td>
							</tr>
							<tr>
								<td>Created Questions</td>
								<td>2</td>
							</tr>
						</table>
					</div>
					<div style={{ alignSelf: 'center' }}>
						<div style={{ fontWeight: 'bold', fontSize: '20px' }}>Score</div>
						<TotalScore>12</TotalScore>
					</div>
				</DetailDiv>
			</OuterDiv>
		);
	}
}

export default ScoreCard;
