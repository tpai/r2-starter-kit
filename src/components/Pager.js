import React, { Component, PropTypes } from "react";
import { fetchPost } from '../actions/PagerAction';

class Pager extends Component {
	render() {
		const { nowPage, nextPage, prevPage } = this.props;
		return (
			<div>
				Page: {nowPage}
				{' '}
				<button onClick={prevPage}>Prev</button>
				{' '}
				<button onClick={nextPage}>Next</button>
			</div>
		);
	}
}

Pager.propTypes = {
	nowPage: PropTypes.number.isRequired,
	nextPage: PropTypes.func.isRequired,
	prevPage: PropTypes.func.isRequired
};

export default Pager;