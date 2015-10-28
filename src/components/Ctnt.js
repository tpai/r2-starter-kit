import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { prevPage, nextPage, fetchPost } from "../actions/actions";

class Ctnt extends Component {
	constructor(props) {
		super(props);
		this.handleNextPage = this.handleNextPage.bind(this);
		this.handlePrevPage = this.handlePrevPage.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		const { dispatch, detail, history } = this.props;
		if (nextProps.detail.nowPage !== detail.nowPage) {
			dispatch(fetchPost(nextProps.detail.nowPage));
			history.pushState(null, `/content/${nextProps.detail.nowPage}`);
		}
	}
	componentDidMount() {
		const { dispatch, params } = this.props;
		dispatch(fetchPost(params.id));
	}
	handleNextPage() {
		const { dispatch, detail } = this.props;
		dispatch(nextPage(detail.nowPage));
	}
	handlePrevPage() {
		const { dispatch, detail } = this.props;
		dispatch(prevPage(detail.nowPage));
	}
	render() {
		const { detail } = this.props;
		return (
			<div>
				Page: {detail.nowPage}
				{' '}
				<button onClick={this.handlePrevPage}>Prev</button>
				{' '}
				<button onClick={this.handleNextPage}>Next</button>
				<h1>{detail.post.title}</h1>
				<p>{detail.post.body}</p>
			</div>
		);
	}
}

Ctnt.propTypes = {
	detail: PropTypes.shape({
		nowPage: PropTypes.number.isRequired,
		post: PropTypes.object.isRequired
	})
};

function mapStateToProps(state) {
	return {
		detail: {
			nowPage: state.nowPage,
			post: state.post			
		}
	};
}

export default connect(mapStateToProps)(Ctnt);