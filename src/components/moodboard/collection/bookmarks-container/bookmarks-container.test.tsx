import * as React from 'react';
import { shallow } from 'enzyme';
import BookmarksContainer from './bookmarks-container';

describe('BookmarksContainer', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<BookmarksContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
