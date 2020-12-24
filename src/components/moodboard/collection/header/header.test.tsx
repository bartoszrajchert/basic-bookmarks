import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import EViewType from '../../../../utilities/enums/collection';

describe('Header', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(
      <Header collectionViewType={EViewType.large} onTypeChange={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
