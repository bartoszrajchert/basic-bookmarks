import * as React from 'react';
import { shallow } from 'enzyme';
import Collection from './collection';

describe('Collection', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Collection />);
    expect(wrapper).toMatchSnapshot();
  });
});
