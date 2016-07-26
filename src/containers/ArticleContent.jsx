import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import PaginationButtons from 'components/PaginationButtons';
import Content from 'components/Content';

import * as actions from 'redux/modules/post';

export class PostContent extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        list: PropTypes.array.isRequired,
        post: PropTypes.object.isRequired,
        pagination: PropTypes.object.isRequired
    };
    render() {
        const {
            router,
            actions,
            list,
            post,
            pagination
        } = this.props;
        const {
            getPost
        } = actions;
        const {
            title,
            author,
            body
        } = post;
        return (
            <div>
                <Content
                    post={{
                        title,
                        author: `${author.name} (${author.email})`,
                        body: `<img src='http://lorempixel.com/800/450?t=${title}' />${body}`
                    }}/>
                <PaginationButtons
                    data={list}
                    currentPage={pagination.now}
                    isPrevDisabled={pagination.now <= 1}
                    isNextDisabled={pagination.now >= pagination.max}
                    onPrevButtonClick={() => { getPost(pagination.now - 1) }}
                    onHomeButtonClick={() => { router.push({ pathname: `/` }) }}
                    onNextButtonClick={() => { getPost(pagination.now + 1) }} />
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        list: state.list,
        post: state.post,
        pagination: state.pagination
    }
};
export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostContent));
