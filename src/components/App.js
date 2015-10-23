import React, { Component } from "react";
import { connect } from "react-redux";

import Pager from "./Pager";
import { fetchPost } from "../actions/PagerAction";

class App extends Component {
	componentWillReceiveProps(nextProps) {
		const { dispatch, postDetail } = nextProps;
		if (nextProps.postDetail.nowPage !== postDetail.nowPage) {
			dispatch(fetchPost(postDetail.nowPage));
		}
	}
	componentDidMount() {
		const { dispatch, postDetail } = this.props;
		dispatch(fetchPost(postDetail.nowPage));
	}
	render() {
		const { dispatch, postDetail } = this.props;
		return (
			<div>
				<Pager postDetail={postDetail} dispatch={dispatch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		postDetail: {
			nowPage: state.nowPage,
			post: state.post			
		}
	};
}

export default connect(mapStateToProps)(App);