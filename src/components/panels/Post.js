import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/elements/Loading';
import Breadcrumb from 'containers/blocks/Breadcrumb';
import Content from 'containers/blocks/Content';

class Post extends PureComponent {
  static propTypes = {
    uiState: PropTypes.oneOf(['loading', 'idle', 'failure']),
  };
  static defaultProps = {
    uiState: 'idle',
  }
  render() {
    const { uiState } = this.props;
    return (
      <div>
        {uiState === 'loading' && <Loading />}
        {uiState === 'idle' &&
          <div className="ts text container">
            <Breadcrumb />
            <div className="ts divider" />
            <Content />
          </div>
        }
      </div>
    );
  }
}

export default Post;
