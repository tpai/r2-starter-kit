import React from 'react';
import { shallow } from 'enzyme';

import Post from 'components/panels/Post';

describe('<Post />', () => {
  const initProps = {
    id: null,
    post: {},
    state: 'loading',

    getPost: jest.fn(),
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Post {...initProps} />);
  });

  it('should call getPost in componentDidMount', () => {
    expect(initProps.getPost).toHaveBeenCalledTimes(1);
  });

  it('should render loading page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render post content page', () => {
    wrapper.setProps({
      id: 1,
      post: {
        title: 'Post Title',
        author: {
          name: 'Tony Pai',
          email: 'tonypai@me.com',
        },
        body: 'Post Content',
      },
      state: 'idle',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
