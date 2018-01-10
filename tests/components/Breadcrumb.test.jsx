import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from 'components/Breadcrumb';

describe('<Breadcrumb />', () => {
  it('should render initial component', () => {
    const mockProps = {
      data: [
        { text: 'Post List', link: '/' },
        { text: 'Content' }
      ]
    };
    const wrapper = shallow(
      <Breadcrumb {...mockProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
