import { connect } from 'react-redux';

import Items from 'components/blocks/Items';
import { clickPost } from 'sagas/panels/posts';

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
    posts: state.response.posts.data,
    handleClick: (id) => dispatch(clickPost(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Items);
