import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from 'components/elements/Breadcrumb';
import Content from 'components/elements/Content';

class Post extends PureComponent {
  static propTypes = {
    // container state
    id: PropTypes.number,
    post: PropTypes.object,
    state: PropTypes.oneOf(['loading', 'idle', 'failure']),

    // container actions
    getPost: PropTypes.func,
  };
  static defaultProps = {
    id: null,
    post: {},
    state: 'idle',

    getPost: () => {},
  }
  componentDidMount() {
    const { id, getPost } = this.props;
    getPost(id);
  }
  render() {
    const { id, post, state } = this.props;
    return (
      <div>
        {state === 'loading' && (
          <div className="ts active inverted dimmer">
            <div className={`ts text loader`}>Loading...</div>
          </div>
        )}
        <div className="ts text container">
          <Breadcrumb
            data={[
              { text: 'Post List', link: '/' },
              { text: post.title }
            ]}
          />
          <div className="ts divider" />
          {state === 'idle' && <Content id={id} {...post} />}
        </div>
      </div>
    );
  }
}

export default Post;
