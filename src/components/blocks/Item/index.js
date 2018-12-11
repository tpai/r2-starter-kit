import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from 'components/elements/Breadcrumb';
import Content from 'components/elements/Content';

class Item extends PureComponent {
  static propTypes = {
    breadcrumb: PropTypes.object,
    content: PropTypes.object,
  }
  static defaultProps = {
    breadcrumb: {},
    content: {},
  }
  render() {
    const { breadcrumb, content } = this.props;
    return (
      <div className="ts text container">
        <Breadcrumb {...breadcrumb} />
        <div className="ts divider" />
        <Content {...content} />
      </div>
    );
  }
}

export default Item;
