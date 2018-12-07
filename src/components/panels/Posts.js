import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/elements/Loading';
import ProgressiveImage from 'components/elements/ProgressiveImage';

class Posts extends PureComponent {
  static propTypes = {
    uiState: PropTypes.oneOf(['loading', 'idle', 'failure']),
    posts: PropTypes.array,
    handleClick: PropTypes.func,
  };
  static defaultProps = {
    uiState: 'idle',
    posts: [],
    handleClick: () => {},
  };
  render() {
    const {
      uiState,
      posts,
      handleClick,
    } = this.props;
    return (
      <div>
        {uiState === 'loading' && <Loading />}
        {uiState === 'idle' && (
          <div className="ts text container">
            <div className="ts divided items">
              {posts.map(({
                id,
                title,
                description,
                image,
                placeholder,
              }, key) => (
                <div key={`item${key}`} className="item">
                  <div className="image">
                    <ProgressiveImage
                      url={image}
                      placeholder={placeholder}
                    />
                  </div>
                  <div className="content">
                    <div
                      onClick={() => handleClick(id)}
                      className="header"
                      style={{ cursor: 'pointer' }}
                    >
                      {title}
                    </div>
                    <div className="description">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
