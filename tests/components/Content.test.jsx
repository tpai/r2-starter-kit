import React from 'react';
import { shallow } from 'enzyme';
import Content from 'components/Content';

describe('<Content />', () => {
  it('should render initial component', () => {
    const mockProps = {
      id: -1,
      title: 'Title',
      author: { name: 'Author', email: 'Email' },
      body: 'Content'
    };
    const wrapper = shallow(
      <Content {...mockProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
