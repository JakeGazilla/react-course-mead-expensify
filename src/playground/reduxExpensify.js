import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// 1. the way the store is constructed can be decide in ADD_EXPENSE - in this example it is [{}] array of objects
// 2. the way it is being modifed can be decided by REMOVE_EXPENSE and EDIT_EXPENSE - by filtering or mapping through array and finding objects' id
// 3. So state of the store in designed via "ADD_EXPENSE action" and modified by other actions


// actions - add, remove, edit, filters, sort
//expenses' actions
const addExpense = ( 
  { 
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 
  } = {} 
) => (
  {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
});

const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// filters' actions
const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text
});

// I created just one action that requires passing a prop "sortBy what?", alternatively can create seperate actions for each type of prop, in my action default value is "date", otherwise can pass other value while dispatching action, like "amount"
const sortByFilter = (sortBy = 'date') => ({
  type: "SORT_BY_FILTER",
  sortBy
});

// can also just set startDate without =undefined - result will be the same
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});



// expenses reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
    // console.log(state);
    console.log(action.type)
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
    console.log(action.type)
      return state.filter(({id}) => id !== action.id )
    case 'EDIT_EXPENSE':
    console.log(action.type)
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default: 
      return state;
  }
};

// filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
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

// timestamps (miliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10, -203

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
  return expenses.filter( (expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase()); 

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation
const store = createStore(
  // here we define how the store will look like
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// display store
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(state);
});


// dispatches
const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 200, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense( { description: 'beverage', note: 'coffee', amount: 100, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense( { description: 'food', note: 'sandwich', amount: 150, createdAt: -500 }));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('jumbo'));
// store.dispatch(sortByFilter('amount'));
// store.dispatch(sortByFilter());
// store.dispatch(sortByFilter('id'));

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

// store.dispatch(setTextFilter('coffee'));


// console.log();

//////////////////////////////

const demoState = {
  expenses: [{
    id: 'asjjdsjdsa',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // or date
    startDate: undefined,
    endDate: undefined 
  }
};



// object spread operator - need additional plugin "babel spread operator"
// allows for cloning and modyfing objects without phisically overwritting

// const user = {
//   name: 'Jen',
//   age: 24
// };

// console.log({
//   ...user, 
//   location: "Philadelphia",
//   age: 27
// });

