import { connect } from 'react-redux';

import Item from 'components/blocks/Item';
import { clickRootPath } from 'sagas/panels/post';
import { getLargeImage, getTinyImage } from 'utils/normalizer';

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
    breadcrumb: {
      data: [
        {
          id:          -1,
          text:        'Home',
          handleClick: () => dispatch(clickRootPath()),
        },
        {
          id:          state.response.post.data.id,
          text:        state.response.post.data.title,
          handleClick: () => {},
        },
      ],
      activeId: state.response.post.data.id,
    },
    content: {
      authorName:  state.response.user.data.name,
      authorEmail: state.response.user.data.email,
      title:       state.response.post.data.title,
      description: state.response.post.data.body,
      image:       getLargeImage(state.response.post.data.id),
      placeholder: getTinyImage(state.response.post.data.id),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Item);
