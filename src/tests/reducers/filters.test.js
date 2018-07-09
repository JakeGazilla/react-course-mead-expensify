import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to date by default', () => {
  const action = (sortBy = 'date') => ({
    type: "SORT_BY_FILTER",
    sortBy
  });
  const state = filtersReducer({sortBy: 'amount'}, action());
  expect(state.sortBy).toBe('date');
});

test('should set sortyBy to amount', () => {
  const state = filtersReducer({sortBy: 'date'}, {type: 'SORT_BY_FILTER', sortBy: 'amount'});
  expect(state.sortBy).toBe('amount');
});

test('should set textFilter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'rent'});
  expect(state.text).toBe('rent');
});

test('should set startDateFilter', () => {
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).valueOf()});
  expect(state.startDate).toBe(moment(0).valueOf());
});

test('should set endDateFilter', () => {
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0).valueOf()});
  expect(state.endDate).toBe(moment(0).valueOf());
})