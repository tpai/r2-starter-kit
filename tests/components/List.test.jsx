import React from 'react';
import { shallow } from 'enzyme';
import List from 'components/List';

describe('<List />', () => {
  it('should render initial component', () => {
    const mockProps = {
      data: [{
        id: 0,
        title: 'Title',
        link: '#',
        desc: 'Content',
        img: 'https://placehold.it/320x180',
      }]
    };
    const wrapper = shallow(
      <List {...mockProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
