import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from 'redux/modules/list';
import Posts from 'components/panels/Posts';

function mapStateToProps(state) {
  return {
    list: state.list,
    state: state.state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
