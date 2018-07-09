import moment from 'moment';

// filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      console.log(action.type);
      return {...state, ...action}
      // or return {...state, text: action.text}
    case 'SORT_BY_FILTER':
      console.log(action.type);
      return {...state, ...action}
      // or return {...state, sortBy: action.sortBy}
    case 'SET_START_DATE':
      console.log(action.type);
      return {...state, ...action}
      // or return {...state, startDate: action.startDate}
    case 'SET_END_DATE':
      console.log(action.type);
      return {...state, ...action}
      // or return {...state, endDate: action.endDate}
    case 'SET_TEXT_FILTER':
      console.log(action.type);
      return {...state, ...action}
      // or return {...state, text: action.text}
    default: 
      return state;
  }
};

export default filtersReducer;