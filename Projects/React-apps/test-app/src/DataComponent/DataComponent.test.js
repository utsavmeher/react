import React from 'react';
import { shallow } from 'enzyme';
import DataComponent from './DataComponent';

describe('<DataComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<DataComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
