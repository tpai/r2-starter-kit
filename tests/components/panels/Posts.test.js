import React from 'react';
import { shallow } from 'enzyme';

import Posts from 'components/panels/Posts';

describe('<Posts />', () => {
  const initProps = {
    list: [],
    state: 'loading',

    getList: jest.fn(),
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Posts {...initProps} />);
  });

  it('should call getPosts in componentDidMount', () => {
    expect(initProps.getList).toHaveBeenCalledTimes(1);
  });

  it('should render loading page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render post list page', () => {
    wrapper.setProps({
      list: [{
        title: 'Posts Title',
        author: {
          name: 'Tony Pai',
          email: 'tonypai@me.com',
        },
        body: 'Posts Content',
      }],
      state: 'idle',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
