import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ProgressiveImage from 'components/elements/ProgressiveImage';

export default class Content extends PureComponent {
  static propTypes = {
    authorName:  PropTypes.string,
    authorEmail: PropTypes.string,
    title:       PropTypes.string,
    description: PropTypes.string,
    image:       PropTypes.string,
    placeholder: PropTypes.string,
  };
  static defaultProps = {
    authorName:  '',
    authorEmail: '',
    title:       '',
    description: '',
    image:       '',
    placeholder: '',
  };
  render() {
    const {
      authorName,
      authorEmail,
      title,
      description,
      image,
      placeholder,
    } = this.props;
    return (
      <div>
        <div className="ts card text container">
          <div className="image">
            <ProgressiveImage
              url={image}
              placeholder={placeholder}
            />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="bulleted meta">
              {`${authorName} (${authorEmail})`}
            </div>
            <div className="description">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
