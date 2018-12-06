import { connect } from 'react-redux';

import Content from 'components/blocks/Content';
import { getLargeImage, getTinyImage } from 'utils/normalizer';

function mapStateToProps(state) {
  return {
    authorName: state.response.user.data.name,
    authorEmail: state.response.user.data.email,
    title: state.response.post.data.title,
    description: state.response.post.data.body,
    image: getLargeImage(state.response.post.data.id),
    placeholder: getTinyImage(state.response.post.data.id),
  };
}

export default connect(mapStateToProps)(Content);
