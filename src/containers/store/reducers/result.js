import * as actionTypes from "../actions/actionsTypes";
const initialState = {
  results: [],
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
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.results.splice(id, 1);
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }

  return state;
};
export default resultReducer;
