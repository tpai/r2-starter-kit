import React, { Component, PropTypes } from "react";
import { prevPage, nextPage } from "../actions/PagerAction";

class Pager extends Component {
	constructor(props) {
		super(props);
		this.handleNextPage = this.handleNextPage.bind(this);
		this.handlePrevPage = this.handlePrevPage.bind(this);
	}
	handleNextPage() {
		const { dispatch, postDetail } = this.props;
		dispatch(nextPage(postDetail.nowPage));
	}
	handlePrevPage() {
		const { dispatch, postDetail } = this.props;
		dispatch(prevPage(postDetail.nowPage));
	}
	render() {
		const { postDetail, onClick } = this.props;
		return (
			<div>
				Page: {postDetail.nowPage}
				{' '}
				<button onClick={this.handlePrevPage}>Prev</button>
				{' '}
				<button onClick={this.handleNextPage}>Next</button>
				<h1>{postDetail.post.title}</h1>
				<p>{postDetail.post.body}</p>
			</div>
		);
	}
}

Pager.propTypes = {
	postDetail: PropTypes.shape({
		nowPage: PropTypes.number.isRequired,
		post: PropTypes.object.isRequired
	})
};

export default Pager;