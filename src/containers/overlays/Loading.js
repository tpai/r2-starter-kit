import { connect } from 'react-redux';

import Loading from '~/components/overlays/Loading';

function mapStateToProps(state) {
  return {
    isLoading: state.ui.state.isLoading,
  };
}

export default connect(
  mapStateToProps,
)(Loading);
