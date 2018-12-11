import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Post from 'components/panels/Post';
import { withLifecycle } from 'components/hoc';
import Item from 'containers/blocks/Item';
import { handleDidMount } from 'sagas/panels/post';

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
    Item: <Item />,
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  withLifecycle(),
)(Post);
