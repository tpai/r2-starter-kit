import React, { Component } from "react";
import { connect } from "react-redux";

import Pager from "./Pager";
import { fetchPost, prevPage, nextPage } from "../actions/PagerAction";

class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(amt) {
		const { dispatch, nowPage } = this.props;
		if (amt === 1) {
			dispatch(nextPage(nowPage));
		}
		else if (amt === -1) {
			dispatch(prevPage(nowPage));
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.nowPage !== this.props.nowPage) {
			const { dispatch, nowPage } = nextProps;
			dispatch(fetchPost(nowPage));
		}
	}
	componentDidMount() {
		const { dispatch, nowPage } = this.props;
		dispatch(fetchPost(nowPage));
	}
	render() {
		const { post, nowPage } = this.props;
		return (
			<div>
				<Pager post={post} nowPage={nowPage} onClick={this.handleClick} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		nowPage: state.nowPage,
		post: state.post,
	};
}

export default connect(mapStateToProps)(App);