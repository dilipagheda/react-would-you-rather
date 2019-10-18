import React, { Component } from 'react';

class QuestionList extends Component {
	render() {
		return this.props.questions.map((question) => {
			return (
				<div>
					<Question id={question} />
				</div>
			);
		});
	}
}

export default QuestionList;
