import * as actionTypes from "./actionsTypes";

/**
 * typically case for create asynchronous actions, with a synchronous action creator,
 * which in the end dispatch actions created by synchronous ones!
 * @store_result action creator function for synchronous code.
 * @returns actions.type: STORE_RESULT
 */
export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
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
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};
