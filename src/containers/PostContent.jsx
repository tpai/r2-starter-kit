import React, { Component, PropTypes } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { getPost } from "redux/modules/post";

export class PostContent extends Component {
    constructor(props) {
        super(props);
        this.onListButtonClick = this.onListButtonClick.bind(this);
        this.onPrevButtonClick = this.onPrevButtonClick.bind(this);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
    }
    onListButtonClick() {
        const { router } = this.props;
        router.push({ pathname: `/` });
    }
    onPrevButtonClick() {
        const { dispatch, post } = this.props;
        dispatch(getPost(post.id - 1));
    }
    onNextButtonClick() {
        const { dispatch, post } = this.props;
        dispatch(getPost(post.id + 1));
    }
    componentDidMount() {
        const { dispatch, routeParams } = this.props;
        let initPostIndex = routeParams.id * 1;
        dispatch(getPost(initPostIndex));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.post.id !== this.props.post.id;
    }
    componentWillUpdate(nextProps, nextState) {
        const { router } = this.props;
        router.push({ pathname: `/post/${nextProps.post.id}` });
    }
    render() {
        const { dispatch, post } = this.props;
        return (
            <div>
                <button ref="back" onClick={this.onListButtonClick}>Back</button>
                {' '}
                <button ref="prev" onClick={this.onPrevButtonClick} disabled={post.id - 1 < 1}>Prev</button>
                {' '}
                <button ref="next" onClick={this.onNextButtonClick} disabled={post.id + 1 > 100}>Next</button>
                <h1 ref="title">{post.title}</h1>
                <p ref="body">{post.body}</p>
            </div>
        );
    }
    static propTypes = {
        post: PropTypes.object.isRequired
    };
}

export const mapStateToProps = state => { return { post: state.post } };

export default connect(mapStateToProps)(withRouter(PostContent));
