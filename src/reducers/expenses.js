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

export default expensesReducer;