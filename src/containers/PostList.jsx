import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getList } from 'redux/modules/list';

import TitleList from 'components/TitleList';

export class PostList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    };
    render() {
        const { list } = this.props;
        return (
            <TitleList
                title='Article List'
                list={list}
            />
        );
    }
}

export const mapStateToProps = state => { return { list: state.list } };

export default connect(mapStateToProps)(PostList);
