import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import update from "react-addons-update";

import { fetchPost } from "../actions/post";

export class Post extends Component {
	componentDidMount() {
		const { dispatch, params } = this.props;
		let initPostIndex = params.id * 1;
		dispatch(fetchPost(initPostIndex));
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.post.id !== this.props.post.id;
	}
	componentDidUpdate() {
		const { history, post } = this.props;
		history.replaceState(null, `/post/${post.id}`);
	}
	render() {
		const { dispatch, post } = this.props;
		return (
			<div>
				<button onClick={() => dispatch(fetchPost(post.id-1))} disabled={post.id-1 < 1}>Prev</button>
				{' '}
				<button onClick={() => dispatch(fetchPost(post.id+1))} disabled={post.id+1 > 100}>Next</button>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>
		);
	}
}

Post.propTypes = {
	post: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		post: state.post
	};
}

export default connect(mapStateToProps)(Post);