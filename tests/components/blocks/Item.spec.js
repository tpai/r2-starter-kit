import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/blocks/Item';

describe('<Item />', () => {
  const initProps = {
    breadcrumb: {},
    content: {},
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
