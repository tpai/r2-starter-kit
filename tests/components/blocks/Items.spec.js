import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/blocks/Items';

describe('<Items />', () => {
  const initProps = {
    posts: [],
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
    wrapper.setProps({
      posts: [{
        id: 1,
        title: 'title',
        description: 'description',
        image: 'https://placehold.it/200x200',
        placeholder: 'https://placehold.it/20x20',
      }],
      handleClick: initProps.handleClick,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick when click item', () => {
    wrapper.find('.item').at(0).simulate('click');
    expect(initProps.handleClick).toHaveBeenCalledWith(1);
  });
});
