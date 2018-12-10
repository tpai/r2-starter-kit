/* global setTimeout */

import React from 'react';
import { mount } from 'enzyme';
import Component from 'components/elements/ProgressiveImage';

describe('<ProgressiveImage />', () => {
  const initProps = {
    url: 'https://placehold.it/800x600',
    placeholder: 'https://placehold.it/40x30',
  };

  let wrapper;
  beforeAll(() => {
    wrapper = mount(<Component {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should replace fuzzy tiny image with sharp large one after image onload', () => {

    expect(wrapper.instance().state.currentUrl).toBe('https://placehold.it/40x30');
    expect(wrapper.instance().state.isSharp).toBe(false);

    wrapper.find('img').at(1).simulate('load');

    expect(wrapper.instance().state.currentUrl).toBe('https://placehold.it/800x600');
    expect(wrapper.instance().state.isSharp).toBe(true);
  });
});
