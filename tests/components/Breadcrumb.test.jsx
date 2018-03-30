import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from 'components/Breadcrumb';

describe('<Breadcrumb />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Breadcrumb />);
  });

  it('should render initial component', () => {
    wrapper.setProps({
      data: [{ text: 'Post List', link: '/' }, { text: 'Content' }],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
