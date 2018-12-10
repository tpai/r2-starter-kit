import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { withLifecycle } from 'components/hoc';

describe('withLifecycle', () => {
  let wrapper;
  let handleDidMount;
  let handleWillUnmount;

  beforeEach(() => {
    handleDidMount = jest.fn();
    handleWillUnmount = jest.fn();
    const WrappedComponent = withLifecycle()(() => <h1>hello</h1>);
    wrapper = shallow(
      <WrappedComponent
        handleDidMount={handleDidMount}
        handleWillUnmount={handleWillUnmount}
      />
    );
  });

  it('should render with initial props', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should render with undefined props', () => {
    wrapper.setProps({
      handleDidMount: undefined,
      handleWillUnmount: undefined,
    });
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('handleDidMount is called', () => {
    expect(handleDidMount).toBeCalled();
  });

  it('handleWillUnmount is called', () => {
    wrapper.unmount();
    expect(handleWillUnmount).toBeCalled();
  });
});
