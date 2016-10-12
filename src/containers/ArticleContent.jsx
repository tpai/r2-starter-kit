import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import PaginationButtons from 'components/PaginationButtons';
import Content from 'components/Content';

import * as actions from 'redux/modules/post';

export function PostContent({
    router,
    list,
    post,
    pagination,
}) {
    const {
        getPost,
    } = actions;
    const {
        title,
        author,
        body,
    } = post;
    return (
        <div>
            <Content
              post={{
                  title,
                  author: `${author.name} (${author.email})`,
                  body,
              }}
            />
            <PaginationButtons
              data={list}
              currentPage={pagination.now}
              isPrevDisabled={pagination.now <= 1}
              isNextDisabled={pagination.now >= pagination.max}
              onPrevButtonClick={() => { getPost(pagination.now - 1); }}
              onHomeButtonClick={() => { router.push({ pathname: '/' }); }}
              onNextButtonClick={() => { getPost(pagination.now + 1); }}
            />
        </div>
    );
}

PostContent.propTypes = {
    router: PropTypes.shape().isRequired,
    actions: PropTypes.shape().isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    post: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
        }),
    }).isRequired,
    pagination: PropTypes.shape().isRequired,
};

export function mapStateToProps(state) {
    return {
        list: state.list,
        post: state.post,
        pagination: state.pagination,
    };
}
export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostContent));
