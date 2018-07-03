import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FadeOutImage from 'components/elements/FadeOutImage';

export default class Content extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
    body: PropTypes.string,
  };
  static defaultProps = {
    id: null,
    title: '',
    author: {
      name: '',
      email: '',
    },
    body: '',
  };
  render() {
    const {
      id,
      title,
      author,
      body,
    } = this.props;
    return (
      <div>
        {id && (
          <div className="ts card text container">
            <div className="image">
              <FadeOutImage
                url={`https://picsum.photos/1200/720?image=${id}`}
                placeholder={`https://picsum.photos/60/36?image=${id}`}
              />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="bulleted meta">
                {`${author.name || ''} (${author.email || ''})`}
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
