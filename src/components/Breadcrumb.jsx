import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Breadcrumb extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="ts breadcrumb">
        {data.map((val, key) => {
          const lastOne = key === data.length - 1;
          return (
            <div
              key={`crumb${key}`}
              className={`${lastOne ? 'active' : ''} section`}
            >
              {val.link ? <Link to={val.link}>{val.text}</Link> : val.text}
              {!lastOne && <i className="right angle icon divider" />}
            </div>
          );
        })}
      </div>
    );
  }
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  };
}
