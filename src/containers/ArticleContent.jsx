import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Content from 'components/Content';

import * as actions from 'redux/modules/post';

class PostContent extends Component {
    componentDidMount() {
        const { actions, match } = this.props;
        const { getPost } = actions;
        getPost(match.params.id);
    }
    render() {
        const {
            actions,
            history,
            list,
            post,
            pagination,
        } = this.props;
        const {
            getPost,
        } = actions;
        const {
            title,
            author,
            body,
        } = post;
        return (
        );
    }
}

PostContent.propTypes = {
    history: PropTypes.shape().isRequired,
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

function mapStateToProps(state) {
    return {
        list: state.list,
        post: state.post,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostContent));
