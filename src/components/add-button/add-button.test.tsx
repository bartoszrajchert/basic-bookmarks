import * as React from 'react';
import { shallow } from 'enzyme';
import AddButton from './add-button';

describe('AddButton', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AddButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
