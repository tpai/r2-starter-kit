import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/blocks/Footer';

describe('<Footer />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
