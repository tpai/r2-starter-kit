import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from 'components/Breadcrumb';

describe('<Breadcrumb />', () => {
  const initProps = {
    data: [{ text: 'Post List', link: '/' }, { text: 'Content' }],
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Breadcrumb {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
