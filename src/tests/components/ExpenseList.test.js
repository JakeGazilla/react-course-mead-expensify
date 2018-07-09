import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/fixtures';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList with empty msg', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});