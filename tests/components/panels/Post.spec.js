import React from 'react';
import { shallow } from 'enzyme';

import Component from 'components/panels/Post';
import Item from 'components/blocks/Item';

describe('<Post />', () => {
  const initProps = {
    uiState: 'idle',
    Item: <Item />,
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
