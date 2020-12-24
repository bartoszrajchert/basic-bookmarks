import * as React from 'react';
import { shallow } from 'enzyme';
import HeaderTitle from './header-title';

describe('HeaderTitle', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<HeaderTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
