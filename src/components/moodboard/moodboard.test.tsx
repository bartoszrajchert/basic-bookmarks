import * as React from 'react';
import { shallow } from 'enzyme';
import Moodboard from './moodboard';

describe('Moodboard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Moodboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
