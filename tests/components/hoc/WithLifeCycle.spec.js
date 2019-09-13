import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { withLifecycle } from 'components/hoc';

describe('withLifecycle', () => {
  let wrapper;
  let handleDidMount;
  let handleWillUnmount;

  it('should render with initial props', () => {
    handleDidMount = jest.fn();
    handleWillUnmount = jest.fn();
    const WrappedComponent = withLifecycle()(() => <h1>hello</h1>);
    wrapper = shallow(
      <WrappedComponent
        handleDidMount={handleDidMount}
        handleWillUnmount={handleWillUnmount}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(handleDidMount).toBeCalled();
    expect(handleWillUnmount).not.toBeCalled();
    wrapper.unmount();
    expect(handleWillUnmount).toBeCalled();
  });

  it('should render with undefined props', () => {
    window.console.log = jest.fn();
    handleDidMount = undefined;
    handleWillUnmount = undefined;
    const WrappedComponent = withLifecycle()(() => <h1>hello</h1>);
    wrapper = shallow(
      <WrappedComponent
        handleDidMount={handleDidMount}
        handleWillUnmount={handleWillUnmount}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(window.console.log).toHaveBeenCalledTimes(1);
    wrapper.unmount();
    expect(window.console.log).toHaveBeenCalledTimes(2);
  });
});
