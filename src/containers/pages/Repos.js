import { connect } from 'react-redux';

import Repos from '~/components/pages/Repos';
import {
  handleDidMount,
  loadMore,
} from '~/sagas/pages/repos';
import { getData as getUserData } from '~/selectors/response/user';
import { getData as getReposData } from '~/selectors/response/repos';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

function mergeProps(state, { dispatch }, ownProps) {
  return {
    ...ownProps,

    handleDidMount: () => dispatch(handleDidMount()),
    loadMore: () => dispatch(loadMore()),

    user: getUserData(state),
    repos: getReposData(state),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Repos);
