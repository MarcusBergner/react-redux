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
export const add = () => {
  return {
    type: ADD,
  };
};
/**
 * @subtract action creator function for synchronous code.
 * @returns actions.type: SUBTRACT
 */
export const subtract = () => {
  return {
    type: SUBTRACT,
  };
};
/**
 * @store_result action creator function for synchronous code.
 * @returns actions.type: STORE_RESULT
 */
export const store_result = () => {
  return {
    type: STORE_RESULT,
  };
};
/**
 * @delete_result action creator function for synchronous code.
 * @returns actions.type: DELETE_RESULT
 */
export const delete_result = () => {
  return {
    type: DELETE_RESULT,
  };
};
