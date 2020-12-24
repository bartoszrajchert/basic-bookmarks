import * as React from 'react';
import { shallow } from 'enzyme';
import Bookmark from './bookmark';

describe('Booa', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Bookmark type={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
