import React, { Component, PropTypes } from "react";

class Pager extends Component {
	render() {
		const { post, nowPage, onClick } = this.props;
		return (
			<div>
				Page: {nowPage}
				{' '}
				<button onClick={e => onClick(-1)}>Prev</button>
				{' '}
				<button onClick={e => onClick(1)}>Next</button>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>
		);
	}
}

Pager.propTypes = {
	nowPage: PropTypes.number.isRequired
};

export default Pager;