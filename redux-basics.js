// create erverything that we need to use redux

const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
/**
 *
 * @param {*} state
 * @param {*} action
 * @Note  you have to copy it first too, so that you never mutate any data.
 * Always do this immutable !
 * @returns an updated Counter or an updated state with an updated counter
 * upon the INC_COUNTER action here.
 */
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};
// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
/**
 * @subscribe() getting triggered whenever the state is updated!
 */
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});
// Dispatching Action
/**
 * @dispatch needs to have a "type" property. Nameconvention for type: "UPPERCASE STRING"
 * getting the information which type of action was dispatched
 */
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
