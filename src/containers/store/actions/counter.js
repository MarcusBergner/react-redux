import * as actionTypes from "./actionTypes";

/**
 * @increment action creator function for synchronous code.
 * @returns actions.type: INCREMENT
 */
export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};
/**
 * @decrement action creator function for synchronous code.
 * @returns actions.type: DECREMENT
 */
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};
/**
 * @add action creator function for synchronous code.
 * @returns actions.type: ADD
 */
export const add = (value) => {
  return {
    type: actionTypes.ADD,
    val: value,
  };
};
/**
 * @subtract action creator function for synchronous code.
 * @returns actions.type: SUBTRACT
 */
export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value,
  };
};
