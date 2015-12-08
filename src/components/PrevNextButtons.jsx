import React from "react";
import { connect } from "react-redux";

import { fetchPost } from "../actions/post";

export const PrevNextButtons = ({
	postId,
	dispatch
}) => (
	<div>
		<button onClick={() => dispatch(fetchPost(postId-1))} disabled={postId-1 < 1}>Prev</button>
		{' '}
		<button onClick={() => dispatch(fetchPost(postId+1))} disabled={postId+1 > 100}>Next</button>
	</div>
);

export default connect()(PrevNextButtons);
