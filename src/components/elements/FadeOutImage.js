import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './FadeOutImage.scss';

export default class FadeOutImage extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };
  static defaultProps = {
    url: '',
    placeholder: '',
  };
  constructor(props) {
    super();
    this.state = {
      url: props.placeholder,
      noBlur: false,
    };
  }
  handleImageOnload = (url) => {
    this.setState({
      url,
      noBlur: true,
    });
  };
  render() {
    const { url, noBlur } = this.state;
    const { url: selfUrl } = this.props;
    return (
      <div>
        <img
          ref={(c) => (this.component = c)}
          style={{ backgroundImage: `url('${url}')` }}
          className={cx({
            [styles['placeholder']]: true,
            [styles['noBlur']]: noBlur,
          })}
        />
        <img
          src={selfUrl}
          onLoad={() => setTimeout(() => this.handleImageOnload(selfUrl), 500)}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}
