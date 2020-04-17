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
 * @store_result action creator function for synchronous code.
 * @returns actions.type: STORE_RESULT
 */
export const saveResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res,
  };
};
export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
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
