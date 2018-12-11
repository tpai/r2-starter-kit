import React, { PureComponent } from 'react';
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
      <div>
        {uiState === 'loading' && <Loading />}
        {uiState === 'idle' && Item}
      </div>
    );
  }
}

export default Post;
