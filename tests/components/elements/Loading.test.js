import React from 'react';
import { shallow } from 'enzyme';
import Loading from 'components/elements/Loading';

describe('<Loading />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Loading />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
