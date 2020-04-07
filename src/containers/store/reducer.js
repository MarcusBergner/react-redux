const initialState = {
  counter: 0,
};

/**
 * if that reducer doesn't handle that action type you dispatched,
 * you have to return the current state to not break your app!
 * @param {*} state
 * @param {*} action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        counter: state.counter + action.value,
      };
    case "SUBTRACT":
      return {
        counter: state.counter - action.value,
      };
  }

  return state;
};
export default reducer;
