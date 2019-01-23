import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/elements/Loading';

class Post extends PureComponent {
  static propTypes = {
    uiState: PropTypes.oneOf(['loading', 'idle', 'failure']),
    Item: PropTypes.element,
  };
  static defaultProps = {
    uiState: 'idle',
    Item: null,
  }
  render() {
    const { uiState, Item } = this.props;
    return (
      <Fragment>
        {uiState === 'loading' && <Loading />}
        {uiState === 'idle' && Item}
      </Fragment>
    );
  }
}

export default Post;
