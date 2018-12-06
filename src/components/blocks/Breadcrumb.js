import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Breadcrumb extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    handleClick: PropTypes.func,
  };
  static defaultProps = {
    title: '',
    handleClick: () => {},
  };
  render() {
    const { title, handleClick } = this.props;
    return (
      <div className="ts breadcrumb">
        <div className="section">
          <a
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            Post List
          </a>
        </div>
        <div className="section active">
          <i className="right angle icon divider" />
          {title}
        </div>
      </div>
    );
  }
}
