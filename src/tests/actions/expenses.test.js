import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// REMOVE
test('should setup remove expense action', () => {
  const action = removeExpense( {id: '123abc'} );
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  }); 
});

// EDIT
test('should setup edit expense action', () => {
  const action = editExpense( '123abc', {note: 'New note value'} );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  }); 
});

// ADD
test('should setup add expense action', () => {
  const expenseData = {
    description: 'rent',
    note: 'cheap',
    amount: 20000,
    createdAt: 1000 
  }
  const action = addExpense( expenseData );
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  }); 
});

// ADD default
test('should setup default add expense action', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description:'',
      note: '',
      amount: 0,
      createdAt: 0 
    }
  }); 
});

