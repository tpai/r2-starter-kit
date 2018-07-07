import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import List from 'components/elements/List';
import Loading from 'components/elements/Loading';

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
        {state === 'loading' && <Loading />}
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
