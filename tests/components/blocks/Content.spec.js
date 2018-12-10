import React from 'react';
import { shallow } from 'enzyme';
import Component from 'components/blocks/Content';

describe('<Content />', () => {
  const initProps = {
    authorName: '',
    authorEmail: '',
    title: '',
    description: '',
    image: '',
    placeholder: '',
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component {...initProps} />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with props', () => {
    wrapper.setProps({
      authorName: 'John Doe',
      authorEmail: 'johndoe@anonymous.org',
      title: 'title',
      description: 'description',
      image: 'https://placehold.it/200x200',
      placeholder: 'https://placehold.it/20x20',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
