import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getComponentName } from 'utils/react-utils';

export default ({
  handleDidMount,
  handleWillUnmount,
} = {}) => (WrappedComponent) => {
  class WithLifecycle extends PureComponent {
    static propTypes = {
      handleDidMount:    PropTypes.func,
      handleWillUnmount: PropTypes.func,
    }
    static defaultProps = {
      handleDidMount:    handleDidMount || (() => console.log(`${getComponentName(WrappedComponent)} did mounted`)),
      handleWillUnmount: handleWillUnmount || (() => console.log(`${getComponentName(WrappedComponent)} will unmount`)),
    }
    componentDidMount = this.props.handleDidMount;
    componentWillUnmount = this.props.handleWillUnmount;
    render () {
      const { handleDidMount, handleWillUnmount, ...props } = this.props;
      return <WrappedComponent {...props} />;
    }
  }
  WithLifecycle.displayName = `WithLifecycle(${getComponentName(WrappedComponent)})`;
  return WithLifecycle;
};
