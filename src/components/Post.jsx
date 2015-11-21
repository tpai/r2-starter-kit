import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import update from "react-addons-update";

import { fetchPost } from "../actions/post";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = { nowPost: 1 };
	}
	componentDidMount() {
		const { dispatch, params } = this.props;
		let { nowPost } = this.state;
		this.setState(update(this.state, 
			{ nowPost: { $set: params.id*1 } }
		));
	}
	shouldComponentUpdate(newProps, newState) {
		const { dispatch } = this.props;
		let oldNowPost = this.state.nowPost;
		let newNowPost = newState.nowPost;
		
		oldNowPost !== newNowPost && dispatch(fetchPost(newNowPost));
		
		return true;
	}
	nextPost() {
		const { dispatch, history } = this.props;
		let { nowPost } = this.state;
		nowPost = (nowPost < 100)?nowPost+1:nowPost;
		
		this.setState(update(this.state, 
			{ nowPost: { $set: nowPost } }
		));
		history.replaceState(null, `/post/${nowPost}`);
	}
	prevPost() {
		const { dispatch, history } = this.props;
		let { nowPost } = this.state;
		nowPost = (nowPost > 1)?nowPost-1:1;
		
		this.setState(update(this.state, 
			{ nowPost: { $set: nowPost } }
		));
		history.replaceState(null, `/post/${nowPost}`);
	}
	render() {
		const { post } = this.props;
		return (
			<div>
				<button onClick={this.prevPost.bind(this)}>Prev</button>
				{' '}
				<button onClick={this.nextPost.bind(this)}>Next</button>
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