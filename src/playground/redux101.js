import { createStore } from 'redux';


// Action generators - functions that return action objects

// const add = ( {a, b} ) => {
//   return a + b;
// }

// console.log(add({a: 1, b: 12}));


const incrementCount = ( { incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = ( ) => ({
  type: 'RESET'
});

const setCount = ( { set = 1 } = {} ) => ({
  type: 'SET',
  set
});


// reducers
// 1. reducers are pure functions - meaning they dont interact with outside scope
// 2. never change state or action inside of the reducer


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT': 
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
    return {
      count: action.set
    };
    case 'RESET': 
      return {
        count: 0
      };
    default: return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe( ( ) => {
  console.log(store.getState());
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount( { incrementBy: 10 } ), decrementCount( { decrementBy: 5 } ));
store.dispatch(decrementCount( { decrementBy: 5 } ));
store.dispatch(setCount({ set: 30 }));
store.dispatch(resetCount());


unsubscribe();