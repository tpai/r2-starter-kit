import React, { Component, PropTypes } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import classNames from "classnames";

import * as style from "styles/postContent";

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
        const {
            parent,
            buttons,
            disabled,
            btn,
            container
        } = style;
        const { dispatch, post } = this.props;
        const isMin = post.id - 1 < 1;
        const isMax = post.id + 1 > 100;
        return (
            <div>
                <div className={buttons}>
                    <div className={classNames(btn, {[disabled]: isMin})}>
                        <a ref="prev" onClick={isMin ? null : this.onPrevButtonClick}>
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className={btn}>
                        <a ref="back" onClick={this.onListButtonClick}>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className={classNames(btn, {[disabled]: isMax})}>
                        <a ref="next" onClick={isMax ? null : this.onNextButtonClick}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className={parent}>
                    <div className={container}>
                        <h1 ref="title">{post.title}</h1>
                        <p ref="body">{post.body}</p>
                    </div>
                </div>
            </div>
        );
    }
    static propTypes = {
        post: PropTypes.object.isRequired
    };
}

export const mapStateToProps = state => { return { post: state.post } };

export default connect(mapStateToProps)(withRouter(PostContent));
