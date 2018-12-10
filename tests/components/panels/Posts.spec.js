import React from 'react';
import { shallow } from 'enzyme';

import Component from 'components/panels/Posts';

describe('<Posts />', () => {
  const initProps = {
    uiState: 'idle',
    posts: [],
    handleClick: jest.fn(),
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component {...initProps} />);
  });

  it('should render initial page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with uiState prop which value is "loading"', () => {
    wrapper.setProps({ uiState: 'loading' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick with id param when click on post', () => {
    wrapper.setProps({
      uiState: 'idle',
      posts: [{
        id: 1,
        title: 'title',
        description: 'description',
        image: 'https://placehold.it/200x200',
        placeholder: 'https://placehold.it/20x20',
      }]
    });
    wrapper.find('.header').at(0).simulate('click');
    expect(initProps.handleClick).toHaveBeenCalledWith(1);
  });
});
