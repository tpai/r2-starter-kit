import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'amazeui-react';

import { getList } from 'redux/modules/list';

import TitleList from 'components/TitleList';

export class PostList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    };
    render() {
        const { list } = this.props;
        return (
            <Col
                md={8} mdCentered
                lg={6} lgCentered>
                <TitleList list={list} />
            </Col>
        );
    }
}

export const mapStateToProps = state => { return { list: state.list } };

export default connect(mapStateToProps)(PostList);
