import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ProgressiveImage from 'components/elements/ProgressiveImage';

class Items extends PureComponent {
  static propTypes = {
    posts: PropTypes.array,
    handleClick: PropTypes.func,
  }
  static defaultProps = {
    posts: [],
    handleClick: () => {},
  }
  render() {
    const { posts, handleClick } = this.props;
    return (
      <div className="ts text container">
        <div className="ts divided items">
          {posts.map(({
            id,
            title,
            description,
            image,
            placeholder,
          }, key) => (
            <div
              key={`item${key}`}
              className="item"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(id)}
            >
              <div className="image">
                <ProgressiveImage
                  url={image}
                  placeholder={placeholder}
                />
              </div>
              <div className="content">
                <div className="header">
                  {title}
                </div>
                <div className="description">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Items;
