import React from 'react';
import { shallow } from 'enzyme';
import List from 'components/List';

describe('<List />', () => {
  const initProps = {
    data: [
      {
        id: 0,
        title: 'Title',
        link: '#',
        desc: 'Content',
        imgUrl: 'https://placehold.it/320x180',
        imgPlaceholder: 'https://placehold.it/32x18',
      },
    ],
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<List {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
