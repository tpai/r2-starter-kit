import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'redux/modules/list';
import List from 'components/List';
import { filterActions } from './ArticleContent';

class ArticleList extends Component {
    static propTypes = {
        actions: PropTypes.shape(),
        list: PropTypes.arrayOf(PropTypes.object)
    }
    componentDidMount() {
        const { actions } = this.props;
        const { getList } = actions;
        getList();
    }
    render() {
        const { list } = this.props;
        return (
            <List data={list} />
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filterActions(actions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
