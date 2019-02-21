import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/elements/Breadcrumb';

describe('<Breadcrumb />', () => {
  const initProps = {
    data: [
      { id: 1, text: 'Home',       handleClick: jest.fn() },
      { id: 2, text: 'Post Title', handleClick: jest.fn() },
    ],
    activeId: 2,
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
    expect(initProps.data[0].handleClick).not.toHaveBeenCalled();
    wrapper.find('a').simulate('click');
    expect(initProps.data[0].handleClick).toHaveBeenCalled();
  });
});
