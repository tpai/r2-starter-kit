/* global setTimeout */

import React from 'react';
import { mount } from 'enzyme';
import FadeOutImage from 'components/FadeOutImage';

describe('<FadeOutImage />', () => {

  const initProps = {
    url: '',
    placeholder: ''
  };

  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <FadeOutImage {...initProps} />
    );
  });

  it('should render initial component', () => {
    wrapper.setProps({
      url: 'https://placehold.it/800x600',
      placeholder: 'https://placehold.it/40x30'
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should set next placeholderUrl prop to url state when pass new props', () => {
    jest.useFakeTimers();
    wrapper.find('#preload_image').simulate('load');
    setTimeout(() => {
        expect(wrapper.instance().state.url).toBe('https://placehold.it/800x600');
    }, 500);
    jest.runAllTimers();
  });
});
