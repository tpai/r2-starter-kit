/* global setTimeout */

import React from 'react';
import { mount } from 'enzyme';
import FadeOutImage from 'components/FadeOutImage';

describe('<FadeOutImage />', () => {
  const initProps = {
    url: 'https://placehold.it/800x600',
    placeholder: 'https://placehold.it/40x30',
  };

  let wrapper;
  beforeAll(() => {
    wrapper = mount(<FadeOutImage {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set selfUrl instead of placeholder after image onload', () => {
    jest.useFakeTimers();

    expect(wrapper.instance().state.url).toBe('https://placehold.it/40x30');

    wrapper.find('#preload_image').simulate('load');
    setTimeout(() => {
      expect(wrapper.instance().state.url).toBe('https://placehold.it/800x600');
    }, 500);

    jest.runAllTimers();
  });
});
