import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  counter: 0,
};

/**
 * Reducers: most of the time, it's old state + action +
 * optionally action data and you return a new state!
 * if that reducer doesn't handle that action type you dispatched,
 * you have to return the current state to not break your app!
 * @param {*} state
 * @param {*} action
 */
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1;
      // return newState;
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });

    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });
  }

  return state;
};
export default counterReducer;
