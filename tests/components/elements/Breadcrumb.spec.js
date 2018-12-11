import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/elements/Breadcrumb';

describe('<Breadcrumb />', () => {
  const initProps = {
    title: '',
    handleClick: jest.fn(),
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with props', () => {
    wrapper.setProps({ title: 'title' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick when click root path', () => {
    expect(initProps.handleClick).toHaveBeenCalledTimes(0);
    wrapper.find('a').simulate('click');
    expect(initProps.handleClick).toHaveBeenCalledTimes(1);
  });
});
