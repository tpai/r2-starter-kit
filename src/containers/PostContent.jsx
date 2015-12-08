import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { updatePath } from "redux-simple-router";

import { fetchPost } from "../actions/post";
import PrevNextButtons from "../components/PrevNextButtons";

export class PostContent extends Component {
	componentDidMount() {
		const { dispatch, params } = this.props;
		let initPostIndex = params.id * 1;
		dispatch(fetchPost(initPostIndex));
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.post.id !== this.props.post.id;
	}
	componentWillUpdate(nextProps, nextState) {
		const { dispatch } = this.props;
		dispatch(updatePath(`/post/${nextProps.post.id}`));
    }
    getTitle() {
        return this.refs.title;
    }
    getContent() {
        return this.refs.content;
    }
	render() {
		const { dispatch, post } = this.props;
		return (
			<div>
				<PrevNextButtons postId={post.id} />
                <h1 ref="title">{post.title}</h1>
				<p ref="content">{post.body}</p>
			</div>
		);
	}
}

PostContent.propTypes = {
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		post: state.post
	};
};

export default connect(mapStateToProps)(PostContent);
