/* global setTimeout */

import React from 'react';
import { mount } from 'enzyme';
import FadeOutImage from 'components/elements/FadeOutImage';

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
    expect(wrapper.instance().state.noBlur).toBe(false);

    wrapper.find('img').at(1).simulate('load');
    setTimeout(() => {
      expect(wrapper.instance().state.url).toBe('https://placehold.it/800x600');
      expect(wrapper.instance().state.noBlur).toBe(true);
    }, 500);

    jest.runAllTimers();
  });
});
