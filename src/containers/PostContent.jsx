import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Col } from 'amazeui-react';

import Buttons from 'components/Buttons';
import Content from 'components/Content';

import * as actions from 'redux/modules/post';

export class PostContent extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        pagination: PropTypes.object.isRequired
    };
    render() {
        const {
            router,
            actions,
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
                <Col
                    md={10} mdCentered
                    lg={8} lgCentered>
                    <Content
                        post={{
                            title,
                            author: `${author.name} (${author.email})`,
                            body
                        }}/>
                </Col>
                <Col
                    md={5} mdCentered
                    lg={3} lgCentered>
                    <Buttons
                        isPrevDisabled={pagination.now <= 1}
                        isNextDisabled={pagination.now >= pagination.max}
                        onPrevButtonClick={() => { getPost(pagination.now - 1) }}
                        onHomeButtonClick={() => { router.push({ pathname: `/` }) }}
                        onNextButtonClick={() => { getPost(pagination.now + 1) }} />
                </Col>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
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
