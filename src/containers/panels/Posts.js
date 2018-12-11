import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Posts from 'components/panels/Posts';
import { withLifecycle } from 'components/hoc';
import Items from 'containers/blocks/Items';
import { handleDidMount, clickPost } from 'sagas/panels/posts';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

function mergeProps(state, { dispatch }, ownProps) {
  return {
    ...ownProps,

    // withLifecycle
    handleDidMount: () => dispatch(handleDidMount()),

    // custom props
    uiState: state.ui.state.data,
    Items: <Items />,
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  withLifecycle(),
)(Posts);
