import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import List from 'components/elements/List';

class Posts extends PureComponent {
  static propTypes = {
    // container state
    list: PropTypes.arrayOf(PropTypes.object),
    state: PropTypes.oneOf(['loading', 'idle', 'failure']),

    // container actions
    getList: PropTypes.func,
  };
  static defaultProps = {
    // container state
    list: [],
    state: 'idle',

    // container actions
    getList: () => {},
  };
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { list, state } = this.props;
    return (
      <div>
        {state === 'loading' && (
          <div className="ts active inverted dimmer">
            <div className={`ts text loader`}>Loading...</div>
          </div>
        )}
        {state === 'idle' && (
          <div className="ts text container">
            <List data={list} />
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
