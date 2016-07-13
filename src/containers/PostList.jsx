import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'amazeui-react';

import { getList } from 'redux/modules/list';

import TitleList from 'components/TitleList';

export class PostList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    };
    render() {
        const { list } = this.props;
        return (
            <Grid className="doc-g">
                <Col lg={6} lgCentered>
                    <h1>Post List</h1>
                    <TitleList list={list} />
                </Col>
            </Grid>
        );
    }
}

export const mapStateToProps = state => { return { list: state.list } };

export default connect(mapStateToProps)(PostList);
