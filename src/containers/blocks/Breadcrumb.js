import { connect } from 'react-redux';

import Breadcrumb from 'components/blocks/Breadcrumb';
import { clickRootPath } from 'sagas/panels/post';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

function mergeProps(state, { dispatch }, ownProps) {
  return {
    ...ownProps,

    // custom props
    title: state.response.post.data.title,
    handleClick: () => dispatch(clickRootPath()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Breadcrumb);
