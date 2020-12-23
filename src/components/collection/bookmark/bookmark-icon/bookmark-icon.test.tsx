import * as React from 'react';
import { shallow } from 'enzyme';
import BookmarkIcon from './bookmark-icon';

describe('BookmarkIcon', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<BookmarkIcon img="" alt="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
