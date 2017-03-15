import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Content from 'components/Content';

import * as actions from 'redux/modules/post';

class ArticleContent extends Component {
    static propTypes = {
        history: PropTypes.shape().isRequired,
        post: PropTypes.shape()
    }
    componentDidMount() {
        const { actions, match } = this.props;
        const { getPost } = actions;
        getPost(match.params.id);
    }
    render() {
        const {
            history,
            post
        } = this.props;
        return (
            <Content {...post} />
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleContent));
