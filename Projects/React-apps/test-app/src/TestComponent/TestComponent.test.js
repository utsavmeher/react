import React from 'react';
import { shallow } from 'enzyme';
import TestComponent from './TestComponent';

describe('<TestComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<TestComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
