import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
	render() {
		return this.props.ids.map((id) => {
			return (
				<div>
					<Question id={id} />
				</div>
			);
		});
	}
}

export default QuestionList;
