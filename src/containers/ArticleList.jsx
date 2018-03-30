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
    list: PropTypes.arrayOf(PropTypes.object),
    state: PropTypes.string,
  };
  componentDidMount() {
    const { actions } = this.props;
    const { getList } = actions;
    getList();
  }
  render() {
    const { list, state } = this.props;
    return (
      <div className="ts" style={{ height: 720 }}>
        {state === 'loading' && (
          <div className="ts active inverted dimmer">
            <div className={`ts text loader`}>Loading...</div>
          </div>
        )}
        {state === 'idle' && <List data={list} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    state: state.state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(filterActions(actions), dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
