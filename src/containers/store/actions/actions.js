export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

// for a action-creator-function the convention is to use the same name as your identifier!!
/**
 * @increment action creator function for synchronous code.
 * @returns actions.type: INCREMENT
 */
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
/**
 * @decrement action creator function for synchronous code.
 * @returns actions.type: DECREMENT
 */
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
/**
 * @add action creator function for synchronous code.
 * @returns actions.type: ADD
 */
export const add = (value) => {
  return {
    type: ADD,
    val: value,
  };
};
/**
 * @subtract action creator function for synchronous code.
 * @returns actions.type: SUBTRACT
 */
export const subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value,
  };
};
/**
 * typically case for create asynchronous actions, with a synchronous action creator,
 * which in the end dispatch actions created by synchronous ones!
 * @store_result action creator function for synchronous code.
 * @returns actions.type: STORE_RESULT
 */
export const saveResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res,
  };
};
/**
 * simulate that prior to this action reached out to a server to store it there..
 * and only update our state once this one's successful, for example..
 *@dispatch reference for dispatch some actions asynchronously inside setTimeout()
 * this will executed by redux-thunk lib.package
 * @param {*} res
 * @returns action.type: saveResult() -> actually updates the state and the store
 */
export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 40000);
  };
};

/**
 * @delete_result action creator function for synchronous code.
 * @returns actions.type: DELETE_RESULT
 */
export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId,
  };
};
