// ---------------------------------------- filters' actions

// I created just one action that requires passing a prop "sortBy what?", alternatively can create seperate actions for each type of prop, in my action default value is "date", otherwise can pass other value while dispatching action, like "amount"
// can also just set startDate without =undefined - result will be the same

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_BY_FILTER
export const sortByFilter = (sortBy = 'date') => ({
  type: "SORT_BY_FILTER",
  sortBy
});

//SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});