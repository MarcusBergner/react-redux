import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};
/**
 * The convention should be to use the action types as the name,
 * though not in all caps but in camel case!
 */
const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

/**
 * if that reducer doesn't handle that action type you dispatched,
 * you have to return the current state to not break your app!
 * Note: all multible reducers get merged together into the end, too one global state!
 * @param {*} state
 * @param {*} action
 */
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Change data
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2,
        }),
      });

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.results.splice(id, 1);

      return deleteResult(state, action);
    // return {
    //   ...state,
    //   results: updatedArray,
    // };
  }

  return state;
};
export default resultReducer;
