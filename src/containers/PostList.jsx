import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { fetchList } from "../actions/list";
import TitleList from "../components/TitleList";

export class PostList extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchList());
	}
	render() {
		const { list } = this.props;
		return (
			<div>
				<h1>Post List</h1>
				<TitleList list={this.props.list} />
			</div>
		);
	}
}

PostList.propTypes = {
	list: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		list: state.list
	};
};

export default connect(mapStateToProps)(PostList);
