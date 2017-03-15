import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Content from 'components/Content';

import * as actions from 'redux/modules/post';

class ArticleContent extends Component {
    static propTypes = {
        actions: PropTypes.shape(),
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        }),
        post: PropTypes.shape()
    }
    componentDidMount() {
        const { actions, match } = this.props;
        const { getPost } = actions;
        getPost(match.params.id);
    }
    render() {
        return (
            <Content {...this.props.post} />
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
