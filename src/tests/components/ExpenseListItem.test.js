import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/fixtures';

test('should render ExpenseListItem with expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} key={expenses[0].id}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

// test('should render ExpenseList with empty msg', () => {
//   const wrapper = shallow(<ExpenseList expenses={[]}/>);
//   expect(toJSON(wrapper)).toMatchSnapshot();
// });