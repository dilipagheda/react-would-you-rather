import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
	renderComponent = ({ ids }) => {
		if (ids.length > 0) {
			return this.props.ids.map((id) => {
				return (
					<div key={id}>
						<Question id={id} />
					</div>
				);
			});
		} else {
			return <div style={{ textAlign: 'center' }}>No data available!</div>;
		}
	};

	render() {
		return this.renderComponent(this.props);
	}
}

export default QuestionList;
