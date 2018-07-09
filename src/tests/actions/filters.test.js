import moment from 'moment';
import { setStartDate, setEndDate, sortByFilter, setTextFilter } from '../../actions/filters';

// set start date
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// set end date
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

// set sortByFilter default - date
test('should generate set sortByFilter action object', () => {
  const action = sortByFilter();
  expect(action).toEqual({
    type: "SORT_BY_FILTER",
    sortBy: 'date'
  });
});

// set sortByFilter amount
test('should generate set sortByFilter action object', () => {
  const action = sortByFilter('amount');
  expect(action).toEqual({
    type: "SORT_BY_FILTER",
    sortBy: 'amount'
  });
});

// set text filter - default
test('should generate set sortByFilter action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ''
  });
});

// set text filter - with value
test('should generate set sortByFilter action object', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: 'rent'
  });
});