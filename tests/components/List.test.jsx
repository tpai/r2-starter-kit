import React from 'react';
import { shallow } from 'enzyme';
import List from 'components/List';

describe('<List />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<List />);
  });

  it('should render initial component', () => {
    wrapper.setProps({
      data: [{
        id: 0,
        title: 'Title',
        link: '#',
        desc: 'Content',
        img: 'https://placehold.it/320x180',
      }]
    });
    expect(wrapper).toMatchSnapshot();
  });
});
