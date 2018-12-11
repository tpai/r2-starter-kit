import React from 'react';
import { shallow } from 'enzyme';

import Component from 'components/panels/Posts';
import Items from 'components/blocks/Items';

describe('<Posts />', () => {
  const initProps = {
    uiState: 'idle',
    Items: <Items />,
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
});
