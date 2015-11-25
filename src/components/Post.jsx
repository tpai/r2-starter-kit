import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import update from "react-addons-update";

import { fetchPost } from "../actions/post";

export class Post extends Component {
	constructor(props) {
		super(props);
		this.state = { postIndex: -1 };
	}
	componentDidMount() {
		const { dispatch, params } = this.props;
		let initPostIndex = params.id * 1;
		
		this.setState(update(this.state, { postIndex: { $set: initPostIndex } }));
		dispatch(fetchPost(initPostIndex));
	}
	readPost(action) {
		let postIndex = this.state.postIndex;
		
		switch(action) {
			case "prev": postIndex = (postIndex > 1) ? postIndex-1 : 1; break;
			case "next": postIndex = (postIndex < 100) ? postIndex+1 : postIndex; break;
		}
		
		return postIndex;
	}
	fetchPost(postIndex) {
		const { dispatch, history } = this.props;
		
		this.setState(update(this.state, { postIndex: { $set: postIndex } }));
		dispatch(fetchPost(postIndex));
		
		history.replaceState(null, `/post/${postIndex}`);
	}
	clickPrev() { this.fetchPost( this.readPost("prev") ) }
	clickNext() { this.fetchPost( this.readPost("next") ) }
	render() {
		const { post } = this.props;
		return (
			<div>
				<button onClick={this.clickPrev.bind(this)}>Prev</button>
				{' '}
				<button onClick={this.clickNext.bind(this)}>Next</button>
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