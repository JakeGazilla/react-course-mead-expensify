import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashBoardPage from '../../components/DashBoard';

test('should render DashBoardPage', () => {
  const wrapper = shallow(<ExpenseDashBoardPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});