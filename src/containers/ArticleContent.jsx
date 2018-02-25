import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import reduce from 'object.reduce';

import Breadcrumb from 'components/Breadcrumb';
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
        post: PropTypes.shape(),
        state: PropTypes.string
    }
    componentDidMount() {
        const { actions, match } = this.props;
        const { getPost } = actions;
        getPost(match.params.id);
    }
    render() {
        const { post, state } = this.props;
        return (
            <div className="ts" style={{ height: 720 }}>
                {state === 'loading' &&
                    <div className="ts active inverted dimmer">
                        <div className={`ts text loader`}>Loading...</div>
                    </div>
                }
                <Breadcrumb data={[
                    { text: 'Post List', link: '/' },
                    { text: post.title }
                ]} />
                <div className="ts divider" />
                {state === 'idle' && <Content {...post} />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        state: state.state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filterActions(actions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleContent));

export function filterActions(actions) {
    const acts = reduce(actions, (result, val, key) => {
        if (typeof val === 'function') {
            return Object.assign({}, result, { [key]: val });
        }
        return result;
    }, {});
    return acts;
}
