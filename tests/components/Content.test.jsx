import React from 'react';
import { shallow } from 'enzyme';
import Content from 'components/Content';

describe('<Content />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Content />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component when receive next props', () => {
    wrapper.setProps({
      id: 1,
      title: 'Title',
      author: { name: 'Author', email: 'Email' },
      body: 'Content',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
