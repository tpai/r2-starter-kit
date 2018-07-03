import React from 'react';
import { shallow } from 'enzyme';
import Content from 'components/elements/Content';

describe('<Content />', () => {
  const initProps = {
    id: 1,
    title: '',
    author: {},
    body: '',
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Content {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct component with assigned values', () => {
    wrapper.setProps({
      id: 2,
      title: 'Post Title',
      author: {
        name: 'Tony Pai',
        email: 'tonypai@me.com',
      },
      body: 'Post Content',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
