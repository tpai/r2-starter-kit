import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FadeOutImage from 'components/elements/FadeOutImage';

export default class List extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
        desc: PropTypes.string,
        imgUrl: PropTypes.string,
        imgPlaceholder: PropTypes.string,
      }),
    ),
  };
  static defaultProps = {
    data: [],
  };
  render() {
    const { data } = this.props;
    return (
      <div className="ts divided items">
        {data.map((val, key) => {
          return (
            <div key={`item${key}`} className="item">
              <div className="image">
                <FadeOutImage
                  url={val.imgUrl}
                  placeholder={val.imgPlaceholder}
                />
              </div>
              <div className="content">
                <Link to={val.link} className="header">
                  {val.title}
                </Link>
                <div className="description">{val.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
