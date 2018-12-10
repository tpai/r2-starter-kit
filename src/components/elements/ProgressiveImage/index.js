import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.scss';

export default class FadeOutImage extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };
  static defaultProps = {
    url: '',
    placeholder: '',
  };
  handleImageOnload = () => {
    const { url } = this.props;
    this.setState({
      currentUrl: url,
      isSharp: true,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: props.placeholder,
      isSharp: false,
    };
  }
  render() {
    const { currentUrl, isSharp } = this.state;
    const { url } = this.props;
    return (
      <div>
        <img
          ref={(c) => (this.component = c)}
          style={{ backgroundImage: `url('${currentUrl}')` }}
          className={cx(styles['placeholder'], {
            [styles['sharp']]: isSharp,
          })}
        />
        <img
          src={url}
          onLoad={() => this.handleImageOnload()}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}
