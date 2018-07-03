import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPost } from 'redux/modules/post';
import Post from 'components/panels/Post';

function mapStateToProps(state, ownProps) {
  return {
    id: parseInt(ownProps.match.params.id, 10),
    post: state.post,
    state: state.state,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
